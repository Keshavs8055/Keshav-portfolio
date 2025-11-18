import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { LandingConfig } from "./config";

export default function Landing() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#061022] via-[#071228] to-[#071018] text-white px-6">
      <div className="px-3 py-8 lg:p-0 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: The Core Statement (instant clarity) */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {/* Small mark + name */}
          <div className="flex items-center gap-4 ">
            {/* <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-amber-100 text-[#08233a] font-semibold drop-shadow-sm font-serif">
              <SmileIcon />
            </div> */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Keshav Sharma
              </h1>
              <p className="text-sm text-slate-300 mt-1">
                Web Developer — <strong> MERN / Next.js </strong> and AI
                Enthusiast
              </p>
            </div>
          </div>

          {/* One-line value prop that hits in <3s */}
          <p className="text-xl lg:text-2xl font-medium text-slate-100 max-w-xl">
            I ship production-ready frontends: fast, accessible, and
            design-driven.{" "}
            <span className="text-indigo-300">
              Performance, clarity and thoughtful UX.
            </span>
          </p>

          {/* Primary CTA + secondary */}
          <div className="flex items-center gap-4 mt-4">
            <a href={LandingConfig.mailString}>
              <button className="bg-linear-to-r from-indigo-500 to-rose-500 px-6 py-2 rounded-lg font-bold shadow-lg hover:scale-[1.02] transition-transform">
                Contact Now
              </button>
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-300 hover:underline inline-block border-2 border-slate-600 px-4 py-2 rounded-md"
            >
              See My work
            </a>
          </div>
          {/* Key capability chips (small) */}
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-white/6 text-sm">
              MERN / Next.js
            </span>
            <span className="px-3 py-1 rounded-full bg-white/6 text-sm">
              Responsive & Accessible
            </span>
            <span className="px-3 py-1 rounded-full bg-white/6 text-sm">
              Performance-first
            </span>
            <span className="px-3 py-1 rounded-full bg-white/6 text-sm">
              Micro-interactions
            </span>
          </div>
          {/* Small proof-row: quick metrics / proof (one line) */}
          <div className="mt-6 text-sm text-slate-400 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <strong className="text-white">5+</strong> shipped apps
            </div>
            <div className="flex items-center gap-2">
              <strong className="text-white">10k+</strong> hours coding
            </div>
            <div className="flex items-center gap-2">
              <strong className="text-white">Proficient Developer</strong>
            </div>
          </div>

          {/* Minimal social row (small, unobtrusive) */}
          <div className="mt-8 flex items-center gap-4 text-slate-300">
            <a
              href="https://github.com/keshavs8055"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/keshav-sharma-1482b7189"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white"
            >
              <Linkedin />
            </a>
            <a
              href={LandingConfig.mailString}
              className="text-sm hover:text-white"
            >
              <Mail />
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Visual proof — minimal, with motion and clear focus */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="flex items-center justify-center"
        >
          {/* Card that showcases a single strong visual: either a hero screenshot or a short code snippet. Keep it focused. */}
          <div className="w-full max-w-xl">
            <div className="rounded-2xl overflow-hidden border border-white/20 bg-[linear-gradient(180deg,#071124,#04111a)] shadow-3xl">
              {/* top bar */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs text-slate-400">
                  <a href="https://github.com/keshavs8055">keshavs8055</a>
                </div>
              </div>

              {/* main visual area: replace `img` with a screenshot of a flagship project for best effect */}
              <div className="p-6 md:p-8">
                {/* OPTION A: Screenshot (recommended) */}
                <div className="w-full rounded-lg overflow-hidden bg-linear-to-r from-[#061020] to-[#071028] border border-white/3">
                  {/* Placeholder — swap src for your project's hero image */}
                  <img
                    src={LandingConfig.featured.imageName}
                    alt={LandingConfig.featured.altText}
                    className="w-full aspect-video object-contain"
                  />
                </div>
                <div className="mt-4 text-md text-white font-semibold">
                  {LandingConfig.featured.title}
                </div>
                {/* optional small feature list below card (minimal) */}
                <div className="mb-6 flex gap-3 text-sm text-slate-400">
                  {LandingConfig.featured.props.map((prop) => (
                    <div
                      key={prop}
                      className="  text-center"
                    >
                      {prop}
                    </div>
                  ))}
                </div>
                {/* short caption that tells the visitor what they'd see */}
                <div className="mt-2 text-sm text-slate-300">
                  {LandingConfig.featured.description}
                </div>

                {/* tiny CTA to open project */}
                <div className="mt-4">
                  <a
                    href={LandingConfig.featured.link}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="inline-block text-sm font-medium px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
