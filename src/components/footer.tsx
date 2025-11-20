import { Mail } from "lucide-react";
import { Config } from "./config";

export const Footer = () => {
  return (
    <footer className=" py-10 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Left - Copyright & Signature */}
        <div className="text-slate-400 text-center md:text-left mb-4 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} Keshav Sharma. All rights
            reserved.
          </p>
          <p className="mt-1 text-xs opacity-70">Built with ❤️</p>
        </div>

        {/* Right - Social Icons & Quick Links */}
        <div className="flex items-center space-x-6">
          {/* Quick Links */}
          <button
            className="inline-block px-8 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-rose-500 font-semibold 
                       text-white shadow-lg hover:scale-[1.03] transition-transform"
          >
            <a href={Config.schedulingLink}>Call Now</a>
          </button>
          <a
            href={Config.mailString}
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};
