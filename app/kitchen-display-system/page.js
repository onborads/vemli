import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/kitchen-display-system');

export default function Page() {
  return <StaticPage sourcePath="kitchen-display-system/index.html" title="Kitchen Display System" />;
}
