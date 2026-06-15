import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export function getStripe(): Stripe | null {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  _stripe = new Stripe(key);
  return _stripe;
}

// Membership tier definitions
export const TIERS = {
  free: { name: 'Free', price: 0 },
  inner_circle: { name: 'Inner Circle', price: 999, interval: 'month' as const },
  legacy: { name: 'Legacy', price: 19900, interval: null }, // one-time
} as const;

export type MembershipTier = keyof typeof TIERS;
