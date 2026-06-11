"use client";

import { motion } from "framer-motion";
import { AnimatedButton, SplitText } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

export default function ComingSoon({
  title,
  subtitle,
  ctaHref = "/",
  ctaLabel = "Back to Home",
}: {
  title: string;
  subtitle: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const { bp, isMobile } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "34px" :
    bp === "tablet" ? "48px" :
    "64px";

  const headingTracking =
    bp === "mobile" ? "-1.2px" :
    bp === "tablet" ? "-2px" :
    "-3px";

  const padTop =
    bp === "mobile" ? "120px" :
    bp === "tablet" ? "140px" :
    "180px";

  const padBottom =
    bp === "mobile" ? "72px" :
    bp === "tablet" ? "96px" :
    "132px";

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
        paddingLeft: padX,
        paddingRight: padX,
        paddingTop: padTop,
        paddingBottom: padBottom,
        minHeight: "72vh",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatedGradient speed={1} />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: isMobile ? "24px" : "32px",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "2px",
            color: "rgba(255,251,242,0.6)",
            textTransform: "uppercase",
          }}
        >
          Coming Soon
        </motion.span>

        <div
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 600,
            fontSize: headingSize,
            lineHeight: 1.02,
            letterSpacing: headingTracking,
            color: "#fffbf2",
          }}
        >
          <SplitText delay={0.2} style={isMobile ? undefined : { whiteSpace: "nowrap" }}>
            {title}
          </SplitText>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: isMobile ? "15px" : "18px",
            lineHeight: 1.6,
            letterSpacing: "-0.18px",
            color: "rgba(255,251,242,0.8)",
            margin: 0,
            maxWidth: "640px",
          }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatedButton
            href={ctaHref}
            fullWidthMobile
            style={{
              background: "#fffbf2",
              color: "#000000",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: 1.5,
              letterSpacing: "-0.48px",
              padding: "10px 20px",
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            {ctaLabel}
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
