// Projects.jsx
// Projects section + project card for Keshav Sharma
// - Tailwind CSS + Framer Motion + lucide-react
// - Minimal, responsive, modern with subtle vintage accents
// - Map over ProjectsConfig.projects (example provided below)
// - Replace image imports/URLs in ProjectsConfig with your actual files

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ProjectsConfig } from "../config";

// Example data. Replace image entries with imported assets or absolute URLs.
// If using CRA/Vite import images at top of file and reference the imported variables.

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6  text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold">
            Personal projects
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            A curated set of work — focused on impact, performance, and clarity.
            Click any project to explore live or view code.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectsConfig.projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]"
            >
              {/* Image area */}
              <div className="w-full h-48 sm:h-40 md:h-44 lg:h-48 overflow-hidden bg-[#071028]">
                {/* If you import images, replace src with the imported variable */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* content */}
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-300 max-w-xs">
                      {p.description}
                    </p>
                  </div>

                  {/* vintage corner */}
                  <div className="pointer-events-none opacity-5 select-none hidden sm:block">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="22"
                        cy="22"
                        r="20"
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>

                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-white/6"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* actions + meta */}
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Featured</div>

                  <div className="flex items-center gap-3">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-white"
                        aria-label={`View ${p.title} source`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium rounded px-3 py-1 bg-white/6 hover:bg-white/8"
                        aria-label={`Open ${p.title} live`}
                      >
                        Live
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* hover overlay: more details (visible on mobile by default) */}
              <div className="p-2 bg-linear-60  inset-0 flex items-end pointer-events-none">
                <div className="w-full pointer-events-auto">
                  <div className="text-xs text-slate-300 opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 bg-linear-to-t from-black/40 via-transparent rounded-t-xl p-3">
                    {/* extra detail placeholder - swap with real content if needed */}
                    <div className="flex items-center justify-between">
                      <div className="text-xs">
                        Role: {p.role || "Full Stack Developer"}
                      </div>
                      <div className="text-xs">Year: 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="m-5 text-center">
          <a href="https://github.com/keshavs8055">View More on GitHub</a>
        </div>
      </div>
    </section>
  );
}
