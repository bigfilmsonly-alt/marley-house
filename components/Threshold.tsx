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
          style={{ background: '#0A0A0A' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-center flex flex-col items-center"
          >
            <Image
              src="/brand/lion-order-crest.png"
              alt="Lion Order"
              width={80}
              height={80}
              className="mb-8 opacity-70"
            />

            <p className="text-[#D4AF37] text-[9px] tracking-[0.6em] uppercase font-light mb-10">
              Lion Order
            </p>

            <h1 className="text-[#F4F1E8] font-display text-2xl font-light tracking-[0.15em] uppercase mb-3">
              Flower to<br />the People
            </h1>

            <div className="w-8 h-px bg-[#D4AF37]/30 my-6" />

            <p className="text-[#5C5549] text-[10px] font-light tracking-[0.12em]">
              Est. 2022
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 3, duration: 1.5 }}
            className="absolute bottom-16 text-[#5C5549] text-[9px] font-light tracking-[0.4em] uppercase"
          >
            Enter
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
