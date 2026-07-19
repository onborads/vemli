import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/grocery-pos');

export default function Page() {
  return <StaticPage sourcePath="grocery-pos/index.html" title="Grocery Pos" />;
}
