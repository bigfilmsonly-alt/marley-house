import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Learn what cookies The Marley Group website uses, why we use them, and how you can manage your preferences.',
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
};

const cookies: { name: string; purpose: string; duration: string; type: string }[] = [
  { name: 'Essential', purpose: 'Required for core site functionality — navigation, form submission, and security. These cannot be disabled.', duration: 'Session / 1 year', type: 'First-party' },
  { name: 'Analytics', purpose: 'Help us understand how visitors interact with the site so we can improve performance and content. We use privacy-focused analytics that do not track individuals across sites.', duration: 'Up to 1 year', type: 'First-party' },
  { name: 'Preferences', purpose: 'Remember your settings such as theme, language, or dismissed banners so you have a consistent experience on return visits.', duration: 'Up to 1 year', type: 'First-party' },
  { name: 'Embedded Content', purpose: 'Third-party cookies set by embedded Vimeo video players. These are governed by Vimeo\'s own cookie and privacy policies.', duration: 'Varies', type: 'Third-party (Vimeo)' },
];

export default function CookiePolicyPage() {
  return (
    <article>
      <h1 className="text-[var(--gold)] font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
        Cookie Policy
      </h1>
      <p className="text-[var(--dim)] text-sm mb-10">
        What cookies we use, why, and how to manage them.
      </p>

      <div className="space-y-8 text-[var(--cream)] text-sm leading-relaxed opacity-80">
        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They
            help the site remember your actions and preferences over time so you do not have
            to re-enter them each visit. Some cookies are essential for the site to function;
            others help us improve the experience.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Cookies We Use</h2>
          <div className="space-y-4 mt-4">
            {cookies.map((c) => (
              <div key={c.name} className="border border-[var(--line)] rounded-lg p-4">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <span className="text-[var(--gold)] font-bold text-xs tracking-wider uppercase">
                    {c.name}
                  </span>
                  <span className="text-[var(--dim)] text-xs shrink-0">{c.type}</span>
                </div>
                <p className="text-sm leading-relaxed mb-1">{c.purpose}</p>
                <p className="text-[var(--dim)] text-xs">Duration: {c.duration}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Managing Cookies</h2>
          <p className="mb-3">
            You can control and delete cookies through your browser settings. Most browsers
            allow you to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>View and delete individual cookies.</li>
            <li>Block third-party cookies.</li>
            <li>Block cookies from specific sites.</li>
            <li>Block all cookies.</li>
            <li>Delete all cookies when you close the browser.</li>
          </ul>
          <p className="mt-3">
            Note that blocking essential cookies may prevent parts of the site from functioning
            correctly.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Third-Party Cookies</h2>
          <p>
            Embedded content from third parties (such as Vimeo video players) may set their
            own cookies. We do not control these cookies. Please refer to the respective
            third party&apos;s privacy and cookie policies for more information.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Contact</h2>
          <p>
            If you have questions about our use of cookies, contact us at{' '}
            <a href="mailto:privacy@themarleygroup.com" className="text-[var(--gold)] hover:underline">
              privacy@themarleygroup.com
            </a>.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-xs leading-relaxed">
          This Cookie Policy was last updated in June 2026 and may be revised periodically.
        </p>
      </div>
    </article>
  );
}
