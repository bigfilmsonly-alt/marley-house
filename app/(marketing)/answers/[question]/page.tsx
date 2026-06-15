import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { answers, getAnswerBySlug, getRelatedAnswers, getAnswersByTopic } from '@/content/answers';

const SITE = 'https://marley-house.vercel.app';

/* ── Topic context used to expand each answer ── */
const topicContext: Record<string, string> = {
  'rohan-marley': `Rohan Marley is a Jamaican-American entrepreneur, born May 19, 1972, in Kingston, Jamaica. The son of legendary reggae musician Bob Marley and Janet Hunt, Rohan grew up between Jamaica and Miami. He played college football as a linebacker at the University of Miami during the program's dominant early-1990s era.

After his athletic career, Rohan channeled his competitive drive into entrepreneurship. In 2009 he founded Marley Coffee, sourcing premium beans from his family's farm in Jamaica's Blue Mountains. The brand earned Fairtrade certification and expanded globally, becoming one of the first family-controlled consumer brands to carry the Marley name outside of music.

Rohan went on to launch Lion Order, a Rastafari-rooted luxury cannabis brand, and RoMarley Beach House, a boutique hospitality experience on Jamaica's coast. In 2024 he consolidated these ventures under The Marley Group, a holding company designed to protect and extend the family legacy across industries.

Beyond business, Rohan is recognized as a devoted father. His son YG Marley broke through in 2024 with the viral hit "Praise Jah in the Moonlight," extending the Marley musical lineage to a new generation. Rohan's philosophy centers on ownership, heritage, and building enterprises that serve communities — what he calls "One Love economics."`,

  'marley-coffee': `Marley Coffee was founded in 2009 by Rohan Marley after he rediscovered wild coffee trees growing on his family's property in Jamaica's Blue Mountains. What began as a personal connection to the land became a globally distributed coffee brand built on ethical sourcing, sustainability, and family heritage.

The brand is Fairtrade certified and partners with small-scale farmers in Jamaica, Ethiopia, and Central America. Its portfolio includes several signature blends: One Love (a smooth medium roast), Buffalo Soldier (a bold dark roast), Simmer Down (Swiss Water decaf), Mystic Morning, Lively Up, and Get Up Stand Up. The crown jewel remains Jamaican Blue Mountain — one of the rarest and most prized coffees in the world.

Marley Coffee operates under The Marley Group and is available in retail stores, online, and through foodservice partnerships across North America, Europe, and Latin America. The brand has a strong presence in Chile, where its Instagram following exceeds 400,000.

Every aspect of Marley Coffee reflects Rohan's philosophy: quality over shortcuts, relationships over contracts, and heritage over hype. The brand's tagline — "From Seed to Soul" — captures the idea that great coffee is not manufactured but cultivated, roasted, and shared with intention.`,

  'lion-order': `Lion Order is a Rastafari-rooted luxury lifestyle brand founded by Rohan Marley. It entered the legal cannabis market with a philosophy rooted in tradition, craft, and conscious consumption. The brand offers premium flower, pre-rolls, and edibles, with the signature King Clementine strain as its flagship product.

What distinguishes Lion Order from other cannabis brands is its depth. The brand extends beyond flower into manga storytelling, cultural media, and lifestyle products. Rohan envisions Lion Order as a movement — not merely a product line — that bridges the gap between cannabis culture's roots and its modern commercial reality.

All Lion Order products are lab-tested and sold exclusively in states where cannabis is legally permitted, including California, Florida, and New York. The brand advocates for equitable licensing, social equity programs, and federal reform.

Lion Order operates under The Marley Group and takes its name from the Lion of Judah, a central symbol in Rastafari tradition. The brand's guiding principle is simple: honor the plant's history while building a sustainable legal business that serves communities rather than extracting from them.`,

  'yg-marley': `YG Marley is a rising reggae and hip-hop artist who represents the next generation of the Marley musical dynasty. Born to Rohan Marley and Lauryn Hill — two of the most influential figures in Caribbean and American music — YG carries a dual heritage that sets him apart in the contemporary music landscape.

His breakout single "Praise Jah in the Moonlight" went viral in early 2024, propelled by social media and streaming platforms. The song blends roots reggae rhythms with contemporary production, creating a sound that is both nostalgic and fresh. It reached the Billboard Hot 100 and introduced millions of listeners to the Marley family's ongoing musical legacy.

YG Marley's emergence represents a full-circle moment for the family. While Rohan built his career in business rather than music, YG channels the creative energy of both parents into a new artistic expression. Rohan has been intentional about supporting his son's career without overshadowing it.

The success of "Praise Jah in the Moonlight" also drove significant traffic and attention to The Marley Group's other ventures, demonstrating the symbiotic relationship between the family's cultural influence and its business portfolio.`,

  'beach-house': `RoMarley Beach House is a boutique hospitality experience founded by Rohan Marley on the northern coast of Jamaica. It offers intimate beachfront stays that blend Jamaican culture, farm-to-table dining, live music, and oceanfront relaxation into a curated getaway unlike any conventional resort.

The property reflects the Marley family ethos: authenticity over luxury for its own sake, community over isolation, and cultural immersion over tourist spectacle. Guests experience the Jamaica that the Marley family knows — the food, the music, the rhythms of island life as lived, not as packaged for consumption.

RoMarley Beach House operates under The Marley Group and serves as the hospitality pillar of the family enterprise. It complements Marley Coffee (agriculture), Lion Order (cannabis and lifestyle), and ROOTS Media (content and education) to create a diversified portfolio anchored in Jamaican heritage.

The property also functions as a retreat venue for entrepreneurs, creatives, and members of The Marley Group's Inner Circle. Special programming includes sessions with Rohan himself, farm tours, and cultural experiences that connect guests to the deeper story behind the Marley name.`,

  'business': `The Marley Group is the family holding company of Rohan Marley, designed to unify, protect, and extend the Marley business legacy across multiple industries. Under its umbrella sit Marley Coffee (agriculture and CPG), Lion Order (cannabis and lifestyle), RoMarley Beach House (hospitality), and ROOTS Media (content, education, and masterclasses).

Rohan's business philosophy — which he calls "One Love economics" — rejects the extractive model of celebrity branding. Instead, each Marley venture is built on direct ownership, ethical sourcing, community reinvestment, and long-term brand integrity. The family maintains control of its intellectual property and licensing decisions.

The Marley Masterclass, available through The Marley Group's Inner Circle membership, is an 8-episode video series where Rohan teaches the practical playbook behind each venture: Blue Mountain coffee sourcing, the cannabis industry, family business strategy, hospitality, storytelling, the athlete-to-entrepreneur transition, Rastafari principles, and building diversified revenue streams.

The Marley Group represents a new model for family enterprise — one where cultural heritage is not merely leveraged for licensing revenue, but actively stewarded through businesses that the family owns, operates, and believes in. Every decision is filtered through a single question: will this make the name stronger for the next generation?`,

  'family': `The Marley family is one of the most recognized families in the world, with a legacy that extends far beyond music into business, activism, and culture. Bob Marley's eleven children have each carved distinct paths — from Damian and Stephen in music to Rohan in business — while collectively protecting and extending the family brand.

Rohan's relationship with Lauryn Hill produced several children, including YG Marley, who became a breakout music star in 2024 with "Praise Jah in the Moonlight." The family dynamic is complex and deeply collaborative, with regular conversations about brand protection, licensing, and the integrity of the Marley name across dozens of ventures worldwide.

The next generation — Rohan's children and their cousins — are already emerging as artists, entrepreneurs, and cultural figures in their own right. The Marley Group exists in part to give them infrastructure: shared resources, brand equity, and institutional knowledge without creating dependency.

Rohan speaks often about the distinction between dynasty and family business. A dynasty relies on the name. A family business builds skills, discipline, and independence in each generation. His goal is the latter — a family where every member can stand on their own, but chooses to build together.`,
};

