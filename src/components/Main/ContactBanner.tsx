import { Mail, Calendar, MessageSquare } from "lucide-react";
import { Config } from "../config";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactBanner() {
  // subtle parallax movement for background
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -25]);

  return (
    <motion.section
      aria-label="Contact banner"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative py-14 px-6 bg-linear-to-r from-[#7c3aed] via-[#06b6d4] to-[#fb7185] text-white overflow-hidden rounded-none"
    >
      {/* floating overlay */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20 bg-linear-to-r from-white/20 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-2xl">
          <div className="p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8  m-auto">
              {/* LEFT TEXT */}
              <div className="max-w-2xl ">
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-2xl md:text-3xl font-extrabold"
                >
                  {` Have a project in mind? Let’s talk.`}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mt-3 text-slate-100/90 text-lg"
                >
                  Whether it's redesigning, updating, or building your website
                  from scratch —{` I’ll help you get it right.`}
                  <span className="font-semibold text-white ml-1">
                    I respond within 12 hours or less.
                  </span>
                </motion.p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 mt-4 lg:mt-0">
                {/* Schedule call */}
                <motion.a
                  href={Config.schedulingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-[#061022] font-semibold shadow-lg hover:bg-slate-100 transition"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a call
                </motion.a>

                {/* Email */}
                <motion.a
                  href={Config.mailString}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-md font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Email me
                </motion.a>

                {/* LinkedIn DM */}
                <motion.a
                  href="https://www.linkedin.com/in/keshav-sharma-1482b7189"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-md font-medium"
                >
                  <MessageSquare className="w-4 h-4" />
                  Message on LinkedIn
                </motion.a>
              </div>
            </div>
          </div>

          {/* decorative subtle circle */}
          <div className="absolute right-20 top-0 opacity-20 pointer-events-none w-20 h-20 border-8 rounded-full"></div>
          <div className="absolute left-6 bottom-0 opacity-20 pointer-events-none w-20 h-20 border-8 rounded-full"></div>
        </div>
      </div>
    </motion.section>
  );
}
