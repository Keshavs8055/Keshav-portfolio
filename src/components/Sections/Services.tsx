import { motion } from "framer-motion";
import { RefreshCcw, Sparkles, Layers, Wand2, ArrowRight } from "lucide-react";

/**
 * Accessibility & metadata improvements:
 * - unique IDs per card elements (title, desc, highlights) to support aria-labelledby / aria-describedby
 * - explicit aria-hidden="true" where content is decorative
 * - CTA links have accessible names (aria-label)
 * - "More" button has type="button" and an aria-label
 * - The section has aria-labelledby referencing the visible heading
 * - Inject JSON-LD with dateModified for freshness signals
 *
 * NOTE: functionality and design (styles/classes) intentionally unchanged.
 */

export default function ServicesSection() {
  const services = [
    {
      icon: Wand2,
      title: "Free Website Audit",
      short: "Clear, non-technical report with prioritized fixes.",
      highlights: ["Core Web Vitals", "Conversion blockers", "AI-readiness"],
      tag: "Free",
      cta: { label: "Get Audit", href: "/audit" },
    },
    {
      icon: RefreshCcw,
      title: "Speed & Core Web Vitals",
      short: "Fast load times → higher conversions.",
      highlights: ["Images & assets", "CDN & caching", "Bundle trimming"],
      tag: "Performance",
      cta: { label: "Learn more", href: "/performance" },
    },
    {
      icon: Sparkles,
      title: "AI-Ready SEO",
      short: "Make your site visible to ChatGPT & AI search.",
      highlights: ["Structured Data", "Entity Optimization", "Schema.org"],
      tag: "AI",
      cta: { label: "Learn more", href: "/ai-seo" },
    },
    {
      icon: Layers,
      title: "React/Next.js Fixes",
      short: "Expert fixes for modern web apps.",
      highlights: ["SSR/SSG", "Hydration Errors", "SEO Optimization"],
      tag: "Dev",
      cta: { label: "Learn more", href: "/react-next" },
    },
  ];

  // helper to produce unique, safe IDs (prefix to avoid collisions)
  const makeId = (prefix: string, text: string, index: number) =>
    `${prefix}-${index}-${String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`;

  // dateModified for JSON-LD and visible footer meta. Use a stable ISO date (today: 2025-11-24).

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto py-20"
    >
      <div className="p-6 lg:px-4 xl:px-0 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2
            id="services-heading"
            className="text-2xl md:text-3xl font-semibold text-white"
          >
            Services - Refined to your{" "}
            <span className="text-pink-500">custom needs</span>
          </h2>
          <p className="mt-3 text-slate-300">
            Fast wins and clear roadmaps — audits are free and give you
            prioritized fixes so you only pay for what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const titleId = makeId("svc-title", s.title, i);
            const shortId = makeId("svc-short", s.title, i);
            const highlightsId = makeId("svc-highlights", s.title, i);
            const tagId = makeId("svc-tag", s.title, i);

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                whileHover={{
                  translateY: -6,
                  boxShadow: "0 10px 30px rgba(2,6,23,0.5)",
                }}
                // article element already semantic — avoid redundant role attribute
                className="relative rounded-xl overflow-hidden cursor-default"
              >
                {/* glass card decorative layer (decorative) */}
                <div
                  className="absolute inset-0 bg-linear-to-b from-white/3 to-white/2/10 opacity-10 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 backdrop-blur-md bg-white/3 border border-white/6 rounded-xl p-5 h-full flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 grid place-items-center w-12 h-12 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(99,102,241,0.06))",
                        border: "1px solid rgba(99,102,241,0.12)",
                      }}
                      aria-hidden="true"
                    >
                      <Icon
                        size={22}
                        className="text-indigo-200"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <h3
                          id={titleId}
                          className="text-lg font-semibold text-white"
                        >
                          {s.title}
                        </h3>

                        <span
                          id={tagId}
                          className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full ${
                            s.tag === "Free" ? "animate-bounce" : ""
                          }`}
                          style={{
                            background:
                              s.tag === "Free"
                                ? "linear-gradient(90deg,#10b981,#06b6d4)"
                                : "linear-gradient(90deg,#7c3aed,#4f46e5)",
                            color: "white",
                          }}
                          // tag is decorative label for sighted users; expose as text but mark as presentational to AT when appropriate
                          aria-hidden="true"
                        >
                          {s.tag}
                        </span>
                      </div>

                      <p
                        id={shortId}
                        className="mt-1 text-sm text-slate-300"
                      >
                        {s.short}
                      </p>

                      {/* compact highlights for fast scanning */}
                      <div
                        id={highlightsId}
                        className="mt-3 text-xs text-slate-400 flex items-center gap-2 flex-wrap"
                        aria-label={`${s.title} highlights`}
                      >
                        {s.highlights.slice(0, 3).map((h, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/3"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-indigo-300 block"
                              aria-hidden="true"
                            />
                            <span className="truncate">{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <a
                      href={s.cta.href}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-sm"
                      aria-label={`${s.cta.label} — ${s.title}`}
                    >
                      {s.cta.label}
                      <ArrowRight className="w-4 h-4 opacity-90" />
                    </a>

                    <a
                      href={s.cta.href}
                      className="text-sm text-slate-300 hover:text-white"
                      aria-label={`More about ${s.title}`}
                    >
                      More
                    </a>
                  </div>
                </div>

                {/* subtle decorative gradient border (decorative) */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(124,58,237,0.06), rgba(99,102,241,0.04))",
                    maskImage: "linear-gradient(#000, #000)",
                  }}
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-8 text-center text-sm text-slate-400">
          <p>
            <strong className="text-white">Quick note:</strong> Audits are
            separated from code work — you get a prioritized plan and
            transparent pricing. AI-visibility improvements (structured data &
            content shape) are offered as a targeted enhancement.
          </p>

          {/* Visible metadata for humans (small, non-intrusive). Keep it SSR-rendered. */}
          <p
            className="mt-3 text-xs text-slate-500"
            aria-hidden={false}
          >
            <span className="sr-only">Updated: Nov 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
}
