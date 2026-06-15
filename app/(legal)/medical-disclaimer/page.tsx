import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Medical Disclaimer',
  description:
    'Medical disclaimer for The Marley Group and Lion Order — important information about cannabis, health claims, and the limits of the content on our platforms.',
  alternates: { canonical: `${SITE_URL}/medical-disclaimer` },
};

export default function MedicalDisclaimerPage() {
  return (
    <article className="space-y-10">
      <header>
        <h1 className="text-[var(--gold)] font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
          Medical Disclaimer
        </h1>
        <p className="text-[var(--dim)] text-sm">Effective: June 2026</p>
      </header>

      {/* Not Medical Advice */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          1. Not Medical Advice
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          The information provided on The Marley Group platforms — including content related to
          Lion Order cannabis products, the King Clementine strain guide, and any educational
          materials — is intended for general informational purposes only. Nothing on our
          websites, applications, or marketing materials should be construed as medical advice,
          diagnosis, or treatment. The content is not a substitute for professional medical
          judgment, and you should not act or refrain from acting based solely on information
          found here.
        </p>
      </section>

      {/* Consult Your Physician */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          2. Consult Your Physician
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          Before using any cannabis product, you should consult with a qualified healthcare
          professional — especially if you have a pre-existing medical condition, are taking
          prescription medications, or have concerns about how cannabis may interact with your
          health. Your doctor or healthcare provider is the best resource for personalized
          medical guidance.
        </p>
      </section>

      {/* No FDA Evaluation */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          3. No FDA Evaluation
        </h2>
        <div className="border border-[var(--line)] rounded-lg p-5 bg-white/[0.02]">
          <p className="text-[var(--cream)] text-sm leading-relaxed font-medium">
            These statements have not been evaluated by the Food and Drug Administration
            (FDA). Our products are not intended to diagnose, treat, cure, or prevent any
            disease.
          </p>
        </div>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85 mt-4">
          Cannabis is classified as a Schedule I substance under federal law in the United
          States. The FDA has not approved cannabis for the treatment of any medical condition,
          with limited exceptions for specific pharmaceutical formulations. Any information
          about potential effects or benefits of cannabis on our platforms reflects cultural
          knowledge, anecdotal reports, or emerging research and should not be interpreted as
          clinical evidence or medical endorsement.
        </p>
      </section>

      {/* Drug Interactions */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          4. Drug Interactions Warning
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          Cannabis may interact with prescription and over-the-counter medications, including
          but not limited to blood thinners, anti-seizure drugs, sedatives, and
          immunosuppressants. THC and CBD can affect how your body metabolizes certain
          medications by inhibiting cytochrome P450 enzymes. If you are taking any medication,
          discuss potential interactions with your healthcare provider before using cannabis
          products.
        </p>
      </section>

      {/* Pregnancy and Nursing */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          5. Pregnancy and Nursing Warning
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          Cannabis use during pregnancy or while breastfeeding is strongly discouraged by
          major health organizations, including the American College of Obstetricians and
          Gynecologists (ACOG) and the American Academy of Pediatrics (AAP). THC can cross
          the placental barrier and may be present in breast milk. If you are pregnant,
          planning to become pregnant, or nursing, do not use cannabis products.
        </p>
      </section>

      {/* Mental Health */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          6. Mental Health Considerations
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          Cannabis use may affect mental health. Individuals with a personal or family history
          of psychosis, schizophrenia, anxiety disorders, or substance use disorders should
          exercise particular caution and consult a mental health professional before using
          cannabis. High-THC products may increase the risk of adverse psychological effects
          in susceptible individuals. If you experience persistent anxiety, paranoia, or other
          distressing symptoms after using cannabis, discontinue use and seek professional
          help.
        </p>
      </section>

      {/* Related Policies */}
      <section className="border-t border-[var(--line)] pt-8">
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          Related Policies
        </h2>
        <ul className="text-[var(--cream)] text-sm leading-relaxed opacity-85 space-y-2">
          <li>
            <a href="/cannabis-compliance" className="text-[var(--gold)] hover:underline">
              Cannabis Compliance
            </a>{' '}
            — Age verification, jurisdictions, lab testing, and responsible marketing
          </li>
          <li>
            <a href="/lion-order/responsible-use" className="text-[var(--dim)] hover:text-[var(--gold)] transition-colors">
              Responsible Use Guide
            </a>{' '}
            <span className="text-[var(--dim)]">(coming soon)</span>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-[var(--gold)] font-display text-xl font-semibold mb-3">
          Contact
        </h2>
        <p className="text-[var(--cream)] text-sm leading-relaxed opacity-85">
          For questions about this disclaimer or our health and safety practices, contact us
          at:{' '}
          <a href="mailto:compliance@themarleygroup.com" className="text-[var(--gold)] hover:underline">
            compliance@themarleygroup.com
          </a>
        </p>
      </section>
    </article>
  );
}
