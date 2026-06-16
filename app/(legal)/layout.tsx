import Image from 'next/image';
import Link from 'next/link';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="border-b border-[var(--line)]">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
          <Link href="/">
            <Image
              src="/brand/rm-logo-gold-transparent.png"
              alt="RM Logo"
              width={28}
              height={28}
              className="opacity-60"
            />
          </Link>
          <Link href="/" className="text-[var(--dim)] text-xs tracking-wider uppercase hover:text-[var(--cream)] transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        {children}
      </main>
      <footer className="border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center">
          <p className="text-[var(--dim)] text-[9px] tracking-[0.3em] uppercase">
            &copy; 2026 The Marley Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
