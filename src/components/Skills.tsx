import { motion } from "framer-motion";
import { SkillsConfig } from "./config";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="py-20 bg-linear-to-b from-[#071024] to-[#041018] text-white px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              What I build
            </h2>
            <p className="mt-3 text-slate-300">
              A concise, honest list of what I ship and maintain — from
              pixel-perfect UI to backend glue and automation.
            </p>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SkillsConfig.skills.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl p-6 border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-amber-100 text-[#08233a] font-semibold shadow-sm">
                  {/* Icon */}
                  <s.icon className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{s.note}</p>

                  {/* small vintage tag */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="text-xs text-slate-400 uppercase tracking-wide">
                      confidence
                    </div>
                    <div className="flex-1">
                      <div className="w-full h-2 rounded-full bg-white/6 overflow-hidden">
                        <div
                          className={`h-2 rounded-full bg-linear-to-r from-indigo-500 to-rose-500`}
                          style={{ width: `${70 + (i % 3) * 8}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-xs text-slate-300 w-10 text-right">
                      {70 + (i % 3) * 8}%
                    </div>
                  </div>
                </div>
              </div>

              {/* subtle vintage corner */}
              <div className="pointer-events-none absolute right-4 top-4 opacity-5 select-none">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="22"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* hover reveal (more detail) */}
              <div className="mt-4">
                {/* 
    - Mobile (<= md): visible by default -> opacity-100
    - Desktop (>= md): hidden by default -> md:opacity-0
    - When the parent .group is hovered on desktop -> md:group-hover:opacity-100
    - Smooth transition via transition-opacity
  */}
                <div className="text-xs text-slate-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      Tools:{" "}
                      <span className="text-slate-200">
                        {SkillsConfig.exampleTools(s.id)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
