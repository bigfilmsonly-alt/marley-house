'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { joinHouse } from '@/lib/tracking';

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const trigger = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('mh-exit-shown')) return;
    sessionStorage.setItem('mh-exit-shown', '1');
    setShow(true);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 5) trigger();
    };
    document.addEventListener('mouseout', handler);
    return () => document.removeEventListener('mouseout', handler);
  }, [trigger]);

  async function submit() {
    if (!email.includes('@')) return;
    joinHouse('exit_intent');
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit_intent' }),
      });
    } catch { /* graceful */ }
    setSubmitted(true);
  }

  function close() {
    setShow(false);
    setTimeout(() => { setSubmitted(false); setEmail(''); }, 300);
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[80] backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[81] w-80 bg-[var(--bg)] border border-[var(--line)] rounded-2xl p-6 text-center md:left-1/2"
          >
            <button onClick={close} className="absolute top-3 right-3 p-1">
              <X size={16} className="text-[var(--dim)]" />
            </button>

            {!submitted ? (
              <>
                <Sparkles size={24} className="text-[var(--gold)] mx-auto mb-3" />
                <h3 className="font-display text-xl text-[var(--cream)] font-light mb-2">
                  Before you go&hellip;
                </h3>
                <p className="text-[var(--dim)] text-sm font-light leading-relaxed mb-5">
                  Join the House for daily drops, first access, and stories from every room.
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder="your@email.com"
                  className="w-full bg-[var(--bg2)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none mb-3"
                />
                <button
                  onClick={submit}
                  className="w-full bg-[var(--gold)] text-[var(--bg)] py-3 rounded-xl text-sm font-medium tracking-wide"
                >
                  Join the House
                </button>
                <p className="text-[var(--dim)] text-[10px] mt-3 font-light">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-display text-2xl text-[var(--gold)] font-light mb-2">
                  You&apos;re in.
                </h3>
                <p className="text-[var(--dim)] text-sm font-light">
                  Welcome home.
                </p>
                <button onClick={close} className="mt-4 text-xs tracking-wider uppercase text-[var(--gold)] bg-[var(--gold)]/10 px-5 py-2 rounded-full border border-[var(--gold)]/20">
                  Keep exploring
                </button>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
