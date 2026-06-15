import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'ROOTS Episodes — The Marley Group',
  description:
    'Browse every ROOTS episode — masterclasses and docuseries from Rohan Marley covering coffee, cannabis, hospitality, storytelling, and Rastafari principles.',
  alternates: { canonical: `${SITE}/roots/episodes` },
  openGraph: {
    title: 'ROOTS Episodes — The Marley Group',
    description: 'The full episode catalogue from ROOTS Media.',
    url: `${SITE}/roots/episodes`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const episodes = [
  { ep: 1, title: 'Blue Mountain', desc: 'How Rohan turned a family farm into a global coffee brand.', duration: '42 min', tier: 'free' as const },
  { ep: 2, title: 'The Cannabis Playbook', desc: 'Building Lion Order in a shifting legal landscape.', duration: '38 min', tier: 'inner' as const },
  { ep: 3, title: 'Family Business', desc: 'Managing legacy, ego, and ten siblings under one name.', duration: '45 min', tier: 'inner' as const },
  { ep: 4, title: 'Hospitality', desc: 'Creating RoMarley Beach House as a destination, not just a hotel.', duration: '36 min', tier: 'inner' as const },
  { ep: 5, title: 'Storytelling & Brand', desc: 'Turning a last name into a living brand without losing the soul.', duration: '40 min', tier: 'inner' as const },
  { ep: 6, title: 'Athlete to Entrepreneur', desc: 'From the football pitch to the boardroom — Rohan\'s pivot.', duration: '34 min', tier: 'inner' as const },
  { ep: 7, title: 'Rastafari Principles', desc: 'How Ital living and spiritual discipline shape every Marley venture.', duration: '48 min', tier: 'legacy' as const },
  { ep: 8, title: 'Revenue Streams', desc: 'Coffee, cannabis, real estate, media — diversifying the Marley portfolio.', duration: '44 min', tier: 'legacy' as const },
  { ep: 9, title: 'The Next Generation', desc: 'Preparing the Marley grandchildren to carry the name forward.', duration: '39 min', tier: 'legacy' as const },
  { ep: 10, title: 'One House', desc: 'The vision for The Marley Group — uniting every brand under one roof.', duration: '50 min', tier: 'legacy' as const },
];

function tierBadge(tier: 'free' | 'inner' | 'legacy') {
  switch (tier) {
    case 'free':
      return { label: 'Free', cls: 'bg-[var(--gold)]/10 text-[var(--gold)]' };
    case 'inner':
      return { label: 'Inner Circle', cls: 'bg-[var(--gold)]/10 text-[var(--gold)]' };
    case 'legacy':
      return { label: 'Legacy', cls: 'bg-[var(--line)] text-[var(--cream)]' };
  }
}

export default function EpisodesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        ROOTS Episodes
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Browse every ROOTS episode — masterclasses and docuseries from Rohan Marley
        covering coffee, cannabis, hospitality, storytelling, and Rastafari principles.
      </p>

      <div className="gold-rule mb-12" />

      {/* Episode List */}
      <section className="space-y-4 mb-16">
        {episodes.map((ep) => {
          const badge = tierBadge(ep.tier);
          return (
            <div
              key={ep.ep}
              className="flex flex-col sm:flex-row sm:items-center justify-between border border-[var(--line)] rounded-lg p-5 bg-[var(--bg)] gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[var(--gold)] font-bold text-sm tabular-nums">
                    {String(ep.ep).padStart(2, '0')}
                  </span>
                  <h3 className="text-[var(--cream)] font-bold truncate">{ep.title}</h3>
                </div>
                <p className="text-[var(--dim)] text-sm leading-relaxed">{ep.desc}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[var(--dim)] text-xs">{ep.duration}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded ${badge.cls}`}>
                  {badge.label}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Gated CTA */}
      <section className="text-center py-12 border border-[var(--line)] rounded-lg bg-[var(--bg)]">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Want full access?</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto text-sm">
          Episode 1 is free. Join Inner Circle to unlock episodes 2-6, or go Legacy for the complete catalogue including private sessions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/membership"
            className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            See Plans
          </Link>
          <Link
            href="/upgrade"
            className="inline-block border border-[var(--gold)] text-[var(--gold)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Upgrade Now
          </Link>
        </div>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/roots" className="hover:text-[var(--gold)] transition-colors">ROOTS</Link>
        <Link href="/membership" className="hover:text-[var(--gold)] transition-colors">Membership</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
