import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Config } from "../config";
import { NavLink } from "react-router";
import VECTOR from "../../assets/landing/vector.webp";

const TESTIMONIAL =
  "Keshav updated our booking flow and made the site faster — customers call more often now.";

export default function Landing() {
  return (
    <header className="min-h-screen flex items-center justify-center  text-white px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 items-center py-16 justify-between">
        <motion.div
          transition={{ duration: 0.6 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-2 py-30 lg:py-0 col-span-2 "
        >
          <h1 className=" text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Modernize local-business websites —
            <span className="text-pink-500">
              {" "}
              get more bookings & customers.
            </span>
          </h1>

          <p className="mt-4 text-lg text-slate-200 max-w-2xl">
            Mobile-first, fast websites for cafés, salons, boutiques and
            coaches. Production-ready and conversion-focused — delivered in{" "}
            <strong>{`7–14 days`}</strong>.
          </p>

          {/* Short scannable bullets */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-lg text-sm">
            <li className="flex items-start gap-2 text-slate-300">
              <span className="text-indigo-300">•</span> Mobile-first booking UX
            </li>
            <li className="flex items-start gap-2 text-slate-300">
              <span className="text-indigo-300">•</span> Speed & SEO basics
            </li>
            <li className="flex items-start gap-2 text-slate-300">
              <span className="text-indigo-300">•</span> On time delivery
            </li>
          </ul>

          {/* PRIMARY CTA */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href={Config.schedulingLink}
              className="inline-block"
              aria-label="Schedule a call"
            >
              <button className="px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-rose-500 font-semibold shadow-lg hover:scale-[1.02] transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Schedule a call
              </button>
            </a>

            <a
              href={Config.mailString}
              className="text-sm text-slate-300 underline-offset-2 hover:underline"
              aria-label="Contact"
            >
              Send a mail
            </a>
          </div>

          {/* Testimonial - short, immediately under CTA */}
          <div className="mt-6 max-w-md text-sm italic text-slate-300">
            “{TESTIMONIAL}” — <strong>Local Salon</strong>
          </div>

          {/* Social row - tiny and unobtrusive */}
          <div className="mt-8 flex items-center gap-4 text-slate-300">
            <a
              href="https://github.com/keshavs8055"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/keshav-sharma-1482b7189"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Linkedin />
            </a>
            <a
              href={Config.mailString}
              className="hover:text-white"
            >
              <Mail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-2"
        >
          <div className="w-full max-w-lg m-auto lg:ms-auto rounded-2xl overflow-hidden border border-white/8 bg-[linear-gradient(180deg,#071124,#04111a)] shadow-2xl">
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-xs text-slate-400">
                <a
                  href="https://github.com/keshavs8055"
                  className="hover:underline"
                >
                  keshavs8055
                </a>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {/* FEATURE IMAGE: before/after or mock-case screenshot */}
              <div className="w-full rounded-lg overflow-hidden bg-linear-to-r from-[#061020] to-[#071028] border border-white/4">
                <img
                  src={VECTOR}
                  alt="Before and after: booking-focused redesign"
                  className="w-full object-cover aspect-16/10"
                />
              </div>

              <div className="mt-4 text-md text-white font-semibold">
                Academy website redesign — JetKing (mock)
              </div>
              <div className="mb-3 mt-2 text-sm text-slate-400">
                Mobile-first · +25% expected conversions*
              </div>

              <NavLink
                to="/case-study"
                className="inline-block mt-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
              >
                View case study
              </NavLink>

              <div className="mt-2 text-xs text-slate-500 italic">
                *Estimated; clearly marked in the case study.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
