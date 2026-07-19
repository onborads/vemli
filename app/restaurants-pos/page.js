import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/restaurants-pos');

export default function Page() {
  return <StaticPage sourcePath="restaurants-pos/index.html" title="Restaurants Pos" />;
}
