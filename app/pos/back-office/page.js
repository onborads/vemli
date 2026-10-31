import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/pos/back-office');

export default function Page() {
  return <StaticPage sourcePath="back-office/index.html" title="Back Office" />;
}
