import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Damian Marley — The Marley Group',
  description:
    'Damian "Jr. Gong" Marley is a Grammy-winning artist, producer, and entrepreneur. He bridges reggae tradition and modern hip-hop as one of the most respected voices in the Marley family.',
  alternates: { canonical: `${SITE}/damian-marley` },
  openGraph: {
    title: 'Damian Marley — The Marley Group',
    description: 'Grammy-winning artist, producer, entrepreneur — Jr. Gong carries the torch.',
    url: `${SITE}/damian-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const milestones = [
  { year: '1978', event: 'Born in Kingston, Jamaica, the youngest son of Bob Marley and Cindy Breakspeare.' },
  { year: '1992', event: 'Records his debut single at age 13, earning the nickname "Jr. Gong" after his father\'s "Tuff Gong."' },
  { year: '1996', event: 'Releases Mr. Marley, his debut album, blending dancehall, reggae, and hip-hop.' },
  { year: '2001', event: 'Halfway Tree wins the Grammy for Best Reggae Album, establishing Damian as a global force.' },
  { year: '2005', event: '"Welcome to Jamrock" becomes an anthem, winning two Grammys and redefining reggae for a new era.' },
  { year: '2010', event: 'Collaborates with Nas on Distant Relatives, merging African and Caribbean consciousness.' },
  { year: '2017', event: 'Stony Hill wins the Grammy for Best Reggae Album — his fourth career Grammy.' },
  { year: '2019', event: 'Invests in cannabis ventures, converting a former California prison into a cultivation facility.' },
];

export default function DamianMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Damian Marley
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Damian &quot;Jr. Gong&quot; Marley is a four-time Grammy winner, a boundary-breaking
        producer, and one of the most commercially successful artists ever to carry the Marley
        name. He bridges his father&apos;s roots-reggae tradition with the energy of hip-hop
        and dancehall, proving that the Marley sound evolves without losing its soul.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Gongzilla</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Where Bob Marley was the prophet, Damian is the architect. His production label,
          Ghetto Youths International, has become a launchpad for new Jamaican talent, while
          his solo catalog — from &quot;Welcome to Jamrock&quot; to &quot;Nail Pon Cross&quot; —
          stands as the most critically acclaimed body of work in the second generation.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Beyond music, Damian has moved into cannabis entrepreneurship, social justice, and
          Pan-African collaboration, extending the Marley mission into territories his father
          could only have imagined.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Career Milestones</h2>
        <div className="relative border-l border-[var(--line)] ml-4">
          {milestones.map((m) => (
            <div key={`${m.year}-${m.event}`} className="pl-8 pb-8 relative">
              <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-bold mb-1">
                {m.year}
              </p>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Connection to The Marley Group</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Damian and Rohan share more than a surname. Their cannabis ventures run in parallel,
          their commitment to Jamaica is mutual, and their vision for the Marley name aligns:
          build enterprises that honor the culture, employ the community, and outlast any
          single headline.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          Meet every generation.
        </p>
        <Link
          href="/family"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          The Marley Family
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/cedella-marley" className="hover:text-[var(--gold)] transition-colors">Cedella Marley</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
      </nav>
    </article>
  );
}
