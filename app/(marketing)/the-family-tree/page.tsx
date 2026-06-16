import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Family Tree — RM',
  description: 'The Marley family tree from Bob and Rita Marley through eleven children and a growing generation of grandchildren carrying the legacy forward.',
  alternates: { canonical: `${SITE_URL}/the-family-tree` },
  openGraph: {
    title: 'The Family Tree — RM',
    description: 'Three generations of the Marley family, mapped.',
    url: `${SITE_URL}/the-family-tree`,
  },
};

type FamilyMember = { name: string; href?: string; born?: string; note?: string; children?: FamilyMember[] };

const tree: FamilyMember[] = [
  {
    name: 'Ziggy Marley',
    href: '/ziggy-marley',
    born: '1968',
    note: 'Eight-time Grammy winner',
  },
  {
    name: 'Cedella Marley',
    href: '/cedella-marley',
    born: '1967',
    note: 'Author, designer, estate guardian',
    children: [
      { name: 'Skip Marley', href: '/skip-marley', note: 'Grammy-nominated artist' },
    ],
  },
  {
    name: 'Stephen Marley',
    href: '/stephen-marley',
    born: '1972',
    note: 'Five-time Grammy winner, producer',
  },
  {
    name: 'Rohan Marley',
    href: '/rohan-marley',
    born: '1972',
    note: 'Entrepreneur — Coffee, Cannabis, Hospitality',
    children: [
      { name: 'YG Marley', href: '/yg-marley', note: '"Praise Jah in the Moonlight"' },
      { name: 'Zion Marley', note: 'Son of Rohan and Lauryn Hill' },
      { name: 'Selah Marley', note: 'Model, artist, cultural voice' },
      { name: 'Joshua Marley', note: 'Son of Rohan and Lauryn Hill' },
      { name: 'John Marley', note: 'Son of Rohan and Lauryn Hill' },
      { name: 'Sarah Marley', note: 'Daughter of Rohan and Lauryn Hill' },
      { name: 'Nico Marley', note: 'Former NFL linebacker' },
    ],
  },
  {
    name: 'Julian Marley',
    href: '/julian-marley',
    born: '1975',
    note: 'Grammy-nominated roots artist',
  },
  {
    name: 'Ky-Mani Marley',
    href: '/ky-mani-marley',
    born: '1976',
    note: 'Actor, musician',
  },
  {
    name: 'Damian Marley',
    href: '/damian-marley',
    born: '1978',
    note: 'Jr. Gong — two-time Grammy winner',
  },
];

function MemberRow({ member, depth = 0 }: { member: FamilyMember; depth?: number }) {
  const cls = depth > 0 ? 'ml-6 sm:ml-10 border-l border-[var(--line)] pl-4' : '';
  const Name = member.href
    ? <Link href={member.href} className="text-[var(--cream)] hover:text-[var(--gold)] transition-colors font-medium">{member.name}</Link>
    : <span className="text-[var(--cream)] font-medium">{member.name}</span>;
  return (
    <>
      <div className={`py-3 ${cls}`}>
        {Name}
        {member.born && <span className="text-[var(--dim)] text-xs ml-2">b. {member.born}</span>}
        {member.note && <p className="text-[var(--dim)] text-sm mt-0.5">{member.note}</p>}
      </div>
      {member.children?.map((c) => <MemberRow key={c.name} member={c} depth={depth + 1} />)}
    </>
  );
}

export default function FamilyTreePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Family Tree
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        From Bob and Rita Marley through eleven children and a growing generation of
        grandchildren — the legacy mapped, generation by generation.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <div className="border border-[var(--gold)] rounded-lg p-6 mb-2 bg-[var(--bg)]">
          <Link href="/bob-marley" className="font-display text-2xl text-[var(--gold)] hover:underline">Bob Marley</Link>
          <p className="text-[var(--dim)] text-sm mt-1">1945 – 1981 &middot; Kingston, Jamaica</p>
          <p className="text-[var(--cream)] text-sm mt-2">Singer, songwriter, revolutionary. 75M records sold. Founded Tuff Gong.</p>
        </div>
        <div className="flex gap-4 text-xs text-[var(--dim)] mt-4 mb-8 ml-2">
          <span>Rita Marley (wife, 1966)</span>
          <span>&middot;</span>
          <span>Janet Hunt</span>
        </div>

        <h2 className="font-display text-xl text-[var(--cream)] mb-4">Children &amp; Grandchildren</h2>
        <div className="divide-y divide-[var(--line)]">
          {tree.map((member) => (
            <MemberRow key={member.name} member={member} />
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      <p className="text-[var(--dim)] text-xs leading-relaxed max-w-xl mb-8">
        Key family members featured on this site. The full Marley family is larger and
        continues to grow. Presented with respect and factual intention.
      </p>
      <nav className="flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/dynasty" className="hover:text-[var(--gold)] transition-colors">The Dynasty</Link>
        <Link href="/bob-marley" className="hover:text-[var(--gold)] transition-colors">Bob Marley</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
      </nav>
    </article>
  );
}
