'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonClick } from '@/lib/tracking';

export default function StickyHeaderCTA() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  // Only show on non-home routes, after 100px scroll
  const isHome = pathname === '/';

  useEffect(() => {
    if (isHome) { setShow(false); return; }

    const handler = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [isHome]);

  if (isHome) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -48, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-[var(--bg)]/95 backdrop-blur-lg border-b border-[var(--line)] md:left-1/2 md:-translate-x-1/2 md:max-w-[390px] md:rounded-b-xl"
        >
          <div className="flex items-center justify-between px-4 py-2.5">
            <span className="font-display text-xs text-[var(--cream)] italic">Marley House</span>
            <div className="flex gap-2">
              <Link
                href="/coffee"
                onClick={() => buttonClick('find_blend', 'sticky_header')}
                className="text-[9px] tracking-wider uppercase bg-[var(--room-coffee)]/15 text-[var(--room-coffee)] px-3 py-1.5 rounded-full border border-[var(--room-coffee)]/20 font-medium"
              >
                Find your blend
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
