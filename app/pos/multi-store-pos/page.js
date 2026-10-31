import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/pos/multi-store-pos');

export default function Page() {
  return <StaticPage sourcePath="multi-store-pos/index.html" title="Multi Store Pos" />;
}
