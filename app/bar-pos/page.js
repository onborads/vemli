import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/bar-pos');

export default function Page() {
  return <StaticPage sourcePath="bar-pos/index.html" title="Bar Pos" />;
}
