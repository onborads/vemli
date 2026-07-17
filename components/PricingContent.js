'use client';

import { useState } from 'react';

const GET_STARTED_URL = '/get-started';
const CONTACT_SALES_URL =
  "https://wa.me/2332461427273?text=Hello%20Vemli%20Core%20Team%2C%20I'm%20interested%20in%20the%20Enterprise%20plan.%20Please%20share%20more%20details.";

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tags: ['🛍️ Retail', '💊 Pharmacy'],
    monthly: { price: '149', period: 'per month · 1 terminal' },
    annual: { price: '1,368', period: 'per year · save GH¢420 · 1 terminal' },
    features: [
      'Fast checkout',
      'Product search',
      'Cash & MoMo payments',
      'Inventory tracking',
    ],
    more: [
      { text: 'Low stock alerts', included: true },
      { text: 'Product categories', included: true },
      { text: 'Sales reports', included: true },
      { text: 'AI assistant', included: false },
    ],
    cta: { label: 'Get Started', href: GET_STARTED_URL, style: 'ghost' },
  },
  {
    id: 'growth',
    name: 'Growth',
    tags: ['🛍️ Retail', '💊 Pharmacy'],
    monthly: { price: '349', period: 'per month · up to 2 terminals' },
    annual: {
      price: '3,207',
      period: 'per year · save GH¢981 · up to 2 terminals',
    },
    features: [
      'Faster checkout',
      'Stock visibility',
      'WhatsApp & Slack alerts',
      'Staff performance',
    ],
    more: [
      { text: 'VAT & end-of-day reports', included: true },
      { text: 'Opening & closing stock reports', included: true },
      { text: 'AI assistant', included: true },
      { text: 'PMS Integration add-on', included: true },
    ],
    cta: { label: 'Get Started', href: GET_STARTED_URL, style: 'ghost' },
  },
  {
    id: 'business',
    name: 'Business',
    featured: true,
    badge: '🏨 Hospitality-ready',
    tags: ['🍽️ Restaurants', '🍺 Bars', '🏨 Hotels'],
    monthly: { price: '599', period: 'per month · up to 3 terminals' },
    annual: {
      price: '5,491',
      period: 'per year · save GH¢1,697 · up to 3 terminals',
    },
    features: [
      'Table & order management',
      'Split bills and modifiers',
      'KOT and service workflows',
      'PMS Integration add-on',
    ],
    more: [
      { text: 'Serving periods and analytics', included: true },
      { text: 'Priority support', included: true },
      { text: 'WhatsApp and Slack notifications', included: true },
      { text: 'AI assistant', included: true },
    ],
    cta: { label: 'Get Started', href: GET_STARTED_URL, style: 'light' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    isContact: true,
    tags: ['🏢 Multi-location', '🔗 API Access'],
    contactLabel: 'Contact Sales',
    contactSub: 'tailored to your needs',
    features: [
      'Everything in the core plans',
      'Multiple branches and terminals',
      'Custom integrations',
      'Premium support',
    ],
    more: [
      { text: 'Dedicated onboarding', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Priority SLA', included: true },
    ],
    cta: { label: 'Contact Sales', href: CONTACT_SALES_URL, style: 'amber' },
  },
];

function CheckItem({ text, included, featured }) {
  return (
    <div className={`pr-check-item${featured ? ' pr-check-item-light' : ''}${!included ? ' pr-check-muted' : ''}`}>
      <span className={included ? 'pr-check-icon' : 'pr-check-x'}>
        {included ? '✓' : '✗'}
      </span>
      {text}
    </div>
  );
}

function CtaButton({ cta }) {
  const external = cta.href.startsWith('http');
  return (
    <a
      href={cta.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`pr-cta pr-cta-${cta.style}`}
    >
      {cta.style === 'amber' && <i className="fas fa-phone text-sm" aria-hidden="true" />}
      {cta.label}
    </a>
  );
}

function PlanCard({ plan, annual }) {
  const [showMore, setShowMore] = useState(false);
  const pricing = annual ? plan.annual : plan.monthly;

  return (
    <div className={`pr-card${plan.featured ? ' pr-card-featured' : ' pr-card-dark'}`}>
      {plan.badge && (
        <div className="pr-badge">
          <span>{plan.badge}</span>
        </div>
      )}

      <div className="pr-card-body">
        {/* Header / price */}
        <div className="mb-1 mt-2">
          <p
            className={`text-sm font-medium mb-1 ${
              plan.featured ? 'text-blue-100' : 'text-slate-400'
            }`}
          >
            {plan.name}
          </p>

          {plan.isContact ? (
            <>
              <span className="pr-font-display pr-price-contact font-extrabold text-white leading-none">
                {plan.contactLabel}
              </span>
              <p className="text-slate-500 text-sm mt-1">{plan.contactSub}</p>
            </>
          ) : (
            <>
              <div className="flex items-end gap-1 mb-0.5 flex-nowrap">
                <span
                  className={`text-lg font-light self-start mt-2 shrink-0 ${
                    plan.featured ? 'text-white/60' : 'text-slate-500'
                  }`}
                >
                  GH¢
                </span>
                <span className="pr-font-display pr-price font-extrabold text-white leading-none">
                  {pricing.price}
                </span>
              </div>
              <p className={`text-sm ${plan.featured ? 'text-blue-200' : 'text-slate-500'}`}>
                {pricing.period}
              </p>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 my-5">
          {plan.tags.map((tag) => (
            <span
              key={tag}
              className={`pr-pill text-xs ${plan.featured ? 'pr-pill-onblue' : 'pr-pill-light'}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-1">
          {plan.features.map((f) => (
            <CheckItem key={f} text={f} included featured={plan.featured} />
          ))}
        </div>

        {showMore && (
          <div className="mb-1">
            {plan.more.map((m) => (
              <CheckItem
                key={m.text}
                text={m.text}
                included={m.included}
                featured={plan.featured}
              />
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => setShowMore((v) => !v)}
          className={`pr-more-btn ${
            plan.featured ? 'text-blue-200 hover:text-white' : 'text-blue-400 hover:text-blue-300'
          }`}
          aria-expanded={showMore}
        >
          {showMore ? '− View less' : '+ View more'}
        </button>
      </div>

      <CtaButton cta={plan.cta} />
    </div>
  );
}

export default function PricingContent() {
  const [annual, setAnnual] = useState(true);

  return (
    <main className="pricing-page py-24 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="pr-pill pr-pill-blue mb-4 mx-auto w-fit">Pricing</span>
          <h1 className="pr-font-display text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            Simple, honest pricing.
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Pick the level that fits your team. Everything is included with clear,
            transparent pricing.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              className={`text-sm font-medium ${annual ? 'text-slate-400' : 'text-white'}`}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setAnnual((v) => !v)}
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              className="relative w-12 h-6 rounded-full transition-colors duration-300 bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            >
              <span
                className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300"
                style={{ transform: annual ? 'translateX(24px)' : 'translateX(0)' }}
              />
            </button>
            <span
              className={`text-sm font-medium ${annual ? 'text-white' : 'text-slate-400'}`}
            >
              Annual
              <span className="text-emerald-400 font-semibold text-xs ml-1">
                2 months free
              </span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div key={plan.id} className="flex">
              <PlanCard plan={plan} annual={annual} />
            </div>
          ))}
        </div>

        {/* Add-ons note */}
        <div className="pr-note rounded-2xl px-6 py-5 flex items-start gap-3 mt-8">
          <span className="text-lg mt-0.5">💡</span>
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="text-white font-medium">Add-ons available:</span> AI
            Assistant, WhatsApp Assistant, PMS Integration, Advanced Analytics,
            API Access, Extra Branches, Extra Users, and Premium Support.
          </p>
        </div>
      </div>
    </main>
  );
}
