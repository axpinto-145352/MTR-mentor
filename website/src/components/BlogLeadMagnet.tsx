"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

interface BlogLeadMagnetProps {
  /** City name for geo-targeted posts, e.g. "Austin" */
  city?: string;
  /** State abbreviation, e.g. "TX" */
  state?: string;
}

export default function BlogLeadMagnet({ city, state }: BlogLeadMagnetProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const isGeo = city && state;
  const locationLabel = isGeo ? `${city}, ${state}` : "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/xplaceholder", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          _subject: isGeo
            ? `New Blog Lead — ${locationLabel} Market Guide`
            : "New Blog Lead — Checklist Download",
          source: isGeo ? `blog-geo-${city!.toLowerCase()}` : "blog-checklist",
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="my-12 rounded-2xl bg-cream p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-warm/10">
          <svg className="h-7 w-7 text-warm" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="mt-3 text-lg font-bold text-text">You&apos;re In!</h3>
        <p className="mt-1 text-sm text-text-light">
          {isGeo
            ? `Check your inbox for your free ${locationLabel} market checklist.`
            : "Check your inbox for your free Mid-Term Rental Starter Checklist."}
        </p>
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/checklist"
            className="inline-block rounded-lg bg-warm px-6 py-2.5 text-sm font-bold text-white hover:bg-warm-light transition-all"
          >
            View Checklist Now
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-lg border border-warm px-6 py-2.5 text-sm font-bold text-warm-dark hover:bg-warm/5 transition-all"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 rounded-2xl border border-warm/20 bg-gradient-to-br from-cream to-warm/5 p-8">
      <div className="grid items-center gap-6 md:grid-cols-5">
        {/* Content — 3 columns */}
        <div className="md:col-span-3">
          <div className="inline-flex items-center rounded-md bg-warm/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-warm-dark">
            {isGeo ? `Free ${locationLabel} Guide` : "Free Download"}
          </div>
          <h3 className="mt-3 font-serif text-xl font-bold text-primary sm:text-2xl">
            {isGeo
              ? `Get the ${locationLabel} MTR Market Checklist`
              : "Get the Mid-Term Rental Starter Checklist"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-light">
            {isGeo
              ? `A step-by-step checklist tailored for ${locationLabel} — covering the best neighborhoods, revenue benchmarks, top listing platforms, and local regulations. Everything you need to launch your first MTR in ${city}.`
              : "Everything you need to launch your first mid-term rental — from property assessment to finding your first tenant. 15 actionable steps with budget ranges and platform recommendations."}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {(isGeo
              ? ["Neighborhood rankings", "Revenue benchmarks", "Local regulations", "Listing strategy"]
              : ["Property assessment", "Furnishing checklist", "Platform rankings", "Screening guide"]
            ).map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-xs text-text-light">
                <svg className="h-3.5 w-3.5 shrink-0 text-warm" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form — 2 columns */}
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-border md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="blog-lead-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="blog-lead-email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-lg border border-border px-4 py-3 text-sm text-text placeholder:text-text-lighter focus:border-warm focus:ring-2 focus:ring-warm/20 focus:outline-none"
              placeholder="your@email.com"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-warm px-6 py-3 text-sm font-bold text-white transition-all hover:bg-warm-light disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting
                ? "Sending..."
                : isGeo
                  ? `Get the ${city} Checklist`
                  : "Download Free Checklist"}
            </button>
            {error && (
              <p className="text-center text-xs text-red-600">
                Something went wrong. Please try again or{" "}
                <Link href="/contact" className="underline">
                  contact us directly
                </Link>.
              </p>
            )}
            <p className="text-center text-[11px] text-text-lighter">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
