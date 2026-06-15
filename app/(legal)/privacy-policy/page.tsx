import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'The Marley Group privacy policy — how we collect, use, and protect your personal information across all Marley brands.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="space-y-10">
      <header>
        <h1 className="text-[var(--gold)] font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-[var(--dim)] text-sm">Last updated: June 2026</p>
      </header>

      {/* Who We Are */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          1. Who We Are
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          This Privacy Policy applies to The Marley Group and its affiliated brands — Marley
          Coffee, Lion Order, and RoMarley Beach House (collectively, &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We are committed to safeguarding the
          personal information of every visitor to our websites and digital platforms.
        </p>
      </section>

      {/* Information We Collect */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          2. Information We Collect
        </h2>
        <h3 className="text-[var(--cream)] font-semibold text-sm mb-2">
          Information You Provide
        </h3>
        <ul className="text-[var(--cream)] text-sm leading-relaxed opacity-85 list-disc pl-5 space-y-1 mb-4">
          <li>Name, email address, and phone number (via the Inner Circle signup form)</li>
          <li>Instagram handle or other social media identifiers</li>
          <li>Any additional information you voluntarily submit through forms or chat</li>
        </ul>
        <h3 className="text-[var(--cream)] font-semibold text-sm mb-2">
          Information Collected Automatically
        </h3>
        <ul className="text-[var(--cream)] text-sm leading-relaxed opacity-85 list-disc pl-5 space-y-1">
          <li>Device type, browser, operating system, and screen resolution</li>
          <li>IP address and approximate geolocation</li>
          <li>Pages viewed, time on site, referral source, and interaction events</li>
          <li>Cookies and similar tracking technologies (see Section 6)</li>
        </ul>
      </section>

      {/* How We Use It */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          3. How We Use Your Information
        </h2>
        <ul className="text-[var(--cream)] text-sm leading-relaxed opacity-85 list-disc pl-5 space-y-1">
          <li>To deliver the Inner Circle experience and masterclass content</li>
          <li>To send transactional and marketing communications (with your consent)</li>
          <li>To improve our websites, products, and services</li>
          <li>To analyze site traffic and user behavior for optimization</li>
          <li>To comply with legal obligations and enforce our terms</li>
        </ul>
      </section>

      {/* Legal Bases */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          4. Legal Bases for Processing
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          We process personal data on the following legal bases: (a) your consent, for example
          when you subscribe to our mailing list; (b) performance of a contract, such as
          fulfilling a booking or purchase; (c) legitimate interests, including fraud prevention
          and site security; and (d) compliance with a legal obligation.
        </p>
      </section>

      {/* Third-Party Services */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          5. Third-Party Services
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85 mb-3">
          We work with trusted third-party providers to operate our platforms:
        </p>
        <ul className="text-[var(--cream)] text-sm leading-relaxed opacity-85 list-disc pl-5 space-y-1">
          <li><strong>Supabase</strong> — database and authentication infrastructure</li>
          <li><strong>Resend</strong> — transactional and marketing email delivery</li>
          <li><strong>Google Analytics</strong> — website traffic and behavior analytics</li>
          <li><strong>Meta Pixel</strong> — advertising conversion tracking</li>
          <li><strong>Vercel</strong> — hosting and edge delivery</li>
          <li><strong>Vimeo</strong> — video hosting and streaming</li>
          <li><strong>Anthropic</strong> — AI-powered chat assistant (&ldquo;Ask the House&rdquo;)</li>
        </ul>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85 mt-3">
          Each provider operates under its own privacy policy. We encourage you to review
          their terms independently.
        </p>
      </section>

      {/* Data Retention */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          6. Cookies &amp; Data Retention
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          We use cookies and similar technologies for analytics and functionality. You may
          disable cookies through your browser settings, though some features may not work as
          intended. We retain personal data only as long as necessary to fulfill the purposes
          outlined in this policy, or as required by law. When data is no longer needed, it is
          securely deleted or anonymized.
        </p>
      </section>

      {/* Your Rights */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          7. Your Rights
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85 mb-3">
          Depending on your jurisdiction, you may have the right to:
        </p>
        <ul className="text-[var(--cream)] text-sm leading-relaxed opacity-85 list-disc pl-5 space-y-1">
          <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
          <li><strong>Rectification</strong> — correct inaccurate or incomplete information</li>
          <li><strong>Erasure</strong> — request deletion of your personal data</li>
          <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
          <li><strong>Objection</strong> — object to certain types of processing</li>
          <li><strong>Withdraw consent</strong> — at any time, without affecting lawfulness of prior processing</li>
        </ul>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85 mt-3">
          To exercise any of these rights, contact{' '}
          <a href="mailto:privacy@themarleygroup.com" className="text-[var(--gold)] hover:underline">
            privacy@themarleygroup.com
          </a>.
        </p>
      </section>

      {/* California Residents */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          8. California Residents (CCPA)
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          If you are a California resident, the California Consumer Privacy Act (CCPA) grants
          you additional rights, including the right to know what personal information is
          collected, the right to request deletion, and the right to opt out of the sale of
          personal information. We do not sell your personal information. To submit a
          verifiable consumer request, email{' '}
          <a href="mailto:privacy@themarleygroup.com" className="text-[var(--gold)] hover:underline">
            privacy@themarleygroup.com
          </a>.
        </p>
      </section>

      {/* International Transfers */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          9. International Transfers
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          Your data may be transferred to and processed in countries other than your own,
          including the United States. We take appropriate safeguards to ensure your
          information remains protected in accordance with this policy and applicable data
          protection laws.
        </p>
      </section>

      {/* Children's Privacy */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          10. Children&rsquo;s Privacy
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          Our services are not directed to children under the age of 13, and we do not
          knowingly collect personal information from anyone under 13. Cannabis-related content
          and products are restricted to adults aged 21 and older. If we learn that we have
          collected data from a child under 13, we will delete it promptly.
        </p>
      </section>

      {/* Changes */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          11. Changes to This Policy
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          We may update this Privacy Policy from time to time. Material changes will be posted
          on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of our
          services after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          12. Contact
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          For questions or concerns about this Privacy Policy, contact us at:{' '}
          <a href="mailto:privacy@themarleygroup.com" className="text-[var(--gold)] hover:underline">
            privacy@themarleygroup.com
          </a>
        </p>
      </section>
    </article>
  );
}
