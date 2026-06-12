"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const tools = [
  { name: "Claude (Anthropic)", desc: "The AI you will use most. Write prompts, build agents, automate decisions." },
  { name: "ChatGPT (OpenAI)", desc: "The most recognized AI in the world. You will know it inside out." },
  { name: "DeepSeek", desc: "Powerful open-weight model. Runs locally, costs almost nothing to operate." },
  { name: "Grok (xAI)", desc: "Real-time data and a different reasoning style. We cover when Grok outperforms everything else." },
  { name: "Hermes & Local Models", desc: "Open-source AI on your own machine. No subscription. Essential for Indigenous data sovereignty." },
  { name: "n8n (Workflow Automation)", desc: "The engine that connects everything. Build automations that run your business while you sleep." },
  { name: "Claude Code & IDEs", desc: "Build and deploy real tools without being a developer. Ship it. Sell it." },
  { name: "GitHub", desc: "Your library. Where your templates and workflows live, organized and ready to duplicate." },
  { name: "Website Builders & Hosting", desc: "Build a live client website from scratch, get it on a real server, and hand it over." },
  { name: "Google Workspace Automation", desc: "Automate your Drive, Gmail, Sheets, and Docs so your business stops relying on manual work." },
];

export default function AcceleratorTools() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();
  const [hovered, setHovered] = useState<number | null>(null);

  const padX = bp === "mobile" ? "20px" : bp === "tablet" ? "40px" : "70px";
  const padY = bp === "mobile" ? "60px" : bp === "tablet" ? "72px" : "96px";

  return (
    <section style={{ background: "rgb(2,10,24)", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        <FadeUp>
          <div style={{ marginBottom: isMobile ? "40px" : "56px" }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
              color: "rgba(1,80,205,0.6)", textTransform: "uppercase",
              display: "block", marginBottom: "14px",
            }}>
              The Tools
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: bp === "mobile" ? "32px" : bp === "tablet" ? "44px" : "56px",
              lineHeight: 1.05, letterSpacing: bp === "mobile" ? "-1.4px" : "-2.8px",
              color: "#fffbf2", margin: 0,
            }}>
              What you will actually use.{" "}
              <span style={{ color: "rgba(255,251,242,0.3)" }}>Plain and simple.</span>
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400, fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.65, color: "rgba(255,251,242,0.45)",
              margin: "14px 0 0", maxWidth: "480px",
            }}>
              No jargon. No tech spec sheets. Every platform we cover and what it does for you in the real world.
            </p>
          </div>
        </FadeUp>

        {/* Tools list — full-width rows with hover */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
              onHoverStart={() => !isMobile && setHovered(i)}
              onHoverEnd={() => !isMobile && setHovered(null)}
              style={{ position: "relative" }}
            >
              <motion.div
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ position: "absolute", inset: 0, background: "rgba(1,80,205,0.06)", pointerEvents: "none" }}
              />
              <div style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: isMobile ? "40px 1fr" : "56px 200px 1fr",
                gap: isMobile ? "14px" : "24px",
                alignItems: "center",
                padding: isMobile ? "20px 0" : "24px 16px",
              }}>
                {/* Number */}
                <span style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 700, fontSize: isMobile ? "14px" : "16px",
                  color: hovered === i ? "#0150cd" : "rgba(1,80,205,0.3)",
                  transition: "color 0.25s",
                  textAlign: "center",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name */}
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600, fontSize: isMobile ? "16px" : "17px",
                  lineHeight: 1.2, letterSpacing: "-0.5px",
                  color: hovered === i ? "#0150cd" : "#fffbf2",
                  margin: 0, transition: "color 0.25s",
                }}>
                  {t.name}
                </p>

                {/* Desc — desktop only inline */}
                {!isMobile && (
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400, fontSize: "14px",
                    lineHeight: 1.6, color: "rgba(255,251,242,0.45)",
                    margin: 0,
                  }}>
                    {t.desc}
                  </p>
                )}
              </div>

              {/* Desc — mobile below */}
              {isMobile && (
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400, fontSize: "13px",
                  lineHeight: 1.6, color: "rgba(255,251,242,0.4)",
                  margin: "0 0 16px", paddingLeft: "54px",
                }}>
                  {t.desc}
                </p>
              )}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <FadeUp delay={0.15}>
          <p style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400, fontSize: "14px",
            lineHeight: 1.65, color: "rgba(255,251,242,0.3)",
            margin: "32px 0 0", maxWidth: "520px",
          }}>
            We do not chase every new tool that launches. We go deep on the ones that actually make money.
          </p>
        </FadeUp>

      </div>
    </section>
  );
}
