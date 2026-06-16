import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Press — RM',
  description:
    'Press coverage and media resources for The Marley Group. Features in Forbes, Rolling Stone, Billboard, GQ, The New York Times, and more.',
  alternates: { canonical: `${SITE_URL}/press-all` },
  openGraph: {
    title: 'Press — RM',
    description: 'Media coverage across the Marley family of brands.',
    url: `${SITE_URL}/press-all`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const press = [
  { outlet: 'Forbes', headline: 'How Rohan Marley Is Building a Business Empire Beyond Music', date: '2024-11-15', tag: 'Business' },
  { outlet: 'Rolling Stone', headline: 'YG Marley: The Next Generation Arrives With "Praise Jah in the Moonlight"', date: '2024-02-08', tag: 'Music' },
  { outlet: 'Billboard', headline: 'YG Marley\'s "Praise Jah in the Moonlight" Hits No. 1 on Global Charts', date: '2024-03-12', tag: 'Music' },
  { outlet: 'GQ', headline: 'Rohan Marley on Legacy, Fatherhood, and the Art of Jamaican Coffee', date: '2024-06-20', tag: 'Culture' },
  { outlet: 'The New York Times', headline: 'The Marley Family\'s Expanding Empire: Coffee, Cannabis, and Beyond', date: '2024-01-22', tag: 'Business' },
  { outlet: 'Vogue', headline: 'Selah Marley on Growing Up in the World\'s Most Famous Musical Family', date: '2023-09-10', tag: 'Culture' },
  { outlet: 'Complex', headline: 'Rohan Marley Launches Lion Order Cannabis in Michigan', date: '2023-11-03', tag: 'Cannabis' },
  { outlet: 'Jamaica Observer', headline: 'Marley Coffee Expands Blue Mountain Operations', date: '2024-04-18', tag: 'Coffee' },
  { outlet: 'ESPN', headline: 'From the U to the Family Business: Rohan Marley\'s Journey After Football', date: '2024-08-30', tag: 'Sports' },
  { outlet: 'High Times', headline: 'Lion Order: Inside the Marley Family\'s Vision for Premium Cannabis', date: '2023-12-15', tag: 'Cannabis' },
  { outlet: 'Travel + Leisure', headline: 'RoMarley Beach House: Jamaica\'s Best-Kept Hospitality Secret', date: '2024-05-08', tag: 'Hospitality' },
  { outlet: 'The Guardian', headline: 'Bob Marley: One Love — How the Family Shaped the Film', date: '2024-02-14', tag: 'Film' },
  { outlet: 'Pitchfork', headline: 'Skip Marley and the New Sound of Jamaican Pop', date: '2023-07-22', tag: 'Music' },
];

export default function PressAllPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Press
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Press coverage and media resources for The Marley Group. Features in Forbes,
        Rolling Stone, Billboard, GQ, The New York Times, and more.
      </p>

      <div className="gold-rule mb-12" />

      {/* Coverage */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Coverage</h2>
        <div className="divide-y divide-[var(--line)]">
          {press.map((item, i) => (
            <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-[var(--gold)] text-sm font-medium shrink-0 w-36">
                {item.outlet}
              </span>
              <span className="text-[var(--cream)] text-sm leading-snug flex-1">
                {item.headline}
              </span>
              <div className="flex items-center gap-3 mt-1 sm:mt-0 shrink-0">
                <span className="text-[var(--dim)] text-xs border border-[var(--line)] rounded px-2 py-0.5">
                  {item.tag}
                </span>
                <time className="text-[var(--dim)] text-xs">{item.date}</time>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Inquiries */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Media Inquiries</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          For press inquiries, interview requests, or media credentials, contact the
          communications team at The Marley Group.
        </p>
        <a
          href="mailto:press@marley-house.com"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          press@marley-house.com
        </a>
      </section>

      {/* Press Kit */}
      <section className="mb-16 border border-[var(--line)] rounded-lg p-6 bg-[var(--bg)]">
        <h2 className="font-display text-xl text-[var(--cream)] mb-2">Press Kit</h2>
        <p className="text-[var(--dim)] text-sm mb-4">
          Approved logos, brand guidelines, executive bios, and high-resolution photography
          for editorial use.
        </p>
        <a
          href="mailto:press@marley-house.com?subject=Press%20Kit%20Request"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Request Press Kit
        </a>
      </section>

      <div className="gold-rule mb-12" />

      <nav className="flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/dynasty" className="hover:text-[var(--gold)] transition-colors">The Dynasty</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/watch-all" className="hover:text-[var(--gold)] transition-colors">Watch</Link>
        <Link href="/listen" className="hover:text-[var(--gold)] transition-colors">Listen</Link>
      </nav>
    </article>
  );
}
