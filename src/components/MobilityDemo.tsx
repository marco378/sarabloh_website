"use client";

import { motion } from "framer-motion";
import { FadeUp, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function MobilityDemo() {
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
    <section id="demo" style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            background: "rgb(2,10,24)",
            borderRadius: isMobile ? "16px" : "20px",
            padding: isMobile ? "52px 28px" : isMobileOrTablet ? "72px 52px" : "88px 88px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: isMobile ? "20px" : "28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative glow */}
          <div style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(1,80,205,0.2) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          {/* Eyebrow */}
          <span style={{
            position: "relative",
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "2px",
            color: "rgba(1,80,205,0.6)",
            textTransform: "uppercase",
          }}>
            See It in Action
          </span>

          {/* Heading */}
          <p style={{
            position: "relative",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 600,
            fontSize: bp === "mobile" ? "30px" : bp === "tablet" ? "42px" : "52px",
            lineHeight: 1.05,
            letterSpacing: bp === "mobile" ? "-1.2px" : "-2.6px",
            color: "#fffbf2",
            margin: 0,
            maxWidth: "600px",
          }}>
            Connect Now for a{" "}
            <span style={{ color: "#0150cd" }}>Personalized Demo</span>
          </p>

          {/* Body */}
          <p style={{
            position: "relative",
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: isMobile ? "15px" : "17px",
            lineHeight: 1.65,
            color: "rgba(255,251,242,0.55)",
            margin: 0,
            maxWidth: "480px",
          }}>
            Want to experience Town Transit&apos;s capabilities firsthand? Schedule a meeting to explore how this solution can work for you.
          </p>

          {/* CTA */}
          <motion.div
            style={{ position: "relative", marginTop: "8px" }}
          >
            <AnimatedButton
              href="mailto:info@sarabloh.com"
              style={{
                background: "#fffbf2",
                color: "#000000",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                letterSpacing: "-0.4px",
                padding: "14px 40px",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              Book a Demo
            </AnimatedButton>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
