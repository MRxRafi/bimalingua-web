"use client";

import { useEffect } from "react";

export default function SmoothScrollHandler() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Find the closest anchor element clicked
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Check if href contains a hash fragment
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.substring(hashIndex);
      const targetId = hash.replace("#", "");
      if (!targetId) return;

      // Determine target path and current path
      const targetPath = href.substring(0, hashIndex);
      const currentPath = window.location.pathname;

      const isSamePage =
        targetPath === "" ||
        targetPath === currentPath ||
        (targetPath === "/" && currentPath === "/") ||
        (targetPath.endsWith(currentPath) && currentPath !== "/");

      if (isSamePage) {
        const element = document.getElementById(targetId);
        if (element) {
          e.preventDefault();

          // Calculate header height offset for sticky navigation
          const header = document.querySelector("header");
          const headerHeight = header ? header.getBoundingClientRect().height : 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = window.pageYOffset + elementPosition - headerHeight - 15;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Update address bar URL hash without forcing default browser jump
          if (window.history.pushState) {
            window.history.pushState(null, "", `#${targetId}`);
          } else {
            window.location.hash = targetId;
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  return null;
}
