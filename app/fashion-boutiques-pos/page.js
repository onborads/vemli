import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/fashion-boutiques-pos');

export default function Page() {
  return <StaticPage sourcePath="fashion-boutiques-pos/index.html" title="Fashion Boutiques Pos" />;
}
