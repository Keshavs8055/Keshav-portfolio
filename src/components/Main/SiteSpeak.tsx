import { useCallback, useState, useSyncExternalStore } from "react";
import { MessageCircle, Loader2, AlertCircle } from "lucide-react";

const SITESPEAK_SRC =
  "https://sitespeak.ai/chatbots/3e52c48e-1c0b-41ba-bac8-4364e76ba154.js";
const SCRIPT_ID = "sitespeak-ai-script";

// Empty subscriber for useSyncExternalStore
const emptySubscribe = () => () => {};

/**
 * Client-only, lazy-loading FAB for SiteSpeak chatbot.
 * - Zero layout shift (fixed position)
 * - Loads 3rd-party script ONLY on user interaction
 * - Checks for existing script in DOM to avoid duplicates
 */
export default function SiteSpeakChatbot() {
  // 1. Safe client-side check
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Dummy state to force re-evaluation of the DOM check
  const [, setForceCheck] = useState(0);

  // 2. Check if script is in DOM. This is our "source of truth" for if the widget is active.
  const isWidgetActive = useSyncExternalStore(
    emptySubscribe,
    () => !!document.getElementById(SCRIPT_ID),
    () => false
  );

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadScript = useCallback(() => {
    if (!isClient || isWidgetActive || isLoading) return;

    // Double check in case it was added since render
    if (document.getElementById(SCRIPT_ID)) {
      setForceCheck((c) => c + 1);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SITESPEAK_SRC;
    script.async = true;

    script.onload = () => {
      setIsLoading(false);
      // Widget is active, no need to force check as it's already in DOM
    };

    script.onerror = (ev) => {
      console.error("SiteSpeak script failed to load", ev);
      setIsLoading(false);
      setHasError(true);
      // Remove script so user can retry
      try {
        script.remove();
      } catch {
        /* ignore */
      }
      setForceCheck((c) => c + 1);
    };

    document.head.appendChild(script);
    // Force re-check so isWidgetActive becomes true immediately, hiding the button
    setForceCheck((c) => c + 1);
  }, [isClient, isWidgetActive, isLoading]);

  if (!isClient) return null;

  // If widget is active (script loaded), hide our custom launcher
  if (isWidgetActive) return null;

  return (
    <div
      className="fixed z-50 bottom-6 right-6 print:hidden"
      style={{ pointerEvents: "auto" }}
    >
      <button
        onClick={loadScript}
        disabled={isLoading}
        aria-label={hasError ? "Retry loading chat" : "Open chat widget"}
        title={hasError ? "Retry loading chat" : "Open chat widget"}
        className={`
          group relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl 
          transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          ${
            hasError
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-purple-500 hover:bg-indigo-700 text-white"
          }
        `}
      >
        {isLoading ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : hasError ? (
          <AlertCircle className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7 transition-transform duration-300 group-hover:-rotate-12" />
            {/* Ping animation to draw attention if not loaded yet */}
            {/* <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-400"></span>
            </span> */}
          </>
        )}
      </button>
    </div>
  );
}
