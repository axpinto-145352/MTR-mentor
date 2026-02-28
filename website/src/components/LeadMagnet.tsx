"use client";

import { useState, type FormEvent } from "react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xplaceholder", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "New Lead Magnet Download Request" }),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-warm/5 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-border md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Content */}
            <div>
              <div className="inline-flex items-center rounded-md bg-warm/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-warm-dark">
                Free Download
              </div>
              <h2 className="mt-4 font-serif text-2xl font-bold text-primary sm:text-3xl">
                The Mid-Term Rental Starter Checklist
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-light">
                Everything you need to launch your first mid-term rental — from
                property assessment to first tenant. This 15-point checklist covers:
              </p>
              <ul className="mt-4 space-y-2" role="list">
                {[
                  "Property readiness assessment criteria",
                  "Essential furnishing list (with budget ranges)",
                  "Top listing platforms ranked by tenant quality",
                  "Tenant screening red flags & green flags",
                  "Pricing formula for your market",
                  "Legal compliance quick-check",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-light">
                    <svg className="h-4 w-4 shrink-0 text-warm" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-text-lighter">
                Created by Michelle Romano · Used by hundreds of property owners
              </p>
            </div>

            {/* Form */}
            <div className="rounded-xl bg-cream p-6">
              {submitted ? (
                <div className="text-center py-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-warm/10">
                    <svg className="h-7 w-7 text-warm" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-text">Your Checklist Is Ready!</h3>
                  <p className="mt-1 text-sm text-text-light">
                    Click below to view and save your free checklist.
                  </p>
                  <a
                    href="/checklist"
                    className="mt-3 inline-block rounded-lg bg-warm px-6 py-2.5 text-sm font-bold text-white hover:bg-warm-light transition-all"
                  >
                    View Checklist
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="text-center text-lg font-bold text-text">
                    Get Your Free Checklist
                  </h3>
                  <p className="mt-1 text-center text-xs text-text-light">
                    Enter your email and we&apos;ll send it right over.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <div>
                      <label htmlFor="lead-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="lead-email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-lg border border-border px-4 py-3 text-sm text-text placeholder:text-text-lighter focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-lg bg-warm px-6 py-3 text-sm font-bold text-white transition-all hover:bg-warm-light disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending..." : "Download Free Checklist"}
                    </button>
                    <p className="text-center text-[11px] text-text-lighter">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
