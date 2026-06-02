'use client';

import Image from 'next/image';
import { Flame, Crown, Heart, Star, Compass, Sparkles, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { AppLink } from '@/components/InAppBrowser';

const values = [
  { icon: Heart, label: 'Healing', description: 'Restoring body, mind, and spirit through the flower.' },
  { icon: Star, label: 'Excellence', description: 'Nothing leaves the house unless it is the best.' },
  { icon: Flame, label: 'Legacy', description: 'Built on roots. Extended by the next generation.' },
  { icon: Compass, label: 'Exploration', description: 'Strain hunters. Seekers. Always searching.' },
  { icon: Sparkles, label: 'Beauty', description: 'The aesthetic is the message.' },
];

const codes = [
  'Strength of Spirit',
  'Fight for Justice',
  'Rastafari Virtues',
  'Provoke Consciousness',
  'Respect Your Nature',
  'High Quality',
];

const qualityFactors = [
  { name: 'Strain Hunting', accent: '#d8b15a' },
  { name: 'Aroma', accent: '#7ba36e' },
  { name: 'Aesthetic', accent: '#e2622f' },
  { name: 'Flavor', accent: '#86b4cc' },
  { name: 'Resin-Release', accent: '#c98a3c' },
  { name: 'Efficacy', accent: '#a9812f' },
];

const characters = [
  { name: 'King Clem', role: 'The warrior. Strength and justice.', image: '/lion-order/king-clem.jpg' },
];

const personality = ['Regal', 'Passionate', 'Wise', 'Aspirational', 'Courageous', 'Nurturing'];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5 },
};

