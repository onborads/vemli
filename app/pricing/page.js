import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingContent from '@/components/PricingContent';

export const metadata = {
  title: 'Pricing',
  description:
    'Simple, honest pricing for Vemli Core. Starter, Growth, Business, and Enterprise plans with transparent monthly and annual options.',
};

export default function Page() {
  return (
    <>
      <Header />
      <PricingContent />
      <Footer />
    </>
  );
}
