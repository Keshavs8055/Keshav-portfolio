import { Mail, Calendar, MessageSquare } from "lucide-react";
import { Config } from "../config";
import { motion } from "framer-motion";

/**
 * ContactBanner — accessibility & metadata improvements only.
 * - section uses aria-labelledby (no redundant aria-label)
 * - heading has an id and the section references it
 * - CTA anchors kept as <a> (navigation) and given clear aria-labels
 * - Decorative elements marked aria-hidden="true"
 * - JSON-LD with dateModified included (SSR-able)
 * - No functionality or design changes
 */

export default function ContactBanner() {
  const dateModifiedISO = "2025-11-24";
  return (
    <motion.section
      id="contact-banner"
      aria-labelledby="contact-banner-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative py-14 px-6 bg-linear-to-r from-[#7c3aed] via-[#06b6d4] to-[#fb7185] text-white overflow-hidden rounded-none"
    >
      {/* JSON-LD freshness signal (emit-able at SSR/prerender) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact",
            description:
              "Contact banner for scheduling calls, emailing, or messaging on LinkedIn.",
            dateModified: dateModifiedISO,
          }),
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto ">
        <div className="p-6 sm:p-10 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8  m-auto">
            {/* LEFT TEXT */}
            <div className="max-w-2xl ">
              <motion.h3
                id="contact-banner-heading"
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
                id="contact-banner-desc"
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
                aria-label="Schedule a call — opens scheduling page in a new tab"
              >
                <Calendar
                  className="w-4 h-4"
                  aria-hidden="true"
                />
                <span>Schedule a call</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href={Config.mailString}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-md font-medium"
                aria-label="Email me"
              >
                <Mail
                  className="w-4 h-4"
                  aria-hidden="true"
                />
                <span>Email me</span>
              </motion.a>

              {/* LinkedIn DM */}
              <motion.a
                href="https://www.linkedin.com/in/keshav-sharma-1482b7189"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-md font-medium"
                aria-label="Message on LinkedIn — opens in a new tab"
              >
                <MessageSquare
                  className="w-4 h-4"
                  aria-hidden="true"
                />
                <span>Message on LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* decorative subtle circles — explicitly hidden from assistive tech */}
        <div
          className="absolute right-20 top-0 opacity-20 pointer-events-none w-20 h-20 border-8 rounded-full"
          aria-hidden="true"
        />
        <div
          className="absolute left-6 bottom-0 opacity-20 pointer-events-none w-20 h-20 border-8 rounded-full"
          aria-hidden="true"
        />
      </div>

      {/* Human-visible freshness metadata, SSR-rendered */}
      <div className="max-w-7xl mx-auto mt-3 px-6 text-right">
        <p
          className="text-xs text-slate-100/70"
          aria-hidden={false}
        >
          <span className="sr-only">Updated: Nov 2025</span>
        </p>
      </div>
    </motion.section>
  );
}
