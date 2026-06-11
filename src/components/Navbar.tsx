"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { NavLink } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const navLinks = ["Home", "About", "Services", "Solutions","Education" , "Nations Forward", "Safety", "Economic Zones",   "Media", "Contact US"];

const getPath = (label: string) => {
  if (label === "Home") return "/";
  return "/" + label.toLowerCase().replace(/\s+/g, "-");
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: "-0.14px",
  color: "rgba(255,251,242,0.8)",
  whiteSpace: "nowrap",
};

export default function Navbar({ activePath }: { activePath?: string } = {}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { isDesktopOrLaptop, isMobile } = useBreakpoint();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <>
      <motion.nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
        }}
        animate={{
          paddingTop: scrolled ? "12px" : isDesktopOrLaptop ? "40px" : "16px",
          paddingBottom: scrolled ? "12px" : isDesktopOrLaptop ? "0px" : "16px",
          backgroundColor: scrolled || open ? "rgba(2,10,24,0.92)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled || open ? "blur(16px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Desktop layout */}
        {isDesktopOrLaptop ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1440px", margin: "0 auto", paddingLeft: "70px", paddingRight: "70px" }}>
            <Link href="/" style={{ flexShrink: 0 }}>
              <Image src="/images/logo-white-new.svg" alt="Sarabloh" width={133} height={22} priority />
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "34px" }}>
              {navLinks.map((l) => {
                const path = getPath(l);
                const isActive = activePath === path;
                return (
                  <NavLink
                    key={l}
                    href={path}
                    style={{
                      ...linkStyle,
                      color: isActive ? "#fffbf2" : "rgba(255,251,242,0.8)",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {l}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ) : (
          /* Mobile / Tablet layout */
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "20px", paddingRight: "20px" }}>
            <Link href="/" style={{ flexShrink: 0 }}>
              <Image src="/images/logo-white-new.svg" alt="Sarabloh" width={isMobile ? 120 : 140} height={isMobile ? 20 : 23} priority />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              style={{
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        )}
      </motion.nav>

      {/* Mobile slide-in menu panel */}
      <AnimatePresence>
        {open && !isDesktopOrLaptop && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: isMobile ? "85vw" : "60vw",
              maxWidth: "360px",
              background: "rgba(2,10,24,0.97)",
              backdropFilter: "blur(20px)",
              zIndex: 60,
              display: "flex",
              flexDirection: "column",
              paddingTop: "80px",
              paddingBottom: "40px",
              paddingLeft: "32px",
              paddingRight: "32px",
              overflowY: "auto",
            }}
          >
            {/* Close button inside panel */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((l, i) => {
                const path = getPath(l);
                const isActive = activePath === path;
                return (
                  <motion.div
                    key={l}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href={path}
                      onClick={() => setOpen(false)}
                      style={{
                        ...linkStyle,
                        color: isActive ? "#fffbf2" : "rgba(255,251,242,0.9)",
                        fontWeight: isActive ? 600 : 400,
                        fontSize: "18px",
                        textDecoration: "none",
                        display: "block",
                        padding: "12px 0",
                        minHeight: "44px",
                        lineHeight: "44px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {l}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay behind slide-in panel */}
      <AnimatePresence>
        {open && !isDesktopOrLaptop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 55,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
