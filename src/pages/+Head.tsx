export function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },

      {
        "@type": "WebSite",
        "@id": "https://webtuner.me/#website",
        url: "https://webtuner.me/",
        name: "Keshav Sharma — Web Infrastructure Specialist",
        description:
          "AI-optimized, high-performance web development and audits — React, Next.js, SEO and structured data for better visibility.",
        publisher: { "@id": "https://webtuner.me/#about" },
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://webtuner.me/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://webtuner.me/#webpage",
        url: "https://webtuner.me/",
        name: "Keshav Sharma — Web Infrastructure Specialist",
        isPartOf: { "@id": "https://webtuner.me/#website" },
        about: { "@id": "https://webtuner.me/#about" },
        description:
          "Portfolio and service page: free audits, SEO, AI-optimizations, and web development for businesses that want to be visible to AI and users.",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://webtuner.me/open-graph-image.webp",
        },
      },

      {
        "@type": "Service",
        "@id": "https://webtuner.me/#services",
        name: "Website Audit (Free)",
        serviceType: "Audit",
        description:
          "Full website audit covering SEO, Core Web Vitals, metadata, AI-readiness and conversion blockers. Deliverable: prioritized recommendations and one-page summary.",
        provider: { "@id": "https://webtuner.me/#about" },
        areaServed: "IN",
        url: "https://webtuner.me/#services",
        termsOfService: "Free audit; follow-up work priced separately.",
      },

      {
        "@type": "Service",
        name: "SEO Improvements",
        description:
          "On-page SEO, metadata fixes, content structure and crawlability improvements.",
        provider: { "@id": "https://webtuner.me/#about" },
        priceRange: "₹1,000–2,000",
      },

      {
        "@type": "Service",
        name: "AI Optimizations",
        description:
          "Structured data (JSON-LD), LLM-friendly FAQs, content shaping and other AI-readiness work.",
        provider: { "@id": "https://webtuner.me/#about" },
        priceRange: "₹5,000–12,000",
      },

      {
        "@type": "Service",
        name: "Web Development & Updates",
        description:
          "Site builds, component updates, fixes and small CMS work (WordPress, Wix).",
        provider: { "@id": "https://webtuner.me/#about" },
        priceRange: "₨1,000–2,000 per dynamic page (approx.)",
      },

      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "",
        email: "keshavs.0496@gmail.com",
        availableLanguage: ["English"],
      },

      {
        "@type": "Organization",
        "@id": "https://webtuner.me/#org",
        name: "Keshav Sharma",
        url: "https://webtuner.me/",
        logo: "https://webtuner.me/favicon.svg",
        sameAs: [
          "https://github.com/keshavs8055",
          "https://www.linkedin.com/in/keshav-sharma-1482b7189",
        ],
      },
    ],
  };

  return (
    <>
      <meta charSet="UTF-8" />

      <meta
        name="author"
        content="Keshav Sharma"
      />
      <meta
        name="application-name"
        content="WebTuner - Web infrastructure Specialist"
      />
      {/* Keep keywords short (optional) */}
      <meta
        name="keywords"
        content="AI optimization, Client conversion, Web performance, SEO, AI Readiness"
      />

      {/* Indexing */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />
      <link
        rel="canonical"
        href="https://webtuner.me/"
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        content="Web Infrastructure Specialist"
      />
      <meta
        property="og:url"
        content="https://webtuner.me/"
      />
      <meta
        property="og:title"
        content="WebTuner - Web Infrastructure Specialist"
      />
      <meta
        property="og:description"
        content="Helping Businesses stand out in AI-era. Optimizing SEO and making the websites more visible to AI."
      />
      <meta
        property="og:image"
        content="https://webtuner.me/open-graph-image.webp"
      />
      <meta
        property="og:image:width"
        content="1200"
      />
      <meta
        property="og:image:height"
        content="630"
      />
      <meta
        property="og:image:alt"
        content="Web Infrastructure Specialist - Brief description"
      />
      <meta
        property="og:locale"
        content="en_IN"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content="WebTuner - Web Infrastructure Specialist"
      />
      <meta
        name="twitter:description"
        content="Helping Businesses stand out in AI-era. Optimizing SEO and making the websites more visible to AI."
      />
      <meta
        name="twitter:image"
        content="https://webtuner.me/open-graph-image.webp"
      />

      {/* Geo hints (ok to keep but not relied upon by search engines) */}
      <meta
        name="geo.region"
        content="IN"
      />
      <meta
        name="geo.placename"
        content="India"
      />

      {/* Preconnects / icons / manifest — keep as you already have them */}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preload"
        as="image"
        href="/vector.webp"
      />

      <link
        rel="icon"
        sizes="any"
        href="/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="manifest"
        href="/manifest.webmanifest"
      />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
