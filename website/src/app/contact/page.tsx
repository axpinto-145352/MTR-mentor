"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm">
              Get Started
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Book Your Free <span className="text-warm">Strategy Call</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Tell us about your property and goals. Michelle will personally review
              your situation and give you an honest assessment — no sales pitch, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-text">
                Tell Us About Your Property
              </h2>
              <p className="mt-2 text-text-light">
                Fill out the form below and we&apos;ll be in touch within 24 hours to schedule
                your free strategy call.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-warm/30 bg-warm/5 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-warm/10">
                    <svg className="h-8 w-8 text-warm" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-text">Thank You!</h3>
                  <p className="mt-2 text-text-light">
                    We&apos;ve received your request. Michelle will personally review your
                    information and reach out within 24 hours to schedule your free strategy call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-text">
                        First Name <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input type="text" id="firstName" name="firstName" required autoComplete="given-name" className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-text placeholder:text-text-lighter focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text">
                        Last Name <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input type="text" id="lastName" name="lastName" required autoComplete="family-name" className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-text placeholder:text-text-lighter focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none" placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text">
                      Email Address <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input type="email" id="email" name="email" required autoComplete="email" className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-text placeholder:text-text-lighter focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text">Phone Number</label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel" className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-text placeholder:text-text-lighter focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="propertyLocation" className="block text-sm font-medium text-text">Property Location (City, State)</label>
                    <input type="text" id="propertyLocation" name="propertyLocation" className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-text placeholder:text-text-lighter focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none" placeholder="e.g., Atlanta, GA" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text">
                      What are you interested in? <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <select id="service" name="service" required className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-text focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none">
                      <option value="">Select an option...</option>
                      <option value="strategy">Free Strategy Call</option>
                      <option value="launch">Launch Package (Full Setup)</option>
                      <option value="furnishing">Furnishing Only</option>
                      <option value="management">Ongoing Management</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="properties" className="block text-sm font-medium text-text">How many properties do you have?</label>
                    <select id="properties" name="properties" className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-text focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none">
                      <option value="">Select...</option>
                      <option value="1">1 property</option>
                      <option value="2-3">2-3 properties</option>
                      <option value="4-10">4-10 properties</option>
                      <option value="10+">10+ properties</option>
                      <option value="0">None yet — exploring</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text">Tell us about your situation</label>
                    <textarea id="message" name="message" rows={4} className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-text placeholder:text-text-lighter focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none resize-y" placeholder="Your property, goals, questions..." />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-md bg-warm px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-warm-light hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
                  >
                    {submitting ? "Submitting..." : "Submit — Book My Free Strategy Call"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-cream p-8">
                <h3 className="text-lg font-bold text-text">Reach Michelle Directly</h3>
                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm/10 text-warm-dark">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">Email</p>
                      <a href="mailto:michelle@midtermmentor.com" className="text-sm text-warm-dark hover:text-warm">michelle@midtermmentor.com</a>
                      <p className="mt-1 text-xs text-text-lighter">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-sm font-semibold text-text">Quick Answers</p>
                  <div className="mt-3 space-y-3 text-sm text-text-light">
                    <p><strong>Is the strategy call free?</strong> Yes, 100%. No strings attached.</p>
                    <p><strong>How soon can I start?</strong> Most properties launch within 2-4 weeks.</p>
                    <p><strong>Do you work nationwide?</strong> Yes — we consult across the US.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
