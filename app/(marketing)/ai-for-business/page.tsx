import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'AI for Business — The Marley Group',
  description:
    'How The Marley Group uses artificial intelligence across its brands — and lessons for entrepreneurs building with AI.',
  alternates: { canonical: `${SITE}/ai-for-business` },
  openGraph: {
    title: 'AI for Business — The Marley Group',
    description: 'AI strategy, implementation, and lessons from building culture-driven brands with technology.',
    url: `${SITE}/ai-for-business`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const applications = [
  { area: 'Brand & Content', use: 'AI-assisted content creation, social media optimization, and brand voice consistency across five portfolio brands.' },
  { area: 'Supply Chain', use: 'Demand forecasting and inventory optimization for Marley Coffee — from farm yield predictions to retail distribution planning.' },
  { area: 'Guest Experience', use: 'Personalized guest recommendations and dynamic pricing at Ro Marley Beach House, improving occupancy and satisfaction.' },
  { area: 'Market Intelligence', use: 'Real-time competitive analysis and trend detection across cannabis, coffee, and hospitality verticals.' },
];

export default function AIForBusinessPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        AI for Business
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Technology serves the mission — never the other way around. The Marley
        Group integrates AI across its operations to amplify what is already
        authentic, not to replace it.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Our Approach</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          We treat AI as infrastructure, not identity. Every tool we deploy must
          pass a single test: does it make the brand more authentic, the
          operation more efficient, or the customer experience more personal? If
          not, we do not use it.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          This discipline comes from building brands where culture is the
          product. You cannot automate soul — but you can use technology to
          protect it while scaling the business around it.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">How We Use AI</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {applications.map((a) => (
            <div key={a.area} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--gold)] font-semibold mb-2">{a.area}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{a.use}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Lessons for Entrepreneurs</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Start with the problem, not the technology — AI is a tool, not a strategy</li>
          <li>Protect your brand voice — automate distribution, not creation</li>
          <li>Use AI to listen before you use it to speak — market intelligence first</li>
          <li>Build internal capability — do not outsource your competitive advantage</li>
          <li>Measure what matters — efficiency gains must translate to customer value</li>
        </ul>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Go Deeper</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Get the full playbook on building brands with AI — practical
          frameworks from The Marley Group.
        </p>
        <Link
          href="/ai-building-playbook"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          The AI Building Playbook
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/education" className="hover:text-[var(--gold)] transition-colors">Education</Link>
        <Link href="/ai-building-playbook" className="hover:text-[var(--gold)] transition-colors">AI Playbook</Link>
        <Link href="/courses" className="hover:text-[var(--gold)] transition-colors">Courses</Link>
        <Link href="/entrepreneurship" className="hover:text-[var(--gold)] transition-colors">Entrepreneurship</Link>
      </nav>
    </article>
  );
}
