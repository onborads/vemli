import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/payment-systems');

export default function Page() {
  return <StaticPage sourcePath="payment-systems/index.html" title="Payment Systems" />;
}
