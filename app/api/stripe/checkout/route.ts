import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const { priceId, mode, email, successUrl, cancelUrl } = await req.json();

  if (!priceId || !mode) {
    return NextResponse.json({ error: 'priceId and mode required' }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

  const session = await stripe.checkout.sessions.create({
    mode: mode as 'subscription' | 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    ...(email ? { customer_email: email } : {}),
    success_url: successUrl || `${siteUrl}/account?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: cancelUrl || `${siteUrl}/membership`,
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: session.url });
}
