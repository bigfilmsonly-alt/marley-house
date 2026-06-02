'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const scrollPositions = new Map<string, number>();

export function useScrollRestore() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Restore saved position
    const saved = scrollPositions.get(pathname);
    if (saved) {
      requestAnimationFrame(() => el.scrollTop = saved);
    }

    // Save on scroll
    function onScroll() {
      if (el) scrollPositions.set(pathname, el.scrollTop);
    }

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return ref;
}
