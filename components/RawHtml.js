export default function RawHtml({ html }) {
  return <div className="static-page-raw-html" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
