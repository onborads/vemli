export default function RawHtml({ html }) {
  return <div className="static-page-raw-html" dangerouslySetInnerHTML={{ __html: html }} />;
}
