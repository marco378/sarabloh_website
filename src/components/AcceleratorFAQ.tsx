"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const faqs = [
  { q: "Do I need coding skills or a tech background?", a: "No. We use no-code and low-code tools the whole way through. If you can use a smartphone you can do this. Brown Eagle built his entire business without a single line of code." },
  { q: "What do I need to bring?", a: "A laptop and a working internet connection. We will walk you through every account setup and install on day one." },
  { q: "How many hours per week does this take?", a: "Plan for 8 to 10 hours per week. That includes live sessions plus your own build time. If you put in the time, you will have real tools built by the end." },
  { q: "What if I miss a live session?", a: "Every session is recorded. You can watch it back, catch up, and still complete the builds. We are not leaving anyone behind who is actually trying." },
  { q: "Are scholarships available?", a: "Yes. Apply and tell us your situation. We review every application individually. No one gets turned away because of money if they have the drive to show up and do the work." },
  { q: "I am over 30. Can I still apply?", a: "The youth cohort is designed for ages 16 to 30. If you are outside that range, contact us directly. We have options and we want to find a way to work with you." },
  { q: "Is this online or in person?", a: "Both. The core program is live online sessions you can join from anywhere. There are also intensive in-person camps in Winnipeg for those who can attend." },
  { q: "Do I walk away with a certificate?", a: "You walk away with something better. A working AI system. A deployed website. A library of tools ready to sell. Certificates do not pay bills. Your builds do." },
  { q: "We are a band office. Can we get training for our team?", a: "Yes. We offer custom workforce packages built around your team and your organization's specific needs. This qualifies for Indigenous workforce development funding." },
  { q: "When does the first cohort start?", a: "Cohort 1 opens Fall 2026. Seats are limited to 15 per cohort. Join the waitlist now to hold your spot and be first to know when enrollment opens." },
];

export default function AcceleratorFAQ() {
  const { bp, isMobile } = useBreakpoint();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const padX = bp === "mobile" ? "20px" : bp === "tablet" ? "40px" : "70px";
  const padY = bp === "mobile" ? "60px" : bp === "tablet" ? "72px" : "96px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "56px" }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600, fontSize: "11px", letterSpacing: "2px",
              color: "#0150cd", textTransform: "uppercase",
              display: "block", marginBottom: "14px",
            }}>
              Common Questions
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: bp === "mobile" ? "30px" : "42px",
              lineHeight: 1.1, letterSpacing: "-1.8px",
              color: "#000000", margin: 0,
            }}>
              Straight answers.{" "}
              <span style={{ color: "rgba(0,0,0,0.3)" }}>No runaround.</span>
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                style={{
                  borderTop: i === 0 ? "1px solid rgba(0,0,0,0.08)" : undefined,
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    padding: isMobile ? "20px 0" : "24px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600, fontSize: isMobile ? "16px" : "17px",
                    lineHeight: 1.3, letterSpacing: "-0.5px",
                    color: isOpen ? "#0150cd" : "rgba(0,0,0,0.85)",
                    margin: 0, transition: "color 0.2s",
                  }}>
                    {faq.q}
                  </p>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      flexShrink: 0,
                      width: "24px", height: "24px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "20px", fontWeight: 300,
                      color: isOpen ? "#0150cd" : "rgba(0,0,0,0.3)",
                    }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400, fontSize: "15px",
                        lineHeight: 1.7, color: "rgba(0,0,0,0.55)",
                        margin: 0,
                        paddingBottom: isMobile ? "20px" : "24px",
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
