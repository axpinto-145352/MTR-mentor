import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-warm/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-warm/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Turn Your Property into a Profitable Mid-Term Rental?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Whether you have one property or a growing portfolio, Michelle will help you
          build a mid-term rental business that generates consistent income with
          less hassle than short-term rentals. Start with a free strategy call —
          no commitment, no pressure.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-warm px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-warm-light hover:shadow-xl hover:shadow-warm/20 hover:-translate-y-0.5"
          >
            Book Your Free Strategy Call
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <p className="text-sm text-white/50">
            Free 30-minute consultation · No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}
