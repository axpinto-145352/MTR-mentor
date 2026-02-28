import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-warm/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-warm/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-warm">
              Mid-Term Mentor
            </p>

            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Mid-Term Rentals Made{" "}
              <span className="text-warm">Simple, Profitable,</span> and Professional
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0">
              Expert consulting to help you build, furnish, and manage mid-term
              rentals that attract quality tenants and generate consistent income —
              without the headaches of short-term rental hustle.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-warm px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-warm-light hover:shadow-xl hover:shadow-warm/20 hover:-translate-y-0.5"
              >
                Book a Free Strategy Call
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-warm hover:bg-warm/10"
              >
                View Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
              {["Traveling Nurses", "Corporate Housing", "Insurance Placements", "Relocations"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-white/50">
                  <svg className="h-4 w-4 text-warm" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Visual — Stats cards */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-warm/20">
                      <svg className="h-7 w-7 text-warm" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Average Monthly Revenue</p>
                      <p className="text-2xl font-bold text-white">$2,500 – $5,000+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-warm/20">
                      <svg className="h-7 w-7 text-warm" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Average Tenant Stay</p>
                      <p className="text-2xl font-bold text-white">3 – 9 Months</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-warm/20">
                      <svg className="h-7 w-7 text-warm" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Less Turnover vs Airbnb</p>
                      <p className="text-2xl font-bold text-white">80% Lower Costs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating quote */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5">
                <p className="text-xs font-medium text-text">&quot;Michelle made the whole process effortless.&quot;</p>
                <p className="mt-1 text-xs text-text-light">— Property Owner, Atlanta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
