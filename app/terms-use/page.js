import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/terms-use');

export default function Page() {
  return <StaticPage sourcePath="terms-use/index.html" title="Terms Use" />;
}
