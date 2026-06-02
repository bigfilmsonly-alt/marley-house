import { Cormorant_Garamond, EB_Garamond } from 'next/font/google';

// Lion Order Brand System — Typography
// Production (licensed — self-host .woff2 in public/fonts/):
//   Display:  Salter Roman / Italic
//   Body:     Minion Variable Concept Bold
//   Wordmark: GothBallCrap-Bold (blackletter)
//   Accent:   Cardinal Fruit Medium · Boiling Thin
// Current fallbacks per brand deck pp.52-53:

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-spline',
  weight: ['400', '500', '600'],
  display: 'swap',
});

// Re-export with original names for layout.tsx compatibility
export const fraunces = cormorantGaramond;
export const splineSans = ebGaramond;
