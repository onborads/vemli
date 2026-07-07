import StaticPage from '@/components/StaticPage';

export const metadata = {
  title: 'Yoco',
};

export default function Page() {
  return <StaticPage sourcePath="yoco/index.html" title="Yoco" />;
}
