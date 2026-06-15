import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '@/content/cities';

const SITE_URL = 'https://marley-house.vercel.app';

export async function generateStaticParams() {
  return cities.filter((c) => c.hasDispensaries).map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c || !c.hasDispensaries) return {};
  const title = `Lion Order Dispensaries in ${c.name} — The Marley Group`;
  const description = `Find Lion Order cannabis dispensaries and retail partners in ${c.name}, ${c.region}. Premium craft cannabis rooted in Rastafari tradition.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}/dispensaries` },
    openGraph: { title, description, url: `${SITE_URL}/cities/${c.slug}/dispensaries` },
  };
}

export default async function DispensariesPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c || !c.hasDispensaries) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Dispensaries in {c.name}
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Lion Order cannabis is available at select dispensaries across {c.name}, {c.region}. Explore
        premium flower, pre-rolls, and edibles crafted in the Marley tradition.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Retail Partners</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          We partner with licensed dispensaries in {c.name} that share our commitment to quality,
          education, and responsible use. Check with your local dispensary for Lion Order availability.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Product Line</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          From the King Clementine strain guide to seasonal limited editions, Lion Order offers a
          curated range of craft cannabis products. Ask your {c.name} dispensary for the full menu.
        </p>
      </section>

      {/* Cannabis Disclaimer */}
      <div className="border border-[var(--line)] rounded-lg p-5 mb-16 bg-[var(--bg)]">
        <p className="text-[var(--dim)] text-xs leading-relaxed">
          <strong className="text-[var(--cream)]">Cannabis Disclaimer:</strong> Cannabis products are
          only available where legally permitted. You must be 21 or older to purchase cannabis products
          in {c.region}. The Marley Group does not ship cannabis across state or national borders. Please
          consume responsibly and in accordance with local laws.
        </p>
      </div>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href={`/cities/${c.slug}`} className="hover:text-[var(--gold)] transition-colors">{c.name} Hub</Link>
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <Link href="/cannabis-compliance" className="hover:text-[var(--gold)] transition-colors">Compliance</Link>
      </nav>
    </article>
  );
}
