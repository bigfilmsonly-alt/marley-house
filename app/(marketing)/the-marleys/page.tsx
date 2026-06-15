import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Marleys — Family Tree',
  description:
    'Meet the Marley family. From Bob Marley and Rita Marley to Rohan, Ziggy, Stephen, Damian, Cedella, and the next generation including YG Marley.',
  alternates: { canonical: `${SITE}/the-marleys` },
  openGraph: {
    title: 'The Marleys — Family Tree',
    description: 'The Marley family tree: three generations of music, culture, and enterprise.',
    url: `${SITE}/the-marleys`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const firstGen = [
  { name: 'Bob Marley', years: '1945 – 1981', role: 'Patriarch. Reggae icon. Global revolutionary.' },
  { name: 'Rita Marley', years: 'b. 1946', role: 'Singer, philanthropist, keeper of the flame.' },
];

const secondGen = [
  { name: 'Ziggy Marley', role: 'Grammy-winning musician and family ambassador.' },
  { name: 'Stephen Marley', role: 'Producer, eight-time Grammy winner.' },
  { name: 'Damian "Jr. Gong" Marley', role: 'Rapper, singer, Grammy winner.' },
  { name: 'Cedella Marley', role: 'Singer, fashion designer, author.' },
  { name: 'Rohan Marley', role: 'Entrepreneur. Founder of The Marley Group.', href: '/rohan-marley' },
  { name: 'Julian Marley', role: 'Musician, Grammy-nominated reggae artist.' },
  { name: 'Ky-Mani Marley', role: 'Singer, actor, storyteller.' },
  { name: 'Karen Marley', role: 'Private life, honoring the legacy.' },
  { name: 'Makeda Marley', role: 'The youngest of Bob Marley\'s children.' },
  { name: 'Robbie Marley', role: 'Family member, private life.' },
  { name: 'Stephanie Marley', role: 'Rita Marley\'s daughter, raised as family.' },
];

const thirdGen = [
  { name: 'YG Marley', role: 'Singer-songwriter. "Praise Jah in the Moonlight."', href: '/yg-marley' },
  { name: 'Selah Marley', role: 'Model, artist, spiritual voice.' },
  { name: 'Zion Marley', role: 'Next generation, coming into their own.' },
  { name: 'Skip Marley', role: 'Grammy-nominated singer-songwriter.' },
  { name: 'Bambaata Marley', role: 'Named for the Zulu warrior. A rising presence.' },
];

export default function TheMerleysPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Marleys
      </h1>

      {/* AEO Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marleys are one of the most influential families in global music and culture.
        Spanning three generations from Bob and Rita Marley through their children to their
        grandchildren, the family continues to shape music, business, and Jamaican heritage
        worldwide.
      </p>

      <div className="gold-rule mb-12" />

      {/* First Generation */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">The Foundation</h2>
        <div className="space-y-4">
          {firstGen.map((m) => (
            <div key={m.name} className="border border-[var(--line)] rounded-lg p-5">
              <h3 className="font-display text-lg text-[var(--gold)]">{m.name}</h3>
              <p className="text-[var(--dim)] text-xs mb-1">{m.years}</p>
              <p className="text-[var(--dim)] text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Second Generation */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">The Children</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {secondGen.map((m) => {
            const inner = (
              <div className="border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors h-full">
                <h3 className="font-display text-lg text-[var(--gold)]">{m.name}</h3>
                <p className="text-[var(--dim)] text-sm mt-1">{m.role}</p>
              </div>
            );
            return m.href ? (
              <Link key={m.name} href={m.href}>{inner}</Link>
            ) : (
              <div key={m.name}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* Third Generation */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">The Next Generation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {thirdGen.map((m) => {
            const inner = (
              <div className="border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors h-full">
                <h3 className="font-display text-lg text-[var(--gold)]">{m.name}</h3>
                <p className="text-[var(--dim)] text-sm mt-1">{m.role}</p>
              </div>
            );
            return m.href ? (
              <Link key={m.name} href={m.href}>{inner}</Link>
            ) : (
              <div key={m.name}>{inner}</div>
            );
          })}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
      </nav>
    </article>
  );
}
