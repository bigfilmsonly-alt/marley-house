import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Codes of Lion Order — Rohan Marley',
  description:
    'The six codes that govern Lion Order: Strength of Spirit, Fight for Justice, Rastafari Virtues, Provoke Consciousness, Respect Your Nature, and High Quality.',
  alternates: { canonical: `${SITE}/lion-order/codes` },
  openGraph: {
    title: 'Codes of Lion Order',
    description: 'Six guiding codes that define everything Lion Order creates.',
    url: `${SITE}/lion-order/codes`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const codes = [
  {
    name: 'Strength of Spirit',
    expanded:
      'The foundation of everything. Strength is not physical force — it is the unwavering commitment to purpose, identity, and heritage. Lion Order products are made by people who refuse to compromise on what matters.',
  },
  {
    name: 'Fight for Justice',
    expanded:
      'The Marley legacy was born from resistance and righteousness. Lion Order carries that torch by championing equitable practices in the cannabis industry, honoring the communities who cultivated this plant long before legalization.',
  },
  {
    name: 'Rastafari Virtues',
    expanded:
      'Ital living, reverence for nature, communal upliftment, and spiritual sovereignty. These ancient virtues are not relics — they are the operating principles behind every Lion Order decision.',
  },
  {
    name: 'Provoke Consciousness',
    expanded:
      'Every product, character, and story exists to make you think deeper. Lion Order is not about passive consumption — it is about awakening. The brand provokes its audience toward higher awareness.',
  },
  {
    name: 'Respect Your Nature',
    expanded:
      'Honor the natural world and the nature within yourself. From organic cultivation practices to strain-hunted genetics, Lion Order respects the plant, the process, and the person.',
  },
  {
    name: 'High Quality',
    expanded:
      'Nothing leaves the house unless it is the best. Quality is not a marketing claim — it is the non-negotiable standard that governs sourcing, cultivation, presentation, and every customer touchpoint.',
  },
];

export default function CodesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Codes of Lion Order
      </h1>

      {/* AEO Answer Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Lion Order operates by six governing codes: Strength of Spirit, Fight for Justice,
        Rastafari Virtues, Provoke Consciousness, Respect Your Nature, and High Quality.
        These principles guide every product, story, and decision.
      </p>

      <div className="gold-rule mb-12" />

      {/* The Six Codes */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">The Six Codes</h2>
        <div className="space-y-6">
          {codes.map((c, i) => (
            <div
              key={c.name}
              className="border border-[var(--line)] rounded-lg p-6 bg-[var(--bg)]"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-[var(--gold)] text-xs font-mono tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl text-[var(--gold)]">{c.name}</h3>
              </div>
              <p className="text-[var(--dim)] leading-relaxed text-sm">{c.expanded}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Live by the Code</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          These codes live in every Lion Order product. Experience them firsthand.
        </p>
        <a
          href="https://lionorder.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Shop Lion Order
        </a>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/lion-order/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/lion-order/the-flower" className="hover:text-[var(--gold)] transition-colors">The Flower</Link>
        <Link href="/lion-order/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
        <Link href="/lion-order/strains/king-clementine" className="hover:text-[var(--gold)] transition-colors">King Clementine Strain</Link>
      </nav>

      {/* Disclaimer */}
      <footer className="mt-16 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-[10px] leading-relaxed tracking-wide">
          Cannabis products are intended for adults 21 and older. Check your local and state laws
          before purchasing. Lion Order does not make medical or health claims about cannabis.
          Consume responsibly.
        </p>
      </footer>
    </article>
  );
}
