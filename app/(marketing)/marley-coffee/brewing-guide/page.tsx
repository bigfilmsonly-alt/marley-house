import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Brewing Guide — Marley Coffee',
  description:
    'Learn how to brew Marley Coffee at home. Pour-over, French press, espresso, cold brew, and drip methods with ratios, temperatures, and pro tips.',
  alternates: { canonical: `${SITE}/marley-coffee/brewing-guide` },
  openGraph: {
    title: 'Brewing Guide — Marley Coffee',
    description:
      'Master five brewing methods with Marley Coffee. Ratios, temps, times, and tips.',
    url: `${SITE}/marley-coffee/brewing-guide`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const methods = [
  {
    name: 'Pour-Over',
    ratio: '1:16 (1 g coffee : 16 g water)',
    temp: '200-205 F (93-96 C)',
    time: '3:00-3:30',
    grind: 'Medium-fine',
    tip: 'Bloom with twice the coffee weight in water for 30 seconds before the main pour. A slow, steady spiral keeps extraction even.',
  },
  {
    name: 'French Press',
    ratio: '1:15 (1 g coffee : 15 g water)',
    temp: '200 F (93 C)',
    time: '4:00',
    grind: 'Coarse',
    tip: 'Stir once at the one-minute mark, then let it steep undisturbed. Press slowly to avoid pushing fines into your cup.',
  },
  {
    name: 'Espresso',
    ratio: '1:2 (18 g in : 36 g out)',
    temp: '200 F (93 C)',
    time: '25-30 seconds',
    grind: 'Fine',
    tip: 'Distribute grounds evenly and tamp with consistent 30 lbs of pressure. Aim for a honey-like stream from the portafilter.',
  },
  {
    name: 'Cold Brew',
    ratio: '1:8 (1 g coffee : 8 g water)',
    temp: 'Room temp or refrigerated',
    time: '12-18 hours',
    grind: 'Extra coarse',
    tip: 'Use filtered water for the cleanest flavor. Strain through a fine mesh then a paper filter. Dilute concentrate 1:1 before serving.',
  },
  {
    name: 'Drip / Auto',
    ratio: '1:17 (1 g coffee : 17 g water)',
    temp: '195-205 F (90-96 C)',
    time: '4:00-6:00',
    grind: 'Medium',
    tip: 'Pre-wet the paper filter with hot water to remove papery taste. Use freshly ground beans for the best results from any auto brewer.',
  },
];

export default function BrewingGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          Craft Your Cup
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          Brewing Guide
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Great coffee starts with great technique. Five methods, each dialed in
          for Marley Coffee beans. Find your ritual below.
        </p>
      </header>

      {/* Methods */}
      <section className="mb-16 space-y-8">
        {methods.map((m) => (
          <div
            key={m.name}
            className="border border-[var(--line)] rounded-xl p-6 sm:p-8"
          >
            <h2 className="font-display text-xl text-[var(--gold)] mb-4">{m.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-[var(--dim)] text-[10px] tracking-[0.2em] uppercase">Ratio</p>
                <p className="text-[var(--cream)] text-sm">{m.ratio}</p>
              </div>
              <div>
                <p className="text-[var(--dim)] text-[10px] tracking-[0.2em] uppercase">Temp</p>
                <p className="text-[var(--cream)] text-sm">{m.temp}</p>
              </div>
              <div>
                <p className="text-[var(--dim)] text-[10px] tracking-[0.2em] uppercase">Time</p>
                <p className="text-[var(--cream)] text-sm">{m.time}</p>
              </div>
              <div>
                <p className="text-[var(--dim)] text-[10px] tracking-[0.2em] uppercase">Grind</p>
                <p className="text-[var(--cream)] text-sm">{m.grind}</p>
              </div>
            </div>
            <p className="text-[var(--cream)] text-sm leading-relaxed">
              <span className="text-[var(--gold)] font-semibold">Tip:</span> {m.tip}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Shop Coffee
        </Link>
        <p className="text-[var(--dim)] text-xs mt-4">
          <Link href="/marley-coffee/recipes" className="hover:text-[var(--gold)]">
            Coffee Recipes &rarr;
          </Link>
        </p>
      </section>
    </article>
  );
}
