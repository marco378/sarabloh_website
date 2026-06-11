"use client";

import { motion } from "framer-motion";
import { SplitText, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

const pills = ["6 weeks training", "8 weeks paid work", "Laptop included"];

export default function EducationHero() {
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
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatedGradient speed={1.5} />
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
          Nations Forward · Indigenous Youth Ages 15–21 · Manitoba
        </motion.p>

        {/* Heading */}
        <div
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: headingSize,
            lineHeight: 1.08,
            letterSpacing: headingTracking,
            textAlign: "center",
            color: "#fffbf2",
          }}
        >
          <SplitText delay={0.25} style={isMobile ? undefined : { whiteSpace: "nowrap" }}>
            Digital Skills &amp;
          </SplitText>
          <SplitText delay={0.6} style={{ fontWeight: 600, ...(isMobile ? {} : { whiteSpace: "nowrap" }) }}>
            Paid Work Experience.
          </SplitText>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: isMobile ? "15px" : "18px",
            lineHeight: 1.5,
            letterSpacing: "-0.18px",
            color: "rgba(255,251,242,0.8)",
            margin: 0,
            maxWidth: "580px",
            textAlign: "center",
            paddingLeft: isMobile ? "8px" : 0,
            paddingRight: isMobile ? "8px" : 0,
          }}
        >
          A real training program with real pay at the end. Open to Indigenous youth ages 15–21 across Manitoba.
        </motion.p>

        {/* Apply Now button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ width: isMobile ? "100%" : "auto", paddingLeft: isMobile ? "8px" : 0, paddingRight: isMobile ? "8px" : 0 }}
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
              padding: "12px 32px",
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            Apply Now
          </AnimatedButton>
        </motion.div>

        {/* Stat pills — scannable facts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.55, ease: "easeOut" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            paddingLeft: isMobile ? "8px" : 0,
            paddingRight: isMobile ? "8px" : 0,
          }}
        >
          {pills.map((label) => (
            <span
              key={label}
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "-0.1px",
                color: "rgba(255,251,242,0.75)",
                border: "1px solid rgba(255,251,242,0.2)",
                borderRadius: "100px",
                padding: "6px 18px",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
