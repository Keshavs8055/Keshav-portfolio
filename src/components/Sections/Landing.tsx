// import React, { memo, useId } from "react";
// import { motion, type Variants } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import VECTOR from "/vector.webp";
// import CTAButton from "../CTA";

// const containerVariants: Variants = {
//   hidden: { opacity: 0.5 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.06, delayChildren: 0.15 },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0.5, y: 12 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.45, ease: "easeOut" },
//   },
// };

// // Keep this up-to-date when you ship edits — used as a trust signal
// const DATE_MODIFIED = "2025-11-30";

// const serviceSchema = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   name: "Web performance & AI visibility",
//   description:
//     "Performance optimization, structured data, and monitoring to improve conversions and AI visibility.",
//   serviceType: [
//     "Performance Optimization",
//     "SEO & AI Visibility",
//     "Monitoring",
//   ],
//   provider: { "@type": "Person", name: "Keshav Sharma" },
//   dateModified: DATE_MODIFIED,
// };

// const Landing: React.FC = () => {
//   const id = useId();
//   const sectionId = `home-${id}`;
//   const entityLabelId = `entity-${id}`;

//   return (
//     <section
//       id={sectionId}
//       role="region"
//       aria-labelledby={entityLabelId}
//       data-date-modified={DATE_MODIFIED}
//       className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between p-6 lg:px-4 xl:px-0"
//     >
//       {/* Accessible label for this hero/section */}
//       <p
//         id={entityLabelId}
//         className="sr-only"
//       >
//         Web infrastructure & performance specialist — faster pages, AI-visible
//         content, measurable business outcomes.
//       </p>

//       {/* Decorative backgrounds (kept lightweight) */}
//       <div
//         className="pointer-events-none absolute top-10 left-0 h-80 w-80 rounded-full bg-pink-500/12 blur-xl"
//         aria-hidden="true"
//       />
//       <div
//         className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-xl"
//         aria-hidden="true"
//       />

//       <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-3">
//         {/* Left / center column: copy */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col gap-6 py-20 lg:col-span-2 lg:py-0"
//         >
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl font-bold tracking-tight leading-[1.05] text-white sm:text-5xl md:text-6xl"
//           >
//             Your website should convert visitors — not lose them.
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="max-w-xl text-lg leading-relaxed text-text-muted"
//           >
//             I make sites faster, more visible to search & AI, and more reliable
//             — so you get more customers without raising ad spend. Small,
//             measurable changes. Real business outcomes.
//           </motion.p>

//           {/* Value bullets — short, scannable */}
//           <motion.ul
//             variants={itemVariants}
//             className="flex flex-col gap-3 text-sm sm:flex-row"
//           >
//             <li className="flex items-center gap-2">
//               <span
//                 className="inline-block h-2 w-2 rounded-full bg-emerald-400"
//                 aria-hidden="true"
//               />
//               <span>Faster pages</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <span
//                 className="inline-block h-2 w-2 rounded-full bg-amber-300"
//                 aria-hidden="true"
//               />
//               <span>SEO & AI-ready</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <span
//                 className="inline-block h-2 w-2 rounded-full bg-sky-400"
//                 aria-hidden="true"
//               />
//               <span>Zero-drama deploys</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <span
//                 className="inline-block h-2 w-2 rounded-full bg-sky-400"
//                 aria-hidden="true"
//               />
//               <span>Measurable reporting</span>
//             </li>
//           </motion.ul>

//           {/* CTAs */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-wrap items-center gap-4"
//           >
//             <CTAButton />

//             {/* Secondary CTA: scroll to services */}
//             <a
//               href="#services"
//               className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm"
//               aria-label="See services section"
//             >
//               See services
//               <ArrowRight
//                 className="h-4 w-4"
//                 aria-hidden="true"
//               />
//             </a>
//           </motion.div>

//           {/* Micro-trust row */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col items-start gap-4 pt-6 text-sm text-text-muted sm:flex-row sm:items-center"
//           >
//             <div className="flex items-center gap-3">
//               <span className="text-xs text-slate-300">Trusted by</span>
//               <span className="text-sm font-medium underline">
//                 <a
//                   href="https://www.high1digital.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   High1Digital
//                 </a>
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right column: illustrative image & overlay card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.18 }}
//           className="relative m-auto hidden flex-col items-center gap-4 lg:flex"
//         >
//           <div className="col-span-2 relative z-10 overflow-hidden">
//             <div className="m-auto rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm">
//               <img
//                 src={VECTOR}
//                 alt="Illustration of a modern website interface"
//                 loading="eager"
//                 decoding="async"
//                 fetchPriority="high"
//                 width={720}
//                 height={540}
//                 className="h-auto max-w-full object-cover opacity-95"
//               />
//               <div className="bg-linear-to-t absolute bottom-0 left-0 right-0 from-black/75 to-transparent p-6">
//                 <div className="mb-2 flex items-center justify-between gap-4">
//                   <div className="flex items-center gap-2">
//                     <span
//                       className="h-2 w-2 rounded-full bg-green-500 animate-pulse"
//                       aria-hidden="true"
//                     />
//                     <span className="text-xs font-medium text-green-300">
//                       Available for work
//                     </span>
//                   </div>
//                   <div className="rounded-md border border-white/10 px-2 py-1 text-xs">
//                     Free audit
//                   </div>
//                 </div>
//                 <p className="text-sm text-slate-300">
//                   Performance • AI-ready visibility • Core Web Vitals
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Lightweight schema + dateModified (small, relevant only) */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(serviceSchema),
//         }}
//       />
//     </section>
//   );
// };

