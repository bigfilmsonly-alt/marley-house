import Image from 'next/image';
import Link from 'next/link';

const accountNav = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Account', href: '/account' },
];

export default function GatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Placeholder auth check — renders children for now.
  // Will integrate with Supabase Auth once auth flow is wired.
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return null; // Will redirect to login once auth is wired
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/rm-logo-gold.jpg"
              alt="RM Logo"
              width={32}
              height={32}
              className="opacity-70"
            />
          </Link>

          <nav className="flex items-center gap-5">
            {accountNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--dim)] text-xs tracking-wider uppercase hover:text-[var(--gold)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button className="text-[var(--dim)] text-xs tracking-wider uppercase hover:text-[var(--cream)] transition-colors ml-2 border-l border-[var(--line)] pl-4">
              Sign Out
            </button>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>

      {/* Footer */}
      <footer className="border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 text-[10px] text-[var(--dim)] tracking-wider uppercase">
            <Link href="/membership" className="hover:text-[var(--gold)] transition-colors">Membership</Link>
            <Link href="/privacy-policy" className="hover:text-[var(--cream)] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--cream)] transition-colors">Terms</Link>
          </div>
          <p className="text-[var(--dim)] text-[9px] tracking-[0.3em] uppercase">
            &copy; 2026 The Marley Group
          </p>
        </div>
      </footer>
    </div>
  );
}
