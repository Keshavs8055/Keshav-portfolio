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
          "Web Infrastructure Specialist building AI-optimized, high-performance digital experiences.",
        image: "https://webtuner.me/open-graph-image.webp",
        sameAs: [
          "https://github.com/keshavs8055",
          "https://www.linkedin.com/in/keshav-sharma-1482b7189",
        ],
        knowsAbout: [
          "Web performance",
          "React",
          "Next.js",
          "SEO",
          "AI optimization",
          "infrastructure",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://webtuner.me/#website",
        url: "https://webtuner.me/",
        name: "Keshav Sharma — Portfolio",
        description:
          "High-performance, minimal, conversion-focused web development.",
        publisher: {
          "@id": "https://webtuner.me/#about",
        },
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
        name: "Keshav Sharma | Web Infrastructure Specialist",
        isPartOf: { "@id": "https://webtuner.me/#website" },
        about: { "@id": "https://webtuner.me/#about" },
        description:
          "Portfolio showcasing UI engineering, performance optimization, and full-stack projects.",
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

      {/* Keep keywords short (optional) */}
      <meta
        name="keywords"
        content="Web infrastructure, React, Next.js, web performance, SEO"
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
        content="Keshav Sharma — Web Infrastructure Specialist"
      />
      <meta
        property="og:description"
        content="AI-optimized, high-performance web development. React & Next.js specialist."
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
        content="Keshav Sharma — Web Infrastructure Specialist"
      />
      <meta
        name="twitter:description"
        content="AI-optimized, high-performance web development. React & Next.js specialist."
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
        href="/favicon.ico"
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
