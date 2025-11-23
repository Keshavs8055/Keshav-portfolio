// components/ProblemSolutionSection.tsx
import { motion, type Variants } from "framer-motion";
import type { JSX } from "react";
import CTAButton from "../CTA";

const problems = [
  {
    short: "AI zero-click answers",
    line: "Search often returns single AI summaries — many customers never reach your site.",
    impact: "Missed leads & lost revenue",
  },
  {
    short: "Client-side rendering blindspots",
    line: "Important content rendered in JS can be skipped by crawlers and LLM indexers.",
    impact: "Partial indexing → lower visibility",
  },
  {
    short: "Inconsistent business data",
    line: "Different name/address/phone across platforms confuses AI entity resolution.",
    impact: "AI won't confidently cite you",
  },
  {
    short: "Missing trust signals",
    line: "No staff bios, service reviews, or verifiable credentials for AI to reference.",
    impact: "Excluded from high-value answers",
  },
  {
    short: "Content not conversational",
    line: "Copy written for keywords, not the question-and-answer style LLMs prefer.",
    impact: "Not surfaced for natural queries",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
};

export default function ProblemSolutionSection(): JSX.Element {
  return (
    <section
      id="ai-problem"
      aria-label="Problems businesses face with AI visibility"
      className=" text-slate-100 max-w-7xl mx-auto p-6 lg:px-4 xl:px-0"
    >
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          {/* LEFT: Headline */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                Your websites are not AI ready
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-lg">
                LLMs and generative search changed discovery. Below are the
                avoidable technical and content gaps that make businesses
                invisible to AI — and cost real customers.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton />
              </div>

              <div className="mt-5 text-xs text-slate-400">
                Technical brief:{" "}
                <a
                  href="https://docs.google.com/document/d/1eHJtL0nrrf73zjkLjr0jFYoEgJtHu32IRYQXBCGeYYU/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-slate-100"
                >
                  AI Readiness for Small Businesses
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Minimal problem list */}
          <div className="lg:col-span-6">
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-3"
            >
              {problems.map((p, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-start gap-4 py-4 w-full border-b border-white/50"
                >
                  <div className="flex-none mt-1">
                    <span className="inline-block w-3 h-3 rounded-full bg-emerald-400" />
                  </div>

                  <div className="min-w-0 grow">
                    <div className="flex items-baseline justify-between gap-3 space-y-3">
                      <h3 className="text-sm font-semibold text-white truncate">
                        {p.short}
                      </h3>
                      <span className="text-[11px] text-amber-300/90">
                        {p.impact}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-300 leading-snug">
                      {p.line}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* small callout */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.06 }}
              className="mt-6 flex items-center justify-between gap-4 bg-transparent text-sm text-slate-300"
            >
              <div>
                <strong className="text-white">What owners need now</strong>
                <div className="mt-1 text-xs text-slate-400">
                  Fast mobile pages, consistent business data, visible trust
                  signals, and FAQ answers that LLMs can quote.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
