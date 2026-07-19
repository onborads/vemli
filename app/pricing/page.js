import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingContent from '@/components/PricingContent';
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/pricing');

export default function Page() {
  return (
    <>
      <Header />
      <PricingContent />
      <Footer />
    </>
  );
}
