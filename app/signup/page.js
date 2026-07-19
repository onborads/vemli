import StaticPage from '@/components/StaticPage';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/signup');

export default function Page() {
  return <StaticPage sourcePath="signup/index.html" title="Signup" />;
}
