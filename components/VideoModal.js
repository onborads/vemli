'use client';

import { useEffect } from 'react';

const WHATSAPP_NUMBER = '2332461427273';
const WHATSAPP_MESSAGE = encodeURIComponent("Hello Vemli Core Team, I'm interested in your POS system.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  useEffect(() => {
    const legacy = document.getElementById('vidos');
    if (!legacy) return;
    const onClick = (e) => {
      e.preventDefault();
      window.open(WHATSAPP_URL, '_blank');
    };
    legacy.addEventListener('click', onClick);
    return () => legacy.removeEventListener('click', onClick);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:h-16 sm:w-16"
    >
      <i aria-hidden="true" className="fa-brands fa-whatsapp text-2xl sm:text-3xl"></i>
    </a>
  );
}
