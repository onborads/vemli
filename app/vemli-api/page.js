import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/vemli-api');

export default function Page() {
  return <StaticPage sourcePath="vemli-api/index.html" title="Vemli Pos Api" />;
}
