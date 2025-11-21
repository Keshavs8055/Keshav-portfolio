// components/FAQSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Config } from "../config";

/**
 * Replace CONTACT_EMAIL with your actual mailto (or import from Config)
 */
const CONTACT_EMAIL = Config.mailString;

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is the audit completely free and what does it include?",
    a: (
      <>
        <p className="mb-2">
          Yes — the audit is completely free. I record a 60–90s Loom and provide
          a one-page PDF that lists 3 high-impact, actionable recommendations.
        </p>
        <ul className="list-inside list-disc text-sm text-slate-300 space-y-1">
          <li>Mobile usability & conversion quick wins</li>
          <li>Speed observations (desktop & mobile — Lighthouse checks)</li>
          <li>One short prioritized action plan you can implement now</li>
        </ul>
      </>
    ),
  },

  {
    q: "How much do your services cost?",
    a: (
      <>
        <p>
          Prices are <strong>flexible</strong> and depend on scope. I offer
          fixed-price packages for small projects (landing pages, redesigns) and
          custom quotes for larger builds. Use the audit to get a quick sense of
          scope.
        </p>
      </>
    ),
  },

  {
    q: "What platforms do you work on?",
    a: (
      <p>
        I build on WordPress, Wix for simpler CMS needs, and custom code (MERN /
        Next.js) for more control and scale. I pick the tool that best fits the
        business goals — not the other way around.
      </p>
    ),
  },

  {
    q: "How long does a typical project take?",
    a: (
      <p>
        Small updates or 1-page builds: ~7 days. Multi-page redesigns: 10–21
        days depending on complexity. I’ll confirm timelines before work begins
        and include milestones in the proposal.
      </p>
    ),
  },

  {
    q: "What are your payment terms?",
    a: (
      <p>
        Standard terms: <strong>50% upfront</strong>,{" "}
        <strong>25% on review</strong>, and <strong>25% on delivery</strong>. I
        accept bank transfer / UPI / Stripe links (invoice-based). Specifics
        included in each proposal.
      </p>
    ),
  },

  {
    q: "Do you provide revisions and support after launch?",
    a: (
      <p>
        Yes — each package includes a limited number of revision rounds (listed
        per package). I also offer monthly care plans for updates, hosting
        checks, and small changes.
      </p>
    ),
  },

  {
    q: "Who owns the code and assets after delivery?",
    a: (
      <p>
        You own the final website, design files, and assets. I may retain rights
        to demo screenshots unless we agree otherwise. Any third-party licenses
        (themes/plugins) are the client’s responsibility.
      </p>
    ),
  },

  {
    q: "Will you optimize my site's speed and SEO?",
    a: (
      <p>
        Yes — every build includes core performance work (image compression,
        lazy loading, basic bundling) and essential SEO (meta tags, OG tags,
        sitemap on request). Advanced SEO is available as an add-on.
      </p>
    ),
  },

  {
    q: "What if I only want small fixes?",
    a: (
      <p>
        Small updates and fixes are welcome — I price them as small tasks or
        hourly. During the audit I can estimate whether your need is a quick fix
        or needs a larger refactor.
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
          email me directly
        </a>
        . After the audit we’ll do a short discovery call and I’ll send a
        proposal.
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-slate-300">
          Short answers to common questions — if you don’t see what you need,
          drop me a note.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/6 rounded-xl overflow-hidden"
            >
              <button
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <div>
                  <div className="text-sm text-slate-300">Q</div>
                  <div className="text-md font-semibold text-white">
                    {item.q}
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="ml-4 text-slate-300"
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeIn" }}
                    className="px-5 pb-5 text-slate-300 text-sm"
                  >
                    <div className="pt-2">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
