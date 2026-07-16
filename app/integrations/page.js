import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntegrationsContent from "@/components/IntegrationsContent";

export const metadata = {
  title: "Integrations",
  description:
    "Connect Vemli Core to WhatsApp, Slack, hotel systems, AI assistants, Sage 300, QuickBooks, and more.",
};

export default function Page() {
  return (
    <>
      <Header />
      <IntegrationsContent />
      <Footer />
    </>
  );
}
