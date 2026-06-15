'use client';

import Image from 'next/image';

/* ── Color system ── */
const primaryGolds = [
  { name: 'Royalty Yellow', hex: '#EFC11F', css: '--royal', note: 'Splash screen only — the single bright moment.' },
  { name: 'Antique Gold', hex: '#B5851E', css: '--gold', note: 'Primary brand gold. Crests, rules, accents.' },
  { name: 'Deep Gold', hex: '#946312', css: '--gold-deep', note: 'Secondary accent. Depth and warmth.' },
  { name: '24K Bright', hex: '#F6C800', css: '--bright', note: 'Highlights, active states, emphasis.' },
];

const neutrals = [
  { name: 'Cream', hex: '#F6F1E6', css: '--cream', note: 'Primary body text on dark.' },
  { name: 'Dim Gold', hex: '#946312', css: '--dim', note: 'Secondary text, captions.' },
  { name: 'Espresso', hex: '#0B0805', css: '--bg', note: 'Canvas — the black ground.' },
  { name: 'Panel', hex: '#120d07', css: '--panel', note: 'Raised cards and surfaces.' },
  { name: 'Ink', hex: '#1c1810', css: '--ink', note: 'Deep elements, device frame.' },
];

const lineRule = { name: 'Gold Hairline', hex: 'rgba(216,177,90,0.18)', css: '--line', note: 'Borders, dividers, structure.' };

/* ── Typography ── */
const typeSystem = [
  { role: 'Display', family: 'Salter Roman', fallback: 'Cormorant Garamond', sizes: '90 / 70 / 48', weight: '400', style: 'Normal + Italic', usage: 'Headlines, section titles, hero text' },
  { role: 'Body', family: 'Minion Variable', fallback: 'EB Garamond', sizes: '20 / 18 / 16', weight: '400–600', style: 'Normal', usage: 'Body copy, descriptions, cards' },
  { role: 'Wordmark', family: 'GothBallCrap Bold', fallback: 'Blackletter serif', sizes: '—', weight: 'Bold', style: 'Blackletter', usage: '"Lion Order" logotype only' },
  { role: 'Accent', family: 'Cardinal Fruit / Boiling', fallback: '—', sizes: '—', weight: 'Medium / Thin', style: 'Display accent', usage: 'Special treatments, limited use' },
  { role: 'Footer / Caps', family: 'Body family', fallback: 'EB Garamond', sizes: '10 / 9 / 8', weight: '400', style: 'Uppercase, tracked', usage: 'Labels, tags, micro-copy' },
];

/* ── Mark rules ── */
const markRules = [
  { rule: 'Crest sizing', spec: '100–250px on clean grounds. Never on photographs.' },
  { rule: 'Signature sizing', spec: '90–300px. Gold ink only. No recoloring.' },
  { rule: 'Clear space', spec: 'Minimum 1× crest width on all sides.' },
  { rule: 'Background', spec: 'Dark grounds preferred. Never on mid-tone gray.' },
  { rule: 'Color', spec: 'Gold or cream only. Never recolor marks.' },
  { rule: 'Distortion', spec: 'Never stretch, rotate, or add effects to marks.' },
];

/* ── Brand Book reference pages ── */
const bookPages = [
  { page: '04–05', label: 'The Lion Crest' },
  { page: '10–11', label: 'Color System' },
  { page: '14–15', label: 'Typography' },
  { page: '20–21', label: 'Art Direction' },
  { page: '30–31', label: 'Photography' },
  { page: '40–41', label: 'Packaging' },
  { page: '52–53', label: 'Font Stack' },
  { page: '60–61', label: 'Applications' },
];

