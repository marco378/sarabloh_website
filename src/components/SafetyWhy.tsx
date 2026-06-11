"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const reasons = [
  {
    title: "Indigenous-owned company",
    desc: "We are not an outside vendor. We understand the community because we are part of it.",
  },
  {
    title: "Your Nation owns the platform",
    desc: "Not a subscription to someone else's product. It belongs to your community from day one.",
  },
  {
    title: "Your data never leaves your hands",
    desc: "Full data sovereignty. No outside access. No exceptions. Ever. Not even to us.",
  },
  {
    title: "Built for your specific community",
    desc: "Every Nation's challenges are different. We build for the community in front of us, not a generic template.",
  },
  {
    title: "Already active with First Nations",
    desc: "Currently working with communities across Northern Manitoba. Real relationships. Real deployments.",
  },
  {
    title: "Plain and practical",
    desc: "No complicated technology talk. Real tools your peace officers and leadership can use from day one.",
  },
];

export default function SafetyWhy() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();
  const [hovered, setHovered] = useState<number | null>(null);

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  return (
    <section style={{ background: "#f7f8fa", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Heading block */}
        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? "20px" : "80px",
            alignItems: "end",
            marginBottom: isMobile ? "44px" : "64px",
          }}>
            <div>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#0150cd",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "14px",
              }}>
                Why Sarabloh Technologies
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: bp === "mobile" ? "36px" : bp === "tablet" ? "46px" : "60px",
                lineHeight: 0.96,
                letterSpacing: bp === "mobile" ? "-1.4px" : "-3px",
                color: "#000000",
                margin: 0,
              }}>
                Six reasons{" "}
                <span style={{ fontWeight: 600, color: "#0150cd" }}>to trust us.</span>
              </p>
            </div>

            {!isMobileOrTablet && (
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.65,
                color: "rgba(0,0,0,0.5)",
                margin: 0,
              }}>
                Every decision we make — from who owns the data to how we show up in communities — is guided by a single principle: your Nation comes first.
              </p>
            )}
          </div>
        </FadeUp>

        {/* Reasons — full width rows */}
        <div>
          <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              onHoverStart={() => !isMobile && setHovered(i)}
              onHoverEnd={() => !isMobile && setHovered(null)}
              style={{ position: "relative", cursor: "default" }}
            >
              {/* Hover tint */}
              <motion.div
                animate={{ opacity: !isMobile && hovered === i ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(1,80,205,0.04)",
                  pointerEvents: "none",
                  borderRadius: "4px",
                }}
              />

              <div style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isMobileOrTablet
                  ? "1fr"
                  : "52px 1fr 1fr",
                gap: isMobile ? "6px" : isMobileOrTablet ? "8px" : "40px",
                alignItems: "center",
                padding: isMobile ? "24px 0" : "32px 16px 32px 0",
              }}>
                {/* Index number — desktop only */}
                {!isMobileOrTablet && (
                  <span style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.5px",
                    color: hovered === i ? "#0150cd" : "rgba(1,80,205,0.25)",
                    transition: "color 0.25s ease",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}

                {/* Title */}
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "18px" : isMobileOrTablet ? "20px" : "22px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.8px",
                  color: hovered === i ? "#0150cd" : "rgba(0,0,0,0.88)",
                  margin: 0,
                  transition: "color 0.25s ease",
                }}>
                  {r.title}
                </p>

                {/* Desc */}
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "14px" : "15px",
                  lineHeight: 1.65,
                  color: "rgba(0,0,0,0.55)",
                  margin: 0,
                }}>
                  {r.desc}
                </p>

                {/* Chevron on hover — desktop */}
                {!isMobileOrTablet && (
                  <motion.div
                    animate={{ x: hovered === i ? 0 : -6, opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ position: "absolute", right: 0 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </motion.div>
                )}
              </div>

              <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
