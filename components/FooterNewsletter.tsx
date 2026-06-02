'use client';

import { useState } from 'react';
import { joinHouse } from '@/lib/tracking';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function submit() {
    if (!email.includes('@')) return;
    joinHouse('footer');

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
      });
    } catch { /* graceful */ }

    setSubmitted(true);
  }

  return (
    <div className="px-6 pb-6">
      <div className="rounded-xl border border-[var(--line)] bg-[var(--bg2)] p-5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold-deep)] mb-2 font-medium">
          Stay Connected
        </p>

        {!submitted ? (
          <>
            <p className="text-[var(--dim)] text-xs font-light mb-3">
              Daily drops &middot; stories &middot; first access to the House.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submit()}
                placeholder="your@email.com"
                className="flex-1 bg-[var(--bg)] border border-[var(--line)] rounded-lg px-3 py-2 text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none"
              />
              <button
                onClick={submit}
                className="shrink-0 bg-[var(--gold)] text-[var(--bg)] px-4 py-2 rounded-lg text-sm font-medium"
              >
                Join
              </button>
            </div>
            <p className="text-[var(--dim)] text-[9px] mt-2 font-light">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <p className="text-[var(--gold)] text-sm font-light">
            Welcome home. Your first drop is on its way.
          </p>
        )}
      </div>
    </div>
  );
}
