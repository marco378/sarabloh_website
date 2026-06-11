"use client";

import { motion } from "framer-motion";
import { SplitText, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

export default function NationsHero() {
  const { bp, isMobile } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "30px" :
    bp === "tablet" ? "42px" :
    bp === "laptop" ? "52px" : "64px";

  const headingTracking =
    bp === "mobile" ? "-1.2px" :
    bp === "tablet" ? "-2px" :
    "-3.2px";

  const padTop =
    bp === "mobile" ? "120px" :
    bp === "tablet" ? "140px" :
    "196px";

  const padBottom =
    bp === "mobile" ? "80px" :
    bp === "tablet" ? "110px" :
    "150px";

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "10px";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        paddingLeft: padX,
        paddingRight: padX,
        paddingTop: padTop,
        paddingBottom: padBottom,
        minHeight: "60vh",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatedGradient speed={1.2} />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? "28px" : "36px",
          width: "100%",
        }}
      >
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
            color: "rgba(255,251,242,0.5)",
            textTransform: "uppercase",
            margin: 0,
            textAlign: "center",
          }}
        >
          Sarabloh Technologies — Community Initiative
        </motion.p>

        {/* Heading */}
        <div
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: headingSize,
            lineHeight: 1.05,
            letterSpacing: headingTracking,
            textAlign: "center",
            color: "#fffbf2",
          }}
        >
          <SplitText delay={0.2} style={{ fontWeight: 600, ...(isMobile ? {} : { whiteSpace: "nowrap" }) }}>
            Nations Forward
          </SplitText>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: isMobile ? "15px" : "18px",
            lineHeight: 1.55,
            letterSpacing: "-0.18px",
            color: "rgba(255,251,242,0.8)",
            margin: 0,
            maxWidth: "620px",
            textAlign: "center",
            paddingLeft: isMobile ? "8px" : 0,
            paddingRight: isMobile ? "8px" : 0,
          }}
        >
          Indigenous-led technology education, economic sovereignty, and digital leadership. Built from the ground up, in communities, with communities, for communities.
        </motion.p>

        {/* Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "12px",
            width: isMobile ? "100%" : "auto",
            paddingLeft: isMobile ? "8px" : 0,
            paddingRight: isMobile ? "8px" : 0,
          }}
        >
          <AnimatedButton
            href="/get-started"
            fullWidthMobile
            style={{
              background: "#fffbf2",
              color: "#000000",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              letterSpacing: "-0.48px",
              padding: "12px 28px",
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            Get Involved
          </AnimatedButton>
          <AnimatedButton
            href="#story"
            fullWidthMobile
            style={{
              border: "1px solid rgba(255,251,242,0.35)",
              color: "#fffbf2",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              letterSpacing: "-0.48px",
              padding: "12px 28px",
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            Our Story
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
