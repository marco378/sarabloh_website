"use client";

import { motion } from "framer-motion";
import { SplitText, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

export default function Hero() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

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
    bp === "mobile" ? "80px" :
    bp === "tablet" ? "120px" :
    "220px";

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
        paddingBottom: padBottom,
        paddingTop: padTop,
      }}
    >
      {/* WebGL animated gradient — fills entire section */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatedGradient speed={1.5} />
      </div>

      {/* Content sits on top */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? "40px" : "70px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isMobile ? "18px" : "28px",
            color: "#fffbf2",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: headingSize,
              lineHeight: 1.1,
              letterSpacing: headingTracking,
              textAlign: "center",
            }}
          >
            <SplitText delay={0.2} style={isMobile ? undefined : { whiteSpace: "nowrap" }}>
              Driving the Future of Education
            </SplitText>
            <SplitText delay={0.6} style={isMobile ? undefined : { whiteSpace: "nowrap" }}>
              AI, Blockchain &amp; Mobility
            </SplitText>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: subtitleSize,
              lineHeight: 1.5,
              letterSpacing: "-0.18px",
              color: "#fffbf2",
              margin: 0,
              maxWidth: "600px",
              paddingLeft: isMobile ? "8px" : 0,
              paddingRight: isMobile ? "8px" : 0,
            }}
          >
            Tailored strategies and technology built for organizations ready to lead.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: "14px",
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
              lineHeight: 1.5,
              letterSpacing: "-0.48px",
              padding: "8px 18px",
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            Get Started
          </AnimatedButton>
          <AnimatedButton
            href="/learn-more"
            fullWidthMobile
            style={{
              border: "1px solid #ffffff",
              color: "#ffffff",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: 1.5,
              letterSpacing: "-0.48px",
              padding: "8px 18px",
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            Learn More
          </AnimatedButton>
        </motion.div>
      </div>
      {/* End content wrapper */}
    </section>
  );
}
