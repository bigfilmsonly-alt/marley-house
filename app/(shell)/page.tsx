'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { wisdomCards } from '@/content/wisdom';
import { ArrowUpRight } from 'lucide-react';
import { useInAppBrowser } from '@/components/InAppBrowser';
import SplashReturn from '@/components/SplashReturn';
import { joinHouse } from '@/lib/tracking';

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
  { id: 'daily-drop', title: 'Flower to the People' },
  { id: 'movement', title: 'Our Reasons to Believe' },
  { id: 'truth', title: 'Our Brand Truth' },
  { id: 'code', title: 'Codes of Lion Order' },
  { id: 'founder', title: 'The Founder' },
  { id: 'empire', title: 'The Empire' },
  { id: 'wisdom', title: 'How We Heal' },
  { id: 'links', title: 'Connect' },
] as const;

type SectionId = (typeof sections)[number]['id'];

/* ── page ─────────────────────────────────────────────────────── */

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<SectionId | null>(null);
  const [expandedWisdom, setExpandedWisdom] = useState<string | null>(null);
  const { openLink } = useInAppBrowser();
  const [submitted, setSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setFormLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name') || '',
          email: form.get('email'),
          phone: form.get('phone') || '',
          social: form.get('social') || '',
          source: 'inner-circle',
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        joinHouse('inner-circle');
      }
    } finally {
      setFormLoading(false);
    }
  }

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
    <div className="relative min-h-full bg-[var(--bg)] flex flex-col">

      <SplashReturn />

      {/* ═══════════════════════════════════════════════════════════
          1. HERO — R-M Monogram + Taglines — fits one screen
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-black pt-8 pb-4 flex-shrink-0">
        <div className="flex flex-col items-center justify-center px-8">
          <div className="relative w-[260px] h-[260px] mb-4">
            <Image
              src="/brand/rhr-monogram-transparent.png"
              alt="R-M Monogram"
              fill
              className="object-contain"
              priority
              sizes="260px"
            />
          </div>

          <h1 className="text-2xl font-semibold text-white tracking-wide text-center leading-[1.3] mb-2">
            Awaken the Lion<br />in Everyone
          </h1>

          <p className="text-[10px] tracking-[0.45em] uppercase text-[#E8C23A] font-medium">
            The Legacy of Rohan Marley
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. DROPDOWN MENU SYSTEM — 7 sections, one open at a time
      ═══════════════════════════════════════════════════════════ */}
      <nav className="w-full">
        {/* ── Main "Explore the Maison" dropdown bar ── */}
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (menuOpen) setOpenSection(null);
          }}
          aria-expanded={menuOpen}
          className="w-full border-b border-[var(--line)] px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-[var(--panel)] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E8C23A] rotate-45 shrink-0" />
            <span className="text-white font-semibold text-[16px]">
              Join the Inner Circle
            </span>
          </div>
          {menuOpen ? (
            <ChevronUp className="w-5 h-5 text-[#E8C23A]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#E8C23A]" />
          )}
        </button>

        {/* ── Sections list (visible when menu is open) ── */}
        {menuOpen && (
          <div className="bg-[var(--panel)] border-b border-[var(--line)]">
            {/* ── Lead capture form ── */}
            <div className="px-6 py-8 border-b border-[var(--line)]">
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-3 text-center font-medium">
                Enter the House
              </p>
              <p className="text-white text-[18px] font-semibold text-center mb-2">
                Join the Inner Circle
              </p>
              <p className="text-[var(--dim)] text-[13px] text-center mb-6 font-normal">
                Be the first to know. No noise. Just the movement.
              </p>

              {submitted ? (
                <div className="text-center py-4">
                  <p className="text-[#E8C23A] text-lg font-semibold mb-2">Welcome to the House.</p>
                  <p className="text-[var(--dim)] text-[13px]">Check your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] font-normal placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[#E8C23A]/50 transition-colors"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] font-normal placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[#E8C23A]/50 transition-colors"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] font-normal placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[#E8C23A]/50 transition-colors"
                  />
                  <input
                    name="social"
                    placeholder="Instagram @handle"
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] font-normal placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[#E8C23A]/50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-[#E8C23A] text-[var(--bg)] text-[13px] tracking-[0.2em] uppercase font-semibold py-3.5 hover:bg-[#E8C23A]/90 transition-colors disabled:opacity-50"
                  >
                    {formLoading ? '...' : 'Enter'}
                  </button>
                  <p className="text-[var(--dim)] text-[9px] text-center mt-3 opacity-50">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              )}

              <div className="gold-rule mt-6" />
            </div>

            {sections.map((section) => {
              const isOpen = openSection === section.id;

              return (
                <div key={section.id}>
                  {/* ── Section title row ── */}
                  <button
                    onClick={() => toggle(section.id)}
                    aria-expanded={isOpen}
                    className="w-full px-8 py-4 flex items-center justify-between border-b border-[var(--line)]/50 hover:bg-[var(--bg)] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8C23A] shrink-0" />
                      <span className="text-[var(--cream)] text-[14px] font-medium">
                        {section.title}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#E8C23A]/70" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[var(--dim)]" />
                    )}
                  </button>

                  {/* ── Expanded content panel ── */}
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
                  {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      08 — CONNECT — Social & Links
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                  {section.id === 'links' && (
                    <div>
                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-6 text-center font-medium">
                        Social Media & Links
                      </p>

                      {/* Featured press — opens in-app */}
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8C23A] mb-4 font-medium">Press</p>
                      <button
                        onClick={() => openLink('https://people.com/rohan-marley-reveals-smoked-herb-white-house-lawn-exclusive-8364789', 'People Magazine')}
                        className="w-full flex items-center justify-between py-3 border-b border-[var(--line)] group mb-8 text-left"
                      >
                        <div>
                          <span className="text-white text-[14px] font-medium group-hover:text-[#E8C23A] transition-colors">People Magazine</span>
                          <span className="text-[var(--dim)] text-[12px] block mt-0.5">Rohan Marley Reveals He Smoked Herb on the White House Lawn</span>
                        </div>
                        <ArrowUpRight size={14} className="text-[var(--dim)] shrink-0 group-hover:text-[#E8C23A] transition-colors ml-3" />
                      </button>

                      {/* Rohan Marley */}
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8C23A] mb-4 font-medium">Rohan Marley</p>
                      <div className="space-y-0 mb-8">
                        {[
                          { name: 'Instagram', handle: '@romarley', url: 'https://www.instagram.com/romarley/', metric: '663K followers' },
                          { name: 'YouTube', handle: '@MrRohanmarley', url: 'https://www.youtube.com/@MrRohanmarley' },
                          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rohanmarley' },
                          { name: 'Website', url: 'https://rohananthonymarley.com/' },
                        ].map((link) => (
                          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 border-b border-[var(--line)] group">
                            <div>
                              <span className="text-white text-[14px] font-medium group-hover:text-[#E8C23A] transition-colors">{link.name}</span>
                              {link.handle && <span className="text-[var(--dim)] text-[12px] ml-2">{link.handle}</span>}
                            </div>
                            <div className="flex items-center gap-2">
                              {link.metric && <span className="text-[var(--dim)] text-[10px]">{link.metric}</span>}
                              <ArrowUpRight size={14} className="text-[var(--dim)] group-hover:text-[#E8C23A] transition-colors" />
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Lion Order */}
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8C23A] mb-4 font-medium">Lion Order</p>
                      <div className="space-y-0 mb-8">
                        {[
                          { name: 'Website', url: 'https://lionorder.com/' },
                          { name: 'Instagram', handle: '@lionorder', url: 'https://www.instagram.com/lionorder/' },
                          { name: 'X (Twitter)', handle: '@LionOrder__', url: 'https://x.com/LionOrder__' },
                        ].map((link) => (
                          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 border-b border-[var(--line)] group">
                            <div>
                              <span className="text-white text-[14px] font-medium group-hover:text-[#E8C23A] transition-colors">{link.name}</span>
                              {link.handle && <span className="text-[var(--dim)] text-[12px] ml-2">{link.handle}</span>}
                            </div>
                            <ArrowUpRight size={14} className="text-[var(--dim)] group-hover:text-[#E8C23A] transition-colors" />
                          </a>
                        ))}
                      </div>

                      {/* Marley Coffee */}
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8C23A] mb-4 font-medium">Marley Coffee</p>
                      <div className="space-y-0 mb-8">
                        {[
                          { name: 'Website', url: 'https://marleycoffee.com/' },
                          { name: 'Instagram', handle: '@marleycoffee', url: 'https://www.instagram.com/marleycoffee/' },
                          { name: 'Facebook', url: 'https://www.facebook.com/MarleyCoffee/' },
                          { name: 'YouTube', url: 'https://www.youtube.com/@MarleyCoffeeLatam' },
                          { name: 'Instagram Chile', handle: '@marleycoffee.chile', url: 'https://www.instagram.com/marleycoffee.chile/', metric: '412K' },
                        ].map((link) => (
                          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 border-b border-[var(--line)] group">
                            <div>
                              <span className="text-white text-[14px] font-medium group-hover:text-[#E8C23A] transition-colors">{link.name}</span>
                              {link.handle && <span className="text-[var(--dim)] text-[12px] ml-2">{link.handle}</span>}
                            </div>
                            <div className="flex items-center gap-2">
                              {link.metric && <span className="text-[var(--dim)] text-[10px]">{link.metric}</span>}
                              <ArrowUpRight size={14} className="text-[var(--dim)] group-hover:text-[#E8C23A] transition-colors" />
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Ventures & Lifestyle */}
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8C23A] mb-4 font-medium">Ventures & Lifestyle</p>
                      <div className="space-y-0 mb-8">
                        {[
                          { name: 'RoMarley Beach House', url: 'https://www.romarleybeachhouse.com/' },
                          { name: 'RoMarley Beach House IG', handle: '@romarleybeachhouse', url: 'https://www.instagram.com/romarleybeachhouse/' },
                          { name: 'House of Marley', url: 'https://thehouseofmarley.com/' },
                          { name: 'House of Marley IG', handle: '@houseofmarley', url: 'https://www.instagram.com/houseofmarley/' },
                          { name: 'House of Marley TikTok', handle: '@thehouseofmarley', url: 'https://www.tiktok.com/@thehouseofmarley' },
                          { name: 'House of Marley Facebook', url: 'https://www.facebook.com/HouseofMarley/' },
                          { name: 'House of Marley YouTube', url: 'https://www.youtube.com/user/TheHouseofMarley' },
                        ].map((link) => (
                          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 border-b border-[var(--line)] group">
                            <div>
                              <span className="text-white text-[14px] font-medium group-hover:text-[#E8C23A] transition-colors">{link.name}</span>
                              {link.handle && <span className="text-[var(--dim)] text-[12px] ml-2">{link.handle}</span>}
                            </div>
                            <ArrowUpRight size={14} className="text-[var(--dim)] group-hover:text-[#E8C23A] transition-colors" />
                          </a>
                        ))}
                      </div>

                      {/* Music & Heritage */}
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8C23A] mb-4 font-medium">Music & Heritage</p>
                      <div className="space-y-0">
                        {[
                          { name: 'YG Marley IG', handle: '@ygmarley', url: 'https://www.instagram.com/ygmarley/', metric: '753K' },
                          { name: 'YG Marley Official', url: 'https://www.ygmarley.com/' },
                          { name: 'Bob Marley Official', url: 'https://www.bobmarley.com/' },
                          { name: 'Tuff Gong', url: 'https://www.tuffgong.com/' },
                          { name: 'Tuff Gong Television', url: 'https://www.youtube.com/user/TuffGongTelevision' },
                          { name: 'Tuff Gong Radio IG', handle: '@tuffgongradio', url: 'https://www.instagram.com/tuffgongradio/' },
                        ].map((link) => (
                          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 border-b border-[var(--line)] group">
                            <div>
                              <span className="text-white text-[14px] font-medium group-hover:text-[#E8C23A] transition-colors">{link.name}</span>
                              {link.handle && <span className="text-[var(--dim)] text-[12px] ml-2">{link.handle}</span>}
                            </div>
                            <div className="flex items-center gap-2">
                              {link.metric && <span className="text-[var(--dim)] text-[10px]">{link.metric}</span>}
                              <ArrowUpRight size={14} className="text-[var(--dim)] group-hover:text-[#E8C23A] transition-colors" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

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
          </div>
        )}
      </nav>

    </div>
  );
}
