import { ArrowRight } from "lucide-react";
import { Config } from "./config";

export default function CTAButton() {
  return (
    <a
      href={Config.mailString}
      className="group relative inline-flex items-center gap-3 px-6 py-3 text-white bg-linear-to-r from-green-600  to-teal-600  rounded-full font-medium overflow-hidden"
      aria-label="Request free audit"
    >
      <span className="relative z-10">Get a free Audit</span>
      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
      <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
    </a>
  );
}
