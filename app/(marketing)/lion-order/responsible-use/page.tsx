import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Responsible Use — Lion Order',
  description:
    'Lion Order responsible cannabis use guidelines: start low go slow, never drive impaired, safe storage, and SAMHSA helpline information.',
  alternates: { canonical: `${SITE}/lion-order/responsible-use` },
  openGraph: {
    title: 'Responsible Use — Lion Order',
    description: 'Start low, go slow. Cannabis safety and responsible use guidelines.',
    url: `${SITE}/lion-order/responsible-use`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const guidelines = [
  { rule: 'Start Low, Go Slow', detail: 'Begin with a low dose — especially with edibles — and wait at least two hours before consuming more. Everyone\'s endocannabinoid system is different.' },
  { rule: 'Never Drive Impaired', detail: 'Cannabis impairs reaction time and judgment. Never operate a vehicle or heavy machinery while under the influence. Plan ahead with a designated driver or rideshare.' },
  { rule: 'Store Safely', detail: 'Keep all cannabis products in child-resistant packaging, locked away from children and pets. Store in a cool, dark place to preserve freshness.' },
  { rule: 'Know Your Source', detail: 'Purchase only from licensed dispensaries that provide third-party lab results. Avoid unregulated products that may contain harmful additives.' },
  { rule: 'Respect the Setting', detail: 'Consume in a safe, comfortable environment. Be mindful of those around you — not everyone consents to secondhand smoke.' },
  { rule: 'Listen to Your Body', detail: 'If you feel uncomfortable, hydrate, find a calm space, and breathe. Effects are temporary. There is no recorded fatal overdose from cannabis alone.' },
];

export default function ResponsibleUsePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Safety First
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Responsible Use
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Lion Order is built on reverence for the plant. Responsible consumption is not a
        footnote — it is a core principle. Start low, go slow, never drive impaired, and
        always store safely.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Guidelines</h2>
        <div className="space-y-6">
          {guidelines.map((g) => (
            <div key={g.rule} className="border-l-2 border-[var(--line)] pl-5">
              <h3 className="text-[var(--cream)] font-semibold mb-1">{g.rule}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{g.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Need Help? SAMHSA Helpline
        </h2>
        <div className="border border-[var(--gold)] rounded-2xl p-8 sm:p-12 text-center">
          <p className="text-[var(--dim)] leading-relaxed mb-4">
            If you or someone you know is struggling with substance use, the Substance Abuse
            and Mental Health Services Administration (SAMHSA) provides free, confidential
            support 24/7.
          </p>
          <p className="text-[var(--gold)] text-2xl font-bold tracking-wide mb-2">
            1-800-662-4357
          </p>
          <p className="text-[var(--dim)] text-xs">
            SAMHSA National Helpline &middot; Free &middot; Confidential &middot; 24/7/365
          </p>
        </div>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Educate Yourself
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Learn about cannabinoids, terpenes, and how to read lab results.
        </p>
        <Link
          href="/lion-order/education"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Cannabis Education
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/education" className="hover:text-[var(--gold)] transition-colors">Cannabis Education</Link>
        <Link href="/lion-order/lab-results" className="hover:text-[var(--gold)] transition-colors">Lab Results</Link>
        <Link href="/lion-order/products" className="hover:text-[var(--gold)] transition-colors">Products</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">Story</Link>
      </nav>

      <footer className="mt-16 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-[10px] leading-relaxed tracking-wide">
          Cannabis products are intended for adults 21 and older. Check your local and state laws
          before purchasing. Lion Order does not make medical or health claims about cannabis.
          If you or someone you know needs help with substance use, contact SAMHSA at
          1-800-662-4357. Consume responsibly.
        </p>
      </footer>
    </article>
  );
}
