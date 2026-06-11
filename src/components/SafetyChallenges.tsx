"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const challenges = [
  {
    title: "Theft and Food Security",
    desc: "Community supplies and food being taken. Families going without. No record and no accountability. No way to track patterns or prevent repeat incidents.",
  },
  {
    title: "Repeat Suspects and Offenders",
    desc: "The same individuals causing harm again and again. No documented profile across incidents. Nothing changes because nothing is tracked.",
  },
  {
    title: "Drinking and Drug Activity",
    desc: "Intoxicated individuals causing incidents. Drugs brought into the community with no way to track, prevent, or build a documented record.",
  },
  {
    title: "Gangs and Violence",
    desc: "Gang-related activity and violent incidents with no system for your safety patrol to act on early. No documentation trail for identifying patterns over time.",
  },
  {
    title: "Reporting and Communications",
    desc: "Peace officers without proper tools. Incidents not logged consistently. Team communication is slow. Leadership does not have a clear real-time picture.",
  },
  {
    title: "Children and Elders at Risk",
    desc: "The most vulnerable members of the community without proper protection or early warning when something is wrong. No system connecting concerns to visible action.",
  },
];

export default function SafetyChallenges() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  const headingSize =
    bp === "mobile" ? "36px" :
    bp === "tablet" ? "48px" :
    "64px";

  const headingTracking =
    bp === "mobile" ? "-1.4px" :
    bp === "tablet" ? "-2px" :
    "-3.2px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Header row: label + heading on left, source note on right */}
        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 380px",
            gap: isMobile ? "20px" : "60px",
            alignItems: "end",
            marginBottom: isMobile ? "48px" : "72px",
          }}>
            <div>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#0150cd",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}>
                Challenges We Solve
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: headingSize,
                lineHeight: 0.96,
                letterSpacing: headingTracking,
                color: "#000000",
                margin: 0,
              }}>
                Heard directly{" "}
                <span style={{ fontWeight: 600, color: "#0150cd" }}>from communities</span>
              </p>
            </div>

            {!isMobileOrTablet && (
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.65,
                letterSpacing: "-0.2px",
                color: "rgba(0,0,0,0.5)",
                margin: 0,
              }}>
                Every feature in our platform was built from real conversations with community leaders, peace officers, and Elders. Not assumptions.
              </p>
            )}
          </div>
        </FadeUp>

        {isMobileOrTablet && (
          <FadeUp delay={0.1}>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(0,0,0,0.5)",
              margin: "0 0 44px",
            }}>
              Every feature in our platform was built from real conversations with community leaders, peace officers, and Elders. Not assumptions.
            </p>
          </FadeUp>
        )}

        {/* Challenge grid — 2 col on desktop, 1 col on mobile */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "0",
        }}>
          {challenges.map((c, i) => {
            const isLeft = i % 2 === 0;
            const isLastRow = i >= challenges.length - (isMobile ? 1 : 2);
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  padding: isMobile ? "32px 0" : "44px 48px 44px 0",
                  paddingLeft: !isMobile && !isLeft ? "48px" : undefined,
                  borderTop: "1px solid rgba(0,0,0,0.07)",
                  borderBottom: isLastRow ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  borderLeft: !isMobile && !isLeft ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                {/* Number accent */}
                <span style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.5px",
                  color: "rgba(1,80,205,0.35)",
                  flexShrink: 0,
                  marginTop: "4px",
                  minWidth: "24px",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: isMobile ? "18px" : "20px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.8px",
                    color: "rgba(0,0,0,0.88)",
                    margin: 0,
                  }}>
                    {c.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "rgba(0,0,0,0.55)",
                    margin: 0,
                  }}>
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
