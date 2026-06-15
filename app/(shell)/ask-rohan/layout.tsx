import type { Metadata } from 'next';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Ask Rohan — AI Concierge',
  description:
    'Ask Rohan is an AI concierge powered by The Archive — verified answers drawn from Rohan Marley\'s own words across interviews, podcasts, and published philosophy.',
  alternates: { canonical: `${SITE}/ask-rohan` },
  openGraph: {
    title: 'Ask Rohan — AI Concierge | The Marley Group',
    description:
      'Get answers from Rohan Marley\'s own words — interviews, podcasts, and business philosophy, powered by The Archive.',
    url: `${SITE}/ask-rohan`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ask Rohan — AI Concierge' }],
  },
};

export default function AskRohanLayout({ children }: { children: React.ReactNode }) {
  return children;
}
