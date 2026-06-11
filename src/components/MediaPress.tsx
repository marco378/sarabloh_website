"use client";

import { motion } from "framer-motion";
import { FadeUp, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function MediaPress() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "72px" :
    bp === "tablet" ? "88px" :
    "112px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        <div style={{
          background: "rgb(2,10,24)",
          borderRadius: isMobile ? "16px" : "20px",
          padding: isMobile ? "48px 28px" : isMobileOrTablet ? "64px 48px" : "80px 80px",
          display: "flex",
          flexDirection: isMobileOrTablet ? "column" : "row",
          alignItems: isMobileOrTablet ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? "36px" : "60px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative blue glow */}
          <div style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(1,80,205,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <FadeUp>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative", zIndex: 1 }}>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "rgba(1,80,205,0.65)",
                textTransform: "uppercase",
              }}>
                Press & Media
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: bp === "mobile" ? "28px" : bp === "tablet" ? "38px" : "48px",
                lineHeight: 1.05,
                letterSpacing: bp === "mobile" ? "-1.2px" : "-2.4px",
                color: "#fffbf2",
                margin: 0,
              }}>
                Interested in covering{" "}
                <span style={{ color: "rgba(255,251,242,0.35)" }}>Sarabloh or Nations Forward?</span>
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "15px" : "17px",
                lineHeight: 1.65,
                color: "rgba(255,251,242,0.5)",
                margin: 0,
                maxWidth: "460px",
              }}>
                We are open to interviews, features, and collaboration with journalists and media outlets.
              </p>
            </div>
          </FadeUp>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: "relative", zIndex: 1, flexShrink: 0 }}
          >
            <AnimatedButton
              href="mailto:media@sarabloh.com"
              style={{
                background: "#fffbf2",
                color: "#000000",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                letterSpacing: "-0.4px",
                padding: "14px 36px",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              Contact Media Team
            </AnimatedButton>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
