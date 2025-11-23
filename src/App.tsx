// src/App.tsx
import React, { Suspense } from "react";
import Home from "./components/Main/Home/Home";
import Layout from "./components/Layout";

/**
 * ErrorBoundary - catches render errors and shows a friendly fallback.
 * Keeps the same email and reload button you had.
 */
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // send to monitoring here if you use one (Sentry, LogRocket, etc.)
    // console.error is fine for dev.
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-[#061022] text-white">
          <div className="max-w-xl text-center">
            <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-slate-300 mb-4">
              The page failed to load. Try refreshing — if it keeps failing,
              contact me at{" "}
              <a
                href="mailto:keshavs.0496@gmail.com"
                className="underline"
                rel="noopener noreferrer"
              >
                keshavs.0496@gmail.com
              </a>
              .
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-indigo-600 rounded text-white"
                aria-label="Reload page"
              >
                Reload
              </button>
            </div>
          </div>
        </main>
      );
    }

    // render normal children
    return this.props.children as React.ReactElement;
  }
}

/**
 * ScrollToTopOnMount - simple utility for SPAs that ensures page starts at top.
 * Runs once when App mounts.
 */
function ScrollToTopOnMount() {
  React.useEffect(() => {
    // 'auto' is standard; avoid non-standard 'instant'.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return null;
}

/**
 * LoadingFallback - accessible loading UI while Suspense/lazy loads render
 */
function LoadingFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="flex gap-2" aria-hidden="true">
        <span className="w-4 h-4 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }} />
        <span className="w-4 h-4 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0.1s" }} />
        <span className="w-4 h-4 rounded-full bg-white animate-bounce" style={{ animationDelay: "0.2s" }} />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}

/**
 * App - minimal SPA entry. No react-router, no unnecessary config.
 * Keep Suspense so you can switch Home (or other pieces) to lazy() easily.
 */
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Layout>
          <ScrollToTopOnMount />
          <Home />
        </Layout>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
