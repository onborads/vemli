import StaticPage from "@/components/StaticPage";
import AiBusinessIntelligence from "@/components/AiBusinessIntelligence";
import HomePricingCta from "@/components/HomePricingCta";
import FaqSection from "@/components/FaqSection";
import { getPageMetadata } from "@/app/lib/metadata";

export const metadata = getPageMetadata("/pos");

const structuredDataSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vemli POS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Complete restaurant and retail point of sale system for Ghanaian businesses. Includes order management, inventory tracking, staff performance, real-time analytics, WhatsApp and Slack notifications, and hotel PMS integration.",
  url: "https://vemli.co/pos/",
  offers: [
    { "@type": "Offer", name: "Standard Plan", price: "299", priceCurrency: "GHS", description: "For retail shops and pharmacies. Up to 2 terminals." },
    { "@type": "Offer", name: "Hospitality Plan", price: "799", priceCurrency: "GHS", description: "For restaurants, bars, and hotels. Up to 3 terminals." },
  ],
  provider: {
    "@type": "Organization",
    name: "Vemli POS",
    url: "https://vemli.co",
    telephone: "+233261427273",
    email: "info@vemli.co",
    address: { "@type": "PostalAddress", addressCountry: "GH" },
    sameAs: ["https://vemli.co"],
  },
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Vemli POS?", acceptedAnswer: { "@type": "Answer", text: "Vemli POS is a complete restaurant and retail point of sale system built for Ghanaian businesses. It handles orders, inventory, payments, staff management, and real-time analytics." } },
    { "@type": "Question", name: "Does Vemli POS work for hotels?", acceptedAnswer: { "@type": "Answer", text: "Yes. Vemli POS integrates with hotel management systems like Opera and Protel, allowing restaurant charges to be posted directly to a guest's hotel room folio." } },
    { "@type": "Question", name: "How much does Vemli POS cost in Ghana?", acceptedAnswer: { "@type": "Answer", text: "Vemli POS offers two plans: the Standard Plan at GH₵299/month for retail shops and pharmacies, and the Hospitality Plan at GH₵799/month for restaurants, bars, and hotels." } },
    { "@type": "Question", name: "Does Vemli POS support WhatsApp notifications?", acceptedAnswer: { "@type": "Answer", text: "Yes. Vemli POS sends order confirmations and payment receipts via WhatsApp, and can deliver daily sales summaries and alerts to your WhatsApp and Slack." } },
    { "@type": "Question", name: "Can I use Vemli POS for multiple locations?", acceptedAnswer: { "@type": "Answer", text: "Yes. The Custom Plan supports multiple branches and unlimited terminals. Contact sales for a tailored quote." } },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }}
      />
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
