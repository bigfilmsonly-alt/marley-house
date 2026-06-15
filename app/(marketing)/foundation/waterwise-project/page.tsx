import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'WaterWise Project — The Marley Group Foundation',
  description:
    'The WaterWise Project brings clean, sustainable water access to rural communities across Jamaica and the Caribbean, powered by The Marley Group Foundation.',
  alternates: { canonical: `${SITE}/foundation/waterwise-project` },
  openGraph: {
    title: 'WaterWise Project — The Marley Group Foundation',
    description:
      'Clean water access for rural Jamaica and the Caribbean.',
    url: `${SITE}/foundation/waterwise-project`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pillars = [
  {
    title: 'Rainwater Harvesting',
    text: 'Installing collection systems in schools and community centers across rural Jamaica, turning every rainfall into a lasting resource.',
  },
  {
    title: 'Filtration & Purification',
    text: 'Deploying solar-powered filtration units that deliver safe drinking water without dependence on grid electricity.',
  },
  {
    title: 'Education & Stewardship',
    text: 'Training local leaders in water system maintenance, ensuring every installation becomes self-sustaining within two years.',
  },
  {
    title: 'Community Wells',
    text: 'Funding the drilling and rehabilitation of community wells in partnership with local governments and NGOs.',
  },
];

export default function WaterWiseProjectPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        WaterWise Project
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Clean water is the first freedom. The WaterWise Project, launched by The Marley Group
        Foundation, brings sustainable water access to rural communities across Jamaica and the
        wider Caribbean — because legacy means nothing if the next generation cannot drink.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Why Water</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          More than 200,000 Jamaicans lack consistent access to safe drinking water. In the
          hills where Marley Coffee is grown, communities still rely on untreated river water
          during dry seasons. The WaterWise Project exists to close that gap — one community
          at a time.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Rohan Marley has said it plainly: "You cannot build a legacy on land where the
          children cannot drink the water." This initiative is the foundation beneath
          every other Marley enterprise.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Four Pillars</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="border border-[var(--line)] rounded-lg p-5">
              <h3 className="text-[var(--gold)] font-bold text-sm tracking-wider uppercase mb-2">
                {p.title}
              </h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Impact So Far</h2>
        <div className="flex flex-wrap gap-8 text-center">
          {[
            ['12+', 'Communities Served'],
            ['5,000+', 'People Reached'],
            ['8', 'School Systems Installed'],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="text-[var(--gold)] font-display text-3xl">{stat}</p>
              <p className="text-[var(--dim)] text-xs uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          Help us reach the next community.
        </p>
        <Link
          href="/foundation/give"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Support WaterWise
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/foundation/1love" className="hover:text-[var(--gold)] transition-colors">1Love Initiative</Link>
        <Link href="/foundation/give" className="hover:text-[var(--gold)] transition-colors">Give</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
