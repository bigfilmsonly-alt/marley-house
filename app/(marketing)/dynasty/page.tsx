import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Dynasty — RM',
  description:
    'The Marley dynasty spans four generations — from Bob Marley\'s revolutionary music to Rohan\'s business empire to YG Marley\'s global breakthrough. Each generation carries the legacy forward through craft, culture, and commerce.',
  alternates: { canonical: `${SITE_URL}/dynasty` },
  openGraph: {
    title: 'The Dynasty — RM',
    description: 'Four generations of craft, culture, and commerce.',
    url: `${SITE_URL}/dynasty`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const generations = [
  {
    era: 'The Foundation',
    period: '1945 – 1981',
    members: [
      { name: 'Bob Marley', href: '/bob-marley', role: 'Patriarch. Revolutionary. The voice that changed the world.' },
    ],
  },
  {
    era: 'The Builders',
    period: '1968 – present',
    members: [
      { name: 'Ziggy Marley', href: '/ziggy-marley', role: 'Eight-time Grammy winner. Carries the musical torch.' },
      { name: 'Stephen Marley', href: '/stephen-marley', role: 'Producer, songwriter, five Grammy awards.' },
      { name: 'Rohan Marley', href: '/rohan-marley', role: 'Entrepreneur. Coffee, cannabis, hospitality.' },
      { name: 'Damian Marley', href: '/damian-marley', role: 'Jr. Gong. Two-time Grammy winner.' },
      { name: 'Cedella Marley', href: '/cedella-marley', role: 'Author, designer, guardian of the estate.' },
      { name: 'Julian Marley', href: '/julian-marley', role: 'Grammy-nominated roots reggae artist.' },
      { name: 'Ky-Mani Marley', href: '/ky-mani-marley', role: 'Actor, musician, storyteller.' },
    ],
  },
  {
    era: 'The Next Wave',
    period: '1995 – present',
    members: [
      { name: 'YG Marley', href: '/yg-marley', role: 'Global breakout. "Praise Jah in the Moonlight."' },
      { name: 'Skip Marley', href: '/skip-marley', role: 'Grammy-nominated. Bob\'s youngest grandson on the charts.' },
    ],
  },
];

const empire = [
  { name: 'Marley Coffee', href: '/marley-coffee', desc: 'Farm-to-cup from the Blue Mountains' },
  { name: 'Lion Order', href: '/lion-order', desc: 'Premium cannabis rooted in tradition' },
  { name: 'RoMarley Beach House', href: '/romarley-beach-house', desc: 'Boutique hospitality in Jamaica' },
  { name: 'Tuff Gong International', href: '/bob-marley', desc: 'The label Bob built' },
  { name: 'House of Marley', href: '/legacy', desc: 'Sustainable audio and lifestyle' },
];

export default function DynastyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Dynasty
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley dynasty spans four generations — from Bob Marley&apos;s revolutionary music
        to Rohan&apos;s business empire to YG Marley&apos;s global breakthrough. Each generation
        carries the legacy forward through craft, culture, and commerce.
      </p>

      <div className="gold-rule mb-12" />

      {/* The Generations */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">The Generations</h2>
        <div className="space-y-10">
          {generations.map((gen) => (
            <div key={gen.era}>
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="font-display text-lg text-[var(--gold)]">{gen.era}</h3>
                <span className="text-[var(--dim)] text-xs tracking-wider">{gen.period}</span>
              </div>
              <div className="border-l border-[var(--line)] pl-6 space-y-3">
                {gen.members.map((m) => (
                  <Link key={m.name} href={m.href} className="block group">
                    <span className="text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors font-medium">
                      {m.name}
                    </span>
                    <span className="text-[var(--dim)] text-sm ml-3">{m.role}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Empire Today */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">The Empire Today</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-6">
          What began as music became a global enterprise. Coffee, cannabis, hospitality,
          audio, and media — each brand rooted in the same Jamaican soil.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {empire.map((b) => (
            <Link key={b.name} href={b.href} className="border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]">
              <h3 className="font-display text-[var(--gold)] mb-1">{b.name}</h3>
              <p className="text-[var(--dim)] text-sm">{b.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* The Next Wave */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Next Wave</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          YG Marley&apos;s &ldquo;Praise Jah in the Moonlight&rdquo; reached No. 1 globally in 2024.
          Skip Marley collaborates with the biggest names in pop. The third generation is not
          inheriting fame — they are earning it.
        </p>
        <div className="flex gap-4 mt-6">
          <Link href="/yg-marley" className="text-[var(--gold)] text-sm hover:underline">YG Marley</Link>
          <Link href="/skip-marley" className="text-[var(--gold)] text-sm hover:underline">Skip Marley</Link>
          <Link href="/the-family-tree" className="text-[var(--gold)] text-sm hover:underline">View Family Tree</Link>
        </div>
      </section>

      <div className="gold-rule mb-12" />

      <nav className="flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/the-family-tree" className="hover:text-[var(--gold)] transition-colors">Family Tree</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/watch-all" className="hover:text-[var(--gold)] transition-colors">Watch</Link>
        <Link href="/listen" className="hover:text-[var(--gold)] transition-colors">Listen</Link>
        <Link href="/press-all" className="hover:text-[var(--gold)] transition-colors">Press</Link>
      </nav>
    </article>
  );
}
