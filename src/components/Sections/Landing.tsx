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
  return (
    <section
      id="home"
      className="p-6 lg:px-4 xl:px-0 max-w-7xl min-h-[90vh] mx-auto flex items-center justify-between relative"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-pink-500/20  rounded-full blur-xl  " />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-xl  " />

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
              aria-label="Start a project"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-4 px-2">
              <a
                href="https://github.com/keshavs8055"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/keshav-sharma-1482b7189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={Config.mailString}
                className="text-text-muted hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-text-muted"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-slate-800 border-2 border-background flex items-center justify-center text-xs"
                  aria-hidden
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="whitespace-nowrap">
              Trusted by local businesses • Audits & small fixes
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
        >
          <div className="overflow-hidden  relative z-10 rounded-2xl border border-white/10 shadow-2xl  backdrop-blur-sm w-[520px]">
            <img
              src={VECTOR}
              alt="Illustration of a modern website interface"
              className="w-full h-auto object-cover opacity-95 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/75 to-transparent">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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
    </section>
  );
}
