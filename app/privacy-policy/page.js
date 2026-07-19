import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/privacy-policy');

export default function Page() {
  return <StaticPage sourcePath="privacy-policy/index.html" title="Privacy Policy" />;
}
