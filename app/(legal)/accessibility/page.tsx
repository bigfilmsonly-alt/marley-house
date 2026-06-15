import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'The Marley Group is committed to making its website accessible to all users in accordance with WCAG 2.1 Level AA standards.',
  alternates: { canonical: `${SITE_URL}/accessibility` },
};

export default function AccessibilityPage() {
  return (
    <article>
      <h1 className="text-[var(--gold)] font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
        Accessibility Statement
      </h1>
      <p className="text-[var(--dim)] text-sm mb-10">
        Our commitment to an inclusive digital experience.
      </p>

      <div className="space-y-8 text-[var(--cream)] text-sm leading-relaxed opacity-80">
        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Our Commitment</h2>
          <p>
            The Marley Group is committed to ensuring that its website is accessible to people
            with disabilities. We strive to meet or exceed the requirements of the Web Content
            Accessibility Guidelines (WCAG) 2.1 at Level AA, and we continuously work to
            improve the user experience for everyone.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Standards</h2>
          <p className="mb-3">
            We target conformance with WCAG 2.1 Level AA. This includes attention to the
            following principles:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Perceivable</strong> — Content is presented in ways that all users can perceive, including text alternatives for images and sufficient color contrast.</li>
            <li><strong>Operable</strong> — Interface components and navigation are operable via keyboard, screen readers, and other assistive technologies.</li>
            <li><strong>Understandable</strong> — Information and interface behavior are clear, predictable, and consistent.</li>
            <li><strong>Robust</strong> — Content is compatible with current and future assistive technologies and user agents.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Measures Taken</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Semantic HTML and ARIA landmarks throughout the site.</li>
            <li>Alt text provided for all meaningful images.</li>
            <li>Color contrast ratios that meet or exceed 4.5:1 for normal text.</li>
            <li>Keyboard-navigable menus, modals, and interactive elements.</li>
            <li>Focus indicators visible on all interactive controls.</li>
            <li>Responsive design that supports text resizing up to 200% without loss of content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Known Limitations</h2>
          <p>
            While we aim for full conformance, some third-party content — including embedded
            Vimeo video players and external payment processors — may not fully meet all WCAG
            2.1 AA criteria. We work with our partners to address these gaps and provide
            alternative access where possible.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--cream)] font-bold text-base mb-2 opacity-100">Feedback</h2>
          <p>
            We welcome feedback on the accessibility of this website. If you encounter a
            barrier or have a suggestion, please contact us:
          </p>
          <p className="mt-2">
            <a href="mailto:accessibility@themarleygroup.com" className="text-[var(--gold)] hover:underline">
              accessibility@themarleygroup.com
            </a>
          </p>
          <p className="mt-2">
            We aim to respond to accessibility feedback within five business days and to
            resolve reported issues within thirty days where technically feasible.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-xs leading-relaxed">
          This statement was last updated in June 2026. We review and update it at least
          annually or whenever significant changes are made to the site.
        </p>
      </div>
    </article>
  );
}
