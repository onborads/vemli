import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/pos/features');

export default function Page() {
  return <StaticPage sourcePath="features/index.html" title="Features" />;
}
