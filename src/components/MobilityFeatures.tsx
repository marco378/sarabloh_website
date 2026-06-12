"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Quick Booking and Real-Time Tracking",
    desc: "Book your ride instantly and follow it in real-time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safety First",
    desc: "Built-in SOS and robust driver screening ensure peace of mind.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Driver Support",
    desc: "Route optimization, earnings insights, and flexible scheduling.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Drive Your Way",
    desc: "Effortless rides, instant earnings, and flexibility - your schedule.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
        <line x1="8.5" y1="19" x2="8.5" y2="21" />
      </svg>
    ),
    title: "Customised Ride Options",
    desc: "Choose your payment method, ride type, and more.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Flexible Pricing",
    desc: "Choose from zone- or distance-based models to fit local needs.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Rent-A-Car Option",
    desc: "Enjoy solo or shared rides with flexible payment options.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
      </svg>
    ),
    title: "Convenient Multi-Stop & Waiting Features",
    desc: "Travel with added ease and flexibility.",
  },
];

export default function MobilityFeatures() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();
  const [hovered, setHovered] = useState<number | null>(null);

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  return (
    <section id="features" style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Header */}
        <FadeUp>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "44px" : "64px",
          }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#0150cd",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "14px",
            }}>
              Platform Features
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: bp === "mobile" ? "32px" : bp === "tablet" ? "44px" : "56px",
              lineHeight: 1.05,
              letterSpacing: bp === "mobile" ? "-1.4px" : "-2.8px",
              color: "#000000",
              margin: "0 auto",
              maxWidth: "680px",
            }}>
              Smart Mobility Solutions{" "}
              <span style={{ fontWeight: 600, color: "#0150cd" }}>Tailored to Your Needs</span>
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.6,
              color: "rgba(0,0,0,0.5)",
              margin: "16px auto 0",
              maxWidth: "480px",
            }}>
              Town Transit offers features crafted to enhance the journey for both riders and drivers.
            </p>
          </div>
        </FadeUp>

        {/* Features grid — 4 cols desktop, 2 tablet, 1 mobile */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isMobileOrTablet ? "1fr 1fr" : "1fr 1fr 1fr 1fr",
          gap: isMobile ? "0" : "0",
        }}>
          {features.map((f, i) => {
            const cols = isMobile ? 1 : isMobileOrTablet ? 2 : 4;
            const row = Math.floor(i / cols);
            const col = i % cols;
            const isHov = hovered === i;

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: col * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                onHoverStart={() => !isMobile && setHovered(i)}
                onHoverEnd={() => !isMobile && setHovered(null)}
                style={{
                  padding: isMobile ? "28px 0" : "36px 32px",
                  borderTop: row === 0 || isMobile ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                  borderLeft: !isMobile && col > 0 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  position: "relative",
                  cursor: "default",
                }}
              >
                {/* Hover fill */}
                <motion.div
                  animate={{ opacity: isHov ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(1,80,205,0.03)",
                    pointerEvents: "none",
                  }}
                />

                {/* Icon */}
                <div style={{
                  position: "relative",
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(1,80,205,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {f.icon}
                </div>

                <p style={{
                  position: "relative",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "17px" : "18px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.7px",
                  color: isHov ? "#0150cd" : "rgba(0,0,0,0.88)",
                  margin: 0,
                  transition: "color 0.25s ease",
                }}>
                  {f.title}
                </p>
                <p style={{
                  position: "relative",
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.55)",
                  margin: 0,
                }}>
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
