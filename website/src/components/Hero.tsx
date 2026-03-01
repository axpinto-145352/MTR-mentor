import Image from "next/image";
import Link from "next/link";
import michelleImg from "../../public/michelle.png";

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

          {/* Michelle's Photo */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Photo container */}
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src={michelleImg}
                  alt="Michelle Romano — Mid-Term Rental Consultant"
                  className="h-[520px] w-full object-cover object-top"
                  priority
                  placeholder="blur"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>

              {/* Floating stat */}
              <div className="absolute -top-3 -right-3 rounded-xl bg-warm px-4 py-3 shadow-xl">
                <p className="text-2xl font-bold text-white">2–3x</p>
                <p className="text-[11px] text-white/80">More Revenue vs Long-Term</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
