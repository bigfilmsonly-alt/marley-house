import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'ROOTS Podcast — The Marley Group',
  description:
    'The ROOTS Podcast with Rohan Marley — conversations on legacy, entrepreneurship, Rastafari philosophy, and building culture-driven brands.',
  alternates: { canonical: `${SITE}/roots/podcast` },
  openGraph: {
    title: 'ROOTS Podcast — The Marley Group',
    description:
      'Conversations on legacy, business, and Rastafari philosophy with Rohan Marley.',
    url: `${SITE}/roots/podcast`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const episodes = [
  { num: '01', title: 'The Beginning', desc: 'Rohan Marley on growing up in the Marley household and finding his own path.' },
  { num: '02', title: 'Soil & Soul', desc: 'How farming in the Blue Mountains shaped a business philosophy.' },
  { num: '03', title: 'The Athlete\'s Edge', desc: 'Lessons from competitive football that translate to entrepreneurship.' },
  { num: '04', title: 'Family Name, Family Business', desc: 'Navigating the weight and privilege of the Marley legacy.' },
  { num: '05', title: 'Lion Order Origins', desc: 'The vision behind the cannabis brand rooted in Rastafari culture.' },
  { num: '06', title: 'Building the Beach House', desc: 'Turning a stretch of Jamaican coastline into a hospitality destination.' },
];

export default function PodcastPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        ROOTS Podcast
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The ROOTS Podcast is where Rohan Marley goes deep. Long-form conversations on
        legacy, entrepreneurship, Rastafari philosophy, and the real stories behind
        building culture-driven brands. No scripts, no filters — just truth from the root.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Recent Episodes</h2>
        <div className="space-y-4">
          {episodes.map((ep) => (
            <div key={ep.num} className="border border-[var(--line)] rounded-lg p-6 flex gap-5 items-start">
              <span className="text-[var(--gold)] font-bold text-lg shrink-0">{ep.num}</span>
              <div>
                <h3 className="text-[var(--cream)] font-semibold">{ep.title}</h3>
                <p className="text-[var(--dim)] text-sm mt-1">{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Listen On</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['Spotify', 'Apple Podcasts', 'YouTube'].map((platform) => (
            <div
              key={platform}
              className="border border-[var(--line)] rounded-lg p-5 text-center"
            >
              <span className="text-[var(--cream)] text-sm font-semibold">{platform}</span>
              <p className="text-[var(--dim)] text-xs mt-1">Coming Soon</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Never Miss an Episode</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Join the Inner Circle for early access to new episodes and exclusive bonus content.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/media" className="hover:text-[var(--gold)] transition-colors">Media</Link>
        <Link href="/masterclass" className="hover:text-[var(--gold)] transition-colors">Masterclass</Link>
        <Link href="/blog" className="hover:text-[var(--gold)] transition-colors">Blog</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
