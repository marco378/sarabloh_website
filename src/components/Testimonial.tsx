"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const testimonials = [
  {
    name: "Brown Eagle",
    role: "Operations Lead, Sarabloh Technologies",
    quote: "“A 16-year-old from Pukatawagan built a working app in three days. That’s not potential. That’s proof.”",
    avatar: "/images/brown.png",
    avatarLeft: "/images/santosh.png",
    avatarRight: "/images/jaskanwar.png",
  },
  {
    name: "Jaskanwar Singh",
    role: "Operations Lead, Sarabloh Technologies",
    quote: '"We don\'t just teach technology, we build the bridge between innovation and the communities that need it most."',
    avatar: "/images/jaskanwar.png",
    avatarLeft: "/images/brown.png",
    avatarRight: "/images/santosh.png",
  },
  {
    name: "Santokh Singh Randhawa",
    role: "Co-Founder · Community & Partnerships",
    quote: '"Every partnership we build is rooted in trust, shaped by community, and designed to create lasting change."',
    avatar: "/images/santosh.png",
    avatarLeft: "/images/jaskanwar.png",
    avatarRight: "/images/brown.png",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, filter: "blur(4px)" }),
  center: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, filter: "blur(4px)" }),
};

export default function Testimonial() {
  const { bp, isMobile } = useBreakpoint();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const quoteSize =
    bp === "mobile" ? "22px" :
    bp === "tablet" ? "28px" :
    "34px";

  const quoteTracking =
    bp === "mobile" ? "-0.8px" : "-1.7px";

  const goTo = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex(next);
  }, []);

  const prev = useCallback(() => {
    goTo((index - 1 + testimonials.length) % testimonials.length, -1);
  }, [index, goTo]);

  const next = useCallback(() => {
    goTo((index + 1) % testimonials.length, 1);
  }, [index, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => next(), 5000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[index];

  return (
    <section
      style={{
        width: "100%",
        minHeight: isMobile ? "400px" : "562px",
        backgroundImage: "url(/images/testimonial-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: isMobile ? "20px" : "40px",
        paddingRight: isMobile ? "20px" : "40px",
        paddingTop: isMobile ? "48px" : "0",
        paddingBottom: isMobile ? "48px" : "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Prev / Next arrow buttons */}
      {!isMobile && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: "32px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next"
            style={{
              position: "absolute",
              right: "32px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? "28px" : "40px", maxWidth: "700px", width: "100%" }}>

        {/* Avatar cluster — slides with direction */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`avatar-${index}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", width: "200px" }}>
              {/* Three overlapping avatars */}
              <div style={{ position: "relative", width: "200px", height: "91px" }}>
                <div style={{ position: "absolute", width: "77px", height: "77px", top: "7px", left: "0px", borderRadius: "50%", overflow: "hidden", border: "3px solid white" }}>
                  <Image src={t.avatarLeft} alt="" fill sizes="77px" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", width: "77px", height: "77px", top: "7px", left: "104px", borderRadius: "50%", overflow: "hidden", border: "3px solid white" }}>
                  <Image src={t.avatarRight} alt="" fill sizes="77px" style={{ objectFit: "cover" }} />
                </div>
                {/* Center avatar — larger, on top */}
                <div style={{ position: "absolute", width: "91px", height: "91px", top: "0px", left: "45px", borderRadius: "50%", overflow: "hidden", border: "3px solid white", zIndex: 2 }}>
                  <Image src={t.avatar} alt={t.name} fill sizes="91px" style={{ objectFit: "cover" }} />
                </div>
              </div>

              {/* Name + role */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "100%" }}>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: 1.1, letterSpacing: "-0.8px", color: "#000000", textAlign: "center", margin: 0 }}>
                  {t.name}
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: 1.1, letterSpacing: "-0.6px", color: "rgba(0,0,0,0.5)", textAlign: "center", margin: 0 }}>
                  {t.role}
                </p>
              </div>
            </div>

            {/* Dot indicators */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: "19px",
                    height: "3px",
                    borderRadius: "6px",
                    background: i === index ? "#0150cd" : "rgba(0,0,0,0.1)",
                    border: i === index ? "none" : "0.5px solid rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    padding: 0,
                    transition: "background 0.3s ease",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quote — slides with direction */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.p
            key={`quote-${index}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: quoteSize,
              lineHeight: 1.1,
              letterSpacing: quoteTracking,
              color: "#000000",
              textAlign: "center",
              margin: 0,
              padding: isMobile ? "0 4px" : 0,
            }}
          >
            {t.quote}
          </motion.p>
        </AnimatePresence>

        {/* Mobile swipe hint dots */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === index ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === index ? "#0150cd" : "rgba(0,0,0,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
