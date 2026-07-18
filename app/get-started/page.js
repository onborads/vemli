import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCta from "@/components/PricingCta";

export const metadata = {
  title: "Get Started | Vemli Core",
  description:
    "Contact Vemli POS to get started. Call +233 24 069 9506, email info@vemli.co, or chat on WhatsApp. Support available 8AM–8PM with 1-hour response time.",
};

const structuredDataGetStarted = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Get Started with Vemli POS",
  description:
    "Contact Vemli POS to get started. Call +233 24 069 9506, email info@vemli.co, or chat on WhatsApp.",
  url: "https://vemli.co/get-started",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Vemli POS",
    telephone: "+233240699506",
    email: "info@vemli.co",
    url: "https://vemli.co",
    address: { "@type": "PostalAddress", addressCountry: "GH" },
    contactOption:
      "https://api.whatsapp.com/send/?phone=233261427273&text=Hello+Vemli+Core+Team%2C+I%27m+interested+in+your+POS+system.&type=phone_number&app_absent=0",
  },
};

export default function Page() {
  const now = new Date();
  const hour = now.getHours();

  const isAvailable = hour >= 8 && hour < 20;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataGetStarted),
        }}
      />
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isAvailable ? "bg-green-500 animate-pulse" : "bg-gray-400"
                    }`}
                  />

                  {isAvailable
                    ? "Available Now"
                    : "We're currently offline. Leave a message and we'll reply at 8:00 AM.."}
                </span>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Ready to simplify your business operations?
                </h1>

                <p className="mt-5 text-gray-600 text-lg">
                  Get started with Vemli and let our team help you transform the
                  way you manage sales, inventory, customers, and business
                  growth.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=233261427273&text=Hello+Vemli+Core+Team%2C+I%27m+interested+in+your+POS+system.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 border border-gray-200 hover:border-blue-400 rounded-xl px-6 py-4 font-semibold text-white transition"
                  >
                    <i className="fab fa-whatsapp text-xl text-green-500" />
                    Chat on WhatsApp
                  </a>

                  <a
                    href="tel:+233240699506"
                    className="flex items-center justify-center gap-4 border border-gray-200 hover:border-blue-400 rounded-xl px-6 py-4 font-semibold text-white transition shadow-lg shadow-blue-200"
                  >
                    <i className="fas fa-phone" />
                    Call +233 24 069 9506
                  </a>

                  <a
                    href="mailto:info@vemli.co"
                    className="flex items-center justify-center gap-3 border border-gray-200 hover:border-blue-400 rounded-xl px-6 py-4 font-semibold text-gray-800 transition"
                  >
                    <i className="fas fa-envelope text-blue-500" />
                    info@vemli.co
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <b className="block text-gray-900 text-lg">1hr</b>
                    <span className="text-xs text-gray-500">Response</span>
                  </div>

                  <div>
                    <b className="block text-gray-900 text-lg">8AM-8PM</b>
                    <span className="text-xs text-gray-500">Support</span>
                  </div>

                  <div>
                    <b className="block text-gray-900 text-lg">✓</b>
                    <span className="text-xs text-gray-500">Trusted</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative min-h-[520px] overflow-hidden">
                <img
                  src="/sites/all/themes/vemli/images/customer service-Photoroom.png"
                  alt="Vemli Core POS Dashboard"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-sm text-blue-600 font-semibold">
                      Vemli IT Services
                    </p>
                  </div>

                  <h2 className="font-bold text-gray-900 text-xl">
                    Smart Business Management
                  </h2>

                  <p className="text-sm text-gray-600 mt-2">
                    Manage sales, inventory, customers, and reports from one
                    powerful platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <p className="text-center text-gray-400 text-sm mt-8">
            We're here to help you succeed.
          </p>

          <PricingCta label="See our pricing" />
        </section>
      </main>

      <Footer />
    </>
  );
}
