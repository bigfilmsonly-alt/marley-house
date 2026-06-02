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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-start cursor-pointer overflow-hidden"
          style={{ background: '#EFC11F' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full"
          >
            <div className="relative w-full" style={{ height: '65vh' }}>
              <Image
                src="/lion-order/lion-eyes.jpg"
                alt="Lion Order"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center mt-6 flex flex-col items-center">
              <p className="text-[#1c1810] text-[11px] tracking-[0.5em] uppercase font-medium mb-4">
                Lion Order
              </p>

              <div className="w-10 h-px bg-[#1c1810]/20 mb-4" />

              <p className="text-[#1c1810]/50 text-[9px] tracking-[0.3em] uppercase font-light">
                Est. 2022
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.5 }}
            className="absolute bottom-16 text-[#1c1810] text-[11px] font-light tracking-[0.5em] uppercase"
          >
            Enter
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
