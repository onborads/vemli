import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/advanced-inventory');

export default function Page() {
  return (
    <>
      <StaticPage sourcePath="advanced-inventory/index.html" title="Advanced Inventory" />
    </>
  );
}
