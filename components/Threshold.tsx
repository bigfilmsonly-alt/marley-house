'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { enterApp } from '@/lib/tracking';

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
    enterApp();
  }

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(enter, 7000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={enter}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer"
          style={{ background: '#0b0805' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/brand/lion-head-gold.png"
              alt="Lion Order"
              width={320}
              height={320}
              className="w-[70vw] max-w-[320px] h-auto"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 2.5, duration: 1.5 }}
            className="absolute bottom-16 text-[var(--dim)] text-[10px] font-light tracking-[0.5em] uppercase"
          >
            Enter
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
