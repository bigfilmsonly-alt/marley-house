'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WholesaleForm from './WholesaleForm';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button — mobile only, above tab bar */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-[4.5rem] right-3 z-[55] w-11 h-11 rounded-full bg-[var(--gold)] text-[var(--bg)] flex items-center justify-center shadow-lg shadow-[var(--gold)]/20 md:hidden"
        aria-label="Contact"
      >
        <MessageCircle size={18} />
      </button>

      {/* Wholesale / Partnership form */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[70] backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-[71] bg-[var(--bg)] border-t border-[var(--line)] rounded-t-3xl max-h-[85vh] overflow-y-auto md:left-1/2 md:-translate-x-1/2 md:max-w-[390px]"
            >
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-[var(--dim)]/30" />
              </div>
              <div className="px-6 pb-8">
                <div className="flex justify-end mb-2">
                  <button onClick={() => setOpen(false)} className="p-1">
                    <X size={18} className="text-[var(--dim)]" />
                  </button>
                </div>
                <WholesaleForm onDone={() => setOpen(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
