import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Brand Protection — The Marley Group',
  description:
    'How The Marley Group protects its trademarks, intellectual property, and brand integrity across every channel.',
  alternates: { canonical: `${SITE}/brand-protection` },
  openGraph: {
    title: 'Brand Protection — The Marley Group',
    description:
      'Trademark monitoring, impostor detection, and counterfeit prevention for the Marley brands.',
    url: `${SITE}/brand-protection`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function BrandProtectionPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Brand Protection
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley name carries decades of cultural weight. The Marley Group actively
        protects its trademarks, intellectual property, and brand identity across every
        platform, market, and product category.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Trademark Monitoring</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          We maintain registered trademarks across multiple jurisdictions and continuously
          monitor global trademark filings to identify unauthorized use of the Marley name,
          likeness, and associated brand marks. Our legal team reviews potential infringements
          weekly and takes action where warranted.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Impostor Account Detection</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          We have already identified and addressed impostor accounts on social media
          platforms claiming affiliation with Rohan Marley or The Marley Group. Our team
          uses automated scanning and manual review to flag accounts that mislead
          consumers, and we work directly with platforms to remove them.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Domain Protection</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          The Marley Group holds and monitors key domain names tied to our brands. We
          actively pursue domains that infringe on our trademarks, use confusingly similar
          names, or attempt to impersonate official Marley properties through UDRP
          proceedings and registrar-level enforcement.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Counterfeit Prevention</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Every official product from Marley Coffee, Lion Order, and RoMarley Beach House
          carries verified packaging and authentication markers. We partner with e-commerce
          platforms to remove counterfeit listings and work with customs authorities to
          intercept unauthorized goods at the border.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Report a Violation</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          If you encounter unauthorized use of the Marley name, counterfeit products, or
          impostor accounts, please contact us at{' '}
          <a
            href="mailto:brand@marley-house.com"
            className="text-[var(--gold)] underline hover:opacity-80 transition-opacity"
          >
            brand@marley-house.com
          </a>.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Include the URL or platform, a screenshot or description of the infringement,
          and any relevant product details. Our team reviews every report and responds
          within five business days.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/verify" className="hover:text-[var(--gold)] transition-colors">Verify Product</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/privacy-policy" className="hover:text-[var(--gold)] transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-[var(--gold)] transition-colors">Terms of Service</Link>
      </nav>
    </article>
  );
}
