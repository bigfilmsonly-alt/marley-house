import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Watch — The Marley Archive',
  description:
    'The definitive video archive of the Marley family — curated documentaries, interviews, performances, and behind-the-scenes footage spanning three generations.',
  alternates: { canonical: `${SITE_URL}/watch-all` },
  openGraph: {
    title: 'Watch — The Marley Archive',
    description: 'Curated video from three generations of the Marley family.',
    url: `${SITE_URL}/watch-all`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

type VideoCard = { title: string; videoId: string; channel?: string };

const sections: { heading: string; videos: VideoCard[] }[] = [
  {
    heading: 'Featured',
    videos: [
      { title: 'YG Marley — Praise Jah in the Moonlight', videoId: 'cDpEzmYx0qs' },
      { title: 'Rohan Marley — Drink Champs (Full Interview)', videoId: 'X0SZf3r63ls', channel: 'Drink Champs' },
      { title: 'Marley Coffee Brand Film', videoId: 'XE-uV_DsurA', channel: 'Marley Coffee' },
      { title: 'What Jamaica is REALLY Like [4K]', videoId: '4C7jwbF0yE0', channel: 'Our Taste' },
    ],
  },
  {
    heading: 'Rohan Marley',
    videos: [
      { title: 'Life as Bob Marley\'s Son | I AM ATHLETE', videoId: 'hBd-JIpdc50', channel: 'I AM ATHLETE' },
      { title: '"When My Father Passed Away..." | The Pivot', videoId: 'rhgStTzkeUo', channel: 'The Pivot Podcast' },
      { title: 'Stories Of The U — Miami Football', videoId: 'ogZDby-8cOo', channel: 'Stories Of The U' },
      { title: 'Rohan Marley | Before The Fame', videoId: 'TY4e5zSRECs', channel: 'FOX SOUL' },
    ],
  },
  {
    heading: 'YG Marley',
    videos: [
      { title: 'Praise Jah in the Moonlight (Official)', videoId: 'cDpEzmYx0qs' },
      { title: 'YG Marley with Rohan — Singing Together', videoId: 'eRIZqyqvKbI' },
      { title: 'Rohan Gets Deep About YG & Standing Up To The System', videoId: 'ygnZmsj05iw' },
    ],
  },
  {
    heading: 'Bob Marley Legacy',
    videos: [
      { title: 'Bob Marley 70th Birthday — Jamaica 2015', videoId: 'SgMWPwD7klk' },
      { title: 'Honoring Bob in "One Love"', videoId: '1vjUHbZ0tu8' },
      { title: 'Ziggy, Robbie & Rohan — Africa Road Trip', videoId: 'XJ8FmHoaEcI' },
      { title: 'The Deep Roots Binding Jamaica and Ethiopia', videoId: 'xrSS0ehYrVo' },
    ],
  },
  {
    heading: 'Family Moments',
    videos: [
      { title: 'Living Like Bob Marley — A Day with Rohan [4K]', videoId: 'wpfs_l6HHtk', channel: 'Our Taste' },
      { title: 'NOMAD — Joakim Noah Tours Jamaica with Rohan', videoId: 'oTYe3MZDinA', channel: 'NBA' },
      { title: 'Jamaica\'s Next Generation — Finale', videoId: '3jV0iulViQM', channel: 'Our Taste' },
    ],
  },
];

export default function WatchAllPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Watch
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The definitive video archive of the Marley family — curated documentaries, interviews,
        performances, and behind-the-scenes footage spanning three generations.
      </p>

      <div className="gold-rule mb-12" />

      {sections.map((section) => (
        <section key={section.heading} className="mb-14">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-6">{section.heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.videos.map((v) => (
              <a
                key={v.videoId + v.title}
                href={`https://www.youtube.com/watch?v=${v.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[var(--line)] rounded-lg overflow-hidden hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
              >
                <div className="aspect-video bg-black/40 relative">
                  <img
                    src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[var(--cream)] text-sm font-medium group-hover:text-[var(--gold)] transition-colors leading-snug">
                    {v.title}
                  </h3>
                  {v.channel && (
                    <p className="text-[var(--dim)] text-xs mt-1">{v.channel}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

      <div className="gold-rule mb-12" />

      <nav className="flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/dynasty" className="hover:text-[var(--gold)] transition-colors">The Dynasty</Link>
        <Link href="/listen" className="hover:text-[var(--gold)] transition-colors">Listen</Link>
        <Link href="/podcast" className="hover:text-[var(--gold)] transition-colors">Podcast</Link>
        <Link href="/the-archive" className="hover:text-[var(--gold)] transition-colors">The Archive</Link>
      </nav>
    </article>
  );
}
