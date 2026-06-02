import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { getResend, fromEmail } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const { email, name, answers, blend } = await req.json();

    if (!email || !answers || !blend) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save to Supabase
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase
        .from('blend_quiz_results')
        .insert({ email, name, answers, blend });
      if (error) console.error('Supabase insert error:', error);
    }

    // Send personalized blend email
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: `Your blend: ${blend}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; color: #1a1a1a;">
            <h1 style="font-weight: 300; font-size: 28px; margin-bottom: 8px;">Your Blend: ${blend}</h1>
            <p style="color: #666; font-size: 15px; line-height: 1.7;">
              ${name ? `${name}, the` : 'The'} house has spoken. Based on how you start your morning,
              your flavor lean, and how deep you go — <strong>${blend}</strong> is your cup.
            </p>
            <p style="color: #666; font-size: 15px; line-height: 1.7;">
              Use code <strong>HOUSE10</strong> for 10% off your first bag. (Demo code &mdash; not yet active.)
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
        subject: `Quiz result: ${blend}`,
        html: `<p><strong>${email}</strong> (${name || 'no name'}) matched with <strong>${blend}</strong>.<br/>Answers: ${JSON.stringify(answers)}</p>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Blend quiz route error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
