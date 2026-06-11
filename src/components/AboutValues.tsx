"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const values = [
  {
    num: "01",
    title: "Innovation",
    desc: "We embrace creativity and strive to push the boundaries of technology.",
    detail: "Every problem is an opportunity to build something better. We don't copy — we invent.",
  },
  {
    num: "02",
    title: "Integrity",
    desc: "We uphold the highest standards of ethics in all of our work.",
    detail: "Data sovereignty, community ownership, and honest partnerships aren't optional. They're the foundation.",
  },
  {
    num: "03",
    title: "Collaboration",
    desc: "We believe in the power of teamwork and open communication.",
    detail: "The best solutions come from working with communities, not just for them.",
  },
  {
    num: "04",
    title: "Excellence",
    desc: "We are dedicated to delivering exceptional service and results.",
    detail: "Good enough isn't good enough. We hold ourselves to the standard our communities deserve.",
  },
];

export default function AboutValues() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();
  const [hovered, setHovered] = useState<number | null>(null);

  const headingSize =
    bp === "mobile" ? "36px" :
    bp === "tablet" ? "48px" :
    "70px";

  const headingTracking =
    bp === "mobile" ? "-1.4px" :
    bp === "tablet" ? "-2px" :
    "-3.5px";

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  const numSize =
    bp === "mobile" ? "48px" :
    bp === "tablet" ? "60px" :
    "72px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Section heading — centered */}
        <FadeUp>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: isMobile ? "14px" : "18px",
            marginBottom: isMobile ? "40px" : "60px",
          }}>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: headingSize,
              lineHeight: 1.05,
              letterSpacing: headingTracking,
              color: "#000000",
              margin: 0,
              whiteSpace: "nowrap",
            }}>
              What we{" "}
              <span style={{ fontWeight: 600, color: "#0150cd" }}>stand for.</span>
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "18px",
              lineHeight: 1.5,
              letterSpacing: "-0.2px",
              color: "rgba(0,0,0,0.55)",
              margin: 0,
              whiteSpace: "nowrap",
            }}>
              The principles that guide every product, decision, and partnership.
            </p>
          </div>
        </FadeUp>

        {/* Value rows — stacked, full-width, divided */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Top rule */}
          <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />

          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              onHoverStart={() => !isMobile && setHovered(i)}
              onHoverEnd={() => !isMobile && setHovered(null)}
              style={{ position: "relative" }}
            >
              {/* Hover background fill */}
              <motion.div
                animate={{ opacity: !isMobile && hovered === i ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(1,80,205,0.03)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : isMobileOrTablet
                    ? "56px 1fr"
                    : "120px 1fr 1fr",
                  gap: isMobile ? "12px" : isMobileOrTablet ? "24px" : "40px",
                  alignItems: "center",
                  padding: isMobile ? "28px 0" : "36px 0",
                  paddingLeft: "0",
                  paddingRight: isMobile ? "0" : "16px",
                }}
              >
                {/* Decorative number */}
                <span style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 700,
                  fontSize: isMobile ? "32px" : numSize,
                  lineHeight: 1,
                  letterSpacing: "-3px",
                  color: hovered === i ? "#0150cd" : "rgba(1,80,205,0.18)",
                  transition: "color 0.25s ease",
                  display: "block",
                }}>
                  {v.num}
                </span>

                {/* Value title */}
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "22px" : isMobileOrTablet ? "26px" : "32px",
                  lineHeight: 1.05,
                  letterSpacing: isMobile ? "-0.8px" : "-1.5px",
                  color: hovered === i ? "#0150cd" : "rgba(0,0,0,0.85)",
                  margin: 0,
                  transition: "color 0.25s ease",
                }}>
                  {v.title}
                </p>

                {/* Description — only on desktop as right column */}
                {!isMobileOrTablet && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <p style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: 1.55,
                      color: "rgba(0,0,0,0.7)",
                      margin: 0,
                    }}>
                      {v.desc}
                    </p>
                    <motion.p
                      animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 4 }}
                      transition={{ duration: 0.22 }}
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: 1.55,
                        color: "#0150cd",
                        margin: 0,
                      }}
                    >
                      {v.detail}
                    </motion.p>
                  </div>
                )}

                {/* Mobile: desc inline */}
                {isMobileOrTablet && (
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "rgba(0,0,0,0.6)",
                    margin: 0,
                    gridColumn: isMobileOrTablet && !isMobile ? "2" : "1",
                  }}>
                    {v.desc}
                  </p>
                )}

                {/* Chevron on desktop */}
                {!isMobileOrTablet && (
                  <motion.div
                    animate={{ x: hovered === i ? 0 : -4, opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ position: "absolute", right: "0", display: "flex", alignItems: "center" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Bottom rule */}
              <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
