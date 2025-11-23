// components/FAQSection.tsx
import React, { useState, useCallback, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Config } from "../config";
import CTAButton from "../CTA";

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

  return (
    <section
      id="faq"
      className="p-6 lg:px-4 xl:px-0 max-w-7xl py-12 my-6 mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-slate-300 max-w-2xl mx-auto">
          Practical answers about audits, pricing, platforms, and how we work.
          If your question isn’t listed, reach out — I reply quickly.
        </p>
      </div>

      <div className="space-y-6">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`border-b overflow-hidden ${
                isOpen ? "bg-linear-to-r from-slate-900 to-slate-700" : ""
              }`}
              aria-labelledby={`faq-${i}-title`}
            >
              {/* Entire header clickable — accessible as a button */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className={`flex items-center justify-between gap-4 px-5 py-4 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  isOpen ? "bg-white/6" : ""
                }`}
              >
                <div className="min-w-0">
                  <div
                    id={`faq-${i}-title`}
                    className="text-md font-semibold text-white truncate"
                  >
                    <span className="text-md px-4 text-slate-300">Q</span>{" "}
                    {item.q}
                  </div>
                </div>

                <motion.div
                  className="ml-4 text-slate-300 flex items-center"
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  variants={chevronVariants}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  aria-hidden
                >
                  <ChevronDown />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    key="panel"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-5 pb-5 text-white text-sm bg-white/2"
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
    </section>
  );
}
