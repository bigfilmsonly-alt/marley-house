import type { Metadata } from 'next';
import Link from 'next/link';
import { Play, MessageCircle, Coffee, Shield, ArrowUpRight, Trophy, Crown, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard',
};

// Placeholder user — will come from Supabase Auth session
const user = {
  name: 'Member',
  tier: 'free' as 'free' | 'inner_circle' | 'legacy',
  points: 0,
  memberSince: 'June 2026',
};

const tierLabels = { free: 'Free', inner_circle: 'Inner Circle', legacy: 'Legacy' };

const stats = [
  { label: 'House Points', value: String(user.points), icon: Trophy, color: 'var(--gold)' },
  { label: 'Membership', value: tierLabels[user.tier], icon: Crown, color: 'var(--gold)' },
  { label: 'Member Since', value: user.memberSince, icon: Calendar, color: 'var(--dim)' },
];

const actions = [
  { label: 'Watch Masterclass', href: '/watch', icon: Play, desc: '8 episodes with Rohan' },
  { label: 'Ask Rohan', href: '/ask-rohan', icon: MessageCircle, desc: 'Submit a question' },
  { label: 'Browse Coffee', href: '/coffee', icon: Coffee, desc: 'Marley Coffee blends' },
  { label: 'Explore Lion Order', href: '/lion-order', icon: Shield, desc: 'Heritage & lifestyle' },
];

const recentActivity = [
  { text: 'Joined The Marley Group', time: 'Just now' },
  { text: 'Watched Episode 1 preview', time: '2 min ago' },
  { text: 'Earned 10 House Points', time: '5 min ago' },
];

export default function DashboardPage() {
  const isFree = user.tier === 'free';

  return (
    <article>
      {/* Welcome */}
      <div className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl text-[var(--gold)] tracking-tight mb-2">
          Welcome, {user.name}
        </h1>
        <p className="text-[var(--dim)] text-sm">Your House at a glance.</p>
      </div>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <s.icon size={16} style={{ color: s.color }} />
              <p className="text-[var(--dim)] text-xs uppercase tracking-wider">{s.label}</p>
            </div>
            <p className="text-[var(--cream)] font-display text-2xl">{s.value}</p>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section className="mb-10">
        <h2 className="text-[var(--cream)] text-sm font-medium uppercase tracking-wider mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 flex items-start gap-4 group hover:border-[var(--gold)]/40 transition-colors"
            >
              <a.icon size={20} className="text-[var(--gold)] mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-[var(--cream)] text-sm font-medium group-hover:text-[var(--gold)] transition-colors">
                  {a.label}
                </p>
                <p className="text-[var(--dim)] text-xs mt-0.5">{a.desc}</p>
              </div>
              <ArrowUpRight size={14} className="text-[var(--dim)] group-hover:text-[var(--gold)] transition-colors mt-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mb-10">
        <h2 className="text-[var(--cream)] text-sm font-medium uppercase tracking-wider mb-4">
          Recent Activity
        </h2>
        <div className="rounded-lg border border-[var(--line)] bg-[var(--panel)] divide-y divide-[var(--line)]">
          {recentActivity.map((item, i) => (
            <div key={i} className="px-5 py-3 flex items-center justify-between">
              <p className="text-[var(--cream)] text-sm">{item.text}</p>
              <p className="text-[var(--dim)] text-xs shrink-0 ml-4">{item.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrade CTA */}
      {isFree && (
        <section className="rounded-lg border border-[var(--gold)]/20 bg-[var(--gold)]/5 p-6 text-center">
          <p className="font-display text-xl text-[var(--gold)] mb-2">Unlock the full House</p>
          <p className="text-[var(--dim)] text-sm mb-4 max-w-md mx-auto">
            Get all 8 masterclass episodes, unlimited Ask questions, discounts, and more.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center gap-1.5 bg-[var(--gold)] text-[var(--bg)] px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            View Plans <ArrowUpRight size={14} />
          </Link>
        </section>
      )}
    </article>
  );
}
