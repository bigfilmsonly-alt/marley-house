'use client';

import Link from 'next/link';
import Image from 'next/image';

const sections = [
  {
    title: 'The Group',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Rohan Marley', href: '/rohan-marley' },
      { label: 'Rohan — Story', href: '/rohan-marley/story' },
      { label: 'Rohan — Philosophy', href: '/rohan-marley/philosophy' },
      { label: 'Rohan — Timeline', href: '/rohan-marley/timeline' },
      { label: 'Rohan — Press', href: '/rohan-marley/press' },
      { label: 'The Marley Family', href: '/family' },
      { label: 'The Marleys', href: '/the-marleys' },
      { label: 'YG Marley', href: '/yg-marley' },
      { label: 'Cedella Marley', href: '/cedella-marley' },
      { label: 'Damian Marley', href: '/damian-marley' },
      { label: 'The Legacy', href: '/legacy' },
      { label: 'History', href: '/history' },
      { label: 'Timeline', href: '/timeline' },
      { label: 'The Name', href: '/the-name' },
    ],
  },
  {
    title: 'Marley Coffee',
    links: [
      { label: 'Marley Coffee', href: '/marley-coffee' },
      { label: 'The Story', href: '/marley-coffee/story' },
      { label: 'Blue Mountain', href: '/marley-coffee/blue-mountain' },
      { label: 'Sourcing', href: '/marley-coffee/sourcing' },
      { label: 'Sustainability', href: '/marley-coffee/sustainability' },
      { label: 'No Pesticide Promise', href: '/marley-coffee/no-pesticide-promise' },
      { label: 'One Love', href: '/marley-coffee/one-love' },
      { label: 'Get Up, Stand Up', href: '/marley-coffee/get-up-stand-up' },
      { label: 'Buffalo Soldier', href: '/marley-coffee/buffalo-soldier' },
      { label: 'Lively Up', href: '/marley-coffee/lively-up' },
      { label: 'Simmer Down', href: '/marley-coffee/simmer-down' },
      { label: 'Mystic Morning', href: '/marley-coffee/mystic-morning' },
      { label: 'Jamaican Blue Mountain', href: '/marley-coffee/jamaican-blue-mountain' },
      { label: 'Brewing Guide', href: '/marley-coffee/brewing-guide' },
      { label: 'Recipes', href: '/marley-coffee/recipes' },
      { label: 'Subscribe & Save', href: '/marley-coffee/subscribe' },
      { label: 'Wholesale', href: '/marley-coffee/wholesale' },
      { label: 'Franchise', href: '/marley-coffee/franchise' },
      { label: 'Find Near Me', href: '/marley-coffee/find-near-me' },
      { label: 'Shop Coffee', href: '/marley-coffee/shop' },
    ],
  },
  {
    title: 'Lion Order',
    links: [
      { label: 'Lion Order Story', href: '/lion-order/story' },
      { label: 'Philosophy', href: '/lion-order/philosophy' },
      { label: 'The Codes', href: '/lion-order/codes' },
      { label: 'The Flower', href: '/lion-order/the-flower' },
      { label: 'King Clementine Strain', href: '/lion-order/strains/king-clementine' },
      { label: 'Characters', href: '/lion-order/characters' },
      { label: 'King Clem', href: '/lion-order/king-clem' },
      { label: 'Kai Suna', href: '/lion-order/kai-suna' },
      { label: 'Runna Gyal', href: '/lion-order/runna-gyal' },
      { label: 'Products', href: '/lion-order/products' },
      { label: 'Education', href: '/lion-order/education' },
      { label: 'Lab Results & COAs', href: '/lion-order/lab-results' },
      { label: 'Responsible Use', href: '/lion-order/responsible-use' },
      { label: 'Dispensary Locator', href: '/lion-order/dispensary-locator' },
    ],
  },
  {
    title: 'Music & Media',
    links: [
      { label: 'Music Hub', href: '/music' },
      { label: 'YG Marley', href: '/music/yg-marley' },
      { label: 'Praise Jah in the Moonlight', href: '/music/praise-jah-in-the-moonlight' },
      { label: 'Releases', href: '/music/releases' },
      { label: 'Tour & Live', href: '/music/tour' },
      { label: 'The Roots Sound', href: '/music/the-roots-sound' },
      { label: 'Playlists', href: '/music/playlists' },
      { label: 'Music Licensing', href: '/music/licensing' },
      { label: 'ROOTS', href: '/roots' },
      { label: 'ROOTS Podcast', href: '/roots/podcast' },
      { label: 'ROOTS Docuseries', href: '/roots/docuseries' },
      { label: 'ROOTS Episodes', href: '/roots/episodes' },
      { label: 'ROOTS — Watch', href: '/roots/watch' },
      { label: 'Podcast', href: '/podcast' },
      { label: 'Media Hub', href: '/media' },
      { label: 'Blog', href: '/blog' },
      { label: 'News', href: '/news' },
      { label: 'Press Room', href: '/press-room' },
      { label: 'The Archive', href: '/the-archive' },
    ],
  },
  {
    title: 'Hospitality & Experiences',
    links: [
      { label: 'RoMarley Beach House', href: '/romarley-beach-house' },
      { label: 'Rooms & Suites', href: '/romarley-beach-house/rooms' },
      { label: 'Book Your Stay', href: '/romarley-beach-house/book' },
      { label: 'Events', href: '/romarley-beach-house/events' },
      { label: 'Experiences', href: '/experiences' },
      { label: 'Hospitality', href: '/hospitality' },
      { label: 'Retreats', href: '/retreats' },
      { label: 'Stay & Listen', href: '/stay-and-listen' },
      { label: 'Real Estate', href: '/real-estate' },
    ],
  },
  {
    title: 'Education & Business',
    links: [
      { label: 'Masterclass', href: '/masterclass' },
      { label: 'Education Hub', href: '/education' },
      { label: 'Entrepreneurship', href: '/entrepreneurship' },
      { label: 'Building a Legacy Brand', href: '/business-building' },
      { label: 'AI for Business', href: '/ai-for-business' },
      { label: 'AI Building Playbook', href: '/ai-building-playbook' },
      { label: 'Courses', href: '/courses' },
      { label: 'Mentorship', href: '/mentorship' },
      { label: 'Fellowship', href: '/fellowship' },
      { label: 'The Marley Summit', href: '/summit' },
      { label: 'Resources', href: '/resources' },
    ],
  },
  {
    title: 'Capital & Investment',
    links: [
      { label: 'Capital', href: '/capital' },
      { label: 'Investments', href: '/capital/investments' },
      { label: 'Portfolio', href: '/capital/portfolio' },
      { label: 'Global Economics', href: '/capital/global-economics' },
      { label: 'Agriculture', href: '/capital/agriculture' },
      { label: 'Real Estate Fund', href: '/capital/real-estate-fund' },
      { label: 'Ventures', href: '/capital/ventures' },
      { label: 'Franchise Investment', href: '/capital/franchise-investment' },
      { label: 'Partner With Us', href: '/capital/partner-with-us' },
    ],
  },
  {
    title: 'Community & Membership',
    links: [
      { label: 'Membership', href: '/membership' },
      { label: 'Upgrade', href: '/upgrade' },
      { label: 'Community', href: '/community' },
      { label: 'Forums', href: '/community/forums' },
      { label: 'Member Directory', href: '/community/directory' },
      { label: 'Local Chapters', href: '/community/chapters' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Licensing & IP', href: '/licensing' },
      { label: 'Character Licensing', href: '/licensing/characters' },
      { label: 'ROOTS Format', href: '/licensing/roots-format' },
      { label: 'Apply for License', href: '/licensing/apply' },
      { label: 'Investor Relations', href: '/investor' },
      { label: 'Key Metrics', href: '/investor/metrics' },
      { label: 'Investor Deck', href: '/investor/deck' },
      { label: 'Apply to Invest', href: '/investor/apply' },
      { label: 'Brand Protection', href: '/brand-protection' },
      { label: 'Verify Authenticity', href: '/verify' },
      { label: 'Public API', href: '/api-docs' },
      { label: 'Ask Rohan AI', href: '/ask-rohan' },
    ],
  },
  {
    title: 'Foundation',
    links: [
      { label: 'Foundation', href: '/foundation' },
      { label: 'WaterWise Project', href: '/foundation/waterwise-project' },
      { label: '1Love Initiative', href: '/foundation/1love' },
      { label: 'Give', href: '/foundation/give' },
    ],
  },
  {
    title: 'City Hubs',
    links: [
      { label: 'Miami', href: '/cities/miami' },
      { label: 'Kingston', href: '/cities/kingston' },
      { label: 'New York', href: '/cities/new-york' },
      { label: 'Los Angeles', href: '/cities/los-angeles' },
      { label: 'London', href: '/cities/london' },
      { label: 'Toronto', href: '/cities/toronto' },
      { label: 'Puerto Morelos', href: '/cities/puerto-morelos' },
      { label: 'Atlanta', href: '/cities/atlanta' },
      { label: 'Sidama, Ethiopia', href: '/cities/sidama' },
    ],
  },
  {
    title: 'Legal & Compliance',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cannabis Compliance', href: '/cannabis-compliance' },
      { label: 'Medical Disclaimer', href: '/medical-disclaimer' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Shipping & Returns', href: '/shipping-returns' },
      { label: 'Wholesale Terms', href: '/wholesale-terms' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'Do Not Sell', href: '/do-not-sell' },
    ],
  },
];

export default function SitemapPage() {
  const totalLinks = sections.reduce((sum, s) => sum + s.links.length, 0);

  return (
    <div className="relative min-h-full bg-[var(--bg)] pb-8">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 text-center">
        <Image
          src="/brand/rhr-monogram-transparent.png"
          alt="The Marley Group"
          width={48}
          height={48}
          className="mx-auto mb-3 opacity-70"
        />
        <h1 className="font-display text-2xl text-[var(--gold)] mb-1">Sitemap</h1>
        <p className="text-[var(--dim)] text-xs">
          {totalLinks} pages across {sections.length} sections
        </p>
      </div>

      <div className="gold-rule mx-6 mb-6" />

      {/* Sections */}
      <div className="px-5 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] font-semibold mb-2">
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-1.5 px-3 text-[var(--cream)] text-[13px] hover:text-[var(--gold)] hover:bg-white/5 rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 pt-8 text-center">
        <div className="gold-rule mb-6" />
        <p className="text-[var(--dim)] text-[9px] tracking-[0.3em] uppercase">
          The Marley Group · {totalLinks} Pages
        </p>
      </div>
    </div>
  );
}
