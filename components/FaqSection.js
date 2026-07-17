"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Does Vemli POS work offline?",
    answer:
      "Yes — you never need to be online to make a sale, regardless of your setup. Vemli POS offers three modes: fully offline with no cloud dependency at all; offline for sales and inventory while only WhatsApp/Slack notifications and integrations need a connection; or offline-first with automatic background sync to the cloud (a small additional cost) so you can check reports and analytics from anywhere, even away from the store.",
  },
  {
    question: "How much does Vemli POS cost",
    answer:
      "Vemli POS is a paid platform starting at GH¢149 per month on the Starter plan, with Growth, Business, and Enterprise tiers available as your business grows. Every plan includes checkout, inventory tracking, and mobile money payments out of the box. Check our pricing page for the full breakdown of what's included at each tier.",
  },
  {
    question: "Can I ask AI tools questions about my sales data?",
    answer:
      "Yes. Vemli POS can securely connect your sales, inventory, and attendance etc  data to AI assistants like Claude, so you can simply ask questions such as 'what were my best-selling items last week' or 'which branch had the highest sales yesterday' and get instant answers, without opening a single report.",
  },
  {
    question: "How do I get started with Vemli POS?",
    answer:
      "Get in touch today and our team will set up your account, load your products, and walk you through your first sale.",
  },
  {
    question: "What payment methods does Vemli POS support?",
    answer:
      "Vemli POS accepts cash and mobile money directly at checkout, with support for MTN Mobile Money, Vodafone Cash, and AirtelTigo Money through a built-in USSD payment prompt. Customers pay from their own phone at the till, no separate terminal needed.",
  },
  {
    question: "Can Vemli POS handle restaurants and bars, not just retail?",
    answer:
      "Yes. Our Business plan is built for hospitality, with table and order management, split bills and modifiers, kitchen order tickets (KOT), and a Kitchen Display System (KDS) so orders flow straight from the till to the kitchen.",
  },
  {
    question: "Does Vemli POS enforce VAT and end-of-day closing?",
    answer:
      "From the Growth plan up, Vemli POS calculates VAT on every sale automatically and requires each till to be closed out at end of day before a new sales day can start, so your books stay accurate and your staff can't leave a shift unreconciled.",
  },
  {
    question: "Can I track staff attendance with Vemli POS?",
    answer:
      "Yes. Basic attendance tracking is included from the Growth plan, and you can add an Anviz biometric attendance device as an add-on for fingerprint clock-in/out at your outlet.",
  },
  {
    question: "Does Vemli POS integrate with accounting software?",
    answer:
      "Vemli POS offers QuickBooks and Sage 300 integrations as add-ons on the Growth plan and above, so your sales data flows straight into your existing books without manual re-entry.",
  },
  {
    question: "Can Vemli POS manage purchase orders from my suppliers?",
    answer:
      "Yes, with the Purchase Orders add-on you can raise POs to suppliers, track them through to delivery, and reconcile received stock against what was ordered, all from the same back office as your sales and inventory.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-faq">
      <div className="hp_questions_wrapper">
        <h2 className="title-frequently">Vemli POS Q&amp;A</h2>
        <div
          className="accordion-faq"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {faqItems.map((item, index) => (
            <article
              key={index}
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3
                className="question"
                itemProp="name"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ cursor: "pointer" }}
              >
                {item.question}
                <i
                  className="arrow"
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s ease",
                    transform:
                      openIndex === index ? "rotate(-135deg)" : "rotate(0deg)",
                  }}
                />
              </h3>
              <div
                className="answer"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
                style={{
                  maxHeight: openIndex === index ? "none" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <div itemProp="text">{item.answer}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
