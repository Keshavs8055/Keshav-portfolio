import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const results = [
  {
    client: "E-commerce Store",
    metric: "Core Web Vitals",
    before: "Failed (LCP 4.2s)",
    after: "Passed (LCP 1.1s)",
    lift: "+24% Conversions",
  },
  {
    client: "SaaS Marketing Site",
    metric: "Organic Traffic",
    before: "Invisible in AI",
    after: "Ranked in Gemini/GPT",
    lift: "+40% Click-through",
  },
  {
    client: "Local Service Business",
    metric: "Page Speed",
    before: "Score: 45/100",
    after: "Score: 98/100",
    lift: "+15% Leads",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-4 xl:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results, No Fluff
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            I don't just promise improvements; I deliver measurable business
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-black/20 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CheckCircle className="w-24 h-24" />
              </div>
              <h3 className="text-lg font-semibold text-slate-300 mb-1">
                {result.client}
              </h3>
              <div className="text-sm text-slate-500 mb-6 uppercase tracking-wider font-medium">
                {result.metric}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-red-400">Before:</span>
                  <span className="font-mono text-slate-300">
                    {result.before}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-emerald-400">After:</span>
                  <span className="font-mono text-white">{result.after}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <ArrowRight className="w-4 h-4" />
                  {result.lift}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
