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
  const title = `Marley Franchise in ${c.name} — The Marley Group`;
  const description = `Open a Marley Coffee franchise or Lion Order retail partnership in ${c.name}, ${c.region}. Learn about licensing and franchise opportunities.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}/franchise` },
    openGraph: { title, description, url: `${SITE_URL}/cities/${c.slug}/franchise` },
  };
}

export default async function FranchisePage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Franchise in {c.name}
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Bring The Marley Group to {c.name}, {c.region}. We are seeking franchise and licensing
        partners who share our commitment to heritage, craft, and community-driven business.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Franchise Opportunities</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Marley Coffee cafes, Lion Order retail concepts, and co-branded hospitality venues are
          all available for franchise development in {c.name}. Each opportunity comes with full
          brand support, supply chain access, and operational guidance.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">How to Apply</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Franchise inquiries for {c.name} begin with a conversation. Reach out through our
          contact form or join the Inner Circle to signal your interest. We prioritize partners
          with local market knowledge and a genuine connection to the Marley mission.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href={`/cities/${c.slug}`} className="hover:text-[var(--gold)] transition-colors">{c.name} Hub</Link>
        <Link href={`/cities/${c.slug}/real-estate`} className="hover:text-[var(--gold)] transition-colors">Real Estate</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About The Marley Group</Link>
      </nav>
    </article>
  );
}
