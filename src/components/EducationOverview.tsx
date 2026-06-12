"use client";

import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const stats = [
  { num: "6", unit: "weeks", label: "Hands-on digital skills training" },
  { num: "8", unit: "weeks", label: "Paid work placement with a real employer" },
  { num: "1", unit: "device", label: "Laptop or tablet —> yours to keep at the end" },
];

export default function EducationOverview() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const numSize =
    bp === "mobile" ? "80px" :
    bp === "tablet" ? "96px" :
    "120px";

  const numTracking =
    bp === "mobile" ? "-4px" : "-6px";

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

        {/* Program name + tagline */}
        <FadeUp>
          <div style={{
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            alignItems: isMobileOrTablet ? "flex-start" : "baseline",
            gap: isMobile ? "8px" : "24px",
            marginBottom: isMobile ? "48px" : "72px",
          }}>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "28px" : isMobileOrTablet ? "36px" : "44px",
              lineHeight: 1.05,
              letterSpacing: isMobile ? "-1px" : "-2px",
              color: "#000000",
              margin: 0,
              flexShrink: 0,
            }}>
              First Nations Youth{" "}
              <span style={{ fontWeight: 600, color: "#0150cd" }}>Digital Workforce</span>{" "}
              Program
            </p>
            {!isMobileOrTablet && (
              <div style={{ width: "1px", height: "48px", background: "rgba(0,0,0,0.12)", flexShrink: 0, alignSelf: "center" }} />
            )}
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: 1.3,
              letterSpacing: "-0.5px",
              color: "rgba(0,0,0,0.45)",
              margin: 0,
            }}>
              Real Skills.{isMobile ? " " : <br key="br" />}Real Pay.{isMobile ? " " : <br key="br2" />}Real Pathways.
            </p>
          </div>
        </FadeUp>

        {/* Big-number stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "0" : "0",
          }}
        >
          {stats.map((s, i) => (
            <FadeUp key={s.num} delay={i * 0.12}>
              <div
                style={{
                  padding: isMobile ? "28px 0" : "0 40px",
                  borderLeft: !isMobile && i > 0 ? "1px solid rgba(0,0,0,0.08)" : undefined,
                  borderTop: isMobile && i > 0 ? "1px solid rgba(0,0,0,0.08)" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Big number */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                  <span style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 700,
                    fontSize: numSize,
                    lineHeight: 1,
                    letterSpacing: numTracking,
                    color: "#0150cd",
                  }}>
                    {s.num}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 400,
                    fontSize: isMobile ? "20px" : "24px",
                    lineHeight: 1,
                    letterSpacing: "-1px",
                    color: "rgba(0,0,0,0.3)",
                  }}>
                    {s.unit}
                  </span>
                </div>
                {/* Label */}
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "15px" : "16px",
                  lineHeight: 1.5,
                  letterSpacing: "-0.2px",
                  color: "rgba(0,0,0,0.6)",
                  margin: 0,
                  maxWidth: "260px",
                }}>
                  {s.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Body paragraphs */}
        <FadeUp delay={0.2}>
          <div
            style={{
              marginTop: isMobile ? "48px" : "72px",
              display: "grid",
              gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
              gap: isMobile ? "20px" : "60px",
            }}
          >
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: 1.65,
              letterSpacing: "-0.2px",
              color: "rgba(0,0,0,0.7)",
              margin: 0,
            }}>
              At Sarabloh, we believe every young person deserves a real shot at a good job, no matter where they grow up. Our digital workforce program gives Indigenous youth aged 15 to 21 the training, paid work experience, and tools they need to step into today&apos;s job market with confidence.
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: 1.65,
              letterSpacing: "-0.2px",
              color: "rgba(0,0,0,0.7)",
              margin: 0,
            }}>
              Every participant who completes the program gets to keep a laptop or device. The skills and tools stay in the community, building capacity that lasts long after the program ends.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
