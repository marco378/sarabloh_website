"use client";

import { FadeUp, AnimatedButton } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function ServicesCTA() {
  const { bp, isMobile } = useBreakpoint();

  const headingSize =
    bp === "mobile" ? "36px" :
    bp === "tablet" ? "48px" :
    "60px";

  const headingTracking =
    bp === "mobile" ? "-1.4px" :
    bp === "tablet" ? "-2px" :
    "-3px";

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Inner card — matches the blue-tinted card style of the site */}
        <div
          style={{
            background: "rgba(1,80,205,0.03)",
            border: "1px solid rgba(1,80,205,0.3)",
            borderRadius: isMobile ? "16px" : "20px",
            padding: isMobile ? "40px 24px" : "60px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isMobile ? "28px" : "36px",
            textAlign: "center",
          }}
        >
          <FadeUp>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? "14px" : "20px" }}>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: headingSize,
                lineHeight: 0.96,
                letterSpacing: headingTracking,
                color: "#000000",
                margin: 0,
              }}>
                Not sure where to start?
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "16px" : "20px",
                lineHeight: 1.5,
                letterSpacing: "-0.2px",
                color: "rgba(0,0,0,0.7)",
                margin: 0,
                maxWidth: "520px",
              }}>
                Book a free consultation. We&apos;ll tell you exactly what&apos;s possible for your organization.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <AnimatedButton
              href="/get-started"
              fullWidthMobile
              style={{
                background: "#0150cd",
                color: "#ffffff",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: 1.5,
                letterSpacing: "-0.48px",
                padding: "12px 28px",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              Book a Free Consultation
            </AnimatedButton>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
