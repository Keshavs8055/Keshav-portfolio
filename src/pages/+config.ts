import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

declare module "vike" {
  interface PageContext {
    abortReason?: { notAdmin: true };
  }
}

export default {
  extends: [vikeReact],
  prerender: true,
  title: "Keshav Sharma | Web Infrastructure Specialist & Full Stack Developer",
  description:
    "Keshav Sharma is a Web Infrastructure Specialist building AI-optimized, high-performance, and minimal digital experiences. Expert in React, Next.js, SEO, and modern web architecture.",
  image: "/open-graph-image.webp",
} satisfies Config;
