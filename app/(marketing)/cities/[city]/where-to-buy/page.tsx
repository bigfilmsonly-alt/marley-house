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
  const title = `Where to Buy Marley Products in ${c.name} — The Marley Group`;
  const description = `Shop Marley Coffee, Lion Order, and official Marley merchandise in ${c.name}, ${c.region}. Find retail locations and online ordering.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}/where-to-buy` },
    openGraph: { title, description, url: `${SITE_URL}/cities/${c.slug}/where-to-buy` },
  };
}

export default async function WhereToBuyPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Where to Buy in {c.name}
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Looking for Marley Coffee beans, Lion Order products, or official merchandise in {c.name}, {c.region}?
        Here is how to find us locally and online.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Retail Locations</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          We are actively building our retail network in {c.name}. Specialty grocers, cafes, and
          select dispensaries carry Marley products. Contact our team for the most current stockist
          list in the {c.region} area.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Order Online</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          All Marley Coffee blends and merch ship directly to {c.name}. Visit our online store
          for subscriptions, gift sets, and limited-edition drops.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href={`/cities/${c.slug}`} className="hover:text-[var(--gold)] transition-colors">{c.name} Hub</Link>
        <Link href={`/cities/${c.slug}/coffee`} className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Shop Coffee</Link>
      </nav>
    </article>
  );
}
