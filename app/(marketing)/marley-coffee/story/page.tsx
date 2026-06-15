import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Marley Coffee Story — From Jamaica to the World',
  description:
    'How Rohan Marley turned a dream on Jamaican soil into a global coffee brand. The origin story of Marley Coffee, rooted in legacy and purpose.',
  alternates: { canonical: `${SITE}/marley-coffee/story` },
  openGraph: {
    title: 'The Marley Coffee Story',
    description:
      'How Rohan Marley turned a dream on Jamaican soil into a global coffee brand.',
    url: `${SITE}/marley-coffee/story`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const timeline = [
  { year: 'The Roots', text: 'Growing up in Jamaica, Rohan Marley was surrounded by coffee — the aroma of fresh beans drying in the sun, the ritual of a morning cup on the veranda. Coffee was woven into his earliest memories.' },
  { year: 'The Land', text: 'Rohan acquired farmland in the Blue Mountains of Jamaica, one of the world\'s most revered coffee-growing regions. He committed to organic, sustainable farming practices from day one.' },
  { year: 'The Mission', text: 'Marley Coffee was born with a simple mandate: honor the land, pay farmers fairly, and produce coffee worthy of the family name. Every bag would carry purpose alongside flavor.' },
  { year: 'The Growth', text: 'From local Jamaican markets to global distribution, Marley Coffee expanded while staying rooted in its founding principles — Fairtrade certification, One Tree Planted partnership, and single-origin sourcing.' },
  { year: 'The Legacy', text: 'Today Marley Coffee represents more than a beverage. It is a bridge between heritage and commerce, between Jamaica and the world. From seed to soul, every cup carries forward a legacy.' },
];

export default function StoryPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          Origin
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          The Marley Coffee Story
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Marley Coffee was founded by Rohan Marley to honor Jamaican farming
          heritage. Grown on family land in the Blue Mountains, every blend
          reflects a commitment to ethical sourcing, sustainability, and
          craftsmanship passed down through generations.
        </p>
      </header>

      {/* Timeline */}
      <section className="mb-16 space-y-10">
        {timeline.map((t, i) => (
          <div key={i} className="border-l-2 border-[var(--line)] pl-6">
            <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
              {t.year}
            </p>
            <p className="text-[var(--cream)] leading-relaxed">{t.text}</p>
          </div>
        ))}
      </section>

      {/* Quote */}
      <blockquote className="border border-[var(--line)] rounded-xl p-8 text-center mb-16">
        <p className="font-display text-xl text-[var(--cream)] italic leading-relaxed mb-4">
          &ldquo;Coffee is the bridge between where we come from and where
          we&rsquo;re going. Every cup is a conversation with the land.&rdquo;
        </p>
        <cite className="text-[var(--dim)] text-sm not-italic">
          — Rohan Marley
        </cite>
      </blockquote>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          href="/marley-coffee"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          &larr; All Blends
        </Link>
        <Link
          href="/marley-coffee/blue-mountain"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          Blue Mountain &rarr;
        </Link>
        <Link
          href="/marley-coffee/sourcing"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          How We Source &rarr;
        </Link>
        <Link
          href="/coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Shop Coffee
        </Link>
      </div>
    </article>
  );
}
