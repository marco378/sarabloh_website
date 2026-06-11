"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const milestones = [
  {
    label: "The Foundation",
    title: "First Nations Youth Digital Workforce Program",
    desc: "Training and paid work for 20 Indigenous youth ages 15–21. Six weeks skills training, eight weeks paid placement. Transportation, internet, and device support included.",
  },
  {
    label: "December 2025",
    title: "Pukatawagan AI Youth Cohort",
    desc: "3-day AI camp in Morden. Youth from Pukatawagan and Flin Flon built 15+ working apps with zero prior experience. Featured in Pembina Valley Online.",
  },
  {
    label: "Equipment Program",
    title: "Laptops & Devices for Completers",
    desc: "Participants who complete their modules receive laptops and cell phones. Technology stays in the community.",
  },
  {
    label: "Paid Pathway",
    title: "6–8 Month Paid Internship",
    desc: "Nations gain access to a funded 6–8 month paid internship program directed at the Nation itself. Your community builds its own capacity.",
  },
  {
    label: "2026 — Growing",
    title: "Expanding Across Northern Manitoba",
    desc: "More communities gaining access to paid digital work experience, devices, and real job pathways.",
  },
];

export default function NationsStory() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  const quoteSize =
    bp === "mobile" ? "26px" :
    bp === "tablet" ? "32px" :
    "38px";

  return (
    <section id="story" style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? "52px" : isMobileOrTablet ? "60px" : "80px",
            alignItems: "start",
          }}
        >
          {/* ── Left: editorial story ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "32px" : "40px" }}>
            <FadeUp>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "#0150cd",
                  textTransform: "uppercase",
                }}>
                  The Story Behind the Work
                </span>
                <div style={{ width: "32px", height: "2px", background: "#0150cd", borderRadius: "1px" }} />
              </div>
            </FadeUp>

            {/* Pull quote */}
            <FadeUp delay={0.08}>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: quoteSize,
                lineHeight: 1.15,
                letterSpacing: "-1.5px",
                color: "#000000",
                margin: 0,
              }}>
                This isn&apos;t a program.{" "}
                <span style={{ color: "rgba(0,0,0,0.35)" }}>It&apos;s a commitment.</span>
              </p>
            </FadeUp>

            {/* Body paragraphs */}
            <FadeUp delay={0.14}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "15px" : "17px",
                  lineHeight: 1.7,
                  letterSpacing: "-0.2px",
                  color: "rgba(0,0,0,0.7)",
                  margin: 0,
                }}>
                  Sarabloh Technologies was built at the intersection of technology and community. Our team has spent years inside First Nations communities — not as consultants, but as trusted partners who show up, stay, and build alongside.
                </p>
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "15px" : "17px",
                  lineHeight: 1.7,
                  letterSpacing: "-0.2px",
                  color: "rgba(0,0,0,0.7)",
                  margin: 0,
                }}>
                  Brown Eagle is an Indigenous entrepreneur who has crossed North America sharing a simple message: when communities own the technology they use, they own the economic opportunity that comes with it.
                </p>
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "15px" : "17px",
                  lineHeight: 1.7,
                  letterSpacing: "-0.2px",
                  color: "rgba(0,0,0,0.7)",
                  margin: 0,
                }}>
                  We have run AI camps in Pukatawagan. We have watched young people build working applications in three days with no prior experience. We have seen what happens when you hand real tools to communities with real vision.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* ── Right: milestone timeline ── */}
          <FadeUp delay={isMobileOrTablet ? 0 : 0.18}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, x: isMobileOrTablet ? 0 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    display: "flex",
                    gap: "20px",
                    position: "relative",
                    paddingBottom: i < milestones.length - 1 ? "32px" : 0,
                  }}
                >
                  {/* Circle + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1.5px solid rgba(1,80,205,0.35)",
                      background: "rgba(1,80,205,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                    }}>
                      <span style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontWeight: 700,
                        fontSize: "11px",
                        color: "#0150cd",
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {i < milestones.length - 1 && (
                      <div style={{
                        flex: 1,
                        width: "1px",
                        background: "rgba(1,80,205,0.15)",
                        marginTop: "6px",
                      }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: "8px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 600,
                      fontSize: "11px",
                      letterSpacing: "1.2px",
                      color: "#0150cd",
                      textTransform: "uppercase",
                    }}>
                      {m.label}
                    </span>
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 600,
                      fontSize: isMobile ? "16px" : "18px",
                      lineHeight: 1.2,
                      letterSpacing: "-0.8px",
                      color: "rgba(0,0,0,0.85)",
                      margin: 0,
                    }}>
                      {m.title}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "rgba(0,0,0,0.55)",
                      margin: 0,
                    }}>
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
