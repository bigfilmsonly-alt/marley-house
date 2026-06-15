import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Verify Authenticity — The Marley Group',
  description:
    'Verify the authenticity of any Marley Group product using the QR code or product code on your packaging.',
  alternates: { canonical: `${SITE}/verify` },
  openGraph: {
    title: 'Verify Authenticity — The Marley Group',
    description: 'Scan. Enter. Confirm. Make sure your Marley product is the real thing.',
    url: `${SITE}/verify`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function VerifyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Verify Your Product
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Every official Marley Group product carries a unique verification code. Use it
        to confirm your product is authentic and sourced from an authorized retailer.
      </p>

      <div className="gold-rule mb-12" />

      {/* Verification Input */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Enter Your Product Code</h2>
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
          <input
            type="text"
            placeholder="Enter your product code"
            className="flex-1 rounded border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--cream)] placeholder:text-[var(--dim)] focus:border-[var(--gold)] focus:outline-none transition-colors"
            aria-label="Product verification code"
          />
          <button
            type="button"
            className="bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Verify
          </button>
        </div>
        <p className="text-[var(--dim)] text-sm mt-3">
          The product code is printed on the inner packaging or on the QR sticker label.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">How It Works</h2>
        <ol className="space-y-6 text-[var(--dim)] leading-relaxed">
          <li className="flex gap-4">
            <span className="font-display text-[var(--gold)] text-xl shrink-0">01</span>
            <p>Locate the QR code on your product packaging. Every official Marley Coffee bag, Lion Order product, and Beach House item includes one.</p>
          </li>
          <li className="flex gap-4">
            <span className="font-display text-[var(--gold)] text-xl shrink-0">02</span>
            <p>Scan the QR code with your phone camera. It will direct you to this verification page with the code pre-filled.</p>
          </li>
          <li className="flex gap-4">
            <span className="font-display text-[var(--gold)] text-xl shrink-0">03</span>
            <p>Confirm authenticity. You will receive instant confirmation that your product is genuine, along with batch details and origin information.</p>
          </li>
        </ol>
      </section>

      {/* Lion Order COA */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Lion Order COA</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Lion Order cannabis products include a Certificate of Analysis (COA) with every
          batch. View lab results, terpene profiles, and compliance data on the{' '}
          <Link
            href="/lion-order"
            className="text-[var(--gold)] underline hover:opacity-80 transition-opacity"
          >
            Lion Order page
          </Link>.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Something Wrong?</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          If your product code is not recognized, it may be counterfeit. Please report it
          through our{' '}
          <Link
            href="/brand-protection"
            className="text-[var(--gold)] underline hover:opacity-80 transition-opacity"
          >
            Brand Protection
          </Link>{' '}
          page so we can investigate.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/brand-protection" className="hover:text-[var(--gold)] transition-colors">Brand Protection</Link>
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
