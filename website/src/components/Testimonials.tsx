const testimonials = [
  {
    quote:
      "Michelle took my vacant rental property and turned it into a fully furnished mid-term rental generating $3,200/month. The process was seamless — she handled everything from furniture to finding my first tenant.",
    name: "Rachel & Tom P.",
    detail: "Property Owners, Atlanta GA",
    initials: "RP",
    result: "$3,200/mo revenue",
  },
  {
    quote:
      "I was burned out on Airbnb — constant turnovers, cleaning fees, and guest drama. Michelle helped me convert to mid-term rentals and I now have stable tenants, way less work, and actually better income.",
    name: "James K.",
    detail: "Former Airbnb Host, Nashville TN",
    initials: "JK",
    result: "60% less work",
  },
  {
    quote:
      "As a real estate investor, mid-term rentals were new territory for me. Michelle's market analysis and setup guidance gave me the confidence to furnish two properties. Both were occupied within weeks.",
    name: "Priya S.",
    detail: "Real Estate Investor, Charlotte NC",
    initials: "PS",
    result: "2 properties launched",
  },
  {
    quote:
      "The furnishing consultation alone saved me thousands. Michelle knew exactly what mid-term tenants actually need vs. what's a waste of money. Her vendor relationships got me wholesale pricing on everything.",
    name: "David M.",
    detail: "New Property Owner, Austin TX",
    initials: "DM",
    result: "$4K saved on furnishing",
  },
  {
    quote:
      "We had a property sitting empty for months. Michelle assessed the local demand, helped us furnish it for traveling nurses, and we haven't had a vacancy since. The ROI has been incredible.",
    name: "Karen & Luis R.",
    detail: "Property Owners, Tampa FL",
    initials: "KR",
    result: "0% vacancy since launch",
  },
  {
    quote:
      "Michelle doesn't just set you up and leave — she's a true mentor. She taught me how to screen tenants, price competitively, and handle the business side so I can scale confidently.",
    name: "Michael T.",
    detail: "Growing MTR Portfolio, Denver CO",
    initials: "MT",
    result: "Scaled to 4 units",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm-dark">
            Client Results
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What Property Owners Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Real results from real property owners who partnered with Mid-Term Mentor
            to build profitable rental businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-md"
            >
              <div className="inline-flex self-start rounded-md bg-warm/10 px-3 py-1 text-xs font-bold text-warm-dark">
                {testimonial.result}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-light">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-warm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{testimonial.name}</p>
                  <p className="text-xs text-text-light">{testimonial.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
