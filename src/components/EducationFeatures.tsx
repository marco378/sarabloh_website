"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

/* ── Icons ────────────────────────────────────────────────── */
function IconPaid() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="14" rx="2"/>
      <circle cx="12" cy="13" r="3"/>
      <path d="M6 6V4M18 6V4"/>
    </svg>
  );
}
function IconMentor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5"/>
      <path d="M3 20c0-3 2.5-5 6-5h4"/>
      <path d="M17 12l4 4-4 4M21 16h-5"/>
    </svg>
  );
}
function IconFlex() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M3 10h18M8 4V2M16 4V2"/>
      <circle cx="18" cy="18" r="3" fill="rgba(1,80,205,0.1)" stroke="#0150cd" strokeWidth="1.4"/>
      <path d="M18 16.5v1.5l1 1" strokeWidth="1.2"/>
    </svg>
  );
}
function IconSupport() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}

const features = [
  { Icon: IconPaid, title: "Paid Work Experience", desc: "Eight weeks of paid work placement with a real employer. Not volunteer. Not a simulation. Paid work that counts." },
  { Icon: IconMentor, title: "Learn from Working Professionals", desc: "Instructors who work in digital fields every day. Skills taught from real workplace experience, not just textbooks." },
  { Icon: IconFlex, title: "Flexible Scheduling", desc: "Sessions offered in the evenings and recorded so participants can keep up even with school or family obligations. Remote and in-person options available." },
  { Icon: IconSupport, title: "Support Included", desc: "Transportation help, internet support, and device loans available for anyone who needs them. No one should miss out because of logistics or costs." },
];

export default function EducationFeatures() {
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

        {isMobileOrTablet ? (
          /* ── Mobile / Tablet: stacked ── */
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            <FadeUp>
              <div>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: headingSize, lineHeight: 0.96, letterSpacing: headingTracking, color: "#000000", margin: 0 }}>
                  Key Features
                </p>
                <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.5, letterSpacing: "-0.2px", color: "rgba(0,0,0,0.55)", margin: "12px 0 0" }}>
                  What makes this program different
                </p>
              </div>
            </FadeUp>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "24px 0",
                    borderTop: "1px solid rgba(0,0,0,0.07)",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ background: "rgba(1,80,205,0.08)", borderRadius: "8px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <f.Icon />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: "17px", lineHeight: 1.2, letterSpacing: "-0.7px", color: "rgba(0,0,0,0.85)", margin: 0 }}>
                      {f.title}
                    </p>
                    <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: 1.6, color: "rgba(0,0,0,0.6)", margin: 0 }}>
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
              {/* Bottom border on last item */}
              <div style={{ height: "1px", background: "rgba(0,0,0,0.07)" }} />
            </div>
          </div>
        ) : (
          /* ── Desktop: heading pinned left, list on right ── */
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>

            {/* Left: sticky-ish heading */}
            <FadeUp>
              <div style={{ position: "sticky", top: "120px" }}>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: headingSize, lineHeight: 0.96, letterSpacing: headingTracking, color: "#000000", margin: 0 }}>
                  Key<br />Features
                </p>
                <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: 1.5, letterSpacing: "-0.2px", color: "rgba(0,0,0,0.5)", margin: "16px 0 0" }}>
                  What makes this program different
                </p>
              </div>
            </FadeUp>

            {/* Right: feature list with dividers */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "32px 0",
                    borderTop: "1px solid rgba(0,0,0,0.07)",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Icon box */}
                  <div style={{
                    background: "rgba(1,80,205,0.08)",
                    borderRadius: "8px",
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}>
                    <f.Icon />
                  </div>

                  {/* Title + desc */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: 1.15,
                      letterSpacing: "-1px",
                      color: "rgba(0,0,0,0.85)",
                      margin: 0,
                    }}>
                      {f.title}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: 1.65,
                      color: "rgba(0,0,0,0.6)",
                      margin: 0,
                    }}>
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div style={{ height: "1px", background: "rgba(0,0,0,0.07)" }} />
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
