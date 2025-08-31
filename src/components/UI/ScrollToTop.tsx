import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // or "smooth"
  }, [pathname, key]); // 👈 include key as well

  return null;
}

export default ScrollToTop;
