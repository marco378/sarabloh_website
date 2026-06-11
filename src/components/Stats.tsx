"use client";

import { StaggerContainer, StaggerItem, CountUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const stats = [
  { value: 3, suffix: "+", label: "Nations Cohorts" },
  { value: 15, suffix: "", label: "Nations Cohorts" },
  { value: 50, suffix: "+", label: "Nations Cohorts" },
  { value: 4, suffix: "", label: "Nations Cohorts" },
];

export default function Stats() {
  const { bp, isMobile } = useBreakpoint();

  const numSize =
    bp === "mobile" ? "48px" :
    bp === "tablet" ? "60px" :
    "80px";

  const numTracking =
    bp === "mobile" ? "-2px" :
    "-4px";

  const gap =
    bp === "mobile" ? "32px" :
    bp === "tablet" ? "48px" :
    bp === "laptop" ? "60px" :
    "102px";

  return (
    <section
      style={{
        width: "100%",
        backgroundImage: "url(/images/stats-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: isMobile ? "40px" : "50px",
        paddingBottom: isMobile ? "40px" : "50px",
        paddingLeft: isMobile ? "20px" : "10px",
        paddingRight: isMobile ? "20px" : "10px",
      }}
    >
      {isMobile ? (
        <StaggerContainer
          stagger={0.12}
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            justifyItems: "center",
            gap,
          }}
        >
          {stats.map((s, i) => (
            <StaggerItem key={i}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: numSize, lineHeight: 1.1, letterSpacing: numTracking, color: "#ffffff", margin: 0 }}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: 0.9, letterSpacing: "1.92px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
                  {s.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <StaggerContainer
          stagger={0.12}
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap,
          }}
        >
          {stats.map((s, i) => (
            <StaggerItem key={`stat-${i}`} style={{ display: "contents" }}>
              {i > 0 && (
                <div style={{ width: "1px", height: "101.5px", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: numSize, lineHeight: 1.1, letterSpacing: numTracking, color: "#ffffff", margin: 0 }}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 0.9, letterSpacing: "1.92px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
                  {s.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </section>
  );
}
