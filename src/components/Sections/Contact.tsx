import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Calendar } from "lucide-react";
import { Config } from "../config";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 overflow-hidden "
    >
      <div className="p-6 lg:px-4 xl:px-0 max-w-7xl mx-auto relative">
        <div className="absolute w-50 h-50 border-8 border-pink-900/90   bottom-10 right-40 rounded-4xl z-0 pointer-events-none"></div>
        <div className="absolute w-50 h-50 border-8 border-pink-900/90   top-10 left-40 z-0 rounded-4xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center bg-black/5 backdrop-blur-xl border border-white/10 rounded-2xl py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Let's work <br />
              <span className="text-gradient">together.</span>
            </h2>
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
              Have a project in mind? I help businesses and creators build
              high-quality digital experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={Config.schedulingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Call <Calendar className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-slate-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>

              <a
                href={Config.mailString}
                className="group px-8 py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Email Me <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-16 flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/keshav-sharma-1482b7189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors flex items-center gap-2"
              >
                LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/keshavs8055"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white transition-colors flex items-center gap-2"
              >
                GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
