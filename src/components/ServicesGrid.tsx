"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

/* ── Icons ──────────────────────────────────────────────── */

function IconAI() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="8" height="8" rx="2" stroke="#0150cd" strokeWidth="1.8"/>
      <rect x="16" y="4" width="8" height="8" rx="2" stroke="#0150cd" strokeWidth="1.8"/>
      <rect x="4" y="16" width="8" height="8" rx="2" stroke="#0150cd" strokeWidth="1.8"/>
      <rect x="16" y="16" width="8" height="8" rx="2" stroke="#0150cd" strokeWidth="1.8"/>
      <path d="M12 8h4M8 12v4M20 12v4M12 20h4" stroke="#0150cd" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IconBlockchain() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="10" width="7" height="8" rx="2" stroke="#0150cd" strokeWidth="1.8"/>
      <rect x="11" y="6" width="7" height="8" rx="2" stroke="#0150cd" strokeWidth="1.8"/>
      <rect x="19" y="10" width="7" height="8" rx="2" stroke="#0150cd" strokeWidth="1.8"/>
      <rect x="11" y="16" width="7" height="8" rx="2" stroke="#0150cd" strokeWidth="1.8"/>
      <path d="M10 14h1M18 14h1M14.5 14v2M14.5 10v2" stroke="#0150cd" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IconMobility() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="11" r="4.5" stroke="#0150cd" strokeWidth="1.8"/>
      <path d="M14 5C9.582 5 6 8.582 6 13c0 6 8 14 8 14s8-8 8-14c0-4.418-3.582-8-8-8z" stroke="#0150cd" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}

function IconTraining() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 5L4 10l10 5 10-5-10-5z" stroke="#0150cd" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M4 10v6M24 10v6" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 12.5v5c0 2 2.686 3.5 6 3.5s6-1.5 6-3.5v-5" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IconMarketing() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10.5h3l11-5v17l-11-5H5v-7z" stroke="#0150cd" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M8 10.5v7" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 17.5l2 4.5" stroke="#0150cd" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 10c1.5.8 2.5 2.3 2.5 4s-1 3.2-2.5 4" stroke="#0150cd" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IconNations() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 3l8 3.5V14c0 4.5-3.5 8.5-8 9.5C9.5 22.5 6 18.5 6 14V6.5L14 3z" stroke="#0150cd" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="14" cy="13" r="3" stroke="#0150cd" strokeWidth="1.6"/>
      <path d="M14 10V7M14 19v-3M17 13h3M8 13h3" stroke="#0150cd" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────── */

const services = [
  {
    Icon: IconAI,
    category: "AI App Development",
    title: "Custom AI Solutions",
    desc: "Custom AI-powered applications built for Manitoba businesses. Quote generators, dispatch tools, customer intake systems, knowledge management. Whatever the problem, we scope it, build it, and deliver it.",
  },
  {
    Icon: IconBlockchain,
    category: "Blockchain & Web3",
    title: "Blockchain & Emerging Technology",
    desc: "Training and implementation for organizations exploring blockchain and Web3. From governance frameworks to workforce development. Backed by years of real-world experience with communities and businesses.",
  },
  {
    Icon: IconMobility,
    category: "Mobility",
    title: "Mobility Solutions",
    desc: "Smart transportation applications with real-time analytics, dynamic pricing, safety monitoring, and administrative dashboards. Built for urban and rural mobility needs across Manitoba and beyond.",
  },
  {
    Icon: IconTraining,
    category: "Training & Workforce",
    title: "Digital Skills Training",
    desc: "Workforce programs, cohort training, and AI literacy workshops for businesses, schools, First Nations communities, and newcomers. Delivered in-person or hybrid. Funded through government grants where eligible.",
  },
  {
    Icon: IconMarketing,
    category: "Marketing",
    title: "AI-Powered Marketing",
    desc: "Social content strategy, community management, and AI-powered campaign execution for local businesses and organizations. We create, schedule, and manage so you can focus on running your business.",
  },
  {
    Icon: IconNations,
    category: "Nations Forward",
    title: "Indigenous Digital Programs",
    desc: "Our flagship Indigenous technology initiative. AI camps, community app development, digital skills training, and paid work placements for Indigenous youth. Built for and with First Nations communities. Equipment included. No experience needed.",
  },
];

/* ── Component ─────────────────────────────────────────────── */

export default function ServicesGrid() {
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

  const gridCols =
    isMobile ? "1fr" :
    isMobileOrTablet ? "1fr 1fr" :
    "repeat(3, 1fr)";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Section heading */}
        <FadeUp>
          <div style={{
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: isMobileOrTablet ? "16px" : "40px",
            marginBottom: isMobile ? "36px" : "52px",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: headingSize,
                lineHeight: 0.96,
                letterSpacing: headingTracking,
                color: "#000000",
                margin: 0,
              }}>
                Everything you
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
                need to grow.
              </p>
            </div>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "20px",
              lineHeight: 1.5,
              letterSpacing: "-0.2px",
              color: "rgba(0,0,0,0.7)",
              margin: 0,
              maxWidth: "520px",
              alignSelf: "flex-end",
            }}>
              Every service is scoped and delivered to solve a real problem — no generic packages, no guesswork.
            </p>
          </div>
        </FadeUp>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: isMobile ? "12px" : "10px",
          }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: isMobile ? i * 0.06 : (i % (isMobileOrTablet ? 2 : 3)) * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={!isMobile ? {
                y: -6,
                boxShadow: "0 12px 32px rgba(1,80,205,0.12)",
              } : undefined}
              style={{
                background: "rgba(1,80,205,0.03)",
                border: "1px solid rgba(1,80,205,0.3)",
                borderRadius: "10px",
                padding: isMobile ? "20px" : "24px 26px",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                cursor: "default",
              }}
            >
              {/* Icon box — same as landing page Services + About Values */}
              <div style={{
                background: "rgba(1,80,205,0.08)",
                borderRadius: "8px",
                width: "48px",
                height: "47px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <svc.Icon />
              </div>

              {/* Text stack */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {/* Category eyebrow */}
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "11px",
                  lineHeight: 1.5,
                  letterSpacing: "1.5px",
                  color: "#0150cd",
                  textTransform: "uppercase",
                  margin: 0,
                }}>
                  {svc.category}
                </p>

                {/* Title */}
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                  color: "rgba(0,0,0,0.85)",
                  margin: 0,
                }}>
                  {svc.title}
                </p>

                {/* Body */}
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(0,0,0,0.65)",
                  margin: 0,
                }}>
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
