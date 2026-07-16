import "./globals.css";
import "./tailwind.css";
import VideoModal from "@/components/VideoModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Vemli POS | Restaurant & Retail Point of Sale System — Ghana",
  description:
    "Vemli POS is a complete restaurant and retail point of sale system built for Ghanaian businesses. Manage orders, inventory, payments, staff, and get real-time analytics. Trusted by restaurants, bars, hotels, and pharmacies across Ghana.",
  keywords:
    "POS system Ghana, restaurant POS Ghana, point of sale Ghana, retail POS, hotel POS, bar POS, inventory management Ghana, order management, payment system Ghana, Accra POS system, Kumasi restaurant software, Vemli POS",
  authors: [{ name: "Vemli POS" }],
  robots: "index, follow",
  alternates: { canonical: "https://vemli.co/" },
  openGraph: {
    type: "website",
    url: "https://vemli.co/",
    title: "Vemli POS | Restaurant & Retail POS System — Ghana",
    description:
      "Complete restaurant and retail POS for Ghanaian businesses. Real-time sales, inventory, staff performance, and AI-powered insights — all in one system.",
    images: [{ url: "https://vemli.co/logo_white-nobg.png" }],
    siteName: "Vemli POS",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vemli POS | Restaurant & Retail POS System — Ghana",
    description:
      "Complete restaurant and retail POS for Ghanaian businesses. Real-time sales, inventory, staff performance, and AI-powered insights.",
    images: ["https://vemli.co/logo_white-nobg.png"],
  },
};

const structuredDataSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vemli POS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Complete restaurant and retail point of sale system for Ghanaian businesses. Includes order management, inventory tracking, staff performance, real-time analytics, WhatsApp and Slack notifications, and hotel PMS integration.",
  url: "https://vemli.co",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-1WPQPDXEBV');` }} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://vemli.co/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/sites/default/files/css/css_4AyeZIVOK6vOdrM2wPNPNf1B0sEjh8ih4C0weklEe0o.css?delta=0&language=en&theme=vemli&include=eJxNyEEOgDAIBMAPobypVWyaQEm6WMPvTTx5mcOo55IJOdz48hEg_U1Tr0U3RGofjZAIMa4FQqvLA_7czc9b5QV5rx3T" />
        <link rel="stylesheet" href="/sites/all/themes/vemli/css/css2.css?family=Roboto:wght@300;400;500;700&family=Nunito:wght@700&display=fallback" />
        <link rel="stylesheet" href="/sites/default/files/css/css_MWfpnXbYPHcH5RVr3X1vaEo69PpFzoaVsTovdGSV4QY.css?delta=2&language=en&theme=vemli&include=eJxNyEEOgDAIBMAPobypVWyaQEm6WMPvTTx5mcOo55IJOdz48hEg_U1Tr0U3RGofjZAIMa4FQqvLA_7czc9b5QV5rx3T" />
        <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('click',function(e){var a=e.target.closest('a[href^="#"]');if(!a)return;var r=a.getAttribute('href');if(!r||r==='#')return;var t=document.querySelector(r);if(!t)return;e.preventDefault();var n=t.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:n,behavior:'smooth'});history.pushState(null,null,r);});` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataSoftware) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-1WPQPDXEBV" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {children}
        <SmoothScroll />
        <VideoModal />
        <WhatsAppButton />
      </body>
    </html>
  );
}
