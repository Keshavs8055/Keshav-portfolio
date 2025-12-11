import { ExternalLink } from "lucide-react";

export default function UpworkBadge() {
  return (
    <a
      // TODO: Add upwork link
      href="https://upwork.com/freelancers/~01ec991ae52da43242"
      target="_blank"
      rel="noopener noreferrer"
      id="track-upwork-badge"
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-indigo-500/30 bg-indigo-500/10 rounded-full hover:bg-indigo-500/20 transition-colors"
      aria-label="Hire me on Upwork"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
      </span>
      Hire on Upwork
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}
