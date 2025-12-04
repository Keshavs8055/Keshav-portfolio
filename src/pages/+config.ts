import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

export default {
  extends: [vikeReact],
  prerender: true,
  title: "WebTuner | SEO, AI-Readiness & Performance Audits",
  description:
    "Make your website visible to AI tools like ChatGPT, Perplexity and Google’s AI search. I fix performance, SEO, metadata, structured data and Core Web Vitals.",
} satisfies Config;
