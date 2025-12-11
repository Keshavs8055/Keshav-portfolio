import React from "react";
import Nav from "./Main/Navbar";
import { motion } from "framer-motion";

interface ServicePageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ServicePage({
  title,
  description,
  children,
}: ServicePageProps) {
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto p-6 lg:px-4 xl:px-0">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary to-purple-400">
            {title}
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            {description}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
