'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { wisdomCards } from '@/content/wisdom';
import { stories } from '@/content/stories';

/* ── static data ─────────────────────────────────────────────── */

const drop = {
  number: 1,
  tags: ['legacy', 'reflection'],
  body: 'The lion does not turn around when the small dog barks. Stay focused on the mission. The legacy is not in what you build — it is what endures.',
};

const narrativePillars = [
  {
    image: '/lion-order/field-sunset.jpg',
    title: 'The Landscape',
    subtitle: 'Where the root meets the soil.',
  },
  {
    image: '/lion-order/culture.jpg',
    title: 'The Culture',
    subtitle: 'What the people carry forward.',
  },
  {
    image: '/lion-order/rohan-bw.jpg',
    title: 'The Values',
    subtitle: 'What we will not compromise.',
  },
];

const brandTruths = [
  { name: 'Competitor Truth', statement: 'The market is seeking truth.' },
  { name: 'Cultural Truth', statement: 'There is expressive power in herb.' },
  { name: 'Category Truth', statement: 'Wellness is valued but diluted.' },
  {
    name: 'Medicinal Truth',
    statement: 'Ancient plant medicines are more important than ever.',
  },
];

const codesOfLionOrder = [
  {
    name: 'Strength of Spirit',
    description:
      'We believe strength is confidence. We live in harmony but we fight for what\u2019s right.',
  },
  {
    name: 'Fight for Justice',
    description:
      'We seek justice for those who have been wrongfully convicted or negatively affected by outdated pre-conceived notions around the cannabis plant.',
  },
  {
    name: 'Rastafari Virtues',
    description:
      'We uphold the Rastafarian virtues that shape our identity. We believe in justice and harmony and are shaped by our optimistic outlook on the world.',
  },
  {
    name: 'Provoke Consciousness',
    description:
      'We encourage unity through self-awareness, helping those around us to seek awareness of themselves and the world around them.',
  },
  {
    name: 'Our Way',
    description:
      'We live by higher principles, spreading the love and the herb to all. We are joy seekers and troublemakers \u2014 always have been, always will be.',
  },
  {
    name: 'Respect Your Nature',
    description: 'We trust, respect and reconnect to nature.',
  },
  {
    name: 'High Quality',
    description:
      'Our commitment to quality and excellence extends to everything we touch.',
  },
];

const qualityFactors = [
  'Aroma',
  'Flavor',
  'Efficacy',
  'Resin-Release',
  'Aesthetic',
];

const maison = [
  {
    crest: '/brand/lion-head-gold.png',
    name: 'Lion Order',
    description:
      'Sacred herb. Elevated ritual. The cannabis arm of the Marley legacy \u2014 a movement of professional athletes, activists, and visionaries seeking everlasting change.',
  },
  {
    crest: '/brand/lion-crest-clean.png',
    name: 'Marley Coffee',
    description:
      'Farm-to-cup excellence from the Blue Mountains of Jamaica. Every bean remembers the soil, the rain, and the hands that picked it.',
  },
  {
    crest: '/brand/rhr-monogram-transparent.png',
    name: 'RoMarley Beach House',
    description:
      'Where culture, cuisine, and community meet the shore. The table where everyone is welcome.',
  },
];

const communityPages = [
  '/brandbook/p30.jpg',
  '/brandbook/p31.jpg',
  '/brandbook/p32.jpg',
  '/brandbook/p33.jpg',
  '/brandbook/p34.jpg',
  '/brandbook/p40.jpg',
];

/* ── page ─────────────────────────────────────────────────────── */

