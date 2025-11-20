import { motion } from "framer-motion";
import {
  RefreshCcw,
  Sparkles,
  Wrench,
  FilePlus,
  Globe,
  Layers,
  Wand2,
} from "lucide-react";
import { Config } from "../config";

export default function ServicesSection() {
  const services = [
    {
      icon: Wand2,
      title: "Free Website Audit",
      desc: "A quick audit where I review your website’s design, speed, structure, and booking flow. You get clear actionable feedback.",
      price: "Free",
    },
    {
      icon: RefreshCcw,
      title: "Website Redesign",
      desc: "Transform your old or outdated website into a modern, clean, mobile-first experience.",
      price: "Flexible",
    },
    {
      icon: Sparkles,
      title: "Modernization",
      desc: "Improve speed, mobile usability, brand consistency, UI/UX, and overall experience.",
      price: "Flexible",
    },
    {
      icon: Wrench,
      title: "Updates & Fixes",
      desc: "Small fixes, design adjustments, replacing outdated content, and improving performance.",
      price: "Flexible",
    },
    {
      icon: FilePlus,
      title: "Add Content & Features",
      desc: "Add new sections, pages, blogs, menus, product listings, booking forms, or integrations.",
      price: "Flexible",
    },
    {
      icon: Layers,
      title: "Custom Website (Code)",
      desc: "Build from scratch using MERN or Next.js — modern, scalable, and fully custom.",
      price: "Flexible",
    },
    {
      icon: Globe,
      title: "WordPress / Wix Build",
      desc: "Create a polished, easy-to-manage website using WordPress or Wix — optimized and tailored to your business.",
      price: "Flexible",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      {/* HEADER */}

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Services I Offer
        </h2>
        <p className="mt-3 text-slate-300">
          From small updates to full-scale redesigns — everything you need to
          elevate your business online.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="p-6 rounded-xl bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/5 shadow-md hover:shadow-lg transition-all relative"
            >
              {s.price === "Free" ? (
                <div className="absolute -top-2 -right-1 bg-pink-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                  Free
                </div>
              ) : null}
              <Icon
                size={28}
                className="text-indigo-300 mb-4"
              />

              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>

              <div className="mt-4 text-sm text-slate-400">
                <span className="font-semibold text-indigo-300">{s.price}</span>{" "}
                {s.price === "Free" ? "" : "— based on scope & complexity"}
              </div>

              <div className="mt-6">
                <a
                  href={Config.mailString}
                  className="inline-block px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                >
                  Enquire about this
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
