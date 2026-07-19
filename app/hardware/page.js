import StaticPage from "@/components/StaticPage";
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/hardware');

export default function Page() {
  return <StaticPage sourcePath="hardware/index.html" title="Hardware" />;
}