export default function IdentityPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════ HEADER ═══════ */}
      <section className="px-8 pt-16 pb-14 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">Identity</p>
        <h1 className="font-display text-[clamp(1.8rem,7vw,2.8rem)] leading-[1.1] tracking-[0.04em] uppercase text-[var(--cream)] mb-6">
          Brand<br /><span className="italic font-normal">System</span>
        </h1>
        <div className="gold-rule w-10 mx-auto mb-8" />
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[300px] mx-auto">
          The visual language of the maison. Every color, typeface, and mark is chosen with intention — luxury restraint, regal precision.
        </p>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ COLOR — Primary Golds ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Gold Palette</p>

        <div className="space-y-3">
          {primaryGolds.map((s) => (
            <div key={s.name} className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
              <div className="h-20" style={{ background: s.hex }} />
              <div className="p-4">
                <div className="flex items-baseline justify-between mb-1">
                  <p className="text-[var(--cream)] text-sm">{s.name}</p>
                  <code className="text-[var(--dim)] text-[10px] font-mono">{s.hex}</code>
                </div>
                <p className="text-[var(--dim)] text-[10px] font-light leading-[1.6] mb-1">{s.note}</p>
                <code className="text-[var(--gold)]/60 text-[9px] font-mono">{s.css}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ COLOR — Neutrals ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Neutral Palette</p>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {neutrals.map((s) => (
            <div key={s.name} className="border border-[var(--line)]">
              <div className="h-16 border-b border-[var(--line)]" style={{ background: s.hex }} />
              <div className="p-2.5 bg-[var(--panel)]">
                <p className="text-[var(--cream)] text-[10px] mb-0.5">{s.name}</p>
                <code className="text-[var(--dim)] text-[8px] font-mono block">{s.hex}</code>
              </div>
            </div>
          ))}
        </div>

        {/* Hairline rule swatch */}
        <div className="border border-[var(--line)] bg-[var(--panel)] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--cream)] text-[10px] mb-0.5">{lineRule.name}</p>
              <code className="text-[var(--dim)] text-[8px] font-mono">{lineRule.hex}</code>
            </div>
            <div className="w-20 h-px bg-[var(--line)]" />
          </div>
          <p className="text-[var(--dim)] text-[9px] mt-2">{lineRule.note}</p>
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ COLOR IN CONTEXT ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">In Context</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { src: '/lion-order/crest-gold.jpg', label: 'Gold on dark' },
            { src: '/lion-order/crest-white.jpg', label: 'Cream on dark' },
            { src: '/lion-order/wordmark.jpg', label: 'Wordmark' },
            { src: '/lion-order/selassie.jpg', label: 'Heritage' },
          ].map((img) => (
            <div key={img.label} className="relative aspect-square overflow-hidden border border-[var(--line)]">
              <Image src={img.src} alt={img.label} fill className="object-cover" sizes="(max-width: 768px) 50vw, 200px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0805]/70 to-transparent" />
              <p className="absolute bottom-2.5 left-2.5 text-[8px] tracking-[0.2em] uppercase text-[var(--cream)]">{img.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ TYPOGRAPHY ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Typography</p>

        {/* Display specimen */}
        <div className="border border-[var(--line)] bg-[var(--panel)] p-8 mb-4">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Display</p>
          <p className="font-display text-5xl text-[var(--cream)] leading-[1.05] mb-2">Aa Bb</p>
          <p className="font-display text-3xl text-[var(--cream)] italic leading-[1.1] mb-2">Cc Dd</p>
          <p className="font-display text-xl text-[var(--cream)] leading-[1.2] mb-4">Ee Ff Gg</p>
          <p className="text-[var(--dim)] text-[9px] font-light">
            Salter Roman &middot; Fallback: Cormorant Garamond &middot; 90 / 70 / 48
          </p>
        </div>

        {/* Body specimen */}
        <div className="border border-[var(--line)] bg-[var(--panel)] p-8 mb-4">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Body</p>
          <p className="font-body text-xl text-[var(--cream)] leading-[1.5] mb-2">
            The lion does not turn around when the small dog barks.
          </p>
          <p className="font-body text-base text-[var(--dim)] leading-[1.7] mb-4">
            Heritage, craft, and legacy — the maison of Rohan Marley. Every cup carries the weight of the mountain it grew on.
          </p>
          <p className="text-[var(--dim)] text-[9px] font-light">
            Minion Variable &middot; Fallback: EB Garamond &middot; 20 / 18 / 16
          </p>
        </div>

        {/* Footer specimen */}
        <div className="border border-[var(--line)] bg-[var(--panel)] p-8 mb-6">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Footer / Caps</p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--cream)] mb-1">Lion Order &middot; Est. 2022</p>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--dim)] mb-1">From the House &middot; Legacy</p>
          <p className="text-[8px] tracking-[0.2em] uppercase text-[var(--dim)]">Flower to the People</p>
          <p className="text-[var(--dim)] text-[9px] font-light mt-4">
            Body family, uppercase &middot; 10 / 9 / 8
          </p>
        </div>

        {/* Type spec table */}
        <div className="space-y-3">
          {typeSystem.map((t) => (
            <div key={t.role} className="border border-[var(--line)] bg-[var(--panel)] p-4">
              <div className="flex items-baseline justify-between mb-2">
                <p className="text-[var(--cream)] text-sm">{t.role}</p>
                <p className="text-[var(--gold)] text-[9px]">{t.sizes}</p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9px] text-[var(--dim)]">
                <span>Family: <span className="text-[var(--cream)]">{t.family}</span></span>
                <span>Weight: {t.weight}</span>
                <span>Fallback: {t.fallback}</span>
                <span>Style: {t.style}</span>
              </div>
              <p className="text-[var(--dim)] text-[9px] mt-2 italic">{t.usage}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ MARK USAGE RULES ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Usage Rules</p>

        {/* Visual — crest clear space */}
        <div className="border border-[var(--line)] bg-[var(--panel)] p-8 flex flex-col items-center mb-6">
          <div className="border border-dashed border-[var(--gold)]/20 p-8 mb-4">
            <Image src="/brand/lion-crest-clean.png" alt="Crest clear space" width={80} height={80} className="opacity-70" />
          </div>
          <p className="text-[var(--dim)] text-[9px] text-center">
            Minimum clear space: 1&times; crest width on all sides
          </p>
        </div>

        {/* Rules list */}
        <div className="space-y-4">
          {markRules.map((r, i) => (
            <div key={i} className="flex gap-4 border-b border-[var(--line)] pb-4">
              <span className="text-[var(--gold)] text-xs mt-0.5 shrink-0 font-display">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="text-[var(--cream)] text-sm mb-1">{r.rule}</p>
                <p className="text-[var(--dim)] text-xs font-light leading-[1.7]">{r.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ BRAND BOOK REFERENCE ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4 text-center">Brand Book</p>
        <p className="text-[var(--dim)] text-xs font-light text-center mb-8 max-w-[260px] mx-auto leading-[1.8]">
          Key spreads from the 65-page Lion Order brand book. Full gallery available in the Book tab.
        </p>

        <div className="space-y-2">
          {bookPages.map((bp) => (
            <div key={bp.page} className="flex items-center justify-between border border-[var(--line)] bg-[var(--panel)] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="text-[var(--gold)] text-xs font-display">pp. {bp.page}</span>
                <span className="text-[var(--cream)] text-sm font-light">{bp.label}</span>
              </div>
              <span className="text-[var(--dim)] text-[9px] tracking-[0.15em] uppercase">Book</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-8 pb-12 text-center">
        <div className="gold-rule mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; Brand System
        </p>
      </footer>
    </div>
  );
}
