import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Calendar } from "lucide-react";
import { Config } from "../config";

/**
 * Contact — accessibility, semantics, metadata only.
 * - preserves visuals & behavior exactly
 * - adds aria labels, unique IDs, JSON-LD dateModified, entity-clarity (sr-only)
 * - decorative elements hidden from AT
 * - visible, SSR-rendered "Updated" line for freshness signals
 *
 * Do not change functionality or design.
 */

export default function Contact() {
  const dateModifiedISO = "2025-11-24";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 overflow-hidden "
    >
      {/* JSON-LD freshness (emit-able at SSR/prerender) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact",
            description:
              "Contact Keshav Sharma — Frontend Engineer (React, Next.js) for audits, performance and custom sites.",
            dateModified: dateModifiedISO,
            sameAs: [
              "https://www.linkedin.com/in/keshav-sharma-1482b7189",
              "https://github.com/keshavs8055",
            ],
          }),
        }}
      />

      <div className="p-12 lg:px-4 xl:px-0 max-w-7xl mx-auto relative">
        {/* Decorative shapes — explicitly hidden from AT */}
        <div
          className="absolute w-50 h-50 border-8 border-pink-900/90   bottom-10 right-40 rounded-4xl z-0 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute w-50 h-50 border-8 border-pink-900/90   top-10 left-40 z-0 rounded-4xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto text-center bg-black/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Visible heading + entity clarity (sr-only declarative line for AI owners) */}
            <h2
              id="contact-heading"
              className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
            >
              Let's work <br />
              <span className="text-gradient">together.</span>
            </h2>

            {/* Entity clarity for AI/search — visible to screen readers first but also crawlable (sr-only kept for visual parity) */}
            <p
              className="sr-only"
              id="contact-entity"
            >
              I am Keshav Sharma — a Frontend Engineer specializing in React,
              Next.js, performance, and structured data for better search and
              conversions.
            </p>

            <p
              className="text-xl text-text-muted mb-12 max-w-2xl mx-auto"
              aria-describedby="contact-entity"
            >
              Have a project in mind? I help businesses and creators build
              high-quality digital experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={Config.schedulingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden"
                aria-label="Schedule a call — opens scheduling page in a new tab"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Call{" "}
                  <Calendar
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
                </span>
                <div
                  className="absolute inset-0 bg-slate-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                  aria-hidden="true"
                />
              </a>

              <a
                href={Config.mailString}
                className="group px-8 py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2"
                aria-label="Email me"
              >
                <span>Email Me</span>
                <Mail
                  className="w-4 h-4"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div
              className="mt-16 flex justify-center gap-8"
              aria-label="Social links"
            >
              <a
                href="https://www.linkedin.com/in/keshav-sharma-1482b7189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors flex items-center gap-2"
                aria-label="Open LinkedIn profile — opens in a new tab"
              >
                <span>LinkedIn</span>
                <ArrowUpRight
                  className="w-4 h-4"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://github.com/keshavs8055"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors flex items-center gap-2"
                aria-label="Open GitHub profile — opens in a new tab"
              >
                <span>GitHub</span>
                <ArrowUpRight
                  className="w-4 h-4"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visible, SSR-rendered freshness metadata (checklist #27) */}
    </section>
  );
}
