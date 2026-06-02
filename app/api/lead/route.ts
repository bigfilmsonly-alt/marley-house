import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { getResend, fromEmail } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json();

    if (!email || !source) {
      return NextResponse.json({ error: 'Email and source required' }, { status: 400 });
    }

    // Save to Supabase
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase
        .from('house_signups')
        .insert({ email, source });
      if (error) console.error('Supabase insert error:', error);
    }

    // Send welcome email
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Welcome to Marley House',
        html: `
          <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; color: #1a1a1a;">
            <h1 style="font-weight: 300; font-size: 28px; margin-bottom: 8px;">Welcome to the House.</h1>
            <p style="color: #666; font-size: 15px; line-height: 1.7;">
              You just walked through the door. From here, you will receive daily drops —
              a story, a lesson, a song — from the rooms of Marley House.
            </p>
            <p style="color: #666; font-size: 15px; line-height: 1.7;">
              Coffee is the invitation. Belonging is the product.
            </p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
            <p style="color: #999; font-size: 12px;">
              Marley House &middot; <a href="https://marley-house.vercel.app" style="color: #a9812f;">Visit the House</a>
            </p>
          </div>
        `,
      });

      // Notify team
      await resend.emails.send({
        from: fromEmail,
        to: fromEmail,
        subject: `New House signup: ${source}`,
        html: `<p><strong>${email}</strong> joined via <strong>${source}</strong> at ${new Date().toISOString()}</p>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Lead route error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
