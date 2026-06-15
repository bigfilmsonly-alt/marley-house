import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Membership — The Marley Group',
  description:
    'The Marley Group offers three membership tiers: Free access to the platform, Inner Circle at $9.99/month with full masterclass access and 10% discounts, and Legacy at $199 lifetime with priority booking and 15% off everything.',
  alternates: { canonical: `${SITE}/membership` },
  openGraph: {
    title: 'Membership — The Marley Group',
    description:
      'Free, Inner Circle, or Legacy — choose the tier that fits your journey.',
    url: `${SITE}/membership`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const tiers = [
  {
    name: 'Free',
    price: '$0',
    interval: 'forever',
    features: [
      'Browse the full platform',
      '1 masterclass preview',
      '3 Ask questions per day',
    ],
    cta: 'Get Started',
    href: '/',
    highlight: false,
  },
  {
    name: 'Inner Circle',
    price: '$9.99',
    interval: '/mo',
    features: [
      'All 8 masterclass episodes',
      'Unlimited Ask questions',
      '10% off coffee & merch',
      'Community access',
      '2x House Points',
    ],
    cta: 'Join Inner Circle',
    href: '/upgrade',
    highlight: true,
  },
  {
    name: 'Legacy',
    price: '$199',
    interval: 'one-time',
    features: [
      'Everything in Inner Circle',
      '15% off all products',
      'Priority booking at Beach House',
      'Private events & drops',
      '3x House Points',
    ],
    cta: 'Go Legacy',
    href: '/upgrade',
    highlight: false,
  },
];

const faqs = [
  { q: 'How does billing work?', a: 'Inner Circle is billed monthly. Legacy is a single one-time payment — no recurring charges ever.' },
  { q: 'Can I cancel anytime?', a: 'Inner Circle can be cancelled at any time from your account settings. You keep access until the end of your billing period.' },
  { q: 'Can I upgrade from Inner Circle to Legacy?', a: 'Yes. When you upgrade, your remaining Inner Circle balance is credited toward the Legacy price.' },
  { q: 'What are House Points?', a: 'House Points are earned on every purchase and interaction. Redeem them for discounts, merch, and exclusive experiences.' },
];

export default function MembershipPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Join the House
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group offers three membership tiers: Free access to the platform,
        Inner Circle at $9.99/month with full masterclass access and 10% discounts,
        and Legacy at $199 lifetime with priority booking and 15% off everything.
      </p>

      <div className="gold-rule mb-12" />

      {/* Tier Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-lg p-6 border transition-colors ${
              t.highlight
                ? 'border-[var(--gold)] bg-[var(--gold)]/5'
                : 'border-[var(--line)] bg-[var(--bg)]'
            }`}
          >
            <h3 className="font-display text-xl text-[var(--gold)] mb-1">{t.name}</h3>
            <p className="text-[var(--cream)] text-3xl font-bold mb-1">
              {t.price}
              <span className="text-sm font-normal text-[var(--dim)] ml-1">{t.interval}</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--dim)] mb-6">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={t.href}
              className={`block text-center text-sm font-bold uppercase tracking-wider px-6 py-3 rounded transition-opacity hover:opacity-90 ${
                t.highlight
                  ? 'bg-[var(--gold)] text-[var(--bg)]'
                  : 'border border-[var(--gold)] text-[var(--gold)]'
              }`}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Frequently Asked Questions</h2>
        <dl className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="text-[var(--cream)] font-bold mb-1">{f.q}</dt>
              <dd className="text-[var(--dim)] text-sm leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/upgrade" className="hover:text-[var(--gold)] transition-colors">Upgrade</Link>
        <Link href="/roots" className="hover:text-[var(--gold)] transition-colors">ROOTS</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
