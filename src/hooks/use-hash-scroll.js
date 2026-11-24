import { useEffect } from "react";
import { useLocation } from "react-router";

export function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const id = location.hash ? location.hash.substring(1) : "";
      if (!id) return;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView?.({ behavior: "smooth" });
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [location.hash]);
}
