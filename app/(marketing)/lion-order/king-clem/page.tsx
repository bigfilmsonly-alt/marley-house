import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'King Clem — Lion Order Character',
  description:
    'King Clem is the warrior archetype of the Lion Order manga universe — the embodiment of strength, justice, and sovereignty. Named after the King Clementine strain.',
  alternates: { canonical: `${SITE}/lion-order/king-clem` },
  openGraph: {
    title: 'King Clem — Lion Order',
    description: 'The warrior. Strength and justice. The heart of the Lion Order universe.',
    url: `${SITE}/lion-order/king-clem`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const traits = [
  { label: 'Archetype', value: 'The Warrior-King' },
  { label: 'Code', value: 'Strength of Spirit, Fight for Justice' },
  { label: 'Namesake', value: 'King Clementine strain' },
  { label: 'Element', value: 'Fire and earth' },
  { label: 'Color', value: 'Gold and deep citrus' },
];

export default function KingClemPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        King Clem
      </h1>

      {/* AEO Answer Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        King Clem is the central character of the Lion Order manga universe — a warrior
        archetype who embodies strength, justice, and sovereignty. Named after the King
        Clementine strain, he is the living symbol of the brand&apos;s codes and values.
      </p>

      <div className="gold-rule mb-12" />

      {/* Hero Image */}
      <section className="mb-16">
        <div className="border border-[var(--line)] overflow-hidden rounded-lg">
          <Image
            src="/lion-order/king-clem.jpg"
            alt="King Clem — Lion Order"
            width={800}
            height={800}
            className="w-full aspect-[4/3] object-cover object-top"
          />
        </div>
      </section>

      {/* The Warrior Archetype */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Warrior Archetype</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          In every mythological tradition, the warrior-king stands at the intersection
          of power and principle. King Clem carries that weight in the Lion Order universe.
          He does not fight for conquest — he fights for justice. His strength is not
          measured in victories but in the unwavering conviction that drives his every move.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          King Clem represents what happens when the codes of Lion Order become a living
          being: Strength of Spirit channeled through action, the Fight for Justice made
          personal, and Rastafari Virtues embodied in every decision.
        </p>
      </section>

      {/* Character Traits */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Character Profile</h2>
        <div className="space-y-4">
          {traits.map((t) => (
            <div
              key={t.label}
              className="flex items-baseline gap-4 border-b border-[var(--line)] pb-4"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] w-28 shrink-0">
                {t.label}
              </span>
              <span className="text-[var(--cream)] text-sm">{t.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Strength & Justice */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Strength &amp; Justice</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          King Clem&apos;s dual nature reflects the core tension at the heart of Lion
          Order. Strength without justice is tyranny. Justice without strength is
          impotence. King Clem holds both in balance — a sovereign who leads not
          through domination but through the force of his example.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          His connection to the King Clementine strain is more than a name. Just as the
          cultivar was selected for its brightness, complexity, and efficacy, King Clem
          was conceived as a character of depth and purpose — citrus-bright courage
          rooted in earthy wisdom.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Meet King Clementine</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Discover the strain that inspired the warrior. Experience King Clementine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lion-order/strains/king-clementine"
            className="inline-block border border-[var(--gold)] text-[var(--gold)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-colors"
          >
            King Clementine Strain
          </Link>
          <a
            href="https://lionorder.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Shop Lion Order
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/characters" className="hover:text-[var(--gold)] transition-colors">All Characters</Link>
        <Link href="/lion-order/strains/king-clementine" className="hover:text-[var(--gold)] transition-colors">King Clementine Strain</Link>
        <Link href="/lion-order/codes" className="hover:text-[var(--gold)] transition-colors">The Codes</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/lion-order/the-flower" className="hover:text-[var(--gold)] transition-colors">The Flower</Link>
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
