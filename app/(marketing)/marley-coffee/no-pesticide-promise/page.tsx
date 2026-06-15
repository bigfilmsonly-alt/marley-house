import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'No Pesticide Promise — Marley Coffee',
  description:
    'Marley Coffee is committed to clean farming. No synthetic pesticides, no shortcuts. Learn about our testing, certifications, and transparency practices.',
  alternates: { canonical: `${SITE}/marley-coffee/no-pesticide-promise` },
  openGraph: {
    title: 'No Pesticide Promise — Marley Coffee',
    description:
      'Clean farming, no synthetic pesticides. Testing, certification, and full transparency.',
    url: `${SITE}/marley-coffee/no-pesticide-promise`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pillars = [
  {
    title: 'No Synthetic Pesticides',
    text: 'Every Marley Coffee farm operates without synthetic pesticides or herbicides. We use natural pest management — companion planting, shade-growing, and biological controls — to protect both the crop and the ecosystem.',
  },
  {
    title: 'Third-Party Testing',
    text: 'Each harvest lot is independently tested for over 200 pesticide residues before it is approved for roasting. Only lots that pass with zero detectable residues carry the Marley Coffee name.',
  },
  {
    title: 'Certified Partners',
    text: 'We source exclusively from farms that hold recognized organic or clean-agriculture certifications. Our partners are audited annually to ensure ongoing compliance with our standards.',
  },
  {
    title: 'Soil Health First',
    text: 'Healthy soil grows healthy coffee. Our farms invest in composting, cover crops, and crop rotation to build nutrient-rich soil naturally — eliminating the need for chemical fertilizers.',
  },
  {
    title: 'Full Transparency',
    text: 'We publish sourcing reports and testing summaries so you know exactly where your coffee comes from and what has been verified. If it is in the bag, it has been tested.',
  },
];

const stats = [
  { value: '200+', label: 'Pesticide residues tested per lot' },
  { value: '0', label: 'Detectable residues allowed' },
  { value: '100%', label: 'Farms independently audited' },
];

export default function NoPesticidePromisePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          Our Commitment
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          No Pesticide Promise
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Marley Coffee believes clean coffee starts with clean farming. No
          synthetic pesticides, no chemical shortcuts. Every lot is tested,
          every farm is certified, and every cup is transparent.
        </p>
      </header>

      {/* Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-[var(--line)] rounded-lg p-4 text-center"
            >
              <p className="text-[var(--gold)] font-display text-2xl mb-1">{s.value}</p>
              <p className="text-[var(--dim)] text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mb-16 space-y-6">
        {pillars.map((p, i) => (
          <div key={i} className="border-l-2 border-[var(--line)] pl-6">
            <h2 className="text-[var(--gold)] font-semibold text-sm mb-2">
              {p.title}
            </h2>
            <p className="text-[var(--cream)] text-sm leading-relaxed">{p.text}</p>
          </div>
        ))}
      </section>

      {/* Quote */}
      <blockquote className="border border-[var(--line)] rounded-xl p-8 text-center mb-16">
        <p className="font-display text-xl text-[var(--cream)] italic leading-relaxed mb-4">
          &ldquo;If it is not clean enough for my family, it is not clean enough
          for yours. That is the promise.&rdquo;
        </p>
        <cite className="text-[var(--dim)] text-sm not-italic">
          — Rohan Marley
        </cite>
      </blockquote>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/marley-coffee/sourcing"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          How We Source
        </Link>
        <p className="text-[var(--dim)] text-xs mt-4">
          <Link href="/marley-coffee/sustainability" className="hover:text-[var(--gold)]">
            Sustainability &rarr;
          </Link>
        </p>
      </section>
    </article>
  );
}
