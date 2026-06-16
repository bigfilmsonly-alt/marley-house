import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Lauryn Hill — Singer, Rapper, Songwriter',
  description:
    'Lauryn Noelle Hill is an American singer, rapper, and songwriter. A founding member of the Fugees, she is known for The Miseducation of Lauryn Hill. She is the mother of YG Marley and shares children with Rohan Marley.',
  alternates: { canonical: `${SITE}/lauryn-hill` },
  openGraph: {
    title: 'Lauryn Hill — Singer, Rapper, Songwriter',
    description:
      'Founding member of the Fugees. Mother of YG Marley. One of the most influential artists of her generation.',
    url: `${SITE}/lauryn-hill`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function LaurynHillPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
          Lauryn Hill
        </h1>
        <p className="text-[var(--cream)] text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-6">
          Lauryn Noelle Hill is an American singer, rapper, and songwriter. A founding member of
          the Fugees, she is known for <em>The Miseducation of Lauryn Hill</em>. She is the mother
          of YG Marley and shares children with Rohan Marley.
        </p>
      </header>

      <div className="gold-rule mb-12" />

      {/* Biography */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Lauryn Hill was born on 26 May 1975 in South Orange, New Jersey. She demonstrated
          musical and acting talent from a young age, appearing in the television soap opera
          <em> As the World Turns</em> and the film <em>Sister Act 2: Back in the Habit</em>
          {' '}(1993) before her music career took precedence.
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          In 1994, she co-founded the Fugees with Wyclef Jean and Pras Michel. Their second
          album, <em>The Score</em> (1996), sold over twenty-two million copies worldwide and
          produced the hit singles &ldquo;Killing Me Softly&rdquo; and &ldquo;Ready or
          Not.&rdquo;
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Her solo debut, <em>The Miseducation of Lauryn Hill</em> (1998), won five Grammy Awards
          including Album of the Year, making her the first woman in hip-hop to receive that honor.
          The album is widely regarded as one of the greatest records in popular music history.
        </p>
      </section>

      {/* Musical Legacy */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Musical Legacy</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          <em>The Miseducation of Lauryn Hill</em> debuted at number one on the Billboard 200 and
          has been certified eight times platinum in the United States. It blended hip-hop, soul,
          R&B, and reggae in a way that reshaped the landscape of popular music. Songs such as
          &ldquo;Doo Wop (That Thing),&rdquo; &ldquo;Everything Is Everything,&rdquo; and
          &ldquo;Ex-Factor&rdquo; remain touchstones of the era.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Hill has won eight Grammy Awards over the course of her career. She has been recognized
          by Rolling Stone, Billboard, and numerous institutions for her contributions to music
          and culture. Her influence extends across hip-hop, R&B, neo-soul, and reggae.
        </p>
      </section>

      {/* Connection to the Marley Family */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Connection to the Marley Family
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Lauryn Hill and Rohan Marley share five children together. Their eldest son, known
          professionally as YG Marley, has emerged as a prominent artist in his own right, carrying
          forward the musical traditions of both lineages. The convergence of the Marley and Hill
          legacies represents one of the most significant family lines in contemporary music.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Through this connection, the Hill and Marley families have become intertwined in the
          broader narrative of music, culture, and generational artistry.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Official Links */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Official Links</h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://mslaurynhill.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            mslaurynhill.com
          </a>
          <a
            href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Spotify
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Lauryn_Hill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Wikipedia
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/bob-marley" className="hover:text-[var(--gold)] transition-colors">Bob Marley</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
      </nav>
    </article>
  );
}
