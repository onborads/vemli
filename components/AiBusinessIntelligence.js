'use client';

import { useRef, useState } from 'react';

// Canned answers mirror the original marketing demo (static, no backend).
const CHAT_ANSWERS = {
  'What are my top selling items today?': () =>
    '\uD83D\uDCCA **Top items today:**\n\n1. Jollof Rice — 48 sold (GH\u00A21,152)\n2. Grilled Chicken — 31 sold (GH\u00A2930)\n3. Malt Drink — 67 sold (GH\u00A2402)\n\nJollof Rice is up 18% vs last Friday. \uD83D\uDD25',
  'Which days are my busiest?': () =>
    '\uD83D\uDCC5 **Busiest days (last 30 days):**\n\n1. Friday — avg GH\u00A26,240/day\n2. Saturday — avg GH\u00A25,890/day\n3. Sunday — avg GH\u00A24,710/day\n\nWeekends account for 48% of your weekly revenue.',
  'How is my staff performing this week?': () =>
    '\uD83D\uDC65 **Staff performance this week:**\n\n• Ama — GH\u00A28,420 in sales (top performer \u2B50)\n• Kofi — GH\u00A26,180 in sales\n• Akua — GH\u00A25,340 in sales\n\nAverage order handled: 34/shift. Ama has the highest avg order value at GH\u00A238.',
  'What time do I make the most sales?': () =>
    '\u23F0 **Peak sales hours:**\n\n\uD83D\uDD1D 12pm–2pm (lunch rush) — 34% of daily revenue\n\uD83D\uDD1D 6pm–9pm (dinner) — 28% of daily revenue\n\nYour slowest hour is 3pm–4pm. Consider a happy hour promo!',
};

const CUSTOM_ANSWER = (q) =>
  `Looking at your data for "${q}"… Based on your sales over the last 30 days, revenue has been trending up by 14%. Your top category is food, accounting for 62% of total orders.`;

const CHIPS = [
  { label: 'Top items today', question: 'What are my top selling items today?' },
  { label: 'Busiest days', question: 'Which days are my busiest?' },
  { label: 'Staff performance', question: 'How is my staff performing this week?' },
  { label: 'Peak sales hours', question: 'What time do I make the most sales?' },
];

const HIGHLIGHTS = [
  {
    icon: '\uD83D\uDCAC',
    box: 'ai-icon-purple',
    title: 'Natural language queries',
    text: "Ask exactly how you'd ask a manager — no dashboards or filters needed.",
  },
  {
    icon: '\u26A1',
    box: 'ai-icon-blue',
    title: 'Answers from your live data',
    text: 'Every answer is pulled directly from your real-time sales, inventory, and staff data.',
  },
  {
    icon: '\uD83D\uDCF2',
    box: 'ai-icon-green',
    title: 'Ask from anywhere',
    text: "Access the business data from the dashboard or via WhatsApp and Slack — even when you're away.",
  },
];

// Render **bold** markdown as <strong>, preserving line breaks via CSS.
function renderBold(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

let messageId = 0;

export default function AiBusinessIntelligence() {
  const [messages, setMessages] = useState([
    {
      id: 'intro',
      role: 'ai',
      text: "Hi Kwame \uD83D\uDC4B I'm connected to your live sales data. Ask me anything about your business.",
      meta: 'Vemli AI · just now',
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  };

  const pushMessage = (msg) => {
    setMessages((prev) => [...prev, { id: `m${messageId++}`, ...msg }]);
    requestAnimationFrame(scrollToBottom);
  };

  const answerFor = (question, isChip) => {
    if (CHAT_ANSWERS[question]) return CHAT_ANSWERS[question]();
    if (isChip) return CUSTOM_ANSWER(question);
    const firstWord = question.toLowerCase().split(' ')[0];
    const match = Object.keys(CHAT_ANSWERS).find((k) =>
      k.toLowerCase().includes(firstWord)
    );
    return match ? CHAT_ANSWERS[match]() : CUSTOM_ANSWER(question);
  };

  const ask = (question, isChip = false) => {
    if (!question.trim()) return;
    pushMessage({ role: 'user', text: question });
    setTyping(true);
    requestAnimationFrame(scrollToBottom);
    setTimeout(() => {
      setTyping(false);
      pushMessage({ role: 'ai', text: answerFor(question, isChip) });
    }, 1200);
  };

  const handleSend = () => {
    const q = input.trim();
    if (!q) return;
    setInput('');
    ask(q, false);
  };

  return (
    <section className="ai-bi py-28 px-6 relative overflow-hidden" id="ai">
      {/* Report dashboard as faint background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/Report-dashboard.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-10"
          style={{ mixBlendMode: 'luminosity' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #080d1a 40%, rgba(8,13,26,0.6) 70%, #080d1a 100%)',
          }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="ai-pill ai-pill-purple mb-5 w-fit">
              Business Intelligence
            </span>
            <h2 className="ai-font-display text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Ask your business
              <br />
              anything. Instantly.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Vemli understands your sales data so you don&apos;t have to dig
              through reports. Just ask a question — in plain language — and get
              a clear, instant answer about your business.
            </p>
            <div className="space-y-4">
              {HIGHLIGHTS.map((h) => (
                <div className="flex items-start gap-3" key={h.title}>
                  <div className={`ai-icon-box ${h.box} mt-0.5 text-base`}>
                    {h.icon}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{h.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: chat widget */}
          <div>
            <div
              className="ai-glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ maxWidth: '440px', margin: '0 auto' }}
            >
              {/* Chat header */}
              <div className="bg-white/5 border-b border-white/10 px-5 py-4 flex items-center gap-3">
                <div className="ai-pulse-ring relative w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-sm">
                  🤖
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Vemli Business Assistant
                  </p>
                  <p className="text-emerald-400 text-xs">
                    ● Live — connected to your data
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div
                className="p-4 space-y-4 min-h-[280px] max-h-[360px] overflow-y-auto"
                ref={scrollRef}
              >
                {messages.map((msg) =>
                  msg.role === 'user' ? (
                    <div className="flex justify-end" key={msg.id}>
                      <div className="ai-chat-msg ai-chat-bubble-in">
                        <div className="ai-msg-user text-white text-sm px-4 py-3 leading-relaxed whitespace-pre-line">
                          {renderBold(msg.text)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="ai-chat-msg ai-chat-bubble-in" key={msg.id}>
                      <div className="ai-msg-ai text-white text-sm px-4 py-3 leading-relaxed whitespace-pre-line">
                        {renderBold(msg.text)}
                      </div>
                      {msg.meta && (
                        <p className="text-slate-600 text-xs mt-1 pl-1">
                          {msg.meta}
                        </p>
                      )}
                    </div>
                  )
                )}

                {typing && (
                  <div className="ai-chat-msg">
                    <div className="ai-msg-ai px-4 py-3 flex gap-1.5 items-center">
                      <div className="ai-typing-dot w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <div className="ai-typing-dot w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <div className="ai-typing-dot w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                  </div>
                )}
              </div>

              {/* Quick question chips */}
              <div className="px-4 pb-3">
                <p className="text-slate-600 text-xs mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {CHIPS.map((chip) => (
                    <button
                      type="button"
                      className="ai-chip"
                      key={chip.label}
                      onClick={() => ask(chip.question, true)}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="px-4 pb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSend();
                    }}
                    placeholder="Ask about your business…"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    aria-label="Send"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl transition-colors text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
