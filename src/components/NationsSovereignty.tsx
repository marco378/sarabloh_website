"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const items = [
  {
    title: "Your community votes on decisions",
    desc: "Digital tools that give community members a real say in how resources and projects are managed — transparent, fair, and controlled by your leadership.",
  },
  {
    title: "Funding on your terms",
    desc: "New ways to fund community projects — land, energy, cultural initiatives — without giving up ownership or control to outside investors.",
  },
  {
    title: "Protecting and earning from cultural heritage",
    desc: "Digital tools to protect Indigenous art, music, language, and traditions — and create ways for that cultural wealth to generate ongoing value for the community, not for outside parties.",
  },
  {
    title: "Wealth stays in the community",
    desc: "Smart, automated systems that ensure fair and transparent sharing of income from community projects. No financial mismanagement. No middlemen taking a cut.",
  },
];

export default function NationsSovereignty() {
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

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Two-column header */}
        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? "28px" : "80px",
            alignItems: "end",
            marginBottom: isMobile ? "48px" : "72px",
          }}>
            {/* Left */}
            <div>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: headingSize,
                lineHeight: 0.96,
                letterSpacing: headingTracking,
                color: "#000000",
                margin: 0,
              }}>
                Economic
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
                Sovereignty
              </p>
            </div>

            {/* Right — body intro */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "20px" : "24px",
                lineHeight: 1.2,
                letterSpacing: "-1px",
                color: "rgba(0,0,0,0.85)",
                margin: 0,
              }}>
                Your community should control its own economic future.
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "15px" : "16px",
                lineHeight: 1.65,
                letterSpacing: "-0.2px",
                color: "rgba(0,0,0,0.6)",
                margin: 0,
              }}>
                Indigenous communities across Canada hold vast land, resources, and cultural heritage. New digital tools are changing how that wealth is owned, protected, and grown — keeping it where it belongs.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* 2×2 feature tiles with left-border accent */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "0" : "0",
        }}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                padding: isMobile ? "28px 0" : "40px",
                borderTop: "1px solid rgba(0,0,0,0.07)",
                borderLeft: !isMobile && i % 2 === 1 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* Accent bar */}
              <div style={{
                width: "28px",
                height: "3px",
                background: "#0150cd",
                borderRadius: "2px",
                marginBottom: "4px",
              }} />

              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "18px" : "20px",
                lineHeight: 1.2,
                letterSpacing: "-0.8px",
                color: "rgba(0,0,0,0.85)",
                margin: 0,
              }}>
                {item.title}
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.65,
                color: "rgba(0,0,0,0.6)",
                margin: 0,
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* Bottom borders for last two tiles */}
          {!isMobile && (
            <>
              <div style={{ gridColumn: "1", height: "1px", background: "rgba(0,0,0,0.07)" }} />
              <div style={{ gridColumn: "2", height: "1px", background: "rgba(0,0,0,0.07)", borderLeft: "1px solid rgba(0,0,0,0.07)" }} />
            </>
          )}
          {isMobile && (
            <div style={{ height: "1px", background: "rgba(0,0,0,0.07)" }} />
          )}
        </div>

      </div>
    </section>
  );
}
