import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: '1Love Initiative — The Marley Group Foundation',
  description:
    'The 1Love Initiative invests in community education, youth mentorship, and cultural preservation programs across Jamaica and the diaspora.',
  alternates: { canonical: `${SITE}/foundation/1love` },
  openGraph: {
    title: '1Love Initiative — The Marley Group Foundation',
    description: 'Community, education, and cultural preservation — rooted in One Love.',
    url: `${SITE}/foundation/1love`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const programs = [
  {
    name: 'Youth Mentorship',
    desc: 'Pairing young Jamaicans with entrepreneurs, artists, and community leaders who have walked the path before them.',
  },
  {
    name: 'Cultural Preservation',
    desc: 'Documenting and protecting Rastafari traditions, Jamaican patois, and indigenous farming practices for future generations.',
  },
  {
    name: 'Education Grants',
    desc: 'Funding scholarships and school supply drives in underserved parishes, giving children the tools they need to build their own legacy.',
  },
  {
    name: 'Community Gardens',
    desc: 'Establishing organic community gardens that teach sustainable agriculture while feeding neighborhoods.',
  },
];

export default function OneLoveInitiativePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        1Love Initiative
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        One Love was never just a song — it was a blueprint. The 1Love Initiative translates
        Bob Marley&apos;s most enduring message into direct action: education, mentorship, and
        cultural preservation for the communities that carry the Marley story forward.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Mission</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          The 1Love Initiative was created by The Marley Group Foundation to invest in the people
          and places that shaped the Marley family. From the hills of Nine Mile to the streets
          of Kingston, every program is designed to build lasting capacity — not temporary aid.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Rohan Marley leads the initiative with a simple philosophy: give a young person one
          mentor, one opportunity, and one reason to stay — and they will build something
          that outlasts any single generation.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Programs</h2>
        <div className="space-y-6">
          {programs.map((p) => (
            <div key={p.name} className="border-l-2 border-[var(--gold)] pl-5">
              <h3 className="text-[var(--gold)] font-bold text-sm tracking-wider uppercase mb-1">
                {p.name}
              </h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Looking Ahead</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          In the coming year the 1Love Initiative will expand into three new parishes and
          launch its first digital literacy program, equipping young Jamaicans with the
          skills to build businesses from anywhere on the island.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          One Love starts with one action.
        </p>
        <Link
          href="/foundation/give"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Support the Initiative
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/foundation/waterwise-project" className="hover:text-[var(--gold)] transition-colors">WaterWise Project</Link>
        <Link href="/foundation/give" className="hover:text-[var(--gold)] transition-colors">Give</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Family</Link>
      </nav>
    </article>
  );
}
