import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Press Room — The Marley Group',
  description:
    'Media inquiries, press kits, and recent coverage for The Marley Group, Marley Coffee, Lion Order, and Ro Marley Beach House.',
  alternates: { canonical: `${SITE}/press-room` },
  openGraph: {
    title: 'Press Room — The Marley Group',
    description:
      'Media resources, press kits, and coverage for The Marley Group and its portfolio brands.',
    url: `${SITE}/press-room`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const coverage = [
  { outlet: 'Forbes', title: 'How Rohan Marley Turned Heritage Into Enterprise', year: '2024' },
  { outlet: 'Billboard', title: 'YG Marley\'s "Praise Jah" Crosses 1 Billion Streams', year: '2024' },
  { outlet: 'Bloomberg', title: 'The Business Behind the Marley Name', year: '2023' },
  { outlet: 'Rolling Stone', title: 'Inside the Marley Family\'s Next Chapter', year: '2023' },
];

export default function PressRoomPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Press Room
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        For media inquiries, interview requests, and press materials related to The Marley
        Group and its portfolio brands — Marley Coffee, Lion Order, Ro Marley Beach House,
        and ROOTS Media.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Media Contact</h2>
        <div className="border border-[var(--line)] rounded-2xl p-8">
          <p className="text-[var(--dim)] leading-relaxed mb-4">
            For press inquiries, interview requests, and media partnerships, contact our
            communications team.
          </p>
          <a
            href="mailto:press@marley-house.com"
            className="text-[var(--gold)] text-sm font-semibold hover:underline"
          >
            press@marley-house.com
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Press Kit</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Our press kit includes brand guidelines, high-resolution photography, founder
          bios, and approved messaging for each portfolio brand. Available upon request.
        </p>
        <a
          href="mailto:press@marley-house.com?subject=Press%20Kit%20Request"
          className="text-[var(--gold)] text-sm font-semibold hover:underline"
        >
          Request Press Kit &rarr;
        </a>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Recent Coverage</h2>
        <div className="space-y-4">
          {coverage.map((c) => (
            <div key={c.title} className="border border-[var(--line)] rounded-lg p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-[var(--gold)] text-sm font-bold">{c.outlet}</span>
                <span className="text-[var(--dim)] text-xs">{c.year}</span>
              </div>
              <h3 className="text-[var(--cream)] font-semibold mt-2">{c.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Brand Assets</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          All Marley Group trademarks, logos, and brand imagery are proprietary. Use of the
          Marley name, likeness, or brand assets requires written authorization. Contact
          our team for licensing inquiries.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/media" className="hover:text-[var(--gold)] transition-colors">Media</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/blog" className="hover:text-[var(--gold)] transition-colors">Blog</Link>
      </nav>
    </article>
  );
}
