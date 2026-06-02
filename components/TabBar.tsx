'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Crown, Palette, Library, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { tabView } from '@/lib/tracking';

interface Tab {
  href: string;
  icon: LucideIcon;
  label: string;
}

const tabs: Tab[] = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/story', icon: BookOpen, label: 'Story' },
  { href: '/brand', icon: Crown, label: 'Brand' },
  { href: '/identity', icon: Palette, label: 'Identity' },
  { href: '/book', icon: Library, label: 'Book' },
  { href: '/connect', icon: Globe, label: 'Connect' },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-around border-t border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-xl">
      <div className="flex items-center justify-around w-full px-1 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {tabs.map((tab) => {
          const active =
            tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              onClick={() => tabView(tab.label)}
              className="flex flex-col items-center gap-0.5 px-2 py-1 relative"
            >
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
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
