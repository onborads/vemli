'use client';

// Mobile-only inline pricing CTA shown before the AI section on the home page.
// Uses the same look as the "Chat with us" button. Tapping it navigates to
// the pricing page.
export default function HomePricingCta() {
  return (
    <a className="dash-button chat_button home-pricing-cta" href="/pricing">
      <i className="fa-solid fa-tag" aria-hidden="true" />
      See our pricing
    </a>
  );
}
