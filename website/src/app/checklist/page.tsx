import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "The Mid-Term Rental Starter Checklist — Free Download",
  description:
    "A 15-point checklist covering everything you need to launch your first mid-term rental. From property assessment to first tenant.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Property Assessment",
    items: [
      {
        label: "Evaluate proximity to demand drivers",
        detail:
          "Hospitals (traveling nurses), corporate campuses, universities, military bases, and insurance-dense areas. Properties within 15 minutes of a major hospital are the highest-demand MTR locations.",
      },
      {
        label: "Check local regulations for 30+ day rentals",
        detail:
          "In most markets, stays of 30 days or more are exempt from short-term rental (STR) permits and occupancy taxes. Verify with your municipality — most treat MTRs the same as traditional rentals.",
      },
      {
        label: "Assess property condition and layout",
        detail:
          "2–3 bedroom units perform best. The property should be in good condition with reliable HVAC, plumbing, and appliances. Mid-term tenants expect a higher standard than long-term renters.",
      },
    ],
  },
  {
    title: "Furnishing Essentials",
    items: [
      {
        label: "Budget $3,000–$8,000 per bedroom (all-in)",
        detail:
          "Includes furniture, linens, kitchenware, décor, and supplies. A 2BR property typically costs $6,000–$16,000 to furnish depending on market positioning.",
      },
      {
        label: "Prioritize the Big Three: mattress, sofa, WiFi",
        detail:
          "Invest $400–$800 in a quality mattress, $500–$1,000 in a comfortable sofa, and ensure reliable high-speed internet (100+ Mbps). These three items drive reviews and renewals.",
      },
      {
        label: "Complete the kitchen — fully",
        detail:
          "Dishes for 4–6, pots and pans, knife set, cutting board, coffee maker (non-negotiable), toaster, dish towels, oven mitts, and basic cleaning supplies. A poorly stocked kitchen is the #1 tenant complaint.",
      },
      {
        label: "Add a work-from-home setup",
        detail:
          "A desk, ergonomic chair, and good lighting. Most mid-term tenants work remotely at least part-time. This is now an expected amenity, not a bonus.",
      },
    ],
  },
  {
    title: "Listing & Marketing",
    items: [
      {
        label: "List on Furnished Finder (primary platform)",
        detail:
          "Furnished Finder is the #1 platform for traveling nurse and healthcare housing. One-time annual fee, no per-booking commission. Highest-intent tenant pool for MTRs near hospitals.",
      },
      {
        label: "Cross-list on Zillow and one additional platform",
        detail:
          "Zillow gets massive traffic for 30+ day rentals (free to list). Add Airbnb monthly stays, Facebook housing groups, or corporate housing platforms (CHBO, Landing) based on your target tenant.",
      },
      {
        label: "Professional photos — minimum 15–20 images",
        detail:
          "Bright, well-composed photos of every room. Include exterior, kitchen, bathrooms, bedrooms, workspace, and any unique features. Professional photography pays for itself in faster bookings.",
      },
      {
        label: "Write a listing that sells benefits, not features",
        detail:
          "Lead with tenant benefits: 'Walk to Memorial Hospital in 5 minutes' beats 'Close to hospital.' Include monthly pricing, utilities policy, lease flexibility, pet policy, and parking details.",
      },
    ],
  },
  {
    title: "Tenant Screening",
    items: [
      {
        label: "Verify employment or assignment documentation",
        detail:
          "Request a signed staffing agency contract, corporate relocation letter, or insurance claim authorization. This confirms the tenant has a defined reason and payment source.",
      },
      {
        label: "Run background and eviction checks",
        detail:
          "Use a screening service that returns results in 24–48 hours. Check for eviction history and criminal background. Most traveling nurses and corporate tenants pass easily.",
      },
      {
        label: "Collect first month's rent + security deposit before key handover",
        detail:
          "Standard security deposit is equal to one month's rent. Require renter's insurance ($15–$30/month for tenants). Document property condition with timestamped photos at move-in.",
      },
    ],
  },
  {
    title: "Pricing & Legal",
    items: [
      {
        label: "Price using the 2x–3x rule",
        detail:
          "Your MTR rate should be 2x to 3x your area's unfurnished long-term rental rate. A $1,200/month unfurnished property should target $2,400–$3,600/month as a furnished MTR. Validate against Furnished Finder comps in your market.",
      },
      {
        label: "Use a written lease with MTR-specific terms",
        detail:
          "Include: lease term and renewal options, monthly rent and deposit amounts, utilities responsibility, house rules, early termination clause, and guest policy. A standard long-term lease template needs MTR-specific modifications.",
      },
    ],
  },
];

export default function ChecklistPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-md bg-warm/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-warm">
            Free Resource
          </div>
          <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Mid-Term Rental <span className="text-warm">Starter Checklist</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            15 points covering everything from property assessment to your first tenant.
            Created by Michelle Romano.
          </p>
          <PrintButton />
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 print:py-4">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {sections.map((section, si) => (
            <div key={section.title} className={si > 0 ? "mt-12 print:mt-6" : ""}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warm text-sm font-bold text-white">
                  {si + 1}
                </span>
                <h2 className="text-xl font-bold text-primary">{section.title}</h2>
              </div>
              <div className="mt-4 space-y-4">
                {section.items.map((item) => (
                  <label
                    key={item.label}
                    className="flex items-start gap-3 rounded-lg border border-border p-4 cursor-pointer hover:bg-cream/50 transition-colors print:border-gray-300 print:p-2"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 h-5 w-5 shrink-0 rounded border-border text-warm focus:ring-warm/20 print:h-4 print:w-4"
                    />
                    <div>
                      <p className="font-semibold text-text">{item.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-text-light">{item.detail}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* CTA at bottom */}
          <div className="mt-16 rounded-2xl bg-cream p-8 text-center print:hidden">
            <h2 className="font-serif text-2xl font-bold text-primary">
              Need Help With Any of These Steps?
            </h2>
            <p className="mt-2 text-text-light">
              Michelle walks through every item on this checklist during a free strategy call.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-warm px-8 py-3 text-sm font-bold text-white transition-all hover:bg-warm-light"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
