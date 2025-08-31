import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToHashElement({ offset = 156 }) {
  const location = useLocation();

  useEffect(() => {
    let timeout: any;

    if (location.hash) {
      timeout = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          const yOffset = -offset; // sticky header offset
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 0); // small delay to ensure DOM is ready
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [location, offset]);

  return null;
}
