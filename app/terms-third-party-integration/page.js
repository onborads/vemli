import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/terms-third-party-integration');

export default function Page() {
  return <StaticPage sourcePath="terms-third-party-integration/index.html" title="Terms Third Party Integration" />;
}
