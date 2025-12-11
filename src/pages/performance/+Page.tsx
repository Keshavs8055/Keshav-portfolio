import { useMemo } from "react";
import ServicePage from "../../components/ServicePage";
import { Head } from "vike-react/Head";
import { Activity, CheckCircle, Zap } from "lucide-react";
import CTAButton from "../../components/CTA";
import FAQ from "../../components/FAQ";

/* --- Module-level SVG icons: stable identity, not recreated per render --- */
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="11"
        cy="11"
        r="8"
      />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/* --- Component --- */
export default function Page() {
  const workflow = useMemo(
    () => [
      {
        id: "audit",
        icon: SearchIcon,
        title: "1. Audit",
        body: "I use Lighthouse, WebPageTest, and Chrome UX Report to identify bottlenecks.",
      },
      {
        id: "implement",
        icon: CodeIcon,
        title: "2. Implement",
        body: "Code splitting, image optimization, script deferring, and server tuning.",
      },
      {
        id: "verify",
        icon: Activity,
        title: "3. Verify",
        body: "Validation via GSC and field data monitoring to ensure real-world gains.",
      },
    ],
    []
  );

  const results = useMemo(
    () => [
      {
        metric: "LCP (Loading)",
        before: "4.2s",
        after: "1.1s",
        improvement: "73% Faster",
        rowClass: "bg-white/5",
        beforeClass: "text-red-400",
        afterClass: "text-emerald-400",
      },
      {
        metric: "CLS (Stability)",
        before: "0.25",
        after: "0.00",
        improvement: "Perfect Score",
        rowClass: "",
        beforeClass: "text-red-400",
        afterClass: "text-emerald-400",
      },
      {
        metric: "INP (Interactive)",
        before: "450ms",
        after: "80ms",
        improvement: "Pass",
        rowClass: "bg-white/5",
        beforeClass: "text-red-400",
        afterClass: "text-emerald-400",
      },
    ],
    []
  );

  const checklist = useMemo(
    () => [
      "Next-gen Image Formats (WebP/AVIF)",
      "Font Loading Strategies",
      "Critical CSS Extraction",
      "Third-party Script Management",
      "JavaScript Execution Time",
      "CDN Configuration",
      "Caching Strategy",
      "DOM Size Reduction",
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Speed & Core Web Vitals Fixes | WebTuner</title>
        <meta
          name="description"
          content="Fix slow load times, LCP, CLS, and INP issues. I optimize React/Next.js sites for speed to boost rankings and conversions."
        />
      </Head>

      <ServicePage
        title="Speed & Core Web Vitals Fixes"
        description="Reduce LCP and CLS — faster pages, higher rankings, better conversions."
      >
        {/* Hero CTA */}
        <div className="mb-16 text-center">
          <CTAButton />
        </div>

        {/* Workflow */}
        <section
          aria-labelledby="how-i-work"
          className="mb-20"
        >
          <h2
            id="how-i-work"
            className="text-2xl font-bold text-white mb-8"
          >
            How I Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflow.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.id}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm">{step.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Before/After Table */}
        <section
          aria-labelledby="real-results"
          className="mb-20"
        >
          <h2
            id="real-results"
            className="text-2xl font-bold text-white mb-8"
          >
            Real Results
          </h2>

          <div className="overflow-x-auto">
            <table
              className="w-full text-left border-collapse"
              role="table"
              aria-label="Before and after performance metrics"
            >
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-sm">
                  <th
                    scope="col"
                    className="py-4 px-4"
                  >
                    Metric
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-4"
                  >
                    Before
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-4"
                  >
                    After
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-4"
                  >
                    Improvement
                  </th>
                </tr>
              </thead>

              <tbody className="text-white">
                {results.map((r) => (
                  <tr
                    key={r.metric}
                    className={`border-b border-white/5 ${r.rowClass}`}
                  >
                    <td className="py-4 px-4 font-medium">{r.metric}</td>
                    <td className={`py-4 px-4 ${r.beforeClass}`}>{r.before}</td>
                    <td className={`py-4 px-4 ${r.afterClass}`}>{r.after}</td>
                    <td className="py-4 px-4 text-emerald-400 font-bold">
                      {r.improvement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Technical Checklist */}
        <section
          aria-labelledby="what-i-fix"
          className="mb-20"
        >
          <h2
            id="what-i-fix"
            className="text-2xl font-bold text-white mb-8"
          >
            What I Fix
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checklist.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-slate-300"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Hint */}
        <section
          className="mb-20 bg-white/5 border border-white/10 rounded-xl p-8 text-center"
          aria-labelledby="investment"
        >
          <h2
            id="investment"
            className="text-xl font-bold text-white mb-2"
          >
            Investment
          </h2>
          <p className="text-slate-300 mb-6">
            Typical engagement:{" "}
            <span className="text-white font-bold">₹10k – ₹50k</span> depending
            on scope and complexity.
          </p>

          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium hover:underline"
            aria-label="Book a speed review call (opens in new tab)"
          >
            Book a speed review call <Zap className="w-4 h-4" />
          </a>
        </section>

        {/* FAQ Section */}
        <section
          aria-labelledby="faqs"
          className="mb-12"
        >
          <h2
            id="faqs"
            className="text-2xl font-bold text-white mb-8"
          >
            Frequently Asked Questions
          </h2>
          <FAQ
            items={[
              {
                q: "What metrics do you improve?",
                a: "I target LCP (loading speed), INP (interactivity), and CLS (visual stability) to meet Google's Core Web Vitals standards.",
              },
              {
                q: "Will optimization break my site's design?",
                a: "No. I optimize underlying code and assets without altering the visual appearance or functionality.",
              },
              {
                q: "Do you offer a guarantee?",
                a: "Yes. I guarantee a specific improvement in Lighthouse scores or page load time, agreed upon before starting.",
              },
            ]}
            idPrefix="perf-faq"
          />
        </section>
      </ServicePage>
    </>
  );
}
