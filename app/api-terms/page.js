import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/api-terms');

export default function Page() {
  return <StaticPage sourcePath="api-terms/index.html" title="Api Terms" />;
}
