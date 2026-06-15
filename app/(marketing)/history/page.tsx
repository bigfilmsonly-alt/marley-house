import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'History — The Marley Group',
  description:
    'From Bob Marley\'s musical revolution to The Marley Group\'s modern enterprise — the full history of how a family turned culture into commerce without losing its soul.',
  alternates: { canonical: `${SITE}/history` },
  openGraph: {
    title: 'History — The Marley Group',
    description: 'The complete history of the Marley enterprise, from Bob to the boardroom.',
    url: `${SITE}/history`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function HistoryPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        History
      </h1>
      <p className="text-[var(--dim)] text-sm mb-12 uppercase tracking-wider">The Marley Group</p>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group did not begin in a boardroom. It began in Nine Mile, Jamaica, with a
        boy who believed that music could move the world. This is the history of how that belief
        became a global enterprise — and why the family refuses to let it become a museum.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Foundation: Bob Marley</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Robert Nesta Marley was born in 1945 in the hills of St. Ann Parish. By the time
          he died in 1981, he had sold over 75 million records, united a fractured Jamaican
          political landscape through the One Love Peace Concert, and given the Third World
          its most recognized anthem. But his greatest export was not a song — it was a
          standard: that culture and commerce could coexist without compromise.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Transition: Family Enterprise</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          After Bob&apos;s passing, the Marley estate became one of the highest-earning
          celebrity estates in the world. Rita Marley and the children faced a choice:
          license the name and collect royalties, or build something new. They chose both —
          protecting the catalog while investing in ventures that extended the Marley identity
          beyond music.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Ziggy carried the music. Cedella built the fashion. Stephen produced the sound.
          And Rohan went to the land.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Enterprise: Rohan&apos;s Vision</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Rohan Marley took the Blue Mountain coffee farm that had been in the family for
          decades and turned it into Marley Coffee — a global brand distributed in over
          thirty countries. He followed with Lion Order in cannabis and RoMarley Beach House
          in hospitality. Each brand shares a common DNA: Jamaican origin, uncompromising
          quality, and a story worth telling.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          In 2024 these brands were united under The Marley Group, a family holding company
          designed to give the next generation a single roof, a shared infrastructure, and
          a clear mandate: grow the house, never sell the land.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Future</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          History is not what happened — it is what you do with what happened. The Marley
          Group exists to prove that a family name can be both a sacred inheritance and a
          living business. The next chapter is being written now, by grandchildren who have
          never met Bob but carry his frequency in everything they build.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          See every milestone.
        </p>
        <Link
          href="/timeline"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Full Timeline
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/timeline" className="hover:text-[var(--gold)] transition-colors">Timeline</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/the-name" className="hover:text-[var(--gold)] transition-colors">The Name</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
