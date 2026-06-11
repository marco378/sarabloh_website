"use client";

import { createContext, Fragment, ReactNode, useContext, useEffect, useState } from "react";

const BackForwardRestoreContext = createContext(false);

export function useBackForwardRestore() {
  return useContext(BackForwardRestoreContext);
}

export default function BackForwardRemount({ children }: { children: ReactNode }) {
  const [epoch, setEpoch] = useState(0);
  const restored = epoch > 0;

  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      if (event.persisted || nav?.type === "back_forward") {
        setEpoch((value) => value + 1);
      }
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return (
    <BackForwardRestoreContext.Provider value={restored}>
      <Fragment key={epoch}>{children}</Fragment>
    </BackForwardRestoreContext.Provider>
  );
}
