export function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="author"
        content="Keshav Sharma"
      />
      <meta
        name="application-name"
        content="WebTuner - Web Infrastructure Specialist"
      />

      {/* Indexing */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />
      <link
        rel="canonical"
        href="https://www.webtuner.me/"
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
        content="https://www.webtuner.me/"
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
        content="https://www.webtuner.me/open-graph-image.webp"
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
        content="https://www.webtuner.me/open-graph-image.webp"
      />

      {/* Geo hints */}
      <meta
        name="geo.region"
        content="IN"
      />
      <meta
        name="geo.placename"
        content="India"
      />

      {/* Preconnects / icons / manifest */}
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
    </>
  );
}
