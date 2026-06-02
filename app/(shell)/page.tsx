'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { wisdomCards } from '@/content/wisdom';

/* ── static data ─────────────────────────────────────────────── */

const drop = {
  number: 1,
  tags: ['legacy', 'reflection'],
  body: 'The lion does not turn around when the small dog barks. Stay focused on the mission. The legacy is not in what you build — it is what endures.',
};

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
      'We live by higher principles, spreading the love and the herb to all. We are joy seekers and troublemakers — always have been, always will be.',
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
      'Sacred herb. Elevated ritual. The cannabis arm of the Marley legacy — a movement of professional athletes, activists, and visionaries seeking everlasting change.',
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

/* ── dropdown section definitions ────────────────────────────── */

const sections = [
  { id: 'daily-drop', number: '01', title: 'Flower to the People' },
  { id: 'movement', number: '02', title: 'Our Reasons to Believe' },
  { id: 'truth', number: '03', title: 'Our Brand Truth' },
  { id: 'code', number: '04', title: 'Codes of Lion Order' },
  { id: 'founder', number: '05', title: 'The Founder' },
  { id: 'empire', number: '06', title: 'The Empire' },
  { id: 'wisdom', number: '07', title: 'How We Heal' },
] as const;

type SectionId = (typeof sections)[number]['id'];

/* ── page ─────────────────────────────────────────────────────── */

