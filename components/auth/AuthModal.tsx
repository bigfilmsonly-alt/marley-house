'use client';

import { useState } from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '@/lib/tracking';
import { useFocusTrap } from '@/lib/useFocusTrap';

type AuthMode = 'login' | 'signup';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
}

export default function AuthModal({ open, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const trapRef = useFocusTrap(open);

  function handleSubmit() {
    if (!email.includes('@')) return;
    trackEvent('auth_magic_link', { mode, email });
    setSent(true);
  }

  function handleClose() {
    onClose();
    setTimeout(() => { setSent(false); setEmail(''); setMode(initialMode); }, 300);
  }

  function toggleMode() {
    const next = mode === 'login' ? 'signup' : 'login';
    setMode(next);
    setSent(false);
    trackEvent('auth_mode_switch', { to: next });
  }

  const title = mode === 'login' ? 'Welcome Back' : 'Create Account';
  const subtitle = mode === 'login'
    ? 'Sign in to access your account.'
    : 'Join The Marley Group to unlock your membership.';

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            ref={trapRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => { if (info.offset.y > 100) handleClose(); }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-[61] bg-[var(--bg)] border-t border-[var(--line)] rounded-t-3xl md:left-1/2 md:-translate-x-1/2 md:max-w-[420px]"
          >
            <div className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing">
              <div className="w-10 h-1 rounded-full bg-[var(--dim)]/30" />
            </div>

            <div className="px-6 pb-8">
              <div className="flex justify-end mb-2">
                <button onClick={handleClose} aria-label="Close" className="p-1">
                  <X size={18} className="text-[var(--dim)]" />
                </button>
              </div>

              {!sent ? (
                <div className="text-center">
                  <Mail size={24} className="text-[var(--gold)] mx-auto mb-3" />
                  <h3 className="font-display text-xl text-[var(--cream)] font-light mb-1">{title}</h3>
                  <p className="text-[var(--dim)] text-sm font-light leading-relaxed mb-5">{subtitle}</p>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="your@email.com"
                    className="w-full bg-[var(--panel)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/50 outline-none mb-3"
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[var(--gold)] text-[var(--bg)] py-3 rounded-xl text-sm font-medium tracking-wide flex items-center justify-center gap-2"
                  >
                    Continue with Email <ArrowRight size={14} />
                  </button>

                  <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-[var(--line)]" />
                    <span className="text-[var(--dim)] text-[10px] uppercase tracking-wider">or</span>
                    <div className="flex-1 h-px bg-[var(--line)]" />
                  </div>

                  <button
                    onClick={() => trackEvent('auth_google', { mode })}
                    className="w-full border border-[var(--line)] text-[var(--cream)] py-3 rounded-xl text-sm font-medium tracking-wide hover:bg-[var(--panel)] transition-colors"
                  >
                    Continue with Google
                  </button>

                  <p className="text-[var(--dim)] text-xs mt-5">
                    {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button onClick={toggleMode} className="text-[var(--gold)] underline underline-offset-2">
                      {mode === 'login' ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </div>
              ) : (
                <div className="text-center py-6">
                  <h3 className="font-display text-2xl text-[var(--gold)] font-light mb-2">
                    Check your email
                  </h3>
                  <p className="text-[var(--dim)] text-sm font-light leading-relaxed mb-1">
                    We sent a magic link to <span className="text-[var(--cream)]">{email}</span>
                  </p>
                  <p className="text-[var(--dim)] text-xs">Click the link to sign in. It expires in 10 minutes.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-5 text-xs tracking-wider uppercase text-[var(--gold)] bg-[var(--gold)]/10 px-5 py-2 rounded-full border border-[var(--gold)]/20"
                  >
                    Try a different email
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
