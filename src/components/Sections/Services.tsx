import { motion } from "framer-motion";
import {
  RefreshCcw,
  Sparkles,
  Wrench,
  FilePlus,
  Globe,
  Layers,
  Wand2,
  ArrowRight,
} from "lucide-react";
import { Config } from "../config";

export default function ServicesSection() {
  const services = [
    {
      icon: Wand2,
      title: "Free Website Audit",
      short: "Clear, non-technical report with prioritized fixes.",
      highlights: ["Core Web Vitals", "Conversion blockers", "AI-readiness"],
      tag: "Free",
      cta: { label: "Request audit", href: Config.mailString },
    },
    {
      icon: RefreshCcw,
      title: "Performance Optimization",
      short: "Fast load times → higher conversions.",
      highlights: ["Images & assets", "CDN & caching", "Bundle trimming"],
      tag: "Quote",
      cta: { label: "Enquire", href: Config.mailString },
    },
    {
      icon: Sparkles,
      title: "Modernization (UI/UX)",
      short: "Polished, mobile-first improvements without a full rebuild.",
      highlights: ["Mobile polish", "Booking flow", "Brand consistency"],
      tag: "Quote",
      cta: { label: "Enquire", href: Config.mailString },
    },
    {
      icon: Wrench,
      title: "Updates & Fixes",
      short: "Reliable, quick fixes and urgent support.",
      highlights: ["Bugs & content", "Performance tweaks", "Integrations"],
      tag: "Hourly",
      cta: { label: "Get help", href: Config.mailString },
    },
    {
      icon: FilePlus,
      title: "Content & Features",
      short: "Add pages, forms, menus or light integrations.",
      highlights: ["Pages & forms", "Booking tools", "Automations"],
      tag: "Quote",
      cta: { label: "Discuss", href: Config.mailString },
    },
    {
      icon: Layers,
      title: "Custom Site (MERN / Next)",
      short: "Scalable, SEO-aware builds when you need custom code.",
      highlights: ["SSR/SSG options", "Clean architecture", "Maintainable"],
      tag: "Project",
      cta: { label: "Request quote", href: Config.mailString },
    },
    {
      icon: Globe,
      title: "Managed WordPress / Wix",
      short: "Business-friendly CMS sites that are fast and secure.",
      highlights: ["Editor-friendly", "Backups & security", "Optimized"],
      tag: "Quote",
      cta: { label: "Enquire", href: Config.mailString },
    },
  ];

  return (
    <section
      id="services"
      className="mx-auto py-20"
    >
      <div className="p-6 lg:px-4 xl:px-0 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
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
                className="relative rounded-xl overflow-hidden cursor-default"
              >
                {/* glass card */}
                <div className="absolute inset-0 bg-linear-to-b from-white/3 to-white/2/10 opacity-10 pointer-events-none" />
                <div className="relative z-10 backdrop-blur-md bg-white/3 border border-white/6 rounded-xl p-5 h-full flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 grid place-items-center w-12 h-12 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(99,102,241,0.06))",
                        border: "1px solid rgba(99,102,241,0.12)",
                      }}
                    >
                      <Icon
                        size={22}
                        className="text-indigo-200"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-white">
                          {s.title}
                        </h3>
                        <span
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
                          aria-hidden
                        >
                          {s.tag}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-slate-300">{s.short}</p>

                      {/* compact highlights for fast scanning */}
                      <div className="mt-3 text-xs text-slate-400 flex items-center gap-2 flex-wrap">
                        {s.highlights.slice(0, 3).map((h, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 block" />
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
                    >
                      {s.cta.label}
                      <ArrowRight className="w-4 h-4 opacity-90" />
                    </a>

                    <button
                      onClick={() => {
                        // scroll to contact or examples section
                        const el =
                          document.querySelector("#contact") || document.body;
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm text-slate-300 hover:text-white"
                      aria-label={`More about ${s.title}`}
                    >
                      More
                    </button>
                  </div>
                </div>

                {/* subtle decorative gradient border */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(124,58,237,0.06), rgba(99,102,241,0.04))",
                    maskImage: "linear-gradient(#000, #000)",
                  }}
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
        </div>
      </div>
    </section>
  );
}
