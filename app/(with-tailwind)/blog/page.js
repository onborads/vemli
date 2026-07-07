import StaticPage from '@/components/StaticPage';

export const metadata = {
  title: 'Blog',
};

export default function Page() {
  return <StaticPage sourcePath="blog/index.html" title="Blog" />;
}
