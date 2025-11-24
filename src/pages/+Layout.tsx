import React, { Suspense } from "react";
import Layout from "../components/Layout";
import "../index.css";

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
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-[#061022] text-white">
          <div className="max-w-xl text-center">
            <h1 className="text-2xl font-semibold mb-2">
              Something went wrong
            </h1>
            <p className="text-slate-300 mb-4">
              The page failed to load. Try refreshing — if it keeps failing,
              contact me.
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

    return this.props.children as React.ReactElement;
  }
}

function LoadingFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div
        className="flex gap-2"
        aria-hidden="true"
      >
        <span
          className="w-4 h-4 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <span
          className="w-4 h-4 rounded-full bg-secondary animate-bounce"
          style={{ animationDelay: "0.1s" }}
        />
        <span
          className="w-4 h-4 rounded-full bg-white animate-bounce"
          style={{ animationDelay: "0.2s" }}
        />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Layout>{children}</Layout>
      </Suspense>
    </ErrorBoundary>
  );
}
