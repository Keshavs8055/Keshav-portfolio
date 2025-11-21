// import { MessageCircle } from "lucide-react";
// import { Config } from "../../config";
// import { Footer } from "../../footer";
// import ContactBanner from "../ContactBanner";
// import FAQSection from "../FAQ";
// import Landing from "../Landing";
// import ProcessSection from "../Process";
// import Projects from "../Projects";
// import ServicesSection from "../Services";
// import Skills from "../Skills";
// import ValuePillars from "../ValuePillars";
// import { usePageMeta } from "../../../Pagehead";

// export default function Home() {
//   usePageMeta({
//     title: "Keshav Sharma | Portfolio",
//     description:
//       "Portfolio of Keshav Sharma, a web developer and designer specializing in modern, responsive, and user-centric digital experiences.",
//     canonical: `${Config.mainURL}/`,
//   });
//   return (
//     <div className="bg-linear-to-br from-[#061022] via-[#071228] to-[#071018]">
//       <Landing />
//       <ValuePillars />
//       <ServicesSection />
//       <ContactBanner />
//       <ProcessSection />
//       <FAQSection />
//       <ContactBanner />
//       <Skills />
//       <Projects />
//       <Footer />
//       <a
//         href={Config.mailString}
//         className="fixed bottom-6 right-6 px-4 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg text-sm"
//       >
//         <MessageCircle />
//       </a>
//     </div>
//   );
// }
// src/components/Main/Home/Home.tsx
import { Suspense, lazy, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Config } from "../../config";
import { Footer } from "../../footer";
import ContactBanner from "../ContactBanner";
import Landing from "../Landing";
import ValuePillars from "../ValuePillars";
import { usePageMeta } from "../../../Pagehead";

/**
 * Lazy load below-the-fold sections to reduce initial bundle and improve LCP.
 * These load only when the browser needs them or in the background.
 */
const ServicesSection = lazy(() => import("../Services"));
const ProcessSection = lazy(() => import("../Process"));
const FAQSection = lazy(() => import("../FAQ"));
const Skills = lazy(() => import("../Skills"));
const Projects = lazy(() => import("../Projects"));

export default function Home() {
  usePageMeta({
    title: "Keshav Sharma | Portfolio",
    description:
      "Portfolio of Keshav Sharma, a web developer and designer specializing in modern, responsive, and user-centric digital experiences.",
    canonical: `${Config.mainURL}/`,
  });

  // Inject light-weight JSON-LD for Person + WebSite and preload critical assets
  useEffect(() => {
    // JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${Config.mainURL}/#person`,
          name: "Keshav Sharma",
          url: Config.mainURL,
          sameAs: [
            "https://github.com/keshavs8055",
            "https://www.linkedin.com/in/keshav-sharma-1482b7189",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${Config.mainURL}/#website`,
          url: Config.mainURL,
          name: "Keshav Sharma - Portfolio",
          description:
            "Modernize local-business websites — mobile-first, fast and conversion-ready.",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Preload hero image (adjust path to your actual hero image)
    const heroUrl = "/assets/og-hero.avif"; // <-- update to actual LCP image path
    const preloadImg = document.createElement("link");
    preloadImg.rel = "preload";
    preloadImg.as = "image";
    preloadImg.href = heroUrl;
    document.head.appendChild(preloadImg);

    // Preload primary font (adjust to your font file)
    const fontUrl = "/fonts/Inter-Variable.woff2"; // <-- update if different
    const preloadFont = document.createElement("link");
    preloadFont.rel = "preload";
    preloadFont.as = "font";
    preloadFont.type = "font/woff2";
    preloadFont.crossOrigin = "anonymous";
    preloadFont.href = fontUrl;
    document.head.appendChild(preloadFont);

    return () => {
      // cleanup
      document.head.removeChild(script);
      document.head.removeChild(preloadImg);
      document.head.removeChild(preloadFont);
    };
  }, []);

  // Simple suspense fallback used for below-the-fold sections (keeps layout stable)
  const SectionFallback = (
    <div className="max-w-6xl mx-auto px-6 py-12 text-slate-500">
      {/* lightweight placeholder to avoid layout jumps */}
    </div>
  );

  return (
    <div className="bg-linear-to-br from-[#061022] via-[#071228] to-[#071018]">
      <Landing />
      <ValuePillars />

      {/* Below-the-fold content is lazy-loaded to improve initial render */}
      <Suspense fallback={SectionFallback}>
        <ServicesSection />
      </Suspense>

      <ContactBanner />

      <Suspense fallback={SectionFallback}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={SectionFallback}>
        <FAQSection />
      </Suspense>

      <ContactBanner />

      <Suspense fallback={SectionFallback}>
        <Skills />
      </Suspense>

      <Suspense fallback={SectionFallback}>
        <Projects />
      </Suspense>

      <Footer />

      <a
        href={Config.mailString}
        aria-label="Email Keshav for a free audit"
        className="fixed bottom-6 right-6 px-4 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg text-sm"
      >
        <MessageCircle aria-hidden />
      </a>
    </div>
  );
}
