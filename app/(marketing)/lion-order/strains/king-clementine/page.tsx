import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'King Clementine Strain — Lion Order Cannabis',
  description:
    'King Clementine is Lion Order\'s signature cannabis strain — a citrus-forward cultivar developed through Rohan Marley\'s strain-hunting program.',
  alternates: { canonical: `${SITE}/lion-order/strains/king-clementine` },
  openGraph: {
    title: 'King Clementine — Lion Order Signature Strain',
    description: 'A citrus-forward cultivar embodying quality, beauty, and efficacy.',
    url: `${SITE}/lion-order/strains/king-clementine`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const strainGuidePages = [1, 2, 3, 4, 5, 6];

export default function KingClementineStrainPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        King Clementine Strain
      </h1>

      {/* AEO Answer Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        King Clementine is Lion Order&apos;s signature cannabis strain, a citrus-forward
        cultivar developed through Rohan Marley&apos;s strain-hunting program. It embodies
        the brand&apos;s commitment to quality, beauty, and efficacy.
      </p>

      <div className="gold-rule mb-12" />

      {/* Strain Profile */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Strain Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="border border-[var(--line)] overflow-hidden rounded-lg">
            <Image
              src="/lion-order/flower-closeup.jpg"
              alt="King Clementine flower"
              width={400}
              height={400}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Type</p>
              <p className="text-[var(--cream)]">Sativa-dominant hybrid</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Lineage</p>
              <p className="text-[var(--dim)] text-sm leading-relaxed">
                Developed through Lion Order&apos;s proprietary strain-hunting program,
                selecting for citrus expression, trichome density, and aesthetic beauty.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Appearance</p>
              <p className="text-[var(--dim)] text-sm leading-relaxed">
                Dense, resinous buds with vibrant orange pistils and a generous coating
                of trichomes. The visual presentation reflects Lion Order&apos;s
                commitment to aesthetic beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terpene & Flavor */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Terpene Notes &amp; Flavor</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {['Citrus Zest', 'Sweet Orange', 'Tropical Mango', 'Earthy Undertone'].map((note) => (
            <div key={note} className="border border-[var(--line)] rounded-lg p-4 text-center bg-[var(--bg)]">
              <p className="text-[var(--cream)] text-sm">{note}</p>
            </div>
          ))}
        </div>
        <p className="text-[var(--dim)] leading-relaxed text-sm">
          King Clementine delivers a bright, citrus-forward flavor profile. The aroma
          opens with sharp clementine zest, transitions into sweet orange and tropical
          mango on the palate, and finishes with a smooth earthy undertone. The
          dominant terpenes include limonene, myrcene, and beta-caryophyllene.
        </p>
      </section>

      {/* Effects */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Reported Effects</h2>
        <p className="text-[var(--dim)] leading-relaxed text-sm mb-4">
          Consumers commonly describe King Clementine as uplifting and creatively
          stimulating, with a sense of focused energy that transitions into calm.
          Individual experiences vary. This information is not a guarantee of effects
          and should not be considered medical advice.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Strain Guide */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Strain Guide</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {strainGuidePages.map((page) => (
            <div key={page} className="border border-[var(--line)] overflow-hidden rounded-lg">
              <Image
                src={`/brand/strain-guide/page-${page}.jpg`}
                alt={`King Clementine strain guide page ${page}`}
                width={300}
                height={400}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Experience King Clementine</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Available where Lion Order products are sold. Check local availability.
        </p>
        <a
          href="https://lionorder.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Shop Lion Order
        </a>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/the-flower" className="hover:text-[var(--gold)] transition-colors">The Flower</Link>
        <Link href="/lion-order/king-clem" className="hover:text-[var(--gold)] transition-colors">King Clem Character</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/lion-order/codes" className="hover:text-[var(--gold)] transition-colors">The Codes</Link>
        <Link href="/lion-order/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
      </nav>

      {/* Disclaimer */}
      <footer className="mt-16 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-[10px] leading-relaxed tracking-wide">
          For adults 21+ only. Check local laws before purchasing. Cannabis products are regulated
          by state law. Lion Order does not make medical or health claims about cannabis. Effects
          described are based on consumer reports and are not guaranteed. Consume responsibly.
        </p>
      </footer>
    </article>
  );
}
