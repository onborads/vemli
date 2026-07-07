import StaticPage from '@/components/StaticPage';

export const metadata = {
  title: 'Tyro',
};

export default function Page() {
  return <StaticPage sourcePath="tyro/index.html" title="Tyro" />;
}
