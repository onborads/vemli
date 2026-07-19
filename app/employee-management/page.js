import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/employee-management');

export default function Page() {
  return <StaticPage sourcePath="employee-management/index.html" title="Employee Management" />;
}
