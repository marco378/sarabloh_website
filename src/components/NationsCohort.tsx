"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const apps = [
  { name: "The Forge", desc: "Community skills marketplace" },
  { name: "Puk Hub", desc: "Pukatawagan community platform" },
  { name: "LifeHub", desc: "Wellness and life resources platform" },
  { name: "VR Gaming", desc: "Cultural virtual reality experience" },
  { name: "Knowledge Keeper", desc: "Indigenous knowledge archive" },
];

export default function NationsCohort() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "36px" :
    bp === "tablet" ? "48px" :
    "64px";

  const headingTracking =
    bp === "mobile" ? "-1.4px" :
    bp === "tablet" ? "-2px" :
    "-3px";

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  return (
    <section style={{
      background: "rgb(2,10,24)",
      paddingTop: padY,
      paddingBottom: padY,
    }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Header */}
        <FadeUp>
          <div style={{
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            alignItems: isMobileOrTablet ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: isMobile ? "40px" : "60px",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Date badge */}
              <span style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "1.5px",
                color: "rgba(255,251,242,0.5)",
                textTransform: "uppercase",
                border: "1px solid rgba(255,251,242,0.15)",
                borderRadius: "100px",
                padding: "5px 14px",
              }}>
                December 2025 — Morden, MB
              </span>

              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: headingSize,
                lineHeight: 0.96,
                letterSpacing: headingTracking,
                color: "#fffbf2",
                margin: 0,
              }}>
                The Pukatawagan<br />Cohort
              </p>
            </div>

            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.65,
              letterSpacing: "-0.2px",
              color: "rgba(255,251,242,0.6)",
              margin: 0,
              maxWidth: "420px",
            }}>
              A 3-day AI development camp that produced five working applications, designed and built by Indigenous youth from Pukatawagan and Flin Flon with zero prior coding experience.
            </p>
          </div>
        </FadeUp>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: isMobile ? "32px" : "48px" }} />

        {/* Apps built label */}
        <FadeUp delay={0.1}>
          <p style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "2px",
            color: "rgba(255,251,242,0.4)",
            textTransform: "uppercase",
            margin: "0 0 24px",
          }}>
            Applications Built at Camp
          </p>
        </FadeUp>

        {/* Apps grid — 3 + 2 layout on desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isMobileOrTablet ? "1fr 1fr" : "repeat(3, 1fr)",
          gap: isMobile ? "10px" : "12px",
        }}>
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)" }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: isMobile ? "24px 20px" : "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                // Last two cards span differently on desktop to make a 3+2 layout
                ...((!isMobileOrTablet && i === 3) ? { gridColumn: "1 / 2" } : {}),
              }}
            >
              {/* App number */}
              <span style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "1.5px",
                color: "rgba(1,80,205,0.6)",
                textTransform: "uppercase",
              }}>
                App {String(i + 1).padStart(2, "0")}
              </span>

              {/* App name */}
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "20px" : "24px",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                color: "#fffbf2",
                margin: 0,
              }}>
                {app.name}
              </p>

              {/* App desc */}
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.5,
                color: "rgba(255,251,242,0.45)",
                margin: 0,
              }}>
                {app.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
