"use client";

import { motion } from "framer-motion";
import { SplitText } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

export default function MediaCoverage() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "38px" :
    bp === "tablet" ? "54px" :
    bp === "laptop" ? "68px" : "80px";

  const headingTracking =
    bp === "mobile" ? "-1.6px" :
    bp === "tablet" ? "-2.4px" :
    "-4px";

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  return (
    <>
      {/* Dark hero portion */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: bp === "mobile" ? "130px" : bp === "tablet" ? "150px" : "200px",
          paddingBottom: isMobile ? "64px" : "96px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <AnimatedGradient speed={0.7} />
        </div>

        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: padX,
          paddingRight: padX,
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "20px" : "28px",
        }}>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "2px",
              color: "rgba(255,251,242,0.45)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Sarabloh Technologies
          </motion.p>

          {/* Heading */}
          <div style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: headingSize,
            lineHeight: 0.96,
            letterSpacing: headingTracking,
          }}>
            <SplitText delay={0.2} style={{ fontWeight: 400, color: "#fffbf2", display: "block", justifyContent: "flex-start" }}>
              Media Coverage
            </SplitText>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "18px",
              lineHeight: 1.6,
              letterSpacing: "-0.2px",
              color: "rgba(255,251,242,0.6)",
              margin: 0,
              maxWidth: "480px",
            }}
          >
            When communities build technology together, people take notice.
          </motion.p>
        </div>
      </section>

      {/* White section — featured article */}
      <section style={{ background: "#ffffff", paddingTop: isMobile ? "48px" : "72px", paddingBottom: isMobile ? "48px" : "72px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

          {/* Featured article card */}
          <motion.a
            href="https://www.pembinavalleyonline.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -4 }}
            style={{
              display: "block",
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            }}>
              {/* Left — publication meta */}
              <div style={{
                background: "rgba(1,80,205,0.03)",
                borderRight: !isMobileOrTablet ? "1px solid rgba(0,0,0,0.07)" : undefined,
                borderBottom: isMobileOrTablet ? "1px solid rgba(0,0,0,0.07)" : undefined,
                padding: isMobile ? "32px 24px" : "52px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "32px",
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Publication name */}
                  <span style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 700,
                    fontSize: isMobile ? "20px" : "24px",
                    letterSpacing: "-0.8px",
                    color: "#000000",
                    lineHeight: 1.1,
                  }}>
                    Pembina Valley Online
                  </span>
                  <span style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "rgba(0,0,0,0.45)",
                    lineHeight: 1.5,
                  }}>
                    Saturday, December 20, 2025 · By Kylee Bailey
                  </span>
                </div>

                {/* Read more */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: "-0.2px",
                    color: "#0150cd",
                  }}>
                    Read Full Article
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "rgba(0,0,0,0.35)",
                    marginLeft: "4px",
                  }}>
                    pembinavalleyonline.com
                  </span>
                </div>
              </div>

              {/* Right — article content */}
              <div style={{
                padding: isMobile ? "32px 24px" : "52px 48px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                background: "#ffffff",
              }}>
                {/* Featured badge */}
                <span style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  color: "#0150cd",
                  textTransform: "uppercase",
                  border: "1px solid rgba(1,80,205,0.25)",
                  borderRadius: "100px",
                  padding: "4px 12px",
                }}>
                  Featured Coverage
                </span>

                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "20px" : "26px",
                  lineHeight: 1.15,
                  letterSpacing: "-1px",
                  color: "rgba(0,0,0,0.9)",
                  margin: 0,
                }}>
                  Morden tech class aimed to open new avenues for Pukatawagan visitors
                </p>

                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.6)",
                  margin: 0,
                }}>
                  A technology workshop in Morden opened new avenues for visitors from Pukatawagan. Youth and community members who attended the 3-day AI camp produced working applications and left with new skills and pathways into the digital economy. The program was organized by Sarabloh Technologies, based in Morden, Manitoba.
                </p>
              </div>
            </div>
          </motion.a>

        </div>
      </section>
    </>
  );
}
