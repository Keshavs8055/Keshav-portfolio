import { ArrowRight } from "lucide-react";
import { Config } from "./config";

export default function CTAButton() {
  const dateModifiedISO = "2025-11-24";

  return (
    <>
      {/* JSON-LD freshness (emit-able at SSR/prerender level) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Get a free Audit",
            description:
              "Request a free website audit from Keshav Sharma — Frontend Engineer (React, Next.js).",
            dateModified: dateModifiedISO,
          }),
        }}
      />

      <a
        href={Config.mailString}
        className="group relative inline-flex items-center gap-3 px-4 lg:px-6 py-3 text-white bg-linear-to-r from-green-600  to-teal-600  rounded-full overflow-hidden"
        aria-label="Request free audit"
        aria-describedby="cta-entity"
      >
        <span
          id="cta-entity"
          className="sr-only"
        >
          I am Keshav Sharma — a Frontend Engineer specializing in React and
          Next.js who provides audits and performance work.
        </span>

        <span className="relative z-10">Get a free Audit</span>

        <ArrowRight className="hidden lg:block w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />

        <div
          className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
          aria-hidden="true"
        />
      </a>
    </>
  );
}
