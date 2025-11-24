import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageContext } from "vike-react/usePageContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pageContext = usePageContext();
  const pathname = pageContext.urlPathname;

  return (
    <div className="min-h-screen lg:px-0 bg-linear-180 from-transparent via-transparent to-purple-900/50 text-text-main selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pt-24 x-auto"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <footer className="py-8 text-center text-text-muted text-sm">
        <p>© {new Date().getFullYear()} Keshav Sharma. All rights reserved.</p>
        <p
          className="text-xs text-slate-400"
          aria-hidden={false}
        >
          <span className="sr-only">Last updated:</span>
          Updated: Nov 2025
        </p>
      </footer>
    </div>
  );
}
