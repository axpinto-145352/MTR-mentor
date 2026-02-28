import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LeadMagnet from "@/components/LeadMagnet";

export const metadata: Metadata = {
  title: "Mid-Term Mentor — Mid-Term Rentals Made Simple, Profitable, and Professional",
  description:
    "Expert mid-term rental consulting by Michelle Romano. Build, furnish, and manage profitable 30-90 day furnished rentals. Attract traveling nurses, corporate tenants, and more. Book your free strategy call today.",
  alternates: {
    canonical: "https://www.midtermmentor.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <LeadMagnet />
      <FAQ />
      <CTA />

      {/* FAQ Schema for GEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a mid-term rental?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A mid-term rental (MTR) is a furnished property leased for 30 days to 12 months, typically 3 to 9 months. They attract reliable tenants like traveling nurses, corporate professionals, insurance displacement tenants, and relocating families.",
                },
              },
              {
                "@type": "Question",
                name: "How much can I earn with a mid-term rental?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mid-term rentals typically generate 2x to 3x the revenue of traditional long-term leases. A property that rents for $1,200/month long-term could earn $2,500-$4,000/month as a furnished mid-term rental.",
                },
              },
              {
                "@type": "Question",
                name: "How is a mid-term rental different from Airbnb?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mid-term rentals offer more stability with less work. Tenants stay for months instead of days, turnover costs are 80% lower, you avoid most short-term rental regulations, and income is more predictable.",
                },
              },
              {
                "@type": "Question",
                name: "What types of tenants rent mid-term?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Common mid-term tenants include traveling nurses on 13-week contracts, corporate employees on temporary assignments, families displaced by insurance claims, people relocating between homes, college interns, and remote workers.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need special permits for a mid-term rental?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most markets, rentals of 30+ days fall outside short-term rental regulations, meaning you typically don't need a special STR permit. However, local rules vary. We review your municipality's requirements during our property assessment.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
