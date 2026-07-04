"use client";

import { FadeUp, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function CTABanner() {
  const { bp, isMobile } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "36px" :
    bp === "tablet" ? "48px" :
    "70px";

  const headingTracking =
    bp === "mobile" ? "-1.4px" :
    bp === "tablet" ? "-2px" :
    "-3.5px";

  const padX =
    bp === "mobile" ? "16px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "48px" :
    bp === "tablet" ? "72px" :
    "96px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1300px",
            margin: "0 auto",
            borderRadius: isMobile ? "16px" : "26px",
            padding: isMobile ? "36px 20px" : "46px 10px",
            backgroundImage: "url(/images/cta-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? "28px" : "40px", width: "100%", position: "relative", zIndex: 1 }}>
            <FadeUp>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? "16px" : "22px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: headingSize,
                    lineHeight: 0.96,
                    letterSpacing: headingTracking,
                    maxWidth: "647px",
                    width: "100%",
                    textAlign: "center",
                    backgroundImage: "linear-gradient(205.207deg, rgb(255,255,255) 23.382%, rgb(229,255,255) 46.603%, rgb(156,252,255) 67.448%, rgb(92,168,255) 85.219%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <p style={{ fontWeight: 400, margin: 0 }}>Ready to</p>
                  <p style={{ fontWeight: 600, margin: 0 }}>explore our services?</p>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: isMobile ? "14px" : "16px",
                    lineHeight: 1.5,
                    letterSpacing: "-0.16px",
                    color: "rgba(255,255,255,0.9)",
                    maxWidth: "623px",
                    width: "100%",
                    textAlign: "center",
                    margin: 0,
                    padding: isMobile ? "0 8px" : 0,
                  }}
                >
                  Every product, program, and partnership is designed to create measurable outcomes for communities, businesses, and individuals.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <AnimatedButton
                href="/contact"
                fullWidthMobile
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: 1.5,
                  letterSpacing: "-0.48px",
                  padding: "10px 22px",
                  borderRadius: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                Get Started
              </AnimatedButton>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
