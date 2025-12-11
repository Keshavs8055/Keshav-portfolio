import { useMemo } from "react";
import ServicePage from "../../components/ServicePage";
import { Head } from "vike-react/Head";
import { AlertTriangle, Code, ExternalLink, Terminal } from "lucide-react";
import CTAButton from "../../components/CTA";
import FAQ from "../../components/FAQ";

const UPWORK_URL = "https://upwork.com/freelancers/~01ec991ae52da43242";

export default function Page() {
  const fixes = useMemo(
    () => [
      {
        id: "meta",
        icon: Code,
        title: "Ensure Pre-rendered Meta",
        description:
          "Dynamic meta tags must be generated on the server, not the client.",
        code: "export const getServerSideProps = async () => { ... }",
        themeClass: "bg-blue-500/10 text-blue-400",
      },
      {
        id: "hydration",
        icon: AlertTriangle,
        title: "Fix Hydration Errors",
        description:
          "Mismatched HTML between server and client kills performance and UX.",
        code: "Error: Text content does not match server-rendered HTML.",
        themeClass: "bg-yellow-500/10 text-yellow-400",
      },
      {
        id: "sitemap",
        icon: Terminal,
        title: "Sitemap for Dynamic Routes",
        description:
          "Automatically generate sitemaps for thousands of database-driven pages.",
        code: "next-sitemap.config.js // generateRobotsTxt: true",
        themeClass: "bg-emerald-500/10 text-emerald-400",
      },
    ],
    []
  );

  const auditItems = useMemo(
    () => [
      {
        id: "critical",
        colorClass: "text-red-400",
        text: "[CRITICAL] Hydration errors found: 3",
      },
      {
        id: "warning",
        colorClass: "text-yellow-400",
        text: "[WARNING] Large JS bundle size (main-123.js: 450kb)",
      },
      {
        id: "pass",
        colorClass: "text-emerald-400",
        text: "[PASS] Server-side rendering active",
      },
    ],
    []
  );

  const pricing = useMemo(
    () => [
      { id: "hydration", title: "Hydration + SSR fix", price: "Flat fee" },
      {
        id: "audit",
        title: "React Performance Audit",
        price: "Hourly / Fixed",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>React & Next.js SEO Consultant | Fix Hydration & SSR</title>
        <meta
          name="description"
          content="Expert help for React and Next.js SEO. I fix hydration errors, implement SSR/SSG, and ensure your single-page app is crawlable by Google."
        />
      </Head>

      <ServicePage
        title="React & Next.js Websites & Fixes"
        description="Fix hydration errors, implement SSR/SSG, and make modern apps crawlable."
      >
        {/* Hero CTA */}
        <div className="mb-16 text-center">
          <CTAButton />
        </div>

        {/* Common Fixes Checklist */}
        <section
          aria-labelledby="common-fixes"
          className="mb-20"
        >
          <h2
            id="common-fixes"
            className="text-2xl font-bold text-white mb-8"
          >
            Common Fixes I Implement
          </h2>

          <div className="space-y-6">
            {fixes.map((f) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 p-2 rounded-lg ${f.themeClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {f.title}
                      </h3>
                      <p className="text-slate-300 mb-4 text-sm">
                        {f.description}
                      </p>
                      <div className="bg-black/30 rounded-lg p-3 border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto">
                        <code>{f.code}</code>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Audit Report Sample */}
        <section
          aria-labelledby="audit-sample"
          className="mb-20"
        >
          <h2
            id="audit-sample"
            className="text-2xl font-bold text-white mb-8"
          >
            What a Technical Audit Looks Like
          </h2>

          <div className="bg-black/40 border border-white/10 rounded-xl p-6 font-mono text-sm text-slate-300">
            {auditItems.map((a, idx) => (
              <div
                key={a.id}
                className={`flex items-center gap-2 mb-2 ${
                  idx === auditItems.length - 1 ? "" : ""
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${a.colorClass.replace(
                    "text-",
                    "bg-"
                  )}`}
                />
                <span className={a.colorClass}>{a.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Upwork Integration */}
        <section
          aria-labelledby="upwork"
          className="mb-20 pt-8 border-t border-white/10"
        >
          <h2
            id="upwork"
            className="text-2xl font-bold text-white mb-6"
          >
            Hire me on Upwork
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <p className="text-slate-300 mb-6">
              Prefer working through Upwork? View my profile, past contracts,
              and verified reviews.
            </p>

            <div className="space-y-4 mb-8">
              {pricing.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-4 bg-black/20 rounded-lg"
                >
                  <span className="text-white font-medium">{p.title}</span>
                  <span className="text-emerald-400 font-mono">{p.price}</span>
                </div>
              ))}
            </div>

            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
              aria-label="Hire me on Upwork (opens in new tab)"
            >
              Hire me on Upwork
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          aria-labelledby="faq"
          className="mb-12"
        >
          <h2
            id="faq"
            className="text-2xl font-bold text-white mb-8"
          >
            Frequently Asked Questions
          </h2>
          <FAQ
            items={[
              {
                q: "Why is my React app not ranking?",
                a: "Client-side rendering often hides content from crawlers. I implement Server-Side Rendering (SSR) or Static Site Generation (SSG) to fix this.",
              },
              {
                q: "Can you fix hydration errors?",
                a: "Yes. I diagnose and resolve React hydration mismatches that cause layout shifts and console errors.",
              },
              {
                q: "Do you support Vike (vite-plugin-ssr)?",
                a: "Yes. I am an expert in Vike and can help you migrate or optimize your Vike-based application.",
              },
            ]}
            idPrefix="react-next-faq"
          />
        </section>
      </ServicePage>
    </>
  );
}
