import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Building a Legacy Brand — The Marley Group',
  description:
    'The Marley Group framework for building a legacy brand — rooted in culture, scaled with intention. Lessons from Marley Coffee, Lion Order, and the Beach House.',
  alternates: { canonical: `${SITE}/business-building` },
  openGraph: {
    title: 'Building a Legacy Brand — The Marley Group',
    description:
      'The framework behind Marley Coffee, Lion Order, and every brand in The Marley Group portfolio.',
    url: `${SITE}/business-building`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const framework = [
  { step: '01', title: 'Root in Culture', desc: 'Every lasting brand begins with authentic cultural identity. The Marley Group starts with Jamaican heritage, Rastafari values, and lived experience.' },
  { step: '02', title: 'Own the Source', desc: 'Control your supply chain. Marley Coffee owns farms in the Blue Mountains. Lion Order cultivates its own flower. Ownership creates integrity.' },
  { step: '03', title: 'Story Before Scale', desc: 'The narrative must be true before it can be big. Each brand earns trust through honest storytelling before pursuing global distribution.' },
  { step: '04', title: 'Build Verticals, Not Products', desc: 'Coffee is not a product — it is a vertical that includes farming, roasting, retail, and hospitality. Think ecosystems.' },
  { step: '05', title: 'Protect the Legacy', desc: 'Say no more than you say yes. The Marley name is worth more than any single deal. Long-term reputation over short-term revenue.' },
];

export default function BusinessBuildingPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Building a Legacy Brand
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group did not build brands by following playbooks — it wrote its own.
        This framework distills decades of lessons from Marley Coffee, Lion Order, the
        Beach House, and ROOTS Media into a repeatable system for building brands that
        outlast trends.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">The Framework</h2>
        <div className="space-y-6">
          {framework.map((f) => (
            <div key={f.step} className="border border-[var(--line)] rounded-lg p-6 flex gap-5 items-start">
              <span className="text-[var(--gold)] font-bold text-lg shrink-0">{f.step}</span>
              <div>
                <h3 className="text-[var(--cream)] font-semibold">{f.title}</h3>
                <p className="text-[var(--dim)] text-sm mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Case Study: Marley Coffee</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Rohan Marley planted coffee in the Blue Mountains before he had a brand name. He
          learned the craft from Jamaican farmers, built relationships with local
          cooperatives, and only then introduced Marley Coffee to the world. The result: a
          brand rooted in authenticity that resonates across continents.
        </p>
        <Link
          href="/marley-coffee"
          className="text-[var(--gold)] text-sm font-semibold hover:underline"
        >
          Explore Marley Coffee &rarr;
        </Link>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Go Deeper</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          The Masterclass covers every vertical and the philosophy behind the framework.
        </p>
        <Link
          href="/masterclass"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Watch the Masterclass
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/education" className="hover:text-[var(--gold)] transition-colors">Education</Link>
        <Link href="/masterclass" className="hover:text-[var(--gold)] transition-colors">Masterclass</Link>
        <Link href="/entrepreneurship" className="hover:text-[var(--gold)] transition-colors">Entrepreneurship</Link>
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
      </nav>
    </article>
  );
}
