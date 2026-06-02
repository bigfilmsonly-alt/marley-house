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
    const timer = setTimeout(enter, 5000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onClick={enter}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black cursor-pointer"
        >
          {/* Rasta stripe top */}
          <div className="absolute top-0 left-0 right-0 rasta-stripe-thick" />

          {/* Colored glow */}
          <div className="absolute w-80 h-80 rounded-full bg-[var(--ember)] blur-[140px] opacity-[0.12]" />
          <div className="absolute w-60 h-60 rounded-full bg-[var(--ja-gold)] blur-[120px] opacity-[0.06] translate-y-20" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative text-center flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mb-6"
            >
              <Image src="/marley-logo.png" alt="Marley Coffee" width={90} height={90} className="invert" />
            </motion.div>

            <h1 className="font-display text-5xl text-white font-light tracking-tight mb-1">
              Marley House
            </h1>

            {/* Rasta mini stripe */}
            <div className="w-16 rasta-stripe my-4" />

            <p className="text-[var(--dim)] text-sm font-light">
              Coffee &middot; Music &middot; Legacy
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-20 text-[var(--dim)] text-xs font-light tracking-widest uppercase"
          >
            Tap to enter
          </motion.p>

          {/* Rasta stripe bottom */}
          <div className="absolute bottom-0 left-0 right-0 rasta-stripe-thick" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
