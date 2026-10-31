import "./globals.css";
import "./tailwind.css";
import VideoModal from "@/components/VideoModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Vemli IT Services | Technology Solutions in Ghana",
  description:
    "Vemli IT Services provides technology solutions and business software for organizations in Ghana.",
  keywords: "Vemli IT Services, technology solutions, business software, Ghana",
  authors: [{ name: "Vemli IT Services" }],
  robots: "index, follow",
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon-64x64.png",
  },
  openGraph: {
    type: "website",
    title: "Vemli IT Services | Technology Solutions in Ghana",
    description:
      "Vemli IT Services provides technology solutions and business software for organizations in Ghana.",
    images: [{ url: "https://vemli.co/logo_white-nobg.png" }],
    siteName: "Vemli IT Services",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vemli IT Services | Technology Solutions in Ghana",
    description:
      "Vemli IT Services provides technology solutions and business software for organizations in Ghana.",
    images: ["https://vemli.co/logo_white-nobg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-1WPQPDXEBV');` }} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/sites/default/files/css/css_4AyeZIVOK6vOdrM2wPNPNf1B0sEjh8ih4C0weklEe0o.css?delta=0&language=en&theme=vemli&include=eJxNyEEOgDAIBMAPobypVWyaQEm6WMPvTTx5mcOo55IJOdz48hEg_U1Tr0U3RGofjZAIMa4FQqvLA_7czc9b5QV5rx3T" />
        <link rel="stylesheet" href="/sites/all/themes/vemli/css/css2.css?family=Roboto:wght@300;400;500;700&family=Nunito:wght@700&display=fallback" />
        <link rel="stylesheet" href="/sites/default/files/css/css_MWfpnXbYPHcH5RVr3X1vaEo69PpFzoaVsTovdGSV4QY.css?delta=2&language=en&theme=vemli&include=eJxNyEEOgDAIBMAPobypVWyaQEm6WMPvTTx5mcOo55IJOdz48hEg_U1Tr0U3RGofjZAIMa4FQqvLA_7czc9b5QV5rx3T" />
        <script src="/js/smooth-scroll.js" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-1WPQPDXEBV" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {children}
        <VideoModal />
        <WhatsAppButton />
      </body>
    </html>
  );
}
