"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const pillars = [
  {
    label: "Community Ownership",
    title: "The Community Owns What It Builds",
    desc: "When a project or business operates inside the zone, the community has a real ownership stake. Not a royalty. Not a consultation fee. An actual share of the business — so when it grows, the community grows with it.",
  },
  {
    label: "Local Jobs First",
    title: "Jobs for People Who Live There",
    desc: "Businesses operating in the zone hire locally first. Young people who trained in digital skills, got paid work experience, and built a portfolio now have somewhere to go. The talent pipeline feeds directly into local jobs.",
  },
  {
    label: "Money Stays Local",
    title: "Revenue Reinvested in the Community",
    desc: "A portion of all revenue generated in the zone goes directly back into community priorities — education, housing, health, or whatever the community decides. The community governs how it is spent.",
  },
  {
    label: "Self-Determination",
    title: "Communities Set Their Own Rules",
    desc: "The zone operates under Indigenous-led governance. Community leadership decides who can participate, under what conditions, and how disputes are handled. Not the federal government. Not an outside board. The community.",
  },
];

export default function EZSolution() {
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
    <section style={{ background: "#f0f4ff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.4fr",
          gap: isMobile ? "44px" : isMobileOrTablet ? "52px" : "100px",
          alignItems: "start",
        }}>

          {/* Left — sticky pull statement */}
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
                The Solution
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
                An economic zone where communities{" "}
                <span style={{ color: "#0150cd" }}>make the rules</span>
              </p>

              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "15px" : "16px",
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.6)",
                margin: 0,
              }}>
                An Indigenous-led economic zone is a designated area where Indigenous communities set the economic conditions. They decide who works there, who benefits, and how value gets shared. Think of it like a community-owned economic engine.
              </p>
            </div>
          </FadeUp>

          {/* Right — four pillars stacked */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, x: isMobileOrTablet ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  padding: isMobile ? "28px 0" : "36px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  color: "#0150cd",
                  textTransform: "uppercase",
                }}>
                  {pillar.label}
                </span>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "18px" : "22px",
                  lineHeight: 1.15,
                  letterSpacing: "-0.9px",
                  color: "rgba(0,0,0,0.88)",
                  margin: 0,
                }}>
                  {pillar.title}
                </p>
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.55)",
                  margin: 0,
                }}>
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
