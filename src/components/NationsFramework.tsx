"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const pillars = [
  {
    num: "01",
    title: "Digital Skills & AI Education",
    desc: "Hands-on AI camps, digital literacy programs, and youth app development intensives delivered right in the community. Fully supported with devices, transportation, and internet access so no one is left out.",
  },
  {
    num: "02",
    title: "Economic Opportunity Through Technology",
    desc: "Digital careers, online business skills, and technology entrepreneurship. Indigenous communities building their own economic future through the tools that are reshaping the global workforce.",
  },
  {
    num: "03",
    title: "Equipment & Paid Internship Pathway",
    desc: "Module completers receive laptops and devices. Technology stays with the Nation. Nations then access a 6–8 month paid internship directed at the Nation, not individuals. Capacity stays local.",
  },
  {
    num: "04",
    title: "Community-Built Technology",
    desc: "Applications designed by communities, for communities. From Knowledge Keeper archives to community hub platforms. Every product co-designed with the people who will use it.",
  },
];

export default function NationsFramework() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();
  const [hovered, setHovered] = useState<number | null>(null);

  const headingSize =
    bp === "mobile" ? "36px" :
    bp === "tablet" ? "48px" :
    "70px";

  const headingTracking =
    bp === "mobile" ? "-1.4px" :
    bp === "tablet" ? "-2px" :
    "-3.5px";

  const numSize =
    bp === "mobile" ? "48px" :
    bp === "tablet" ? "60px" :
    "72px";

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
          <div style={{ marginBottom: isMobile ? "40px" : "60px" }}>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: headingSize,
              lineHeight: 0.96,
              letterSpacing: headingTracking,
              color: "#000000",
              margin: 0,
            }}>
              The Framework
            </p>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: headingSize,
              lineHeight: 0.96,
              letterSpacing: headingTracking,
              color: "#0150cd",
              margin: 0,
            }}>
              Four pillars.
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "18px",
              lineHeight: 1.5,
              letterSpacing: "-0.2px",
              color: "rgba(0,0,0,0.5)",
              margin: "14px 0 0",
            }}>
              Nations Forward
            </p>
          </div>
        </FadeUp>

        {/* Pillar rows */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              onHoverStart={() => !isMobile && setHovered(i)}
              onHoverEnd={() => !isMobile && setHovered(null)}
              style={{ position: "relative" }}
            >
              {/* Hover fill */}
              <motion.div
                animate={{ opacity: !isMobile && hovered === i ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ position: "absolute", inset: 0, background: "rgba(1,80,205,0.03)", pointerEvents: "none" }}
              />

              <div style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isMobileOrTablet
                  ? "52px 1fr"
                  : "120px 1fr 1fr",
                gap: isMobile ? "10px" : isMobileOrTablet ? "20px" : "40px",
                alignItems: "center",
                padding: isMobile ? "28px 0" : "36px 16px 36px 0",
              }}>
                {/* Large decorative number */}
                <span style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 700,
                  fontSize: isMobile ? "32px" : numSize,
                  lineHeight: 1,
                  letterSpacing: "-3px",
                  color: hovered === i ? "#0150cd" : "rgba(1,80,205,0.18)",
                  transition: "color 0.25s ease",
                  display: "block",
                }}>
                  {p.num}
                </span>

                {/* Title */}
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "20px" : isMobileOrTablet ? "24px" : "28px",
                  lineHeight: 1.1,
                  letterSpacing: isMobile ? "-0.8px" : "-1.2px",
                  color: hovered === i ? "#0150cd" : "rgba(0,0,0,0.85)",
                  margin: 0,
                  transition: "color 0.25s ease",
                }}>
                  {p.title}
                </p>

                {/* Desc — desktop right column */}
                {!isMobileOrTablet && (
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(0,0,0,0.65)",
                    margin: 0,
                  }}>
                    {p.desc}
                  </p>
                )}

                {/* Desc — mobile/tablet inline */}
                {isMobileOrTablet && (
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "rgba(0,0,0,0.6)",
                    margin: 0,
                    gridColumn: !isMobile ? "2" : "1",
                  }}>
                    {p.desc}
                  </p>
                )}

                {/* Chevron on hover */}
                {!isMobileOrTablet && (
                  <motion.div
                    animate={{ x: hovered === i ? 0 : -6, opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ position: "absolute", right: 0 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </motion.div>
                )}
              </div>
              <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