// export default memo(Landing);
// src/components/Sections/Landing.tsx
import React, { memo, useEffect, useId, useState } from "react";
import { ArrowRight } from "lucide-react";
import VECTOR from "/vector.webp";
import CTAButton from "../CTA";

/**
 * Performance first hero:
 * - Visible by default (no blocking opacity hides)
 * - Gentle CSS-only translate animation so paint happens immediately
 * - Optional hook `useLazyFramer` shown below if you want to add Framer later
 */

const DATE_MODIFIED = "2025-11-30";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web performance & AI visibility",
  description:
    "Performance optimization, structured data, and monitoring to improve conversions and AI visibility.",
  serviceType: [
    "Performance Optimization",
    "SEO & AI Visibility",
    "Monitoring",
  ],
  provider: { "@type": "Person", name: "Keshav Sharma" },
  dateModified: DATE_MODIFIED,
};

const Landing: React.FC = () => {
  const id = useId();
  const sectionId = `home-${id}`;
  const entityLabelId = `entity-${id}`;

  // progressive, non-blocking visual entrance (visible by default)
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // schedule entrance on next frame so browser can paint immediately
    const raf = requestAnimationFrame(() => {
      // tiny timeout yields nicer stagger when multiple elements animate
      setTimeout(() => setEntered(true), 20);
    });
    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  // small helper to build stagger delays (keeps markup clean)
  const delayStyle = (index: number) => ({
    transitionDelay: `${index * 55}ms`,
  });

  return (
    <section
      id={sectionId}
      role="region"
      aria-labelledby={entityLabelId}
      data-date-modified={DATE_MODIFIED}
      className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between p-6 lg:px-4 xl:px-0"
    >
      <p
        id={entityLabelId}
        className="sr-only"
      >
        Web infrastructure & performance specialist — faster pages, AI-visible
        content, measurable business outcomes.
      </p>

      {/* decorative but lightweight backgrounds */}
      <div
        className="pointer-events-none absolute top-10 left-0 h-80 w-80 rounded-full bg-pink-500/12 blur-xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-xl"
        aria-hidden="true"
      />

      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-3">
        {/* Copy column */}
        <div className="flex flex-col gap-6 py-20 lg:col-span-2 lg:py-0">
          <h1
            // visible by default; initial translate is small so paint isn't blocked
            className={`text-4xl font-bold tracking-tight leading-[1.05] text-white sm:text-5xl md:text-6xl
              transform ${entered ? "translate-y-0" : "translate-y-2"}
              transition-transform duration-450 ease-out`}
            style={delayStyle(0)}
          >
            Your website should convert visitors — not lose them.
          </h1>

          <p
            className={`max-w-xl text-lg leading-relaxed text-text-muted
              transform ${entered ? "translate-y-0" : "translate-y-2"}
              transition-transform duration-450 ease-out`}
            style={delayStyle(1)}
          >
            I make sites faster, more visible to search & AI, and more reliable
            — so you get more customers without raising ad spend. Small,
            measurable changes. Real business outcomes.
          </p>

          <ul
            className={`flex flex-col gap-3 text-sm sm:flex-row
              transform ${entered ? "translate-y-0" : "translate-y-2"}
              transition-transform duration-450 ease-out`}
            style={delayStyle(2)}
          >
            <li className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span>Faster pages</span>
            </li>
            <li className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full bg-amber-300"
                aria-hidden="true"
              />
              <span>SEO & AI-ready</span>
            </li>
            <li className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full bg-sky-400"
                aria-hidden="true"
              />
              <span>Zero-drama deploys</span>
            </li>
            <li className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full bg-sky-400"
                aria-hidden="true"
              />
              <span>Measurable reporting</span>
            </li>
          </ul>

          <div
            className={`flex flex-wrap items-center gap-4
              transform ${entered ? "translate-y-0" : "translate-y-2"}
              transition-transform duration-450 ease-out`}
            style={delayStyle(3)}
          >
            <CTAButton />

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm"
              aria-label="See services section"
            >
              See services
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>

          <div
            className={`flex flex-col items-start gap-4 pt-6 text-sm text-text-muted sm:flex-row sm:items-center
              transform ${entered ? "translate-y-0" : "translate-y-2"}
              transition-transform duration-450 ease-out`}
            style={delayStyle(4)}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-300">Trusted by</span>
              <span className="text-sm font-medium underline">
                <a
                  href="https://www.high1digital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  High1Digital
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Right column: image/card (hidden on mobile) */}
        <div
          // small transform on image as well, visible by default; no opacity hide
          className={`relative m-auto hidden flex-col items-center gap-4 lg:flex
            transform ${entered ? "translate-y-0" : "translate-y-2"}
            transition-transform duration-600 ease-out`}
          style={delayStyle(1)}
        >
          <div className="col-span-2 relative z-10 overflow-hidden">
            <div className="m-auto rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm">
              <img
                src={VECTOR}
                alt="Illustration of a modern website interface"
                loading="eager" // keep LCP eager
                decoding="async"
                fetchPriority="high"
                width={720}
                height={540}
                className="h-auto max-w-full object-cover opacity-95"
              />
              <div className="bg-linear-to-t absolute bottom-0 left-0 right-0 from-black/75 to-transparent p-6">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full bg-green-500 animate-pulse"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-medium text-green-300">
                      Available for work
                    </span>
                  </div>
                  <div className="rounded-md border border-white/10 px-2 py-1 text-xs">
                    Free audit
                  </div>
                </div>
                <p className="text-sm text-slate-300">
                  Performance • AI-ready visibility • Core Web Vitals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </section>
  );
};

export default memo(Landing);
