import { useMemo } from "react";
import { Head } from "vike-react/Head";
import ServicePage from "../../components/ServicePage";
import {
  CheckCircle,
  Download,
  ExternalLink,
  FileText,
  Video,
} from "lucide-react";
import FAQ from "../../components/FAQ";

export default function Page() {
  const deliverables = useMemo(
    () => [
      {
        id: "summary",
        icon: FileText,
        title: "1-page PDF executive summary",
        desc: "Top 3 prioritized fixes that move the needle.",
      },
      {
        id: "actions",
        icon: CheckCircle,
        title: "6–10 technical + content action items",
        desc: "Specific steps to improve speed and SEO.",
      },
      {
        id: "walkthrough",
        icon: Video,
        title: "5–7 minute recorded screen walkthrough",
        desc: "I explain exactly what's wrong and how to fix it.",
      },
    ],
    []
  );

  const pricing = useMemo(
    () => [
      { id: "speed", label: "15-point speed audit", price: "₹5,000" },
      { id: "seo", label: "Full SEO & Schema package", price: "₹15,000" },
      { id: "hydration", label: "Hydration + SSR fix", price: "Flat fee" },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Free Website Audit | WebTuner</title>
        <meta
          name="description"
          content="Get a free 15-point website audit. I analyze speed, SEO, and AI-readiness to help you convert more visitors."
        />
      </Head>
      <ServicePage
        title="Free Website Audit"
        description="Stop guessing. Get a clear, actionable roadmap to fix speed, SEO, and conversion issues."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column: Deliverables & Trust */}
          <div className="space-y-12">
            <section aria-labelledby="what-you-get">
              <h2
                id="what-you-get"
                className="text-2xl font-bold text-white mb-6"
              >
                What you get
              </h2>

              <ul className="space-y-4">
                {deliverables.map((d) => {
                  const Icon = d.icon;
                  return (
                    <li
                      key={d.id}
                      className="flex gap-3"
                    >
                      <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <strong className="block text-white">{d.title}</strong>
                        <span className="text-slate-400">{d.desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section
              className="bg-white/5 border border-white/10 rounded-xl p-6"
              aria-labelledby="turnaround"
            >
              <h3
                id="turnaround"
                className="font-bold text-white mb-2"
              >
                Turnaround time
              </h3>
              <p className="text-slate-300">
                48 business hours (I review requests Monday–Friday).
              </p>
            </section>

            <section aria-labelledby="sample-audit">
              <h3
                id="sample-audit"
                className="font-bold text-white mb-4"
              >
                Sample Audit
              </h3>

              {/* Keep button semantics but add explicit type and aria-label */}
              <a
                href="https://docs.google.com/document/d/1eHJtL0nrrf73zjkLjr0jFYoEgJtHu32IRYQXBCGeYYU/edit?usp=sharing"
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label="Download sample audit PDF"
              >
                <Download className="w-4 h-4" />
                Why is your website lacking?
              </a>
            </section>

            {/* Upwork Section */}
          </div>

          <section
            className="pt-8 "
            aria-labelledby="upwork"
          >
            <h3
              id="upwork"
              className="text-xl font-bold text-white mb-4"
            >
              Hire me on Upwork
            </h3>

            <p className="text-slate-300 mb-6">
              Prefer working through Upwork? View my profile, past contracts,
              and verified reviews.
            </p>

            <div className="space-y-3 mb-6">
              {pricing.map((p) => (
                <div
                  key={p.id}
                  className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-slate-300">{p.label}</span>
                  <span className="font-mono text-emerald-400">{p.price}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.upwork.com/freelancers/~017c5b366e257b4a2c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/40 transition-all text-white"
              aria-label="View full pricing on Upwork (opens in new tab)"
            >
              View full pricing on Upwork
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </section>
        </div>

        <section
          className="mb-20"
          aria-labelledby="audit-faq"
        >
          <h2
            id="audit-faq"
            className="text-2xl font-bold text-white mb-8"
          >
            Frequently Asked Questions
          </h2>
          <FAQ
            items={[
              {
                q: "What does the free audit cover?",
                a: "It includes Core Web Vitals assessment, SEO technical health check, and a conversion barrier analysis.",
              },
              {
                q: "How long does the audit take?",
                a: "You'll receive a detailed video report within 24 hours.",
              },
              {
                q: "Do I need technical knowledge to understand it?",
                a: "No. I explain everything in plain English with clear, prioritized next steps.",
              },
            ]}
            idPrefix="audit-faq"
          />
        </section>
      </ServicePage>
    </>
  );
}
