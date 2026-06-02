import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { getResend, fromEmail } from '@/lib/resend';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, type, volume, message } = await req.json();

    if (!name || !email || !type) {
      return NextResponse.json({ error: 'Name, email, and type required' }, { status: 400 });
    }

    // Save to Supabase
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase
        .from('wholesale_inquiries')
        .insert({ name, email, company, type, volume, message });
      if (error) console.error('Supabase insert error:', error);
    }

    // Send confirmation to inquirer
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: `We received your ${type} inquiry`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; color: #1a1a1a;">
            <h1 style="font-weight: 300; font-size: 28px; margin-bottom: 8px;">Thank you, ${name}.</h1>
            <p style="color: #666; font-size: 15px; line-height: 1.7;">
              We have received your <strong>${type}</strong> inquiry and someone from the House
              will be in touch shortly.
            </p>
            <p style="color: #666; font-size: 15px; line-height: 1.7;">
              If you would like to book a call directly, you can do so here:
              <br/><a href="${CALENDLY_URL}" style="color: #a9812f;">Schedule a call</a>
            </p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
            <p style="color: #999; font-size: 12px;">
              Marley House &middot; <a href="https://marley-house.vercel.app" style="color: #a9812f;">Visit the House</a>
            </p>
          </div>
        `,
      });

      // Notify team with all fields
      await resend.emails.send({
        from: fromEmail,
        to: fromEmail,
        subject: `${type.toUpperCase()} inquiry from ${name}`,
        html: `
          <h2>${type} Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Type:</strong> ${type}</p>
          <p><strong>Volume:</strong> ${volume || 'N/A'}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Inquiry route error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
