import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { getSupabase } from '@/lib/supabase';
import type Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const body = await req.text();
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or secret' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const supabase = getSupabase();

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      if (supabase && session.customer_email) {
        await supabase.from('memberships').upsert({
          email: session.customer_email,
          stripe_customer_id: session.customer as string,
          tier: session.mode === 'subscription' ? 'inner_circle' : 'legacy',
          status: 'active',
          updated_at: new Date().toISOString(),
        }, { onConflict: 'email' });
      }
      break;
    }

    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription;
      const status = sub.status === 'active' ? 'active' : 'cancelled';
      if (supabase) {
        await supabase.from('memberships')
          .update({ status, updated_at: new Date().toISOString() })
          .eq('stripe_customer_id', sub.customer as string);
      }
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice;
      if (supabase && invoice.customer_email) {
        await supabase.from('memberships')
          .update({ status: 'past_due', updated_at: new Date().toISOString() })
          .eq('email', invoice.customer_email);
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
