import fs from "fs";
import path from "path";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function readHtml(sourceFile) {
  return fs.readFileSync(path.join(process.cwd(), sourceFile), "utf8");
}

function extractHeadHtml(sourceFile) {
  const html = readHtml(sourceFile);
  const match = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  return match ? match[1] : "";
}

function extractBodyHtml(sourceFile) {
  const html = readHtml(sourceFile);
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!match) {
    return "";
  }

  const bodyContent = match[1];
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

  return bodyContent
    .replace(/<!-- HEADER -->/g, "")
    .replace(/<!-- FOOTER -->/g, "");
}

export default function PageRenderer({ sourceFile, title }) {
  const headHtml = extractHeadHtml(sourceFile);
  const bodyHtml = extractBodyHtml(sourceFile);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="en" />
        <script dangerouslySetInnerHTML={{ __html: headHtml }} />
      </Head>
      <Header />
      <div
        className="page-shell"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
      <Footer />
    </>
  );
}
