"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const cards = [
  {
    title: "Your AI Executive Assistant",
    desc: "We connect all your apps —> email, calendar, phone, Notion, social media —> into one system that runs your business for you. Client emails you? AI reads it, creates a task, sends a reply, and schedules follow-up. All automatic.",
  },
  {
    title: "AI Automation That Pays",
    desc: "Tools that run 24/7 without you: sorting emails, sending contracts, following up with clients, posting content. Real businesses pay $500 to $2,000 per month for these systems. You build them in this program.",
  },
  {
    title: "Build & Launch Client Websites",
    desc: "Not just design. The whole thing. Build it, set up hosting, deploy it live on a real server, hand it to a paying client. By week 3 you'll have done it yourself, start to finish.",
  },
  {
    title: "Your Capstone: Something Real",
    desc: "You leave with an actual working system you built yourself. An AI assistant. An automation. A live website. Not a certificate. Something you can show a client tomorrow and charge for.",
  },
];

export default function AcceleratorCurriculum() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX = bp === "mobile" ? "20px" : bp === "tablet" ? "40px" : "70px";
  const padY = bp === "mobile" ? "60px" : bp === "tablet" ? "72px" : "96px";

  return (
    <section id="curriculum" style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Header */}
        <FadeUp>
          <div style={{ marginBottom: isMobile ? "40px" : "60px" }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
              color: "#0150cd", textTransform: "uppercase",
              display: "block", marginBottom: "14px",
            }}>
              Curriculum
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: bp === "mobile" ? "32px" : bp === "tablet" ? "44px" : "56px",
              lineHeight: 1.05, letterSpacing: bp === "mobile" ? "-1.4px" : "-2.8px",
              color: "#000000", margin: 0,
            }}>
              What you learn.{" "}
              <span style={{ color: "rgba(0,0,0,0.3)" }}>What you build.</span>
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400, fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.65, color: "rgba(0,0,0,0.55)",
              margin: "16px 0 0", maxWidth: "520px",
            }}>
              No theory first. We start building on day one. Everything we make is real and sellable.
            </p>
          </div>
        </FadeUp>

        {/* Callout box */}
        <FadeUp delay={0.08}>
          <div style={{
            background: "rgba(1,80,205,0.03)",
            border: "1px solid rgba(1,80,205,0.12)",
            borderLeft: "4px solid #0150cd",
            borderRadius: "0 12px 12px 0",
            padding: isMobile ? "28px 24px" : "36px 40px",
            marginBottom: isMobile ? "36px" : "48px",
          }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600, fontSize: "10px", letterSpacing: "2px",
              color: "#0150cd", textTransform: "uppercase",
              display: "block", marginBottom: "12px",
            }}>
              What We Actually Teach
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500, fontSize: isMobile ? "17px" : "19px",
              lineHeight: 1.5, color: "#000000", margin: "0 0 10px",
            }}>
              We go through every concept that makes an AI agent and how to build agents that run complete departments of your life and your company, from any AI platform.
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400, fontSize: "15px",
              lineHeight: 1.65, color: "rgba(0,0,0,0.55)", margin: 0,
            }}>
              You will understand the difference between AI chat models and AI agents, and know exactly when to use each one. Most people using AI today have no idea that distinction even exists. You will. That puts you miles ahead of the competition.
            </p>
          </div>
        </FadeUp>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "12px" : "16px",
        }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
              whileHover={isMobile ? undefined : { y: -3, boxShadow: "0 12px 32px rgba(1,80,205,0.08)" }}
              style={{
                background: "rgba(1,80,205,0.03)",
                border: "1px solid rgba(1,80,205,0.1)",
                borderRadius: "14px",
                padding: isMobile ? "28px 24px" : "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 700, fontSize: "11px", letterSpacing: "1.5px",
                color: "rgba(1,80,205,0.5)", textTransform: "uppercase",
              }}>
                Module {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600, fontSize: isMobile ? "18px" : "20px",
                lineHeight: 1.15, letterSpacing: "-0.8px",
                color: "rgba(0,0,0,0.88)", margin: 0,
              }}>
                {c.title}
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400, fontSize: "14px",
                lineHeight: 1.7, color: "rgba(0,0,0,0.55)", margin: 0,
              }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
