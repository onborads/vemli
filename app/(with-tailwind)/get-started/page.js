import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Get Started | Vemli Core" };

export default function Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900">
        <div className="max-w-[640px] mx-auto px-6">
          <div className="text-center pt-12 pb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
              Get{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Started
              </span>
            </h1>
            <p className="text-gray-500 text-lg">
              Choose how you would like to reach our team. We respond quickly.
            </p>
          </div>

          <div className="grid gap-4 pb-12">
            <a
              href="https://wa.me/233240699506?text=Hello%20Vemli%20Core%20Team,%20I'm%20interested%20in%20your%20POS%20system.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-left transition-all duration-300 hover:border-blue-400 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-2xl shrink-0">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900">
                  WhatsApp (Fastest Response)
                </div>
                <div className="text-gray-500 text-sm">
                  Chat directly with our sales team
                </div>
                <div className="text-gray-900 text-sm font-semibold">
                  +233 24 069 9506
                </div>
              </div>
              <i className="fas fa-arrow-right text-gray-400 text-lg shrink-0"></i>
            </a>

            <a
              href="mailto:info@vemli.co"
              className="flex items-center gap-5 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-left transition-all duration-300 hover:border-blue-400 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 text-red-500 border border-red-200 flex items-center justify-center text-2xl shrink-0">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900">Email</div>
                <div className="text-gray-500 text-sm">
                  Send detailed business inquiry
                </div>
                <div className="text-gray-900 text-sm font-semibold">
                  info@vemli.co
                </div>
              </div>
              <i className="fas fa-arrow-right text-gray-400 text-lg shrink-0"></i>
            </a>

            <a
              href="tel:+233240699506"
              className="flex items-center gap-5 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-left transition-all duration-300 hover:border-blue-400 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center text-2xl shrink-0">
                <i className="fas fa-phone"></i>
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900">
                  Phone Call
                </div>
                <div className="text-gray-500 text-sm">
                  Speak with our Ghana team directly
                </div>
                <div className="text-gray-900 text-sm font-semibold">
                  +233 24 069 9506
                </div>
              </div>
              <i className="fas fa-arrow-right text-gray-400 text-lg shrink-0"></i>
            </a>
          </div>

          <p className="text-center text-gray-400 text-sm pb-12">
            We respond within 1 hour during business hours (8AM - 8PM GMT)
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
