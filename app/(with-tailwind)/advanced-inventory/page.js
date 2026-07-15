import StaticPage from '@/components/StaticPage';
import VideoModal from '@/components/VideoModal';

export const metadata = {
  title: 'Advanced Inventory',
};

export default function Page() {
  return (
    <>
      <StaticPage sourcePath="advanced-inventory/index.html" title="Advanced Inventory" />
      <VideoModal label="Watch In Action" />
    </>
  );
}
