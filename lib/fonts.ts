import { Fraunces, Spline_Sans } from 'next/font/google';

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const splineSans = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-spline',
  weight: ['300', '400', '500'],
  display: 'swap',
});
