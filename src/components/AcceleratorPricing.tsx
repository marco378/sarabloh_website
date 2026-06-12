"use client";

import { motion } from "framer-motion";
import { FadeUp, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const cards = [
  {
    tag: "For Youth (16–30)",
    title: "Join the Cohort",
    desc: "6 weeks. Live sessions. Real builds. You leave with a full toolkit of AI workflows, a working website, and the skills to start earning.",
    fit: [
      "You want to learn AI skills and start making money with them",
      "You have drive but no degree, no tech background, and no connections",
      "You are First Nations and ready to show up and do the work",
    ],
    price: "$497 individual · Scholarships available",
    cta: "Apply for a Seat",
    href: "mailto:browneagle@sarabloh.ca?subject=Youth Seat: First Nations AI Workforce Accelerator",
    featured: true,
    accent: "#0150cd",
  },
  {
    tag: "For Band Offices & Organizations",
    title: "Workforce Package",
    badge: "Grant-Eligible",
    desc: "We train your existing staff with AI tools built specifically for how your organization operates. Your team gets smarter. Your community gets stronger.",
    fit: [
      "You run a band office, Friendship Centre, or Indigenous nonprofit",
      "You want to upskill your staff without sending them away for months",
      "You need a program that qualifies for Indigenous workforce development funding",
    ],
    price: "From $750/seat · 5–15 participants",
    cta: "Get a Custom Quote",
    href: "mailto:browneagle@sarabloh.ca?subject=Org Workforce Package Inquiry",
    featured: false,
    accent: "#0d9488",
  },
  {
    tag: "For Businesses & SMEs",
    title: "Train Your Team",
    badge: "ROI-Focused",
    desc: "Your staff leave with working AI systems built around your actual business. Not theory. Not slides. Automation that runs the moment training ends.",
    fit: [
      "You want your staff to stop wasting time on manual tasks AI can handle",
      "You need results fast, not a 6-month IT project",
      "You run a clinic, trades company, retail shop, or growing SME",
    ],
    price: "$10,000–$15,000 full cohort · Up to 15 staff",
    cta: "Book a Discovery Call",
    href: "mailto:browneagle@sarabloh.ca?subject=Business Training Package",
    featured: false,
    accent: "#7c3aed",
  },
];

export default function AcceleratorPricing() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX = bp === "mobile" ? "20px" : bp === "tablet" ? "40px" : "70px";
  const padY = bp === "mobile" ? "60px" : bp === "tablet" ? "72px" : "96px";

  return (
    <section id="pricing" style={{ background: "rgb(2,10,24)", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        <FadeUp>
          <div style={{ marginBottom: isMobile ? "40px" : "56px" }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
              color: "rgba(1,80,205,0.6)", textTransform: "uppercase",
              display: "block", marginBottom: "14px",
            }}>
              Get Started
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: bp === "mobile" ? "32px" : bp === "tablet" ? "44px" : "56px",
              lineHeight: 1.05, letterSpacing: bp === "mobile" ? "-1.4px" : "-2.8px",
              color: "#fffbf2", margin: 0,
            }}>
              This is for people{" "}
              <span style={{ color: "rgba(255,251,242,0.3)" }}>who are serious.</span>
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400, fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.65, color: "rgba(255,251,242,0.45)",
              margin: "14px 0 0", maxWidth: "540px",
            }}>
              Read each option below and pick the one that describes you. Go-hard only.
            </p>
          </div>
        </FadeUp>

        {/* 3 cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isMobileOrTablet ? "1fr" : "1fr 1fr 1fr",
          gap: isMobile ? "16px" : "20px",
        }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: card.featured
                  ? `2px solid ${card.accent}`
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div style={{
                padding: isMobile ? "24px 24px 20px" : "28px 32px 24px",
                background: card.featured ? card.accent : "transparent",
                borderBottom: card.featured
                  ? undefined
                  : `3px solid ${card.accent}`,
              }}>
                <span style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 700, fontSize: "10px", letterSpacing: "1.5px",
                  color: card.featured ? "rgba(255,255,255,0.7)" : card.accent,
                  textTransform: "uppercase",
                  display: "block", marginBottom: "10px",
                }}>
                  {card.tag}
                </span>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600, fontSize: isMobile ? "20px" : "22px",
                  lineHeight: 1.15, letterSpacing: "-0.8px",
                  color: card.featured ? "#ffffff" : "#fffbf2",
                  margin: 0,
                }}>
                  {card.title}
                </p>
                {card.badge && (
                  <span style={{
                    display: "inline-block", marginTop: "10px",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 700, fontSize: "10px", letterSpacing: "1px",
                    color: card.accent, textTransform: "uppercase",
                    background: `${card.accent}18`,
                    padding: "4px 10px", borderRadius: "4px",
                  }}>
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div style={{
                padding: isMobile ? "24px 24px 28px" : "28px 32px 32px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}>
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400, fontSize: "14px",
                  lineHeight: 1.65, color: "rgba(255,251,242,0.5)",
                  margin: "0 0 20px",
                }}>
                  {card.desc}
                </p>

                <span style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 700, fontSize: "10px", letterSpacing: "1px",
                  color: "rgba(255,251,242,0.3)", textTransform: "uppercase",
                  display: "block", marginBottom: "10px",
                }}>
                  This is you if:
                </span>

                <div style={{
                  display: "flex", flexDirection: "column", gap: "0",
                  marginBottom: "20px",
                }}>
                  {card.fit.map((f, j) => (
                    <div key={j} style={{
                      display: "flex", gap: "10px", alignItems: "flex-start",
                      padding: "8px 0",
                      borderBottom: j < card.fit.length - 1 ? "1px solid rgba(255,255,255,0.05)" : undefined,
                    }}>
                      <span style={{ color: card.accent, fontWeight: 700, flexShrink: 0, fontSize: "12px", marginTop: "2px" }}>✓</span>
                      <p style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400, fontSize: "13px",
                        lineHeight: 1.5, color: "rgba(255,251,242,0.55)", margin: 0,
                      }}>
                        {f}
                      </p>
                    </div>
                  ))}
                </div>

                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 700, fontSize: "13px",
                  color: card.accent, margin: "0 0 20px",
                }}>
                  {card.price}
                </p>

                <AnimatedButton
                  href={card.href}
                  style={{
                    background: card.accent,
                    color: "#ffffff",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 700, fontSize: "13px",
                    letterSpacing: "0.5px", textTransform: "uppercase",
                    padding: "14px 24px", borderRadius: "4px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    whiteSpace: "nowrap", marginTop: "auto",
                  }}
                >
                  {card.cta} →
                </AnimatedButton>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
