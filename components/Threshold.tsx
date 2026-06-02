'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Threshold() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = sessionStorage.getItem('marley-threshold');
    if (!seen) setVisible(true);
  }, []);

  function enter() {
    setVisible(false);
    sessionStorage.setItem('marley-threshold', '1');
  }

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(enter, 6000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={enter}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer lion-bg"
          style={{ background: 'var(--bg)' }}
        >
          {/* Gold rule top */}
          <div className="absolute top-0 left-0 right-0 rasta-stripe-thick" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-center flex flex-col items-center"
          >
            {/* RHR Monogram — hero logo */}
            <Image
              src="/rhr-logo-clean.png"
              alt="Rohan Marley"
              width={160}
              height={160}
              className="mb-6 drop-shadow-[0_0_30px_rgba(185,133,36,0.2)]"
              priority
            />

            <h1 className="text-[var(--ink)] text-3xl font-light tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
              Rohan Marley
            </h1>

            {/* Gold rule */}
            <div className="w-12 h-px bg-[var(--gold)] my-5 opacity-50" />

            <p className="text-[var(--dim)] text-[10px] font-light tracking-[0.2em]">
              Find the Lion Within
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-20 text-[var(--dim)] text-[10px] font-light tracking-[0.3em] uppercase"
          >
            Enter
          </motion.p>

          {/* Gold rule bottom */}
          <div className="absolute bottom-0 left-0 right-0 rasta-stripe-thick" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
