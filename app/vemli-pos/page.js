import StaticPage from "@/components/StaticPage";
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/vemli-pos');

export default function Page() {
  return (
    <StaticPage sourcePath="vemli-pos/index.html" title="Download Vemli" />
  );
}
