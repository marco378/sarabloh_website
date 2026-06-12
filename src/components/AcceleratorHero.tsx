"use client";

import { motion } from "framer-motion";
import { SplitText, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import AnimatedGradient from "./AnimatedGradient";

const stats = [
  { value: "6", label: "Weeks of live training" },
  { value: "16–30", label: "Age range, all regions" },
  { value: "100%", label: "Real tools. Real builds." },
];

export default function AcceleratorHero() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "38px" :
    bp === "tablet" ? "54px" :
    bp === "laptop" ? "68px" : "82px";

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
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatedGradient speed={0.7} />
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
          paddingBottom: isMobile ? "60px" : "80px",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "28px" : "36px",
        }}
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            gap: "10px",
            border: "1px solid rgba(255,251,242,0.12)",
            borderRadius: "100px",
            padding: "6px 16px 6px 10px",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0150cd", flexShrink: 0 }} />
          <span style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 600, fontSize: "12px", letterSpacing: "1.5px",
            color: "rgba(255,251,242,0.55)", textTransform: "uppercase",
          }}>
            First Nations AI Workforce Accelerator
          </span>
        </motion.div>

        {/* Heading */}
        <div style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: headingSize,
          lineHeight: 0.96,
          letterSpacing: headingTracking,
        }}>
          <SplitText delay={0.2} style={{ fontWeight: 400, color: "#fffbf2",  justifyContent: "flex-start" }}>
            No background needed.
          </SplitText>
          <SplitText delay={0.38} style={{ fontWeight: 600, color: "#0150cd",  justifyContent: "flex-start" }}>
            Just you and a laptop.
          </SplitText>
        </div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.95 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "580px",
          }}
        >
          <p style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400, fontSize: isMobile ? "15px" : "18px",
            lineHeight: 1.65, letterSpacing: "-0.2px",
            color: "rgba(255,251,242,0.65)", margin: 0,
          }}>
            My name is Brown Eagle, from Ochapowace Cree Nation. I built my business from a laptop. No tech degree. No connections. No roadmap. Just curiosity and the willingness to figure it out.
          </p>
          <p style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400, fontSize: isMobile ? "15px" : "16px",
            lineHeight: 1.65,
            color: "rgba(255,251,242,0.45)", margin: 0,
          }}>
            Everything I know goes straight into this Accelerator. Not theory. My actual stack. My actual knowledge. What actually makes money.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "12px",
            width: isMobile ? "100%" : "auto",
          }}
        >
          <AnimatedButton
            href="#pricing"
            fullWidthMobile
            style={{
              background: "#0150cd", color: "#fffbf2",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600, fontSize: "16px", letterSpacing: "-0.4px",
              padding: "13px 32px", borderRadius: "4px",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            Join the Waitlist
          </AnimatedButton>
          <AnimatedButton
            href="#curriculum"
            fullWidthMobile
            style={{
              border: "1px solid rgba(255,251,242,0.3)", color: "#fffbf2",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600, fontSize: "16px", letterSpacing: "-0.4px",
              padding: "13px 32px", borderRadius: "4px",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            See the Curriculum
          </AnimatedButton>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          style={{
            display: "flex",
            gap: isMobile ? "24px" : "56px",
            flexWrap: "wrap",
            marginTop: "16px",
            paddingTop: isMobile ? "28px" : "36px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? "36px" : "48px",
                lineHeight: 1, letterSpacing: "-2px",
                color: "#0150cd",
              }}>
                {s.value}
              </span>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400, fontSize: "13px",
                color: "rgba(255,251,242,0.4)",
              }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
