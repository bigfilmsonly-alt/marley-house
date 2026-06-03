'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { enterApp } from '@/lib/tracking';

type Stage = 'lion' | 'crests' | 'monogram' | 'done';

const iveEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];
const springSettle: [number, number, number, number] = [0.22, 0.68, 0.36, 1.0];
const matDecel: [number, number, number, number] = [0.4, 0.0, 0.2, 1.0];

export default function Threshold() {
  const [stage, setStage] = useState<Stage>('lion');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = sessionStorage.getItem('marley-threshold');
    if (seen) setStage('done');
  }, []);

  const advance = useCallback(() => {
    setStage((s) => {
      if (s === 'lion') return 'crests';
      if (s === 'crests') return 'monogram';
      if (s === 'monogram') {
        sessionStorage.setItem('marley-threshold', '1');
        enterApp();
        return 'done';
      }
      return 'done';
    });
  }, []);

  // Auto-advance timers
  useEffect(() => {
    if (stage === 'done') return;
    const hold = stage === 'lion' ? 5000 : stage === 'crests' ? 3500 : 4000;
    const timer = setTimeout(advance, hold);
    return () => clearTimeout(timer);
  }, [stage, advance]);

  if (stage === 'done') return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      style={{ background: '#0b0805' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: iveEase }}
    >
      <AnimatePresence mode="sync">

        {/* STAGE 1: Gold lion head + Rohan signature */}
        {stage === 'lion' && (
          <motion.div
            key="lion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: iveEase }}
            onClick={advance}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 2.5, ease: springSettle }}
            >
              <Image
                src="/brand/lion-head-new.jpg"
                alt="Lion Order"
                width={500}
                height={500}
                className="w-[85vw] max-w-[400px] h-auto"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: iveEase }}
            >
              <Image
                src="/brand/rohan-signature.png"
                alt="Rohan Marley"
                width={180}
                height={60}
                className="mt-8 opacity-80 brightness-125"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2.5, duration: 1.5 }}
              className="absolute bottom-16 text-white/40 text-[10px] font-light tracking-[0.5em] uppercase"
            >
              Enter
            </motion.p>
          </motion.div>
        )}

        {/* STAGE 2: The three footer crests side by side */}
        {stage === 'crests' && (
          <motion.div
            key="crests"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: iveEase }}
            onClick={advance}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 2, ease: springSettle }}
              className="flex items-center justify-center gap-4"
            >
              <Image
                src="/brand/marley-enterprise.png"
                alt="Marley Enterprise"
                width={100}
                height={100}
                className="brightness-125"
              />
              <Image
                src="/brand/lion-head-gold.png"
                alt="Lion Order"
                width={120}
                height={120}
                className="brightness-125"
              />
              <Image
                src="/brand/lion-crest-clean.png"
                alt="Lion Order Crest"
                width={100}
                height={100}
                className="brightness-125"
              />
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 3: R-M monogram */}
        {stage === 'monogram' && (
          <motion.div
            key="monogram"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.5, ease: matDecel }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 2.5, ease: springSettle }}
            >
              <Image
                src="/brand/rhr-monogram-transparent.png"
                alt="R-M"
                width={240}
                height={240}
                className="w-[70vw] max-w-[280px] h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
}
