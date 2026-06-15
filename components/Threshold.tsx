'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { enterApp } from '@/lib/tracking';

const iveEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];
const springSettle: [number, number, number, number] = [0.22, 0.68, 0.36, 1.0];
const matDecel: [number, number, number, number] = [0.4, 0.0, 0.2, 1.0];

const slides = [
  { src: '/brand/lion-head-new.jpg', alt: 'Lion Order', size: 'w-[95vw] max-w-[460px]', hold: 4000, signature: true },
  { src: '/brand/marley-enterprise.png', alt: 'Marley Enterprise', size: 'w-[80vw] max-w-[360px]', hold: 2500, signature: false },
  { src: '/brand/lion-head-gold.png', alt: 'Lion Order', size: 'w-[85vw] max-w-[380px]', hold: 2500, signature: false },
  { src: '/brand/lion-crest-clean.png', alt: 'Lion Order Crest', size: 'w-[80vw] max-w-[360px]', hold: 2500, signature: false },
  { src: '/brand/rhr-monogram-transparent.png', alt: 'R-M', size: 'w-[85vw] max-w-[380px]', hold: 3000, signature: false },
];

export default function Threshold() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = sessionStorage.getItem('marley-threshold');
    if (seen) setActive(false);
  }, []);

  const advance = useCallback(() => {
    setIndex((i) => {
      if (i < slides.length - 1) return i + 1;
      sessionStorage.setItem('marley-threshold', '1');
      enterApp();
      setActive(false);
      return i;
    });
  }, []);

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(advance, slides[index].hold);
    return () => clearTimeout(timer);
  }, [active, index, advance]);

  if (!active) return null;

  const slide = slides[index];

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      style={{ background: '#0B0805' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: iveEase }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: iveEase }}
          onClick={advance}
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 2.5, ease: springSettle }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={500}
              height={500}
              className={`${slide.size} h-auto`}
              priority
            />
          </motion.div>

          {slide.signature && (
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
          )}

          {index === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2.5, duration: 1.5 }}
              className="absolute bottom-16 text-[var(--gold)]/40 text-[10px] font-light tracking-[0.5em] uppercase"
              style={{ textShadow: '0 0 12px rgba(246, 200, 0, 0.4), 0 0 24px rgba(246, 200, 0, 0.2)' }}
            >
              Enter
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
