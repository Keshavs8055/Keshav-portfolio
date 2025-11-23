import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen lg:px-0 bg-linear-180 from-transparent via-transparent to-purple-900/50 text-text-main selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
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
      </footer>
    </div>
  );
}
