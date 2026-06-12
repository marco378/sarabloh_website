"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const links = ["Home", "About", "Mobility Solutions", "Services", "Nations Forward", "Accelerator", "Safety", "Education"];
const getPath = (label: string) => {
  if (label === "Home") return "/";
  return "/" + label.toLowerCase().replace(/\s+/g, "-");
};

export default function Footer() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const watermarkSize =
    bp === "mobile" ? "48px" :
    bp === "tablet" ? "80px" :
    "clamp(60px, 13.3vw, 192px)";

  const watermarkTracking =
    bp === "mobile" ? "-3px" :
    bp === "tablet" ? "-6px" :
    "-21.12px";

  return (
    <footer style={{ background: "#ffffff", overflow: "hidden" }}>

      {/* "Future of education" watermark */}
      <FadeUp>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 700,
            fontSize: watermarkSize,
            lineHeight: 1.1,
            letterSpacing: watermarkTracking,
            color: "rgba(0,0,0,0.05)",
            whiteSpace: "nowrap",
            margin: 0,
          }}>
            Future of education
          </p>
        </div>
      </FadeUp>

      {/* Bottom section */}
      <FadeUp delay={0.1}>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: padX,
          paddingRight: padX,
          paddingBottom: "32px",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "20px" : "30px",
        }}>

          {/* Logo + Nav links row */}
          <div style={{
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            alignItems: isMobileOrTablet ? "center" : "center",
            justifyContent: isMobileOrTablet ? "center" : "space-between",
            maxWidth: "1300px",
            margin: "0 auto",
            width: "100%",
            gap: isMobileOrTablet ? "20px" : 0,
          }}>
            {/* Logo */}
            <Link href="/" style={{ flexShrink: 0 }}>
              <Image
                src="/images/logo-dark-new.svg"
                alt="Sarabloh"
                width={isMobile ? 120 : 157}
                height={isMobile ? 20 : 26}
              />
            </Link>

            {/* Nav links — right-aligned on desktop */}
            <div style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: isMobileOrTablet ? "center" : "flex-end",
              gap: isMobile ? "8px 14px" : "22px",
            }}>
              {links.map((l) => (
                <Link
                  key={l}
                  href={getPath(l)}
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: isMobile ? "14px" : "16px",
                    lineHeight: 1.5,
                    letterSpacing: "-0.16px",
                    color: "rgba(0,0,0,0.6)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: isMobile ? "44px" : "auto",
                  }}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Full-width divider */}
          <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.1)" }} />

          {/* Social icons */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: isMobile ? "12px" : "20px",
          }}>
            <a
              href="https://www.linkedin.com/company/sarabloh-technologies-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarabloh LinkedIn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: isMobile ? "40px" : "44px",
                height: isMobile ? "40px" : "44px",
                borderRadius: "100px",
                background: "rgba(1,80,205,0.06)",
                color: "rgba(0,0,0,0.75)",
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" rx="1" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577341406765"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarabloh Facebook"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: isMobile ? "40px" : "44px",
                height: isMobile ? "40px" : "44px",
                borderRadius: "100px",
                background: "rgba(1,80,205,0.06)",
                color: "rgba(0,0,0,0.75)",
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sarabloh.ca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarabloh Instagram"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: isMobile ? "40px" : "44px",
                height: isMobile ? "40px" : "44px",
                borderRadius: "100px",
                background: "rgba(1,80,205,0.06)",
                color: "rgba(0,0,0,0.75)",
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16.5 7.5h.01" />
                <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </a>
          </div>

          {/* Address */}
          <p style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: isMobile ? "13px" : "16px",
            lineHeight: 1.5,
            letterSpacing: "-0.16px",
            color: "rgba(0,0,0,0.4)",
            textAlign: "center",
            margin: 0,
          }}>
            6-282 Loren Drive, Morden, MB, Canada R6M 0G2&nbsp;&nbsp;·&nbsp;&nbsp;info@sarabloh.ca
          </p>

        </div>
      </FadeUp>
    </footer>
  );
}
