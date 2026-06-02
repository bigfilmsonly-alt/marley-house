'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AppLink } from '@/components/InAppBrowser';

const values = [
  { name: 'Exploration', text: 'Seeking truth through the natural world.' },
  { name: 'Excellence', text: 'The highest quality in everything we touch.' },
  { name: 'Legacy', text: 'Building what outlives us.' },
  { name: 'Healing', text: 'Reconnecting mind, body, and spirit.' },
  { name: 'Beauty', text: 'Finding the sacred in the everyday.' },
];

const codes = [
  'Strength of Spirit',
  'Fight for Justice',
  'Rastafari Virtues',
  'Provoke Consciousness',
  'Respect Your Nature',
  'High Quality',
];

const healing = [
  { name: 'Physical', text: 'Medicinal applications for the body.' },
  { name: 'Mental', text: 'Easement of turmoil and anxiety.' },
  { name: 'Nurture', text: 'Reconnecting with the natural world.' },
  { name: 'Expression', text: 'A conduit to explore and see things in new ways.' },
  { name: 'Improvement', text: 'A method for self-reflection and growth.' },
];

const standards = ['Aroma', 'Flavor', 'Efficacy', 'Resin-Release', 'Aesthetic'];

export default function HomePage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════ 1. HERO ═══════ */}
      <section className="relative px-8 pt-16 pb-20 text-center">
        {/* Lion Crest */}
        <Image
          src="/brand/lion-order-crest.png"
          alt="Lion Order"
          width={120}
          height={120}
          className="mx-auto mb-10 opacity-80"
          priority
        />

        <h1 className="font-display text-[clamp(2rem,8vw,3.5rem)] leading-[1.05] tracking-[0.04em] uppercase text-[var(--cream)] mb-6">
          Flower<br />to the People
        </h1>

        <div className="gold-rule w-12 mx-auto mb-6" />

        <p className="text-[var(--dim)] text-[15px] font-light leading-[1.8] max-w-[300px] mx-auto mb-10">
          Luxury flower rooted in heritage, healing, and consciousness.
        </p>

        <div className="flex flex-col items-center gap-3">
          <Link
            href="/lion-order"
            className="text-[11px] tracking-[0.25em] uppercase text-[var(--cream)] border border-[var(--cream)]/20 px-8 py-3 hover:bg-[var(--cream)]/5 transition-colors"
          >
            Explore the Movement
          </Link>
          <Link
            href="/watch"
            className="text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] hover:text-[var(--cream)] transition-colors"
          >
            Our Story
          </Link>
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ 2. BRAND TRUTH ═══════ */}
      <section className="px-8 py-16 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8">Our Brand Truth</p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="font-display text-lg text-[var(--cream)] italic">High Craft</span>
          <span className="text-[var(--gold)] text-xl">+</span>
          <span className="font-display text-lg text-[var(--cream)] italic">Cultural Connectivity</span>
        </div>

        <div className="gold-rule w-8 mx-auto mb-8" />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {['Integrity', 'Valor', 'Self-Reflection', 'Self-Empowerment', 'Self-Love'].map((v) => (
            <span key={v} className="text-[var(--dim)] text-xs tracking-[0.1em]">{v}</span>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ 3. OUR STORY ═══════ */}
      <section className="px-8 py-16">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4 text-center">Our Story</p>
        <h2 className="font-display text-2xl text-[var(--cream)] text-center leading-[1.3] mb-8">
          We&apos;ve Been Around<br /><span className="italic">A Long Time</span>
        </h2>
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[320px] mx-auto text-center mb-8">
          Rastafari is a way of life, a mindset. Lion Order will forever be associated with Rastafari virtues. We seek the best genetics, the finest flower, and hold ourselves to the highest standard — because the culture demands it.
        </p>
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[320px] mx-auto text-center">
          A movement led by Rohan Marley and a collection of professional athletes, activists, and visionaries around the world who seek everlasting change.
        </p>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ 4. OUR VALUES ═══════ */}
      <section className="px-8 py-16">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Our Values</p>
        <div className="space-y-6">
          {values.map((v, i) => (
            <div key={v.name} className="text-center">
              <p className="font-display text-xl text-[var(--cream)] mb-1">{v.name}</p>
              <p className="text-[var(--dim)] text-xs font-light tracking-wide">{v.text}</p>
              {i < values.length - 1 && <div className="w-6 h-px bg-[var(--gold)]/20 mx-auto mt-6" />}
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ 5. HOW WE HEAL ═══════ */}
      <section className="px-8 py-16">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4 text-center">How We Heal</p>
        <p className="text-[var(--dim)] text-sm font-light text-center mb-10 max-w-[280px] mx-auto leading-[1.8]">
          We are creating a luxe lifestyle that prioritizes healing and self-awareness.
        </p>
        <div className="space-y-5">
          {healing.map((h) => (
            <div key={h.name} className="border border-[var(--line)] p-5">
              <p className="font-display text-base text-[var(--cream)] mb-1">{h.name}</p>
              <p className="text-[var(--dim)] text-xs font-light leading-[1.7]">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ 6. HIGH STANDARDS ═══════ */}
      <section className="px-8 py-16 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">High Standards</p>
        <p className="text-[var(--dim)] text-xs font-light mb-10 max-w-[280px] mx-auto leading-[1.8]">
          Our herb is tested to the highest standards. We use a proprietary five-factor system. Quality is in Order.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {standards.map((s) => (
            <span key={s} className="border border-[var(--line)] px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase text-[var(--cream)]">
              {s}
            </span>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ 7. THE MOVEMENT ═══════ */}
      <section className="px-8 py-16">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4 text-center">The Movement</p>
        <h2 className="font-display text-2xl text-[var(--cream)] text-center leading-[1.3] mb-10 italic">
          Find the Lion Within
        </h2>
        <div className="space-y-4">
          {codes.map((c) => (
            <div key={c} className="flex items-center gap-4 py-3 border-b border-[var(--line)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <p className="font-display text-base text-[var(--cream)]">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ 8. ROHAN MARLEY ═══════ */}
      <section className="px-8 py-16 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">The Founder</p>
        <h2 className="font-display text-3xl text-[var(--cream)] leading-[1.1] mb-6 tracking-[0.04em] uppercase">
          Rohan<br />Marley
        </h2>
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[300px] mx-auto mb-8">
          Rohan&apos;s taste acts like a stamp of approval. His association with the brand signals both authenticity and quality. A symbol of heritage, purpose, and uncompromising craft.
        </p>
        <AppLink
          href="https://www.instagram.com/romarley/"
          title="Rohan Marley"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] hover:text-[var(--cream)] transition-colors"
        >
          @romarley <ArrowUpRight size={12} />
        </AppLink>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ MISSION / VISION ═══════ */}
      <section className="px-8 py-16 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">Our Mission</p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] max-w-[300px] mx-auto mb-12">
          Create the highest quality goods that elevate consciousness and culture.
        </p>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">Our Vision</p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] max-w-[300px] mx-auto">
          To awaken the lion in everyone.
        </p>
      </section>

      {/* ═══════ 9. FOOTER ═══════ */}
      <footer className="bg-[#0A0A0A] px-8 py-12 text-center">
        <Image
          src="/brand/lion-order-crest.png"
          alt="Lion Order"
          width={48}
          height={48}
          className="mx-auto mb-4 opacity-60"
        />
        <p className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase mb-6">Lion Order</p>

        <div className="flex justify-center gap-6 mb-8">
          <Link href="/watch" className="text-[#8A8A8A] text-[10px] tracking-[0.15em] uppercase hover:text-[#D4AF37] transition-colors">Watch</Link>
          <Link href="/coffee" className="text-[#8A8A8A] text-[10px] tracking-[0.15em] uppercase hover:text-[#D4AF37] transition-colors">Coffee</Link>
          <Link href="/lion-order" className="text-[#8A8A8A] text-[10px] tracking-[0.15em] uppercase hover:text-[#D4AF37] transition-colors">Movement</Link>
          <Link href="/ask" className="text-[#8A8A8A] text-[10px] tracking-[0.15em] uppercase hover:text-[#D4AF37] transition-colors">Ask</Link>
        </div>

        <div className="w-8 h-px bg-[#D4AF37]/20 mx-auto mb-6" />

        <p className="text-[#5C5549] text-[8px] tracking-[0.2em] uppercase">
          Est. 2022 &middot; Flower to the People
        </p>
      </footer>
    </div>
  );
}
