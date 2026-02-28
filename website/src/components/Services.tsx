import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Property Assessment & Strategy",
    description:
      "We evaluate your property's mid-term rental potential, analyze your local market, and build a custom strategy to maximize occupancy and revenue.",
    features: ["Market analysis", "Revenue projections", "Regulatory guidance"],
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "Furnishing & Design",
    description:
      "Professional furnishing packages designed for mid-term tenants — durable, stylish, and move-in ready. We handle everything from furniture to kitchen essentials.",
    features: ["Full furnishing packages", "Design consultation", "Vendor management"],
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Listing Optimization & Marketing",
    description:
      "Get found by quality tenants. We create compelling listings on Furnished Finder, Zillow, and other platforms optimized for mid-term rental bookings.",
    features: ["Platform listings", "Professional photography", "Pricing strategy"],
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Tenant Screening & Placement",
    description:
      "We find and vet reliable tenants — traveling nurses, corporate professionals, insurance placements, and relocating families — so you get consistent, quality occupants.",
    features: ["Background checks", "Lease management", "Tenant communication"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm-dark">
            What We Offer
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Full-Service Mid-Term Rental Consulting
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            From first assessment to fully booked — we guide you through every step
            of building a profitable mid-term rental business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-2xl border border-border bg-white p-8 transition-all hover:border-warm/30 hover:shadow-lg hover:shadow-warm/5 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex rounded-xl bg-cream p-3 text-warm-dark transition-colors group-hover:bg-warm/10">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-text">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-text-light">
                    <svg className="h-4 w-4 shrink-0 text-warm" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-base font-semibold text-warm-dark transition-colors hover:text-warm"
          >
            See all services and packages
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
