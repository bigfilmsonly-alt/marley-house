import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL || 'hello@marleyhouse.com';

export function getResend() {
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export { fromEmail };
