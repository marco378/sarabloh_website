"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FadeUp, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const cards = [
  {
    lottie: "/lottie/digital-skills.json",
    title: "Digital Skills & Workforce Training",
    desc: "Practical training programs that give people the digital skills employers are looking for. From AI tools to digital marketing to online operations. No jargon. No barriers. Real skills for real jobs.",
  },
  {
    lottie: "/lottie/transform-business.json",
    title: "Transform Your Business",
    desc: "Transform your business with the power of artificial intelligence and blockchain technology. Unlock data value, enhance security, and build scalable systems to thrive in the digital landscape.",
  },
  {
    lottie: "/lottie/mobility.json",
    title: "Mobility Solutions",
    desc: "Redefine urban transport with our advanced mobility solutions. Real-time analytics, flexible pricing, and advanced safety features for users, drivers, and administrators alike.",
  },
  {
    lottie: "/lottie/indigenous-tech.json",
    title: "Indigenous Tech Education",
    desc: "AI camps, community app development, and digital workforce programs built with First Nations communities — from Pukatawagan to Winnipeg. Laptops, devices, and 6–8 month paid internship pathways included.",
  },
  {
    lottie: "/lottie/safety-tech.json",
    title: "Nation-Owned Safety Technology",
    desc: "Real-time monitoring, incident logging, repeat-offender tracking, and community safety dashboards built specifically for First Nations peace officers and leadership. Your data never leaves your hands.",
  },
  {
    lottie: "/lottie/ai-marketing.json",
    title: "AI-Powered Marketing",
    desc: "Social content strategy, community management, and AI-powered campaign execution for local businesses and organizations across Manitoba and beyond.",
  },
];

// Cache Lottie JSON so it's only fetched once per icon
const lottieCache: Record<string, object> = {};

// CSS filter that converts the icon's colored parts to #0150CD
// (brightness(0) strips original color to black, then sepia+hue-rotate maps to brand blue)
const BRAND_FILTER =
  "brightness(0) saturate(100%) invert(22%) sepia(96%) saturate(2100%) hue-rotate(206deg) brightness(93%) contrast(104%)";

function LottieIcon({ src }: { src: string }) {
  const [data, setData] = useState<object | null>(lottieCache[src] || null);

  useEffect(() => {
    if (lottieCache[src]) return;
    fetch(src)
      .then((r) => r.json())
      .then((d) => { lottieCache[src] = d; setData(d); })
      .catch(() => {});
  }, [src]);

  if (!data) return <div style={{ width: 52, height: 52 }} />;

  return (
    <div style={{ filter: BRAND_FILTER, width: 52, height: 52, flexShrink: 0 }}>
      <Lottie
        animationData={data}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}

// Arrow button shared style
function ArrowBtn({
  dir,
  disabled,
  onClick,
}: {
  dir: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Previous" : "Next"}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid rgba(1,80,205,0.25)",
        background: disabled ? "rgba(1,80,205,0.04)" : "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        flexShrink: 0,
        transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
        boxShadow: disabled ? "none" : "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={disabled ? "rgba(1,80,205,0.3)" : "#0150cd"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {dir === "left"
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

export default function Services() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const cardW = isMobile ? 272 : 318;
  const cardGap = 10;
  const stepPx = cardW + cardGap;

  const syncIdx = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setActiveIdx(Math.round(el.scrollLeft / stepPx));
  }, [stepPx]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncIdx, { passive: true });
    syncIdx();
    return () => el.removeEventListener("scroll", syncIdx);
  }, [syncIdx]);

  const scrollTo = (idx: number) => {
    trackRef.current?.scrollTo({ left: idx * stepPx, behavior: "smooth" });
  };

  const canPrev = activeIdx > 0;
  const canNext = activeIdx < cards.length - 1;

  const headingSize = bp === "mobile" ? "36px" : bp === "tablet" ? "48px" : "70px";
  const headingTracking = bp === "mobile" ? "-1.4px" : bp === "tablet" ? "-2px" : "-3.5px";
  const padX = bp === "mobile" ? "20px" : bp === "tablet" ? "40px" : "70px";
  const padY = bp === "mobile" ? "60px" : bp === "tablet" ? "72px" : "96px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>

        {/* ── Header row ── */}
        <div style={{
          paddingLeft: padX,
          paddingRight: padX,
          display: "flex",
          flexDirection: isMobileOrTablet ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: isMobileOrTablet ? "24px" : "40px",
          marginBottom: isMobile ? "28px" : "44px",
        }}>
          <FadeUp>
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 400, fontSize: headingSize, lineHeight: 0.96, letterSpacing: headingTracking, color: "#000000", margin: 0 }}>
                Built for
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: headingSize, lineHeight: 0.96, letterSpacing: headingTracking, color: "#0150cd", margin: 0 }}>
                real-world impact
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: isMobileOrTablet ? "100%" : "615px" }}>
              <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: isMobile ? "16px" : "20px", lineHeight: 1.5, letterSpacing: "-0.2px", color: "#000000", margin: 0 }}>
                Every product, program, and partnership is designed to create measurable outcomes for communities, businesses, and individuals.
              </p>

              {/* Button + arrows on the same row (desktop) */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <AnimatedButton
                  href="/contact"
                  fullWidthMobile
                  style={{ background: "#0150cd", color: "#ffffff", fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: 1.5, letterSpacing: "-0.48px", padding: "10px 22px", borderRadius: "4px", display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}
                >
                  Get Started
                </AnimatedButton>

                {/* Prev / Next arrows — in the header, never over the cards */}
                {!isMobile && (
                  <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
                    <ArrowBtn dir="left" disabled={!canPrev} onClick={() => scrollTo(activeIdx - 1)} />
                    <ArrowBtn dir="right" disabled={!canNext} onClick={() => scrollTo(activeIdx + 1)} />
                  </div>
                )}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* ── Scrollable card track ── */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: `${cardGap}px`,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: padX,
            WebkitOverflowScrolling: "touch",
            paddingLeft: padX,
            paddingRight: padX,
            paddingTop: "8px",
            paddingBottom: "24px",
            /* Hide scrollbar */
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {/* Right-side fade sentinel so last card isn't flush against edge */}
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={!isMobile ? { y: -6, boxShadow: "0 12px 32px rgba(1,80,205,0.12)" } : undefined}
              style={{
                flexShrink: 0,
                width: `${cardW}px`,
                scrollSnapAlign: "start",
                background: "rgba(1,80,205,0.03)",
                border: "1px solid rgba(1,80,205,0.3)",
                borderRadius: "10px",
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "34px",
              }}
            >
              {/* Icon box */}
              <div style={{
                background: "rgba(1,80,205,0.08)",
                borderRadius: "8px",
                width: "48px",
                height: "47px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <LottieIcon src={card.lottie} />
              </div>

              {/* Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: "20px", lineHeight: 1.1, letterSpacing: "-1px", color: "rgba(0,0,0,0.8)", margin: 0 }}>
                  {card.title}
                </p>
                <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: 1.5, color: "rgba(0,0,0,0.7)", margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Dot indicators ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "20px", paddingLeft: padX, paddingRight: padX }}>
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to card ${i + 1}`}
              style={{
                width: i === activeIdx ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === activeIdx ? "#0150cd" : "rgba(1,80,205,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