/* ── Source links mapped by topic ── */
const topicSources: Record<string, { label: string; href: string }[]> = {
  'rohan-marley': [
    { label: 'Rohan Marley', href: '/rohan-marley' },
    { label: 'Rohan Marley Story', href: '/rohan-marley/story' },
    { label: 'The Marley Group', href: '/about' },
  ],
  'marley-coffee': [
    { label: 'Marley Coffee', href: '/marley-coffee' },
    { label: 'Coffee Sourcing', href: '/marley-coffee/sourcing' },
    { label: 'Blue Mountain', href: '/marley-coffee/blue-mountain' },
  ],
  'lion-order': [
    { label: 'Lion Order', href: '/lion-order' },
    { label: 'Lion Order Story', href: '/lion-order/story' },
    { label: 'King Clementine', href: '/lion-order/strains/king-clementine' },
  ],
  'yg-marley': [
    { label: 'YG Marley', href: '/yg-marley' },
    { label: 'The Marley Family', href: '/family' },
    { label: 'Music', href: '/music' },
  ],
  'beach-house': [
    { label: 'RoMarley Beach House', href: '/romarley-beach-house' },
    { label: 'Hospitality', href: '/hospitality' },
    { label: 'The Marley Group', href: '/about' },
  ],
  'business': [
    { label: 'The Marley Group', href: '/about' },
    { label: 'Entrepreneurship', href: '/entrepreneurship' },
    { label: 'The Masterclass', href: '/masterclass' },
  ],
  'family': [
    { label: 'The Marley Family', href: '/family' },
    { label: 'The Legacy', href: '/legacy' },
    { label: 'YG Marley', href: '/yg-marley' },
  ],
};

