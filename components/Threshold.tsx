'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { enterApp } from '@/lib/tracking';

type Stage = 'lion' | 'kingclem' | 'kingclem2' | 'sketch' | 'crest' | 'monogram' | 'done';

const iveEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];
const iveSlow: [number, number, number, number] = [0.16, 0.6, 0.3, 1.0];
const springSettle: [number, number, number, number] = [0.22, 0.68, 0.36, 1.0];
const matDecel: [number, number, number, number] = [0.4, 0.0, 0.2, 1.0];

/* ── The cinematic sequence ── */
const slides: { id: Stage; src: string; alt: string; hold: number; size: string }[] = [
  { id: 'lion', src: '/brand/lion-head-new.jpg', alt: 'Lion Order', hold: 5000, size: 'w-[90vw] max-w-[420px]' },
  { id: 'kingclem', src: '/brand/king-clem-welcome.png', alt: 'King Clementine', hold: 3000, size: 'w-[70vw] max-w-[340px]' },
  { id: 'kingclem2', src: '/brand/welcome-slide-4.png', alt: 'King Clementine V2', hold: 3000, size: 'w-[70vw] max-w-[340px]' },
  { id: 'sketch', src: '/brand/welcome-slide-3.png', alt: 'The Movement', hold: 3000, size: 'w-[80vw] max-w-[380px]' },
  { id: 'product', src: '/brand/welcome-slide-5.jpg', alt: 'Lion Order — Flower to the People', hold: 3000, size: 'w-[65vw] max-w-[300px]' },
  { id: 'crest', src: '/brand/welcome-slide-1.jpg', alt: 'Royal Crest', hold: 3000, size: 'w-[65vw] max-w-[300px]' },
  { id: 'monogram', src: '/brand/rhr-monogram-transparent.png', alt: 'R-M', hold: 4000, size: 'w-[70vw] max-w-[280px]' },
];

export default function Threshold() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [started, setStarted] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = sessionStorage.getItem('marley-threshold');
    if (seen) {
      setStarted(false);
    }
  }, []);

  const currentSlide = slides[slideIndex];
  const isFirstSlide = slideIndex === 0;
  const isLastSlide = slideIndex === slides.length - 1;

  const advance = useCallback(() => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex((i) => i + 1);
    } else {
      setStarted(false);
      sessionStorage.setItem('marley-threshold', '1');
      enterApp();
    }
  }, [slideIndex]);

  // Auto-advance timer for current slide
  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(advance, currentSlide.hold);
    return () => clearTimeout(timer);
  }, [started, slideIndex, advance, currentSlide.hold]);

  if (!started) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      style={{ background: '#0b0805' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: iveEase }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
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
              src={currentSlide.src}
              alt={currentSlide.alt}
              width={500}
              height={500}
              className={`${currentSlide.size} h-auto`}
              priority
            />
          </motion.div>

          {/* Rohan signature — only on the first slide (lion) */}
          {isFirstSlide && (
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
          )}

          {/* "Enter" — only on the first slide */}
          {isFirstSlide && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2.5, duration: 2 }}
              className="absolute bottom-16 text-[var(--dim)] text-[10px] font-light tracking-[0.5em] uppercase"
            >
              Enter
            </motion.p>
          )}

          {/* Slide indicator dots */}
          <div className="absolute bottom-8 flex gap-1.5">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  i === slideIndex ? 'bg-[#E8C23A] w-3' : 'bg-[#b8a87f]/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
