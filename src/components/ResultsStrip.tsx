import { ArrowRight } from "lucide-react";

export default function ResultsStrip() {
  return (
    <div className="hidden md:flex w-full bg-emerald-900/20 border-b border-emerald-500/10 py-1.5 justify-center items-center text-xs font-medium text-emerald-300">
      <span className="mr-2">🚀 Saved clients 27% avg. load time</span>
      <a
        href="/performance"
        className="flex items-center hover:underline"
      >
        See results <ArrowRight className="w-3 h-3 ml-1" />
      </a>
    </div>
  );
}
