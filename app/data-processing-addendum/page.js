import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/data-processing-addendum');

export default function Page() {
  return <StaticPage sourcePath="data-processing-addendum/index.html" title="Data Processing Addendum" />;
}
