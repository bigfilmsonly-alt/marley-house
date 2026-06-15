import type { Metadata } from 'next';
import Link from 'next/link';
import { User, CreditCard, Package, Star, Settings, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'My Account',
};

// Placeholder user — will come from Supabase Auth session
const user = {
  name: 'Member',
  email: 'member@example.com',
  tier: 'free' as 'free' | 'inner_circle' | 'legacy',
};

const tierLabels = { free: 'Free', inner_circle: 'Inner Circle', legacy: 'Legacy' };

const quickLinks = [
  { label: 'Orders', href: '/account', icon: Package, desc: 'View order history' },
  { label: 'Subscriptions', href: '/account', icon: CreditCard, desc: 'Manage your plan' },
  { label: 'House Points', href: '/account', icon: Star, desc: '0 points earned' },
  { label: 'Settings', href: '/account', icon: Settings, desc: 'Profile & preferences' },
];

export default function AccountPage() {
  const isFree = user.tier === 'free';

  return (
    <article>
      <h1 className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-8 tracking-tight">
        My Account
      </h1>

      {/* Profile */}
      <section className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center">
            <User size={24} className="text-[var(--gold)]" />
          </div>
          <div>
            <p className="text-[var(--cream)] font-display text-lg">{user.name}</p>
            <p className="text-[var(--dim)] text-sm">{user.email}</p>
          </div>
        </div>
      </section>

      {/* Tier Display */}
      <section className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[var(--dim)] text-xs uppercase tracking-wider mb-1">Membership</p>
            <p className="text-[var(--cream)] font-display text-2xl">{tierLabels[user.tier]}</p>
          </div>
          {isFree ? (
            <Link
              href="/membership"
              className="bg-[var(--gold)] text-[var(--bg)] px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide hover:opacity-90 transition-opacity flex items-center gap-1.5"
            >
              Upgrade <ArrowUpRight size={14} />
            </Link>
          ) : (
            <button className="border border-[var(--line)] text-[var(--dim)] px-5 py-2.5 rounded-lg text-sm tracking-wide hover:text-[var(--cream)] transition-colors">
              Manage Billing
            </button>
          )}
        </div>
        {isFree && (
          <p className="text-[var(--dim)] text-sm mt-3 leading-relaxed">
            Unlock all 8 masterclass episodes, community access, and exclusive discounts.
          </p>
        )}
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 flex items-start gap-4 group hover:border-[var(--gold)]/40 transition-colors"
          >
            <link.icon size={20} className="text-[var(--gold)] mt-0.5 shrink-0" />
            <div>
              <p className="text-[var(--cream)] text-sm font-medium group-hover:text-[var(--gold)] transition-colors">
                {link.label}
              </p>
              <p className="text-[var(--dim)] text-xs mt-0.5">{link.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Manage Billing */}
      {!isFree && (
        <section className="rounded-lg border border-[var(--gold)]/20 bg-[var(--gold)]/5 p-6 text-center">
          <p className="text-[var(--cream)] text-sm mb-3">Need to update payment or cancel?</p>
          <button className="bg-[var(--gold)] text-[var(--bg)] px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
            Open Stripe Portal
          </button>
        </section>
      )}
    </article>
  );
}
