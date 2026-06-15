import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'ROOTS Format Licensing',
  description:
    'License the ROOTS podcast and docuseries format — includes format bible, production guidelines, brand assets, and territory licensing.',
  alternates: { canonical: `${SITE}/licensing/roots-format` },
  openGraph: {
    title: 'ROOTS Format Licensing',
    description:
      'License the ROOTS podcast and docuseries format for your territory.',
    url: `${SITE}/licensing/roots-format`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const included = [
  { item: 'Format Bible', desc: 'Complete episode structure, segment breakdowns, tone guidelines, and narrative framework' },
  { item: 'Production Guidelines', desc: 'Camera, lighting, sound, and editorial standards to maintain brand consistency across territories' },
  { item: 'Brand Assets', desc: 'Logos, title cards, music beds, lower thirds, and approved typography for localized productions' },
  { item: 'Training & Support', desc: 'Onboarding sessions with the ROOTS production team and ongoing creative consultation' },
];

const territories = [
  'North America — United States, Canada',
  'Caribbean — Jamaica, Trinidad, Bahamas, wider CARICOM',
  'Europe — United Kingdom, Germany, Netherlands, France',
  'Africa — Nigeria, Ghana, South Africa, Kenya, Ethiopia',
  'Asia-Pacific — Japan, Australia, New Zealand',
];

export default function RootsFormatPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        ROOTS Format Licensing
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        ROOTS is the signature podcast and docuseries format from The Marley Group — a
        storytelling engine that blends culture, entrepreneurship, and heritage. We license
        the format to producers and networks by territory.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Format</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          ROOTS explores the intersection of family legacy, cultural identity, and modern
          enterprise. Each episode follows a proven narrative arc — origin, challenge,
          breakthrough, legacy — that resonates across markets and languages.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          The format has been validated through eight flagship episodes covering Blue Mountain
          coffee, cannabis, hospitality, storytelling, and more. Licensed partners receive
          everything they need to produce locally authentic versions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">What&apos;s Included</h2>
        <div className="space-y-6">
          {included.map((i) => (
            <div key={i.item} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--cream)] font-semibold">{i.item}</h3>
              <p className="text-[var(--dim)] text-sm mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Territory Licensing</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          ROOTS licenses are granted on a territory-exclusive basis. Current available
          territories include:
        </p>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          {territories.map((t) => (<li key={t}>{t}</li>))}
        </ul>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">License the ROOTS Format</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Tell us about your production company, target territory, and distribution plan.
        </p>
        <Link href="/licensing/apply" className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity">
          Apply for a License
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/licensing" className="hover:text-[var(--gold)] transition-colors">Licensing Overview</Link>
        <Link href="/licensing/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
        <Link href="/roots" className="hover:text-[var(--gold)] transition-colors">ROOTS</Link>
      </nav>
    </article>
  );
}
