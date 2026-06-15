import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Courses — The Marley Group',
  description:
    'The Marley Group course catalog — masterclass series, brand building workshops, and entrepreneur education from Rohan Marley.',
  alternates: { canonical: `${SITE}/courses` },
  openGraph: {
    title: 'Courses — The Marley Group',
    description: 'Course catalog and learning programs from The Marley Group.',
    url: `${SITE}/courses`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const courses = [
  { title: 'The Rohan Marley Masterclass', episodes: 8, format: 'Video Series', description: 'Eight episodes covering Blue Mountain coffee, cannabis, family business, hospitality, storytelling, athlete transitions, Rastafari principles, and revenue streams.', href: '/masterclass', featured: true },
  { title: 'Brand Building Fundamentals', episodes: 6, format: 'Video + Workbook', description: 'How to build a brand rooted in authentic narrative — from positioning to visual identity to market entry.', href: '/business-building' },
  { title: 'AI for Entrepreneurs', episodes: 4, format: 'Workshop Series', description: 'Practical AI implementation for brand builders — content systems, market intelligence, and operational efficiency.', href: '/ai-for-business' },
  { title: 'From Seed to Shelf', episodes: 5, format: 'Documentary Series', description: 'The complete journey of building a vertically integrated agriculture business — told through Marley Coffee.', href: '/marley-coffee' },
];

export default function CoursesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Courses
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Learn from two decades of building culture-driven brands. The Marley
        Group education platform delivers practical knowledge — not theory —
        from operators who have built it themselves.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Course Catalog</h2>
        <div className="space-y-6">
          {courses.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="block border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-display text-xl text-[var(--cream)]">{c.title}</h3>
                {c.featured && (
                  <span className="text-[var(--gold)] text-[10px] tracking-wider uppercase border border-[var(--gold)] px-2 py-0.5 rounded whitespace-nowrap">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-[var(--dim)] text-sm leading-relaxed mb-3">{c.description}</p>
              <div className="flex gap-4 text-[var(--dim)] text-xs tracking-wider">
                <span>{c.episodes} episodes</span>
                <span>&middot;</span>
                <span>{c.format}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Coming Soon</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Cannabis Business Foundations — launching Q3 2026</li>
          <li>Hospitality by Design — launching Q4 2026</li>
          <li>Revenue Architecture for Creators — in development</li>
        </ul>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Start with the Masterclass</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          The flagship Rohan Marley Masterclass is the foundation of our
          education platform. Eight episodes. Zero filler.
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
        <Link href="/mentorship" className="hover:text-[var(--gold)] transition-colors">Mentorship</Link>
        <Link href="/fellowship" className="hover:text-[var(--gold)] transition-colors">Fellowship</Link>
      </nav>
    </article>
  );
}
