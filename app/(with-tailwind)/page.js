import StaticPage from '@/components/StaticPage';
import VideoModal from '@/components/VideoModal';

export const metadata = { title: 'Vemli' };

export default function Page() {
  return (
    <>
      <StaticPage sourcePath="index.html" title="Vemli" />
      <VideoModal label="Watch In Action" />
    </>
  );
}
