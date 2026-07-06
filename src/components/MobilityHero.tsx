"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import { SplitText, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

export default function MobilityHero() {
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

  const scrollToFeatures = useCallback(() => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatedGradient speed={0.8} />
      </div>

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
          alignItems: "center",
          textAlign: "center",
          gap: isMobile ? "24px" : "32px",
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
            Town Transit
          </span>
        </motion.div>

        {/* Heading */}
        <div style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: headingSize,
          lineHeight: 0.96,
          letterSpacing: headingTracking,
        }}>
          <SplitText delay={0.2} style={{ fontWeight: 400, color: "#fffbf2" }}>
            Your Ride, Right
          </SplitText>
          <SplitText delay={0.38} style={{ fontWeight: 600, color: "#0150cd" }}>
            Where You Need It
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
            margin: "0 auto",
            maxWidth: "540px",
          }}
        >
          Smart Mobility Solutions Tailored to Your Needs. With Town Transit, seamless, safe, and smart transportation is just a tap away. Designed to make every trip efficient and effortless.
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
          <motion.button
            type="button"
            onClick={scrollToFeatures}
            whileHover={isMobile ? undefined : {
              y: -2,
              scale: 1.03,
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            }}
            whileTap={{ y: 0, scale: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
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
              border: "none",
              cursor: "pointer",
              width: isMobile ? "100%" : "auto",
              minHeight: isMobile ? "44px" : undefined,
            }}
          >
            Learn More
          </motion.button>
          <AnimatedButton
            href="#demo"
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
            Get in Touch
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
