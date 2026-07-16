'use client';

import { useState } from 'react';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'messaging', label: 'Messaging' },
  { id: 'accounting', label: 'Accounting & ERP' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'ai', label: 'AI & Automation' },
];

const STATS = [
  { value: '8+', label: 'live integrations' },
  { value: '40+', label: 'AI data tools' },
  { value: 'real\u2011time', label: 'sync across platforms' },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
  </svg>
);

const INTEGRATIONS = [
  {
    id: 'whatsapp',
    cat: 'messaging',
    fullWidth: false,
    title: 'WhatsApp',
    badge: { label: 'Live', variant: 'live' },
    iconStyle: { background: 'linear-gradient(135deg, #25d366, #128c7e)' },
    icon: <WhatsAppIcon />,
    description:
      'Daily sales summaries, low stock alerts, end-of-day reports. Ask business questions right from chat.',
    features: [
      'Daily revenue summary',
      'Low stock notifications',
      'End-of-day reports',
      'Ask business questions via chat',
    ],
  },
  {
    id: 'slack',
    cat: 'messaging',
    fullWidth: false,
    title: 'Slack',
    badge: { label: 'Live', variant: 'live' },
    iconStyle: { background: '#4a154b' },
    icon: <SlackIcon />,
    description:
      'Real-time sales alerts and daily reports to your workspace. Keep your team in sync.',
    features: [
      'Sales milestone alerts',
      'Shift & daily summaries to channels',
      'Inventory warnings to ops team',
      'Ask business questions in Slack',
    ],
  },
  {
    id: 'hotel',
    cat: 'hospitality',
    fullWidth: false,
    title: 'Hotel Management Systems',
    badge: { label: 'Live', variant: 'live' },
    iconStyle: { background: 'linear-gradient(135deg, #b45309, #78350f)' },
    icon: <span className="text-xl">🏨</span>,
    description:
      "Post restaurant charges directly to a guest's room. Works with Opera, Protel, and compatible PMS.",
    features: [
      'Charge restaurant bills to any room',
      'Works with Opera, Protel & more',
      'Full order details posted to the folio',
      'Seamless guest checkout experience',
    ],
  },
  {
    id: 'ai',
    cat: 'ai',
    fullWidth: false,
    title: 'AI Assistant Clients',
    badge: { label: 'Live', variant: 'live' },
    iconStyle: { background: 'linear-gradient(135deg, #6d28d9, #4c1d95)' },
    icon: <span className="text-xl">🤖</span>,
    description:
      'Connect to Claude Desktop or any MCP-compatible client. Ask about sales, staff, inventory in plain language.',
    features: [
      'Claude Desktop, Cursor & more',
      'Ask about sales, staff, inventory',
      '40+ live business data tools',
      'No dashboards needed — just ask',
    ],
  },
  {
    id: 'quickbooks',
    cat: 'accounting',
    fullWidth: false,
    title: 'QuickBooks',
    badge: { label: 'Sync', variant: 'sync' },
    iconStyle: { background: 'linear-gradient(135deg, #2ca01c, #1a6e12)' },
    icon: <span className="font-black text-white text-base">QB</span>,
    description:
      'Sync daily sales, expenses, tax summaries, and payments directly into QuickBooks Online.',
    features: [
      'Auto-post daily sales journals',
      'VAT & tax line sync',
      'Payment breakdown (cash, card, MoMo)',
      'Expense & cost of goods sync',
    ],
  },
  {
    id: 'sage',
    cat: 'accounting',
    fullWidth: false,
    title: 'Sage 300 / ERP',
    badge: { label: 'Enterprise', variant: 'sync' },
    iconStyle: { background: 'linear-gradient(135deg, #0072ce, #003f7a)' },
    icon: (
      <span className="font-black text-white text-[11px] leading-none tracking-tight text-center">
        SAGE
        <br />
        300
      </span>
    ),
    description:
      'Push Vemli transactions into Sage 300 in real time. Multi\u2011branch, cost centre, and full GL support.',
    features: [
      'Real-time transaction posting to GL',
      'Multi-branch & cost centre support',
      'AR/AP sync & inventory valuation',
      'Custom field mapping available',
    ],
  },
  {
    id: 'custom-api',
    cat: 'all',
    fullWidth: true,
    title: 'Custom Integration / REST API',
    badge: { label: 'Enterprise', variant: 'custom' },
    iconStyle: { background: '#1e293b', border: '1px solid #334155' },
    icon: <i className="fa-solid fa-plug text-slate-300 text-lg" />,
    description:
      'Full REST API covering sales, inventory, staff, payments, and reports. Connect any third\u2011party system — ERP, CRM, BI tools, or custom dashboards.',
    features: [],
  },
];

const BADGE_CLASS = {
  live: 'int-badge-live',
  sync: 'int-badge-sync',
  custom: 'int-badge-custom',
};

function Badge({ badge }) {
  const base =
    'text-[10px] font-semibold px-2 py-0.5 rounded-full';
  return <span className={`${base} ${BADGE_CLASS[badge.variant]}`}>{badge.label}</span>;
}

function IntegrationCard({ item }) {
  return (
    <div
      className={`int-card${item.fullWidth ? ' md:col-span-2' : ''}`}
      data-cat={item.cat}
    >
      <div
        className={
          item.fullWidth
            ? 'flex flex-col sm:flex-row items-start sm:items-center gap-4'
            : 'flex items-start gap-4'
        }
      >
        <div className="int-icon-bg" style={item.iconStyle}>
          {item.icon}
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold int-title">{item.title}</span>
            <Badge badge={item.badge} />
          </div>
          <p className="int-muted text-sm mt-0.5 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {item.features.length > 0 && (
        <div className="mt-3 space-y-1 text-sm int-muted">
          {item.features.map((feature) => (
            <div className="flex items-start" key={feature}>
              <span className="int-feature-check">✓</span>
              <span className="ml-2">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function IntegrationsContent() {
  const [activeCat, setActiveCat] = useState('all');

  const isVisible = (item) => activeCat === 'all' || item.cat === activeCat;

  return (
    <main className="int-page">
      {/* HERO */}
      <section className="int-hero-gradient pt-10 pb-6 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="int-font-display text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4">
            Connect Vemli Core to
            <br />
            <span className="bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#059669] bg-clip-text text-transparent">
              the tools you already use
            </span>
          </h1>
          <p className="int-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            From WhatsApp notifications to full accounting sync with QuickBooks
            and Sage 300 — Vemli Core fits right in.
          </p>

          {/* stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {STATS.map((stat, index) => (
              <div key={stat.label} className="contents sm:flex sm:items-center sm:gap-6">
                <div>
                  <span className="int-font-display text-2xl font-black int-title">
                    {stat.value}
                  </span>
                  <span className="int-subtle text-sm ml-1">{stat.label}</span>
                </div>
                {index < STATS.length - 1 && (
                  <span className="hidden sm:inline text-gray-300">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER */}
      <div className="px-6 pt-6 pb-8 max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`int-tab-btn${activeCat === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          {INTEGRATIONS.filter(isVisible).map((item) => (
            <IntegrationCard item={item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
