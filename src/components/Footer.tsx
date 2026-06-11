"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const links = ["Home", "About", "Solutions", "Services", "Nations Forward", "Community", "Safety", "Education"];
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
