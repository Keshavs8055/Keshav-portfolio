import { type JSX } from "react";
import { motion } from "framer-motion";
import { usePageContext } from "vike-react/usePageContext";

const Page = (): JSX.Element => {
  const pageContext = usePageContext();
  const { abortReason, abortStatusCode, is404 } = pageContext;

  // Helper type-guard: isAbortReasonObj
  const isAbortReasonObj = (v: unknown): v is { notAdmin?: boolean } =>
    typeof v === "object" && v !== null && "notAdmin" in (v as object);

  // Compute user-facing message
  let msg: string;
  if (isAbortReasonObj(abortReason) && abortReason.notAdmin) {
    msg = "You cannot access this page because you aren't an administrator.";
  } else if (typeof abortReason === "string") {
    msg = abortReason;
  } else if (abortStatusCode === 403) {
    msg =
      "You cannot access this page because you don't have enough privileges.";
  } else if (abortStatusCode === 401) {
    msg =
      "You cannot access this page because you aren't logged in. Please log in.";
  } else if (is404) {
    msg = "This page doesn't exist.";
  } else {
    msg = "Something went wrong. Try again (later).";
  }

  // Determine status label
  const statusLabel =
    typeof abortStatusCode === "number"
      ? String(abortStatusCode)
      : is404
      ? "404"
      : "Error";

  return (
    <div className="min-h-screen min-w-screen max-w-screen max-h-screen absolute flex items-center justify-center top-0 bg-linear-180 from-black via-black to-purple-900/50 text-text-main selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-2xl  border border-white"
        role="main"
        aria-labelledby="error-title"
      >
        <div className="flex items-start justify-between gap-6 p-10 rounded-2xl bg-black/10 relative backdrop-blur-2xl z-50">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-semibold text-2xl"
            aria-hidden
          >
            {statusLabel}
          </div>

          <div className="flex-1">
            <h1
              id="error-title"
              className="text-2xl md:text-3xl font-semibold text-text-main"
            >
              Oops — {is404 ? "Not found" : "Something went wrong"}
            </h1>

            <p
              className="mt-3 text-sm text-text-muted leading-relaxed"
              aria-live="polite"
            >
              {msg}
            </p>

            {/* Optional developer hint */}
            <div className="mt-4 text-xs text-slate-400">
              <span className="sr-only">Debug:</span>
              {abortStatusCode ? `Status: ${abortStatusCode}. ` : ""}
              {typeof abortReason === "string" ? `Reason: ${abortReason}` : ""}
              {isAbortReasonObj(abortReason) && abortReason.notAdmin
                ? " (notAdmin)"
                : ""}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => history.back()}
                className="inline-flex items-center gap-2 rounded-md border border-white/8 px-3 py-2 text-sm font-medium hover:bg-white/2 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                ← Back
              </button>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-md border border-white/8 px-3 py-2 text-sm font-medium hover:bg-white/2 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export { Page };
