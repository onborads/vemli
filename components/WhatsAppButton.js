"use client";

const WHATSAPP_NUMBER = "2332461427273";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Vemli Core Team, I'm interested in your POS system.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .whatsapp-btn {
          animation: float 2.5s ease-in-out infinite;
        }

        .whatsapp-btn:hover {
          animation-play-state: paused;
          transform: scale(1.1);
        }
      `}</style>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-btn fixed bottom-6 right-6 z-50 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/85 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-[#25D366] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-4 focus:ring-green-400/50"
      >
        <i
          aria-hidden="true"
          className="fa-brands fa-whatsapp text-5xl text-white transition-transform duration-300 hover:scale-110"
        />
      </a>
    </>
  );
}
