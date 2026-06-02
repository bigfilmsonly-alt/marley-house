'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { enterApp } from '@/lib/tracking';

type Stage = 'welcome' | 'monogram' | 'done';

/* Jony Ive ease — slow start, gentle deceleration, feels like gravity */
const iveEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];
const iveSlow: [number, number, number, number] = [0.16, 0.6, 0.3, 1.0];
/* Slow overshoot that settles — spring-like cubic bezier */
const springSettle: [number, number, number, number] = [0.22, 0.68, 0.36, 1.0];
/* Material Design decelerate — for dignified exits */
const matDecel: [number, number, number, number] = [0.4, 0.0, 0.2, 1.0];

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

  useEffect(() => {
    if (stage !== 'welcome') return;
    const timer = setTimeout(goToMonogram, 7000);
    return () => clearTimeout(timer);
  }, [stage, goToMonogram]);

  useEffect(() => {
    if (stage !== 'monogram') return;
    const timer = setTimeout(finish, 4000);
    return () => clearTimeout(timer);
  }, [stage, finish]);

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
        {stage === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: iveEase }}
            onClick={goToMonogram}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 3, ease: iveSlow }}
              >
                <Image
                  src="/brand/lion-head-gold.png"
                  alt="Lion Order"
                  width={320}
                  height={320}
                  className="w-[100vw] max-w-[500px] h-auto"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5, ease: iveEase }}
              >
                <Image
                  src="/brand/rohan-signature.png"
                  alt="Rohan Marley Signature"
                  width={140}
                  height={50}
                  className="mt-10 w-[220px] h-auto opacity-90 mx-auto brightness-125"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2.5, duration: 2 }}
              className="absolute bottom-16 text-[var(--dim)] text-[10px] font-light tracking-[0.5em] uppercase"
            >
              Enter
            </motion.p>
          </motion.div>
        )}

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
