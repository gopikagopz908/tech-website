import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollWindowToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) return;

    scrollWindowToTop();

    // Second pass after paint — handles layout shift from images / motion
    const id = requestAnimationFrame(() => {
      scrollWindowToTop();
    });

    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;