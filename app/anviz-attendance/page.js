import fs from "fs";
import path from "path";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/anviz-attendance');

const SCOPE_RESET = `
.anviz-scope h1,.anviz-scope h2,.anviz-scope h3,.anviz-scope h4,.anviz-scope h5,.anviz-scope h6 {
  font-size: revert; font-weight: revert; margin: revert;
}
.anviz-scope ul, .anviz-scope ol { list-style: revert; margin: revert; padding: revert; }
.anviz-scope li { display: revert; }
.anviz-scope img { display: revert; max-width: revert; }
.anviz-scope a { color: revert; text-decoration: revert; }
.anviz-scope p { margin: revert; }
`;

export default function Page() {
  const filePath = path.join(
    process.cwd(),
    "public/time-attendance-solution/index.html"
  );
  const html = fs.readFileSync(filePath, "utf8");

  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const headHtml = headMatch ? headMatch[1] : "";
  const headStyles = [...headHtml.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((m) => m[1])
    .join("\n");

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : "";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCOPE_RESET + headStyles }} />
      <Header />
      <div
        className="anviz-scope"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
      <Footer />
    </>
  );
}
