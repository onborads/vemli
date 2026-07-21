const SITE_NAME = "Vemli POS";
const SITE_URL = "https://vemli.co";
const DEFAULT_DESCRIPTION =
  "Vemli POS is a complete restaurant and retail point of sale system built for Ghanaian businesses. Manage orders, inventory, payments, staff, and get real-time analytics.";
const HOME_IMAGE = `${SITE_URL}/vemli-pos-backdrop-1.png`;
const DEFAULT_IMAGE = `${SITE_URL}/logo_white-nobg.png`;

const pageMetadata = {
  "/": {
    title: "Vemli POS | Restaurant & Retail POS System — Ghana",
    description:
      "Complete restaurant and retail POS for Ghanaian businesses. Real-time sales, inventory, staff performance, and AI-powered insights — all in one system.",
  },
  "/features": {
    title: "Features | Vemli POS — Complete Restaurant & Retail POS",
    description:
      "Explore Vemli POS features: point of sale, inventory management, sales analytics, employee tracking, multi-store management, and AI-powered business insights for Ghana.",
  },
  "/get-started": {
    title: "Get Started | Vemli POS — Restaurant & Retail POS Ghana",
    description:
      "Contact Vemli POS to get started. Call +233 24 069 9506, email info@vemli.co, or chat on WhatsApp. Support available 8AM–8PM with 1-hour response time.",
  },
  "/signup": {
    title: "Sign Up | Vemli POS — Restaurant & Retail POS Ghana",
    description:
      "Create your Vemli POS account and start managing your restaurant, retail store, or business with smart POS software built for Ghana.",
  },
  "/pricing": {
    title: "Pricing | Vemli POS — Affordable Plans for Ghana Businesses",
    description:
      "Simple, honest pricing for Vemli Core. Starter, Growth, Business, and Enterprise plans with transparent monthly and annual options for Ghanaian businesses.",
  },
  "/restaurants-pos": {
    title: "Restaurant POS | Vemli POS — Table, KOT & Kitchen Display",
    description:
      "Vemli Restaurant POS handles tables, kitchen order tickets, split bills, and modifiers. Built for restaurants, bars, pizzerias, and fast food in Ghana.",
  },
  "/retail-pos": {
    title: "Retail POS | Vemli POS — Inventory, Sales & Customer Management",
    description:
      "Vemli Retail POS helps shops manage inventory, process sales, track customers, and run loyalty programs. Built for retail stores, pharmacies, and boutiques in Ghana.",
  },
  "/vemli-pos": {
    title: "Vemli POS — Restaurant & Retail Point of Sale System Ghana",
    description:
      "Vemli POS is a smart, all-in-one point of sale system for restaurants and retail businesses in Ghana. Works offline, supports mobile money, and includes AI insights.",
  },
  "/integrations": {
    title: "Integrations | Vemli POS — Connect Your Business Tools",
    description:
      "Connect Vemli POS with accounting software, ecommerce platforms, delivery apps, and marketing tools. Use the Vemli API for custom integrations.",
  },
  "/hardware": {
    title: "POS Hardware | Vemli POS — Printers, Scanners & Tablet Stands",
    description:
      "Recommended POS hardware for Vemli: receipt printers, barcode scanners, cash drawers, tablet stands, and customer displays compatible with Ghanaian businesses.",
  },
  "/dashboard": {
    title: "Dashboard | Vemli POS — Real-Time Sales & Inventory Analytics",
    description:
      "Access live sales data, inventory levels, and business performance from anywhere with the Vemli POS dashboard. Available on web, tablet, and smartphone.",
  },
  "/back-office": {
    title: "Back Office | Vemli POS — Manage Your Business From Anywhere",
    description:
      "Vemli Back Office lets you manage products, employees, stores, and reports from any browser. Full control over your restaurant or retail business from one place.",
  },
  "/advanced-inventory": {
    title: "Inventory Management | Vemli POS — Stock Tracking & Alerts",
    description:
      "Track stock in real time, get low-stock alerts, manage purchase orders, and transfer inventory between stores with Vemli POS advanced inventory management.",
  },
  "/employee-management": {
    title: "Employee Management | Vemli POS — Staff Tracking & Performance",
    description:
      "Track sales by employee, manage access rights, clock in/out, and monitor staff performance with Vemli POS employee management tools.",
  },
  "/payment-systems": {
    title: "Payment Systems | Vemli POS — Accept Mobile Money & Cards",
    description:
      "Accept cash, mobile money (MTN, Vodafone, AirtelTigo), and card payments with Vemli POS integrated payment solutions for Ghanaian businesses.",
  },
  "/multi-store-pos": {
    title: "Multi-Store POS | Vemli POS — Manage Multiple Locations",
    description:
      "Run multiple stores from one Vemli POS account. Compare performance, manage inventory, employees, and customers across all locations in real time.",
  },
  "/kitchen-display-system": {
    title: "Kitchen Display System | Vemli POS — KOT & Order Management",
    description:
      "Vemli KDS sends orders straight from the till to the kitchen. Manage kitchen order tickets, track order status, and speed up service for restaurants.",
  },
  "/customer-display-system": {
    title: "Customer Display System | Vemli POS — Self-Ordering & Kiosks",
    description:
      "Vemli CDS shows order totals, items, and loyalty points to customers at checkout. Improve transparency and speed with customer-facing displays.",
  },
  "/bar-pos": {
    title: "Bar POS | Vemli POS — Drink Sales & Tab Management",
    description:
      "Vemli Bar POS handles drink sales, tabs, inventory control, and staff management. Built for bars, pubs, and nightlife venues in Ghana.",
  },
  "/cafe-pos": {
    title: "Cafe POS | Vemli POS — Coffee Shop & Quick Service",
    description:
      "Vemli Cafe POS streamlines orders, payments, and inventory for coffee shops and quick-service cafes. Simple, fast, and built for Ghanaian businesses.",
  },
  "/grocery-pos": {
    title: "Grocery POS | Vemli POS — Convenience & Retail Store Management",
    description:
      "Vemli Grocery POS manages stock, sales, suppliers, and customer loyalty for grocery stores and convenience shops across Ghana.",
  },
  "/small-business-pos": {
    title: "Small Business POS | Vemli POS — Simple POS for Growing Businesses",
    description:
      "Vemli Small Business POS is an easy-to-use, affordable point of sale for growing businesses. Track sales, inventory, and customers without complexity.",
  },
  "/fashion-boutiques-pos": {
    title: "Fashion POS | Vemli POS — Boutique & Clothing Store Management",
    description:
      "Vemli Fashion POS helps clothing stores manage inventory by size and color, process sales, and build customer loyalty. Built for boutiques in Ghana.",
  },
  "/anviz-attendance": {
    title: "Time & Attendance | Vemli POS — Biometric Staff Tracking",
    description:
      "Track staff attendance with Vemli POS or add Anviz biometric devices for fingerprint clock-in/out. Automatic work-hour calculation and access control included.",
  },
  "/blog": {
    title: "Blog | Vemli POS — Tips, Guides & POS Insights",
    description:
      "Read the latest Vemli POS blog for tips on restaurant management, retail growth, POS software, inventory control, and business insights for Ghana.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Vemli POS",
    description: "Vemli POS privacy policy outlines how we collect, use, and protect your personal and business data.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Vemli POS",
    description: "How Vemli POS uses cookies to operate the website, remember preferences, and analyze traffic.",
  },
  "/terms-use": {
    title: "Terms of Use | Vemli POS",
    description: "Terms and conditions for using Vemli POS software and services in Ghana.",
  },
  "/terms-third-party-integration": {
    title: "Terms of Third-Party Integration | Vemli POS",
    description: "Terms governing third-party integrations with Vemli POS, including API usage and data sharing policies.",
  },
  "/vemli-api": {
    title: "Vemli API | Restaurant & Retail POS Integration",
    description:
      "Use the Vemli API to build custom integrations with your existing accounting, ecommerce, and business tools. Developer-friendly REST API for Ghana businesses.",
  },
};

export function getPageMetadata(pathname) {
  const meta = pageMetadata[pathname] || {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${SITE_URL}${pathname === "/" ? "" : pathname}/`,
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${pathname === "/" ? "" : pathname}/`,
      title: meta.title,
      description: meta.description,
      images: [{ url: pathname === "/" ? HOME_IMAGE : DEFAULT_IMAGE }],
      siteName: SITE_NAME,
      locale: "en_GH",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [pathname === "/" ? HOME_IMAGE : DEFAULT_IMAGE],
    },
  };
}

export function getPageTitle(pathname) {
  return pageMetadata[pathname]?.title || SITE_NAME;
}

export function getPageDescription(pathname) {
  return pageMetadata[pathname]?.description || DEFAULT_DESCRIPTION;
}