export default function HomePage() {
  const [expandedWisdom, setExpandedWisdom] = useState<string | null>(null);

  const handleBackToSplash = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('marley-threshold');
      window.location.reload();
    }
  };

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════════════════════════════════════════════════════════
          0. LION BACK BUTTON — top-left, always visible
      ═══════════════════════════════════════════════════════════ */}
      <button
        onClick={handleBackToSplash}
        aria-label="Return to welcome"
        className="fixed top-4 left-4 z-50 w-8 h-8 flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
      >
        <Image
          src="/brand/lion-head-gold.png"
          alt="Back to welcome"
          width={32}
          height={32}
          className="drop-shadow-lg"
        />
      </button>

      {/* ═══════════════════════════════════════════════════════════
          1. R-M MONOGRAM HERO — Large monogram on pure black
             This is the FIRST thing you see after entering.
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-black pt-16 pb-12">
        <div className="flex flex-col items-center justify-center px-8">
          {/* Large monogram */}
          <div className="relative w-[220px] h-[220px] mb-8">
            <Image
              src="/brand/rhr-monogram-transparent.png"
              alt="R-M Monogram"
              fill
              className="object-contain"
              priority
              sizes="220px"
            />
          </div>

          {/* Tagline */}
          <p className="font-display text-2xl text-[var(--cream)] italic leading-[1.4] tracking-[0.01em] text-center mb-8">
            Awaken the lion<br />in everyone.
          </p>

          {/* Gold rule */}
          <div className="gold-rule w-full max-w-[200px]" />

          {/* Subtle house label */}
          <p className="text-[8px] tracking-[0.5em] uppercase text-[var(--dim)] mt-6">
            Marley House
          </p>
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          2. WELCOME TEXT — Lion Order introduction (p03)
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-8 py-16 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">
          Welcome to Lion Order
        </p>

        <h1 className="font-display text-3xl text-[var(--cream)] italic leading-[1.35] mb-8 max-w-[360px] mx-auto">
          A movement led by Rohan Marley
        </h1>

        <p className="font-body text-[14px] text-[var(--dim)] leading-[1.9] font-light max-w-[380px] mx-auto mb-8">
          A collection of professional athletes, activists and visionaries around the
          world who seek everlasting change. A commitment to the elevation and
          edification of consciousness via plant medicine.
        </p>

        <div className="gold-rule max-w-[120px] mx-auto mb-8" />

        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] max-w-[300px] mx-auto">
          This Is Our Life
        </p>

        <p className="font-body text-[12px] text-[var(--dim)] leading-[1.8] font-light mt-3 max-w-[300px] mx-auto">
          Tropical warmth. Ancient wisdom. Modern purpose.
        </p>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          3. DAILY DROP — editorial numbered card
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">
          Daily Drop
        </p>

        <div className="border border-[var(--line)] bg-[var(--panel)] p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-4xl text-[var(--gold)] leading-none tracking-tight">
              {String(drop.number).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              {drop.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[0.2em] uppercase text-[var(--dim)] border border-[var(--line)] px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="font-body text-[15px] text-[var(--cream)] leading-[1.9] font-light">
            {drop.body}
          </p>

          <div className="gold-rule mt-8" />

          <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--dim)] mt-4 text-center">
            From the House
          </p>
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          4. NARRATIVE PILLARS — The Landscape, The Culture, The Values (p20)
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3 text-center">
          Our Narrative
        </p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] text-center mb-8">
          Our narrative stems from:
        </p>

        <div className="space-y-4">
          {narrativePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative w-full aspect-[16/9] overflow-hidden"
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-xl text-[var(--gold)] italic leading-tight mb-1">
                  {pillar.title}
                </p>
                <p className="font-body text-[12px] text-[var(--cream)] leading-[1.6] font-light opacity-80">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          5. ROHAN PORTRAIT — full-width founder section
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14">
        <div className="relative w-full aspect-[3/4] max-h-[85vh] overflow-hidden">
          <Image
            src="/lion-order/rohan-portrait.jpg"
            alt="Rohan Marley"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
        </div>

        <div className="px-8 -mt-24 relative z-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3">
            The Founder
          </p>
          <h2 className="font-display text-3xl text-[var(--cream)] italic leading-tight mb-5">
            Rohan Marley
          </h2>
          <p className="font-body text-[14px] text-[var(--dim)] leading-[1.9] font-light mb-6">
            Son of Bob. Father of legacy. From the gridiron to the coffee fields of Jamaica, Rohan
            carries the frequency forward — building a house where culture, craft, and consciousness
            meet under one roof.
          </p>
          <p className="font-body text-[13px] text-[var(--dim)] leading-[1.8] font-light mb-8 italic">
            A life lived not for the spotlight, but for the soil. For the seed that becomes the tree
            that shelters the next generation.
          </p>

          {/* Rohan signature (p50) */}
          <Image
            src="/brand/rohan-signature.png"
            alt="Rohan Marley signature"
            width={160}
            height={54}
            className="opacity-60"
          />
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          6. BRAND TRUTHS — The 4 truths from p10
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-8 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3 text-center">
          Summary Truths
        </p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] text-center mb-10">
          What we know to be true.
        </p>

        <div className="space-y-6">
          {brandTruths.map((truth, i) => (
            <div key={truth.name} className="border-l-2 border-[var(--gold)] pl-5 py-1">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">
                {String(i + 1).padStart(2, '0')} &mdash; {truth.name}
              </p>
              <p className="font-display text-base text-[var(--cream)] italic leading-[1.6]">
                &ldquo;{truth.statement}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          7. CODES OF LION ORDER — Full 7 codes from p25
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3 text-center">
          Our Codes
        </p>
        <h2 className="font-display text-2xl text-[var(--cream)] italic leading-[1.35] text-center mb-10">
          Codes of Lion Order
        </h2>

        <div className="space-y-8">
          {codesOfLionOrder.map((code, i) => (
            <div key={code.name} className="border border-[var(--line)] bg-[var(--panel)] p-6">
              {/* Gold dot accent */}
              <div className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 bg-[var(--gold)] shrink-0" />
                <div>
                  <p className="font-display text-lg text-[var(--cream)] italic leading-tight mb-3">
                    {code.name}
                  </p>
                  <p className="font-body text-[13px] text-[var(--dim)] leading-[1.8] font-light">
                    {code.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          8. FIVE QUALITY FACTORS — from p15
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3 text-center">
          Quality
        </p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] text-center mb-10">
          Five Quality Factors
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {qualityFactors.map((factor) => (
            <span
              key={factor}
              className="border border-[var(--gold)] text-[var(--gold)] text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 font-body"
            >
              {factor}
            </span>
          ))}
        </div>

        <p className="font-body text-[12px] text-[var(--dim)] leading-[1.8] font-light text-center mt-8 max-w-[320px] mx-auto">
          Every product, every experience, every moment is measured against these five pillars.
          Nothing leaves the house without passing through all five.
        </p>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          9. COMMUNITY — from p30, lifestyle imagery
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3 text-center">
          Our People
        </p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] text-center mb-8 px-8">
          Our Community
        </p>

        {/* Horizontal scroll of brand book pages */}
        <div className="flex gap-3 overflow-x-auto px-6 pb-4 scrollbar-hide">
          {communityPages.map((src, i) => (
            <div
              key={src}
              className="relative w-56 aspect-[4/3] shrink-0 overflow-hidden"
            >
              <Image
                src={src}
                alt={`Community ${i + 1}`}
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
          ))}
        </div>

        {/* Full-width p40 community collage */}
        <div className="relative w-full aspect-[16/9] mt-6 overflow-hidden">
          <Image
            src="/brandbook/p40.jpg"
            alt="Lion Order Community"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[var(--cream)]">
              The Movement Is the People
            </p>
          </div>
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          10. THE MAISON — 3 brand cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3 text-center">
          The Portfolio
        </p>
        <h2 className="font-display text-2xl text-[var(--cream)] italic leading-[1.35] text-center mb-10">
          The Maison
        </h2>

        <div className="space-y-4">
          {maison.map((brand) => (
            <div
              key={brand.name}
              className="border border-[var(--line)] bg-[var(--panel)] p-6 flex items-start gap-5"
            >
              <Image
                src={brand.crest}
                alt={brand.name}
                width={36}
                height={36}
                className="opacity-70 mt-0.5 shrink-0"
              />
              <div>
                <p className="font-display text-base text-[var(--cream)] leading-snug mb-2">
                  {brand.name}
                </p>
                <p className="font-body text-[12px] text-[var(--dim)] leading-[1.8] font-light">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          11. WISDOM — 3 expandable wisdom cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">
          Wisdom
        </p>

        <div className="space-y-6">
          {wisdomCards.slice(0, 3).map((card) => {
            const isExpanded = expandedWisdom === card.id;
            return (
              <button
                key={card.id}
                onClick={() =>
                  setExpandedWisdom(isExpanded ? null : card.id)
                }
                className="w-full text-left border border-[var(--line)] bg-[var(--panel)] p-6 cursor-pointer transition-colors hover:border-[var(--gold)]/30"
              >
                {/* Gold quote mark */}
                <span className="font-display text-3xl text-[var(--gold)] leading-none block mb-3">
                  &ldquo;
                </span>

                <p className="font-display text-base text-[var(--cream)] italic leading-[1.6]">
                  {card.lesson}
                </p>

                {isExpanded && (
                  <p className="font-body text-[13px] text-[var(--dim)] leading-[1.8] mt-4 font-light">
                    {card.expanded}
                  </p>
                )}

                <div className="flex items-center justify-between mt-4">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--dim)]">
                    Room: {card.room}
                  </p>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[var(--dim)]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[var(--dim)]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          12. MISSION / VISION — generous spacing
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-8 py-20 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">
          Our Mission
        </p>
        <p className="font-display text-xl text-[var(--cream)] italic leading-[1.5] max-w-[340px] mx-auto mb-6">
          Create the highest quality goods that elevate consciousness and culture.
        </p>
        <p className="font-body text-[13px] text-[var(--dim)] leading-[1.8] font-light max-w-[340px] mx-auto">
          From the soil to the soul. Everything we touch carries intention, heritage, and the
          unwavering belief that quality is a form of respect.
        </p>

        <div className="gold-rule max-w-[80px] mx-auto my-14" />

        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">
          Our Vision
        </p>
        <p className="font-display text-xl text-[var(--cream)] italic leading-[1.5] max-w-[340px] mx-auto mb-6">
          To awaken the lion in everyone.
        </p>
        <p className="font-body text-[13px] text-[var(--dim)] leading-[1.8] font-light max-w-[340px] mx-auto">
          The lion is not an animal. It is a frequency. A way of standing in the world — with
          dignity, with purpose, with the courage to build something that outlasts you.
        </p>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          13. FOOTER — Lion crest + Est. 2022
      ═══════════════════════════════════════════════════════════ */}
      <footer className="px-8 py-16 text-center">
        <Image
          src="/brand/lion-crest-icon.png"
          alt="Lion Order"
          width={40}
          height={40}
          className="mx-auto mb-5 opacity-40"
        />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.4em] uppercase mb-2">
          Lion Order &middot; Est. 2022
        </p>
        <p className="text-[var(--dim)] text-[7px] tracking-[0.2em] uppercase opacity-50">
          One Love. One House. One Order.
        </p>
      </footer>
    </div>
  );
}
