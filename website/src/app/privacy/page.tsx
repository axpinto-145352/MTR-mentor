import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Mid-Term Mentor privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.midtermmentor.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-bold text-primary sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-text-light">Last updated: February 28, 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-light">
          <div>
            <h2 className="text-lg font-bold text-text">1. Information We Collect</h2>
            <p className="mt-2">When you use our website or contact us, we may collect the following information:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Personal Information:</strong> First name, last name, email address, phone number (when voluntarily provided through our contact form)</li>
              <li><strong>Property Information:</strong> Property location, number of properties, and service interests</li>
              <li><strong>Communications:</strong> Messages and correspondence you send to us</li>
              <li><strong>Usage Data:</strong> Browser type, pages visited, time spent on site, and referring URLs (collected automatically via standard web analytics)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">2. How We Use Your Information</h2>
            <p className="mt-2">We use the information we collect to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Provide our mid-term rental consulting services</li>
              <li>Send relevant follow-up communications about our services</li>
              <li>Improve our website and service offerings</li>
            </ul>
            <p className="mt-2">We will never sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">3. Data Retention</h2>
            <p className="mt-2">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, typically no longer than 24 months after your last interaction with us. You may request deletion of your data at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">4. Your Rights</h2>
            <p className="mt-2">Depending on your location, you may have the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:michelle@midtermmentor.com" className="text-warm-dark hover:text-warm underline">michelle@midtermmentor.com</a>.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">5. Cookies & Tracking</h2>
            <p className="mt-2">
              Our website may use essential cookies to ensure proper functionality. We do not use third-party advertising cookies. If we implement analytics tools, we will update this policy and provide appropriate disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">6. Data Security</h2>
            <p className="mt-2">
              We implement industry-standard security measures to protect your personal information, including HTTPS encryption, secure server infrastructure, and access controls. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">7. Third-Party Services</h2>
            <p className="mt-2">
              We may use third-party services for email delivery, hosting, and analytics. These services have their own privacy policies and we encourage you to review them. We only share the minimum information necessary for these services to function.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">8. Children&apos;s Privacy</h2>
            <p className="mt-2">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">9. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised &quot;Last updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text">10. Contact Us</h2>
            <p className="mt-2">
              If you have questions about this privacy policy or our data practices, please contact us at:
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
