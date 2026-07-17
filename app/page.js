import StaticPage from '@/components/StaticPage';
import AiBusinessIntelligence from '@/components/AiBusinessIntelligence';
import HomePricingCta from '@/components/HomePricingCta';

export const metadata = { title: 'Vemli' };

export default function Page() {
  return (
    <StaticPage
      sourcePath="index.html"
      title="Vemli"
      splitMarker='<section class="hp_tools">'
    >
      <HomePricingCta />
      <AiBusinessIntelligence />
    </StaticPage>
  );
}
