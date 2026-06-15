import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about The Marley Group, Marley Coffee, Lion Order, RoMarley Beach House, and the Inner Circle masterclass.',
  alternates: { canonical: `${SITE_URL}/faq` },
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'What is The Marley Group?',
    a: 'The Marley Group is the family holding company founded by Rohan Marley. It unites every Marley-led brand — Marley Coffee, Lion Order, and RoMarley Beach House — under one heritage-driven enterprise dedicated to craft, culture, and legacy.',
  },
  {
    q: 'Who is Rohan Marley?',
    a: 'Rohan Marley is an entrepreneur, former professional football player, and the son of Bob Marley and Janet Hunt. He has built a portfolio of lifestyle brands rooted in Jamaican heritage, sustainability, and family values.',
  },
  {
    q: 'What is Marley Coffee?',
    a: 'Marley Coffee sources premium, ethically grown beans from the Marley family farm in the Blue Mountains of Jamaica and from select farms worldwide. Every cup honors the land and the legacy. Learn more at marleycoffee.com.',
  },
  {
    q: 'What is Lion Order?',
    a: 'Lion Order is a premium cannabis brand created by Rohan Marley. It offers curated flower, pre-rolls, and edibles crafted with care and rooted in Rastafari tradition. Visit lionorder.com for full product details.',
  },
  {
    q: 'Is Lion Order cannabis legal?',
    a: 'Lion Order products are available only in U.S. states where recreational cannabis is legal for adults 21 and over. We comply with all applicable state and local regulations. Please check your local laws before purchasing.',
  },
  {
    q: 'What is RoMarley Beach House?',
    a: 'RoMarley Beach House is a boutique hospitality experience on the coast of Jamaica offering guests an immersive taste of Marley culture — from curated stays and local cuisine to live music and community gatherings. Book at romarleybeachhouse.com.',
  },
  {
    q: 'Who is YG Marley?',
    a: 'YG Marley is a rising musical artist and member of the Marley family, carrying forward the tradition of conscious music for a new generation.',
  },
  {
    q: 'How do I join the Inner Circle?',
    a: 'Tap "Join the Inner Circle" on our homepage and fill in your name, email, phone number, and Instagram handle. Membership is free and gives you first access to drops, events, and exclusive content.',
  },
  {
    q: 'What is the masterclass?',
    a: 'The masterclass is an eight-episode video series featuring Rohan Marley. Topics include Blue Mountain coffee sourcing, the cannabis playbook, family business principles, hospitality, storytelling, transitioning from athlete to entrepreneur, Rastafari principles, and building multiple revenue streams. It is available exclusively to Inner Circle members.',
  },
  {
    q: 'How do I contact the team?',
    a: 'You can reach The Marley Group at info@themarleygroup.com. For brand-specific inquiries, visit the contact page on each brand site. We aim to respond within 48 hours.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Marley Coffee ships to select international destinations. Lion Order cannabis products are available only within legal U.S. jurisdictions and cannot be shipped internationally. RoMarley Beach House bookings are open to guests worldwide.',
  },
  {
    q: 'What is your return policy?',
    a: 'Marley Coffee accepts returns on unopened products within 30 days of purchase. Due to regulatory requirements, Lion Order cannabis products cannot be returned once sold. For hospitality cancellations, please refer to romarleybeachhouse.com for the current cancellation policy.',
  },
  {
    q: 'What is "Ask the House"?',
    a: '"Ask the House" is our AI-powered chat assistant. It can answer general questions about Marley brands and help you navigate the site. Responses are AI-generated and should not be taken as professional, legal, or medical advice.',
  },
];

export default function FAQPage() {
  return (
    <article>
      <h1 className="text-[var(--gold)] font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
        Frequently Asked Questions
      </h1>
      <p className="text-[var(--dim)] text-sm mb-10">
        Everything you need to know about The Marley Group and our family of brands.
      </p>

      <div className="space-y-4">
        {faqs.map(({ q, a }, i) => (
          <details
            key={i}
            className="group border border-[var(--line)] rounded-lg overflow-hidden"
          >
            <summary className="cursor-pointer select-none px-5 py-4 text-[var(--cream)] font-medium text-sm leading-snug flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
              <span>{q}</span>
              <span className="text-[var(--dim)] text-xs shrink-0 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-5 pb-5 text-[var(--cream)] text-sm leading-relaxed opacity-80">
              {a}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-xs leading-relaxed">
          Still have questions? Reach out to{' '}
          <a href="mailto:info@themarleygroup.com" className="text-[var(--gold)] hover:underline">
            info@themarleygroup.com
          </a>{' '}
          and our team will get back to you.
        </p>
      </div>
    </article>
  );
}
