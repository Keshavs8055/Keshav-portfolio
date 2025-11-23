// src/components/Nav/Nav.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Menu, X } from "lucide-react";

type NavLink = { id: string; label: string; href: string };

const LINKS: NavLink[] = [
  { id: "services", label: "Services", href: "#services" },
  { id: "about", label: "About", href: "#about" },
  { id: "faq", label: "FAQs", href: "#faq" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <nav
      className="fixed max-w-7xl from-violet-600 via-fuchsia-700 to-pink-700 bg-linear-60 mx-auto inset-x-0 top-0 z-50 rounded-b-lg overflow-hidden"
      aria-label="Primary navigation"
    >
      <div>
        {/* glass pill container */}
        <div
          className="p-1 backdrop-blur-xl "
          // gradient overlay: subtle, light, translucent so underlying dark page shows through
          style={{
            background:
              "linear-gradient(90deg, rgba(236,72,153,0.10) 0%, rgba(249,115,22,0.08) 35%, rgba(139,92,246,0.07) 70%, rgba(167,139,250,0.06) 100%)",
          }}
        >
          <div className="flex items-center justify-between gap-4 px-3 py-2">
            {/* left: brand */}
            <div className="flex items-center gap-3">
              <a
                href="#home"
                className="flex items-center gap-3 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                aria-label="Go to home"
              >
                <div className="w-9 h-9 rounded-full bg-white/85 flex items-center justify-center text-sm font-semibold text-black shadow-sm">
                  <Home size={24} />
                </div>
              </a>
            </div>

            {/* center: links (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg px-2 py-1">
                {LINKS.map((l) => (
                  <a
                    key={l.id}
                    href={l.href}
                    className="text-sm text-white/90 hover:text-white px-3 py-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* right: CTA + mobile button */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-black text-sm font-medium shadow-sm hover:scale-[1.02] transition"
              >
                Start a Project
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 12h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div className="md:hidden">
                <button
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  aria-label={open ? "Close menu" : "Open menu"}
                  className="p-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  {open ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -6, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  className="mt-3 md:hidden rounded-xl p-4 mx-3 backdrop-blur-md border border-white/8"
                  role="dialog"
                  aria-modal="true"
                >
                  <div className="flex flex-col gap-2">
                    {LINKS.map((l) => (
                      <a
                        key={l.id}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white/95 hover:bg-white/6 transition"
                      >
                        {l.label}
                      </a>
                    ))}

                    <div className="mt-3 border-t border-white/6 pt-3 flex gap-3 text-sm">
                      <a
                        href="https://github.com/keshavs8055"
                        className="text-white/85"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/keshav-sharma-1482b7189"
                        className="text-white/85"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
