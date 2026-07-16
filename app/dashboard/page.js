import StaticPage from '@/components/StaticPage';

export const metadata = {
  title: 'Dashboard',
};

export default function Page() {
  return <StaticPage sourcePath="dashboard/index.html" title="Dashboard" />;
}
