'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { bookInquiry } from '@/lib/tracking';

const TYPES = ['wholesale', 'press', 'partnership'] as const;
const TYPE_LABELS: Record<string, string> = {
  wholesale: 'Wholesale',
  press: 'Press / Media',
  partnership: 'Partnership',
};

interface WholesaleFormProps {
  onDone: () => void;
}

export default function WholesaleForm({ onDone }: WholesaleFormProps) {
  const [step, setStep] = useState(0);
  const [type, setType] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState('');
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  async function submit() {
    if (!name || !email.includes('@') || !type) return;
    setSending(true);
    bookInquiry(type);

    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, type, volume, message }),
      });
    } catch { /* graceful */ }

    setSending(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 rounded-full bg-[var(--green)]/15 flex items-center justify-center mx-auto mb-3">
          <Check size={20} className="text-[var(--green)]" />
        </div>
        <h3 className="font-display text-xl text-[var(--cream)] font-light mb-2">Inquiry sent.</h3>
        <p className="text-[var(--dim)] text-sm font-light mb-4">
          We will be in touch shortly. Check your email for a confirmation with a link to book a call.
        </p>
        <button onClick={onDone} className="text-xs tracking-wider uppercase text-[var(--gold)] bg-[var(--gold)]/10 px-5 py-2 rounded-full border border-[var(--gold)]/20">
          Done
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-1 font-medium">
        Get in Touch
      </p>
      <h3 className="font-display text-xl text-[var(--cream)] font-light mb-5">
        Wholesale &middot; Press &middot; Partnership
      </h3>

      {/* Step 0: Type */}
      {step === 0 && (
        <div className="space-y-2">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => { setType(t); setStep(1); }}
              className="w-full text-left rounded-xl border border-[var(--line)] bg-[var(--bg2)] p-4 text-sm text-[var(--cream)] font-light hover:border-[var(--gold)]/30 transition-colors flex items-center justify-between"
            >
              {TYPE_LABELS[t]}
              <ArrowRight size={14} className="text-[var(--dim)]" />
            </button>
          ))}
        </div>
      )}

      {/* Step 1: Contact info */}
      {step === 1 && (
        <div className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-[var(--bg2)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-[var(--bg2)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none"
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company (optional)"
            className="w-full bg-[var(--bg2)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none"
          />
          <button
            onClick={() => name && email.includes('@') && setStep(2)}
            disabled={!name || !email.includes('@')}
            className="w-full bg-[var(--gold)] text-[var(--bg)] py-3 rounded-xl text-sm font-medium tracking-wide disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}

      {/* Step 2: Details */}
      {step === 2 && (
        <div className="space-y-3">
          {type === 'wholesale' && (
            <input
              type="text"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Estimated volume (e.g. 500 units/month)"
              className="w-full bg-[var(--bg2)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none"
            />
          )}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us more (optional)"
            rows={3}
            className="w-full bg-[var(--bg2)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none resize-none"
          />
          <button
            onClick={submit}
            disabled={sending}
            className="w-full bg-[var(--gold)] text-[var(--bg)] py-3 rounded-xl text-sm font-medium tracking-wide disabled:opacity-60"
          >
            {sending ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </div>
      )}

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mt-5">
        {[0, 1, 2].map((s) => (
          <div
            key={s}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{ background: s <= step ? 'var(--gold)' : 'var(--line)' }}
          />
        ))}
      </div>
    </div>
  );
}
