import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Packages — Mid-Term Rental Consulting, Furnishing & Management",
  description:
    "Explore Mid-Term Mentor's full-service consulting packages: property assessment, furnishing & design, listing optimization, tenant placement, and ongoing management. Free strategy call included.",
  alternates: {
    canonical: "https://www.midtermmentor.com/services",
  },
  openGraph: {
    title: "Mid-Term Mentor Services & Packages",
    description:
      "Full-service mid-term rental consulting: assessment, furnishing, listings, tenant placement, and management.",
    url: "https://www.midtermmentor.com/services",
  },
};

const packages = [
  {
    name: "Strategy Session",
    price: "Free",
    unit: "",
    description:
      "A complimentary 30-minute call to assess your property, discuss the mid-term rental opportunity in your market, and determine if it\u2019s the right fit for your goals.",
    features: [
      "Property suitability assessment",
      "Local market overview",
      "Revenue potential estimate",
      "Honest recommendation",
      "No obligation whatsoever",
    ],
    popular: false,
    cta: "Book Free Call",
  },
  {
    name: "Launch Package",
    price: "Custom",
    unit: "pricing",
    description:
      "The full setup service. We take your property from vacant to fully furnished, listed, and tenant-ready. Perfect for first-time mid-term rental owners.",
    features: [
      "Comprehensive market analysis",
      "Custom furnishing plan & procurement",
      "Professional photography",
      "Listings on Furnished Finder, Zillow, etc.",
      "Lease template & legal guidance",
      "Tenant screening for first placement",
      "30-day post-launch support",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Furnishing Only",
    price: "Custom",
    unit: "pricing",
    description:
      "Already have the strategy but need help with the physical setup? We design, source, and install everything your mid-term rental needs to be move-in ready.",
    features: [
      "Interior design consultation",
      "Full furnishing procurement",
      "Wholesale vendor pricing (save 30\u201340%)",
      "Delivery coordination & setup",
      "Kitchen, bath & linen essentials",
      "Move-in ready walkthrough",
    ],
    popular: false,
    cta: "Get Quote",
  },
  {
    name: "Ongoing Management",
    price: "Custom",
    unit: "pricing",
    description:
      "Hands-off mid-term rental management for property owners who want consistent income without the day-to-day work. We handle everything.",
    features: [
      "Continuous tenant sourcing",
      "Lease renewals & pricing optimization",
      "Tenant communication & support",
      "Maintenance coordination",
      "Monthly performance reports",
      "Turnover management between tenants",
    ],
    popular: false,
    cta: "Learn More",
  },
];

const tenantTypes = [
  {
    type: "Traveling Nurses & Healthcare",
    description: "13-week contracts, employer-backed, reliable tenants who need comfortable furnished housing near hospitals.",
  },
  {
    type: "Corporate Professionals",
    description: "Employees on temporary assignments, project-based work, or training programs. Often company-paid housing stipends.",
  },
  {
    type: "Insurance Placements",
    description: "Families displaced by fire, flood, or other events. Insurance companies pay directly, often above-market rates.",
  },
  {
    type: "Relocating Families",
    description: "People between homes \u2014 selling and buying, moving for jobs, or testing a new city before committing to purchase.",
  },
  {
    type: "Remote Workers & Digital Nomads",
    description: "Professionals who work from anywhere and want month-to-month furnished living in new locations.",
  },
  {
    type: "College Interns",
    description: "Students on semester-long internships who need furnished housing close to their workplace for 3\u20136 months.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm">
              Services & Packages
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Everything You Need to{" "}
              <span className="text-warm">Launch & Profit</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              From strategy to setup to ongoing management — choose the level of support
              that fits your needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative rounded-2xl border p-8 transition-all hover:shadow-lg ${
                  pkg.popular
                    ? "border-warm bg-white ring-2 ring-warm/20"
                    : "border-border bg-white"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-8 rounded-md bg-warm px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-text">{pkg.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-primary">
                    {pkg.price}
                  </span>
                  {pkg.unit && (
                    <span className="text-text-light">{pkg.unit}</span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-light">
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-3" role="list">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-light">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-warm" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-6 py-3 text-sm font-bold transition-all ${
                    pkg.popular
                      ? "bg-warm text-white hover:bg-warm-light"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tenant Types */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Who Rents Mid-Term?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
              Mid-term rentals attract reliable, professional tenants. Here are the
              most common tenant types we help you reach.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tenantTypes.map((tenant) => (
              <div key={tenant.type} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="text-base font-bold text-primary">{tenant.type}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {tenant.description}
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
            Not Sure Where to Start?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Book a free 30-minute strategy call. We&apos;ll assess your property, analyze
            your market, and recommend the best path forward.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-warm px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-warm-light hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </section>

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Mid-Term Rental Consulting",
            provider: {
              "@type": "ProfessionalService",
              name: "Mid-Term Mentor",
              url: "https://www.midtermmentor.com",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            description:
              "Full-service mid-term rental consulting including property assessment, furnishing, listing optimization, tenant placement, and ongoing management.",
          }),
        }}
      />
    </>
  );
}
