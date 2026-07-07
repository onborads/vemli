import fs from "fs";
import path from "path";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function readHtml(sourceFile) {
  const fullPath = path.join(process.cwd(), sourceFile);
  return fs.readFileSync(fullPath, "utf8");
}

function extractHeadHtml(sourceFile) {
  const html = readHtml(sourceFile);
  const match = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  return match ? match[1] : "";
}

function extractStylesheetLinks(sourceFile) {
  const html = readHtml(sourceFile);
  const headHtml = extractHeadHtml(sourceFile);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : "";

  const combinedHtml = headHtml + bodyHtml;
  const matches = [...combinedHtml.matchAll(/<link\b([^>]*?)>/gi)];

  return matches
    .map((match) => match[1])
    .filter((attrs) => /\brel\s*=\s*["']stylesheet["']/i.test(attrs))
    .map((attrs, index) => {
      if (attrs.includes('login/styles.css')) {
        console.log('DEBUG: Found login/styles.css in', sourceFile);
      }
      const props = {};
      const attrPattern =
        /([a-zA-Z0-9:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
      let attrMatch;

      while ((attrMatch = attrPattern.exec(attrs)) !== null) {
        const [, name, doubleQuoted, singleQuoted, bareValue] = attrMatch;
        const value = doubleQuoted ?? singleQuoted ?? bareValue ?? "";
        props[name.toLowerCase()] = value;
      }

      return <link key={`stylesheet-${index}`} {...props} />;
    });
}

function extractBodyHtml(sourceFile) {
  const html = readHtml(sourceFile);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (!bodyMatch) {
    return "";
  }

  const bodyContent = bodyMatch[1];
  const headerMarker = bodyContent.indexOf("<!-- HEADER -->");
  const footerMarker = bodyContent.indexOf("<!-- FOOTER -->");

  if (headerMarker !== -1 && footerMarker !== -1) {
    return bodyContent
      .slice(headerMarker + "<!-- HEADER -->".length, footerMarker)
      .trim();
  }

  const mainMatch = bodyContent.match(/<main[^>]*>[\s\S]*?<\/main>/i);
  if (mainMatch) {
    return mainMatch[0].trim();
  }

  let cleaned = bodyContent
    .replace(/<div class="mainwrap"/i, '<div class="mainwrap"')
    .replace(/<div class="mainwrap"[\s\S]*?<!-- HEADER -->/i, "")
    .replace(/<!-- FOOTER -->[\s\S]*$/i, "")
    .replace(/<header[^>]*>[\s\S]*?<\/header>/i, "")
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, "");

  cleaned = cleaned.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  cleaned = cleaned.replace(/<script\b[^>]*\/>/gi, "");

  return cleaned.trim();
}

function extractScriptTags(sourceFile) {
  const html = readHtml(sourceFile);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return [];

  const bodyContent = bodyMatch[1];
  const footerMarker = bodyContent.indexOf("<!-- FOOTER -->");
  const mainMarker = bodyContent.match(/<\/main\s*>/i);
  
  let afterContent = "";
  if (footerMarker !== -1) {
    afterContent = bodyContent.slice(footerMarker + "<!-- FOOTER -->".length);
  } else if (mainMarker) {
    const mainEnd = mainMarker.index + mainMarker[0].length;
    afterContent = bodyContent.slice(mainEnd);
  } else {
    afterContent = bodyContent;
  }

  const matches = [...afterContent.matchAll(/<script\b([^>]*?)>/gi)];
  return matches
    .map((match, index) => {
      const attrs = match[1];
      const srcMatch = attrs.match(/src\s*=\s*["']([^"']+)["']/i);
      if (srcMatch) {
        return <script key={`footer-script-${index}`} src={srcMatch[1]} />;
      }
      return null;
    })
    .filter(Boolean);
}

export default function StaticPage({ sourcePath, title }) {
  const bodyHtml = extractBodyHtml(sourcePath);
  const stylesheetLinks = extractStylesheetLinks(sourcePath);
  const scriptTags = extractScriptTags(sourcePath);

  return (
    <>
      <Head>
        <title>{title}</title>
        {stylesheetLinks}
      </Head>
      <Header />
      <div>
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </div>
      {scriptTags}
      <Footer />
    </>
  );
}
