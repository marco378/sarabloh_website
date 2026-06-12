"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const outcomes = [
  "Functional AI agents: built, tested, and deployed",
  "Blockchain fundamentals: wallet tracking, copy trading, and community token applications",
  "A professional portfolio with documented, working case studies",
  "Direct pathways to employment, freelance work, or tech entrepreneurship",
  "A network of First Nations technologists and founders",
  "The ability to generate income from their skills on day one",
];

const inventory = [
  { name: "AI Inbox Manager", desc: "Built, tested, ready to sell to any service business." },
  { name: "Smart Cancellation Automation", desc: "Reduces churn for service businesses. Ready to deploy." },
  { name: "Lead Generation Pipeline", desc: "Finds prospects, pulls contact info, drafts outreach automatically." },
  { name: "Live Client Website", desc: "Built with AI, optimized to convert, yours to sell or replicate." },
  { name: "AI Executive Assistant Setup", desc: "All your apps connected into one automated system." },
  { name: "Blockchain & Wallet Tracking Tools", desc: "Copy trading setup, wallet trackers, and sniper bot fundamentals." },
  { name: "Capstone Project", desc: "Your first portfolio piece. Your first proof. Documented and deployed." },
];

export default function AcceleratorStory() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX = bp === "mobile" ? "20px" : bp === "tablet" ? "40px" : "70px";
  const padY = bp === "mobile" ? "60px" : bp === "tablet" ? "72px" : "96px";

  return (
    <>
      {/* Story section — editorial */}
      <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1.2fr",
            gap: isMobile ? "40px" : "80px",
            alignItems: "start",
          }}>
            {/* Left — story */}
            <FadeUp>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <span style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
                  color: "#0150cd", textTransform: "uppercase",
                }}>
                  Why This Exists
                </span>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: bp === "mobile" ? "28px" : "36px",
                  lineHeight: 1.1, letterSpacing: "-1.4px",
                  color: "#000000", margin: 0,
                }}>
                  First Nations youth built this economy too.{" "}
                  <span style={{ color: "rgba(0,0,0,0.3)" }}>It&apos;s time we owned a piece of it.</span>
                </p>

                <div style={{
                  background: "rgba(1,80,205,0.04)",
                  borderLeft: "3px solid #0150cd",
                  borderRadius: "0 8px 8px 0",
                  padding: isMobile ? "20px" : "24px 28px",
                  margin: "8px 0",
                }}>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600, fontSize: isMobile ? "16px" : "18px",
                    lineHeight: 1.4, color: "rgba(0,0,0,0.8)", margin: 0,
                  }}>
                    I learned AI and automation from a laptop. No classroom. No degree. No one showed me how. I figured it out. Then I built a company.
                  </p>
                </div>

                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400, fontSize: "15px",
                  lineHeight: 1.7, color: "rgba(0,0,0,0.6)", margin: 0,
                }}>
                  AI and blockchain are the greatest economic opportunity our communities have ever had access to. The gap is not talent. The gap is access. That is what this Accelerator closes.
                </p>
              </div>
            </FadeUp>

            {/* Right — outcomes + economic */}
            <FadeUp delay={isMobileOrTablet ? 0 : 0.15}>
              <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                {/* Flagship outputs */}
                <div>
                  <span style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
                    color: "#0150cd", textTransform: "uppercase",
                    display: "block", marginBottom: "16px",
                  }}>
                    What Graduates Walk Away With
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {outcomes.map((o, i) => (
                      <div key={i} style={{
                        display: "flex", gap: "14px", alignItems: "flex-start",
                        padding: "14px 0",
                        borderBottom: i < outcomes.length - 1 ? "1px solid rgba(0,0,0,0.06)" : undefined,
                      }}>
                        <span style={{ color: "#0150cd", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>→</span>
                        <p style={{
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontWeight: 400, fontSize: "15px",
                          lineHeight: 1.55, color: "rgba(0,0,0,0.65)", margin: 0,
                        }}>
                          {o}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Economic return callout */}
                <div style={{
                  background: "#0150cd",
                  borderRadius: "14px",
                  padding: isMobile ? "28px 24px" : "36px 36px",
                }}>
                  <span style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600, fontSize: "10px", letterSpacing: "2px",
                    color: "rgba(255,255,255,0.6)", textTransform: "uppercase",
                    display: "block", marginBottom: "12px",
                  }}>
                    For Funders & Partners
                  </span>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600, fontSize: isMobile ? "18px" : "22px",
                    lineHeight: 1.2, letterSpacing: "-0.8px",
                    color: "#ffffff", margin: "0 0 12px",
                  }}>
                    You are not funding a non-profit.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400, fontSize: "14px",
                    lineHeight: 1.65, color: "rgba(255,255,255,0.75)", margin: "0 0 16px",
                  }}>
                    You are investing in a pipeline of high-tier technical talent, trained to optimize organizational efficiency, protect digital sovereignty, and close the First Nations skills gap permanently.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600, fontSize: "16px",
                    lineHeight: 1.35, color: "#ffffff", margin: 0,
                  }}>
                    The ROI is measurable. The impact is generational.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Inventory grid */}
      <section style={{ background: "#f7f9fc", paddingTop: padY, paddingBottom: padY }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

          <FadeUp>
            <div style={{ marginBottom: isMobile ? "36px" : "52px" }}>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
                color: "#0150cd", textTransform: "uppercase",
                display: "block", marginBottom: "14px",
              }}>
                What You Walk Away With
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: bp === "mobile" ? "32px" : bp === "tablet" ? "44px" : "52px",
                lineHeight: 1.05, letterSpacing: bp === "mobile" ? "-1.4px" : "-2.6px",
                color: "#000000", margin: 0,
              }}>
                Most programs give you knowledge.{" "}
                <span style={{ fontWeight: 600, color: "#0150cd" }}>We give you inventory.</span>
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400, fontSize: isMobile ? "15px" : "17px",
                lineHeight: 1.65, color: "rgba(0,0,0,0.5)",
                margin: "14px 0 0", maxWidth: "560px",
              }}>
                You don&apos;t finish this program with a certificate. You finish with a library of working tools, automation systems, and platforms.
              </p>
            </div>
          </FadeUp>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isMobileOrTablet ? "1fr 1fr" : "1fr 1fr 1fr",
            gap: isMobile ? "10px" : "12px",
            marginBottom: isMobile ? "36px" : "48px",
          }}>
            {inventory.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "10px",
                  padding: isMobile ? "24px 20px" : "28px 24px",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{
                  width: "22px", height: "22px", borderRadius: "50%",
                  background: "#0150cd",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: "2px",
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600, fontSize: "15px",
                    lineHeight: 1.2, color: "rgba(0,0,0,0.85)", margin: "0 0 4px",
                  }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400, fontSize: "13px",
                    lineHeight: 1.5, color: "rgba(0,0,0,0.5)", margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <div style={{
              borderLeft: "3px solid #0150cd",
              paddingLeft: "20px",
            }}>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? "18px" : "22px",
                lineHeight: 1.35, letterSpacing: "-0.8px",
                color: "rgba(0,0,0,0.8)", margin: 0,
              }}>
                You don&apos;t just learn how to build these things. You leave with them built. Ready to sell. Ready to run.
              </p>
            </div>
          </FadeUp>

        </div>
      </section>
    </>
  );
}
