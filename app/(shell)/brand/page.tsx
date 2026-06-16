'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { brandLinks } from '@/content/links';

/* ── House-of-brands architecture ── */
const houses = [
  {
    name: 'Lion Order',
    type: 'Enterprise',
    mark: '/brand/lion-order-crest.png',
    desc: 'Luxury flower rooted in heritage, healing, and consciousness. The flagship brand of the maison.',
    url: 'https://lionorder.com',
    image: '/lion-order/flower-closeup.jpg',
  },
  {
    name: 'Marley Coffee',
    type: 'Heritage',
    mark: '/brand/lion-crest.png',
    desc: 'Single-origin, sustainably sourced coffee from the Marley family estate in the Blue Mountains of Jamaica.',
    url: 'https://marleycoffee.com',
    image: '/lion-order/roots.jpg',
  },
  {
    name: 'RoMarley Beach House',
    type: 'Lifestyle',
    mark: '/brand/lion-crest-icon.png',
    desc: 'A coastal sanctuary — hospitality rooted in culture, craft, and the spirit of the island.',
    url: 'https://romarleybeachhouse.com',
    image: '/lion-order/landscape-waterfall.jpg',
  },
  {
    name: 'House of Marley',
    type: 'Licensed',
    mark: '/brand/lion-crest-icon.png',
    desc: 'Sustainable audio and lifestyle electronics. Family-licensed brand carrying the Marley name forward.',
    url: 'https://thehouseofmarley.com',
    image: '/lion-order/heritage.jpg',
  },
];

/* ── Logo suite ── */
const logos = [
  { name: 'RM Logo', src: '/brand/rm-logo-gold.jpg', note: 'Primary mark' },
  { name: 'Lion Crest', src: '/brand/lion-crest-clean.png', note: 'Brand crest' },
  { name: 'Lion Order Crest', src: '/brand/lion-order-crest.png', note: 'Enterprise mark' },
  { name: 'Crest Icon', src: '/brand/lion-crest-icon.png', note: 'App / favicon' },
  { name: 'Heritage Lion', src: '/brand/lion-tile.png', note: 'Texture / pattern' },
];

/* ── Connected properties grouped ── */
const groups: { label: string; category: string }[] = [
  { label: 'Rohan Marley', category: 'rohan' },
  { label: 'Lion Order & Ventures', category: 'ventures' },
  { label: 'Marley Coffee', category: 'coffee' },
  { label: 'Music & Heritage', category: 'music' },
];

const statusColors: Record<string, string> = {
  active: '#F6C800',
  licensed: '#B5851E',
  dormant: '#946312',
  verify: '#946312',
};

const statusLabels: Record<string, string> = {
  active: 'Active',
  licensed: 'Licensed',
  dormant: 'Dormant',
  verify: 'Verify',
};

