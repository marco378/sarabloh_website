"use client";

import { motion } from "framer-motion";
import { SplitText, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

export default function EZHero() {
  const { bp, isMobile } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "40px" :
    bp === "tablet" ? "58px" :
    bp === "laptop" ? "72px" : "88px";

  const headingTracking =
    bp === "mobile" ? "-1.8px" :
    bp === "tablet" ? "-2.8px" :
    "-4.5px";

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatedGradient speed={0.8} />
      </div>

      {/* Diagonal rule */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "rgba(255,255,255,0.07)",
        zIndex: 1,
      }} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
          paddingLeft: padX,
          paddingRight: padX,
          paddingTop: bp === "mobile" ? "130px" : bp === "tablet" ? "150px" : "200px",
          paddingBottom: bp === "mobile" ? "80px" : "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: isMobile ? "28px" : "36px",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid rgba(255,251,242,0.12)",
            borderRadius: "100px",
            padding: "6px 16px 6px 10px",
          }}
        >
          <span style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#0150cd",
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "1.5px",
            color: "rgba(255,251,242,0.55)",
            textTransform: "uppercase",
          }}>
            Canada — First Nations Opportunity
          </span>
        </motion.div>

        {/* Heading */}
        <div style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: headingSize,
          lineHeight: 0.95,
          letterSpacing: headingTracking,
          textAlign: "left",
          alignSelf: "flex-start",
          width: "100%",
        }}>
          <SplitText delay={0.2} style={{ fontWeight: 400, color: "rgba(255,251,242,0.55)", justifyContent: "flex-start" }}>
            Indigenous-Led
          </SplitText>
          <SplitText delay={0.35} style={{ fontWeight: 600, color: "#fffbf2",   justifyContent: "flex-start" }}>
            Economic Zones
          </SplitText>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: isMobile ? "15px" : "18px",
            lineHeight: 1.65,
            letterSpacing: "-0.2px",
            color: "rgba(255,251,242,0.65)",
            margin: 0,
            maxWidth: "540px",
          }}
        >
          A new model that keeps money, jobs, and opportunity inside Indigenous communities. Not a handout. An economic structure designed so communities benefit directly from the value they create.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "12px",
            width: isMobile ? "100%" : "auto",
          }}
        >
          <AnimatedButton
            href="#benefits"
            fullWidthMobile
            style={{
              background: "#0150cd",
              color: "#fffbf2",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              letterSpacing: "-0.4px",
              padding: "13px 32px",
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            Learn More
          </AnimatedButton>
          <AnimatedButton
            href="#model"
            fullWidthMobile
            style={{
              border: "1px solid rgba(255,251,242,0.3)",
              color: "#fffbf2",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              letterSpacing: "-0.4px",
              padding: "13px 32px",
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            How It Works
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
