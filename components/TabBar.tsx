'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Coffee, Play, Crown, Flame, Palmtree, Map } from 'lucide-react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { tabView } from '@/lib/tracking';
import { useInAppBrowser } from '@/components/InAppBrowser';

interface Tab {
  href: string;
  icon: LucideIcon;
  label: string;
  embed?: { url: string; title: string };
}

const tabs: Tab[] = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/coffee', icon: Coffee, label: 'Coffee', embed: { url: 'https://marleycoffee.com', title: 'Marley Coffee' } },
  { href: '/watch', icon: Play, label: 'Watch' },
  { href: '/king-clem', icon: Crown, label: 'King Clem' },
  { href: '/lion-order', icon: Flame, label: 'Lion Order', embed: { url: 'https://lionorder.com', title: 'Lion Order' } },
  { href: '/beach-house', icon: Palmtree, label: 'Beach', embed: { url: 'https://www.romarleybeachhouse.com/en', title: 'RoMarley Beach House' } },
  { href: '/sitemap-page', icon: Map, label: 'Sitemap' },
];

export default function TabBar() {
  const pathname = usePathname();
  const { openLink } = useInAppBrowser();

  return (
    <nav className="flex items-center justify-around border-t border-[var(--line)] bg-black/90 backdrop-blur-xl relative z-[90]">
      <div className="flex items-center justify-around w-full px-0.5 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
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
                  size={18}
                  className={
                    active
                      ? 'text-[#F6C800] relative z-10'
                      : 'text-white/70 relative z-10'
                  }
                  strokeWidth={active ? 2.5 : 2}
                />
              </motion.div>
              <span
                className={`font-display text-[8px] tracking-[0.05em] uppercase ${
                  active
                    ? 'text-[#F6C800] font-bold'
                    : 'text-white/70 font-bold'
                }`}
              >
                {tab.label}
              </span>
            </>
          );

          if (tab.embed) {
            return (
              <button
                key={tab.href}
                onClick={() => {
                  openLink(tab.embed!.url, tab.embed!.title);
                  tabView(tab.label);
                }}
                className="flex flex-col items-center gap-0.5 px-1 py-1 relative"
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
              className="flex flex-col items-center gap-0.5 px-1 py-1 relative"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
