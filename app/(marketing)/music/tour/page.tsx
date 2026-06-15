import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Tour & Live — The Marley Group',
  description:
    'Upcoming live performances and tour dates from YG Marley and the Marley family. Join the mailing list for early access and VIP experiences.',
  alternates: { canonical: `${SITE}/music/tour` },
  openGraph: {
    title: 'Tour & Live — The Marley Group',
    description:
      'Live performances carrying the Marley legacy across the globe. Get notified for upcoming dates.',
    url: `${SITE}/music/tour`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function TourPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Tour &amp; Live
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley live experience is more than a concert — it is a communion. From
        festival stages to intimate House Sessions in Jamaica, the family brings the
        spirit of One Love to every room they enter.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Upcoming Dates</h2>
        <div className="border border-[var(--line)] rounded-2xl p-8 sm:p-12 text-center">
          <p className="text-[var(--dim)] leading-relaxed mb-2">
            New tour dates will be announced soon.
          </p>
          <p className="text-[var(--dim)] leading-relaxed">
            Join the Inner Circle below to get early access and VIP pre-sale notifications.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Live Experience</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Whether it is YG Marley commanding a festival crowd or Rohan hosting an acoustic
          session at the Beach House, Marley performances are rooted in authenticity. The
          energy is spiritual, the music is timeless, and the connection is real.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Past appearances include Coachella, Glastonbury, Reggae Sumfest, and private
          events with The Marley Group partners.
        </p>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Get Notified First</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Inner Circle members receive early access to tour dates, VIP upgrades, and
          exclusive meet-and-greet opportunities.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/music/releases" className="hover:text-[var(--gold)] transition-colors">Releases</Link>
        <Link href="/music/playlists" className="hover:text-[var(--gold)] transition-colors">Playlists</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
