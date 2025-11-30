// src/components/Landing/Landing.tsx
import React from "react";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Config } from "../config";
import VECTOR from "/vector.webp";
import CTAButton from "../CTA";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "circOut" },
  },
};

export default function Landing() {
  const id = React.useId();
  const sectionId = `home-${id}`;
  const entityLabelId = `entity-${id}`;

  // Component-level freshness metadata (Date Modified Check)
  const DATE_MODIFIED = "2025-11-30";

  return (
    <section
      id={sectionId}
      aria-labelledby={entityLabelId}
      data-date-modified={DATE_MODIFIED}
      className="p-6 lg:px-4 xl:px-0 max-w-7xl min-h-[90vh] mx-auto flex items-center justify-between relative"
    >
      {/* Entity Clarity Check: short declarative statement for knowledge graphing (visually hidden) */}
      <p
        id={entityLabelId}
        className="sr-only"
      >
        I am a Web Infrastructure Specialist focusing on performance,
        visibility, and AI-readiness.
      </p>

      {/* Background Elements */}
      <div
        className="absolute top-10 left-0 w-80 h-80 bg-pink-500/20  rounded-full blur-xl  "
        aria-hidden
      />
      <div
        className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-xl  "
        aria-hidden
      />

      <div className="grid grid-cols-1 rounded-2xl  lg:grid-cols-3 gap-12 lg:gap-24 items-center justify-between w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:col-span-2"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl text-white sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Web Infrastructure Specialist
              <br />
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-text-muted max-w-xl leading-relaxed">
              I improve your website’s performance, visibility, and AI-readiness
              — small, focused changes that increase conversions and make your
              site future-proof. Free audit included.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <CTAButton />

            <a
              href={Config.schedulingLink}
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-sm"
              aria-label="Start a project - scheduling link"
            >
              Start a Project
              <ArrowRight
                className="w-4 h-4"
                aria-hidden
              />
            </a>

            <div
              className="flex items-center gap-4 px-2"
              role="group"
              aria-label="Social links"
            >
              <a
                href="https://github.com/keshavs8055"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors"
                aria-label="Open GitHub in a new tab"
              >
                <Github
                  className="w-6 h-6"
                  aria-hidden
                />
              </a>
              <a
                href="https://linkedin.com/in/keshav-sharma-1482b7189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors"
                aria-label="Open LinkedIn in a new tab"
              >
                <Linkedin
                  className="w-6 h-6"
                  aria-hidden
                />
              </a>
              <a
                href={Config.mailString}
                className="text-text-muted hover:text-white transition-colors"
                aria-label="Send email"
              >
                <Mail
                  className="w-6 h-6"
                  aria-hidden
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-text-muted"
          >
            {/* <div
              className="flex -space-x-2"
              aria-hidden
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-slate-800 border-2 border-background flex items-center justify-center text-xs"
                  aria-hidden
                >
                  {i}
                </div>
              ))}
            </div> */}
            <p className="whitespace-nowrap">
              Worked for{" "}
              <a
                href="https://high1digital.com/"
                aria-description="Opens High1Digital"
                arela-label="Opens High1Digital"
                className="underline"
              >
                High1Digital
              </a>{" "}
              • Developer
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-2 text-xs text-text-muted max-w-prose"
          >
            <p>
              <strong className="text-sm">Note:</strong> SEO and code changes
              are handled separately — I provide a clear, business-friendly
              audit with prioritized fixes and transparent pricing. I also offer
              targeted AI-visibility improvements (structured data & content
              adjustments) to help your site appear in AI-powered search
              results.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-end"
          aria-hidden="false"
        >
          <div className="overflow-hidden  relative z-10 rounded-2xl border border-white/10 shadow-2xl  backdrop-blur-sm w-[520px]">
            {/* width & height attributes added to prevent CLS (18:12 approx) */}
            <img
              src={VECTOR}
              alt="Illustration of a modern website interface"
              width={520}
              height={320}
              className="w-full h-auto object-cover opacity-95 hover:scale-105 transition-transform duration-700"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/75 to-transparent"
              aria-hidden
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
                    aria-hidden
                  />
                  <span className="text-xs font-medium text-green-300">
                    Available for work
                  </span>
                </div>
                <div className="text-xs px-2 py-1 border border-white/10 rounded-md">
                  Free audit
                </div>
              </div>
              <p className="text-sm text-slate-300">
                Performance • AI-ready visibility • Core web vitals
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* JSON-LD with dateModified for indexing/trust signals (emittable at SSR/prerender level) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Web Infrastructure Specialist",
            description:
              "Improves website performance, visibility, and AI-readiness with audits and prioritized fixes.",
            dateModified: DATE_MODIFIED,
          }),
        }}
      />
    </section>
  );
}
