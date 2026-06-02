'use client';

import { useState, useEffect } from 'react';
import { X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { buttonClick } from '@/lib/tracking';

export default function SlideInCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('mh-slidein-shown')) return;

    let triggered = false;

    const timer = setTimeout(() => {
      if (!triggered) {
        triggered = true;
        sessionStorage.setItem('mh-slidein-shown', '1');
        setShow(true);
      }
    }, 14000);

    const scrollHandler = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.5 && !triggered) {
        triggered = true;
        sessionStorage.setItem('mh-slidein-shown', '1');
        setShow(true);
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  function dismiss() {
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: '110%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '110%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-20 right-3 z-[70] w-64 bg-[var(--bg)] border border-[var(--line)] rounded-xl p-4 shadow-xl shadow-black/30 md:right-auto md:left-1/2 md:-translate-x-1/2 md:bottom-24 md:w-72"
        >
          <button onClick={dismiss} className="absolute top-2 right-2 p-1">
            <X size={14} className="text-[var(--dim)]" />
          </button>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--room-coffee)]/15 flex items-center justify-center shrink-0">
              <Coffee size={16} className="text-[var(--room-coffee)]" />
            </div>
            <div>
              <p className="font-display text-sm text-[var(--cream)] font-light">
                Find your blend
              </p>
              <p className="text-[var(--dim)] text-[10px] font-light mt-0.5">
                60-second quiz &mdash; matched to your morning
              </p>
            </div>
          </div>

          <Link
            href="/coffee"
            onClick={() => { buttonClick('slide_in_quiz', 'slide_in'); dismiss(); }}
            className="block mt-3 w-full text-center text-[10px] tracking-wider uppercase bg-[var(--room-coffee)] text-[var(--bg)] px-4 py-2 rounded-full font-medium"
          >
            Take the Quiz
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
