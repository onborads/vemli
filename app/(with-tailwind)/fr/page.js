import StaticPage from '@/components/StaticPage';

export const metadata = {
  title: 'Fr',
};

export default function Page() {
  return <StaticPage sourcePath="fr/index.html" title="Fr" />;
}
