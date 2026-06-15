'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState(true); // default true so SSR doesn't flash
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('lion-order-age');
    if (stored === '1') {
      setVerified(true);
    } else {
      setVerified(false);
    }
    setChecked(true);
  }, []);

  function confirm() {
    sessionStorage.setItem('lion-order-age', '1');
    setVerified(true);
  }

  if (!checked) return null;

  return (
    <>
      <AnimatePresence>
        {!verified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#0B0805]/98 backdrop-blur-sm"
          >
            <div className="text-center px-8 max-w-[320px]">
              <Image
                src="/brand/lion-crest-icon.png"
                alt="Lion Order"
                width={48}
                height={48}
                className="mx-auto mb-8 opacity-60"
              />

              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
                Age Verification
              </p>

              <p className="text-[var(--cream)] font-display text-lg italic mb-6 leading-[1.5]">
                This content involves plant medicine.
              </p>

              <p className="text-[var(--dim)] text-xs font-light leading-[1.8] mb-8">
                You must be of legal age in your jurisdiction to view this content.
              </p>

              <button
                onClick={confirm}
                className="w-full border border-[var(--gold)]/30 text-[var(--gold)] text-[11px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-[var(--gold)]/5 transition-colors mb-3"
              >
                I am of legal age
              </button>

              <p className="text-[var(--dim)] text-[8px] tracking-[0.15em] uppercase opacity-50">
                Lion Order &middot; Compliant Access
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
