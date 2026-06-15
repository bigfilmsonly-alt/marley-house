'use client';

import Image from 'next/image';
import { Heart, Star, Flame, Compass, Sparkles, Shield, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AgeGate from '@/components/AgeGate';

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
  { name: 'Strain Hunting', accent: '#B5851E' },
  { name: 'Aroma', accent: '#946312' },
  { name: 'Aesthetic', accent: '#F6C800' },
  { name: 'Flavor', accent: '#B5851E' },
  { name: 'Resin-Release', accent: '#EFC11F' },
  { name: 'Efficacy', accent: '#946312' },
];

const personality = ['Regal', 'Passionate', 'Wise', 'Aspirational', 'Courageous', 'Nurturing'];

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' as const },
  transition: { duration: 0.5 },
};

export default function LionOrderPage() {
  return (
    <AgeGate>
      <div className="relative min-h-full bg-[var(--bg)]">

        {/* ═══ HERO ═══ */}
        <div className="relative px-8 pt-16 pb-8 text-center">
          <motion.div {...fade}>
            <Image
              src="/brand/lion-order-crest.png"
              alt="Lion Order Crest"
              width={100}
              height={100}
              className="mx-auto mb-8 opacity-80"
            />
            <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
              The Movement
            </p>
            <h1 className="font-display text-[clamp(2rem,8vw,3rem)] text-[var(--cream)] leading-[1.05] tracking-[0.04em] uppercase mb-4">
              Lion Order
            </h1>
            <div className="gold-rule w-10 mx-auto mb-6" />
            <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[280px] mx-auto">
              Roots luxury. Cannabis. Manga. Cultural connectivity. Founded by Rohan Marley.
            </p>
          </motion.div>
        </div>

        {/* ═══ LION EYES ═══ */}
        <motion.div {...fade} className="px-6 pb-8">
          <div className="overflow-hidden border border-[var(--line)]">
            <Image src="/lion-order/lion-eyes.jpg" alt="The Lion" width={380} height={200} className="w-full h-44 object-cover" />
          </div>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ VISION & MISSION ═══ */}
        <motion.div {...fade} className="px-8 py-14 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Our Vision</p>
          <p className="font-display text-xl text-[var(--cream)] italic leading-[1.5] mb-8">
            To awaken the lion in everyone.
          </p>
          <div className="gold-rule w-8 mx-auto mb-8" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Our Mission</p>
          <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[280px] mx-auto">
            Create the highest quality goods that elevate consciousness and culture.
          </p>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ ROHAN ═══ */}
        <motion.div {...fade} className="px-6 py-14">
          <div className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
            <div className="relative h-72">
              <Image src="/lion-order/rohan-portrait.jpg" alt="Rohan Marley" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 400px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120d07] via-[#120d07]/30 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">The Founder</p>
              <p className="font-display text-xl text-[var(--cream)] mb-3">Rohan Marley</p>
              <p className="text-[var(--dim)] text-xs font-light leading-[1.8]">
                More than a brand. Rohan&apos;s taste acts like a stamp of approval. His association signals both authenticity and quality. The story is the order.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ VALUES ═══ */}
        <motion.div {...fade} className="px-6 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Our Values</p>
          <div className="space-y-3">
            {values.map((v) => (
              <div key={v.label} className="flex items-start gap-4 border border-[var(--line)] bg-[var(--panel)] p-5">
                <div className="w-9 h-9 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                  <v.icon size={16} className="text-[var(--gold)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--cream)]">{v.label}</p>
                  <p className="text-[var(--dim)] text-[11px] font-light mt-0.5 leading-[1.6]">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ CODES ═══ */}
        <motion.div {...fade} className="px-8 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Codes of Lion Order</p>
          <div className="space-y-4">
            {codes.map((c) => (
              <div key={c} className="flex items-center gap-4 py-3 border-b border-[var(--line)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                <p className="font-display text-base text-[var(--cream)]">{c}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ THE FLOWER ═══ */}
        <motion.div {...fade} className="px-6 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">The Flower</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="overflow-hidden border border-[var(--line)]">
              <Image src="/lion-order/flower-closeup.jpg" alt="Cannabis flower" width={180} height={260} className="w-full h-52 object-cover" />
            </div>
            <div className="overflow-hidden border border-[var(--line)]">
              <Image src="/lion-order/field-sunset.jpg" alt="Field at sunset" width={180} height={260} className="w-full h-52 object-cover" />
            </div>
          </div>
          <p className="text-center text-[var(--dim)] text-[9px] tracking-[0.15em] uppercase mt-4">
            Strain-hunted &middot; Small batch &middot; Beautiful forms
          </p>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ QUALITY FACTORS ═══ */}
        <motion.div {...fade} className="px-6 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Five Quality Factors</p>
          <div className="grid grid-cols-3 gap-3">
            {qualityFactors.map((f) => (
              <div key={f.name} className="border border-[var(--line)] bg-[var(--panel)] p-3 text-center">
                <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ background: f.accent }} />
                <p className="text-[10px] text-[var(--cream)] leading-tight">{f.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ HEALING ═══ */}
        <motion.div {...fade} className="px-6 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">How We Heal</p>
          <div className="grid grid-cols-3 gap-2">
            {['Physical', 'Mental', 'Nurture', 'Expression', 'Improvement', 'Education'].map((h) => (
              <div key={h} className="border border-[var(--gold)]/10 bg-[var(--gold)]/[0.03] py-3 px-2 text-center">
                <p className="text-[11px] text-[var(--cream)] font-light">{h}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ CHARACTERS ═══ */}
        <motion.div {...fade} className="px-6 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4 text-center">Our Characters</p>
          <p className="text-[var(--dim)] text-xs font-light text-center mb-8 leading-[1.8]">
            The animated world of Lion Order — manga storytelling meets Rastafari culture.
          </p>
          <div className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden mb-3">
            <Image src="/lion-order/king-clem.jpg" alt="King Clem" width={380} height={380} className="w-full aspect-square object-cover" />
            <div className="p-5">
              <p className="font-display text-lg text-[var(--cream)]">King Clem</p>
              <p className="text-[var(--dim)] text-xs font-light mt-1">The warrior. Strength and justice.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-[var(--line)] bg-[var(--panel)] p-5 text-center">
              <p className="font-display text-sm text-[var(--cream)]">Kai Suna</p>
              <p className="text-[var(--dim)] text-[10px] font-light mt-1">The seeker</p>
            </div>
            <div className="border border-[var(--line)] bg-[var(--panel)] p-5 text-center">
              <p className="font-display text-sm text-[var(--cream)]">Runna Gyal</p>
              <p className="text-[var(--dim)] text-[10px] font-light mt-1">The spirit</p>
            </div>
          </div>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ PERSONALITY ═══ */}
        <motion.div {...fade} className="px-6 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Our Personality</p>
          <div className="flex flex-wrap justify-center gap-2">
            {personality.map((p) => (
              <span key={p} className="text-xs text-[var(--cream)] border border-[var(--line)] px-4 py-2">
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="gold-rule mx-8" />

        {/* ═══ CTA ═══ */}
        <motion.div {...fade} className="px-6 py-14">
          <div className="border border-[var(--gold)]/20 bg-[var(--gold)]/[0.03] p-8 text-center">
            <Shield size={24} className="text-[var(--gold)] mx-auto mb-4" />
            <h3 className="font-display text-xl text-[var(--cream)] italic mb-3">Enter the Order</h3>
            <p className="text-[var(--dim)] text-sm font-light leading-[1.9] mb-8 max-w-[260px] mx-auto">
              The story is the order. The order is the movement.
            </p>
            <div className="space-y-3">
              <a
                href="https://lionorder.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-[var(--gold)] text-[var(--gold)] py-3 text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--gold)]/5 transition-colors"
              >
                lionorder.com <ArrowUpRight size={12} />
              </a>
              <a
                href="https://www.instagram.com/lionorder/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-[var(--line)] text-[var(--dim)] py-3 text-[11px] tracking-[0.2em] uppercase hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-colors"
              >
                @lionorder <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="px-8 pb-12 text-center">
          <div className="gold-rule mb-8" />
          <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
            Lion Order &middot; Flower to the People
          </p>
        </footer>
      </div>
    </AgeGate>
  );
}
