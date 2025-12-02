import React from "react";
import { motion, type Variants } from "framer-motion";
import type { JSX } from "react";
import CTAButton from "../CTA";

/**
 * Minimal, airy, client-focused Problem → Cost → Solution section.
 * - Replaces dense table with stacked cards for mobile and roomy two-column grid on desktop.
 * - Keeps accessibility, schema (with keywords), and CTA composition.
 * - DATE_MODIFIED should be programmatically updated at build-time if possible.
 */

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
};

export default function ProblemSolutionSection(): JSX.Element {
  const id = React.useId();
  const sectionId = `ai-problem-${id}`;
  const headingId = `ai-problem-heading-${id}`;
  const entityLabelId = `ai-entity-${id}`;
  const DATE_MODIFIED = "2025-12-02";

  const cards = [
    {
      title: "“Our website is fine — we rely on word-of-mouth.”",
      cost: "Missed revenue — fewer calls & fewer walk-ins.",
      solution:
        "Geo-optimized presence (GBP + LocalBusiness schema + NAP sync).",
    },
    {
      title: "“My site is slow — it's not urgent.”",
      cost: "High abandonment and fewer conversions.",
      solution: "Performance audit, image & asset optimization, CDN + caching.",
    },
    {
      title: "“We don't need 'AI' on our site.”",
      cost: "Excluded from AI-driven answers and zero-click discovery.",
      solution:
        "FAQ & Service Schema + conversational Q&A copy for AI quoting.",
    },
  ];

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      data-date-modified={DATE_MODIFIED}
      className="text-slate-100 max-w-7xl mx-auto py-12 md:py-16"
      role="region"
    >
      {/* SEO-friendly entity label for assistive tech & indexers */}
      <p
        id={entityLabelId}
        className="sr-only"
      >
        We make local businesses visible to customers by fixing performance,
        local listings, and structured content so search engines and AI can
        confidently reference them.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        {/* Left: Headline + short pitch */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45 }}
          >
            <h2
              id={headingId}
              className="text-3xl sm:text-4xl font-extrabold leading-tight text-white"
            >
              Your business isn’t showing up for customers. Fix it fast.
            </h2>

            <p className="mt-4 text-md text-slate-300 leading-relaxed max-w-lg">
              No jargon. No long audits. I find the three fixes that move the
              needle — speed, local listings, and machine-readable content — and
              show the expected impact in plain numbers.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <CTAButton />
              <a
                href="mailto:keshavs.0496@gmail.com?subject=Free%20AI-Readiness%20Audit"
                className="text-sm text-slate-300 underline"
                aria-label="Email to request free audit"
              >
                Or request audit by email
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400 max-w-sm">
              Free one-page audit → three prioritized fixes + estimated impact.
            </p>
          </motion.div>
        </div>

        {/* Right: Cards (mobile-first stack, desktop two-column) */}
        <div className="lg:col-span-7">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            aria-describedby={entityLabelId}
          >
            {cards.map((c, i) => (
              <motion.article
                key={i}
                variants={item}
                className="p-6 rounded-2xl bg-slate-900/40 border border-white/6 shadow-sm"
                aria-labelledby={`${sectionId}-card-${i}-title`}
                role="article"
              >
                <h3
                  id={`${sectionId}-card-${i}-title`}
                  className="text-sm font-semibold text-white leading-snug"
                >
                  {c.title}
                </h3>

                <div className="mt-3 space-y-2 text-sm leading-relaxed">
                  <p className="text-amber-300 font-medium">{c.cost}</p>
                  <p className="text-slate-300">{c.solution}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8">
            <motion.ul
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <li className="text-xs text-slate-400">
                <strong className="text-white">Immediate wins:</strong> Faster
                pages, consistent listings, and AI-readable FAQs.
              </li>
              <li className="text-xs text-slate-400">
                <strong className="text-white">Typical delivery:</strong> 3
                prioritized fixes in a PDF + optional implementation.
              </li>
            </motion.ul>
          </div>
        </div>
      </div>

      {/* SEO-focused JSON-LD & simple metadata for structured results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Local SEO & Web Infrastructure Audit",
            provider: {
              "@type": "Person",
              name: "Keshav S.",
            },
            description:
              "Free technical and strategy audit for local businesses — performance, local listings, and AI-ready content to increase calls and visits.",
            keywords: [
              "local seo",
              "website performance",
              "core web vitals",
              "local business schema",
              "AI readiness",
              "FAQ schema",
              "small business web audit",
            ],
            dateModified: DATE_MODIFIED,
            mainEntity: {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What does the free audit include?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A one-page PDF with three prioritized fixes, the expected impact, and estimated costs to implement.",
                  },
                },
              ],
            },
          }),
        }}
      />
    </section>
  );
}
