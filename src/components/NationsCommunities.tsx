"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const communities = [
  "Pukatawagan / Mathias Colomb Cree Nation",
  "Flin Flon / Creighton",
  "Morden · Winkler · Pembina Valley",
  "Broad Valley",
  "Winnipeg Urban Indigenous",
  "Northern Manitoba Communities",
];

export default function NationsCommunities() {
  const { bp, isMobile } = useBreakpoint();

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

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Centered heading */}
        <FadeUp>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: isMobile ? "14px" : "20px",
            marginBottom: isMobile ? "44px" : "64px",
          }}>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: headingSize,
              lineHeight: 0.96,
              letterSpacing: headingTracking,
              color: "#000000",
              margin: 0,
            }}>
              Communities We{" "}
              <span style={{ fontWeight: 600, color: "#0150cd" }}>Work With</span>
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "18px",
              lineHeight: 1.5,
              letterSpacing: "-0.2px",
              color: "rgba(0,0,0,0.55)",
              margin: 0,
              maxWidth: "480px",
            }}>
              From Northern Manitoba to the Nation. Our relationships are direct, sustained, and community-led.
            </p>
          </div>
        </FadeUp>

        {/* Community pill badges — centered cluster */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isMobile ? "10px" : "12px",
        }}>
          {communities.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.04, borderColor: "#0150cd", color: "#0150cd" }}
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: 1.5,
                letterSpacing: "-0.2px",
                color: "rgba(0,0,0,0.75)",
                border: "1px solid rgba(0,0,0,0.15)",
                borderRadius: "100px",
                padding: isMobile ? "10px 20px" : "12px 28px",
                display: "inline-block",
                cursor: "default",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              {c}
            </motion.span>
          ))}
        </div>

        {/* "We show up and stay" callout */}
        <FadeUp delay={0.3}>
          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 600,
            fontSize: isMobile ? "18px" : "22px",
            lineHeight: 1.3,
            letterSpacing: "-0.8px",
            color: "rgba(0,0,0,0.3)",
            textAlign: "center",
            margin: isMobile ? "36px 0 0" : "52px 0 0",
          }}>
            We show up and stay.
          </p>
        </FadeUp>

      </div>
    </section>
  );
}
