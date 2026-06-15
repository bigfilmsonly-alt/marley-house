import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Story of Rohan Marley',
  description:
    'From Kingston to Miami football to Jamaican coffee farms — the full story of Rohan Marley, son of Bob Marley and founder of The Marley Group.',
  alternates: { canonical: `${SITE}/rohan-marley/story` },
  openGraph: {
    title: 'The Story of Rohan Marley',
    description: 'From Kingston to the world. The journey of Rohan Marley.',
    url: `${SITE}/rohan-marley/story`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const chapters = [
  {
    title: 'Kingston, 1972',
    body: `Rohan Anthony Marley was born on May 19, 1972, in Kingston, Jamaica — the fourth son of Bob Marley and Janet Hunt. He grew up between Nine Mile, the spiritual heartland of the Marley family, and the vibrant streets of Kingston. Music was everywhere, but Rohan's fire was different. He wanted to compete, to build, to move.`,
  },
  {
    title: 'Miami and the Gridiron',
    body: `At the University of Miami, Rohan channeled that fire into football. As a linebacker for the Hurricanes, he earned a reputation for relentless energy on the field, playing alongside future NFL stars like Ray Lewis and Warren Sapp. Football taught him discipline, brotherhood, and the cost of ambition. Though the NFL was not his path, the lessons stayed.`,
  },
  {
    title: 'Back to the Land',
    body: `After football, Rohan returned to Jamaica. He acquired farmland in the Blue Mountains, determined to honor his father's love of the land. What started as a personal mission became Marley Coffee — a seed-to-cup operation that brought Jamaican coffee to the world stage. The philosophy was simple: grow with integrity, serve with pride.`,
  },
  {
    title: 'The Cannabis Chapter',
    body: `Rastafari tradition and the sacred herb are inseparable. With Lion Order, Rohan brought that heritage into the legal cannabis market — not as a celebrity endorsement, but as a craft operation rooted in respect for the plant, the culture, and the community. Each strain carries a story. Each product carries intention.`,
  },
  {
    title: 'Building the House',
    body: `Today, The Marley Group is the umbrella that connects every venture — coffee, cannabis, hospitality at RoMarley Beach House, and media through ROOTS. Rohan sees each brand as a room in a single house. The foundation is family. The architecture is craft. The vision is generational.`,
  },
  {
    title: 'From Bob to the Next Generation',
    body: `The story is not only about Rohan. It is about what comes next — YG Marley carrying the music forward, the next generation stepping into entrepreneurship, and a family name that means more with every decade. The story of Rohan Marley is still being written.`,
  },
];

export default function StoryPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Story of Rohan Marley
      </h1>

      {/* AEO Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-16 border-l-2 border-[var(--gold)] pl-5">
        From Kingston to the University of Miami gridiron to the Blue Mountains of Jamaica,
        the story of Rohan Marley is one of reinvention, heritage, and a relentless drive to
        build a legacy that honors the past while shaping the future.
      </p>

      {/* Narrative Chapters */}
      {chapters.map((ch, i) => (
        <section key={ch.title} className="mb-14">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-2">
            Chapter {String(i + 1).padStart(2, '0')}
          </p>
          <h2 className="font-display text-2xl text-[var(--cream)] mb-4">{ch.title}</h2>
          <p className="text-[var(--dim)] leading-relaxed">{ch.body}</p>
          {i < chapters.length - 1 && <div className="gold-rule mt-14" />}
        </section>
      ))}

      {/* CTA */}
      <section className="text-center py-12 mt-8">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          The next chapter is yours.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/rohan-marley/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">The Marley Group</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
      </nav>
    </article>
  );
}
