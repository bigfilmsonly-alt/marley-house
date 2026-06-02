import { Bodoni_Moda, Source_Serif_4 } from 'next/font/google';

export const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-spline',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Re-export with original names for compatibility
export const fraunces = bodoniModa;
export const splineSans = sourceSerif;
