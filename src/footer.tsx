import { Github, Linkedin, Mail } from "lucide-react";
import { LandingConfig } from "./components/config";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-slate-700">
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
          <a
            href="#projects"
            className="text-slate-300 hover:text-[#06b6d4] transition-colors hidden sm:block"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-slate-300 hover:text-[#06b6d4] transition-colors hidden sm:block"
          >
            Skills
          </a>

          {/* Social Icons (Match your landing page icons) */}
          <a
            href="https://github.com/keshavs8055"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/keshav-sharma-1482b7189"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
          </a>
          <a
            href={LandingConfig.mailString}
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};
