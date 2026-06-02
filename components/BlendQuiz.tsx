'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Coffee, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QUIZ = [
  { q: 'How does your morning start?', a: [
    { t: 'Slow and gentle', score: 1 },
    { t: 'Steady and focused', score: 2 },
    { t: 'Full force, no mercy', score: 3 },
    { t: 'No caffeine for me', score: 0 },
  ]},
  { q: 'Pick your flavor lean.', a: [
    { t: 'Bright & nutty', score: 1 },
    { t: 'Smooth & balanced', score: 2 },
    { t: 'Rich chocolate', score: 3 },
    { t: 'Bold & dark', score: 4 },
  ]},
  { q: 'How deep do you go?', a: [
    { t: 'Keep it easy', score: 1 },
    { t: 'Everyday ritual', score: 2 },
    { t: 'I want the best cup, period', score: 5 },
    { t: 'Strong as it gets', score: 4 },
  ]},
];

interface Blend {
  name: string;
  roast: string;
  note: string;
  image?: string;
}

const BLENDS: Blend[] = [
  { name: 'Simmer Down', roast: 'Decaf · Swiss Water', note: 'All the ritual, none of the caffeine.', image: '/products/simmer-down.webp' },
  { name: 'Get Up, Stand Up', roast: 'Light Roast', note: 'Bright, nutty, caramel. The gentle sunrise.', image: '/products/get-up-stand-up.webp' },
  { name: 'One Love', roast: 'Medium · 100% Ethiopian', note: 'Smooth, balanced, exotic. The crowd-pleaser.' },
  { name: 'Buffalo Soldier', roast: 'Medium-Dark', note: 'Rich and full-bodied with dark chocolate.', image: '/products/buffalo-soldier.webp' },
  { name: 'Lively Up', roast: 'Dark Roast', note: 'Bold, chocolate, subtle citrus. Full force.', image: '/products/lively-up.webp' },
  { name: 'Jamaican Blue Mountain', roast: 'Premium Single Origin', note: 'The rarest cup in the house.' },
];

function pickBlend(answers: number[]): Blend {
  if (answers[0] === 0) return BLENDS[0];
  const sum = answers.reduce((a, b) => a + b, 0);
  if (sum >= 11) return BLENDS[5];
  if (sum >= 9) return BLENDS[4];
  if (sum >= 7) return BLENDS[3];
  if (sum >= 5) return BLENDS[2];
  return BLENDS[1];
}

interface BlendQuizProps {
  open: boolean;
  onClose: () => void;
}

export default function BlendQuiz({ open, onClose }: BlendQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<Blend | null>(null);

  function reset() {
    setStep(0);
    setAnswers([]);
    setResult(null);
  }

  function answer(score: number) {
    const next = [...answers, score];
    if (next.length >= QUIZ.length) {
      setAnswers(next);
      setResult(pickBlend(next));
    } else {
      setAnswers(next);
      setStep(step + 1);
    }
  }

  function handleClose() {
    onClose();
    setTimeout(reset, 300);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg)] border-t border-[var(--line)] rounded-t-3xl max-h-[85vh] overflow-y-auto md:left-1/2 md:-translate-x-1/2 md:max-w-[390px]"
          >
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-[var(--dim)]/30" />
            </div>

            <div className="px-6 pb-8">
              <div className="flex justify-end mb-2">
                <button onClick={handleClose} className="p-1"><X size={18} className="text-[var(--dim)]" /></button>
              </div>

              {!result ? (
                <>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-1 font-medium">
                    Find Your Blend &middot; {step + 1} / {QUIZ.length}
                  </p>

                  {/* Progress bar */}
                  <div className="flex gap-1 mb-6">
                    {QUIZ.map((_, i) => (
                      <div
                        key={i}
                        className="h-0.5 flex-1 rounded-full transition-colors"
                        style={{ background: i <= step ? 'var(--gold)' : 'var(--line)' }}
                      />
                    ))}
                  </div>

                  <h3 className="font-display text-xl text-[var(--cream)] font-light mb-5">
                    {QUIZ[step].q}
                  </h3>

                  <div className="space-y-2.5">
                    {QUIZ[step].a.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => answer(opt.score)}
                        className="w-full text-left rounded-xl border border-[var(--line)] bg-[var(--bg2)] p-4 text-sm text-[var(--cream)] font-light hover:border-[var(--gold)]/30 transition-colors flex items-center justify-between"
                      >
                        {opt.t}
                        <ArrowRight size={14} className="text-[var(--dim)] opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-3 font-medium">
                    Your Blend
                  </p>

                  {result.image && (
                    <div className="w-32 h-32 mx-auto mb-4">
                      <Image src={result.image} alt={result.name} width={128} height={128} className="object-contain drop-shadow-lg" />
                    </div>
                  )}
                  {!result.image && (
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--room-coffee)]/10 flex items-center justify-center">
                      <Coffee size={32} className="text-[var(--room-coffee)] opacity-50" />
                    </div>
                  )}

                  <h3 className="font-display text-2xl text-[var(--cream)] font-light">{result.name}</h3>
                  <p className="text-[var(--gold)] text-xs tracking-wider uppercase mt-1">{result.roast}</p>
                  <p className="text-[var(--dim)] text-sm font-light mt-3 leading-relaxed">{result.note}</p>

                  <button
                    onClick={handleClose}
                    className="mt-6 w-full bg-[var(--gold)] text-[var(--bg)] py-3 rounded-xl text-sm font-medium tracking-wide"
                  >
                    Back to the Store
                  </button>
                  <button
                    onClick={reset}
                    className="mt-2 text-[var(--dim)] text-xs"
                  >
                    Retake quiz
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
