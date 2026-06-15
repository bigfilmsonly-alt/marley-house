import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'How We Source Our Coffee — Marley Coffee',
  description:
    'Marley Coffee sources Fairtrade certified beans direct from farmers in Jamaica, Ethiopia, and Central America. Farm-to-cup transparency in every bag.',
  alternates: { canonical: `${SITE}/marley-coffee/sourcing` },
  openGraph: {
    title: 'How We Source Our Coffee — Marley Coffee',
    description:
      'Farm-to-cup transparency. Fairtrade certified. Direct farmer relationships.',
    url: `${SITE}/marley-coffee/sourcing`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const steps = [
  { title: 'Seed Selection', body: 'We partner with agronomists to select varietals suited to each growing region — prioritizing flavor, resilience, and biodiversity.' },
  { title: 'Farm Partnerships', body: 'Direct relationships with farming cooperatives in Jamaica, Ethiopia, and Central America ensure fair wages, safe conditions, and long-term investment in community.' },
  { title: 'Harvest & Processing', body: 'Cherries are hand-picked at peak ripeness and processed within hours — washed, natural, or honey — depending on the blend profile we are crafting.' },
  { title: 'Quality Control', body: 'Every lot is cupped by our quality team. Beans that fall below our scoring threshold are rejected, ensuring only the best reach the roaster.' },
  { title: 'Small-Batch Roasting', body: 'We roast in small batches to maintain flavor precision. Each roast profile is developed over weeks of iterative cupping.' },
  { title: 'Your Cup', body: 'From the mountainside to your morning, the journey is complete. Every sip carries the story of the hands that grew it.' },
];

export default function SourcingPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          Supply Chain
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          How We Source Our Coffee
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Marley Coffee sources Fairtrade certified beans directly from farming
          cooperatives in Jamaica, Ethiopia, and Central America. We maintain
          full farm-to-cup transparency, ensuring fair wages and sustainable
          growing practices at every stage of the supply chain.
        </p>
      </header>

      {/* Steps */}
      <section className="mb-16 space-y-8">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-5">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--gold)] flex items-center justify-center">
              <span className="text-[var(--gold)] text-xs font-bold">{i + 1}</span>
            </div>
            <div>
              <h2 className="text-[var(--cream)] font-semibold mb-1">{s.title}</h2>
              <p className="text-[var(--dim)] leading-relaxed text-sm">{s.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="border border-[var(--line)] rounded-2xl p-8 text-center mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          Our Certifications
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['Fairtrade Certified', 'One Tree Planted', 'Rainforest Alliance'].map(
            (cert) => (
              <span
                key={cert}
                className="border border-[var(--line)] rounded-full px-4 py-2 text-[var(--cream)] text-xs"
              >
                {cert}
              </span>
            ),
          )}
        </div>
      </section>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          href="/marley-coffee"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          &larr; All Blends
        </Link>
        <Link
          href="/marley-coffee/sustainability"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          Sustainability &rarr;
        </Link>
        <Link
          href="/coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Shop Coffee
        </Link>
      </div>
    </article>
  );
}
