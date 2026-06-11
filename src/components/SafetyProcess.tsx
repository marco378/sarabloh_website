"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const steps = [
  {
    num: "1",
    title: "We Listen",
    desc: "A conversation first. You tell us what your community is dealing with. We build around that, not a template.",
  },
  {
    num: "2",
    title: "We Build",
    desc: "A system designed for your Nation's specific needs, values, and way of working. Co-designed with leadership.",
  },
  {
    num: "3",
    title: "You Own It",
    desc: "The platform and all data belong to your Nation from day one. Full control. Always. No lock-in.",
  },
  {
    num: "4",
    title: "We Support",
    desc: "We stay with you. As your community grows, the system grows with it. Not just a launch.",
  },
];

export default function SafetyProcess() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Heading */}
        <FadeUp>
          <div style={{ marginBottom: isMobile ? "40px" : "64px" }}>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: bp === "mobile" ? "36px" : bp === "tablet" ? "48px" : "64px",
              lineHeight: 0.96,
              letterSpacing: bp === "mobile" ? "-1.4px" : "-3.2px",
              color: "#000000",
              margin: 0,
            }}>
              How It Works
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.5,
              color: "rgba(0,0,0,0.45)",
              margin: "12px 0 0",
              maxWidth: "400px",
            }}>
              Four steps. Simple as that.
            </p>
          </div>
        </FadeUp>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        {!isMobile ? (
          <div style={{ position: "relative" }}>
            {/* Connector line */}
            <div style={{
              position: "absolute",
              top: "28px",
              left: "0",
              right: "0",
              height: "1px",
              background: "rgba(1,80,205,0.12)",
              zIndex: 0,
            }} />

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
              position: "relative",
              zIndex: 1,
            }}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    paddingRight: i < steps.length - 1 ? "40px" : "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {/* Circle with number */}
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#0150cd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#fffbf2",
                      lineHeight: 1,
                    }}>
                      {step.num}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: 1.1,
                      letterSpacing: "-0.9px",
                      color: "rgba(0,0,0,0.88)",
                      margin: 0,
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "rgba(0,0,0,0.55)",
                      margin: 0,
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Mobile: vertical with connecting line */
          <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  display: "flex",
                  gap: "20px",
                  paddingBottom: i < steps.length - 1 ? "36px" : "0",
                  position: "relative",
                }}
              >
                {/* Circle + connector */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#0150cd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    zIndex: 1,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#fffbf2",
                    }}>
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ flex: 1, width: "1px", background: "rgba(1,80,205,0.15)", marginTop: "6px" }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingTop: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.8px",
                    color: "rgba(0,0,0,0.88)",
                    margin: 0,
                  }}>
                    {step.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "rgba(0,0,0,0.55)",
                    margin: 0,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
