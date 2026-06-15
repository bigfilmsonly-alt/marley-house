import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Marley Masterclass',
  description:
    'Eight episodes with Rohan Marley covering Blue Mountain coffee, cannabis, family business, hospitality, storytelling, Rastafari principles, and revenue streams.',
  alternates: { canonical: `${SITE}/masterclass` },
  openGraph: {
    title: 'The Marley Masterclass',
    description:
      'Eight episodes. Five-plus hours. The complete blueprint from Rohan Marley.',
    url: `${SITE}/masterclass`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const episodes = [
  { num: '01', title: 'From Blue Mountain to Global Impact', desc: 'How Marley Coffee grew from Jamaican soil into a worldwide brand.' },
  { num: '02', title: 'Cannabis Playbook', desc: 'Navigating the legal cannabis industry with integrity and vision.' },
  { num: '03', title: 'Family Business', desc: 'Turning a family name into a multi-vertical enterprise.' },
  { num: '04', title: 'Hospitality', desc: 'Building Ro Marley Beach House and the art of immersive experience.' },
  { num: '05', title: 'Storytelling', desc: 'Why narrative is the most powerful tool in brand building.' },
  { num: '06', title: 'Athlete to Entrepreneur', desc: 'Lessons from the football field that apply to every boardroom.' },
  { num: '07', title: 'Rastafari Principles', desc: 'Grounding a global business in spiritual truth and cultural roots.' },
  { num: '08', title: 'Revenue Streams', desc: 'Diversifying income across coffee, cannabis, hospitality, media, and music.' },
];

export default function MasterclassPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Marley Masterclass
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Rohan Marley opens the vault on building a legacy brand. Eight episodes covering
        coffee, cannabis, hospitality, storytelling, and the Rastafari principles that
        guide every decision. Over five hours of first-person wisdom from one of the most
        recognized names in global culture.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <div className="flex items-baseline gap-6 mb-6">
          <h2 className="font-display text-2xl text-[var(--cream)]">Episodes</h2>
          <div className="flex gap-4 text-sm text-[var(--dim)]">
            <span>663K+ viewers</span>
            <span>8 episodes</span>
            <span>5+ hours</span>
          </div>
        </div>
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

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Start Watching</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Join the Inner Circle to unlock all eight episodes and exclusive bonus content.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/education" className="hover:text-[var(--gold)] transition-colors">Education</Link>
        <Link href="/entrepreneurship" className="hover:text-[var(--gold)] transition-colors">Entrepreneurship</Link>
        <Link href="/business-building" className="hover:text-[var(--gold)] transition-colors">Brand Building</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About Rohan</Link>
      </nav>
    </article>
  );
}
