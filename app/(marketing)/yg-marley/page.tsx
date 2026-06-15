import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'YG Marley — Singer, Songwriter, Next Generation',
  description:
    'YG Marley is a Jamaican-American singer-songwriter, son of Rohan Marley and Lauryn Hill. Rose to fame with "Praise Jah in the Moonlight."',
  alternates: { canonical: `${SITE}/yg-marley` },
  openGraph: {
    title: 'YG Marley — Singer, Songwriter, Next Generation',
    description: 'Son of Rohan Marley and Lauryn Hill. The next generation of Marley music.',
    url: `${SITE}/yg-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function YGMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
        <div className="w-full md:w-2/5 flex-shrink-0">
          <Image
            src="/brand/gallery/03.jpg"
            alt="YG Marley"
            width={500}
            height={600}
            className="w-full rounded-lg object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
            YG Marley
          </h1>

          {/* AEO Block */}
          <p className="text-[var(--cream)] text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-6">
            YG Marley is a Jamaican-American singer-songwriter, son of Rohan Marley and
            Lauryn Hill. He rose to global fame with &ldquo;Praise Jah in the Moonlight&rdquo;
            and carries the Marley musical legacy into the next generation.
          </p>
        </div>
      </div>

      <div className="gold-rule mb-12" />

      {/* Bio */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Born Joshua Omaru Marley, YG Marley grew up at the intersection of two of music&apos;s
          most powerful lineages. His father, Rohan Marley, is the son of Bob Marley. His
          mother, Lauryn Hill, redefined hip-hop and R&B with The Miseducation of Lauryn
          Hill. From birth, YG was surrounded by music, culture, and the weight of legacy.
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Rather than rushing into the spotlight, YG developed his craft quietly — writing,
          recording, and finding his own voice. When &ldquo;Praise Jah in the Moonlight&rdquo;
          arrived, it was not a debut. It was a statement. The song blended reggae, soul, and
          modern production into something both familiar and entirely new.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          The track went viral globally, reaching the top of charts and streaming platforms.
          YG proved that the Marley name is not just history — it is a living, breathing force
          in contemporary music.
        </p>
      </section>

      {/* Music */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Music</h2>
        <div className="bg-[var(--panel)] border border-[var(--line)] rounded-lg p-6 mb-4">
          <h3 className="font-display text-lg text-[var(--gold)] mb-2">
            &ldquo;Praise Jah in the Moonlight&rdquo;
          </h3>
          <p className="text-[var(--dim)] text-sm leading-relaxed mb-4">
            A genre-blending anthem that introduced YG Marley to the world. Reggae roots meet
            modern soul — a spiritual declaration wrapped in melody.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://open.spotify.com/search/yg%20marley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com/search?term=yg+marley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
            >
              Apple Music
            </a>
          </div>
        </div>
        <Link
          href="/music/yg-marley"
          className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          Full Discography
        </Link>
      </section>

      {/* Connection to The Marley Group */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Connection to The Marley Group
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          YG Marley represents the musical pillar of The Marley Group&apos;s vision. While
          Rohan builds the enterprise — coffee, cannabis, hospitality — YG carries the
          cultural frequency forward through sound. Together, father and son demonstrate that
          the Marley legacy is not a museum piece. It is alive.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Through ROOTS Media and The Marley Group, YG&apos;s music connects to a larger
          ecosystem of heritage-driven brands and storytelling.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          Stay connected to the Marley sound.
        </p>
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
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
        <Link href="/the-marleys" className="hover:text-[var(--gold)] transition-colors">The Marleys</Link>
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
      </nav>
    </article>
  );
}
