import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Users, Wrench, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Config } from "../config";

export default function ProcessSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // subtle parallax background movement
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const steps = [
    {
      title: "1. Understand Your Needs",
      desc: "We start with a call where I learn your goals, audience, brand, and what’s not working today.",
      icon: Users,
    },
    {
      title: "2. Choose the Right Tools",
      desc: "Based on your needs, I decide the perfect tech — WordPress, Wix, MERN, Next.js, or custom components.",
      icon: Lightbulb,
    },
    {
      title: "3. Build With Precision",
      desc: "Clean design, fast performance, mobile-first layouts, and a conversion-focused structure.",
      icon: Wrench,
    },
    {
      title: "4. Refine Until Perfect",
      desc: "You review the work and we improve it together. Your satisfaction is the top priority — no exceptions.",
      icon: Sparkles,
    },
  ];

  return (
    <section
      ref={ref}
      id="process"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden "
    >
      {/* parallax background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-linear-to-br from-indigo-900/20 via-cyan-700/10 to-rose-700/20 opacity-[0.25] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl md:text-5xl font-extrabold">
            A process built around <span className="text-indigo-500">you</span>.
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            {`I don’t rush projects. I understand. I plan. I execute.`}
            <br />
            The goal: a website that actually feels right for your business.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-[linear-gradient(180deg,#071124,#04111a)] 
                           border border-white/10 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                    <Icon
                      size={26}
                      className="text-indigo-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-20"
        >
          <a
            href={Config.schedulingLink}
            className="inline-block px-8 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-rose-500 font-semibold 
                       text-white shadow-lg hover:scale-[1.03] transition-transform"
          >
            Start your project
          </a>

          <p className="text-slate-400 text-sm mt-3">
            I respond within 12 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
