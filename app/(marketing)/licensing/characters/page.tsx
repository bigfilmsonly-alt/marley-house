import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Character Licensing — Lion Order',
  description:
    'License Lion Order characters King Clem, Kai Suna, and Runna Gyal for apparel, toys, games, media, and events.',
  alternates: { canonical: `${SITE}/licensing/characters` },
  openGraph: {
    title: 'Character Licensing — Lion Order',
    description:
      'License Lion Order characters for merchandise, media, and branded experiences.',
    url: `${SITE}/licensing/characters`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const characters = [
  { name: 'King Clem', desc: 'The noble lion ruler — embodies leadership, wisdom, and heritage. The flagship character of the Lion Order universe.' },
  { name: 'Kai Suna', desc: 'The explorer and truth-seeker — represents curiosity, courage, and connection to nature. Appeals to youth and adventure markets.' },
  { name: 'Runna Gyal', desc: 'The fierce protector — channels strength, independence, and cultural pride. A powerful female icon for lifestyle and sport.' },
];

const approvedUses = [
  'Apparel — t-shirts, hoodies, headwear, footwear collaborations',
  'Toys & Collectibles — action figures, plush, vinyl art toys',
  'Games — mobile, console, tabletop, and card games',
  'Media — animated series, short-form content, publishing',
  'Events — character appearances, themed activations, pop-ups',
];

const restrictions = [
  'Characters may not be altered in ways that conflict with brand values',
  'All designs require pre-approval from the Lion Order creative team',
  'Sublicensing is prohibited without written consent',
  'Licensees must adhere to the character style guide and color palette',
  'No association with tobacco, firearms, or gambling brands',
];

export default function CharacterLicensingPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Character Licensing
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Lion Order characters are original IP with built-in audiences and cultural
        resonance. Each character carries distinct narrative value for partners across
        merchandise, media, and experiential categories.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Available Characters</h2>
        <div className="space-y-6">
          {characters.map((c) => (
            <div key={c.name} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--gold)] font-semibold text-lg">{c.name}</h3>
              <p className="text-[var(--dim)] text-sm mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Approved Use Cases</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          {approvedUses.map((u) => (<li key={u}>{u}</li>))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Brand Guidelines &amp; Restrictions</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          {restrictions.map((r) => (<li key={r}>{r}</li>))}
        </ul>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">License a Character</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Submit your proposal and our team will review it for brand alignment and market fit.
        </p>
        <Link href="/licensing/apply" className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity">
          Apply Now
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/licensing" className="hover:text-[var(--gold)] transition-colors">Licensing Overview</Link>
        <Link href="/licensing/roots-format" className="hover:text-[var(--gold)] transition-colors">ROOTS Format</Link>
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
      </nav>
    </article>
  );
}
