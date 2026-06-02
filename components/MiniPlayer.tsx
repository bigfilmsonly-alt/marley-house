'use client';

import { usePlayer } from './PlayerContext';
import { usePathname } from 'next/navigation';
import { X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MiniPlayer() {
  const { current, stop } = usePlayer();
  const pathname = usePathname();

  // Only show when navigating away from watch tab while something is playing
  const show = current && pathname !== '/watch';

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="flex items-center gap-3 px-4 py-2.5 border-t border-[var(--line)] bg-[var(--bg2)]/95 backdrop-blur-xl"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--ember)]/10 flex items-center justify-center shrink-0">
            <Music size={14} className="text-[var(--ember)]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[var(--cream)] truncate">{current.title}</p>
            <p className="text-[10px] text-[var(--dim)] font-light">Now playing</p>
          </div>
          <button
            onClick={stop}
            className="p-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            <X size={14} className="text-[var(--dim)]" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
