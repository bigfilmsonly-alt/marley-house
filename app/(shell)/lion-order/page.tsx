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
  { name: 'Strain Hunting', accent: '#B98524' },
  { name: 'Aroma', accent: '#825B0D' },
  { name: 'Aesthetic', accent: '#E8C23A' },
  { name: 'Flavor', accent: '#B98524' },
  { name: 'Resin-Release', accent: '#EFC11F' },
  { name: 'Efficacy', accent: '#825B0D' },
];

const personality = ['Regal', 'Passionate', 'Wise', 'Aspirational', 'Courageous', 'Nurturing'];

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5 },
};

export default function LionOrderPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[var(--antique-gold-1)] blur-[120px] opacity-[0.06] pointer-events-none" />

      {/* ═══ HERO ═══ */}
      <div className="relative px-6 pt-14 pb-6 text-center">
        <motion.div {...fade}>
          <Image
            src="/lion-order/crest-gold.jpg"
            alt="Lion Order Crest"
            width={120}
            height={120}
            className="mx-auto mb-5 drop-shadow-2xl"
          />
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--antique-gold-1)] font-medium mb-2">
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

      {/* ═══ LION EYES ═══ */}
      <motion.div {...fade} className="px-4 pb-6">
        <div className="rounded-2xl overflow-hidden">
          <Image src="/lion-order/lion-eyes.jpg" alt="The Lion" width={380} height={200} className="w-full h-44 object-cover" />
        </div>
      </motion.div>

      {/* ═══ VISION & MISSION ═══ */}
      <motion.div {...fade} className="px-6 pb-8">
        <div className="rounded-2xl border border-[var(--antique-gold-1)]/20 bg-[var(--antique-gold-1)]/[0.04] p-5">
          <div className="text-center mb-4">
            <Crown size={20} className="text-[var(--antique-gold-1)] mx-auto mb-2" />
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium">Our Vision</p>
          </div>
          <p className="font-display text-xl text-[var(--cream)] font-light text-center italic leading-relaxed">
            &ldquo;To awaken the lion in everyone.&rdquo;
          </p>
          <div className="h-px bg-[var(--antique-gold-1)]/15 my-4" />
          <div className="text-center">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)]/70 font-medium mb-1">Our Mission</p>
            <p className="text-[var(--dim)] text-sm font-light leading-relaxed">
              Create the highest quality goods that elevate consciousness and culture.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ═══ ROHAN — THE FOUNDER ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <div className="rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)]">
          <Image src="/lion-order/rohan-portrait.jpg" alt="Rohan Marley" width={380} height={480} className="w-full h-72 object-cover object-top" />
          <div className="p-5">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-1">The Founder</p>
            <h2 className="font-display text-xl text-[var(--cream)] font-light mb-2">Rohan Marley</h2>
            <p className="text-[var(--dim)] text-sm font-light leading-relaxed">
              More than a brand. Rohan&apos;s taste acts like a stamp of approval. His association signals both authenticity and quality. The story is the order.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ═══ HERITAGE COLLAGE ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <div className="rounded-2xl overflow-hidden">
          <Image src="/lion-order/heritage.jpg" alt="Heritage — Jamaican roots, music, culture" width={380} height={260} className="w-full h-auto object-cover" />
        </div>
        <p className="text-center text-[var(--dim)] text-[10px] font-light mt-2">
          Heritage + Roots &mdash; the landscape, the culture, the values
        </p>
      </motion.div>

      {/* ═══ VALUES ═══ */}
      <motion.div {...fade} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-4">Our Values</p>
        <div className="space-y-3">
          {values.map((v) => (
            <div key={v.label} className="flex items-start gap-3 rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--antique-gold-1)]/10 flex items-center justify-center shrink-0">
                <v.icon size={16} className="text-[var(--antique-gold-1)]" />
              </div>
              <div>
                <p className="text-sm text-[var(--cream)] font-medium">{v.label}</p>
                <p className="text-[var(--dim)] text-[11px] font-light mt-0.5">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══ CODES ═══ */}
      <motion.div {...fade} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-3">Codes of Lion Order</p>
        <div className="flex flex-wrap gap-2">
          {codes.map((code) => (
            <span key={code} className="text-[11px] text-[var(--antique-gold-1)] bg-[var(--antique-gold-1)]/[0.08] border border-[var(--antique-gold-1)]/15 px-3 py-1.5 rounded-full font-medium">
              {code}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ═══ ROOTS LUXURY ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <div className="rounded-2xl overflow-hidden relative">
          <Image src="/lion-order/culture.jpg" alt="Rastafari culture" width={380} height={240} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-1">Our Perspective</p>
            <h3 className="font-display text-2xl text-[var(--cream)] font-light">&ldquo;Roots Luxury&rdquo;</h3>
          </div>
        </div>
      </motion.div>

      {/* ═══ THE FLOWER ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl overflow-hidden">
            <Image src="/lion-order/flower-closeup.jpg" alt="Cannabis flower close-up" width={180} height={260} className="w-full h-52 object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image src="/lion-order/field-sunset.jpg" alt="Cannabis field at sunset" width={180} height={260} className="w-full h-52 object-cover" />
          </div>
        </div>
        <p className="text-center text-[var(--dim)] text-[10px] font-light mt-2">
          Strain-hunted &middot; Small batch &middot; Beautiful forms
        </p>
      </motion.div>

      {/* ═══ FIVE QUALITY FACTORS ═══ */}
      <motion.div {...fade} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-3">Five Quality Factors</p>
        <div className="grid grid-cols-3 gap-2">
          {qualityFactors.map((f) => (
            <div key={f.name} className="rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-2.5 text-center">
              <div className="w-2 h-2 rounded-full mx-auto mb-1.5" style={{ background: f.accent }} />
              <p className="text-[10px] text-[var(--cream)] font-medium leading-tight">{f.name}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══ ART DIRECTION — LOUNGE ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl overflow-hidden">
            <Image src="/lion-order/lounge-portrait.jpg" alt="Art direction" width={180} height={200} className="w-full h-44 object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image src="/lion-order/ashtray-floral.jpg" alt="Beautiful forms" width={180} height={200} className="w-full h-44 object-cover" />
          </div>
        </div>
        <p className="text-center text-[var(--dim)] text-[10px] font-light mt-2">
          Art direction &middot; Photo direction &middot; Roots luxury aesthetic
        </p>
      </motion.div>

      {/* ═══ HOW WE HEAL ═══ */}
      <motion.div {...fade} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-3">How We Heal</p>
        <div className="grid grid-cols-3 gap-2">
          {['Physical', 'Mental', 'Nurture', 'Expression', 'Improvement', 'Education'].map((h) => (
            <div key={h} className="rounded-lg bg-[var(--antique-gold-1)]/[0.05] border border-[var(--antique-gold-1)]/10 py-2.5 px-2 text-center">
              <p className="text-[11px] text-[var(--cream)] font-light">{h}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══ LANDSCAPE ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <div className="rounded-2xl overflow-hidden">
          <Image src="/lion-order/landscape-waterfall.jpg" alt="The landscape" width={380} height={250} className="w-full h-auto object-cover" />
        </div>
        <p className="text-center text-[var(--dim)] text-[10px] font-light mt-2">
          The landscape &mdash; where the story begins
        </p>
      </motion.div>

      {/* ═══ PERSONALITY ═══ */}
      <motion.div {...fade} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-3">Our Personality</p>
        <div className="flex flex-wrap gap-2">
          {personality.map((p) => (
            <span key={p} className="text-xs text-[var(--cream)] bg-[var(--bg2)] border border-[var(--line)] px-3 py-1.5 rounded-full">
              {p}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ═══ COMMUNITY ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-3 px-2">Our Community</p>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="rounded-lg overflow-hidden">
            <Image src="/lion-order/community-vinyl.jpg" alt="Vinyl culture" width={120} height={160} className="w-full h-32 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image src="/lion-order/community-bar.jpg" alt="Community gathering" width={120} height={160} className="w-full h-32 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image src="/lion-order/community-table.jpg" alt="The table" width={120} height={160} className="w-full h-32 object-cover" />
          </div>
        </div>
      </motion.div>

      {/* ═══ CHARACTERS ═══ */}
      <motion.div {...fade} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-3">Our Characters</p>
        <p className="text-[var(--dim)] text-sm font-light mb-4 leading-relaxed">
          The animated world of Lion Order &mdash; manga storytelling meets Rastafari culture.
        </p>
        <div className="rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)]">
          <Image src="/lion-order/king-clem.jpg" alt="King Clem" width={380} height={380} className="w-full aspect-square object-cover" />
          <div className="p-4">
            <p className="font-display text-lg text-[var(--cream)]">King Clem</p>
            <p className="text-[var(--dim)] text-xs font-light mt-0.5">The warrior. Strength and justice.</p>
          </div>
        </div>
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

      {/* ═══ SELASSIE / RASTAFARI HERITAGE ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <div className="rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)]">
          <Image src="/lion-order/selassie.jpg" alt="Rastafari heritage" width={380} height={500} className="w-full h-64 object-cover object-top" />
          <div className="p-4 text-center">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-1">Rastafari Legacy</p>
            <p className="text-[var(--dim)] text-xs font-light">The deep roots binding Jamaica and Ethiopia. Heritage is the foundation.</p>
          </div>
        </div>
      </motion.div>

      {/* ═══ ROHAN B&W ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <div className="rounded-2xl overflow-hidden">
          <Image src="/lion-order/rohan-bw.jpg" alt="Rohan Marley" width={380} height={480} className="w-full h-64 object-cover object-top" />
        </div>
      </motion.div>

      {/* ═══ THE ECOSYSTEM ═══ */}
      <motion.div {...fade} className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-3">The Ecosystem</p>
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

      {/* ═══ VISUAL IDENTITY ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--antique-gold-1)] font-medium mb-3 px-2">Visual Identity</p>
        <div className="rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)]">
          <Image src="/lion-order/wordmark.jpg" alt="Lion Order wordmark" width={380} height={200} className="w-full h-40 object-cover" />
          <div className="p-4">
            {/* Color swatches */}
            <p className="text-[9px] tracking-[0.15em] uppercase text-[var(--dim)] mb-2">Color Palette</p>
            <div className="flex gap-2 mb-3">
              {[
                { color: 'var(--antique-gold-1)', name: 'Royalty Yellow' },
                { color: '#a9812f', name: 'AG01' },
                { color: '#c98a3c', name: 'AG02' },
                { color: '#FFD700', name: '24K Gold' },
              ].map((c) => (
                <div key={c.name} className="text-center">
                  <div className="w-8 h-8 rounded-lg mx-auto mb-1" style={{ background: c.color }} />
                  <p className="text-[8px] text-[var(--dim)]">{c.name}</p>
                </div>
              ))}
            </div>
            {/* Logo variants */}
            <div className="flex gap-3 items-center pt-3 border-t border-[var(--line)]">
              <Image src="/lion-order/crest-gold.jpg" alt="Gold crest" width={40} height={40} className="rounded-lg" />
              <Image src="/lion-order/crest-white.jpg" alt="White crest" width={40} height={40} className="rounded-lg" />
              <div className="flex-1">
                <p className="text-[10px] text-[var(--cream)]">Logo Crest</p>
                <p className="text-[8px] text-[var(--dim)]">Min: 100px &middot; Display: Salter Roman</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ RAINFOREST ═══ */}
      <motion.div {...fade} className="px-4 pb-8">
        <div className="rounded-2xl overflow-hidden">
          <Image src="/lion-order/rainforest.jpg" alt="The landscape" width={380} height={220} className="w-full h-auto object-cover" />
        </div>
      </motion.div>

      {/* ═══ CTA ═══ */}
      <motion.div {...fade} className="px-6 pb-10">
        <div className="rounded-2xl border border-[var(--antique-gold-1)]/25 bg-gradient-to-b from-[var(--antique-gold-1)]/[0.08] to-transparent p-6 text-center">
          <Shield size={24} className="text-[var(--antique-gold-1)] mx-auto mb-3" />
          <h3 className="font-display text-xl text-[var(--cream)] font-light mb-2">Enter the Order</h3>
          <p className="text-[var(--dim)] text-sm font-light leading-relaxed mb-5">
            The story is the order. The order is the movement.
          </p>
          <div className="space-y-2">
            <AppLink
              href="https://lionorder.com/"
              title="Lion Order"
              className="block w-full bg-[var(--antique-gold-1)] text-[var(--bg)] py-3 rounded-xl text-sm font-medium tracking-wide"
            >
              lionorder.com
            </AppLink>
            <AppLink
              href="https://www.instagram.com/lionorder/"
              title="Lion Order on Instagram"
              className="block w-full bg-[var(--antique-gold-1)]/10 text-[var(--antique-gold-1)] py-3 rounded-xl text-sm font-medium tracking-wide border border-[var(--antique-gold-1)]/20"
            >
              @lionorder
            </AppLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
