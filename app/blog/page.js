import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/blog');

export default function Page() {
  return <StaticPage sourcePath="blog/index.html" title="Blog" />;
}
