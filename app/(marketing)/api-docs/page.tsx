import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Public API — The Marley Group',
  description:
    'Read-only public API for partners, affiliates, and developers. Access Marley Group product catalogs, content, events, and city hub data.',
  alternates: { canonical: `${SITE}/api-docs` },
  openGraph: {
    title: 'Public API — The Marley Group',
    description: 'Marley Everywhere — integrate Marley Group data into your apps and platforms.',
    url: `${SITE}/api-docs`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const endpoints = [
  {
    method: 'GET',
    path: '/api/v1/products',
    desc: 'Coffee and merchandise catalog — SKUs, pricing, images, and availability.',
  },
  {
    method: 'GET',
    path: '/api/v1/content',
    desc: 'Blog posts, press releases, and editorial content from The Marley Group.',
  },
  {
    method: 'GET',
    path: '/api/v1/events',
    desc: 'Upcoming events, pop-ups, and appearances across all brands.',
  },
  {
    method: 'GET',
    path: '/api/v1/cities',
    desc: 'City hub data — locations, local partners, and regional availability.',
  },
];

export default function ApiDocsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Marley Everywhere — Public API
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group Public API gives partners, affiliates, and mobile app developers
        read-only access to our product catalog, content library, event listings, and city
        hub data.
      </p>

      <div className="gold-rule mb-12" />

      {/* Who It's For */}
      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Who It&apos;s For</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          The API is designed for authorized partners, retail affiliates, and third-party
          developers building experiences around The Marley Group ecosystem. All endpoints
          are read-only — no write or delete operations are exposed.
        </p>
      </section>

      {/* Endpoints */}
      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Endpoints</h2>
        <div className="space-y-4">
          {endpoints.map((ep) => (
            <div
              key={ep.path}
              className="border border-[var(--line)] rounded-lg p-5 bg-[var(--bg)]"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-wider text-[var(--gold)] bg-[var(--gold)]/10 px-2 py-0.5 rounded">
                  {ep.method}
                </span>
                <code className="text-sm text-[var(--cream)] font-mono">{ep.path}</code>
              </div>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{ep.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Authentication */}
      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Authentication</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          All requests require an API key passed via the{' '}
          <code className="text-[var(--cream)] bg-[var(--line)] px-1.5 py-0.5 rounded text-sm">
            Authorization
          </code>{' '}
          header. Keys are issued upon approval and scoped to specific endpoints.
        </p>
      </section>

      {/* Rate Limits */}
      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Rate Limits</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Standard keys are limited to <strong className="text-[var(--cream)]">1,000 requests
          per hour</strong>. If you need higher throughput for production integrations,
          contact us to discuss an elevated tier.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Request API Access</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Tell us about your project and how you plan to use Marley Group data. We review
          every application within five business days.
        </p>
        <a
          href="mailto:api@marley-house.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Request API Access
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/brand-protection" className="hover:text-[var(--gold)] transition-colors">Brand Protection</Link>
        <Link href="/privacy-policy" className="hover:text-[var(--gold)] transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-[var(--gold)] transition-colors">Terms of Service</Link>
      </nav>
    </article>
  );
}
