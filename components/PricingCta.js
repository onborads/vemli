'use client';

// Mobile-only inline pricing CTA. Reuses the "Chat with us" button look.
// Tapping it navigates to the pricing page. Hidden on desktop.
export default function PricingCta({ label = 'See our pricing' }) {
  return (
    <a className="dash-button chat_button pricing-cta" href="/pricing">
      <i className="fa-solid fa-tag" aria-hidden="true" />
      {label}
    </a>
  );
}
