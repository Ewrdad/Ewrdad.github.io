import { useEffect } from "react";
import { useLocation } from "react-router";

function decodeHashId(hash) {
  if (!hash) return "";
  const raw = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!raw) return "";
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

export function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    const id = decodeHashId(location.hash);
    if (!id) return undefined;

    const scrollToTarget = () => {
      const element = document.getElementById(id);
      if (!element || typeof element.scrollIntoView !== "function") {
        return;
      }

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    };

    if (
      typeof window !== "undefined" &&
      typeof window.requestAnimationFrame === "function"
    ) {
      const frameId = window.requestAnimationFrame(scrollToTarget);
      return () => window.cancelAnimationFrame(frameId);
    }

    scrollToTarget();
    return undefined;
  }, [location.hash, location.key]);
}
