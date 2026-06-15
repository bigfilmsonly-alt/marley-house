import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Cedella Marley — The Marley Group',
  description:
    'Cedella Marley is a singer, fashion designer, entrepreneur, and the eldest daughter of Bob Marley. She carries the family legacy through music, style, and philanthropy.',
  alternates: { canonical: `${SITE}/cedella-marley` },
  openGraph: {
    title: 'Cedella Marley — The Marley Group',
    description: 'Singer, designer, entrepreneur — Cedella Marley continues the legacy.',
    url: `${SITE}/cedella-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const highlights = [
  { year: '1967', event: 'Born in Kingston, Jamaica, the eldest daughter of Bob and Rita Marley.' },
  { year: '1988', event: 'Releases music as part of The Melody Makers alongside siblings Ziggy, Stephen, and Sharon.' },
  { year: '1996', event: 'Launches Catch a Fire, a lifestyle and fashion brand rooted in Jamaican culture.' },
  { year: '2004', event: 'Becomes CEO of the Bob Marley Group of Companies, overseeing brand partnerships and licensing worldwide.' },
  { year: '2009', event: 'Designs the Jamaican Olympic team uniforms for Puma, bringing Marley style to the global stage.' },
  { year: '2020', event: 'Continues philanthropic work through the Bob Marley Foundation and 1Love initiatives.' },
];

export default function CedellaMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Cedella Marley
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Cedella Marley is the eldest daughter of Bob and Rita Marley — a singer, fashion
        designer, author, and entrepreneur who has spent decades translating the Marley name
        into a global lifestyle brand while honoring its Jamaican roots.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Firstborn</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Growing up in the Marley household, Cedella absorbed music, activism, and enterprise
          from birth. She sang alongside her siblings in The Melody Makers, toured the world,
          and then pivoted into business — proving that the Marley legacy lives as powerfully
          in the boardroom as it does on stage.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          As CEO of the Bob Marley Group of Companies, she oversees licensing, partnerships,
          and brand strategy, ensuring that every product bearing the Marley name meets the
          standard the family demands.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Milestones</h2>
        <div className="relative border-l border-[var(--line)] ml-4">
          {highlights.map((h) => (
            <div key={`${h.year}-${h.event}`} className="pl-8 pb-8 relative">
              <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-bold mb-1">
                {h.year}
              </p>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{h.event}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Connection to The Marley Group</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          While Rohan Marley leads The Marley Group as its operational founder, Cedella&apos;s
          influence runs through the family&apos;s broader brand ecosystem. Her work in fashion,
          philanthropy, and corporate governance complements Rohan&apos;s focus on coffee,
          cannabis, and hospitality — two siblings building two pillars of the same house.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          Explore the full Marley family.
        </p>
        <Link
          href="/family"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Meet the Family
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/damian-marley" className="hover:text-[var(--gold)] transition-colors">Damian Marley</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
      </nav>
    </article>
  );
}
