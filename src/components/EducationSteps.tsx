"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const steps = [
  {
    num: "01",
    title: "Apply Now",
    desc: "Sign up and show up. No prior experience, no technology background needed. Everyone starts from the same place.",
  },
  {
    num: "02",
    title: "Learn Digital Skills That Get You Hired",
    desc: "Six weeks of hands-on training. AI tools, digital marketing, data basics, how to run online workflows, and how to communicate professionally in digital workplaces. Practical. Applicable. Real.",
  },
  {
    num: "03",
    title: "Build a Portfolio of Real Work",
    desc: "Every participant completes actual projects they can show to employers. Not just certificates. Real examples of real work, that is what opens doors.",
  },
  {
    num: "04",
    title: "Start Your Paid Work Placement",
    desc: "Eight weeks of paid work with a real employer. Structured mentorship, weekly check-ins, and support throughout. This is actual employment experience, not a simulation.",
  },
  {
    num: "05",
    title: "Complete the Program",
    desc: "Finish training and your paid placement. Leave with a certificate, a work reference, and a portfolio showing what you built and what you can do.",
  },
  {
    num: "06",
    title: "Equipment & Internship Pathway",
    desc: "Module completers receive laptops and devices. Nations then access a 6–8 month paid internship program directed at building your Nation's own capacity — not just individual placements.",
  },
];

export default function EducationSteps() {
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

  // Circle badge diameter
  const badgeSize = isMobile ? 44 : 56;

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Heading */}
        <FadeUp>
          <div style={{ marginBottom: isMobile ? "44px" : "64px" }}>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: headingSize,
              lineHeight: 0.96,
              letterSpacing: headingTracking,
              color: "#000000",
              margin: 0,
            }}>
              How the program
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
              works.
            </p>
          </div>
        </FadeUp>

        {/* Timeline */}
        {isMobileOrTablet ? (
          /* ── Mobile / Tablet: compact vertical list ── */
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  display: "flex",
                  gap: "20px",
                  position: "relative",
                  paddingBottom: i < steps.length - 1 ? "36px" : 0,
                }}
              >
                {/* Left: badge + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: badgeSize,
                    height: badgeSize,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(1,80,205,0.35)",
                    background: "rgba(1,80,205,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    zIndex: 1,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "0.5px",
                      color: "#0150cd",
                    }}>
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{
                      flex: 1,
                      width: "1px",
                      background: "rgba(1,80,205,0.15)",
                      marginTop: "6px",
                    }} />
                  )}
                </div>

                {/* Right: content */}
                <div style={{
                  paddingTop: `${(badgeSize - 20) / 2}px`,
                  paddingBottom: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.8px",
                    color: "rgba(0,0,0,0.85)",
                    margin: 0,
                  }}>
                    {step.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(0,0,0,0.6)",
                    margin: 0,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* ── Desktop: two-column timeline ── */
          <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>
            {/* Left column: steps 1-3 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
              {steps.slice(0, 3).map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    display: "flex",
                    gap: "24px",
                    position: "relative",
                    paddingBottom: i < 2 ? "40px" : 0,
                  }}
                >
                  {/* Badge + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: badgeSize,
                      height: badgeSize,
                      borderRadius: "50%",
                      border: "1.5px solid rgba(1,80,205,0.35)",
                      background: "rgba(1,80,205,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}>
                      <span style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        letterSpacing: "0.5px",
                        color: "#0150cd",
                      }}>
                        {step.num}
                      </span>
                    </div>
                    {i < 2 && (
                      <div style={{
                        flex: 1,
                        width: "1px",
                        background: "rgba(1,80,205,0.15)",
                        marginTop: "8px",
                      }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: `${(badgeSize - 22) / 2}px`, display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: 1.15,
                      letterSpacing: "-1px",
                      color: "rgba(0,0,0,0.85)",
                      margin: 0,
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: 1.65,
                      color: "rgba(0,0,0,0.6)",
                      margin: 0,
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Vertical divider */}
            <div style={{ width: "1px", alignSelf: "stretch", background: "rgba(0,0,0,0.07)", flexShrink: 0 }} />

            {/* Right column: steps 4-6 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
              {steps.slice(3).map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 + 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    display: "flex",
                    gap: "24px",
                    position: "relative",
                    paddingBottom: i < 2 ? "40px" : 0,
                  }}
                >
                  {/* Badge + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: badgeSize,
                      height: badgeSize,
                      borderRadius: "50%",
                      border: "1.5px solid rgba(1,80,205,0.35)",
                      background: "rgba(1,80,205,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}>
                      <span style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        letterSpacing: "0.5px",
                        color: "#0150cd",
                      }}>
                        {step.num}
                      </span>
                    </div>
                    {i < 2 && (
                      <div style={{
                        flex: 1,
                        width: "1px",
                        background: "rgba(1,80,205,0.15)",
                        marginTop: "8px",
                      }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: `${(badgeSize - 22) / 2}px`, display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: 1.15,
                      letterSpacing: "-1px",
                      color: "rgba(0,0,0,0.85)",
                      margin: 0,
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: 1.65,
                      color: "rgba(0,0,0,0.6)",
                      margin: 0,
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
