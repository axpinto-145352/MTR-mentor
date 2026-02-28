import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Free Strategy Call",
    description:
      "We start with a complimentary consultation to understand your property, goals, and market. No obligation — just honest advice on whether mid-term rentals are right for you.",
  },
  {
    number: "02",
    title: "Custom Rental Plan",
    description:
      "You receive a tailored roadmap covering market analysis, revenue projections, furnishing recommendations, and a step-by-step launch plan for your property.",
  },
  {
    number: "03",
    title: "Setup & Furnish",
    description:
      "We handle the heavy lifting — furnishing, photography, platform listings, and lease templates — transforming your property into a move-in-ready mid-term rental.",
  },
  {
    number: "04",
    title: "Launch & Earn",
    description:
      "Your property goes live. We help you find quality tenants, manage bookings, and optimize your listing for maximum occupancy and revenue month after month.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm-dark">
            Simple Process
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            How Does It Work?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Getting started is easier than you think. Four steps to a profitable mid-term rental.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-full hidden w-full border-t-2 border-dashed border-warm/30 lg:block" aria-hidden="true" />
              )}
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-2xl font-bold text-warm">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-warm px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-warm-light hover:shadow-lg hover:shadow-warm/20 hover:-translate-y-0.5"
          >
            Start with a Free Strategy Call
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
