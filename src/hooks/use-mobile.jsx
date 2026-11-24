import * as React from "react";

export const MOBILE_BREAKPOINT = 768;

function getIsMobileViewport() {
  if (typeof window === "undefined") {
    return false;
  }
  return window.innerWidth < MOBILE_BREAKPOINT;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(getIsMobileViewport);

  React.useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      setIsMobile(getIsMobileViewport());
      return undefined;
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(getIsMobileViewport());
    };

    onChange();

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    if (typeof mql.addListener === "function") {
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }

    return undefined;
  }, []);

  return isMobile;
}
