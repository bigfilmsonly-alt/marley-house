import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Entrepreneurship — Rohan Marley',
  description:
    'Rohan Marley\'s business philosophy — from college football at the University of Miami to building Marley Coffee, Lion Order, and The Marley Group.',
  alternates: { canonical: `${SITE}/entrepreneurship` },
  openGraph: {
    title: 'Entrepreneurship — Rohan Marley',
    description:
      'From athlete to global brand builder. Rohan Marley\'s entrepreneurial journey and lessons.',
    url: `${SITE}/entrepreneurship`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const lessons = [
  { title: 'Start with the Land', desc: 'Rohan\'s first business lesson came from Jamaican soil. Marley Coffee began with 52 acres in the Blue Mountains — ownership before branding.' },
  { title: 'Protect the Name', desc: 'A family name is not a shortcut. Every product must honor the legacy it carries. If it does not meet the standard, it does not ship.' },
  { title: 'Play the Long Game', desc: 'From football to business, Rohan learned that endurance beats speed. Marley Coffee took years before it reached global shelves.' },
  { title: 'Culture Is Strategy', desc: 'Rastafari principles, Jamaican roots, and family values are not side notes — they are the core competitive advantage.' },
  { title: 'Diversify with Purpose', desc: 'Coffee. Cannabis. Hospitality. Music. Media. Each vertical is intentional, not opportunistic.' },
];

export default function EntrepreneurshipPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Entrepreneurship
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Rohan Marley&apos;s entrepreneurial journey began on the football field at the
        University of Miami and led to the Blue Mountains of Jamaica. Today he oversees a
        portfolio of brands that span coffee, cannabis, hospitality, and media — all
        grounded in Rastafari principles and family legacy.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Lessons from the Journey</h2>
        <div className="space-y-6">
          {lessons.map((l) => (
            <div key={l.title} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--cream)] font-semibold mb-2">{l.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Portfolio</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Rohan Marley&apos;s business ventures are united by a single principle: every
          brand must carry cultural meaning. Marley Coffee is sourced from Jamaican farms.
          Lion Order is rooted in Rastafari philosophy. The Beach House brings people to
          the island to experience the lifestyle firsthand.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Together, these ventures form The Marley Group — a holding company that turns
          heritage into enterprise.
        </p>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Learn the Full Blueprint</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Eight masterclass episodes covering every vertical and the philosophy behind them.
        </p>
        <Link
          href="/masterclass"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Watch the Masterclass
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/education" className="hover:text-[var(--gold)] transition-colors">Education</Link>
        <Link href="/masterclass" className="hover:text-[var(--gold)] transition-colors">Masterclass</Link>
        <Link href="/business-building" className="hover:text-[var(--gold)] transition-colors">Brand Building</Link>
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
      </nav>
    </article>
  );
}
