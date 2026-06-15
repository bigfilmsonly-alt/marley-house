import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Shipping & Returns',
  description:
    'Shipping information, delivery timelines, and return policies for Marley Coffee, Lion Order, and The Marley Group merchandise.',
  alternates: { canonical: `${SITE_URL}/shipping-returns` },
};

export default function ShippingReturnsPage() {
  return (
    <article>
      <h1 className="text-[var(--gold)] font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
        Shipping &amp; Returns
      </h1>
      <p className="text-[var(--dim)] text-sm mb-10">
        Delivery timelines, shipping rates, and return policies across our brands.
      </p>

      <div className="space-y-8 text-[var(--cream)] text-sm leading-relaxed opacity-80">
        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Marley Coffee — Shipping</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Standard U.S. shipping: 5 to 7 business days.</li>
            <li>Expedited U.S. shipping: 2 to 3 business days (additional fee at checkout).</li>
            <li>International shipping available to select countries; delivery times vary by destination (typically 10 to 21 business days).</li>
            <li>Free standard shipping on U.S. orders over $50.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Marley Coffee — Returns</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unopened products may be returned within 30 days of delivery for a full refund.</li>
            <li>Opened or consumed products are not eligible for return unless defective.</li>
            <li>To initiate a return, contact support@marleycoffee.com with your order number.</li>
            <li>Refunds are processed within 10 business days of receiving the returned item.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Lion Order — Cannabis Products</h2>
          <p className="mb-3">
            Due to state and federal regulations, cannabis products cannot be shipped via
            standard carriers. All Lion Order products are available for purchase only through
            licensed dispensaries in participating U.S. states.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cannabis products cannot be returned once sold, per state regulatory requirements.</li>
            <li>If you receive a defective product, contact the dispensary where you purchased it for resolution.</li>
            <li>Lion Order does not sell or ship cannabis products internationally.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Merchandise &amp; Apparel</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Standard U.S. shipping: 5 to 7 business days.</li>
            <li>Unworn, unwashed items with original tags may be returned within 30 days.</li>
            <li>Custom or limited-edition items are final sale.</li>
            <li>Exchanges are subject to availability.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">RoMarley Beach House — Bookings</h2>
          <p>
            Hospitality reservations are subject to the cancellation policy displayed at the
            time of booking. For modifications or cancellations, visit{' '}
            <a href="https://romarleybeachhouse.com" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">
              romarleybeachhouse.com
            </a>{' '}
            or contact the guest services team directly.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Contact</h2>
          <p>
            For shipping inquiries or return assistance, email{' '}
            <a href="mailto:support@themarleygroup.com" className="text-[var(--gold)] hover:underline">
              support@themarleygroup.com
            </a>{' '}
            and include your order number. We aim to respond within 48 hours.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-xs leading-relaxed">
          Policies are subject to change. Last updated June 2026.
        </p>
      </div>
    </article>
  );
}
