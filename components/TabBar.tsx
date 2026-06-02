'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Coffee, Play, Shirt, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface Tab {
  href: string;
  icon: LucideIcon;
  label: string;
}

const tabs: Tab[] = [
  { href: '/', icon: Flame, label: 'Home' },
  { href: '/coffee', icon: Coffee, label: 'Coffee' },
  { href: '/watch', icon: Play, label: 'Watch' },
  { href: '/merch', icon: Shirt, label: 'Merch' },
  { href: '/ask', icon: Sparkles, label: 'Ask' },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-around border-t border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-xl">
      <div className="flex items-center justify-around w-full px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {tabs.map((tab) => {
          const active =
            tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center gap-0.5 px-3 py-1 relative"
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
                  size={22}
                  className={
                    active
                      ? 'text-[var(--gold)] relative z-10'
                      : 'text-[var(--dim)] relative z-10'
                  }
                  strokeWidth={active ? 2.2 : 1.5}
                />
              </motion.div>
              <span
                className={`text-[10px] tracking-wide ${
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
