'use client';

import { useState } from 'react';
import { Archive, BookOpen, Mic, Camera, Music, GraduationCap, Video, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { wisdomCards } from '@/content/wisdom';
import { roomAccents } from '@/lib/theme';

const archiveTypes = [
  { icon: Camera, label: 'Photos', count: 24 },
  { icon: BookOpen, label: 'Journals', count: 12 },
  { icon: Mic, label: 'Interviews', count: 8 },
  { icon: Music, label: 'Audio', count: 16 },
  { icon: Video, label: 'Video', count: 10 },
  { icon: GraduationCap, label: 'Lessons', count: 6 },
];

export default function VaultPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[var(--room-legacy)] blur-[100px] opacity-[0.06] pointer-events-none" />

      {/* Header */}
      <div className="relative px-6 pt-14 pb-6">
        <div className="flex items-center gap-2 mb-1">
          <Archive size={16} className="text-[var(--room-legacy)]" strokeWidth={1.5} />
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--room-legacy)] font-medium">
            The Vault
          </p>
        </div>
        <h1 className="font-display text-2xl text-[var(--cream)] font-light">
          The Legacy Lives Here
        </h1>
        <p className="text-[var(--dim)] text-xs font-light mt-1">
          The most valuable asset
        </p>
      </div>

      {/* Archive types grid */}
      <div className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--dim)] mb-3 font-medium">
          Archive
        </p>
        <div className="grid grid-cols-3 gap-2">
          {archiveTypes.map((type) => (
            <div
              key={type.label}
              className="rounded-xl border border-[var(--line)] bg-[var(--bg2)] p-3 text-center cursor-pointer hover:border-[var(--room-legacy)]/25 transition-colors"
            >
              <type.icon size={20} className="text-[var(--room-legacy)] mx-auto mb-1.5 opacity-60" strokeWidth={1.5} />
              <p className="text-[11px] text-[var(--cream)]">{type.label}</p>
              <p className="text-[var(--dim)] text-[9px] font-light">{type.count} items</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wisdom cards — tap to expand */}
      <div className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-3 font-medium">
          Wisdom
        </p>
        <div className="space-y-3">
          {wisdomCards.map((card, i) => (
            <motion.div
              key={card.id}
              layout
              onClick={() => setExpandedCard(expandedCard === i ? null : i)}
              className="rounded-xl border border-[var(--line)] bg-[var(--bg2)] p-4 cursor-pointer hover:border-[var(--gold)]/20 transition-colors overflow-hidden"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ background: roomAccents[card.room] }}
                />
                <div className="flex-1">
                  <p className="font-display text-sm text-[var(--cream)] font-light italic leading-relaxed">
                    &ldquo;{card.lesson}&rdquo;
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[var(--dim)] text-[10px] font-light capitalize">{card.room} Room</p>
                    <ChevronDown
                      size={12}
                      className={`text-[var(--dim)] transition-transform ${expandedCard === i ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedCard === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 mt-3 border-t border-[var(--line)]">
                      <p className="text-[var(--dim)] text-xs font-light leading-relaxed">
                        {card.expanded}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Family / Community CTA */}
      <div className="px-6 pb-10">
        <div className="rounded-xl border border-[var(--gold)]/20 bg-gradient-to-b from-[var(--gold)]/[0.06] to-transparent p-5 text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-2 font-medium">
            Family Room
          </p>
          <p className="font-display text-lg text-[var(--cream)] font-light">
            Join the House
          </p>
          <p className="text-[var(--dim)] text-xs font-light mt-1 mb-4">
            Community voices &middot; Membership
          </p>
          <button className="text-[10px] tracking-wider uppercase bg-[var(--gold)]/10 text-[var(--gold)] px-5 py-2 rounded-full border border-[var(--gold)]/20">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
