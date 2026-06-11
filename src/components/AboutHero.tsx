"use client";

import { motion } from "framer-motion";
import { SplitText } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

export default function AboutHero() {
  const { bp, isMobile } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "30px" :
    bp === "tablet" ? "42px" :
    bp === "laptop" ? "52px" : "64px";

  const headingTracking =
    bp === "mobile" ? "-1.2px" :
    bp === "tablet" ? "-2px" :
    "-3.2px";

  const subtitleSize = isMobile ? "15px" : "18px";

  const padTop =
    bp === "mobile" ? "120px" :
    bp === "tablet" ? "140px" :
    "196px";

  const padBottom =
    bp === "mobile" ? "72px" :
    bp === "tablet" ? "100px" :
    "140px";

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
      {/* WebGL animated gradient — same as homepage hero */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatedGradient speed={1.5} />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? "28px" : "40px",
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
            lineHeight: 1.5,
            letterSpacing: "2px",
            color: "rgba(255,251,242,0.5)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          About Sarabloh Technologies
        </motion.p>

        {/* Heading — same SplitText animation as homepage */}
        <div
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 600,
            fontSize: headingSize,
            lineHeight: 1.1,
            letterSpacing: headingTracking,
            textAlign: "center",
            color: "#fffbf2",
          }}
        >
          <SplitText delay={0.25} style={isMobile ? undefined : { whiteSpace: "nowrap" }}>
            Built in Manitoba.
          </SplitText>
          <SplitText delay={0.65} style={isMobile ? undefined : { whiteSpace: "nowrap" }}>
            Built for Everyone.
          </SplitText>
        </div>

        {/* Subtext — fade-slide-up, same as homepage hero subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: subtitleSize,
            lineHeight: 1.5,
            letterSpacing: "-0.18px",
            color: "rgba(255,251,242,0.8)",
            margin: 0,
            maxWidth: "640px",
            textAlign: "center",
            paddingLeft: isMobile ? "8px" : 0,
            paddingRight: isMobile ? "8px" : 0,
          }}
        >
          Sarabloh Technologies is a pioneering force dedicated to harnessing emerging technologies to address real-world challenges for communities, businesses, and individuals across Canada.
        </motion.p>
      </div>
    </section>
  );
}
