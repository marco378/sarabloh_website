"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const canadaItems = [
  "Access to the US market and a trusted legal system, attractive to global businesses",
  "World-class universities and a proven track record of producing talented people",
  "Vast natural resources and land, much of it stewarded by First Nations for generations",
  "A multicultural, multilingual society that draws talent and investment from around the world",
];

const firstNationsItems = [
  "Indigenous communities steward 25% of the world's land and 80% of global biodiversity",
  "Governance structures built on values of community, long-term thinking, and collective benefit",
  "Growing population of young people who want to stay in their communities and build there",
  "Treaty rights, land agreements, and legal frameworks that create the foundation for self-governed economic zones",
];

const stats = [
  { value: "200,000+", label: "Jobs in digital economy globally" },
  { value: "$300B", label: "Annual financing gap for Indigenous-led resource projects" },
  { value: "25%", label: "Of the world's land stewarded by Indigenous communities" },
];

export default function EZOpportunity() {
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

        {/* Heading — centered */}
        <FadeUp>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "48px" : "72px",
          }}>
            <span style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#0150cd",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
            }}>
              The Opportunity
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: bp === "mobile" ? "32px" : bp === "tablet" ? "44px" : "56px",
              lineHeight: 1.05,
              letterSpacing: bp === "mobile" ? "-1.4px" : "-2.8px",
              color: "#000000",
              margin: "0 auto",
              maxWidth: "720px",
            }}>
              Canada is uniquely positioned.{" "}
              <span style={{ fontWeight: 600, color: "#0150cd" }}>So are First Nations.</span>
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.65,
              color: "rgba(0,0,0,0.5)",
              margin: "20px auto 0",
              maxWidth: "560px",
            }}>
              Countries around the world like Switzerland, Dubai, Singapore, Estonia have built special economic zones that attract investment, create jobs, and grow their economies. Canada has everything it needs to do the same, led by Indigenous communities.
            </p>
          </div>
        </FadeUp>

        {/* Two columns: Canada | First Nations */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "0",
          marginBottom: isMobile ? "48px" : "72px",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: "12px",
          overflow: "hidden",
        }}>
          {/* Canada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              padding: isMobile ? "32px 24px" : "48px 48px",
              borderRight: !isMobile ? "1px solid rgba(0,0,0,0.08)" : undefined,
              borderBottom: isMobile ? "1px solid rgba(0,0,0,0.08)" : undefined,
              background: "#fafafa",
            }}
          >
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: isMobile ? "18px" : "22px",
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "rgba(0,0,0,0.88)",
              margin: "0 0 24px",
            }}>
              What Canada Has
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {canadaItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.25)",
                    flexShrink: 0,
                    marginTop: "7px",
                  }} />
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "rgba(0,0,0,0.6)",
                    margin: 0,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* First Nations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              padding: isMobile ? "32px 24px" : "48px 48px",
              background: "rgba(1,80,205,0.03)",
            }}
          >
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: isMobile ? "18px" : "22px",
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "#0150cd",
              margin: "0 0 24px",
            }}>
              What First Nations Have
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {firstNationsItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#0150cd",
                    flexShrink: 0,
                    marginTop: "7px",
                  }} />
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "rgba(0,0,0,0.65)",
                    margin: 0,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
          gap: "0",
          borderTop: "1px solid rgba(0,0,0,0.07)",
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                padding: isMobile ? "32px 0" : "44px 0",
                paddingRight: !isMobile && i < stats.length - 1 ? "48px" : undefined,
                paddingLeft: !isMobile && i > 0 ? "48px" : undefined,
                borderLeft: !isMobile && i > 0 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                borderTop: isMobile && i > 0 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <span style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: bp === "mobile" ? "44px" : bp === "tablet" ? "52px" : "64px",
                lineHeight: 1,
                letterSpacing: "-3px",
                color: "#0150cd",
              }}>
                {stat.value}
              </span>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.5,
                color: "rgba(0,0,0,0.5)",
                margin: 0,
                maxWidth: "220px",
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
