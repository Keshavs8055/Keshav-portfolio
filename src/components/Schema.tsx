import { usePageContext } from "vike-react/usePageContext";

export default function Schema() {
  const pageContext = usePageContext();
  const url = `https://www.webtuner.me${pageContext.urlPathname}`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://webtuner.me/#about",
    name: "Keshav Sharma",
    url: "https://webtuner.me/",
    jobTitle: "Web Infrastructure Specialist",
    description:
      "Web Infrastructure Specialist — audits, performance improvements, SEO and AI-readiness for small businesses and creators.",
    image: "https://webtuner.me/open-graph-image.webp",
    logo: "https://webtuner.me/favicon.svg",
    sameAs: [
      "https://github.com/keshavs8055",
      "https://www.linkedin.com/in/keshav-sharma-1482b7189",
    ],
    knowsAbout: [
      "Web performance",
      "Core Web Vitals",
      "React",
      "Next.js",
      "MERN",
      "SEO",
      "structured data",
      "AI-readiness",
      "accessibility",
      "performance optimization",
      "Figma",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "mailto:keshavs.0496@gmail.com",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://webtuner.me/#website",
    url: "https://webtuner.me/",
    name: "Keshav Sharma — Web Infrastructure Specialist",
    description:
      "AI-optimized, high-performance web development and audits — React, Next.js, SEO and structured data for better visibility.",
    publisher: { "@id": "https://webtuner.me/#about" },
    inLanguage: "en-IN",
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://webtuner.me/#org",
    name: "Keshav Sharma",
    url: "https://webtuner.me/",
    logo: "https://webtuner.me/favicon.svg",
    sameAs: [
      "https://github.com/keshavs8055",
      "https://www.linkedin.com/in/keshav-sharma-1482b7189",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebTuner",
    url: "https://www.webtuner.me",
    logo: "https://www.webtuner.me/logo.png",
    telephone: "+91-9876543210", // Placeholder, user to update
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 62",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201309",
      addressCountry: "IN",
    },
    areaServed: ["Noida", "India", "USA", "UK"],
    sameAs: [
      "https://www.linkedin.com/in/keshav-sharma-1482b7189",
      "https://github.com/keshavs8055",
      "https://www.upwork.com/freelancers/~017c5b366e257b4a2c", // Placeholder ID
    ],
    priceRange: "₹₹ - ₹₹₹",
    description:
      "WebTuner helps businesses modernize and optimize websites for AI search, performance, and conversions.",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.webtuner.me",
      },
      ...(pageContext.urlPathname !== "/"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: (pageContext as any).title || "Page",
              item: url,
            },
          ]
        : []),
    ],
  };

  const schemaGraph: any[] = [
    person,
    website,
    organization,
    localBusiness,
    breadcrumb,
  ];

  // Service Data Mapping
  const serviceData: Record<
    string,
    {
      name: string;
      description: string;
      faq: { q: string; a: string }[];
    }
  > = {
    "/audit": {
      name: "Free Website Audit",
      description:
        "Stop guessing why your site isn't performing. Get a clear, actionable roadmap to fix speed, SEO, and conversion issues.",
      faq: [
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
      ],
    },
    "/performance": {
      name: "Speed & Core Web Vitals Fixes",
      description:
        "A slow website kills conversions. I optimize your code, images, and server settings to ensure lightning-fast load times and passing Core Web Vitals scores.",
      faq: [
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
      ],
    },
    "/ai-seo": {
      name: "AI-Ready SEO & Structured Data",
      description:
        "Search is changing. AI overviews and chatbots need structured data to understand your content. I make your website fluent in the language of AI.",
      faq: [
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
      ],
    },
    "/react-next": {
      name: "React & Next.js Websites & Fixes",
      description:
        "Modern frameworks are powerful but can be tricky for SEO. I specialize in building and fixing React/Next.js applications to ensure they are fast, crawlable, and rank high.",
      faq: [
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
      ],
    },
  };

  const currentService = serviceData[pageContext.urlPathname];

  if (currentService) {
    schemaGraph.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: currentService.name,
      description: currentService.description,
      provider: {
        "@id": "https://www.webtuner.me",
      },
      url: url,
    });

    schemaGraph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: currentService.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": schemaGraph,
        }),
      }}
    />
  );
}
