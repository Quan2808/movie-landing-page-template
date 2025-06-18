import { useEffect } from "react";

const useDynamicFavicon = () => {
  useEffect(() => {
    const setFavicon = (isDark) => {
      const favicon =
        document.querySelector("link[rel='icon']") ||
        document.createElement("link");
      favicon.rel = "icon";
      favicon.type = "image/svg+xml";
      favicon.href = isDark
        ? "/logos/favicon-light.svg"
        : "/logos/favicon-dark.svg";
      document.head.appendChild(favicon);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setFavicon(mediaQuery.matches);

    const handler = (e) => setFavicon(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
};

export default useDynamicFavicon;
