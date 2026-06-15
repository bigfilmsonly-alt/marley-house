import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Licensing — The Marley Group',
  description:
    'License Lion Order characters, the ROOTS format, and Marley brand marks for merchandise, media, events, and hospitality partnerships.',
  alternates: { canonical: `${SITE}/licensing` },
  openGraph: {
    title: 'Licensing — The Marley Group',
    description:
      'License Lion Order characters, the ROOTS format, and Marley brand marks for merchandise, media, events, and hospitality partnerships.',
    url: `${SITE}/licensing`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const licensable = [
  { name: 'Lion Order Characters', desc: 'King Clem, Kai Suna, Runna Gyal — original characters with built-in audiences', href: '/licensing/characters' },
  { name: 'ROOTS Format', desc: 'Podcast and docuseries format bible with production guidelines and brand assets', href: '/licensing/roots-format' },
  { name: 'Marley Aesthetic & Brand Marks', desc: 'Visual identity, typography, patterns, and brand marks from The Marley Group portfolio', href: '/licensing/apply' },
];

const useCases = [
  'Merchandise — apparel, accessories, home goods, collectibles',
  'Media — film, television, digital content, gaming',
  'Events — festivals, pop-ups, branded experiences',
  'Hospitality — hotels, restaurants, co-branded venues',
];

const steps = [
  { step: '01', label: 'Application', desc: 'Submit your proposal with intended use case and territory' },
  { step: '02', label: 'Review', desc: 'Our licensing team evaluates fit, brand alignment, and market opportunity' },
  { step: '03', label: 'Agreement', desc: 'Negotiate terms, royalties, and usage guidelines' },
  { step: '04', label: 'Asset Access', desc: 'Receive approved brand assets, style guides, and ongoing support' },
];

export default function LicensingPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Licensing &amp; IP
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group controls a growing portfolio of intellectual property spanning
        characters, formats, and brand marks. We license selectively to partners who
        respect the culture and amplify the legacy.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">What&apos;s Licensable</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {licensable.map((item) => (
            <Link key={item.name} href={item.href} className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors">
              <h3 className="text-[var(--cream)] font-semibold">{item.name}</h3>
              <p className="text-[var(--dim)] text-sm mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">How It Works</h2>
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-4">
              <span className="text-[var(--gold)] font-bold text-lg shrink-0">{s.step}</span>
              <div>
                <h3 className="text-[var(--cream)] font-semibold">{s.label}</h3>
                <p className="text-[var(--dim)] text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Use Cases</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          {useCases.map((uc) => (<li key={uc}>{uc}</li>))}
        </ul>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Ready to License?</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Tell us about your project and how you plan to use Marley Group IP.
        </p>
        <Link href="/licensing/apply" className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity">
          Apply for a License
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/licensing/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
        <Link href="/licensing/roots-format" className="hover:text-[var(--gold)] transition-colors">ROOTS Format</Link>
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/investor" className="hover:text-[var(--gold)] transition-colors">Investor Relations</Link>
      </nav>
    </article>
  );
}
