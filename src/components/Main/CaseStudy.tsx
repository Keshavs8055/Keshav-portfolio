"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, Zap, MonitorSmartphone } from "lucide-react";
import { NavLink } from "react-router";
import BEFORE1 from "../../assets/case-study/before1.png";
import BEFORE2 from "../../assets/case-study/before2.png";
import BEFORE3 from "../../assets/case-study/before3.png";
import BEFORE4 from "../../assets/case-study/before4.png";
import BEFORE5 from "../../assets/case-study/before5.png";
import { Config } from "../config";

/**
 * NOTE: This page presents a conceptual, speculative plan for improving a publicly
 * accessible website. It is NOT an official client project. Screenshots shown are
 * publicly available and used for critique and demonstration only. Any phone numbers,
 * emails or other personal data have been removed or blurred in the images shown.
 */

export default function AcademyRedesignCaseStudy() {
  return (
    <div className="text-white bg-[#061022] min-h-screen pb-24">
      {/* HEADER */}
      <section className="py-20 px-6 border-b border-white/10 bg-[linear-gradient(180deg,#071124,#04111a)]">
        <div className="max-w-5xl mx-auto">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </NavLink>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Case Study — Computer Academy (Conceptual / Mock)
          </motion.h1>

          <p className="mt-4 text-slate-300 max-w-3xl">
            A conceptual, non-commissioned plan for modernizing a local computer
            academy’s public website. This page shows the current issues, a
            proposed plan using modern technologies, and hypothetical impact
            estimates.
            <br />
            <span className="text-slate-400 text-sm italic">
              *This is a mock redesign / proposed plan — not an official client
              project.*
            </span>
          </p>

          {/* safety note */}
          <div className="mt-4 p-3 bg-[#0b1620] border border-white/5 rounded-md text-slate-300 text-sm">
            <strong className="text-indigo-300">Safety & usage:</strong>{" "}
            Screenshots are taken from a publicly accessible website and are
            used for critique and demonstration only. Any personal contact
            details visible in the screenshots have been removed or will be
            blurred before publishing. If you prefer, I can request permission
            from the owner before sharing publicly.
          </div>
        </div>
      </section>

      {/* BEFORE SECTION */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold"
          >
            01 — The Existing Website
          </motion.h2>

          <p className="mt-4 text-slate-300 max-w-3xl">
            The academy’s current website is a single-page layout that uses
            jQuery and legacy CSS. It functions but shows multiple technical and
            UX shortcomings that reduce trust and conversions.
          </p>

          {/* SCORE SUMMARY */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Performance", score: 55 },
              { label: "Accessibility", score: 78 },
              { label: "Best Practices", score: 69 },
              { label: "SEO", score: 85 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/10 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-indigo-300">
                  {item.score}
                </div>
                <div className="text-sm mt-1 text-slate-300">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* BEFORE IMAGES GRID - handles mixed aspect ratios */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[BEFORE1, BEFORE2, BEFORE3, BEFORE5].map((imgSrc, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-white/10 rounded-xl p-4 flex items-center justify-center"
              >
                {/* fixed card frame with aspect ratio, images fit using object-contain */}
                <div className="w-full bg-black/40 rounded-lg overflow-hidden border-2 border-indigo-300 flex items-center justify-center">
                  <img
                    src={imgSrc}
                    alt={`Before screenshot ${idx + 1}`}
                    className="w-full h-full object-contain"
                    style={{ maxHeight: "100%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* single wider screenshot */}
          <div className="my-8">
            <h2 className="text-lg font-semibold mb-3">
              Primary homepage screenshot
            </h2>
            <div className="rounded-lg border border-white/10 overflow-hidden">
              <img
                src={BEFORE4}
                alt="Existing website design full"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* PROBLEMS */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">
              Key Issues Identified
            </h3>

            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• First Contentful Paint: ~6.5s — high (mobile)</li>
              <li>• Largest Contentful Paint: ~14.3s — very high</li>
              <li>• Render-blocking requests (jQuery, blocking CSS)</li>
              <li>• Unoptimized images (~255 KiB savings possible)</li>
              <li>• Legacy JavaScript & unused JS on the main thread</li>
              <li>• No loading states or progressive feedback</li>
              <li>• Weak visual hierarchy and outdated UI patterns</li>
              <li>• CTA not prominent — conversion friction</li>
              <li>
                • Mobile layout cramped — accessibility and readability issues
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* GOALS SECTION */}
      <section className="px-6 py-16 bg-[#071124] border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold"
          >
            02 — Goals of the Proposed Plan
          </motion.h2>

          <p className="mt-4 text-slate-300 max-w-3xl">
            The proposal aims to modernize the site for performance, clarity,
            and conversions, while keeping costs reasonable and using
            maintainable tooling.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: Zap,
                title: "Speed & Performance",
                desc: "Eliminate render-blocking assets, optimize images, and use modern bundling for fast loads.",
              },
              {
                icon: MonitorSmartphone,
                title: "Mobile-first UX",
                desc: "Restructure content for mobile, improve spacing, readable typography and prominent CTAs.",
              },
              {
                icon: BarChart3,
                title: "Conversion Focus",
                desc: "Clear CTA hierarchy, simple enrollment flow, and better content structure to increase trust.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/10 rounded-xl"
                >
                  <Icon
                    className="text-indigo-300 mb-4"
                    size={26}
                  />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT I WOULD DO (proposed plan) */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold"
          >
            03 — What I would do (Proposed Plan)
          </motion.h2>

          <p className="mt-4 text-slate-300 max-w-3xl">
            Below is a pragmatic, staged plan I would follow if the academy
            engaged me. It is written as a proposal — each item can be scoped
            and priced independently.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* left column: technical + UI */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/10">
                <h3 className="font-semibold text-white mb-2">
                  Modern tech & architecture
                </h3>
                <p className="text-slate-300 text-sm">
                  Propose a rebuild using <strong>Next.js</strong> (React) +{" "}
                  <strong>Tailwind CSS</strong>. This provides server-side
                  rendering, faster first paint, and easier SEO. Use modular
                  components and keep JS bundles lean.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/10">
                <h3 className="font-semibold text-white mb-2">
                  Complete UI redesign
                </h3>
                <p className="text-slate-300 text-sm">
                  Modernize the visual language, introduce consistent spacing
                  and typography, and redesign the hero to show value and CTA.
                  Improve course listing with cards and micro-interactions using{" "}
                  <strong>Framer Motion</strong>.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/10">
                <h3 className="font-semibold text-white mb-2">
                  Better CTAs & enrollment flow
                </h3>
                <p className="text-slate-300 text-sm">
                  Design a simple enrollment funnel: Hero CTA → Courses → Quick
                  enquiry modal (or mailto/Formspree) → Confirmation. Reduce
                  friction to increase submissions.
                </p>
              </div>
            </div>

            {/* right column: performance, content, SEO */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/10">
                <h3 className="font-semibold text-white mb-2">
                  Performance fixes
                </h3>
                <p className="text-slate-300 text-sm">
                  Remove render-blocking jQuery, lazy-load non-critical images,
                  use optimized formats (WebP/AVIF), and apply efficient cache
                  headers. Aim to reduce TTFB and LCP significantly.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/10">
                <h3 className="font-semibold text-white mb-2">Content & SEO</h3>
                <p className="text-slate-300 text-sm">
                  Improve copy, add proper meta tags, structured data for
                  courses, alt text for images, descriptive link text and
                  accessible headings. This improves discoverability and user
                  trust.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/10">
                <h3 className="font-semibold text-white mb-2">
                  Modern enhancements
                </h3>
                <p className="text-slate-300 text-sm">
                  Add tasteful motion (Framer Motion), optional 3D/visual
                  accents (Three.js, sparingly), and loading states to improve
                  perceived performance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-400">
            <strong>Notes on scope:</strong> Each area can be scoped as a small
            sprint (7–14 days) or combined into a full redesign (pricing and
            timeline provided after discovery).
          </div>
        </div>
      </section>

      {/* EXPECTED IMPACT */}
      <section className="px-6 py-16 bg-[#071124] border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold"
          >
            04 — Expected impact (hypothetical)
          </motion.h2>

          <p className="mt-4 text-slate-300 max-w-3xl">
            These are conservative projections based on UX and performance best
            practices. They are estimates — real numbers require A/B testing.
          </p>

          <ul className="mt-6 space-y-2 text-slate-300 text-sm">
            <li>
              • Substantially reduced LCP and FCP (target:{" "}
              <strong>under 2.5s FCP</strong> on mobile when optimized)
            </li>
            <li>
              • Clearer CTA and funnel → increased enrollments (estimate:{" "}
              <strong>15–40% uplift</strong> depending on baseline)
            </li>
            <li>• Improved trust and perceived quality from updated visuals</li>
            <li>
              • Better SEO and discoverability from proper metadata and
              structured data
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Interested in a modernization plan for your site?
          </h2>
          <p className="text-slate-300 mb-6">
            {`I can prepare a 60–90s audit and a short proposal. I respond within
            12 hours.`}
          </p>

          <a
            href={Config.mailString}
            className="px-8 py-3 bg-linear-to-r from-indigo-500 to-rose-500 rounded-lg font-semibold shadow-lg hover:scale-[1.03] transition-transform"
          >
            Request my free audit
          </a>
        </div>
      </section>
    </div>
  );
}
