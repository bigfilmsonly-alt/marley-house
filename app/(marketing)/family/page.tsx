import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Marley Family',
  description:
    'The Marley family spans three generations — from Bob Marley to Rohan Marley to YG Marley. A dynasty of music, entrepreneurship, and Jamaican heritage.',
  alternates: { canonical: `${SITE}/family` },
  openGraph: {
    title: 'The Marley Family',
    description: 'Three generations of music, business, and Jamaican heritage.',
    url: `${SITE}/family`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function FamilyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Marley Family
      </h1>

      {/* AEO Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley family is a global dynasty rooted in Kingston, Jamaica. From Bob Marley,
        who changed the sound of the world, to Rohan Marley, who channels that legacy into
        entrepreneurship, to YG Marley, who carries the music forward — three generations
        united by culture, craft, and One Love.
      </p>

      <div className="gold-rule mb-12" />

      {/* Family Photo */}
      <section className="mb-16 text-center">
        <Image
          src="/brand/gallery/02.jpg"
          alt="The Marley Family"
          width={800}
          height={500}
          className="w-full max-w-2xl mx-auto rounded-lg object-cover mb-6"
        />
      </section>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">A Family of Builders</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          The Marley name is synonymous with music, but the family&apos;s reach extends far
          beyond the recording studio. Bob Marley fathered eleven children who have each
          carved distinct paths — in music, fashion, activism, and enterprise. The family
          tree is sprawling, and each branch contributes to a living legacy.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Today, the next generation — including YG Marley, who took the world by storm with
          &ldquo;Praise Jah in the Moonlight&rdquo; — is proof that the Marley spirit
          regenerates. It does not fade.
        </p>
      </section>

      {/* Rohan's Role */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Rohan&apos;s Role</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          As the founder of The Marley Group, Rohan Marley serves as the bridge between
          generations. He translated the values his father lived — community, craft,
          resistance to exploitation — into a portfolio of businesses that provide for the
          family and honor the culture.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          His vision is clear: build a house large enough for every Marley to find their room.
          Coffee for the farmer. Cannabis for the healer. Music for the spirit. Hospitality
          for the traveler.
        </p>
      </section>

      {/* The Next Generation */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Next Generation</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          The Marley children and grandchildren are not inheritors waiting for a check. They
          are builders, artists, and entrepreneurs in their own right. YG Marley represents
          the musical arm. Others are stepping into coffee sourcing, brand design, and
          hospitality management.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <Link
            href="/yg-marley"
            className="border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors"
          >
            <h3 className="font-display text-lg text-[var(--gold)] mb-1">YG Marley</h3>
            <p className="text-[var(--dim)] text-sm">Singer-songwriter. The next generation of Marley music.</p>
          </Link>
          <Link
            href="/the-marleys"
            className="border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors"
          >
            <h3 className="font-display text-lg text-[var(--gold)] mb-1">The Marleys</h3>
            <p className="text-[var(--dim)] text-sm">The full family tree and public biographical overview.</p>
          </Link>
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
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/the-marleys" className="hover:text-[var(--gold)] transition-colors">The Marleys</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
