// src/components/Sections/Problems.tsx
import React, { memo, useId } from "react";
import { motion, type Variants } from "framer-motion";
import { AlertTriangle, Bolt, Globe, ClipboardCheck } from "lucide-react";
import CTAButton from "../CTA";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: "easeOut" },
  },
};

const DATE_MODIFIED = "2025-11-30";

const problemsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPageElement",
  name: "Problems: AI visibility for small businesses",
  description:
    "Explains why AI-driven search can hide businesses and lists four quick, business-first issues to fix.",
  dateModified: DATE_MODIFIED,
};

const Problems: React.FC = () => {
  const id = useId();
  const sectionId = `problems-${id}`;
  const headingId = `problems-heading-${id}`;

  return (
    <section
      id={sectionId}
      role="region"
      aria-labelledby={headingId}
      data-date-modified={DATE_MODIFIED}
      className="mx-auto max-w-7xl px-6 py-20 lg:px-4 xl:px-0"
    >
      {/* Decorative band to create distinct visual rhythm from Landing */}
      <div className="w-full rounded-3xl gradient-to-r from-black/30 via-violet-800/20 to-black/20 p-6 shadow-lg md:p-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Left copy: concise, punchy, outcome-first */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <motion.h2
              id={headingId}
              variants={itemVariants}
              className="text-2xl font-extrabold leading-tight text-white md:text-3xl"
            >
              When AI answers your customer's question, do they mention you?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg leading-relaxed text-text-muted"
            >
              Modern assistants pick a single, trusted source. If your site is
              slow, inconsistent, or missing clear facts, those assistants skip
              you — and so do customers. Small fixes deliver real attention.
            </motion.p>

            {/* compact benefit strip (three quick promises) */}
            <motion.div
              variants={itemVariants}
              className="mt-2 flex flex-wrap gap-3"
              aria-hidden="true"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/6 px-3 py-2 text-sm">
                <Bolt
                  className="h-4 w-4 text-emerald-300"
                  aria-hidden="true"
                  focusable="false"
                />
                AI-visible content
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/6 px-3 py-2 text-sm">
                <Globe
                  className="h-4 w-4 text-sky-400"
                  aria-hidden="true"
                  focusable="false"
                />
                Consistent business facts
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/6 px-3 py-2 text-sm">
                <ClipboardCheck
                  className="h-4 w-4 text-indigo-300"
                  aria-hidden="true"
                  focusable="false"
                />
                Clear trust signals
              </div>
            </motion.div>

            {/* short kicker */}
            <motion.p
              variants={itemVariants}
              className="max-w-lg pt-3 text-xs text-slate-400"
            >
              Quick wins: structured facts, 2–3 key pages that render reliably,
              and visible reputation — every step raises your odds of being
              cited.
            </motion.p>
          </motion.div>

          {/* Right visual: cards summarising the four AI problems — feels different from landing */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col gap-4"
            aria-label="Common AI visibility problems"
          >
            {/* stacked problem cards */}
            <div className="grid grid-cols-1 gap-3">
              <article className="flex items-start gap-3 rounded-xl border border-white/6 gradient-to-b from-white/3 to-white/2 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-500/8">
                  <AlertTriangle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Zero-click answers
                  </h3>
                  <p className="max-w-xs text-sm text-slate-300">
                    Your content isn't structured for AI — users get answers
                    without visiting you.
                  </p>
                </div>
              </article>

              <article className="flex items-start gap-3 rounded-xl border border-white/6 gradient-to-b from-white/3 to-white/2 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/8">
                  <Bolt
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Unreliable rendering
                  </h3>
                  <p className="max-w-xs text-sm text-slate-300">
                    Slow or JS-heavy pages break crawlers and assistants — so
                    they ignore the page.
                  </p>
                </div>
              </article>

              <article className="flex items-start gap-3 rounded-xl border border-white/6 gradient-to-b from-white/3 to-white/2 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-500/8">
                  <Globe
                    className="h-5 w-5 text-sky-400"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Fragmented facts
                  </h3>
                  <p className="max-w-xs text-sm text-slate-300">
                    Different names, addresses or hours across sites confuse
                    assistants and customers.
                  </p>
                </div>
              </article>

              <article className="flex items-start gap-3 rounded-xl border border-white/6 gradient-to-b from-white/3 to-white/2 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-500/8">
                  <ClipboardCheck
                    className="h-5 w-5 text-indigo-300"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    No trust signals
                  </h3>
                  <p className="max-w-xs text-sm text-slate-300">
                    Reviews, concise answers, and clear staff/credentials make
                    the difference.
                  </p>
                </div>
              </article>
            </div>
          </motion.div>
        </div>

        <div className="mt-2 hidden overflow-hidden rounded-lg py-10 text-center md:block">
          <h1 className="my-10 text-5xl">Your business is invisible to AI</h1>
          <motion.div
            variants={itemVariants}
            className="mt-4 flex items-center justify-center gap-4"
          >
            <CTAButton />
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm"
              aria-label="See services"
            >
              See services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Schema (keeps AI-readability but minimal) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(problemsSchema),
        }}
      />
    </section>
  );
};

export default memo(Problems);
