import { motion } from "framer-motion";
import { Smartphone, Zap, MousePointer2, Palette } from "lucide-react";

export default function ValuePillars() {
  const items = [
    {
      icon: Smartphone,
      title: "Mobile-first usability",
      desc: "Clean layouts that feel natural on every screen size.",
    },
    {
      icon: MousePointer2,
      title: "Booking & conversion flow",
      desc: "Clear CTAs and frictionless funnels to increase inquiries.",
    },
    {
      icon: Zap,
      title: "Speed & SEO fundamentals",
      desc: "Fast loads, optimized assets, and essential SEO in place.",
    },
    {
      icon: Palette,
      title: "Clean, modern UI",
      desc: "Elegant, consistent design that elevates your brand.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold text-white text-center">
        What I deliver in every project
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="p-6 bg-[linear-gradient(180deg,#071124,#04111a)] border border-white/5 rounded-xl"
            >
              <Icon
                className="text-indigo-300 mb-4"
                size={28}
              />
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
