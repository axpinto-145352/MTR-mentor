import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Mid-Term Mentor terms of service. Understand the terms governing your use of our website and consulting services.",
  alternates: { canonical: "https://www.midtermmentor.com/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-bold text-primary sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-text-light">Last updated: February 28, 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-light">
          <div>
            <h2 className="text-lg font-bold text-text">1. Agreement to Terms</h2>
            <p className="mt-2">
              By accessing or using the Mid-Term Mentor website (midtermmentor.com) and our consulting services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">2. Services</h2>
            <p className="mt-2">
              Mid-Term Mentor provides mid-term rental consulting services including, but not limited to, property assessment, furnishing guidance, listing optimization, tenant placement assistance, and ongoing management consulting. Our services are advisory in nature — all final decisions regarding your property remain yours.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">3. Disclaimer</h2>
            <p className="mt-2">
              While we strive to provide accurate and helpful guidance, Mid-Term Mentor does not guarantee specific financial results, occupancy rates, or rental income. Revenue projections are estimates based on market data and are not guarantees. Real estate markets involve inherent risks and variability.
            </p>
            <p className="mt-2">
              Testimonials and case studies on our website reflect individual experiences and results may vary based on property, location, market conditions, and other factors.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">4. Intellectual Property</h2>
            <p className="mt-2">
              All content on this website — including text, graphics, logos, images, and software — is the property of Mid-Term Mentor and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">5. User Responsibilities</h2>
            <p className="mt-2">When using our services, you agree to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Provide accurate and complete information</li>
              <li>Comply with all applicable local, state, and federal laws regarding rental properties</li>
              <li>Make your own independent decisions regarding your property and investments</li>
              <li>Not use our website for any unlawful purpose</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">6. Limitation of Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, Mid-Term Mentor and Michelle Romano shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or reliance on our advice. Our total liability for any claim shall not exceed the amount you have paid us for services in the 12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">7. Third-Party Links</h2>
            <p className="mt-2">
              Our website may contain links to third-party websites or services that are not owned or controlled by Mid-Term Mentor. We are not responsible for the content, privacy policies, or practices of any third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">8. Modifications</h2>
            <p className="mt-2">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">9. Governing Law</h2>
            <p className="mt-2">
              These terms shall be governed by and construed in accordance with the laws of the state in which Mid-Term Mentor operates, without regard to conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">10. Contact</h2>
            <p className="mt-2">
              For questions about these terms, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Mid-Term Mentor</strong><br />
              Michelle Romano<br />
              Email: <a href="mailto:michelle@midtermmentor.com" className="text-warm-dark hover:text-warm underline">michelle@midtermmentor.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
