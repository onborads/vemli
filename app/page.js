import StaticPage from "@/components/StaticPage";
import AiBusinessIntelligence from "@/components/AiBusinessIntelligence";
import HomePricingCta from "@/components/HomePricingCta";
import FaqSection from "@/components/FaqSection";
import { getPageMetadata } from "@/app/lib/metadata";

export const metadata = getPageMetadata("/");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Vemli POS in Action",
            description:
              "See how Vemli POS handles orders, inventory, payments, and staff management for restaurants and retail businesses in Ghana.",
            thumbnailUrl:
              "https://img.youtube.com/vi/P3s7kDgc3Wg/maxresdefault.jpg",
            uploadDate: "2026-01-01",
            embedUrl: "https://www.youtube.com/embed/P3s7kDgc3Wg",
            contentUrl: "https://www.youtube.com/watch?v=P3s7kDgc3Wg",
          }),
        }}
      />
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
    </>
  );
}
