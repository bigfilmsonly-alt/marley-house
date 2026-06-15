import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug, getAllCitySlugs } from '@/content/cities';

const SITE_URL = 'https://marley-house.vercel.app';

export async function generateStaticParams() {
  return getAllCitySlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) return {};
  const title = `Marley Coffee in ${c.name} — The Marley Group`;
  const description = `Find Marley Coffee in ${c.name}, ${c.region}. Farm-to-cup Jamaican and Ethiopian coffee sourced by Rohan Marley, available near you.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}/coffee` },
    openGraph: { title, description, url: `${SITE_URL}/cities/${c.slug}/coffee` },
  };
}

export default async function CoffeePage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Marley Coffee in {c.name}
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Marley Coffee brings farm-to-cup, single-origin beans to {c.name}, {c.region}. Sourced from
        the Blue Mountains of Jamaica and the highlands of Ethiopia, every cup is a tribute to
        heritage and craft.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Where to Find Us</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Whether you are looking for a local cafe serving Marley Coffee or want to order online for
          delivery to {c.name}, we are expanding our retail and wholesale presence every month. Check
          back for updated stockist locations.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Our Blends</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          From Blue Mountain single-origin to our Rastafari-inspired blends, Marley Coffee offers a
          range of roasts designed for every palate. Ask your local {c.name} stockist for the full menu.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href={`/cities/${c.slug}`} className="hover:text-[var(--gold)] transition-colors">{c.name} Hub</Link>
        <Link href={`/cities/${c.slug}/where-to-buy`} className="hover:text-[var(--gold)] transition-colors">Where to Buy</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
      </nav>
    </article>
  );
}
