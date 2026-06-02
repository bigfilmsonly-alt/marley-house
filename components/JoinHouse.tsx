'use client';

import { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { joinHouse } from '@/lib/tracking';

interface JoinHouseProps {
  open: boolean;
  onClose: () => void;
  source?: string;
}

export default function JoinHouse({ open, onClose, source = 'hero' }: JoinHouseProps) {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  async function submit() {
    if (!email.includes('@')) return;
    joinHouse(source);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
    } catch { /* graceful fallback */ }

    setJoined(true);
  }

  function handleClose() {
    onClose();
    if (joined) {
      setTimeout(() => { setJoined(false); setEmail(''); }, 300);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-[61] bg-[var(--bg)] border-t border-[var(--line)] rounded-t-3xl md:left-1/2 md:-translate-x-1/2 md:max-w-[390px]"
          >
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-[var(--dim)]/30" />
            </div>

            <div className="px-6 pb-8">
              <div className="flex justify-end mb-2">
                <button onClick={handleClose} className="p-1"><X size={18} className="text-[var(--dim)]" /></button>
              </div>

              {!joined ? (
                <div className="text-center">
                  <Sparkles size={24} className="text-[var(--gold)] mx-auto mb-3" />
                  <h3 className="font-display text-xl text-[var(--cream)] font-light mb-2">
                    Join the House
                  </h3>
                  <p className="text-[var(--dim)] text-sm font-light leading-relaxed mb-5">
                    One daily drop — a story, a lesson, a song. Plus first access to drops and House Sessions.
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
                    Enter the House
                  </button>
                  <p className="text-[var(--dim)] text-[10px] mt-3 font-light">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              ) : (
                <div className="text-center py-6">
                  <h3 className="font-display text-2xl text-[var(--gold)] font-light mb-2">
                    You&apos;re in.
                  </h3>
                  <p className="text-[var(--dim)] text-sm font-light">
                    Welcome home. Your first drop is on its way.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-5 text-xs tracking-wider uppercase text-[var(--gold)] bg-[var(--gold)]/10 px-5 py-2 rounded-full border border-[var(--gold)]/20"
                  >
                    Keep exploring
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
