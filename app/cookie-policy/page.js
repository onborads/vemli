import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/cookie-policy');

export default function Page() {
  return <StaticPage sourcePath="cookie-policy/index.html" title="Cookie Policy" />;
}
