'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Minus, Plus, X, Shirt } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { merch } from '@/content/merch';
import type { MerchItem } from '@/lib/types';

type Category = 'all' | MerchItem['category'];

interface BagItem { item: MerchItem; qty: number; size?: string; }

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'apparel', label: 'Apparel' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'home', label: 'Home' },
  { value: 'music', label: 'Music' },
];

export default function MerchPage() {
  const [filter, setFilter] = useState<Category>('all');
  const [selected, setSelected] = useState<MerchItem | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [bag, setBag] = useState<BagItem[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [checkoutMsg, setCheckoutMsg] = useState(false);
  const [pdpQty, setPdpQty] = useState(1);

  const filtered = filter === 'all' ? merch : merch.filter((m) => m.category === filter);
  const bagCount = bag.reduce((s, i) => s + i.qty, 0);
  const bagTotal = bag.reduce((s, i) => s + i.item.price * i.qty, 0);

  function openPDP(item: MerchItem) {
    setSelected(item);
    setPdpQty(1);
    setSelectedSize(item.sizes?.[1] ?? null);
  }

  function addToBag(item: MerchItem, qty: number, size?: string) {
    setBag((prev) => {
      const key = item.id + (size ?? '');
      const existing = prev.find((i) => i.item.id + (i.size ?? '') === key);
      if (existing) {
        return prev.map((i) =>
          i.item.id + (i.size ?? '') === key ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { item, qty, size }];
    });
    setSelected(null);
  }

  function removeFromBag(id: string, size?: string) {
    const key = id + (size ?? '');
    setBag((prev) => prev.filter((i) => i.item.id + (i.size ?? '') !== key));
  }

  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[var(--ember)] blur-[100px] opacity-[0.06] pointer-events-none" />

      {/* Header */}
      <div className="relative px-6 pt-14 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Image src="/marley-logo.png" alt="Marley House" width={20} height={20} className="opacity-70" />
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--ember)] font-medium">
                Merch
              </p>
            </div>
            <h1 className="font-display text-2xl text-[var(--cream)] font-light">
              Wear the Legacy
            </h1>
          </div>
          {bagCount > 0 && (
            <button onClick={() => setBagOpen(true)} className="relative p-2">
              <ShoppingBag size={20} className="text-[var(--gold)]" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[var(--ember)] text-white text-[9px] flex items-center justify-center font-medium">
                {bagCount}
              </span>
            </button>
          )}
        </div>
        <p className="text-[var(--dim)] text-xs font-light mt-1">
          Rooted in culture. Built to last.
        </p>
      </div>

      {/* Category filters */}
      <div className="px-6 pb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-6 px-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`shrink-0 text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all ${
                filter === cat.value
                  ? 'bg-[var(--ember)] text-white border-[var(--ember)]'
                  : 'bg-transparent text-[var(--dim)] border-[var(--line)] hover:border-[var(--dim)]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured — Lion Order Hoodie */}
      {filter === 'all' && (
        <div className="px-6 pb-5">
          <button
            onClick={() => openPDP(merch[0])}
            className="w-full rounded-2xl overflow-hidden border border-[var(--ember)]/20 bg-gradient-to-b from-[var(--ember)]/10 via-[var(--bg2)] to-[var(--bg2)] relative text-left"
          >
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--ember)] to-transparent" />
            <div className="p-5">
              <span className="text-[8px] tracking-[0.3em] uppercase text-[var(--ember)] font-medium bg-[var(--ember)]/10 px-3 py-1 rounded-full border border-[var(--ember)]/15 inline-block mb-4">
                Bestseller
              </span>
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[var(--bg)]">
                <Image
                  src={merch[0].image}
                  alt={merch[0].name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-display text-xl text-[var(--cream)] font-light">{merch[0].name}</h2>
              <p className="text-[var(--dim)] text-xs font-light mt-1">{merch[0].description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-display text-2xl text-[var(--gold)]">${merch[0].price}</span>
                <span className="text-[9px] tracking-wider uppercase bg-[var(--ember)] text-white px-4 py-2 rounded-full font-medium">
                  View Details
                </span>
              </div>
            </div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--ember)]/30 to-transparent" />
          </button>
        </div>
      )}

      {/* Product grid */}
      <div className="px-6 pb-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--ember)] font-medium">
            {filter === 'all' ? 'All Items' : categories.find((c) => c.value === filter)?.label}
          </p>
          <p className="text-[var(--dim)] text-[10px] font-light">
            {filtered.length} items
          </p>
        </div>
      </div>
      <div className="px-6 pb-6 grid grid-cols-2 gap-3">
        {(filter === 'all' ? filtered.slice(1) : filtered).map((item) => (
          <button
            key={item.id}
            onClick={() => openPDP(item)}
            className="rounded-xl border border-[var(--line)] bg-[var(--bg2)] overflow-hidden text-left hover:border-[var(--ember)]/25 transition-all group"
          >
            <div className="aspect-square overflow-hidden bg-[var(--bg)] relative">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.badge && (
                <span className="absolute top-2 right-2 text-[8px] tracking-wider uppercase bg-[var(--ember)]/90 text-white px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="p-3">
              <p className="font-display text-sm text-[var(--cream)] leading-tight">{item.name}</p>
              <p className="text-[var(--dim)] text-[10px] font-light mt-0.5 capitalize">{item.category}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[var(--gold)] text-sm font-medium">${item.price}</p>
                {item.sizes && (
                  <span className="text-[8px] tracking-wider uppercase text-[var(--dim)] opacity-60">
                    {item.sizes.length} sizes
                  </span>
                )}
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
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-[var(--dim)]/30" />
              </div>
              <div className="px-6 pb-8">
                <div className="flex justify-end mb-2">
                  <button onClick={() => setSelected(null)} className="p-1">
                    <X size={18} className="text-[var(--dim)]" />
                  </button>
                </div>

                {/* Hero image */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 border border-[var(--line)] bg-[var(--bg)]">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-xl text-[var(--cream)] font-light">{selected.name}</h2>
                    <p className="text-[var(--dim)] text-sm font-light mt-0.5 capitalize">{selected.category}</p>
                  </div>
                  {selected.badge && (
                    <span className="shrink-0 text-[8px] tracking-wider uppercase bg-[var(--ember)]/15 text-[var(--ember)] px-2 py-1 rounded-full border border-[var(--ember)]/20">
                      {selected.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[var(--cream)]/80 font-light leading-relaxed mt-3">
                  {selected.description}
                </p>

                {/* Size selector */}
                {selected.sizes && (
                  <div className="mt-5">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--dim)] mb-2">Size</p>
                    <div className="flex gap-2">
                      {selected.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`w-10 h-10 rounded-lg border text-xs font-medium transition-all ${
                            selectedSize === s
                              ? 'border-[var(--ember)] bg-[var(--ember)]/15 text-[var(--cream)]'
                              : 'border-[var(--line)] text-[var(--dim)] hover:border-[var(--dim)]/40'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
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
                    onClick={() => addToBag(selected, pdpQty, selectedSize ?? undefined)}
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
                      {bag.map((bi) => (
                        <div key={bi.item.id + (bi.size ?? '')} className="flex items-center gap-3 rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-[var(--bg)]">
                            <Image src={bi.item.image} alt="" width={48} height={48} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-[var(--cream)] truncate">{bi.item.name}</p>
                            <p className="text-[var(--dim)] text-[10px] font-light">
                              Qty: {bi.qty}{bi.size ? ` / ${bi.size}` : ''}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-[var(--gold)]">${(bi.item.price * bi.qty).toFixed(2)}</p>
                            <button onClick={() => removeFromBag(bi.item.id, bi.size)} className="text-[var(--ember)] text-[10px]">
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
              <Shirt size={36} className="mx-auto mb-3 text-[var(--ember)] opacity-80" strokeWidth={1.2} />
              <h3 className="font-display text-lg text-[var(--cream)] mb-2">Prototype Store</h3>
              <p className="text-[var(--dim)] text-sm font-light leading-relaxed mb-4">
                This is a demo experience. No real payment will be processed.
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
