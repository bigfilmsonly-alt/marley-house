'use client';

import Image from 'next/image';

const drop = {
  number: 1,
  tag: 'legacy',
  type: 'reflection',
  body: 'The lion does not turn around when the small dog barks. Stay focused on the mission. The legacy is not in what you build — it is in what endures.',
};

export default function HomePage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════ R-M MONOGRAM ═══════ */}
      <section className="px-8 pt-20 pb-8 flex flex-col items-center">
        <Image
          src="/brand/rhr-monogram-transparent.png"
          alt="R-M Monogram"
          width={180}
          height={180}
          className="mb-12 opacity-90"
          priority
        />

        <div className="gold-rule w-10 mx-auto mb-8" />

        <p className="font-display text-xl text-[var(--cream)] italic text-center leading-[1.5] tracking-[0.02em]">
          Awaken the lion<br />in everyone.
        </p>
      </section>

      {/* ═══════ DAILY DROP ═══════ */}
      <section className="px-6 pb-20 pt-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">
          Daily Drop &middot; Today
        </p>

        <div className="border border-[var(--line)] bg-[var(--panel)] p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-3xl text-[var(--gold)] leading-none">
              {String(drop.number).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--dim)] border border-[var(--line)] px-2 py-0.5">
                {drop.tag}
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--dim)]">
                {drop.type}
              </span>
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

      {/* ═══════ MISSION / VISION ═══════ */}
      <section className="px-8 pb-16 text-center">
        <div className="gold-rule mb-12" />

        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">Our Mission</p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] max-w-[300px] mx-auto mb-14">
          Create the highest quality goods that elevate consciousness and culture.
        </p>

        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">Our Vision</p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] max-w-[300px] mx-auto">
          To awaken the lion in everyone.
        </p>

        <div className="gold-rule mt-12" />
      </section>

      {/* ═══════ FOOTER MARK ═══════ */}
      <footer className="px-8 pb-12 text-center">
        <Image
          src="/brand/lion-crest-icon.png"
          alt="Lion Order"
          width={36}
          height={36}
          className="mx-auto mb-4 opacity-40"
        />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; Est. 2022
        </p>
      </footer>
    </div>
  );
}
