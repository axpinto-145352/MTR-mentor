import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book Your Free Strategy Call",
  description:
    "Book a free 30-minute strategy call with Michelle Romano. Tell us about your property and goals, and get an honest assessment of your mid-term rental potential.",
  alternates: {
    canonical: "https://www.midtermmentor.com/contact",
  },
  openGraph: {
    title: "Contact Mid-Term Mentor — Book Your Free Strategy Call",
    description:
      "Book a free strategy call with Michelle Romano. Get an honest assessment of your mid-term rental potential.",
    url: "https://www.midtermmentor.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
