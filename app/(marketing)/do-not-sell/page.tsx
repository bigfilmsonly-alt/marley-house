import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Do Not Sell My Personal Information — The Marley Group',
  description:
    'Exercise your right under the California Consumer Privacy Act (CCPA) to opt out of the sale of your personal information.',
  alternates: { canonical: `${SITE}/do-not-sell` },
  openGraph: {
    title: 'Do Not Sell My Personal Information — The Marley Group',
    description: 'CCPA opt-out page for The Marley Group.',
    url: `${SITE}/do-not-sell`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function DoNotSellPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Do Not Sell My Personal Information
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Under the California Consumer Privacy Act (CCPA), California residents have the
        right to opt out of the &ldquo;sale&rdquo; of their personal information. This page
        explains what that means and how to exercise that right.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          What &ldquo;Sell&rdquo; Means Under CCPA
        </h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Under the CCPA, &ldquo;selling&rdquo; personal information means sharing it with
          a third party in exchange for monetary or other valuable consideration. This can
          include sharing data with advertising partners, analytics providers, or data
          brokers — even when no traditional payment occurs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Our Practices</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          The Marley Group does not sell personal information in the traditional sense.
          However, certain uses of cookies, pixels, and advertising identifiers may
          constitute a &ldquo;sale&rdquo; under CCPA&apos;s broad definition. We provide this
          opt-out mechanism to ensure full compliance and respect for your privacy choices.
        </p>
      </section>

      {/* Opt-Out Form */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Opt Out</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Enter the email address associated with your account or interactions with The
          Marley Group. We will process your opt-out request within 15 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 rounded border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--cream)] placeholder:text-[var(--dim)] focus:border-[var(--gold)] focus:outline-none transition-colors"
            aria-label="Email address for CCPA opt-out"
          />
          <button
            type="button"
            className="bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Opt Out
          </button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">What Happens Next</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Once your request is processed, we will stop sharing your personal information
          with third parties for purposes that qualify as a &ldquo;sale&rdquo; under CCPA.
          You will still be able to use all Marley Group websites and services.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Opting out does not affect data shared for essential services such as payment
          processing, order fulfillment, or security. It also does not delete your
          existing account or data — for deletion requests, please refer to our{' '}
          <Link
            href="/privacy-policy"
            className="text-[var(--gold)] underline hover:opacity-80 transition-opacity"
          >
            Privacy Policy
          </Link>.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/privacy-policy" className="hover:text-[var(--gold)] transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-[var(--gold)] transition-colors">Terms of Service</Link>
        <Link href="/brand-protection" className="hover:text-[var(--gold)] transition-colors">Brand Protection</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
