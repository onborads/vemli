import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/cafe-pos');

export default function Page() {
  return <StaticPage sourcePath="cafe-pos/index.html" title="Cafe Pos" />;
}
