"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const weeks = [
  { week: "Week 1", title: "AI Fundamentals. No Fluff.", desc: "What AI actually is, how it thinks, and what it cannot do. The difference between a chat model and an AI agent explained in plain language. By the end of this week you are using AI tools, not just watching someone else use them." },
  { week: "Week 2", title: "Your First Automation. Live and Working.", desc: "We build your first real workflow in n8n. Connect your email to an AI that reads, sorts, and responds. This is the moment most people realize this is actually achievable." },
  { week: "Week 3", title: "Client Websites. Built, Deployed, and Live.", desc: "We build a full client website using AI tools. Every click on screen. Set up hosting. Deploy it live to a real URL. By the end of this week you have something you can show any client." },
  { week: "Week 4", title: "AI Agents. The Week Everything Clicks.", desc: "What makes an agent different from a chatbot. How to build agents that handle complete tasks without you touching a single button. Most students say this is the week they understood what they were building." },
  { week: "Week 5", title: "Blockchain and Wallet Fundamentals.", desc: "What blockchain is, what it means for your money and your community. Wallet setup. Copy trading basics. Community token concepts and why they matter for Indigenous economic sovereignty." },
  { week: "Week 6", title: "Capstone. Build It. Present It. Price It.", desc: "Your final project. You pick your build, you complete it, and you present it live. Set your price. Walk out with a portfolio piece, a deployed tool, and everything you need to go get your first paying client." },
];

const tricks = [
  { title: "Token usage will bleed you dry if you don't understand it.", desc: "We teach you exactly how to architect prompts and workflows to cut token costs by 60 to 80 percent without sacrificing quality." },
  { title: "The right model for the right job.", desc: "Claude is not always the best choice. Neither is ChatGPT. We teach you the routing logic so you never overpay for a model doing work a cheaper one could handle better." },
  { title: "How to chain models together.", desc: "The real unlock is knowing how to pass work between models, using each one for the specific step it handles best. This is advanced technique." },
  { title: "Performance tricks the documentation never tells you.", desc: "Temperature settings, context window management, system prompt architecture, memory handling. These dials separate a slow agent from one that runs clean every time." },
  { title: "Data sovereignty is not optional for Indigenous clients.", desc: "We teach you how to deploy local models that keep every piece of data on-premise, fully private, and fully controlled." },
];

export default function AcceleratorTimeline() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX = bp === "mobile" ? "20px" : bp === "tablet" ? "40px" : "70px";
  const padY = bp === "mobile" ? "60px" : bp === "tablet" ? "72px" : "96px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
          gap: isMobile ? "60px" : isMobileOrTablet ? "60px" : "80px",
          alignItems: "start",
        }}>

          {/* Left — 6-week timeline */}
          <div>
            <FadeUp>
              <div style={{ marginBottom: isMobile ? "36px" : "48px" }}>
                <span style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
                  color: "#0150cd", textTransform: "uppercase",
                  display: "block", marginBottom: "14px",
                }}>
                  6-Week Itinerary
                </span>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: bp === "mobile" ? "28px" : "36px",
                  lineHeight: 1.1, letterSpacing: "-1.5px",
                  color: "#000000", margin: 0,
                }}>
                  What happens each week.
                </p>
              </div>
            </FadeUp>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {weeks.map((w, i) => (
                <motion.div
                  key={w.week}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{
                    display: "flex",
                    gap: "20px",
                    position: "relative",
                    paddingBottom: i < weeks.length - 1 ? "28px" : 0,
                  }}
                >
                  {/* Circle + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      border: "1.5px solid rgba(1,80,205,0.35)",
                      background: "rgba(1,80,205,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, zIndex: 1,
                    }}>
                      <span style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontWeight: 700, fontSize: "11px", color: "#0150cd",
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {i < weeks.length - 1 && (
                      <div style={{ flex: 1, width: "1px", background: "rgba(1,80,205,0.15)", marginTop: "6px" }} />
                    )}
                  </div>

                  <div style={{ paddingTop: "8px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 600, fontSize: "11px", letterSpacing: "1.2px",
                      color: "#0150cd", textTransform: "uppercase",
                    }}>
                      {w.week}
                    </span>
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 600, fontSize: isMobile ? "16px" : "18px",
                      lineHeight: 1.2, letterSpacing: "-0.8px",
                      color: "rgba(0,0,0,0.85)", margin: 0,
                    }}>
                      {w.title}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400, fontSize: "13px",
                      lineHeight: 1.65, color: "rgba(0,0,0,0.55)", margin: 0,
                    }}>
                      {w.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Tricks of the trade (sticky) */}
          <div>
            <FadeUp delay={isMobileOrTablet ? 0 : 0.12}>
              <div style={{
                position: isMobileOrTablet ? "relative" : "sticky",
                top: isMobileOrTablet ? undefined : "120px",
              }}>
                <div style={{ marginBottom: isMobile ? "28px" : "36px" }}>
                  <span style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
                    color: "#0150cd", textTransform: "uppercase",
                    display: "block", marginBottom: "14px",
                  }}>
                    Insider Knowledge
                  </span>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: bp === "mobile" ? "28px" : "36px",
                    lineHeight: 1.1, letterSpacing: "-1.5px",
                    color: "#000000", margin: 0,
                  }}>
                    Tricks of the trade.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  <div style={{ height: "1px", background: "rgba(0,0,0,0.07)" }} />
                  {tricks.map((t, i) => (
                    <motion.div
                      key={t.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      style={{
                        padding: isMobile ? "20px 0" : "24px 0",
                        borderBottom: "1px solid rgba(0,0,0,0.07)",
                        display: "flex",
                        gap: "14px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div style={{
                        width: "24px", height: "24px", borderRadius: "6px",
                        background: "rgba(1,80,205,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: "2px",
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0150cd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <div>
                        <p style={{
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          fontWeight: 600, fontSize: "15px",
                          lineHeight: 1.25, letterSpacing: "-0.5px",
                          color: "rgba(0,0,0,0.85)", margin: "0 0 4px",
                        }}>
                          {t.title}
                        </p>
                        <p style={{
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontWeight: 400, fontSize: "13px",
                          lineHeight: 1.6, color: "rgba(0,0,0,0.5)", margin: 0,
                        }}>
                          {t.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Kicker */}
                <div style={{
                  marginTop: "28px", padding: "20px 24px",
                  background: "rgba(1,80,205,0.04)",
                  border: "1px solid rgba(1,80,205,0.1)",
                  borderLeft: "3px solid #0150cd",
                  borderRadius: "0 8px 8px 0",
                }}>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600, fontSize: "15px",
                    lineHeight: 1.4, color: "rgba(0,0,0,0.8)", margin: 0,
                  }}>
                    This is knowledge from years of real builds, real clients, and real mistakes. You get it in 6 weeks.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
