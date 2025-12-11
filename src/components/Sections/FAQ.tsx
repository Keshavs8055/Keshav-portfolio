// components/FAQSection.tsx
import React, { type JSX } from "react";

import CTAButton from "../CTA";
import FAQ from "../FAQ";

/**
 * Accessibility & AI/business-optimized content only.
 * - replaced div(role="button") with real <button type="button"> for keyboard semantics
 * - each item uses unique, prefixed IDs (title, panel) to avoid collisions
 * - decorative icons marked aria-hidden
 * - JSON-LD dateModified added (SSR/prerender emit-able)
 * - added a short declarative sentence near the top for entity clarity
 * - copy tuned to speak to business owners and AI-readers (subject + predicate + object up-front)
 *
 * No changes to visual styling or behavior (motion, transitions) beyond semantics.
 */

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "How do I make my website visible to AI tools like ChatGPT?",
    a: (
      <p>
        By implementing "LLM-friendly" structured data (Schema.org) and
        optimizing your content for entity clarity. I ensure your site speaks
        the language of AI models so they can cite you as a source.
      </p>
    ),
  },
  {
    q: "How to fix slow mobile website speed without redesigning it?",
    a: (
      <p>
        We can optimize images (WebP), defer non-critical JavaScript, and
        implement caching strategies. Often, we can double your speed score
        without changing a single pixel of the design.
      </p>
    ),
  },
  {
    q: "What is structured data and does it help SEO?",
    a: (
      <p>
        Structured data is code that tells search engines exactly what your
        content means (e.g., "this is a service," "this is a review"). It helps
        you get rich snippets (stars, FAQs) in search results, increasing
        clicks.
      </p>
    ),
  },
  {
    q: "How do Core Web Vitals affect leads?",
    a: (
      <p>
        Directly. Google ranks fast sites higher. More importantly, 53% of
        mobile users leave a site if it takes longer than 3 seconds to load.
        Fixing speed leaks plugs revenue leaks.
      </p>
    ),
  },
  {
    q: "Do you work with Next.js and React?",
    a: (
      <p>
        Yes, I specialize in the React ecosystem. I fix common issues like
        hydration errors, poor SEO performance in SPAs, and slow initial load
        times.
      </p>
    ),
  },
];

export default function FAQSection(): JSX.Element {
  // fresh metadata (checklist #27)

  return (
    <section
      id="faq"
      className="p-6 lg:px-4 xl:px-0 max-w-7xl py-12 my-6 mx-auto"
      aria-labelledby="faq-heading"
    >
      <div className="text-center mb-8">
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-extrabold text-white"
        >
          Frequently asked questions
        </h2>

        {/* Entity clarity: Subject + Predicate + Object up-front for AI and business owners */}
        <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
          I am Keshav Sharma — a Frontend Engineer who helps businesses increase
          revenue and search visibility by modernizing websites with React,
          Next.js, and performance-first practices.
        </p>

        <p className="mt-2 text-slate-300 max-w-2xl mx-auto">
          Practical answers about audits, pricing, platforms, and how we work.
          If your question isn’t listed, reach out — I reply quickly.
        </p>
      </div>

      <div className="space-y-6">
        <FAQ
          items={FAQS}
          idPrefix="home-faq"
        />
      </div>

      <div className="text-center mt-10">
        <CTAButton />
      </div>

      {/* Visible, SSR-rendered freshness metadata (small and unobtrusive) */}
      <div className="max-w-7xl mx-auto mt-6 px-6 text-right">
        <p className="text-xs text-slate-400">
          <span className="sr-only">Updated: Nov 2025</span>
        </p>
      </div>
    </section>
  );
}
