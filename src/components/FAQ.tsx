import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
  idPrefix?: string;
}

export default function FAQ({ items, idPrefix = "faq" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const panelVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  const makeId = (prefix: string, idx: number) =>
    `${idPrefix}-${prefix}-${idx}`;

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const titleId = makeId("title", i);
        const panelId = makeId("panel", i);

        return (
          <div
            key={i}
            className={`border border-white/10 rounded-lg overflow-hidden transition-colors ${
              isOpen ? "bg-white/5 border-white/20" : "hover:border-white/20"
            }`}
          >
            <button
              id={titleId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-4 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
            >
              <span className="font-semibold text-white pr-4">{item.q}</span>
              <motion.span
                className="text-slate-400 shrink-0"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={chevronVariants}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                aria-hidden="true"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={panelVariants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  role="region"
                  aria-labelledby={titleId}
                >
                  <div className="px-4 pb-4 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
