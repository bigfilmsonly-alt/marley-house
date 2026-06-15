import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Press — Rohan Marley',
  description:
    'Media coverage, interviews, and press features on Rohan Marley — from Forbes and Bloomberg to Rolling Stone and Caribbean media.',
  alternates: { canonical: `${SITE}/rohan-marley/press` },
  openGraph: {
    title: 'Press — Rohan Marley',
    description: 'Interviews, features, and media coverage of Rohan Marley.',
    url: `${SITE}/rohan-marley/press`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const coverage = [
  {
    outlet: 'Forbes',
    title: 'How Rohan Marley Built a Coffee Empire in the Blue Mountains',
    year: '2019',
    url: '#',
  },
  {
    outlet: 'Bloomberg',
    title: 'The Marley Family\'s Next Act: Cannabis, Coffee, and Culture',
    year: '2023',
    url: '#',
  },
  {
    outlet: 'Rolling Stone',
    title: 'Rohan Marley on Legacy, Lion Order, and the Future of Reggae',
    year: '2023',
    url: '#',
  },
  {
    outlet: 'Jamaica Observer',
    title: 'RoMarley Beach House Opens on the North Coast',
    year: '2020',
    url: '#',
  },
  {
    outlet: 'Complex',
    title: 'Inside Lion Order: Rohan Marley\'s Premium Cannabis Brand',
    year: '2024',
    url: '#',
  },
  {
    outlet: 'Caribbean Beat',
    title: 'From the Gridiron to the Greenhouse: A Marley Story',
    year: '2022',
    url: '#',
  },
];

export default function RohanPressPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Press
      </h1>
      <p className="text-[var(--dim)] text-sm mb-12 uppercase tracking-wider">Rohan Marley</p>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Rohan Marley&apos;s story has been covered by the world&apos;s leading business, culture,
        and lifestyle publications. Below is a selection of interviews, features, and profiles
        spanning two decades of enterprise.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Selected Coverage</h2>
        <div className="space-y-4">
          {coverage.map((c) => (
            <a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-[var(--line)] rounded-lg p-5 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <span className="text-[var(--gold)] font-bold text-xs tracking-wider uppercase">
                  {c.outlet}
                </span>
                <span className="text-[var(--dim)] text-xs shrink-0">{c.year}</span>
              </div>
              <p className="text-[var(--cream)] text-sm leading-snug group-hover:text-[var(--gold)] transition-colors">
                {c.title}
              </p>
            </a>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Media Inquiries</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          For press inquiries, interview requests, or speaking engagements, contact the
          communications team at The Marley Group.
        </p>
        <a
          href="mailto:press@themarleygroup.com"
          className="text-[var(--gold)] text-sm font-bold hover:underline"
        >
          press@themarleygroup.com
        </a>
      </section>

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          See the full journey.
        </p>
        <Link
          href="/rohan-marley/timeline"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          View Timeline
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/rohan-marley/timeline" className="hover:text-[var(--gold)] transition-colors">Timeline</Link>
        <Link href="/rohan-marley/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
      </nav>
    </article>
  );
}
