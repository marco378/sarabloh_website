"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const benefits = [
  {
    category: "Economic Growth",
    title: "Real Jobs. Local Wages.",
    desc: "Technology companies operating in the zone hire locally. The jobs that get created go to people who live in the community — not to contractors flying in from the city.",
    color: "#0150cd",
  },
  {
    category: "Financial Inclusion",
    title: "Access to Economic Participation",
    desc: "Communities and their members gain access to investment, savings tools, and economic participation that the traditional banking system has often left them out of.",
    color: "#0150cd",
  },
  {
    category: "Cultural Preservation",
    title: "Protecting What Matters",
    desc: "Digital tools help communities protect, document, and share their language, heritage, art, and traditions — on their own terms. Not as a museum piece. As a living, growing part of daily life.",
    color: "#0150cd",
  },
  {
    category: "Resource Sovereignty",
    title: "Communities Control Their Own Land",
    desc: "Land, energy, and natural resources can generate wealth that stays within the community — rather than flowing out to outside investors who never set foot in the territory.",
    color: "#0150cd",
  },
  {
    category: "Talent Retention",
    title: "Young People Can Stay",
    desc: "When there are good jobs in the community, young people who grow up there have a reason to stay. Skills and ambition stop being things that leave. They become community assets.",
    color: "#0150cd",
  },
  {
    category: "Transparent Governance",
    title: "Accountability the Community Can See",
    desc: "Revenue, spending, and decisions are visible to the community. Smart contracts and transparent records mean money goes where it was promised to go — and the community can verify that.",
    color: "#0150cd",
  },
];

export default function EZBenefits() {
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
    <section id="benefits" style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Header */}
        <FadeUp>
          <div style={{
            marginBottom: isMobile ? "44px" : "64px",
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            alignItems: isMobileOrTablet ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            gap: "20px",
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
                marginBottom: "14px",
              }}>
                Direct Benefits
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: bp === "mobile" ? "36px" : bp === "tablet" ? "48px" : "64px",
                lineHeight: 0.96,
                letterSpacing: bp === "mobile" ? "-1.4px" : "-3.2px",
                color: "#000000",
                margin: 0,
              }}>
                What communities{" "}
                <span style={{ fontWeight: 600, color: "#0150cd" }}>actually gain</span>
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Benefits grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isMobileOrTablet ? "1fr 1fr" : "1fr 1fr 1fr",
          gap: "0",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: "12px",
          overflow: "hidden",
        }}>
          {benefits.map((b, i) => {
            const cols = isMobile ? 1 : isMobileOrTablet ? 2 : 3;
            const isLastRow = i >= benefits.length - cols;
            const isRightEdge = !isMobile && (i % cols !== cols - 1);

            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % cols) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  padding: isMobile ? "32px 24px" : "44px 40px",
                  borderRight: isRightEdge ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  borderBottom: !isLastRow ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Category bar */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{
                    width: "20px",
                    height: "2px",
                    background: "#0150cd",
                    borderRadius: "1px",
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600,
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    color: "#0150cd",
                    textTransform: "uppercase",
                  }}>
                    {b.category}
                  </span>
                </div>

                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "18px" : "20px",
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
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.55)",
                  margin: 0,
                }}>
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
