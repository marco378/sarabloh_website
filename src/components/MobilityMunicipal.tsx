"use client";

import { motion } from "framer-motion";
import { FadeUp, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const benefits = [
  {
    title: "Cost-Efficiency for Municipalities",
    desc: "Reduce infrastructure costs by leveraging existing resources and providing an affordable transportation alternative.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Improved Accessibility",
    desc: "Town residents, including seniors or individuals with limited mobility, can benefit from a flexible service that adapts to their needs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Enhanced Traffic Management",
    desc: "With real-time tracking and route optimization, municipalities can better manage traffic flow and reduce congestion.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function MobilityMunicipal() {
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
    <section style={{ background: "#f7f9fc", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.5fr",
          gap: isMobile ? "44px" : isMobileOrTablet ? "52px" : "100px",
          alignItems: "start",
        }}>

          {/* Left — sticky heading + CTA */}
          <FadeUp>
            <div style={{
              position: isMobileOrTablet ? "relative" : "sticky",
              top: isMobileOrTablet ? undefined : "120px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#0150cd",
                textTransform: "uppercase",
              }}>
                Municipal Solutions
              </span>

              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: bp === "mobile" ? "32px" : bp === "tablet" ? "42px" : "48px",
                lineHeight: 1.05,
                letterSpacing: bp === "mobile" ? "-1.4px" : "-2.4px",
                color: "#000000",
                margin: 0,
              }}>
                Tailored to{" "}
                <span style={{ color: "#0150cd" }}>Municipal Needs</span>
              </p>

              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "15px" : "16px",
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.55)",
                margin: 0,
              }}>
                Town Transit offers features crafted to enhance the journey for both riders and drivers.
              </p>

              {/* CTAs */}
              <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "10px",
                marginTop: "8px",
                width: isMobile ? "100%" : "auto",
              }}>
                <AnimatedButton
                  href="#features"
                  fullWidthMobile
                  style={{
                    background: "#0150cd",
                    color: "#fffbf2",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    letterSpacing: "-0.3px",
                    padding: "12px 28px",
                    borderRadius: "4px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  Learn More
                </AnimatedButton>
                <AnimatedButton
                  href="#demo"
                  fullWidthMobile
                  style={{
                    border: "1px solid rgba(0,0,0,0.15)",
                    color: "#000000",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    letterSpacing: "-0.3px",
                    padding: "12px 28px",
                    borderRadius: "4px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  Get in Touch
                </AnimatedButton>
              </div>
            </div>
          </FadeUp>

          {/* Right — benefit cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "16px" : "20px" }}>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={isMobile ? undefined : { y: -3, boxShadow: "0 12px 32px rgba(1,80,205,0.08)" }}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "14px",
                  padding: isMobile ? "28px 24px" : "40px 40px",
                  display: "flex",
                  gap: isMobile ? "16px" : "24px",
                  alignItems: "flex-start",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "rgba(1,80,205,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {b.icon}
                </div>

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: isMobile ? "18px" : "22px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.8px",
                    color: "rgba(0,0,0,0.88)",
                    margin: 0,
                  }}>
                    {b.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(0,0,0,0.55)",
                    margin: 0,
                  }}>
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
