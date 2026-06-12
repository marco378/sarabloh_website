"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const outcomes = [
  { title: "A Live Website Ready to Show", desc: "Built by you. Deployed. The first thing you show any client." },
  { title: "Working AI Workflows to Sell", desc: "Automations businesses pay for every month. Already built. Yours to offer." },
  { title: "Everything to Start Earning", desc: "Scripts, systems, platforms all set up. You just need to pick up the phone." },
];

const examples = [
  "AI Inbox Manager: built, tested, and ready to deploy for any client",
  "Smart Cancellation Automation: reduce churn for real businesses automatically",
  "Client Websites: built live, on screen, every click visible",
  "Client Outreach Templates and Scripts: ready to use, ready to send",
  "n8n Workflow Automation: build, test, deploy, and break it (then fix it)",
  "AI Agents for Local Business: real use cases, real clients, real money",
];

const testimonials = [
  {
    quote: "The Web3 & AI course has been a great learning experience. The support and feedback have been excellent and very helpful. I look forward to taking on new challenges and opportunities.",
    name: "Paul G.",
    role: "Program participant",
  },
  {
    quote: "Finished Chapter 1. Got 80% on the quiz. Already learning the differences between LLMs and prompt engineering. Learned quite a bit so far.",
    name: "Ru D.S.",
    role: "Program participant",
  },
];

export default function AcceleratorLive() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX = bp === "mobile" ? "20px" : bp === "tablet" ? "40px" : "70px";
  const padY = bp === "mobile" ? "60px" : bp === "tablet" ? "72px" : "96px";

  return (
    <section style={{ background: "#f7f9fc", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Header */}
        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? "20px" : "80px",
            alignItems: "end",
            marginBottom: isMobile ? "44px" : "64px",
          }}>
            <div>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
                color: "#0150cd", textTransform: "uppercase",
                display: "block", marginBottom: "14px",
              }}>
                How We Do It
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: bp === "mobile" ? "32px" : bp === "tablet" ? "44px" : "52px",
                lineHeight: 1.05, letterSpacing: bp === "mobile" ? "-1.4px" : "-2.6px",
                color: "#000000", margin: 0,
              }}>
                Live. Together.{" "}
                <span style={{ color: "#0150cd" }}>Real time.</span>
              </p>
            </div>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400, fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.7, color: "rgba(0,0,0,0.55)", margin: 0,
            }}>
              This is not a recorded course you watch alone and give up on by day three. We do this live. I show you my screen. You see every click, every setup, every mistake. When something breaks, we fix it on screen together.
            </p>
          </div>
        </FadeUp>

        {/* Pull quote */}
        <FadeUp delay={0.08}>
          <div style={{
            background: "rgba(1,80,205,0.05)",
            borderLeft: "4px solid #0150cd",
            borderRadius: "0 12px 12px 0",
            padding: isMobile ? "28px 24px" : "36px 44px",
            marginBottom: isMobile ? "44px" : "60px",
          }}>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600, fontSize: isMobile ? "17px" : "20px",
              lineHeight: 1.45, color: "rgba(0,0,0,0.8)", margin: 0,
            }}>
              Think of it like learning to drive. I am not going to explain how the engine works. I am going to put you in the driver&apos;s seat, sit right next to you, and we are going to drive until you do not need me anymore.
            </p>
          </div>
        </FadeUp>

        {/* 3 outcome cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
          gap: isMobile ? "12px" : "16px",
          marginBottom: isMobile ? "56px" : "72px",
        }}>
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: "14px",
                padding: isMobile ? "28px 24px" : "36px 32px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(1,80,205,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "4px",
              }}>
                <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: "14px", color: "#0150cd" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600, fontSize: "17px",
                lineHeight: 1.2, letterSpacing: "-0.6px",
                color: "rgba(0,0,0,0.88)", margin: 0,
              }}>
                {o.title}
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400, fontSize: "14px",
                lineHeight: 1.6, color: "rgba(0,0,0,0.5)", margin: 0,
              }}>
                {o.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Examples grid */}
        <FadeUp delay={0.1}>
          <div style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "14px",
            padding: isMobile ? "28px 24px" : "40px 40px",
            marginBottom: isMobile ? "56px" : "72px",
          }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600, fontSize: "10px", letterSpacing: "2px",
              color: "#0150cd", textTransform: "uppercase",
              display: "block", marginBottom: "20px",
            }}>
              What We Build Live: Real Examples
            </span>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "10px",
            }}>
              {examples.map((ex, i) => (
                <div key={i} style={{
                  display: "flex", gap: "10px", alignItems: "flex-start",
                  padding: "12px 16px",
                  background: "rgba(1,80,205,0.03)",
                  borderRadius: "8px",
                }}>
                  <span style={{ color: "#0150cd", fontWeight: 700, flexShrink: 0, marginTop: "1px", fontSize: "13px" }}>→</span>
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400, fontSize: "14px",
                    lineHeight: 1.55, color: "rgba(0,0,0,0.65)", margin: 0,
                  }}>
                    {ex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Testimonials */}
        <FadeUp delay={0.1}>
          <div style={{ marginBottom: "12px" }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
              color: "#0150cd", textTransform: "uppercase",
              display: "block", marginBottom: "14px",
            }}>
              Student Results
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600, fontSize: bp === "mobile" ? "24px" : "30px",
              lineHeight: 1.1, letterSpacing: "-1.2px",
              color: "#000000", margin: "0 0 24px",
            }}>
              Real people. Real outcomes.
            </p>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "12px" : "16px",
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                borderLeft: "3px solid #0150cd",
                borderRadius: "0 14px 14px 0",
                padding: isMobile ? "28px 24px" : "36px 36px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400, fontSize: "15px",
                lineHeight: 1.7, fontStyle: "italic",
                color: "rgba(0,0,0,0.65)", margin: 0,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 700, fontSize: "13px",
                  letterSpacing: "0.5px", color: "#0150cd", margin: 0,
                }}>
                  {t.name}
                </p>
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400, fontSize: "12px",
                  color: "rgba(0,0,0,0.4)", margin: "2px 0 0",
                }}>
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
