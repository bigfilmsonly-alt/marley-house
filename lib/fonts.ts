import { Cormorant_Garamond, Jost } from 'next/font/google';

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-spline',
  weight: ['300', '400', '500'],
  display: 'swap',
});

// Re-export with original names for compatibility
export const fraunces = cormorant;
export const splineSans = jost;
