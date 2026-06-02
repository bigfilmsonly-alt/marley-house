'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { enterApp } from '@/lib/tracking';

type Stage = 'welcome' | 'monogram' | 'done';

export default function Threshold() {
  const [stage, setStage] = useState<Stage>('done');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = sessionStorage.getItem('marley-threshold');
    if (!seen) setStage('welcome');
  }, []);

  const goToMonogram = useCallback(() => {
    if (stage !== 'welcome') return;
    setStage('monogram');
  }, [stage]);

  const finish = useCallback(() => {
    setStage('done');
    sessionStorage.setItem('marley-threshold', '1');
    enterApp();
  }, []);

  // Auto-advance welcome → monogram after 7s
  useEffect(() => {
    if (stage !== 'welcome') return;
    const timer = setTimeout(goToMonogram, 7000);
    return () => clearTimeout(timer);
  }, [stage, goToMonogram]);

  // Auto-advance monogram → done after 3s
  useEffect(() => {
    if (stage !== 'monogram') return;
    const timer = setTimeout(finish, 3000);
    return () => clearTimeout(timer);
  }, [stage, finish]);

  if (stage === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{ background: '#0b0805' }}
    >
      {/* STAGE 1: Welcome — lion + signature */}
      <AnimatePresence mode="wait">
        {stage === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={goToMonogram}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <Image
                src="/brand/lion-head-gold.png"
                alt="Lion Order"
                width={320}
                height={320}
                className="w-[100vw] max-w-[500px] h-auto"
                priority
              />
              <Image
                src="/brand/rohan-signature.png"
                alt="Rohan Marley Signature"
                width={140}
                height={50}
                className="mt-10 w-[220px] h-auto opacity-90 mx-auto brightness-125"
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

        {/* STAGE 2: R-M monogram — sits for 3 seconds */}
        {stage === 'monogram' && (
          <motion.div
            key="monogram"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
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
    </div>
  );
}
