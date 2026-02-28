const stats = [
  {
    value: "2x\u20133x",
    label: "More Revenue",
    description: "vs. traditional long-term rentals on the same property",
  },
  {
    value: "80%",
    label: "Less Turnover",
    description: "Mid-term tenants stay 3\u20139 months vs. nightly guests",
  },
  {
    value: "30+",
    label: "Day Minimum Stays",
    description: "Avoids most short-term rental regulations & restrictions",
  },
  {
    value: "46M",
    label: "Nights Booked in 2025",
    description: "Mid-term bookings have more than doubled since 2019",
  },
];

export default function Stats() {
  return (
    <section className="bg-primary py-16 md:py-20" aria-label="Key statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-warm md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-white/50">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
