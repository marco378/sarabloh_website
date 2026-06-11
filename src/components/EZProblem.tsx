"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const problems = [
  {
    title: "Talent Leaves and Doesn't Come Back",
    desc: "Young people get educated, build skills, and then move away because there are no local opportunities waiting for them. Communities invest in people and don't get the benefit of what they build.",
  },
  {
    title: "Money Flows Out, Not In",
    desc: "Projects happen on community land. Resources come from community territory. But the profits and the jobs often go to outside companies. Communities get the risk, someone else gets the reward.",
  },
  {
    title: "Decisions Made Without Communities",
    desc: "Rules, regulations, and funding structures are built for the mainstream economy, not for how Indigenous communities actually work. Self-determination gets talked about but rarely built into the economic structure.",
  },
];

export default function EZProblem() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

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

        {/* Full-width intro statement */}
        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? "20px" : "80px",
            alignItems: "end",
            marginBottom: isMobile ? "48px" : "72px",
            paddingBottom: isMobile ? "32px" : "56px",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}>
            <div>
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "rgba(0,0,0,0.35)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}>
                The Problem
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: bp === "mobile" ? "30px" : bp === "tablet" ? "40px" : "52px",
                lineHeight: 1.05,
                letterSpacing: bp === "mobile" ? "-1.2px" : "-2.5px",
                color: "#000000",
                margin: 0,
              }}>
                The current system{" "}
                <span style={{ color: "rgba(0,0,0,0.3)" }}>leaves communities behind</span>
              </p>
            </div>

            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.7,
              letterSpacing: "-0.2px",
              color: "rgba(0,0,0,0.55)",
              margin: 0,
              alignSelf: isMobileOrTablet ? "auto" : "end",
            }}>
              Right now, a lot of the economic value created in and around Indigenous communities flows out. Jobs go to outsiders. Revenue leaves. Decisions are made by people who don&apos;t live there. This model changes that.
            </p>
          </div>
        </FadeUp>

        {/* Three problems — horizontal on desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
          gap: "0",
        }}>
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                padding: isMobile ? "32px 0" : "0 48px 0 0",
                paddingLeft: !isMobile && i > 0 ? "48px" : undefined,
                borderLeft: !isMobile && i > 0 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                borderTop: isMobile && i > 0 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {/* Problem number */}
              <span style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                letterSpacing: "-2px",
                lineHeight: 1,
                color: "rgba(1,80,205,0.1)",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "20px" : "22px",
                lineHeight: 1.15,
                letterSpacing: "-0.9px",
                color: "rgba(0,0,0,0.88)",
                margin: 0,
              }}>
                {p.title}
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.75,
                color: "rgba(0,0,0,0.55)",
                margin: 0,
              }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
