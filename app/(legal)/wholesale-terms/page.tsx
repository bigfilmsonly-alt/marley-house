import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Wholesale Terms',
  description:
    'Business-to-business terms and conditions for wholesale accounts with The Marley Group, including Marley Coffee and Lion Order.',
  alternates: { canonical: `${SITE_URL}/wholesale-terms` },
};

export default function WholesaleTermsPage() {
  return (
    <article>
      <h1 className="text-[var(--gold)] font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
        Wholesale Terms
      </h1>
      <p className="text-[var(--dim)] text-sm mb-10">
        Terms and conditions for B2B wholesale accounts.
      </p>

      <div className="space-y-8 text-[var(--cream)] text-sm leading-relaxed opacity-80">
        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">1. Eligibility</h2>
          <p>
            Wholesale accounts are available to registered businesses, licensed retailers,
            and approved distributors. Applicants must provide a valid business license,
            resale certificate, and tax identification number. The Marley Group reserves the
            right to approve or decline any wholesale application at its discretion.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">2. Minimum Orders</h2>
          <p>
            Marley Coffee wholesale orders require a minimum of 50 units per SKU on initial
            orders and 25 units per SKU on reorders. Lion Order wholesale minimums vary by
            product and jurisdiction. Your account representative will confirm minimums during
            onboarding.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">3. Pricing &amp; Payment</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wholesale pricing is provided upon account approval and is confidential.</li>
            <li>Payment terms are Net 30 from the date of invoice unless otherwise agreed in writing.</li>
            <li>Late payments are subject to a 1.5% monthly finance charge.</li>
            <li>Prices are subject to change with 30 days written notice.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">4. Shipping &amp; Delivery</h2>
          <p>
            Wholesale orders ship FOB origin. The Marley Group will arrange shipping and add
            freight charges to the invoice unless the buyer specifies a preferred carrier.
            Delivery timelines are estimates and are not guaranteed. Risk of loss passes to
            the buyer upon transfer to the carrier.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">5. Returns &amp; Defects</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Defective or damaged goods must be reported within 7 days of delivery.</li>
            <li>Approved returns will be replaced or credited at The Marley Group&apos;s discretion.</li>
            <li>Cannabis products cannot be returned once delivered to a licensed retailer, per state regulations.</li>
            <li>Unauthorized returns will not be accepted or credited.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">6. Brand Standards</h2>
          <p>
            Wholesale partners must display Marley Group products in accordance with brand
            guidelines provided at onboarding. Unauthorized alteration of packaging, labeling,
            or marketing materials is prohibited. The Marley Group reserves the right to
            terminate accounts that do not maintain brand standards.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">7. Cannabis Compliance</h2>
          <p>
            Wholesale buyers of Lion Order cannabis products must hold all required state and
            local licenses. Buyers are solely responsible for compliance with applicable laws
            in their jurisdiction. The Marley Group does not ship cannabis products to
            jurisdictions where sale is not permitted.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">8. Termination</h2>
          <p>
            Either party may terminate the wholesale relationship with 30 days written notice.
            Outstanding invoices remain payable upon termination. The Marley Group may
            terminate immediately for material breach, including non-payment, regulatory
            violations, or brand misuse.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">9. Contact</h2>
          <p>
            To apply for a wholesale account or inquire about terms, contact{' '}
            <a href="mailto:wholesale@themarleygroup.com" className="text-[var(--gold)] hover:underline">
              wholesale@themarleygroup.com
            </a>.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-xs leading-relaxed">
          These terms are subject to change. Last updated June 2026. This document does not
          constitute a binding wholesale agreement. Final terms are established upon account
          approval and execution of a formal wholesale agreement.
        </p>
      </div>
    </article>
  );
}
