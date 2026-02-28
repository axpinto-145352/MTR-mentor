"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is a mid-term rental?",
    answer:
      "A mid-term rental (MTR) is a furnished property leased for 30 days to 12 months \u2014 typically 3 to 9 months. They fill the gap between nightly Airbnb-style rentals and traditional year-long leases. MTRs attract reliable tenants like traveling nurses, corporate professionals, insurance displacement tenants, relocating families, and remote workers.",
  },
  {
    question: "How much can I earn with a mid-term rental?",
    answer:
      "Mid-term rentals typically generate 2x to 3x the revenue of traditional long-term leases on the same property. For example, a property that rents for $1,200/month on a long-term lease could earn $2,500\u2013$4,000/month as a furnished mid-term rental. Exact numbers depend on your market, property type, and tenant demographic \u2014 we provide detailed revenue projections during your free strategy call.",
  },
  {
    question: "Do I need to furnish my property?",
    answer:
      "Yes \u2014 mid-term tenants expect a fully furnished, move-in-ready home. This includes furniture, kitchen essentials, linens, Wi-Fi, and basic supplies. The good news: furnishing doesn\u2019t have to break the bank. We provide curated furnishing packages and wholesale vendor relationships that typically save property owners 30\u201340% compared to retail pricing.",
  },
  {
    question: "How is this different from Airbnb?",
    answer:
      "Mid-term rentals offer more stability with significantly less work. With Airbnb, you deal with guest turnovers every few days, constant cleaning, and high operational costs. With MTRs, tenants stay for months, you avoid most short-term rental regulations, turnover costs are 80% lower, and income is more predictable. Many former Airbnb hosts are switching to MTRs for exactly these reasons.",
  },
  {
    question: "What types of tenants rent mid-term?",
    answer:
      "The most common mid-term tenants include: traveling nurses and healthcare professionals on 13-week contracts, corporate employees on temporary assignments, families displaced by insurance claims (fire, flood, etc.), people relocating between homes, college interns on semester-long placements, and remote workers exploring new cities. These tend to be reliable, professional tenants backed by employers or insurance companies.",
  },
  {
    question: "Do I need special permits or licenses?",
    answer:
      "In most markets, rentals of 30+ days fall outside short-term rental regulations, meaning you typically don\u2019t need a special STR permit. However, local rules vary. During our property assessment, we review your specific municipality\u2019s requirements and ensure you\u2019re fully compliant before launching.",
  },
  {
    question: "How long does it take to get my property ready?",
    answer:
      "Most properties can be fully set up and listed within 2\u20134 weeks from our initial consultation. This includes furnishing, photography, platform listings, and lease preparation. If your property needs renovations or repairs, that timeline extends accordingly \u2014 but we\u2019ll give you a realistic estimate upfront.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm-dark">
            FAQ
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Everything you need to know about mid-term rentals and working with Mid-Term Mentor.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-border bg-white transition-all hover:border-warm/30"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base font-semibold text-text pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-text-light transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-5 text-sm leading-relaxed text-text-light"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
