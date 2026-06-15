import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Coffee Recipes — Marley Coffee',
  description:
    'Creative coffee recipes using Marley Coffee blends. From Jamaican iced coffee to espresso martinis — cocktails, cold brews, and more.',
  alternates: { canonical: `${SITE}/marley-coffee/recipes` },
  openGraph: {
    title: 'Coffee Recipes — Marley Coffee',
    description:
      'Creative coffee recipes and cocktails using Marley Coffee blends.',
    url: `${SITE}/marley-coffee/recipes`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const recipes = [
  {
    name: 'Jamaican Iced Coffee',
    blend: 'One Love',
    ingredients: ['2 shots espresso (cooled)', '8 oz cold milk', '1 tbsp raw cane sugar', 'Ice'],
    steps: ['Brew 2 shots of One Love espresso and let cool.', 'Fill a tall glass with ice.', 'Stir sugar into espresso until dissolved.', 'Pour over ice, add milk, stir, and serve.'],
  },
  {
    name: 'Espresso Martini',
    blend: 'Buffalo Soldier',
    ingredients: ['1.5 oz vodka', '1 oz coffee liqueur', '1 shot fresh Buffalo Soldier espresso', 'Ice'],
    steps: ['Pull a fresh shot of Buffalo Soldier and let cool briefly.', 'Combine vodka, coffee liqueur, and espresso in a shaker with ice.', 'Shake vigorously for 15 seconds.', 'Strain into a chilled coupe glass. Garnish with 3 coffee beans.'],
  },
  {
    name: 'Cold Brew Tonic',
    blend: 'Lively Up',
    ingredients: ['4 oz Lively Up cold brew concentrate', '6 oz tonic water', 'Lime wedge', 'Ice'],
    steps: ['Fill a glass with ice.', 'Pour tonic water over ice.', 'Slowly pour cold brew concentrate over the back of a spoon to layer.', 'Squeeze lime wedge and drop in. Stir gently before drinking.'],
  },
  {
    name: 'Coconut Mocha Smoothie',
    blend: 'Mystic Morning',
    ingredients: ['1 cup Mystic Morning coffee (chilled)', '1 banana (frozen)', '2 tbsp cocoa powder', '1/2 cup coconut milk', '1 tbsp honey'],
    steps: ['Brew Mystic Morning and refrigerate until cold.', 'Add all ingredients to a blender.', 'Blend until smooth and creamy.', 'Pour into a tall glass and serve immediately.'],
  },
  {
    name: 'Spiced Rum Coffee',
    blend: 'Simmer Down',
    ingredients: ['8 oz hot brewed Simmer Down', '1.5 oz spiced rum', '1 tbsp brown sugar', 'Whipped cream'],
    steps: ['Brew Simmer Down using your preferred method.', 'Stir brown sugar into hot coffee until dissolved.', 'Add spiced rum and stir.', 'Top with whipped cream and a dusting of cinnamon.'],
  },
  {
    name: 'Blue Mountain Affogato',
    blend: 'Jamaican Blue Mountain',
    ingredients: ['1 scoop vanilla bean gelato', '1 shot Jamaican Blue Mountain espresso'],
    steps: ['Place a scoop of gelato in a small bowl or glass.', 'Pull a fresh shot of Blue Mountain espresso.', 'Pour the hot espresso directly over the gelato.', 'Serve immediately with a small spoon.'],
  },
];

export default function RecipesPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          Mix It Up
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          Coffee Recipes
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Six ways to enjoy Marley Coffee beyond the mug. Cocktails, cold brews,
          and blended creations — each paired with the ideal blend.
        </p>
      </header>

      {/* Recipes */}
      <section className="mb-16 space-y-8">
        {recipes.map((r) => (
          <div
            key={r.name}
            className="border border-[var(--line)] rounded-xl p-6 sm:p-8"
          >
            <p className="text-[var(--dim)] text-[10px] tracking-[0.2em] uppercase mb-1">
              Blend: {r.blend}
            </p>
            <h2 className="font-display text-xl text-[var(--gold)] mb-4">{r.name}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[var(--cream)] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                  Ingredients
                </h3>
                <ul className="space-y-1">
                  {r.ingredients.map((ing, i) => (
                    <li key={i} className="text-[var(--dim)] text-sm flex items-start gap-2">
                      <span className="text-[var(--gold)]">-</span> {ing}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[var(--cream)] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                  Steps
                </h3>
                <ol className="space-y-1">
                  {r.steps.map((s, i) => (
                    <li key={i} className="text-[var(--dim)] text-sm flex items-start gap-2">
                      <span className="text-[var(--gold)] font-semibold">{i + 1}.</span> {s}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Shop the Blends
        </Link>
        <p className="text-[var(--dim)] text-xs mt-4">
          <Link href="/marley-coffee/brewing-guide" className="hover:text-[var(--gold)]">
            &larr; Brewing Guide
          </Link>
        </p>
      </section>
    </article>
  );
}
