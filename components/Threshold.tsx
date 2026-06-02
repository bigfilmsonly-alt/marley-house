'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Threshold() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = sessionStorage.getItem('marley-threshold');
    if (!seen) {
      setVisible(true);
    }
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
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={enter}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer"
          style={{ background: 'linear-gradient(160deg, #F7F4ED 0%, #FFF9E6 50%, #F7F4ED 100%)' }}
        >
          {/* Rasta stripe at top */}
          <div className="absolute top-0 left-0 right-0 rasta-stripe-thick" />

          {/* Ambient glow */}
          <div className="absolute w-96 h-96 rounded-full blur-[140px] opacity-[0.15]"
            style={{ background: 'radial-gradient(circle, #FED100, #009B3A)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-center flex flex-col items-center"
          >
            {/* Marley Coffee Lion Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <Image
                src="/marley-logo.png"
                alt="Marley Coffee"
                width={90}
                height={90}
              />
            </motion.div>

            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--green)] mb-4 font-semibold">
              Welcome to
            </p>
            <h1 className="font-display text-5xl text-[var(--cream)] font-light tracking-tight mb-2">
              Marley House
            </h1>

            {/* Mini rasta stripe */}
            <div className="w-20 rasta-stripe my-4" />

            <p className="font-display text-base text-[var(--dim)] font-light italic">
              Coffee is the invitation
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-24 text-[var(--dim)] text-xs font-light tracking-wide"
          >
            Tap to enter
          </motion.p>

          {/* Rasta stripe at bottom */}
          <div className="absolute bottom-0 left-0 right-0 rasta-stripe-thick" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
