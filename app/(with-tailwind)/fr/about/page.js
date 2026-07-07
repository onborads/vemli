import StaticPage from '@/components/StaticPage';

export const metadata = { title: 'About' };

export default function Page() {
  return <StaticPage sourcePath="fr/about/index.html" title="About" />;
}
