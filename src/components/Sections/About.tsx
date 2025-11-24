import { motion } from "framer-motion";
import { SkillsConfig } from "../config";
import { Config } from "../config";
import CTAButton from "../CTA";
import { Cpu, Handshake, Linkedin, Mail } from "lucide-react";

export default function About() {
  const dateModifiedISO = "2025-11-24";
  const makeId = (prefix: string, name: string, idx: number) =>
    `${prefix}-${idx}-${String(name || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 p-6 lg:px-4 xl:px-0 max-w-7xl mx-auto relative overflow-hidden "
    >
      {/* JSON-LD freshness + author (emit-able at SSR/prerender) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Keshav Sharma",
            description:
              "Keshav Sharma is a Frontend Engineer who helps local businesses modernize and optimize websites focusing on React, Next.js, performance, and structured data.",
            dateModified: dateModifiedISO,
            sameAs: ["https://www.linkedin.com/in/keshav-sharma-1482b7189/"],
          }),
        }}
      />

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT — Bio card (glass + gradient accent) */}
          <motion.article
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-12 overflow-hidden backdrop-blur-md bg-white/6 border border-white/6 shadow-xl"
            aria-labelledby="about-heading"
          >
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            >
              <span className="text-white-500 font-semibold">
                Keshav Sharma
              </span>
            </h2>

            {/* subtitle — downgraded to h3 to preserve hierarchy */}
            <h3
              id="about-subtitle"
              className="text-md"
            >
              About Me
            </h3>

            <p
              id="about-desc"
              className="text-lg text-text-muted leading-relaxed mb-6 max-w-xl"
            >
              I help local businesses modernize and optimize their websites for
              real customers — and for the new wave of AI-driven search. I focus
              on fast wins: measurable performance improvements, cleaner booking
              flows, and structured content that makes your site easier for both
              people and AI to understand.
            </p>

            {/* features as a semantic list for screen readers / AT */}
            <ul
              id="about-features"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl"
              aria-label="Core capabilities"
            >
              {[
                "AI optimizations",
                "Mobile-first improvements",
                "Core Web Vitals & speed",
                "Conversion-focused UX",
                "Structured data & AI-readiness",
                "Accessible interfaces",
                "Clear, prioritized roadmaps",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-primary shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Credibility strip (kept layout; made semantic using role="group") */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div
                className="flex items-center gap-3"
                role="group"
                aria-label="Free technical audit"
              >
                <div
                  className="w-12 h-12 rounded-lg grid place-items-center bg-white/6 border border-white/6"
                  aria-hidden="true"
                >
                  <Cpu aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-slate-200 font-medium">
                    Free technical audit
                  </div>
                  <div className="text-xs text-slate-400">
                    Prioritized, non-technical report
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-3"
                role="group"
                aria-label="Business-first approach"
              >
                <div
                  className="w-12 h-12 rounded-lg grid place-items-center bg-white/6 border border-white/6"
                  aria-hidden="true"
                >
                  <Handshake aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-slate-200 font-medium">
                    Business-first approach
                  </div>
                  <div className="text-xs text-slate-400">
                    Clear ROI-focused priorities
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-3">
                <div className="grow lg:grow-0">
                  <CTAButton />
                </div>
                <a
                  href="https://www.linkedin.com/in/keshav-sharma-1482b7189/"
                  className="px-6 py-3 text-white border border-white/6 rounded-full font-medium overflow-hidden"
                  aria-label="Open LinkedIn profile — opens in a new tab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin aria-hidden="true" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href={Config.mailString}
                  className="px-6 py-3 text-white border border-white/6 rounded-full font-medium overflow-hidden"
                  aria-label="Send email"
                >
                  <Mail aria-hidden="true" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <p
                className="mt-3 text-xs text-slate-400 max-w-md"
                id="about-audit-note"
              >
                Audits are short, clear, and actionable — you’ll get a
                prioritized checklist and transparent pricing options. No
                jargon. No long contracts.
              </p>
            </div>
          </motion.article>

          {/* RIGHT — Tech stack + proof panel (unique layout) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Stylized card with diagonal split */}
            <div className="overflow-hidden">
              <div className="grid lg:flex flex-col justify-between">
                {/* Left: short manifesto + micro-stats */}
                <div className="pb-6 ">
                  <h3
                    id="about-manifesto"
                    className="text-xl font-semibold text-white mb-3"
                  >
                    I deliver what I promise
                  </h3>
                  <p className="text-sm text-slate-300 mb-4">
                    Clear scope. Fast wins. Maintainable code. I prioritize the
                    changes that move the needle for your business.
                  </p>

                  <div
                    className="flex flex-col gap-3 mt-4"
                    role="list"
                    aria-labelledby="about-manifesto"
                  >
                    <div
                      className="flex items-center justify-between"
                      role="listitem"
                    >
                      <div className="text-sm text-slate-300">
                        Typical small-fix turnaround
                      </div>
                      <div className="text-sm font-medium text-white">
                        1–3 days
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-between"
                      role="listitem"
                    >
                      <div className="text-sm text-slate-300">Audit length</div>
                      <div className="text-sm font-medium text-white">
                        15–30 minutes
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-between"
                      role="listitem"
                    >
                      <div className="text-sm text-slate-300">
                        Maintenance option
                      </div>
                      <div className="text-sm font-medium text-white">
                        Monthly retainers
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={Config.mailString}
                      className="text-sm text-slate-200 underline"
                      aria-label="Contact for tailored plans"
                    >
                      Contact for tailored plans
                    </a>
                  </div>
                </div>

                {/* Right: Skills grid */}
                <div className="py-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Tech & capabilities
                  </h4>

                  {/* Skills expressed as a semantic list for AT and clearer DOM */}
                  <ul
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                    aria-label="Skills and capabilities"
                  >
                    {SkillsConfig.skills.map((skill, i) => {
                      const Icon = skill.icon;
                      const id = makeId("skill", skill.name, i);
                      return (
                        <li
                          key={id}
                          id={id}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/3 border border-white/6"
                          title={skill.name}
                        >
                          <div
                            className="w-9 h-9 grid place-items-center rounded-md"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(99,102,241,0.02))",
                              border: "1px solid rgba(99,102,241,0.06)",
                            }}
                            aria-hidden="true"
                          >
                            <Icon
                              size={16}
                              className="text-indigo-200"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm text-white font-medium truncate">
                              {skill.name}
                            </div>
                            {skill.note ? (
                              <div className="text-xs text-slate-400 truncate">
                                {skill.note}
                              </div>
                            ) : null}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <p className="mt-5 text-xs text-slate-400">
                    Focus: React / Next.js / MERN, performance, structured data
                    for AI-readability, and maintainable code.
                  </p>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-40"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.06), rgba(124,58,237,0.03))",
                filter: "blur(18px)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Visible, SSR-rendered freshness metadata (checklist #27) */}
      <div className="max-w-7xl mx-auto mt-6 px-6">
        <p
          className="text-xs text-slate-400"
          aria-hidden={false}
        >
          <span className="sr-only">Updated: Nov 2025</span>
        </p>
      </div>
    </section>
  );
}
