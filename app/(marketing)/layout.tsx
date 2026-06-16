import Image from 'next/image';
import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/rm-logo-gold-transparent.png"
              alt="RM Logo"
              width={36}
              height={36}
              className="opacity-80"
            />
            <span className="text-[var(--cream)] text-sm font-display tracking-wide hidden sm:inline">
              The Marley Group
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/marley-coffee" className="text-[var(--dim)] text-xs tracking-wider uppercase hover:text-[var(--gold)] transition-colors">Coffee</Link>
            <Link href="/lion-order" className="text-[var(--dim)] text-xs tracking-wider uppercase hover:text-[var(--gold)] transition-colors">Lion Order</Link>
            <Link href="/music" className="text-[var(--dim)] text-xs tracking-wider uppercase hover:text-[var(--gold)] transition-colors">Music</Link>
            <Link href="/about" className="text-[var(--dim)] text-xs tracking-wider uppercase hover:text-[var(--gold)] transition-colors hidden sm:inline">About</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <Image
              src="/brand/rm-logo-gold-transparent.png"
              alt="RM Logo"
              width={48}
              height={48}
              className="opacity-60"
            />
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/marley-coffee" className="text-[var(--dim)] text-xs hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
              <Link href="/lion-order" className="text-[var(--dim)] text-xs hover:text-[var(--gold)] transition-colors">Lion Order</Link>
              <Link href="/romarley-beach-house" className="text-[var(--dim)] text-xs hover:text-[var(--gold)] transition-colors">Beach House</Link>
              <Link href="/music" className="text-[var(--dim)] text-xs hover:text-[var(--gold)] transition-colors">Music</Link>
              <Link href="/about" className="text-[var(--dim)] text-xs hover:text-[var(--gold)] transition-colors">About</Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <Link href="/privacy-policy" className="text-[var(--dim)] text-[10px] tracking-wider uppercase hover:text-[var(--cream)] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[var(--dim)] text-[10px] tracking-wider uppercase hover:text-[var(--cream)] transition-colors">Terms</Link>
            <Link href="/cannabis-compliance" className="text-[var(--dim)] text-[10px] tracking-wider uppercase hover:text-[var(--cream)] transition-colors">Compliance</Link>
            <Link href="/faq" className="text-[var(--dim)] text-[10px] tracking-wider uppercase hover:text-[var(--cream)] transition-colors">FAQ</Link>
          </div>
          <p className="text-center text-[var(--dim)] text-[9px] tracking-[0.3em] uppercase">
            &copy; 2026 The Marley Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
