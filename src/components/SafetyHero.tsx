"use client";

import { motion } from "framer-motion";
import { SplitText } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

const pillars = [
  {
    label: "The Company",
    title: "Indigenous-Owned",
    desc: "We are not an outside corporation coming in. We understand what these communities carry.",
  },
  {
    label: "Your Data",
    title: "Stays With Your Nation",
    desc: "Every piece of information belongs to your Nation. No outside access. No exceptions. Ever.",
  },
  {
    label: "The Platform",
    title: "Your Nation Owns It",
    desc: "Built for your community. Belongs to your community. Your leadership is in control, always.",
  },
];

export default function SafetyHero() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "38px" :
    bp === "tablet" ? "54px" :
    bp === "laptop" ? "68px" : "80px";

  const headingTracking =
    bp === "mobile" ? "-1.6px" :
    bp === "tablet" ? "-2.4px" :
    "-4px";

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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* WebGL background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatedGradient speed={0.9} />
      </div>

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
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
          paddingBottom: isMobile ? "60px" : "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            alignSelf: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Red dot */}
          <span style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#0150cd",
            display: "inline-block",
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "2px",
            color: "rgba(255,251,242,0.5)",
            textTransform: "uppercase",
          }}>
            Nation-Owned Technology
          </span>
        </motion.div>

        {/* Heading */}
        <div style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: headingSize,
          lineHeight: 0.96,
          letterSpacing: headingTracking,
          textAlign: "center",
        }}>
          <SplitText delay={0.2} style={{ fontWeight: 400, color: "#fffbf2", display: "block" }}>
            Community Safety
          </SplitText>
          <SplitText delay={0.38} style={{ fontWeight: 600, color: "#0150cd", display: "block" }}>
            for First Nations
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
            lineHeight: 1.6,
            letterSpacing: "-0.2px",
            color: "rgba(255,251,242,0.7)",
            margin: "0 auto",
            maxWidth: "520px",
            textAlign: "center",
          }}
        >
          Nation-owned AI technology built around your community&apos;s real challenges, by an Indigenous-owned company that understands what your community carries.
        </motion.p>
      </div>

      {/* Trust pillars strip — bottom of hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(2,10,24,0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: padX,
          paddingRight: padX,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
        }}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              style={{
                padding: isMobile ? "28px 0" : "36px 0",
                borderRight: !isMobile && i < pillars.length - 1 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                borderTop: isMobile && i > 0 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                paddingRight: !isMobile && i < pillars.length - 1 ? "40px" : undefined,
                paddingLeft: !isMobile && i > 0 ? "40px" : undefined,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "10px",
                letterSpacing: "2px",
                color: "rgba(1,80,205,0.7)",
                textTransform: "uppercase",
              }}>
                {pillar.label}
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "18px" : "20px",
                lineHeight: 1.15,
                letterSpacing: "-0.8px",
                color: "#fffbf2",
                margin: 0,
              }}>
                {pillar.title}
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: 1.6,
                color: "rgba(255,251,242,0.45)",
                margin: 0,
              }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
