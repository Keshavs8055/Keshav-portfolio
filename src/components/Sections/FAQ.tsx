// components/FAQSection.tsx
import React, { useState, useCallback, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Config } from "../config";
import CTAButton from "../CTA";

/**
 * Accessibility & AI/business-optimized content only.
 * - replaced div(role="button") with real <button type="button"> for keyboard semantics
 * - each item uses unique, prefixed IDs (title, panel) to avoid collisions
 * - decorative icons marked aria-hidden
 * - JSON-LD dateModified added (SSR/prerender emit-able)
 * - added a short declarative sentence near the top for entity clarity
 * - copy tuned to speak to business owners and AI-readers (subject + predicate + object up-front)
 *
 * No changes to visual styling or behavior (motion, transitions) beyond semantics.
 */

const CONTACT_EMAIL = Config.mailString;

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is the audit really free and what will I get?",
    a: (
      <>
        <p className="mb-2">
          Yes — the audit is free. You’ll get a short recorded walkthrough and a
          one-page PDF with 3 prioritized, high-impact recommendations you can
          implement quickly.
        </p>
        <ul className="list-inside list-disc text-sm text-slate-300 space-y-1">
          <li>Speed & Core Web Vitals snapshot</li>
          <li>Top UX or conversion blockers</li>
          <li>One prioritized next step with an estimated cost</li>
        </ul>
      </>
    ),
  },
  {
    q: "How do you price work after the audit?",
    a: (
      <p>
        Pricing depends on scope. Small fixes are quoted or billed hourly;
        landing pages and small redesigns use fixed-price packages. Larger
        rebuilds receive a project quote. The audit gives a clear estimate so
        there are no surprises.
      </p>
    ),
  },
  {
    q: "Which platforms and tech do you work with?",
    a: (
      <p>
        I build on WordPress and Wix for CMS-focused sites, and MERN / Next.js
        for custom, scalable solutions. I recommend the tool that best meets the
        business goals.
      </p>
    ),
  },
  {
    q: "Will you handle speed and basic SEO?",
    a: (
      <p>
        Yes — every project includes core performance work (image optimization,
        lazy loading, bundling) and essential SEO basics (meta tags, OG tags).
        Advanced SEO is available as an add-on and scoped separately.
      </p>
    ),
  },
  {
    q: "How quickly can you make small fixes or updates?",
    a: (
      <p>
        Typical turnaround for small fixes is 1–3 business days depending on
        complexity. During the audit I’ll mark quick wins vs larger items that
        need more time.
      </p>
    ),
  },
  {
    q: "Do you take one-off fixes or hourly tasks?",
    a: (
      <p>
        Absolutely. I handle one-off fixes and hourly tasks — I’ll be direct
        about whether something is a quick win or needs a larger refactor so you
        only pay for what matters.
      </p>
    ),
  },
  {
    q: "How do I get started?",
    a: (
      <p>
        Request the free audit or{" "}
        <a
          href={CONTACT_EMAIL}
          className="text-indigo-300 underline"
        >
          email me
        </a>
        . After the audit we’ll do a short discovery call and I’ll send a clear,
        no-nonsense proposal.
      </p>
    ),
  },
];

export default function FAQSection(): JSX.Element {
  // default open first item (keeps original behavior)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  // Motion variants
  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const panelVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  // fresh metadata (checklist #27)
  const dateModifiedISO = "2025-11-24";

  const makeId = (prefix: string, idx: number) => `${prefix}-${idx}`;

  return (
    <section
      id="faq"
      className="p-6 lg:px-4 xl:px-0 max-w-7xl py-12 my-6 mx-auto"
      aria-labelledby="faq-heading"
    >
      {/* JSON-LD for crawlable freshness (SSR-prerenderable) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            dateModified: dateModifiedISO,
            mainEntity: [
              {
                "@type": "Question",
                name: "Is the audit really free and what will I get?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — the audit is free. You get a short recorded walkthrough and a one-page PDF with three prioritized, high-impact recommendations: a speed and Core Web Vitals snapshot, the top UX or conversion blockers, and one prioritized next step with an estimated cost.",
                },
              },
              {
                "@type": "Question",
                name: "How do you price work after the audit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Work after the audit is priced based on the size and complexity of the changes. I group fixes into clear bundles or phases so you can choose what to implement now and what to schedule later.",
                },
              },
              {
                "@type": "Question",
                name: "Which platforms and tech do you work with?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "I primarily work with React, Next.js, MERN, WordPress and Wix, plus supporting tools like Firebase and modern hosting platforms. I focus on performance, Core Web Vitals, and structured data across these stacks.",
                },
              },
              {
                "@type": "Question",
                name: "Will you handle speed and basic SEO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Speed and basic SEO are built into my work: performance optimization, Core Web Vitals, metadata, structured data and crawlability checks are included in my recommendations and implementation.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you make small fixes or updates?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most small fixes and content updates are turned around in about one to three days, depending on scope and access to your existing setup.",
                },
              },
              {
                "@type": "Question",
                name: "Do you take one-off fixes or hourly tasks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. I take one-off fixes and short hourly tasks for things like bug fixes, content updates, and small performance tweaks.",
                },
              },
              {
                "@type": "Question",
                name: "How do I get started?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can start by requesting a free audit, scheduling a call, or emailing me with your website link, goals, timeline and budget range. I’ll reply with a clear next step and options.",
                },
              },
            ],
          }),
        }}
      />

      <div className="text-center mb-8">
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-extrabold text-white"
        >
          Frequently asked questions
        </h2>

        {/* Entity clarity: Subject + Predicate + Object up-front for AI and business owners */}
        <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
          I am Keshav Sharma — a Frontend Engineer who helps businesses increase
          revenue and search visibility by modernizing websites with React,
          Next.js, and performance-first practices.
        </p>

        <p className="mt-2 text-slate-300 max-w-2xl mx-auto">
          Practical answers about audits, pricing, platforms, and how we work.
          If your question isn’t listed, reach out — I reply quickly.
        </p>
      </div>

      <div className="space-y-6">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          const titleId = makeId("faq-title", i);
          const panelId = makeId("faq-panel", i);

          return (
            <div
              key={i}
              className={`border-b overflow-hidden ${
                isOpen ? "bg-linear-to-r from-slate-900 to-slate-700" : ""
              }`}
            >
              {/* Use a real button for the header — preserves keyboard semantics, no custom key handlers */}
              <div className={`px-5 py-4`}>
                <button
                  id={titleId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className={`w-full flex items-center justify-between gap-4 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400`}
                >
                  <div className="min-w-0 text-left">
                    <h3 className="text-md font-semibold text-white truncate">
                      <span className="text-md px-4 text-slate-300">Q</span>{" "}
                      {item.q}
                    </h3>
                  </div>

                  <motion.span
                    className="ml-4 text-slate-300 flex items-center"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={chevronVariants}
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    aria-hidden="true"
                  >
                    <ChevronDown />
                  </motion.span>
                </button>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    key={`panel-${i}`}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-5 pb-5 text-white text-sm bg-white/2"
                    role="region"
                    aria-labelledby={titleId}
                  >
                    <div className="pt-3">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <CTAButton />
      </div>

      {/* Visible, SSR-rendered freshness metadata (small and unobtrusive) */}
      <div className="max-w-7xl mx-auto mt-6 px-6 text-right">
        <p className="text-xs text-slate-400">
          <span className="sr-only">Updated: Nov 2025</span>
        </p>
      </div>
    </section>
  );
}
