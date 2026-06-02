'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Coffee, Minus, Plus, X, ShoppingBag, Leaf, TreePine, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BlendQuiz from '@/components/BlendQuiz';

interface Blend {
  id: string;
  name: string;
  roast: string;
  notes: string;
  origin: string;
  price: number;
  badges: string[];
  image?: string;
}

const blends: Blend[] = [
  { id: 'gusup', name: 'Get Up, Stand Up', roast: 'Light', notes: 'Bright, nutty, caramel', origin: 'Blend', price: 16.99, badges: ['Fairtrade Certified', 'One Tree Planted'], image: '/products/get-up-stand-up.webp' },
  { id: 'onelove', name: 'One Love', roast: 'Medium', notes: '100% Ethiopian, balanced, smooth, exotic', origin: 'Ethiopia', price: 17.99, badges: ['Fairtrade Certified', 'One Tree Planted'] },
  { id: 'buffalo', name: 'Buffalo Soldier', roast: 'Medium-Dark', notes: 'Rich, full-bodied, dark chocolate', origin: 'Blend', price: 17.99, badges: ['Fairtrade Certified', 'One Tree Planted'], image: '/products/buffalo-soldier.webp' },
  { id: 'lively', name: 'Lively Up', roast: 'Dark', notes: 'Bold, chocolate, subtle citrus', origin: 'Blend', price: 16.99, badges: ['Fairtrade Certified', 'One Tree Planted'], image: '/products/lively-up.webp' },
  { id: 'simmer', name: 'Simmer Down', roast: 'Decaf (Swiss Water)', notes: 'Balanced, hints of cocoa', origin: 'Blend', price: 18.99, badges: ['Fairtrade Certified', 'Swiss Water Process'], image: '/products/simmer-down.webp' },
  { id: 'mystic', name: 'Mystic Morning', roast: 'Medium', notes: 'Smooth, balanced, legacy blend', origin: 'Blend', price: 16.99, badges: ['Fairtrade Certified'] },
  { id: 'jbm', name: 'Jamaican Blue Mountain', roast: 'Premium Single Origin', notes: 'Rare, smooth, refined complexity', origin: 'Jamaica', price: 42.99, badges: ['Single Origin', 'Premium'] },
];

interface BagItem { blend: Blend; qty: number; }

