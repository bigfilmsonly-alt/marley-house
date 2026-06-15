'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { brandLinks } from '@/content/links';
import { joinHouse, trackEvent } from '@/lib/tracking';

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

const groups: { label: string; category: string }[] = [
  { label: 'Rohan Marley', category: 'rohan' },
  { label: 'Marley Coffee', category: 'coffee' },
  { label: 'Lion Order & Ventures', category: 'ventures' },
  { label: 'Music & Heritage', category: 'music' },
];

export default function ConnectPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'connect' }),
      });
      if (res.ok) {
        setSubmitted(true);
        joinHouse('connect');
      }
    } finally {
      setLoading(false);
    }
  }

  function handleLinkOut(name: string, url: string) {
    trackEvent('linkOut', { name, url });
  }

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════ HEADER ═══════ */}
      <section className="px-8 pt-16 pb-14 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">Connect</p>
        <h1 className="font-display text-[clamp(1.8rem,7vw,2.8rem)] leading-[1.1] tracking-[0.04em] uppercase text-[var(--cream)] mb-6">
          Under the<br /><span className="italic font-normal">Same Roof</span>
        </h1>
        <div className="gold-rule w-10 mx-auto mb-8" />
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[300px] mx-auto mb-8">
          Every property carries the Marley standard. Owned, licensed, or heritage — all under the same roof. {brandLinks.length} links, all verified.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(statusLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: statusColors[key] }} />
              <span className="text-[var(--dim)] text-[9px] tracking-[0.15em] uppercase">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ DIRECTORY ═══════ */}
      <section className="px-6 py-14">
        {groups.map((g) => {
          const links = brandLinks.filter((l) => l.category === g.category);
          if (links.length === 0) return null;
          return (
            <div key={g.category} className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">{g.label}</p>
                <p className="text-[var(--dim)] text-[9px]">{links.length}</p>
              </div>
              <div className="space-y-0">
                {links.map((l) => (
                  <a
                    key={l.id}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleLinkOut(l.name, l.url)}
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
                      {l.metric && <span className="text-[var(--dim)] text-[9px] hidden sm:inline">{l.metric}</span>}
                      <ArrowUpRight size={12} className="text-[var(--dim)] group-hover:text-[var(--gold)] transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ SIGNATURE ═══════ */}
      <section className="px-8 py-14 text-center">
        <Image
          src="/brand/rohan-signature.png"
          alt="Rohan Marley signature"
          width={160}
          height={50}
          className="mx-auto opacity-50 mb-4"
        />
        <p className="text-[var(--dim)] text-[9px] tracking-[0.2em] uppercase">
          Rohan Marley
        </p>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ JOIN THE HOUSE ═══════ */}
      <section className="px-8 py-14 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Join the House</p>
        <p className="text-[var(--dim)] text-xs font-light leading-[1.8] max-w-[260px] mx-auto mb-8">
          No incentives. No noise. Just the inner circle.
        </p>

        {submitted ? (
          <div>
            <p className="text-[var(--gold)] text-sm font-display italic mb-3">Welcome to the House.</p>
            <p className="text-[var(--dim)] text-xs font-light">Check your inbox for a welcome note.</p>
          </div>
        ) : (
          <form onSubmit={handleJoin} className="max-w-[300px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-sm font-light placeholder:text-[var(--dim)]/50 focus:outline-none focus:border-[var(--gold)]/40 mb-3"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full border border-[var(--gold)]/30 text-[var(--gold)] text-[11px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-[var(--gold)]/5 transition-colors disabled:opacity-50"
            >
              {loading ? '...' : 'Enter'}
            </button>
            <p className="text-[var(--dim)] text-[8px] mt-4 opacity-50">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        )}
      </section>

      <footer className="px-8 pb-12 text-center">
        <div className="gold-rule mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; The Maison
        </p>
      </footer>
    </div>
  );
}
