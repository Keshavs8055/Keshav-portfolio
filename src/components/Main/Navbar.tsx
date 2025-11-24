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
  const id = React.useId();
  const menuId = `nav-menu-${id}`;
  const menuLabelId = `nav-menu-label-${id}`;
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const previouslyFocused = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Focus management: trap focus inside mobile menu when open and restore focus on close
  React.useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    // focus first focusable element inside menu (if present)
    const focusFirst = () => {
      const el = menuRef.current;
      if (!el) return;
      const focusable = el.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    };

    focusFirst();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }

      if (e.key === "Tab") {
        // trap focus
        const el = menuRef.current;
        if (!el) return;
        const focusable = Array.from(
          el.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter(Boolean);

        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // restore focus
      try {
        previouslyFocused.current?.focus();
      } catch {
        // ignore
      }
    };
  }, [open]);

  const DATE_MODIFIED = "2025-11-24";

  return (
    <nav
      // kept original styling and semantics
      className="fixed max-w-7xl from-violet-600 via-fuchsia-700 to-pink-700 bg-linear-60 mx-auto inset-x-0 top-0 z-50 rounded-b-lg overflow-hidden"
      aria-label="Primary navigation"
      data-date-modified={DATE_MODIFIED}
    >
      {/* Entity Clarity Check: a short, visually-hidden declarative statement */}
      <span
        id={menuLabelId}
        className="sr-only"
      >
        Nav: Provides primary navigation for the site.
      </span>

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
                  <Home
                    size={24}
                    aria-hidden
                  />
                </div>
              </a>
            </div>

            {/* center: links (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg px-2 py-1">
                {LINKS.map((l) => (
                  <a
                    key={l.id}
                    id={`${l.id}-${id}`}
                    href={l.href}
                    className="text-sm text-white/90 hover:text-white px-3 py-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    aria-label={l.label}
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
                aria-label="Start a project - contact section"
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
                  ref={buttonRef}
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  aria-controls={menuId}
                  aria-label={open ? "Close menu" : "Open menu"}
                  className="p-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  {open ? (
                    <X
                      size={18}
                      aria-hidden
                    />
                  ) : (
                    <Menu
                      size={18}
                      aria-hidden
                    />
                  )}
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
                  // Keep same animation, styling & role
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -6, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  className="mt-3 md:hidden rounded-xl p-4 mx-3 backdrop-blur-md border border-white/8"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={menuLabelId}
                  id={menuId}
                  ref={menuRef}
                >
                  <div className="flex flex-col gap-2">
                    {LINKS.map((l) => (
                      <a
                        key={l.id}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white/95 hover:bg-white/6 transition"
                        aria-label={l.label}
                      >
                        {l.label}
                      </a>
                    ))}

                    <div className="mt-3 border-t border-white/6 pt-3 flex gap-3 text-sm">
                      <a
                        href="https://github.com/keshavs8055"
                        className="text-white/85"
                        aria-label="GitHub profile"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/keshav-sharma-1482b7189"
                        className="text-white/85"
                        aria-label="LinkedIn profile"
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

      {/* JSON-LD with dateModified for indexing/trust signals (non-visual) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Primary Navigation",
            dateModified: DATE_MODIFIED,
            description: "Primary navigation component for the site.",
          }),
        }}
      />
    </nav>
  );
}