export default function LionOrderPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#d8b15a] blur-[120px] opacity-[0.06] pointer-events-none" />

      {/* Hero */}
      <div className="relative px-6 pt-14 pb-8 text-center">
        <motion.div {...fadeUp}>
          <Image
            src="/lion-order/crest-gold.jpg"
            alt="Lion Order Crest"
            width={120}
            height={120}
            className="mx-auto mb-5 drop-shadow-2xl"
          />
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#d8b15a] font-medium mb-2">
            The Movement
          </p>
          <h1 className="font-display text-3xl text-[var(--cream)] font-light leading-tight">
            Lion Order
          </h1>
          <p className="text-[var(--dim)] text-sm font-light mt-3 leading-relaxed max-w-[280px] mx-auto">
            Roots luxury. Cannabis. Manga. Cultural connectivity. Founded by Rohan Marley.
          </p>
        </motion.div>
      </div>

      {/* Vision & Mission */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <div className="rounded-2xl border border-[#d8b15a]/20 bg-[#d8b15a]/[0.04] p-5">
          <div className="text-center mb-4">
            <Crown size={20} className="text-[#d8b15a] mx-auto mb-2" />
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium">Our Vision</p>
          </div>
          <p className="font-display text-xl text-[var(--cream)] font-light text-center italic leading-relaxed">
            &ldquo;To awaken the lion in everyone.&rdquo;
          </p>
          <div className="h-px bg-[#d8b15a]/15 my-4" />
          <div className="text-center">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a]/70 font-medium mb-1">Our Mission</p>
            <p className="text-[var(--dim)] text-sm font-light leading-relaxed">
              Create the highest quality goods that elevate consciousness and culture.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Heritage photo */}
      <motion.div {...fadeUp} className="px-4 pb-8">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/lion-order/heritage.jpg"
            alt="Lion Order Heritage — Jamaican roots, music, culture"
            width={380}
            height={260}
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-center text-[var(--dim)] text-[10px] font-light mt-2">
          Heritage + Roots &mdash; the landscape, the culture, the values
        </p>
      </motion.div>

      {/* Rohan */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-3">
          The Founder
        </p>
        <h2 className="font-display text-xl text-[var(--cream)] font-light mb-2">
          Rohan Marley
        </h2>
        <p className="text-[var(--dim)] text-sm font-light leading-relaxed">
          More than a brand. Rohan&apos;s taste acts like a stamp of approval. His association signals both authenticity and quality. The story is the order.
        </p>
      </motion.div>

      {/* Values */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-4">
          Our Values
        </p>
        <div className="space-y-3">
          {values.map((v) => (
            <div key={v.label} className="flex items-start gap-3 rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3">
              <div className="w-9 h-9 rounded-lg bg-[#d8b15a]/10 flex items-center justify-center shrink-0">
                <v.icon size={16} className="text-[#d8b15a]" />
              </div>
              <div>
                <p className="text-sm text-[var(--cream)] font-medium">{v.label}</p>
                <p className="text-[var(--dim)] text-[11px] font-light mt-0.5">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Codes */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-3">
          Codes of Lion Order
        </p>
        <div className="flex flex-wrap gap-2">
          {codes.map((code) => (
            <span
              key={code}
              className="text-[11px] text-[#d8b15a] bg-[#d8b15a]/[0.08] border border-[#d8b15a]/15 px-3 py-1.5 rounded-full font-medium"
            >
              {code}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Roots Luxury */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <div className="rounded-2xl overflow-hidden relative">
          <Image
            src="/lion-order/culture.jpg"
            alt="Rastafari culture"
            width={380}
            height={240}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-1">
              Our Perspective
            </p>
            <h3 className="font-display text-2xl text-[var(--cream)] font-light">
              &ldquo;Roots Luxury&rdquo;
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Five Quality Factors */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-3">
          Five Quality Factors
        </p>
        <div className="grid grid-cols-2 gap-2">
          {qualityFactors.map((f) => (
            <div
              key={f.name}
              className="rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3 text-center"
            >
              <div
                className="w-2 h-2 rounded-full mx-auto mb-2"
                style={{ background: f.accent }}
              />
              <p className="text-xs text-[var(--cream)] font-medium">{f.name}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* How We Heal */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-3">
          How We Heal
        </p>
        <div className="grid grid-cols-3 gap-2">
          {['Physical', 'Mental', 'Nurture', 'Expression', 'Improvement', 'Education'].map((h) => (
            <div key={h} className="rounded-lg bg-[#d8b15a]/[0.05] border border-[#d8b15a]/10 py-2.5 px-2 text-center">
              <p className="text-[11px] text-[var(--cream)] font-light">{h}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Rainforest / Landscape */}
      <motion.div {...fadeUp} className="px-4 pb-8">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/lion-order/rainforest.jpg"
            alt="The landscape — roots, nature, origin"
            width={380}
            height={220}
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-center text-[var(--dim)] text-[10px] font-light mt-2">
          The landscape &mdash; where the story begins
        </p>
      </motion.div>

      {/* Personality */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-3">
          Our Personality
        </p>
        <div className="flex flex-wrap gap-2">
          {personality.map((p) => (
            <span
              key={p}
              className="text-xs text-[var(--cream)] bg-[var(--bg2)] border border-[var(--line)] px-3 py-1.5 rounded-full"
            >
              {p}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Characters */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-3">
          Our Characters
        </p>
        <p className="text-[var(--dim)] text-sm font-light mb-4 leading-relaxed">
          The animated world of Lion Order &mdash; manga storytelling meets Rastafari culture.
        </p>

        {characters.map((c) => (
          <div key={c.name} className="rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)]">
            <Image
              src={c.image}
              alt={c.name}
              width={380}
              height={380}
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <p className="font-display text-lg text-[var(--cream)]">{c.name}</p>
              <p className="text-[var(--dim)] text-xs font-light mt-0.5">{c.role}</p>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-4 text-center">
            <p className="font-display text-sm text-[var(--cream)]">Kai Suna</p>
            <p className="text-[var(--dim)] text-[10px] font-light mt-0.5">The seeker</p>
          </div>
          <div className="rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-4 text-center">
            <p className="font-display text-sm text-[var(--cream)]">Runna Gyal</p>
            <p className="text-[var(--dim)] text-[10px] font-light mt-0.5">The spirit</p>
          </div>
        </div>
      </motion.div>

      {/* Selassie / Heritage */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <div className="rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)]">
          <Image
            src="/lion-order/selassie.jpg"
            alt="Rastafari heritage"
            width={380}
            height={500}
            className="w-full h-64 object-cover object-top"
          />
          <div className="p-4 text-center">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-1">
              Rastafari Legacy
            </p>
            <p className="text-[var(--dim)] text-xs font-light">
              The deep roots binding Jamaica and Ethiopia. Heritage is the foundation.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Products */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-3">
          The Ecosystem
        </p>
        <div className="space-y-2">
          {[
            { name: 'Lion Order Flower', sub: 'Small batch, strain-hunted, high-quality cannabis' },
            { name: 'Smoking Lounge & Cafes', sub: 'Cultural spaces where the order gathers' },
            { name: 'Lifestyle & Accessories', sub: 'Roots luxury — from the culture, for the culture' },
            { name: 'Manga & Storytelling', sub: 'King Clem, Kai Suna, Runna Gyal — the animated world' },
          ].map((p) => (
            <div key={p.name} className="rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3.5">
              <p className="text-sm text-[var(--cream)] font-medium">{p.name}</p>
              <p className="text-[var(--dim)] text-[11px] font-light mt-0.5">{p.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Visual Identity */}
      <motion.div {...fadeUp} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#d8b15a] font-medium mb-3">
          Visual Identity
        </p>
        <div className="rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)]">
          <Image
            src="/lion-order/wordmark.jpg"
            alt="Lion Order wordmark in gold"
            width={380}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-1.5">
                <div className="w-6 h-6 rounded-full bg-[#d8b15a]" title="Royalty Yellow" />
                <div className="w-6 h-6 rounded-full bg-[#a9812f]" title="Antique Gold AG01" />
                <div className="w-6 h-6 rounded-full bg-[#c98a3c]" title="Antique Gold AG02" />
                <div className="w-6 h-6 rounded-full bg-[#FFD700]" title="24K Gold" />
              </div>
            </div>
            <p className="text-xs text-[var(--dim)] font-light">
              Royalty Yellow &middot; Antique Golds &middot; 24K Gold
            </p>
            <p className="text-xs text-[var(--dim)] font-light mt-1">
              Display: Salter Roman &middot; Pattern: Sacred Geometry + Lion Motif
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div {...fadeUp} className="px-6 pb-10">
        <div className="rounded-2xl border border-[#d8b15a]/25 bg-gradient-to-b from-[#d8b15a]/[0.08] to-transparent p-6 text-center">
          <Shield size={24} className="text-[#d8b15a] mx-auto mb-3" />
          <h3 className="font-display text-xl text-[var(--cream)] font-light mb-2">
            Enter the Order
          </h3>
          <p className="text-[var(--dim)] text-sm font-light leading-relaxed mb-5">
            The story is the order. The order is the movement.
          </p>
          <div className="space-y-2">
            <AppLink
              href="https://lionorder.com/"
              title="Lion Order"
              className="block w-full bg-[#d8b15a] text-[var(--bg)] py-3 rounded-xl text-sm font-medium tracking-wide"
            >
              lionorder.com
            </AppLink>
            <AppLink
              href="https://www.instagram.com/lionorder/"
              title="Lion Order on Instagram"
              className="block w-full bg-[#d8b15a]/10 text-[#d8b15a] py-3 rounded-xl text-sm font-medium tracking-wide border border-[#d8b15a]/20"
            >
              @lionorder
            </AppLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