export default function CoffeePage() {
  const [selected, setSelected] = useState<Blend | null>(null);
  const [bag, setBag] = useState<BagItem[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [checkoutMsg, setCheckoutMsg] = useState(false);
  const [pdpQty, setPdpQty] = useState(1);
  const [quizOpen, setQuizOpen] = useState(false);

  const bagCount = bag.reduce((s, i) => s + i.qty, 0);
  const bagTotal = bag.reduce((s, i) => s + i.blend.price * i.qty, 0);

  function addToBag(blend: Blend, qty: number) {
    setBag((prev) => {
      const existing = prev.find((i) => i.blend.id === blend.id);
      if (existing) {
        return prev.map((i) => i.blend.id === blend.id ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { blend, qty }];
    });
    setSelected(null);
    setPdpQty(1);
  }

  function removeFromBag(id: string) {
    setBag((prev) => prev.filter((i) => i.blend.id !== id));
  }

  const roastLevel = (roast: string) => {
    if (roast.includes('Light')) return 1;
    if (roast.includes('Decaf')) return 2;
    if (roast.includes('Medium-Dark')) return 3;
    if (roast.includes('Medium')) return 2;
    if (roast.includes('Dark')) return 4;
    if (roast.includes('Premium')) return 3;
    return 2;
  };

  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[var(--room-coffee)] blur-[100px] opacity-[0.06] pointer-events-none" />

      {/* Header */}
      <div className="relative px-6 pt-14 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Image src="/marley-logo.png" alt="Marley Coffee" width={20} height={20} className="opacity-70" />
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--room-coffee)] font-medium">
                The Store
              </p>
            </div>
            <h1 className="font-display text-2xl text-[var(--cream)] font-light">
              From Seed to Soul
            </h1>
          </div>
          {bagCount > 0 && (
            <button
              onClick={() => setBagOpen(true)}
              className="relative p-2"
            >
              <ShoppingBag size={20} className="text-[var(--gold)]" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[var(--ember)] text-white text-[9px] flex items-center justify-center font-medium">
                {bagCount}
              </span>
            </button>
          )}
        </div>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <Leaf size={10} className="text-[var(--green)]" />
            <span className="text-[var(--dim)] text-[10px] font-light">Fairtrade Certified</span>
          </div>
          <div className="flex items-center gap-1">
            <TreePine size={10} className="text-[var(--green)]" />
            <span className="text-[var(--dim)] text-[10px] font-light">One Tree Planted</span>
          </div>
        </div>
      </div>

      {/* Coffee Ritual */}
      <div className="px-6 py-4">
        <div className="rounded-xl border border-[var(--room-coffee)]/15 bg-[var(--room-coffee)]/[0.04] p-4">
          <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--room-coffee)] mb-1.5 font-medium">
            The Daily Ritual
          </p>
          <p className="font-display text-sm text-[var(--cream)] font-light italic">
            &ldquo;It is never just coffee. It is the first act of the day &mdash; the one you do before the world asks anything of you.&rdquo;
          </p>
        </div>
      </div>

      {/* Find Your Blend quiz CTA */}
      <div className="px-6 pb-4">
        <button
          onClick={() => setQuizOpen(true)}
          className="w-full rounded-xl border border-[var(--room-coffee)]/20 bg-[var(--room-coffee)]/[0.05] p-4 flex items-center justify-between gap-3 text-left"
        >
          <div>
            <p className="font-display text-sm text-[var(--cream)]">Not sure which to brew?</p>
            <p className="text-[var(--dim)] text-[10px] font-light mt-0.5">60-second quiz — we&apos;ll match your blend</p>
          </div>
          <span className="shrink-0 text-[9px] tracking-wider uppercase bg-[var(--room-coffee)] text-[var(--bg)] px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
            Quiz <ArrowUpRight size={10} />
          </span>
        </button>
      </div>

      {/* Product grid */}
      <div className="px-6 pb-6 grid grid-cols-2 gap-3">
        {blends.map((blend) => (
          <button
            key={blend.id}
            onClick={() => { setSelected(blend); setPdpQty(1); }}
            className="rounded-xl border border-[var(--line)] bg-[var(--bg2)] overflow-hidden text-left hover:border-[var(--room-coffee)]/25 transition-colors"
          >
            <div className="aspect-square bg-gradient-to-b from-[var(--room-coffee)]/[0.06] to-[var(--bg2)] flex items-center justify-center relative p-4">
              {blend.image ? (
                <Image
                  src={blend.image}
                  alt={blend.name}
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-lg"
                />
              ) : (
                <Coffee size={32} className="text-[var(--room-coffee)] opacity-25" strokeWidth={1} />
              )}
              {blend.price > 30 && (
                <span className="absolute top-2 right-2 text-[8px] tracking-wider uppercase bg-[var(--gold)]/15 text-[var(--gold)] px-1.5 py-0.5 rounded-full border border-[var(--gold)]/20">
                  Premium
                </span>
              )}
            </div>
            <div className="p-3">
              <p className="font-display text-sm text-[var(--cream)] leading-tight">{blend.name}</p>
              <p className="text-[var(--dim)] text-[10px] font-light mt-0.5">{blend.roast}</p>
              <p className="text-[var(--gold)] text-sm mt-2">${blend.price.toFixed(2)}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Prototype disclosure */}
      <div className="px-6 pb-10">
        <p className="text-[var(--dim)] text-[10px] text-center font-light opacity-60">
          Prototype store &middot; No real transactions
        </p>
      </div>

      {/* PDP Bottom Sheet */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg)] border-t border-[var(--line)] rounded-t-3xl max-h-[85vh] overflow-y-auto md:left-1/2 md:-translate-x-1/2 md:max-w-[390px]"
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-[var(--dim)]/30" />
              </div>

              <div className="px-6 pb-8">
                {/* Close */}
                <div className="flex justify-end mb-2">
                  <button onClick={() => setSelected(null)} className="p-1">
                    <X size={18} className="text-[var(--dim)]" />
                  </button>
                </div>

                {/* Hero */}
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-b from-[var(--room-coffee)]/[0.08] to-[var(--bg2)] flex items-center justify-center mb-5 border border-[var(--line)] p-6">
                  {selected.image ? (
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      width={240}
                      height={240}
                      className="object-contain drop-shadow-xl"
                    />
                  ) : (
                    <Coffee size={56} className="text-[var(--room-coffee)] opacity-25" strokeWidth={0.8} />
                  )}
                </div>

                <h2 className="font-display text-xl text-[var(--cream)] font-light">{selected.name}</h2>
                <p className="text-[var(--dim)] text-sm font-light mt-1">{selected.roast} &middot; {selected.origin}</p>

                {/* Roast level bar */}
                <div className="mt-4">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--dim)] mb-1.5">Roast Level</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className="h-1.5 flex-1 rounded-full"
                        style={{
                          background: n <= roastLevel(selected.roast)
                            ? 'var(--room-coffee)'
                            : 'var(--line)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Tasting notes */}
                <div className="mt-4">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--dim)] mb-1.5">Tasting Notes</p>
                  <p className="text-sm text-[var(--cream)] font-light">{selected.notes}</p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {selected.badges.map((badge) => (
                    <span key={badge} className="text-[9px] tracking-wider uppercase bg-[var(--green)]/10 text-[var(--green)] px-2 py-1 rounded-full border border-[var(--green)]/15">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Quantity + Add */}
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-[var(--line)]">
                  <div className="flex items-center gap-3 bg-[var(--bg2)] rounded-xl border border-[var(--line)] px-3 py-2">
                    <button onClick={() => setPdpQty(Math.max(1, pdpQty - 1))} className="text-[var(--dim)]">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm text-[var(--cream)] w-4 text-center">{pdpQty}</span>
                    <button onClick={() => setPdpQty(pdpQty + 1)} className="text-[var(--dim)]">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => addToBag(selected, pdpQty)}
                    className="flex-1 bg-[var(--gold)] text-[var(--bg)] py-2.5 rounded-xl text-sm font-medium tracking-wide"
                  >
                    Add to Bag &mdash; ${(selected.price * pdpQty).toFixed(2)}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bag Sheet */}
      <AnimatePresence>
        {bagOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={() => setBagOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg)] border-t border-[var(--line)] rounded-t-3xl max-h-[80vh] overflow-y-auto md:left-1/2 md:-translate-x-1/2 md:max-w-[390px]"
            >
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-[var(--dim)]/30" />
              </div>
              <div className="px-6 pb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-lg text-[var(--cream)]">Your Bag</h2>
                  <button onClick={() => setBagOpen(false)}>
                    <X size={18} className="text-[var(--dim)]" />
                  </button>
                </div>

                {bag.length === 0 ? (
                  <p className="text-[var(--dim)] text-sm font-light py-8 text-center">Your bag is empty</p>
                ) : (
                  <>
                    <div className="space-y-3">
                      {bag.map((item) => (
                        <div key={item.blend.id} className="flex items-center gap-3 rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3">
                          <div className="w-10 h-10 rounded-lg bg-[var(--room-coffee)]/10 flex items-center justify-center shrink-0 overflow-hidden">
                            {item.blend.image ? (
                              <Image src={item.blend.image} alt="" width={36} height={36} className="object-contain" />
                            ) : (
                              <Coffee size={16} className="text-[var(--room-coffee)] opacity-50" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-[var(--cream)] truncate">{item.blend.name}</p>
                            <p className="text-[var(--dim)] text-[10px] font-light">Qty: {item.qty}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-[var(--gold)]">${(item.blend.price * item.qty).toFixed(2)}</p>
                            <button onClick={() => removeFromBag(item.blend.id)} className="text-[var(--ember)] text-[10px]">
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-[var(--line)] flex items-center justify-between">
                      <span className="text-sm text-[var(--dim)]">Subtotal</span>
                      <span className="text-lg text-[var(--cream)] font-display">${bagTotal.toFixed(2)}</span>
                    </div>

                    <button
                      onClick={() => setCheckoutMsg(true)}
                      className="w-full mt-4 bg-[var(--gold)] text-[var(--bg)] py-3 rounded-xl text-sm font-medium tracking-wide"
                    >
                      Checkout (Demo)
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Blend Quiz */}
      <BlendQuiz open={quizOpen} onClose={() => setQuizOpen(false)} />

      {/* Checkout prototype modal */}
      <AnimatePresence>
        {checkoutMsg && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-[60] backdrop-blur-sm"
              onClick={() => { setCheckoutMsg(false); setBagOpen(false); }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[61] w-72 bg-[var(--bg2)] border border-[var(--line)] rounded-2xl p-6 text-center"
            >
              <Image src="/marley-logo.png" alt="Marley Coffee" width={48} height={48} className="mx-auto mb-3 opacity-80" />
              <h3 className="font-display text-lg text-[var(--cream)] mb-2">Prototype Store</h3>
              <p className="text-[var(--dim)] text-sm font-light leading-relaxed mb-4">
                This is a demo experience. No real payment will be processed. Visit{' '}
                <a href="https://marleycoffee.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] underline">
                  marleycoffee.com
                </a>{' '}
                to order real coffee.
              </p>
              <button
                onClick={() => { setCheckoutMsg(false); setBagOpen(false); setBag([]); }}
                className="text-xs tracking-wider uppercase text-[var(--gold)] bg-[var(--gold)]/10 px-4 py-2 rounded-full border border-[var(--gold)]/20"
              >
                Got it
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
