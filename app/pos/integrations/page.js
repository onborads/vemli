import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntegrationsContent from "@/components/IntegrationsContent";
import { getPageMetadata } from '@/app/lib/metadata';

export const metadata = getPageMetadata('/pos/integrations');

export default function Page() {
  return (
    <>
      <Header />
      <IntegrationsContent />
      <Footer />
    </>
  );
}
