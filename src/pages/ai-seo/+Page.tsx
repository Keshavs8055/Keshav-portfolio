import { useState, useRef, useEffect, useCallback } from "react";
import ServicePage from "../../components/ServicePage";
import { Head } from "vike-react/Head";
import { CheckCircle, Copy, Search, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "../../components/CTA";
import FAQ from "../../components/FAQ";

/**
 * Module-level constant so the JSON-LD string isn't recreated on every render.
 * Keeps the component lighter and avoids unnecessary re-renders.
 */
const JSON_LD_SNIPPET = `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI-Ready SEO & Structured Data",
  "description": "Implement LLM-friendly JSON-LD, FAQ and Service schema to increase chances of being cited in AI overviews and rich snippets.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "WebTuner"
  },
  "url": "https://webtuner.ai/ai-seo"
}`;

export default function Page() {
  const [copied, setCopied] = useState(false);

  // store timer id so we can clear on unmount or subsequent clicks
  const resetTimerRef = useRef<number | null>(null);

  // cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopy = useCallback(async () => {
    // feature detection
    if (!navigator?.clipboard?.writeText) {
      // Fallback: try execCommand (rare) or just set copied to false
      try {
        const ta = document.createElement("textarea");
        ta.value = JSON_LD_SNIPPET;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
      } catch {
        // silent fail (preserve UX)
        return;
      }
    } else {
      try {
        await navigator.clipboard.writeText(JSON_LD_SNIPPET);
        setCopied(true);
      } catch {
        // ignore clipboard errors — don't break UI
        return;
      }
    }

    // reset "Copied" after 2s (clear previous if exists)
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    // store numeric id (window.setTimeout returns number in browsers)
    resetTimerRef.current = window.setTimeout(() => {
      setCopied(false);
      resetTimerRef.current = null;
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>AI-Ready SEO & Structured Data | WebTuner</title>
        <meta
          name="description"
          content="Make your website visible to AI tools like ChatGPT and Google's AI search. I implement LLM-friendly structured data and entity optimization."
        />
      </Head>

      <ServicePage
        title="AI-Ready SEO & Structured Data"
        description="JSON-LD, FAQ schema and entity optimization so generative AI and search engines cite your site. Free audit included."
      >
        {/* Hero CTAs */}
        <div className="flex flex-wrap gap-4 mb-16 items-center justify-center">
          <CTAButton />
          <a
            href="#schema-example"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
          >
            View Example Schema
          </a>
        </div>

        {/* Quick Wins */}
        <div className="mb-16">
          <h2 className="sr-only">Quick Wins</h2>
          <ul className="flex flex-wrap gap-6 text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Add FAQ schema</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Structured Service objects</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Knowledge Graph linking</span>
            </li>
          </ul>
        </div>

        {/* Implementation Steps */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">
            How I implement LLM-friendly schema
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-blue-400 h-fit">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">1. Audit</h3>
                <p className="text-slate-300 mb-2">
                  I analyze your current visibility and identify missing
                  entities.
                </p>
                <div className="text-sm text-slate-500 font-mono bg-black/20 inline-block px-2 py-1 rounded">
                  Deliverable: Audit Report
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-purple-500/10 p-2 rounded-lg text-purple-400 h-fit">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  2. Map entities & Code
                </h3>
                <p className="text-slate-300 mb-2">
                  I map your content to Schema.org types and write custom
                  JSON-LD.
                </p>
                <div className="text-sm text-slate-500 font-mono bg-black/20 inline-block px-2 py-1 rounded">
                  Deliverable: /ai-seo/schema.json
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg text-emerald-400 h-fit">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  3. Test & Monitor
                </h3>
                <p className="text-slate-300 mb-2">
                  I validate with Google's Rich Results Test and monitor GSC.
                </p>
                <div className="text-sm text-slate-500 font-mono bg-black/20 inline-block px-2 py-1 rounded">
                  Deliverable: Validation Screenshots
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Snippet */}
        <section
          id="schema-example"
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">
              Sample JSON-LD Snippet
            </h2>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              aria-label="Copy code snippet"
            >
              {copied ? (
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative bg-black/80 border border-white/10 rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <span className="ml-2 text-xs text-slate-500 font-mono">
                  schema.json
                </span>
              </div>

              <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-300">
                <code>{JSON_LD_SNIPPET}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <FAQ
            items={[
              {
                q: "Why do I need AI-ready SEO?",
                a: "AI search engines like ChatGPT and Google SGE rely on structured data. Without it, your content may be ignored by these new discovery tools.",
              },
              {
                q: "What is JSON-LD schema?",
                a: "It is a standardized code format that helps search engines understand the precise meaning and context of your content.",
              },
              {
                q: "Can this improve my normal Google ranking?",
                a: "Yes. Structured data powers Rich Snippets (stars, prices, FAQs) in search results, which increase click-through rates.",
              },
            ]}
            idPrefix="ai-seo"
          />
        </section>

        {/* Internal Linking */}
        <section className="py-12 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Explore More</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/audit"
              className="text-primary hover:underline font-medium"
            >
              Get a free audit for AI-readiness →
            </a>
            <a
              href="/react-next"
              className="text-primary hover:underline font-medium"
            >
              Next.js SEO help →
            </a>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-4 right-4 left-4 sm:hidden z-50">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-zinc-900/95 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex flex-col gap-3"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-white">Get AI-Ready</span>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                Free Audit
              </span>
            </div>

            <form
              action="/audit"
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap"
              >
                Go
              </button>
            </form>

            <p className="text-[10px] text-slate-500 text-center">
              Delivered in 48 hours. No obligation.
            </p>
          </motion.div>
        </div>
      </ServicePage>
    </>
  );
}
