import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/small-business-pos');

export default function Page() {
  return <StaticPage sourcePath="small-business-pos/index.html" title="Small Business Pos" />;
}
