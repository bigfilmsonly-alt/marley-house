import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Cannabis Education — Lion Order',
  description:
    'Lion Order cannabis education: plant science basics, cannabinoids, terpenes, consumption methods, and responsible use — by Rohan Marley.',
  alternates: { canonical: `${SITE}/lion-order/education` },
  openGraph: {
    title: 'Cannabis Education — Lion Order',
    description: 'Plant science, cannabinoids, terpenes, and responsible consumption.',
    url: `${SITE}/lion-order/education`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const topics = [
  { heading: 'Cannabinoids', text: 'THC, CBD, CBG, CBN — each cannabinoid interacts with the endocannabinoid system differently. Understanding the basics helps you choose the right product for your needs.' },
  { heading: 'Terpenes', text: 'Terpenes are aromatic compounds that shape each strain\'s flavor, aroma, and effect profile. Myrcene, limonene, linalool, and caryophyllene are among the most common.' },
  { heading: 'The Entourage Effect', text: 'Cannabinoids and terpenes work together synergistically. Full-spectrum products preserve this natural synergy for a more balanced experience.' },
  { heading: 'Consumption Methods', text: 'Flower, pre-rolls, edibles, tinctures, and topicals each have different onset times, durations, and bioavailability. Choose based on your experience level and intent.' },
];

export default function CannabisEducationPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Plant Science
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Cannabis Education
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Lion Order believes informed consumers are empowered consumers. This page covers
        plant science basics — cannabinoids, terpenes, consumption methods, and the principles
        behind responsible use.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Core Topics</h2>
        <div className="space-y-8">
          {topics.map((t) => (
            <div key={t.heading}>
              <h3 className="text-[var(--cream)] font-semibold mb-2">{t.heading}</h3>
              <p className="text-[var(--dim)] leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          The Rastafari Perspective
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          In Rastafari tradition, the herb is a sacrament — used for meditation, reasoning
          sessions, and spiritual connection. Lion Order honors this lineage by treating
          cannabis with reverence, not recklessness.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Education is the first step toward respect. Know the plant, know yourself.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Learn More</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Explore lab results, responsible use guidelines, and the full Lion Order catalog.
        </p>
        <Link
          href="/lion-order/lab-results"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          View Lab Results
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/lab-results" className="hover:text-[var(--gold)] transition-colors">Lab Results</Link>
        <Link href="/lion-order/responsible-use" className="hover:text-[var(--gold)] transition-colors">Responsible Use</Link>
        <Link href="/lion-order/products" className="hover:text-[var(--gold)] transition-colors">Products</Link>
        <Link href="/lion-order/the-flower" className="hover:text-[var(--gold)] transition-colors">The Flower</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">Story</Link>
      </nav>

      <footer className="mt-16 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-[10px] leading-relaxed tracking-wide">
          This content is for educational purposes only. Cannabis products are intended for adults
          21 and older. Lion Order does not make medical or health claims about cannabis. Check
          your local and state laws before purchasing. Consume responsibly.
        </p>
      </footer>
    </article>
  );
}