export default function BrandPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════ HEADER ═══════ */}
      <section className="px-8 pt-16 pb-14 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">The Brand</p>
        <h1 className="font-display text-[clamp(1.8rem,7vw,2.8rem)] leading-[1.1] tracking-[0.04em] uppercase text-[var(--cream)] mb-6">
          House of<br /><span className="italic font-normal">Brands</span>
        </h1>
        <div className="gold-rule w-10 mx-auto mb-8" />
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[300px] mx-auto">
          A portfolio of luxury brands united under one maison — each carrying the Marley name, heritage, and standard of excellence.
        </p>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ BRAND ARCHITECTURE — editorial tiles ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Architecture</p>
        <div className="space-y-6">
          {houses.map((h) => (
            <div key={h.name} className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
              {/* Editorial image */}
              <div className="relative h-48">
                <Image src={h.image} alt={h.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d07] via-[#120d07]/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="text-[8px] tracking-[0.2em] uppercase text-[var(--bg)] bg-[var(--gold)] px-2 py-1">
                    {h.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image src={h.mark} alt={h.name} width={36} height={36} className="opacity-70" />
                  <p className="font-display text-lg text-[var(--cream)]">{h.name}</p>
                </div>
                <p className="text-[var(--dim)] text-xs font-light leading-[1.8] mb-4">{h.desc}</p>
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] hover:text-[var(--cream)] transition-colors"
                >
                  Visit <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ LOGO SUITE ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Logo Suite</p>

        {/* Primary — large display */}
        <div className="border border-[var(--line)] bg-[var(--panel)] p-10 flex flex-col items-center mb-4">
          <Image src="/brand/rm-logo-gold.jpg" alt="RM Logo" width={120} height={120} className="mb-6 opacity-85" />
          <p className="font-display text-sm text-[var(--cream)] tracking-[0.1em] uppercase mb-1">RM Logo</p>
          <p className="text-[var(--dim)] text-[9px]">Primary mark — gold on dark grounds</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          {logos.slice(1).map((logo) => (
            <div key={logo.name} className="border border-[var(--line)] bg-[var(--panel)] p-6 flex flex-col items-center">
              <Image src={logo.src} alt={logo.name} width={56} height={56} className="mb-4 opacity-75" />
              <p className="text-[9px] tracking-[0.12em] uppercase text-[var(--cream)] text-center mb-0.5">{logo.name}</p>
              <p className="text-[var(--dim)] text-[8px] text-center">{logo.note}</p>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div className="border border-[var(--line)] bg-[var(--panel)] p-8 flex flex-col items-center mt-4">
          <Image src="/brand/rohan-signature.png" alt="Rohan Marley signature" width={140} height={45} className="opacity-50 mb-3" />
          <p className="text-[9px] tracking-[0.12em] uppercase text-[var(--dim)]">Founder Signature</p>
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ ART DIRECTION ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Art Direction</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { src: '/lion-order/art-direction.jpg', label: 'Direction' },
            { src: '/lion-order/crest-gold.jpg', label: 'Crest' },
            { src: '/lion-order/beauty.jpg', label: 'Beauty' },
            { src: '/lion-order/culture.jpg', label: 'Culture' },
            { src: '/lion-order/lion-eyes.jpg', label: 'Spirit' },
            { src: '/lion-order/rohan-portrait.jpg', label: 'Portrait' },
          ].map((img) => (
            <div key={img.label} className="relative aspect-[3/4] overflow-hidden border border-[var(--line)]">
              <Image src={img.src} alt={img.label} fill className="object-cover" sizes="(max-width: 768px) 50vw, 200px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0805]/80 to-transparent" />
              <p className="absolute bottom-3 left-3 text-[9px] tracking-[0.2em] uppercase text-[var(--cream)]">{img.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ CONNECTED PROPERTIES ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4 text-center">Connected Properties</p>
        <p className="text-[var(--dim)] text-xs font-light leading-[1.8] text-center max-w-[280px] mx-auto mb-6">
          Every property carries the Marley standard. Owned, licensed, or heritage — all under the same roof.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(statusLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: statusColors[key] }} />
              <span className="text-[var(--dim)] text-[9px] tracking-[0.15em] uppercase">{label}</span>
            </div>
          ))}
        </div>

        {/* Grouped directory */}
        {groups.map((g) => {
          const links = brandLinks.filter((l) => l.category === g.category);
          return (
            <div key={g.category} className="mb-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3">{g.label}</p>
              <div className="space-y-1">
                {links.map((l) => (
                  <a
                    key={l.id}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 border-b border-[var(--line)] group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: statusColors[l.status] }} />
                      <div className="min-w-0">
                        <span className="text-[var(--cream)] text-sm font-light group-hover:text-[var(--gold)] transition-colors block truncate">
                          {l.name}
                        </span>
                        {l.handle && (
                          <span className="text-[var(--dim)] text-[10px]">{l.handle}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      {l.metric && <span className="text-[var(--dim)] text-[9px]">{l.metric}</span>}
                      <ArrowUpRight size={12} className="text-[var(--dim)] group-hover:text-[var(--gold)] transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <footer className="px-8 pb-12 text-center">
        <div className="gold-rule mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; The Brand
        </p>
      </footer>
    </div>
  );
}
