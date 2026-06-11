"use client";

import { useSyncExternalStore } from "react";

export type Breakpoint = "mobile" | "tablet" | "laptop" | "desktop";

function getWidth() {
  if (typeof window === "undefined") return 1200;
  return window.innerWidth;
}

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  window.addEventListener("pageshow", callback);
  return () => {
    window.removeEventListener("resize", callback);
    window.removeEventListener("pageshow", callback);
  };
}

export function useBreakpoint() {
  const width = useSyncExternalStore(subscribe, getWidth, getWidth);

  const bp: Breakpoint =
    width <= 640 ? "mobile" :
    width <= 768 ? "tablet" :
    width <= 1024 ? "laptop" :
    "desktop";

  return {
    bp,
    isMobile: bp === "mobile",
    isTablet: bp === "tablet",
    isLaptop: bp === "laptop",
    isDesktop: bp === "desktop",
    isMobileOrTablet: bp === "mobile" || bp === "tablet",
    isDesktopOrLaptop: bp === "desktop" || bp === "laptop",
    width,
  };
}
