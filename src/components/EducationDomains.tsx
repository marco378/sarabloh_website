"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const domains = [
  {
    index: "01",
    title: "Data & Reporting",
    desc: "Collecting, reading, and presenting information so businesses and organizations can make better decisions. A skill every employer needs.",
    tag: "Foundational",
  },
  {
    index: "02",
    title: "Digital Marketing",
    desc: "Content planning, social media management, and reading analytics. Skills used by every kind of business, in every industry, across the country.",
    tag: "In-demand",
  },
  {
    index: "03",
    title: "Online Communication & Operations",
    desc: "How to work professionally in a digital workplace. Collaboration tools, documentation, project tracking, and the basics of how modern teams operate.",
    tag: "Workplace-ready",
  },
  {
    index: "04",
    title: "AI Tools for Everyday Work",
    desc: "Practical AI tools that help you work faster and smarter. Writing, research, automation, and problem-solving. Applicable to any job in any industry.",
    tag: "Future-proof",
  },
];

export default function EducationDomains() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "36px" :
    bp === "tablet" ? "48px" :
    "70px";

  const headingTracking =
    bp === "mobile" ? "-1.4px" :
    bp === "tablet" ? "-2px" :
    "-3.5px";

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  // Decorative number size
  const decorNumSize =
    bp === "mobile" ? "72px" :
    bp === "tablet" ? "88px" :
    "96px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Heading */}
        <FadeUp>
          <div style={{
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            alignItems: isMobileOrTablet ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: isMobile ? "36px" : "56px",
          }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 400, fontSize: headingSize, lineHeight: 0.96, letterSpacing: headingTracking, color: "#000000", margin: 0 }}>
                Specialized
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: headingSize, lineHeight: 0.96, letterSpacing: headingTracking, color: "#0150cd", margin: 0 }}>
                Domains
              </p>
            </div>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: 1.5,
              letterSpacing: "-0.2px",
              color: "rgba(0,0,0,0.55)",
              margin: 0,
              maxWidth: "340px",
            }}>
              Four skill tracks. Every one built around what employers are actually hiring for.
            </p>
          </div>
        </FadeUp>

        {/* 2×2 large tiles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "12px" : "20px",
          }}
        >
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: isMobile ? i * 0.08 : (i % 2) * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={!isMobile ? {
                y: -4,
                boxShadow: "0 16px 40px rgba(1,80,205,0.1)",
              } : undefined}
              style={{
                position: "relative",
                overflow: "hidden",
                background: "rgba(1,80,205,0.03)",
                border: "1px solid rgba(1,80,205,0.18)",
                borderRadius: "16px",
                padding: isMobile ? "28px 24px 28px" : "36px 36px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "40px",
                minHeight: isMobile ? "auto" : "240px",
                cursor: "default",
              }}
            >
              {/* Decorative number — watermark in background */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "20px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 800,
                  fontSize: decorNumSize,
                  lineHeight: 1,
                  letterSpacing: "-4px",
                  color: "rgba(1,80,205,0.07)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {d.index}
              </span>

              {/* Tag pill */}
              <span style={{
                alignSelf: "flex-start",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "1.2px",
                color: "#0150cd",
                textTransform: "uppercase",
                background: "rgba(1,80,205,0.08)",
                borderRadius: "100px",
                padding: "4px 12px",
              }}>
                {d.tag}
              </span>

              {/* Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "20px" : "24px",
                  lineHeight: 1.1,
                  letterSpacing: "-1.2px",
                  color: "rgba(0,0,0,0.85)",
                  margin: 0,
                }}>
                  {d.title}
                </p>
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "14px" : "15px",
                  lineHeight: 1.65,
                  color: "rgba(0,0,0,0.6)",
                  margin: 0,
                }}>
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
