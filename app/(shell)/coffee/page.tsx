'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Coffee, Minus, Plus, X, ShoppingBag, Leaf, TreePine, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BlendQuiz from '@/components/BlendQuiz';
import { products } from '@/content/products';
import type { Product } from '@/lib/types';
import { addToBag as trackAddToBag } from '@/lib/tracking';
import { useInAppBrowser } from '@/components/InAppBrowser';

interface BagItem { blend: Product; qty: number; }

export default function CoffeePage() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [bag, setBag] = useState<BagItem[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [checkoutMsg, setCheckoutMsg] = useState(false);
  const [pdpQty, setPdpQty] = useState(1);
  const [quizOpen, setQuizOpen] = useState(false);
  const { openLink } = useInAppBrowser();

  const bagCount = bag.reduce((s, i) => s + i.qty, 0);
  const bagTotal = bag.reduce((s, i) => s + i.blend.price * i.qty, 0);

  function addToBag(blend: Product, qty: number) {
    setBag((prev) => {
      const existing = prev.find((i) => i.blend.id === blend.id);
      if (existing) {
        return prev.map((i) => i.blend.id === blend.id ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { blend, qty }];
    });
    trackAddToBag(blend.id);
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
              <Image src="/rhr-logo.png" alt="Marley House" width={24} height={24} />
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
              aria-label={`Shopping bag, ${bagCount} items`}
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

      {/* Premium Hero — Jamaican Blue Mountain */}
      <div className="px-6 py-4">
        <div className="rounded-2xl overflow-hidden border border-[var(--gold)]/20 bg-gradient-to-b from-[#1a3a5e]/30 via-[var(--bg2)] to-[var(--bg2)] relative">
          {/* Gold accent line at top */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

          <div className="p-5 text-center">
            <span className="text-[8px] tracking-[0.3em] uppercase text-[var(--gold)] font-medium bg-[var(--gold)]/10 px-3 py-1 rounded-full border border-[var(--gold)]/15 inline-block mb-4">
              The Rarest Cup
            </span>

            {/* Product image */}
            <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              {products.find(p => p.id === 'jamaican-blue-mountain')?.image ? (
                <Image
                  src={products.find(p => p.id === 'jamaican-blue-mountain')!.image!}
                  alt="Jamaican Blue Mountain"
                  width={128}
                  height={128}
                  className="object-contain drop-shadow-xl"
                />
              ) : (
                <Coffee size={48} className="text-[var(--gold)] opacity-40" strokeWidth={0.8} />
              )}
            </div>

            <h2 className="font-display text-xl text-[var(--cream)] font-light">
              Jamaican Blue Mountain
            </h2>
            <p className="text-[var(--dim)] text-xs font-light mt-1.5">
              Premium Single Origin &middot; Jamaica
            </p>
            <p className="text-[var(--cream)] text-sm font-light mt-3 leading-relaxed max-w-[280px] mx-auto">
              One of the world&apos;s rarest coffees. Grown at elevation, hand-picked and sun-dried. Zero bitterness.
            </p>

            {/* Price + CTA */}
            <div className="flex items-center justify-center gap-4 mt-5">
              <span className="font-display text-2xl text-[var(--gold)]">$42.99</span>
              <button
                onClick={() => {
                  const blueMtn = products.find(p => p.id === 'jamaican-blue-mountain');
                  if (blueMtn) { setSelected(blueMtn); setPdpQty(1); }
                }}
                className="bg-[var(--gold)] text-[var(--bg)] px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide"
              >
                View Details
              </button>
            </div>

            {/* Origin badges */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="text-[9px] tracking-wider uppercase text-[var(--gold)]/70 bg-[var(--gold)]/[0.06] px-2 py-0.5 rounded-full">
                900–1,700m Elevation
              </span>
              <span className="text-[9px] tracking-wider uppercase text-[var(--gold)]/70 bg-[var(--gold)]/[0.06] px-2 py-0.5 rounded-full">
                Single Origin
              </span>
            </div>
          </div>

          {/* Gold accent line at bottom */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
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

      {/* From Farm to Cup */}
      <div className="px-6 pb-5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--room-coffee)] mb-3 font-medium">
          From Farm to Cup
        </p>
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-6 px-6 pb-1">
          {[
            { step: '01', title: 'Grown', desc: 'Blue Mountains, Jamaica & select origins', icon: '🌱' },
            { step: '02', title: 'Hand-Picked', desc: 'Only ripe cherries, selected by hand', icon: '✋' },
            { step: '03', title: 'Sun-Dried', desc: 'Natural process under Caribbean sun', icon: '☀️' },
            { step: '04', title: 'Small-Batch Roasted', desc: 'Crafted to bring out each origin', icon: '🔥' },
            { step: '05', title: 'Your Cup', desc: 'From our family to yours', icon: '☕' },
          ].map((s) => (
            <div
              key={s.step}
              className="shrink-0 w-[140px] rounded-xl border border-[var(--line)] bg-[var(--bg2)] p-3.5"
            >
              <span className="text-xl mb-2 block">{s.icon}</span>
              <p className="text-[9px] tracking-wider uppercase text-[var(--room-coffee)] font-medium mb-0.5">
                Step {s.step}
              </p>
              <p className="text-sm text-[var(--cream)] font-light leading-tight">{s.title}</p>
              <p className="text-[var(--dim)] text-[10px] font-light mt-1 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="px-6 pb-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--room-coffee)] font-medium">
            All Blends
          </p>
          <p className="text-[var(--dim)] text-[10px] font-light">
            {products.length} blends
          </p>
        </div>
      </div>
      <div className="px-6 pb-6 grid grid-cols-2 gap-3">
        {products.map((blend) => (
          <button
            key={blend.id}
            onClick={() => { setSelected(blend); setPdpQty(1); }}
            className="rounded-xl border border-[var(--line)] bg-[var(--bg2)] overflow-hidden text-left hover:border-[var(--room-coffee)]/25 transition-all group"
          >
            <div className="aspect-square bg-gradient-to-b from-[var(--room-coffee)]/[0.08] to-[var(--bg2)] flex items-center justify-center relative p-4">
              {blend.image ? (
                <Image
                  src={blend.image}
                  alt={blend.name}
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
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
              {blend.notes && (
                <p className="text-[var(--dim)] text-[9px] font-light mt-1.5 leading-snug line-clamp-2 opacity-70">
                  {blend.notes}
                </p>
              )}
              <div className="flex items-center justify-between mt-2">
                <p className="text-[var(--gold)] text-sm font-medium">${blend.price.toFixed(2)}</p>
                <span className="text-[8px] tracking-wider uppercase text-[var(--dim)] opacity-60">
                  {blend.origin}
                </span>
              </div>
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

                {/* Flavor Profile */}
                {selected.flavorProfile && selected.flavorProfile.length > 0 && (
                  <div className="mt-5">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--dim)] mb-3">Flavor Profile</p>
                    <div className="space-y-2.5">
                      {selected.flavorProfile.map((f) => (
                        <div key={f.label} className="flex items-center gap-3">
                          <span className="text-[11px] text-[var(--dim)] w-20 shrink-0">{f.label}</span>
                          <div className="flex-1 flex gap-1">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <div
                                key={n}
                                className="h-2 flex-1 rounded-full transition-colors"
                                style={{
                                  background: n <= f.value
                                    ? 'var(--room-coffee)'
                                    : 'var(--line)',
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Brewing Tip */}
                {selected.brewingTip && (
                  <div className="mt-5 p-3.5 rounded-xl bg-[var(--room-coffee)]/[0.05] border border-[var(--room-coffee)]/15">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--room-coffee)] mb-1.5 font-medium">Brewing Tip</p>
                    <p className="text-sm text-[var(--cream)] font-light leading-relaxed">{selected.brewingTip}</p>
                  </div>
                )}

                {/* Pairing */}
                {selected.pairing && (
                  <div className="mt-4">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--dim)] mb-1.5">Pairs With</p>
                    <p className="text-sm text-[var(--cream)] font-light">{selected.pairing}</p>
                  </div>
                )}

                {/* Origin details */}
                {(selected.region || selected.elevation) && (
                  <div className="mt-4 flex gap-3">
                    {selected.region && (
                      <div className="flex-1 p-3 rounded-xl bg-[var(--bg2)] border border-[var(--line)]">
                        <p className="text-[9px] tracking-[0.15em] uppercase text-[var(--dim)] mb-0.5">Region</p>
                        <p className="text-xs text-[var(--cream)] font-light">{selected.region}</p>
                      </div>
                    )}
                    {selected.elevation && (
                      <div className="flex-1 p-3 rounded-xl bg-[var(--bg2)] border border-[var(--line)]">
                        <p className="text-[9px] tracking-[0.15em] uppercase text-[var(--dim)] mb-0.5">Elevation</p>
                        <p className="text-xs text-[var(--cream)] font-light">{selected.elevation}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                {selected.description && (
                  <div className="mt-4">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--dim)] mb-1.5">About This Blend</p>
                    <p className="text-sm text-[var(--cream)]/80 font-light leading-relaxed">{selected.description}</p>
                  </div>
                )}

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
                              <Image src={item.blend.image} alt={item.blend.name} width={36} height={36} className="object-contain" />
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
              <Image src="/rhr-logo.png" alt="Marley House" width={56} height={56} className="mx-auto mb-3" />
              <h3 className="font-display text-lg text-[var(--cream)] mb-2">Prototype Store</h3>
              <p className="text-[var(--dim)] text-sm font-light leading-relaxed mb-4">
                This is a demo experience. No real payment will be processed. Visit{' '}
                <button onClick={() => openLink('https://marleycoffee.com/', 'Marley Coffee')} className="text-[var(--gold)] underline">
                  marleycoffee.com
                </button>{' '}
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
