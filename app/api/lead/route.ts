import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { getResend, fromEmail } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, social, source } = await req.json();

    if (!email || !source) {
      return NextResponse.json({ error: 'Email and source required' }, { status: 400 });
    }

    // Save to Supabase
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase
        .from('house_signups')
        .insert({ name, email, phone, social, source });
      if (error) console.error('Supabase insert error:', error);
    }

    // Send welcome email — dark brand
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: name ? `Welcome, ${name}` : 'Welcome to the House',
        html: `
          <div style="font-family: Georgia, 'Cormorant Garamond', serif; max-width: 520px; margin: 0 auto; background: #0b0805; padding: 48px 32px; color: #F3E9D8;">
            <div style="text-align: center; margin-bottom: 32px;">
              <img src="https://marley-house.vercel.app/brand/lion-crest-icon.png" alt="Lion Order" width="48" height="48" style="opacity: 0.7;" />
            </div>
            <h1 style="font-weight: 300; font-size: 28px; margin-bottom: 8px; text-align: center; letter-spacing: 0.04em; color: #F3E9D8;">
              ${name ? `Welcome, ${name}.` : 'Welcome to the House.'}
            </h1>
            <div style="width: 40px; height: 1px; background: #B98524; margin: 24px auto; opacity: 0.4;"></div>
            <p style="color: #b8a87f; font-size: 15px; line-height: 1.8; text-align: center;">
              You just walked through the door. From here, you will receive daily drops &mdash;
              a story, a lesson, a song &mdash; from the rooms of the maison.
            </p>
            <p style="color: #b8a87f; font-size: 15px; line-height: 1.8; text-align: center; margin-top: 16px;">
              No noise. No incentives. Just the inner circle.
            </p>
            <div style="width: 40px; height: 1px; background: #B98524; margin: 32px auto; opacity: 0.2;"></div>
            <p style="color: #825B0D; font-size: 10px; text-align: center; letter-spacing: 0.2em; text-transform: uppercase;">
              Lion Order &middot; Est. 2022
            </p>
            <p style="color: #825B0D; font-size: 10px; text-align: center; margin-top: 12px;">
              <a href="https://marley-house.vercel.app" style="color: #B98524; text-decoration: none;">Visit the Maison</a>
            </p>
          </div>
        `,
      });

      // Notify team
      await resend.emails.send({
        from: fromEmail,
        to: fromEmail,
        subject: `New House signup: ${source}`,
        html: `
          <p><strong>New signup</strong> at ${new Date().toISOString()}</p>
          <ul>
            ${name ? `<li><strong>Name:</strong> ${name}</li>` : ''}
            <li><strong>Email:</strong> ${email}</li>
            ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
            ${social ? `<li><strong>Instagram:</strong> ${social}</li>` : ''}
            <li><strong>Source:</strong> ${source}</li>
          </ul>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Lead route error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
