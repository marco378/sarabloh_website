"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const parts = [
  {
    part: "Part One",
    subtitle: "Community Foundation",
    title: "The Community Governs",
    desc: "A non-profit foundation led by the First Nation acts as the governing body. It controls the rules of the zone, owns the land and intellectual property, and makes decisions based on what is best for the community, not outside shareholders.",
    bullets: [
      "Indigenous leadership controls all major decisions",
      "Cultural values are built into the governance structure",
      "Community members vote on key priorities and spending",
    ],
    accent: "rgba(255,251,242,0.08)",
  },
  {
    part: "Part Two",
    subtitle: "Technology & Operations",
    title: "The Business Engine",
    desc: "A for-profit operational arm attracts businesses, manages technology projects, and runs day-to-day operations. Profits flow back to the foundation, meaning back to the community. The business does well so the community does well.",
    bullets: [
      "Attracts outside investment and technology companies",
      "Partners with universities, incubators, and global networks",
      "All revenue shared back to the community foundation",
    ],
    accent: "rgba(1,80,205,0.12)",
  },
];

export default function EZModel() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  return (
    <section id="model" style={{ background: "rgb(2,10,24)", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Header */}
        <FadeUp>
          <div style={{ marginBottom: isMobile ? "40px" : "64px" }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "2px",
              color: "rgba(1,80,205,0.6)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "14px",
            }}>
              The Model
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: bp === "mobile" ? "36px" : bp === "tablet" ? "48px" : "64px",
              lineHeight: 0.96,
              letterSpacing: bp === "mobile" ? "-1.4px" : "-3.2px",
              color: "#fffbf2",
              margin: 0,
            }}>
              Two parts.{" "}
              <span style={{ color: "rgba(255,251,242,0.3)" }}>One purpose.</span>
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.6,
              color: "rgba(255,251,242,0.45)",
              margin: "16px 0 0",
              maxWidth: "440px",
            }}>
              The Indigenous Economic Zone model has two connected pieces that work together.
            </p>
          </div>
        </FadeUp>

        {/* Two cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "16px" : "20px",
        }}>
          {parts.map((part, i) => (
            <motion.div
              key={part.part}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                background: part.accent,
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: isMobile ? "32px 24px" : "52px 48px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Part badge */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  color: "rgba(1,80,205,0.7)",
                  textTransform: "uppercase",
                }}>
                  {part.part}
                </span>
                <span style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1px",
                  color: "rgba(255,251,242,0.3)",
                  textTransform: "uppercase",
                }}>
                  — {part.subtitle}
                </span>
              </div>

              {/* Title */}
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "24px" : "32px",
                lineHeight: 1.1,
                letterSpacing: isMobile ? "-1px" : "-1.5px",
                color: "#fffbf2",
                margin: 0,
              }}>
                {part.title}
              </p>

              {/* Description */}
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.7,
                color: "rgba(255,251,242,0.55)",
                margin: 0,
              }}>
                {part.desc}
              </p>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

              {/* Bullet list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {part.bullets.map((bullet, j) => (
                  <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#0150cd",
                      flexShrink: 0,
                      marginTop: "7px",
                    }} />
                    <p style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "rgba(255,251,242,0.6)",
                      margin: 0,
                    }}>
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
