"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const features = [
  {
    keyword: "LIVE",
    title: "Real-Time Community Monitoring",
    desc: "Your peace officers and safety patrol see what is happening across the community as it happens, not the next day. Incidents logged instantly. Patterns visible immediately.",
  },
  {
    keyword: "TRACK",
    title: "Suspect Tracking and Profiles",
    desc: "Repeat offenders tracked and documented. Your safety patrol has a clear, searchable record covering gang activity, repeated offences, and drug-related incidents to act on.",
  },
  {
    keyword: "LOG",
    title: "Incident Reporting and Logging",
    desc: "Every incident reported, logged, and stored properly. Your peace officers communicate faster and nothing is missed. Every report is timestamped, attributed, and searchable.",
  },
  {
    keyword: "VIEW",
    title: "Community Safety Dashboard",
    desc: "Leadership and your safety team see a clear, real-time overview. Informed decisions. Visible action in the community. No tech expertise needed to understand or use it.",
  },
];

export default function SafetyFeatures() {
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
            gap: "20px",
            marginBottom: isMobile ? "44px" : "64px",
          }}>
            <div>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "rgba(1,80,205,0.6)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}>
                What We Build
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
                Real tools.{" "}
                <span style={{ color: "rgba(255,251,242,0.3)" }}>Real-time visibility.</span>
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Feature cards — 2x2 on desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                background: "rgba(255,255,255,0.02)",
                padding: isMobile ? "32px 24px" : "48px 44px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Watermark keyword */}
              <span style={{
                position: "absolute",
                bottom: "-8px",
                right: "20px",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 800,
                fontSize: "72px",
                letterSpacing: "-4px",
                color: "rgba(1,80,205,0.07)",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}>
                {f.keyword}
              </span>

              {/* Number */}
              <span style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "rgba(1,80,205,0.55)",
                textTransform: "uppercase",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "20px" : "24px",
                lineHeight: 1.15,
                letterSpacing: "-1px",
                color: "#fffbf2",
                margin: 0,
              }}>
                {f.title}
              </p>

              {/* Desc */}
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(255,251,242,0.5)",
                margin: 0,
              }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
