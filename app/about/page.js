import StaticPage from '@/components/StaticPage';

export const metadata = {
  title: 'About',
};

export default function Page() {
  return <StaticPage sourcePath="about/index.html" title="About" />;
}
