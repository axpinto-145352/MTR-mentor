import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import headshotImg from "../../../public/michelle-headshot.png";

export const metadata: Metadata = {
  title: "About Michelle Romano — Mid-Term Rental Expert & Consultant",
  description:
    "Meet Michelle Romano, founder of Mid-Term Mentor. Learn about her experience helping property owners build profitable mid-term rental businesses across the US.",
  alternates: {
    canonical: "https://www.midtermmentor.com/about",
  },
  openGraph: {
    title: "About Michelle Romano — Mid-Term Rental Expert",
    description:
      "Meet Michelle Romano and learn how Mid-Term Mentor helps property owners build profitable furnished rental businesses.",
    url: "https://www.midtermmentor.com/about",
  },
};

const values = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Simplicity First",
    description:
      "Mid-term rentals should not be complicated. We strip away the noise and give you a clear, repeatable system that works without consuming your life.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Profitability Over Hype",
    description:
      "We don\u2019t chase trends. Every recommendation is grounded in real market data and designed to maximize your return on investment over the long term.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Personal Mentorship",
    description:
      "You\u2019re not getting a course or a PDF. You\u2019re getting Michelle \u2014 hands-on guidance, real conversations, and a partner who\u2019s invested in your success.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Quality Tenants, Always",
    description:
      "We focus on attracting professional, vetted tenants \u2014 traveling nurses, corporate relocations, and insured placements \u2014 so you can rest easy knowing your property is in good hands.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm">
              About
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Meet <span className="text-warm">Michelle Romano</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Real estate professional, mid-term rental expert, and the mentor who
              makes the whole process simple, profitable, and professional.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={headshotImg}
                  alt="Michelle Romano — Founder of Mid-Term Mentor"
                  className="w-full object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Why Mid-Term Mentor Exists
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-text-light">
              <p>
                After years in real estate, I kept seeing the same story: property owners
                wanting more from their investments but stuck choosing between the chaos
                of nightly Airbnb rentals and the low returns of traditional long-term leases.
              </p>
              <p>
                Mid-term rentals changed everything for me. By furnishing properties and
                targeting tenants who stay 30 days to a year \u2014 traveling nurses, corporate
                professionals, relocating families \u2014 I found the sweet spot: <strong>higher
                revenue, lower turnover, and better tenants</strong>.
              </p>
              <p>
                But I realized most property owners didn&apos;t know this option existed, or
                felt overwhelmed by the setup process. That&apos;s why I created Mid-Term Mentor:
                to give property owners a step-by-step partner who handles the strategy,
                furnishing, marketing, and tenant placement \u2014 so they can enjoy the income
                without the guesswork.
              </p>
              <p>
                Whether you&apos;re launching your first mid-term rental or scaling a portfolio,
                I&apos;m here to make it simple, profitable, and professional.
              </p>
            </div>
            <div className="mt-8">
              <p className="font-serif text-xl font-bold text-warm-dark">\u2014 Michelle Romano</p>
              <p className="text-sm text-text-light">Founder, Mid-Term Mentor</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              How We Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
              Every recommendation, every strategy, every interaction is guided by these principles.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-white p-8">
                <div className="inline-flex rounded-xl bg-warm/10 p-3 text-warm-dark">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Talk About Your Property
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Book a free strategy call and let&apos;s explore whether mid-term rentals
            are the right fit for your investment goals.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-warm px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-warm-light hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
