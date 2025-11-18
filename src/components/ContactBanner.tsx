import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { LandingConfig } from "./config";

export default function ContactBanner() {
  // simple parallax transform using scroll position
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -30]);
  const y2 = useTransform(scrollY, [0, 500], [0, -12]);

  return (
    <section
      aria-label="Contact banner"
      className="py-12 px-6 bg-linear-to-r from-[#7c3aed] via-[#06b6d4] to-[#fb7185] opacity-90"
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl ">
          {/* Background layers for parallax */}
          <motion.div
            style={{ y }}
            className="absolute inset-0 "
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute inset-0 mix-blend-multiply opacity-20 pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  See more, collaborate, or say hi — your call.
                </h3>
                <p className="mt-3 text-slate-100/90">
                  Explore more projects on GitHub, learn about my process on
                  LinkedIn, or drop a line — I respond within 48 hours.
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-white">
                  <a
                    href="https://github.com/keshavs8055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-black px-4 py-2 rounded-md font-medium"
                  >
                    <Github className="w-4 h-4" />
                    See more of my work
                  </a>

                  <a
                    href="https://linkedin.com/in/keshav-sharma-1482b7189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-black px-4 py-2 rounded-md font-medium"
                  >
                    Explore me
                  </a>

                  <a
                    href={LandingConfig.mailString}
                    className="inline-flex items-center gap-2 bg-white text-[#061022] px-4 py-2 rounded-md font-semibold"
                  >
                    <Mail className="w-4 h-4" />
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom sliver vintage edge */}
          <div className="absolute left-6 bottom-6 opacity-20 pointer-events-none">
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
