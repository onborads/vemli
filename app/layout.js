import "./globals.css";

export const metadata = {
  title: "Loyverse",
  description: "Loyverse POS website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/sites/default/files/css/css_4AyeZIVOK6vOdrM2wPNPNf1B0sEjh8ih4C0weklEe0o.css?delta=0&amp;language=en&amp;theme=loyversecom&amp;include=eJxNyEEOgDAIBMAPobypVWyaQEm6WMPvTTx5mcOo55IJOdz48hEg_U1Tr0U3RGofjZAIMa4FQqvLA_7czc9b5QV5rx3T"
        />
        <link
          rel="stylesheet"
          href="/sites/all/themes/loyversecom/css/css2.css?family=Roboto:wght@300;400;500;700&amp;family=Nunito:wght@700&amp;display=fallback"
        />
        <link
          rel="stylesheet"
          href="/sites/default/files/css/css_MWfpnXbYPHcH5RVr3X1vaEo69PpFzoaVsTovdGSV4QY.css?delta=2&amp;language=en&amp;theme=loyversecom&amp;include=eJxNyEEOgDAIBMAPobypVWyaQEm6WMPvTTx5mcOo55IJOdz48hEg_U1Tr0U3RGofjZAIMa4FQqvLA_7czc9b5QV5rx3T"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
