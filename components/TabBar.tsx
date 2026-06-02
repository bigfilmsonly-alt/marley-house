'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Coffee, Play, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { tabView } from '@/lib/tracking';
import { useInAppBrowser } from '@/components/InAppBrowser';

interface Tab {
  href: string;
  icon: LucideIcon;
  label: string;
  embed?: { url: string; title: string };
  splash?: boolean;
}

const tabs: Tab[] = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/coffee', icon: Coffee, label: 'Coffee', embed: { url: 'https://marleycoffee.com', title: 'Marley Coffee' } },
  { href: '/watch', icon: Play, label: 'Watch' },
  { href: '/lion-order', icon: Crown, label: 'Lion Order', embed: { url: 'https://lionorder.com', title: 'Lion Order' }, splash: true },
];

export default function TabBar() {
  const pathname = usePathname();
  const { openLink } = useInAppBrowser();
  const [showSplash, setShowSplash] = useState(false);

  function handleLionOrder(tab: Tab) {
    setShowSplash(true);
    tabView(tab.label);
    setTimeout(() => {
      setShowSplash(false);
      openLink(tab.embed!.url, tab.embed!.title);
    }, 2000);
  }

  return (
    <>
      {/* Lion Order splash overlay */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-[#0b0805]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/brand/lion-order-wordmark-gold.jpg"
                alt="Lion Order"
                width={500}
                height={360}
                className="brightness-125 w-[85vw] max-w-[500px] h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex items-center justify-around border-t border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-xl">
        <div className="flex items-center justify-around w-full px-1 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {tabs.map((tab) => {
            const active =
              tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);

            const inner = (
              <>
                <motion.div
                  whileTap={{ scale: 0.82 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  className="relative"
                >
                  {active && (
                    <motion.div
                      layoutId="tab-glow"
                      className="absolute -inset-2 rounded-full bg-[var(--gold)]/10 blur-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <tab.icon
                    size={20}
                    className={
                      active
                        ? 'text-[var(--gold)] relative z-10'
                        : 'text-[var(--dim)] relative z-10'
                    }
                    strokeWidth={active ? 2 : 1.4}
                  />
                </motion.div>
                <span
                  className={`font-display text-[9px] tracking-[0.12em] uppercase ${
                    active
                      ? 'text-[var(--gold)] font-medium'
                      : 'text-[var(--dim)] font-light'
                  }`}
                >
                  {tab.label}
                </span>
              </>
            );

            if (tab.splash && tab.embed) {
              return (
                <button
                  key={tab.href}
                  onClick={() => handleLionOrder(tab)}
                  className="flex flex-col items-center gap-0.5 px-2 py-1 relative"
                >
                  {inner}
                </button>
              );
            }

            if (tab.embed) {
              return (
                <button
                  key={tab.href}
                  onClick={() => {
                    openLink(tab.embed!.url, tab.embed!.title);
                    tabView(tab.label);
                  }}
                  className="flex flex-col items-center gap-0.5 px-2 py-1 relative"
                >
                  {inner}
                </button>
              );
            }

            return (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => tabView(tab.label)}
                className="flex flex-col items-center gap-0.5 px-2 py-1 relative"
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
