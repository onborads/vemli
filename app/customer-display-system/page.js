import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/customer-display-system');

export default function Page() {
  return <StaticPage sourcePath="customer-display-system/index.html" title="Customer Display System" />;
}
