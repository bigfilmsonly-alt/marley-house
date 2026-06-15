import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Franchise — Marley Coffee',
  description:
    'Own a Marley Coffee franchise. Bring ethically sourced, single-origin Jamaican coffee to your community with full brand, training, and supply support.',
  alternates: { canonical: `${SITE}/marley-coffee/franchise` },
  openGraph: {
    title: 'Franchise — Marley Coffee',
    description:
      'Own a Marley Coffee franchise and bring legacy coffee to your market.',
    url: `${SITE}/marley-coffee/franchise`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const included = [
  'Exclusive territorial rights in your designated market',
  'Full brand kit — signage, packaging, and digital assets',
  'Initial and ongoing barista and operations training',
  'Direct supply chain to Jamaican single-origin beans',
  'Marketing launch playbook and ongoing campaign support',
  'Dedicated franchise success manager',
];

const steps = [
  { step: '01', title: 'Inquire', text: 'Submit your interest and we schedule a discovery call.' },
  { step: '02', title: 'Qualify', text: 'We review financials, location, and alignment with brand values.' },
  { step: '03', title: 'Agreement', text: 'Sign the franchise agreement and secure your territory.' },
  { step: '04', title: 'Launch', text: 'Complete training, build out your location, and open doors.' },
];

export default function FranchisePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          Opportunity
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          Franchise
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Marley Coffee is expanding globally. We are seeking franchise partners
          who share our dedication to quality, sustainability, and the Marley
          legacy. Investment starts at $150K-$350K depending on format and territory.
        </p>
      </header>

      {/* What's Included */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] text-center mb-8">
          What&rsquo;s Included
        </h2>
        <ul className="space-y-3 max-w-lg mx-auto">
          {included.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[var(--cream)] text-sm leading-relaxed">
              <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] text-center mb-8">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="border border-[var(--line)] rounded-xl p-6">
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                {s.step}
              </p>
              <h3 className="font-display text-lg text-[var(--cream)] mb-2">{s.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/connect"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Inquire About Franchising
        </Link>
        <p className="text-[var(--dim)] text-xs mt-4">
          <Link href="/marley-coffee/wholesale" className="hover:text-[var(--gold)]">
            &larr; Wholesale Partnerships
          </Link>
        </p>
      </section>
    </article>
  );
}
