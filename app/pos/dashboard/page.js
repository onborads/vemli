import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/pos/dashboard');

export default function Page() {
  return <StaticPage sourcePath="dashboard/index.html" title="Dashboard" />;
}
