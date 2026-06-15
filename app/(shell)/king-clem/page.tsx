'use client';

import Image from 'next/image';

export default function KingClemPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      <section className="px-4 py-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#F6C800] mb-2 text-center font-medium">
          Strain Reference Guide
        </p>
        <p className="text-white text-[20px] font-semibold text-center mb-1">
          King Clementine
        </p>
        <p className="text-white/50 text-[11px] text-center mb-6">
          6 Pages — Scroll to explore
        </p>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="border border-[var(--gold)]/20 overflow-hidden">
              <Image
                src={`/brand/strain-guide/page-${n}.jpg`}
                alt={`King Clementine Strain Guide — Page ${n}`}
                width={800}
                height={1035}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      <footer className="px-8 pb-12 text-center">
        <div className="h-px bg-[var(--gold)]/25 mb-8" />
        <p className="text-white/40 text-[8px] tracking-[0.3em] uppercase">
          Lion Order · King Clementine
        </p>
      </footer>
    </div>
  );
}
