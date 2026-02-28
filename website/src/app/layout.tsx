import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.midtermmentor.com"),
  title: {
    default: "Mid-Term Mentor | Michelle Romano — Mid-Term Rental Consulting",
    template: "%s | Mid-Term Mentor",
  },
  description:
    "Expert mid-term rental consulting by Michelle Romano. We help property owners build, furnish, and manage profitable 30-90 day furnished rentals. Attract traveling nurses, corporate tenants, and more. Free strategy call.",
  keywords: [
    "mid-term rental",
    "mid-term rental consulting",
    "furnished rental",
    "traveling nurse housing",
    "corporate housing",
    "30 day rental",
    "furnished rental setup",
    "mid-term rental management",
    "MTR consulting",
    "rental property furnishing",
    "mid-term rental mentor",
    "Michelle Romano",
    "insurance housing",
    "rental income",
    "passive income real estate",
  ],
  authors: [{ name: "Michelle Romano" }],
  creator: "Mid-Term Mentor",
  publisher: "Mid-Term Mentor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.midtermmentor.com",
    siteName: "Mid-Term Mentor",
    title: "Mid-Term Mentor — Mid-Term Rentals Made Simple, Profitable, and Professional",
    description:
      "Expert consulting by Michelle Romano. Build, furnish, and manage profitable mid-term rentals that attract quality tenants.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mid-Term Mentor — Mid-Term Rentals Made Simple, Profitable, and Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mid-Term Mentor — Mid-Term Rental Consulting by Michelle Romano",
    description:
      "Build, furnish, and manage profitable mid-term rentals. Free strategy call available.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.midtermmentor.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Mid-Term Mentor",
              url: "https://www.midtermmentor.com",
              logo: "https://www.midtermmentor.com/logo.png",
              description:
                "Expert mid-term rental consulting helping property owners build, furnish, and manage profitable furnished rentals for traveling nurses, corporate professionals, and relocating families.",
              founder: {
                "@type": "Person",
                name: "Michelle Romano",
                jobTitle: "Mid-Term Rental Consultant",
              },
              email: "michelle@midtermmentor.com",
              sameAs: [
                "https://instagram.com/midtermmentor",
                "https://facebook.com/midtermmentor",
                "https://linkedin.com/in/michelleromano",
              ],
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType: [
                "Mid-Term Rental Consulting",
                "Property Furnishing",
                "Rental Property Management",
                "Tenant Placement",
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