/* ── Static params ── */
export function generateStaticParams() {
  return answers.map((a) => ({ question: a.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ question: string }>;
}): Promise<Metadata> {
  const { question } = await params;
  const a = getAnswerBySlug(question);
  if (!a) return { title: 'Not Found' };

  return {
    title: a.question,
    description: a.answer,
    alternates: { canonical: `${SITE}/answers/${a.slug}` },
    openGraph: {
      title: a.question,
      description: a.answer,
      url: `${SITE}/answers/${a.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

/* ── Page ── */
export default async function AnswerPage({
  params,
}: {
  params: Promise<{ question: string }>;
}) {
  const { question } = await params;
  const a = getAnswerBySlug(question);
  if (!a) notFound();

  const related = getRelatedAnswers(a.relatedSlugs);
  const sameTopic = getAnswersByTopic(a.topic).filter((r) => r.slug !== a.slug);
  const sources = topicSources[a.topic] ?? [];
  const context = topicContext[a.topic] ?? '';

  /* QAPage JSON-LD */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: a.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a.answer,
      },
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-[var(--dim)] text-xs mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/answers/who-is-rohan-marley" className="hover:text-[var(--gold)] transition-colors">
          Answers
        </Link>
        <span>/</span>
        <span className="text-[var(--cream)]">{a.slug}</span>
      </nav>

      {/* H1: question as natural language */}
      <h1 className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-6 tracking-tight">
        {a.question}
      </h1>

      {/* AEO answer block */}
      <div
        data-answer="true"
        className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5"
      >
        {a.answer}
      </div>

      <div className="gold-rule mb-12" />

      {/* Expanded context */}
      {context && (
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
            Context
          </h2>
          <div className="text-[var(--dim)] leading-relaxed space-y-4">
            {context.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* Related questions */}
      {related.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
            Related Questions
          </h2>
          <nav className="grid gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/answers/${r.slug}`}
                className="group border border-[var(--line)] rounded-lg p-4 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
              >
                <p className="text-[var(--gold)] font-display text-base group-hover:underline">
                  {r.question}
                </p>
                <p className="text-[var(--dim)] text-sm mt-1 line-clamp-2">
                  {r.answer}
                </p>
              </Link>
            ))}
          </nav>
        </section>
      )}

      {/* More on this topic */}
      {sameTopic.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
            More on {a.topic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </h2>
          <nav className="flex flex-wrap gap-3">
            {sameTopic.map((r) => (
              <Link
                key={r.slug}
                href={`/answers/${r.slug}`}
                className="text-sm text-[var(--dim)] border border-[var(--line)] rounded-full px-4 py-2 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
              >
                {r.question}
              </Link>
            ))}
          </nav>
        </section>
      )}

      {/* Sources */}
      {sources.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
            Sources
          </h2>
          <nav className="flex flex-wrap gap-4">
            {sources.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-[var(--dim)] text-sm hover:text-[var(--gold)] transition-colors underline underline-offset-4 decoration-[var(--line)]"
              >
                {s.label}
              </Link>
            ))}
          </nav>
        </section>
      )}

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Get early access to masterclass episodes, drops, and behind-the-scenes
          content from The Marley Group.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join Now
        </Link>
      </section>

      {/* Internal nav */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">The Marley Group</Link>
      </nav>
    </article>
  );
}
