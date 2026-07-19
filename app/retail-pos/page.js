import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/retail-pos');

export default function Page() {
  return <StaticPage sourcePath="retail-pos/index.html" title="Retail Pos" />;
}
