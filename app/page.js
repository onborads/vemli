import StaticPage from '@/components/StaticPage';
import AiBusinessIntelligence from '@/components/AiBusinessIntelligence';
import HomePricingCta from '@/components/HomePricingCta';
import FaqSection from '@/components/FaqSection';

export const metadata = { title: 'Vemli' };

export default function Page() {
  return (
    <StaticPage
      sourcePath="index.html"
      title="Vemli"
      splitMarker='<section class="hp_tools">'
      excludeMarker='<section class="section-faq">'
      afterChildren={<FaqSection />}
    >
      <HomePricingCta />
      <AiBusinessIntelligence />
    </StaticPage>
  );
}
