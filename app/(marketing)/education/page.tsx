import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Education — The Marley Group',
  description:
    'Learn from the Marley legacy. Masterclasses, entrepreneurship frameworks, and brand-building wisdom from Rohan Marley and The Marley Group.',
  alternates: { canonical: `${SITE}/education` },
  openGraph: {
    title: 'Education — The Marley Group',
    description:
      'Masterclasses, entrepreneurship, and brand-building — education rooted in the Marley legacy.',
    url: `${SITE}/education`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pillars = [
  { title: 'The Marley Masterclass', href: '/masterclass', desc: 'Eight episodes covering coffee, cannabis, hospitality, storytelling, and legacy.' },
  { title: 'Entrepreneurship', href: '/entrepreneurship', desc: 'Rohan Marley\'s business philosophy — from athlete to global brand builder.' },
  { title: 'Building a Legacy Brand', href: '/business-building', desc: 'The framework behind Marley Coffee, Lion Order, and the Beach House.' },
];

export default function EducationPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Education
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group believes that knowledge is the foundation of empire. Through
        masterclasses, frameworks, and first-person storytelling, Rohan Marley shares
        decades of lessons in building brands that carry cultural weight and generational
        value.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Learning Pillars</h2>
        <div className="space-y-6">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="block border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <h3 className="text-[var(--cream)] font-semibold mb-2">{p.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.desc}</p>
              <span className="text-[var(--gold)] text-sm font-semibold mt-3 inline-block">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Philosophy</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Every lesson in The Marley Group&apos;s education platform is rooted in lived
          experience. Rohan Marley did not study business in a classroom — he built it in
          the Blue Mountains, on football fields, in boardrooms, and at kitchen tables
          across Jamaica.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          This is education for builders, dreamers, and anyone who believes that legacy is
          something you create with intention.
        </p>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Start with the Masterclass</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Eight episodes. Five-plus hours. The complete Marley blueprint.
        </p>
        <Link
          href="/masterclass"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Watch Now
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/masterclass" className="hover:text-[var(--gold)] transition-colors">Masterclass</Link>
        <Link href="/entrepreneurship" className="hover:text-[var(--gold)] transition-colors">Entrepreneurship</Link>
        <Link href="/business-building" className="hover:text-[var(--gold)] transition-colors">Brand Building</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
