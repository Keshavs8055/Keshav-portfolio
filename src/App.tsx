import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router";

import Home from "./components/Main/Home/Home";

const CaseStudy = React.lazy(() => import("./components/Main/CaseStudy"));

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
  componentDidCatch(error: Error) {
    // report error to monitoring if you use one
    console.error("ErrorBoundary caught", error);
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
              contact me at{" "}
              <a
                href="mailto:keshavs.0496@gmail.com"
                className="underline"
              >
                keshavs.0496@gmail.com
              </a>
              .
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-indigo-600 rounded text-white"
            >
              Reload
            </button>
          </div>
        </main>
      );
    }
    return this.props.children as React.ReactElement;
  }
}

/** Scroll-to-top on route change to avoid users landing in middle of page after navigation */
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // instant scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

/** Root layout used by the router so hooks like useLocation() work */
function RootLayout() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Outlet />
    </>
  );
}

/** Lightweight accessible suspense fallback (screen-reader friendly) */
function LoadingFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen flex items-center justify-center bg-[#061022]"
    >
      <div className="w-full gap-x-2 flex justify-center items-center">
        <div className="w-15 bg-[#d991c2] h-15 rounded-full animate-bounce"></div>
        <div className="w-15 h-15 bg-[#9869b8] rounded-full animate-bounce"></div>
        <div className="w-15 h-15 bg-[#6756cc] rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

/** Router definition using a root layout. Child routes render into <Outlet /> */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "case-study", element: <CaseStudy /> },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
