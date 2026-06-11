"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function AboutMission() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const statementSize =
    bp === "mobile" ? "22px" :
    bp === "tablet" ? "26px" :
    "30px";

  const statementTracking =
    bp === "mobile" ? "-0.6px" :
    bp === "tablet" ? "-0.8px" :
    "-1px";

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

        {/* ── Mission block ── */}
        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "200px 1fr",
            gap: isMobile ? "20px" : "60px",
            alignItems: "start",
            paddingBottom: isMobile ? "44px" : "64px",
          }}>
            {/* Label column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: isMobileOrTablet ? 0 : "6px" }}>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#0150cd",
                textTransform: "uppercase",
              }}>
                Our Mission
              </span>
              {/* Accent line */}
              <div style={{ width: "32px", height: "2px", background: "#0150cd", borderRadius: "1px" }} />
            </div>

            {/* Statement — large, editorial */}
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: statementSize,
              lineHeight: 1.55,
              letterSpacing: statementTracking,
              color: "#000000",
              margin: 0,
            }}>
              To empower individuals and organizations through innovative technology solutions in AI, Blockchain, Mobility, and Education.{" "}
              <span style={{ color: "rgba(0,0,0,0.4)" }}>
                We are committed to making advanced technologies accessible, enhancing productivity, and fostering collaborative growth.
              </span>
            </p>
          </div>
        </FadeUp>

        {/* Full-width rule */}
        <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.08)" }} />

        {/* ── Vision block ── */}
        <FadeUp delay={0.12}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "200px 1fr",
            gap: isMobile ? "20px" : "60px",
            alignItems: "start",
            paddingTop: isMobile ? "44px" : "64px",
            paddingBottom: isMobile ? "44px" : "64px",
          }}>
            {/* Label column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: isMobileOrTablet ? 0 : "6px" }}>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#0150cd",
                textTransform: "uppercase",
              }}>
                Our Vision
              </span>
              <div style={{ width: "32px", height: "2px", background: "#0150cd", borderRadius: "1px" }} />
            </div>

            {/* Statement */}
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: statementSize,
              lineHeight: 1.55,
              letterSpacing: statementTracking,
              color: "#000000",
              margin: 0,
            }}>
              A future where technology seamlessly integrates into everyday life, driving progress and creating opportunities for everyone.{" "}
              <span style={{ color: "rgba(0,0,0,0.4)" }}>
                A connected, intelligent world that uplifts communities and fuels innovation — built on trust, access, and real outcomes.
              </span>
            </p>
          </div>
        </FadeUp>

        {/* Full-width rule */}
        <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.08)" }} />

        {/* ── Manifesto callout ── */}
        <FadeUp delay={0.2}>
          <div style={{
            paddingTop: isMobile ? "44px" : "64px",
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            alignItems: isMobileOrTablet ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: isMobile ? "24px" : "60px",
          }}>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? "36px" : isMobileOrTablet ? "48px" : "60px",
              lineHeight: 0.95,
              letterSpacing: isMobile ? "-1.4px" : "-2.5px",
              color: "#0150cd",
              margin: 0,
              flexShrink: 0,
            }}>
              Technology<br />for everyone.
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "18px",
              lineHeight: 1.65,
              letterSpacing: "-0.2px",
              color: "rgba(0,0,0,0.6)",
              margin: 0,
              maxWidth: "520px",
            }}>
              From Pukatawagan to Winnipeg, from small businesses to First Nations governments — we build for the people and places that mainstream technology too often leaves behind.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
