'use client';

import { useScrollRestore } from '@/lib/useScrollRestore';

export default function ScrollRestoreMain({ children }: { children: React.ReactNode }) {
  const ref = useScrollRestore();

  return (
    <main
      ref={ref}
      id="main-content"
      className="absolute inset-0 overflow-y-auto overflow-x-hidden"
    >
      {children}
    </main>
  );
}
