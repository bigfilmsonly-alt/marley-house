import type { MetadataRoute } from 'next';
import { cities } from '@/content/cities';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

type Entry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  priority: number,
  changeFrequency: Entry['changeFrequency'] = 'weekly',
): Entry {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  /* ── Homepage ───────────────────────────────────────────────── */
  const homepage: Entry[] = [entry('', 1.0, 'daily')];

  /* ── Shell tabs (top-level navigation) ──────────────────────── */
  const shell: Entry[] = [
    entry('/coffee', 0.9, 'weekly'),
    entry('/watch', 0.9, 'weekly'),
    entry('/king-clem', 0.9, 'weekly'),
    entry('/lion-order', 0.9, 'weekly'),
    entry('/connect', 0.9, 'weekly'),
    entry('/story', 0.8, 'weekly'),
    entry('/brand', 0.8, 'monthly'),
    entry('/identity', 0.8, 'monthly'),
    entry('/book', 0.8, 'monthly'),
    entry('/ask', 0.8, 'weekly'),
    entry('/merch', 0.8, 'weekly'),
    entry('/vault', 0.7, 'monthly'),
  ];

  /* ── Marketing — About / Family / History ───────────────────── */
  const marketing: Entry[] = [
    entry('/about', 0.9, 'monthly'),
    entry('/family', 0.9, 'monthly'),
    entry('/the-marleys', 0.9, 'monthly'),
    entry('/legacy', 0.9, 'monthly'),
    entry('/history', 0.8, 'monthly'),
    entry('/timeline', 0.8, 'monthly'),
    entry('/the-name', 0.8, 'monthly'),
    entry('/the-archive', 0.7, 'monthly'),
  ];

  /* ── Rohan Marley ───────────────────────────────────────────── */
  const rohanMarley: Entry[] = [
    entry('/rohan-marley', 0.9, 'monthly'),
    entry('/rohan-marley/story', 0.8, 'monthly'),
    entry('/rohan-marley/philosophy', 0.8, 'monthly'),
    entry('/rohan-marley/timeline', 0.8, 'monthly'),
    entry('/rohan-marley/press', 0.8, 'monthly'),
  ];

  /* ── Marley family members ──────────────────────────────────── */
  const familyMembers: Entry[] = [
    entry('/cedella-marley', 0.8, 'monthly'),
    entry('/damian-marley', 0.8, 'monthly'),
    entry('/yg-marley', 0.8, 'monthly'),
  ];

  /* ── Marley Coffee — pillar + blends + sub-pages ────────────── */
  const coffeePillar: Entry[] = [
    entry('/marley-coffee', 0.9, 'weekly'),
    entry('/marley-coffee/shop', 0.9, 'weekly'),
    entry('/marley-coffee/story', 0.8, 'monthly'),
    entry('/marley-coffee/sourcing', 0.8, 'monthly'),
    entry('/marley-coffee/sustainability', 0.8, 'monthly'),
    entry('/marley-coffee/brewing-guide', 0.8, 'monthly'),
    entry('/marley-coffee/recipes', 0.8, 'monthly'),
    entry('/marley-coffee/subscribe', 0.8, 'weekly'),
    entry('/marley-coffee/wholesale', 0.8, 'monthly'),
    entry('/marley-coffee/franchise', 0.8, 'monthly'),
    entry('/marley-coffee/no-pesticide-promise', 0.8, 'monthly'),
  ];

  const coffeeBlends: Entry[] = [
    entry('/marley-coffee/blue-mountain', 0.8, 'monthly'),
    entry('/marley-coffee/jamaican-blue-mountain', 0.8, 'monthly'),
    entry('/marley-coffee/buffalo-soldier', 0.8, 'monthly'),
    entry('/marley-coffee/get-up-stand-up', 0.8, 'monthly'),
    entry('/marley-coffee/lively-up', 0.8, 'monthly'),
    entry('/marley-coffee/mystic-morning', 0.8, 'monthly'),
    entry('/marley-coffee/one-love', 0.8, 'monthly'),
    entry('/marley-coffee/simmer-down', 0.8, 'monthly'),
  ];

  /* ── Lion Order — pillar + sub-pages ────────────────────────── */
  const lionOrderPillar: Entry[] = [
    entry('/lion-order/story', 0.8, 'monthly'),
    entry('/lion-order/philosophy', 0.8, 'monthly'),
    entry('/lion-order/codes', 0.8, 'monthly'),
    entry('/lion-order/products', 0.8, 'weekly'),
    entry('/lion-order/the-flower', 0.8, 'monthly'),
    entry('/lion-order/king-clem', 0.8, 'monthly'),
    entry('/lion-order/strains/king-clementine', 0.8, 'monthly'),
    entry('/lion-order/lab-results', 0.8, 'monthly'),
    entry('/lion-order/responsible-use', 0.8, 'monthly'),
    entry('/lion-order/education', 0.8, 'monthly'),
    entry('/lion-order/characters', 0.8, 'monthly'),
    entry('/lion-order/kai-suna', 0.8, 'monthly'),
    entry('/lion-order/runna-gyal', 0.8, 'monthly'),
  ];

  /* ── RoMarley Beach House ───────────────────────────────────── */
  const beachHouse: Entry[] = [
    entry('/romarley-beach-house', 0.9, 'weekly'),
    entry('/romarley-beach-house/rooms', 0.8, 'monthly'),
    entry('/romarley-beach-house/book', 0.8, 'weekly'),
    entry('/romarley-beach-house/events', 0.8, 'weekly'),
  ];

  /* ── Music ──────────────────────────────────────────────────── */
  const music: Entry[] = [
    entry('/music', 0.9, 'weekly'),
    entry('/music/releases', 0.8, 'weekly'),
    entry('/music/playlists', 0.8, 'weekly'),
    entry('/music/the-roots-sound', 0.8, 'monthly'),
    entry('/music/praise-jah-in-the-moonlight', 0.8, 'monthly'),
    entry('/music/yg-marley', 0.8, 'monthly'),
    entry('/music/tour', 0.8, 'weekly'),
  ];

  /* ── ROOTS Media ────────────────────────────────────────────── */
  const roots: Entry[] = [
    entry('/roots', 0.8, 'weekly'),
    entry('/roots/episodes', 0.8, 'weekly'),
    entry('/roots/podcast', 0.8, 'weekly'),
    entry('/roots/watch', 0.8, 'weekly'),
  ];

  /* ── Foundation ─────────────────────────────────────────────── */
  const foundation: Entry[] = [
    entry('/foundation', 0.8, 'monthly'),
    entry('/foundation/1love', 0.8, 'monthly'),
    entry('/foundation/give', 0.8, 'monthly'),
    entry('/foundation/waterwise-project', 0.8, 'monthly'),
  ];

  /* ── Capital / Business ─────────────────────────────────────── */
  const capital: Entry[] = [
    entry('/capital', 0.8, 'monthly'),
    entry('/capital/investments', 0.8, 'monthly'),
  ];

  /* ── Education & Business Building ──────────────────────────── */
  const education: Entry[] = [
    entry('/education', 0.8, 'monthly'),
    entry('/entrepreneurship', 0.8, 'monthly'),
    entry('/business-building', 0.8, 'monthly'),
    entry('/masterclass', 0.8, 'monthly'),
  ];

  /* ── Experiences / Hospitality / Retreats ────────────────────── */
  const experiences: Entry[] = [
    entry('/experiences', 0.8, 'monthly'),
    entry('/hospitality', 0.8, 'monthly'),
    entry('/retreats', 0.8, 'monthly'),
    entry('/stay-and-listen', 0.8, 'monthly'),
    entry('/real-estate', 0.7, 'monthly'),
  ];

  /* ── Content & Media ────────────────────────────────────────── */
  const content: Entry[] = [
    entry('/blog', 0.8, 'weekly'),
    entry('/news', 0.8, 'weekly'),
    entry('/press-room', 0.8, 'weekly'),
    entry('/media', 0.8, 'weekly'),
    entry('/membership', 0.8, 'monthly'),
    entry('/upgrade', 0.7, 'monthly'),
  ];

  /* ── City hub pages (dynamic) ───────────────────────────────── */
  const cityPages: Entry[] = cities.flatMap((c) => [
    entry(`/cities/${c.slug}`, 0.8, 'weekly'),
    ...(c.hasCoffee ? [entry(`/cities/${c.slug}/coffee`, 0.7, 'weekly')] : []),
  ]);

  /* ── Legal ──────────────────────────────────────────────────── */
  const legal: Entry[] = [
    entry('/privacy-policy', 0.5, 'yearly'),
    entry('/terms', 0.5, 'yearly'),
    entry('/cookie-policy', 0.5, 'yearly'),
    entry('/accessibility', 0.5, 'yearly'),
    entry('/shipping-returns', 0.5, 'yearly'),
    entry('/wholesale-terms', 0.5, 'yearly'),
    entry('/cannabis-compliance', 0.5, 'yearly'),
    entry('/medical-disclaimer', 0.5, 'yearly'),
    entry('/faq', 0.6, 'monthly'),
    entry('/glossary', 0.6, 'monthly'),
  ];

  return [
    ...homepage,
    ...shell,
    ...marketing,
    ...rohanMarley,
    ...familyMembers,
    ...coffeePillar,
    ...coffeeBlends,
    ...lionOrderPillar,
    ...beachHouse,
    ...music,
    ...roots,
    ...foundation,
    ...capital,
    ...education,
    ...experiences,
    ...content,
    ...cityPages,
    ...legal,
  ];
}