export default function HomePage() {
  const [openSection, setOpenSection] = useState<SectionId | null>(null);
  const [expandedWisdom, setExpandedWisdom] = useState<string | null>(null);

  const handleBackToSplash = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('marley-threshold');
      window.location.reload();
    }
  };

  const toggle = (id: SectionId) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════════════════════════════════════════════════════════
          1. HERO — R-M Monogram + Taglines (above the fold)
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-black pt-16 pb-10">
        <div className="flex flex-col items-center justify-center px-8">
          <div className="relative w-[200px] h-[200px] mb-8">
            <Image
              src="/brand/rhr-monogram-transparent.png"
              alt="R-M Monogram"
              fill
              className="object-contain"
              priority
              sizes="200px"
            />
          </div>

          <h1 className="text-3xl font-semibold text-white tracking-wide text-center leading-[1.3] mb-4">
            Awaken the Lion<br />in Everyone
          </h1>

          <p className="text-[11px] tracking-[0.45em] uppercase text-[#E8C23A] font-medium mb-6">
            The Legacy of Rohan Marley
          </p>

          <div className="gold-rule w-full max-w-[200px]" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. DROPDOWN MENU SYSTEM — 7 sections, one open at a time
      ═══════════════════════════════════════════════════════════ */}
      <nav className="w-full">
        {sections.map((section) => {
          const isOpen = openSection === section.id;

          return (
            <div key={section.id}>
              {/* ── Dropdown bar ── */}
              <button
                onClick={() => toggle(section.id)}
                aria-expanded={isOpen}
                className="w-full border-b border-[var(--line)] px-6 py-5 flex items-center justify-between cursor-pointer transition-colors hover:bg-[var(--panel)]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#E8C23A] font-semibold text-[15px] tracking-wide font-body">
                    {section.number}
                  </span>
                  <span className="text-white font-semibold text-[16px] tracking-wide">
                    {section.title}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#E8C23A]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#E8C23A]" />
                )}
              </button>

              {/* ── Expanded panel ── */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen ? '5000px' : '0px',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="bg-[var(--panel)] px-6 py-8 border-b border-[var(--line)]">

                  {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      01 — FLOWER TO THE PEOPLE
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                  {section.id === 'daily-drop' && (
                    <div>
                      <div className="relative w-full aspect-[16/11] mb-8" style={{ width: '100%' }}>
                        <Image src="/brandbook/p02.jpg" alt="Flower to the People" fill className="object-cover object-center" sizes="100vw" />
                      </div>
                      <div className="border border-[var(--line)] bg-[var(--bg)] p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="font-display text-4xl text-[#E8C23A] leading-none tracking-tight font-semibold">
                            {String(drop.number).padStart(2, '0')}
                          </span>
                          <div className="flex gap-2">
                            {drop.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] tracking-[0.2em] uppercase text-[var(--dim)] border border-[var(--line)] px-2.5 py-1 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="font-body text-[15px] text-[var(--cream)] leading-[1.9] font-normal">
                          {drop.body}
                        </p>

                        <div className="gold-rule mt-8" />

                        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--dim)] mt-4 text-center font-medium">
                          From the House
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      02 — OUR REASONS TO BELIEVE
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                  {section.id === 'movement' && (
                    <div className="text-center">
                      <div className="relative w-full aspect-[16/11] mb-8" style={{ width: '100%' }}>
                        <Image src="/brandbook/p06.jpg" alt="Our Reasons to Believe" fill className="object-cover object-center" sizes="100vw" />
                      </div>
                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-5 font-medium">
                        Welcome to Lion Order
                      </p>

                      <h2 className="text-2xl text-white font-semibold leading-[1.35] mb-6 max-w-[360px] mx-auto">
                        A movement led by Rohan Marley
                      </h2>

                      <p className="font-body text-[15px] text-[var(--cream)] leading-[1.9] font-normal max-w-[400px] mx-auto mb-8">
                        A collection of professional athletes, activists and visionaries around the
                        world who seek everlasting change. A commitment to the elevation and
                        edification of consciousness via plant medicine.
                      </p>

                      <div className="gold-rule max-w-[120px] mx-auto mb-8" />

                      <p className="text-xl text-white font-semibold leading-[1.5] max-w-[300px] mx-auto">
                        This Is Our Life
                      </p>

                      <p className="font-body text-[14px] text-[var(--dim)] leading-[1.8] font-normal mt-3 max-w-[300px] mx-auto">
                        Tropical warmth. Ancient wisdom. Modern purpose.
                      </p>
                    </div>
                  )}

                  {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      03 — OUR BRAND TRUTH
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                  {section.id === 'truth' && (
                    <div>
                      <div className="relative w-full aspect-[16/11] mb-8" style={{ width: '100%' }}>
                        <Image src="/brandbook/p12.jpg" alt="Our Brand Truth" fill className="object-cover object-center" sizes="100vw" />
                      </div>
                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-3 text-center font-medium">
                        Brand Truths
                      </p>
                      <p className="text-lg text-white font-semibold leading-[1.5] text-center mb-8">
                        What we know to be true.
                      </p>

                      <div className="space-y-5 mb-10">
                        {brandTruths.map((truth, i) => (
                          <div key={truth.name} className="border-l-2 border-[#E8C23A] pl-5 py-1">
                            <p className="text-[11px] tracking-[0.3em] uppercase text-[#E8C23A] mb-2 font-medium">
                              {String(i + 1).padStart(2, '0')} &mdash; {truth.name}
                            </p>
                            <p className="font-display text-base text-white font-medium italic leading-[1.6]">
                              &ldquo;{truth.statement}&rdquo;
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="relative w-full aspect-[16/11] my-8 -mx-6" style={{ width: 'calc(100% + 48px)' }}>
                        <Image src="/brandbook/p09.jpg" alt="Cultural, Category & Medicinal Insight" fill className="object-cover object-center" sizes="100vw" />
                      </div>

                      <div className="gold-rule mb-8" />

                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-3 text-center font-medium">
                        Quality
                      </p>
                      <p className="text-lg text-white font-semibold leading-[1.5] text-center mb-6">
                        Five Quality Factors
                      </p>

                      <div className="flex flex-wrap justify-center gap-3">
                        {qualityFactors.map((factor) => (
                          <span
                            key={factor}
                            className="border border-[#E8C23A] text-[#E8C23A] text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 font-medium"
                          >
                            {factor}
                          </span>
                        ))}
                      </div>

                      <p className="font-body text-[14px] text-[var(--dim)] leading-[1.8] font-normal text-center mt-6 max-w-[360px] mx-auto">
                        Every product, every experience, every moment is measured against these five pillars.
                        Nothing leaves the house without passing through all five.
                      </p>
                    </div>
                  )}

                  {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      04 — CODES OF LION ORDER
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                  {section.id === 'code' && (
                    <div>
                      <div className="relative w-full aspect-[16/11] mb-8" style={{ width: '100%' }}>
                        <Image src="/brandbook/p22.jpg" alt="The Lion Within" fill className="object-cover object-center" sizes="100vw" />
                      </div>
                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-3 text-center font-medium">
                        Our Codes
                      </p>
                      <p className="text-xl text-white font-semibold leading-[1.35] text-center mb-8">
                        Codes of Lion Order
                      </p>

                      <div className="space-y-4">
                        {codesOfLionOrder.map((code, i) => (
                          <div key={code.name} className="border border-[var(--line)] bg-[var(--bg)] p-5">
                            <div className="flex items-start gap-4">
                              <span className="text-[#E8C23A] font-semibold text-[14px] tracking-wide font-body mt-0.5 shrink-0">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <div>
                                <p className="text-base text-white font-semibold leading-tight mb-2">
                                  {code.name}
                                </p>
                                <p className="font-body text-[14px] text-[var(--dim)] leading-[1.8] font-normal">
                                  {code.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      05 — THE FOUNDER
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                  {section.id === 'founder' && (
                    <div>
                      <div className="relative w-full aspect-[16/11] mb-8" style={{ width: '100%' }}>
                        <Image src="/brandbook/p04.jpg" alt="We've Been Around A Long Time" fill className="object-cover object-center" sizes="100vw" />
                      </div>

                      <div className="relative w-full aspect-video overflow-hidden mb-8">
                        <Image
                          src="/lion-order/rohan-portrait.jpg"
                          alt="Rohan Marley"
                          fill
                          className="object-cover object-top"
                          sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-transparent to-transparent" />
                      </div>

                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-3 font-medium">
                        The Founder
                      </p>
                      <h2 className="text-2xl text-white font-semibold leading-tight mb-5">
                        Rohan Marley
                      </h2>
                      <p className="font-body text-[15px] text-[var(--cream)] leading-[1.9] font-normal mb-6">
                        Son of Bob. Father of legacy. From the gridiron to the coffee fields of Jamaica, Rohan
                        carries the frequency forward — building a house where culture, craft, and consciousness
                        meet under one roof.
                      </p>
                      <p className="font-body text-[14px] text-[var(--dim)] leading-[1.8] font-normal mb-8 italic">
                        A life lived not for the spotlight, but for the soil. For the seed that becomes the tree
                        that shelters the next generation.
                      </p>

                      <Image
                        src="/brand/rohan-signature.png"
                        alt="Rohan Marley signature"
                        width={160}
                        height={54}
                        className="opacity-70"
                      />
                    </div>
                  )}

                  {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      06 — THE EMPIRE
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                  {section.id === 'empire' && (
                    <div>
                      <div className="relative w-full aspect-[16/11] mb-8" style={{ width: '100%' }}>
                        <Image src="/brandbook/p42.jpg" alt="Lion Order Smoking Lounge & Cafes" fill className="object-cover object-center" sizes="100vw" />
                      </div>

                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-3 text-center font-medium">
                        The Portfolio
                      </p>
                      <p className="text-xl text-white font-semibold leading-[1.35] text-center mb-8">
                        The Maison
                      </p>

                      <div className="space-y-4 mb-10">
                        {maison.map((brand) => (
                          <div
                            key={brand.name}
                            className="border border-[var(--line)] bg-[var(--bg)] p-6 flex items-start gap-5"
                          >
                            <Image
                              src={brand.crest}
                              alt={brand.name}
                              width={40}
                              height={40}
                              className="opacity-80 mt-0.5 shrink-0"
                            />
                            <div>
                              <p className="text-base text-white font-semibold leading-snug mb-2">
                                {brand.name}
                              </p>
                              <p className="font-body text-[14px] text-[var(--dim)] leading-[1.8] font-normal">
                                {brand.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="relative w-full aspect-[16/11] my-8 -mx-6" style={{ width: 'calc(100% + 48px)' }}>
                        <Image src="/brandbook/p40.jpg" alt="Lion Order Community" fill className="object-cover object-center" sizes="100vw" />
                      </div>

                      <div className="gold-rule mb-8" />

                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-3 text-center font-medium">
                        Our People
                      </p>
                      <p className="text-lg text-white font-semibold leading-[1.5] text-center mb-6">
                        The Community
                      </p>

                      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                        {communityPages.map((src, i) => (
                          <div
                            key={src}
                            className="relative w-56 aspect-[4/3] shrink-0 overflow-hidden"
                          >
                            <Image
                              src={src}
                              alt={`Community ${i + 1}`}
                              fill
                              className="object-cover object-center"
                              sizes="224px"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="relative w-full aspect-[16/9] mt-6 overflow-hidden">
                        <Image
                          src="/brandbook/p40.jpg"
                          alt="Lion Order Community"
                          fill
                          className="object-cover object-center"
                          sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-0 right-0 text-center">
                          <p className="text-[11px] tracking-[0.4em] uppercase text-white font-medium">
                            The Movement Is the People
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      07 — HOW WE HEAL
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                  {section.id === 'wisdom' && (
                    <div>
                      <div className="relative w-full aspect-[16/11] mb-8" style={{ width: '100%' }}>
                        <Image src="/brandbook/p16.jpg" alt="How We Heal" fill className="object-cover object-center" sizes="100vw" />
                      </div>
                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-6 text-center font-medium">
                        Wisdom
                      </p>

                      <div className="space-y-4 mb-10">
                        {wisdomCards.slice(0, 3).map((card) => {
                          const isWisdomOpen = expandedWisdom === card.id;
                          return (
                            <button
                              key={card.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedWisdom(isWisdomOpen ? null : card.id);
                              }}
                              className="w-full text-left border border-[var(--line)] bg-[var(--bg)] p-5 cursor-pointer transition-colors hover:border-[#E8C23A]/30"
                            >
                              <span className="font-display text-3xl text-[#E8C23A] leading-none block mb-3">
                                &ldquo;
                              </span>

                              <p className="font-display text-base text-white font-medium italic leading-[1.6]">
                                {card.lesson}
                              </p>

                              <div
                                className="overflow-hidden transition-all duration-400 ease-in-out"
                                style={{
                                  maxHeight: isWisdomOpen ? '500px' : '0px',
                                  opacity: isWisdomOpen ? 1 : 0,
                                }}
                              >
                                <p className="font-body text-[14px] text-[var(--dim)] leading-[1.8] mt-4 font-normal">
                                  {card.expanded}
                                </p>
                              </div>

                              <div className="flex items-center justify-between mt-4">
                                <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--dim)] font-medium">
                                  Room: {card.room}
                                </p>
                                {isWisdomOpen ? (
                                  <ChevronUp className="w-4 h-4 text-[#E8C23A]" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-[#E8C23A]" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="gold-rule mb-10" />

                      {/* Mission */}
                      <div className="text-center mb-12">
                        <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-5 font-medium">
                          Our Mission
                        </p>
                        <p className="text-xl text-white font-semibold leading-[1.5] max-w-[360px] mx-auto mb-5">
                          Create the highest quality goods that elevate consciousness and culture.
                        </p>
                        <p className="font-body text-[14px] text-[var(--dim)] leading-[1.8] font-normal max-w-[360px] mx-auto">
                          From the soil to the soul. Everything we touch carries intention, heritage, and the
                          unwavering belief that quality is a form of respect.
                        </p>
                      </div>

                      <div className="gold-rule max-w-[80px] mx-auto mb-12" />

                      {/* Vision */}
                      <div className="text-center">
                        <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-5 font-medium">
                          Our Vision
                        </p>
                        <p className="text-xl text-white font-semibold leading-[1.5] max-w-[360px] mx-auto mb-5">
                          To awaken the lion in everyone.
                        </p>
                        <p className="font-body text-[14px] text-[var(--dim)] leading-[1.8] font-normal max-w-[360px] mx-auto">
                          The lion is not an animal. It is a frequency. A way of standing in the world — with
                          dignity, with purpose, with the courage to build something that outlasts you.
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* ═══════════════════════════════════════════════════════════
          3. FOOTER — Lion Order crest, proud and centered
      ═══════════════════════════════════════════════════════════ */}
      <div className="gold-rule mx-8 mt-2" />

      <footer className="px-4 py-16 text-center bg-black">
        {/* Three logos side by side — fitted to screen */}
        <div className="flex items-center justify-center gap-4 mb-10 px-2">
          <Image
            src="/brand/marley-enterprise.png"
            alt="Marley Enterprise"
            width={110}
            height={110}
            className="brightness-125 flex-shrink-0"
          />
          <Image
            src="/brand/lion-order-crest.png"
            alt="Lion Order"
            width={130}
            height={130}
            className="brightness-110 flex-shrink-0"
          />
          <Image
            src="/brand/lion-crest-clean.png"
            alt="Lion Order Crest"
            width={110}
            height={110}
            className="brightness-125 flex-shrink-0"
          />
        </div>
        <p className="text-[var(--cream)] text-[10px] tracking-[0.4em] uppercase mb-3 font-medium">
          Lion Order &middot; Est. 2022
        </p>
        <p className="text-[var(--dim)] text-[9px] tracking-[0.25em] uppercase font-medium">
          One Love. One House. One Order.
        </p>
      </footer>
    </div>
  );
}
