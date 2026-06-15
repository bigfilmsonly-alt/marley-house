import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Cannabis Compliance',
  description:
    'The Marley Group cannabis compliance standards — age verification, jurisdictions, lab testing, responsible marketing, and regulatory commitments for Lion Order.',
  alternates: { canonical: `${SITE_URL}/cannabis-compliance` },
};

export default function CannabisCompliancePage() {
  return (
    <article className="space-y-10">
      <header>
        <h1 className="text-[var(--gold)] font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
          Cannabis Compliance
        </h1>
        <p className="text-[var(--dim)] text-sm">Effective: June 2026</p>
      </header>

      {/* Our Commitment */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          1. Our Commitment
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          The Marley Group and Lion Order are committed to operating within the highest
          standards of cannabis industry compliance. We believe that responsible business
          practices are essential to honoring the plant, the culture, and the communities we
          serve. Every decision we make — from sourcing to marketing — is guided by respect
          for the law and for our customers.
        </p>
      </section>

      {/* Age Verification */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          2. Age Verification
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          All cannabis-related content and products on our platforms are restricted to adults
          aged 21 and older. We implement age-gate verification before granting access to
          cannabis pages, product information, and purchasing flows. We do not knowingly market
          cannabis products to individuals under the legal purchasing age, and we encourage
          parents and guardians to monitor minors' internet activity.
        </p>
      </section>

      {/* Jurisdictions */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          3. Jurisdictions
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85 mb-3">
          Lion Order products are available exclusively in U.S. states that have legalized
          recreational cannabis for adults 21 and older, including but not limited to:
        </p>
        <ul className="text-[var(--cream)] text-sm leading-relaxed opacity-85 list-disc pl-5 space-y-1 mb-3">
          <li>California</li>
          <li>Colorado</li>
          <li>Illinois</li>
          <li>Massachusetts</li>
          <li>Michigan</li>
          <li>New Jersey</li>
          <li>New York</li>
          <li>Oregon</li>
          <li>Washington</li>
        </ul>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          Availability may expand as additional states enact legalization. We do not sell or
          ship cannabis products across state lines or to any jurisdiction where cannabis
          remains prohibited. It is your responsibility to verify the legality of cannabis in
          your area before making any purchase.
        </p>
      </section>

      {/* Lab Testing & COAs */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          4. Lab Testing &amp; Certificates of Analysis
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          Every Lion Order product undergoes rigorous third-party laboratory testing for
          potency, pesticides, heavy metals, residual solvents, microbials, and mycotoxins.
          Certificates of Analysis (COAs) are available upon request and may be published on
          product packaging or on lionorder.com. We partner only with ISO-accredited
          laboratories to ensure accuracy and transparency.
        </p>
      </section>

      {/* No Health Claims */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          5. No Health Claims Policy
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          The Marley Group does not make health claims regarding cannabis products. We do not
          represent that any Lion Order product can diagnose, treat, cure, or prevent any
          disease or medical condition. All product descriptions and educational content are
          provided for informational purposes only. For medical advice, consult a qualified
          healthcare provider. See our{' '}
          <a href="/medical-disclaimer" className="text-[var(--gold)] hover:underline">
            Medical Disclaimer
          </a>{' '}
          for more information.
        </p>
      </section>

      {/* Responsible Marketing */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          6. Responsible Marketing
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85 mb-3">
          Our marketing practices are guided by the following principles:
        </p>
        <ul className="text-[var(--cream)] text-sm leading-relaxed opacity-85 list-disc pl-5 space-y-1">
          <li>We do not target individuals under the age of 21</li>
          <li>We do not use imagery or language designed to appeal to minors</li>
          <li>We do not make unsubstantiated efficacy or health claims</li>
          <li>We clearly label all cannabis products with required state disclosures</li>
          <li>We include responsible-use messaging in our advertising and packaging</li>
          <li>We comply with all platform-specific advertising policies for cannabis brands</li>
        </ul>
      </section>

      {/* Contact for Compliance */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          7. Contact for Compliance Inquiries
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          If you have questions about our compliance practices, need to verify product testing
          results, or wish to report a concern, please contact our compliance team at:{' '}
          <a href="mailto:compliance@themarleygroup.com" className="text-[var(--gold)] hover:underline">
            compliance@themarleygroup.com
          </a>
        </p>
      </section>
    </article>
  );
}
