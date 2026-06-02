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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer"
          style={{ background: '#14110c' }}
        >
          {/* Gold rule top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4a049] to-transparent opacity-40" />

          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-center flex flex-col items-center"
          >
            <Image src="/rhr-logo.png" alt="R-M Monogram" width={100} height={100} className="invert opacity-90 mb-8" />

            <p className="text-[#c4a049] text-[10px] tracking-[0.5em] uppercase font-light mb-3">
              The Maison of
            </p>
            <h1 className="text-[#efe8d8] text-3xl font-light tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
              Rohan Marley
            </h1>

            {/* Gold rule */}
            <div className="w-12 h-px bg-[#c4a049] my-6 opacity-50" />

            <p className="text-[#6B6358] text-xs font-light tracking-[0.15em] uppercase">
              rohanmarley.com
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-20 text-[#6B6358] text-[10px] font-light tracking-[0.3em] uppercase"
          >
            Enter the Maison
          </motion.p>

          {/* Gold rule bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4a049] to-transparent opacity-40" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
