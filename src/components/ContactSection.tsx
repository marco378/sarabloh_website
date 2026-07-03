"use client";

import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const weAreOptions = [
  "First Nations community or organization",
  "Government body",
  "Educational institution",
  "Local business",
  "Non-profit organization",
  "Other",
];

const collaborationOptions = [
  "Strategic Partnership",
  "Technology Implementation",
  "Education & Training",
  "Community Development",
  "Research & Innovation",
  "Other",
];

const inputStyle = (focused: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "10px 14px",
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#111",
  background: "#fff",
  border: `1px solid ${focused ? "#0150cd" : "#d1d5db"}`,
  borderRadius: "6px",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
});

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "rgba(0,0,0,0.5)",
  marginBottom: "6px",
  display: "block",
};

export default function ContactSection() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "64px" :
    bp === "tablet" ? "80px" :
    "100px";

  const [form, setForm] = useState({
    name: "", organization: "", email: "", phone: "",
    weAre: weAreOptions[0], collaboration: collaborationOptions[0], message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  };

  return (
    <section style={{ background: "#fff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>
        <div style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobileOrTablet ? "1fr" : "1fr 1fr",
          gap: isMobile ? "56px" : isMobileOrTablet ? "64px" : "80px",
          alignItems: "start",
        }}>

          {/* ── Left: Partnerships ── */}
          <div>
            <FadeUp>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#0150cd",
                margin: "0 0 16px",
              }}>
                Partnerships
              </p>
              <h2 style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? "32px" : isMobileOrTablet ? "40px" : "48px",
                lineHeight: 1.1,
                letterSpacing: isMobile ? "-1.2px" : "-2px",
                color: "#000",
                margin: "0 0 20px",
              }}>
                Working with communities across Manitoba
              </h2>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "15px" : "16px",
                lineHeight: 1.65,
                color: "rgba(0,0,0,0.6)",
                margin: "0 0 36px",
                maxWidth: "480px",
              }}>
                Sarabloh Technologies works directly with First Nations communities, local organizations, and businesses across Manitoba. Our partnerships are built through real work — not announcements. As we formalize collaborations, they will be listed here.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div style={{
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "12px",
                padding: isMobile ? "28px 20px" : "36px 32px",
                background: "#fafafa",
                maxWidth: "480px",
              }}>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "17px" : "19px",
                  lineHeight: 1.3,
                  color: "#000",
                  margin: "0 0 12px",
                  textAlign: "center",
                }}>
                  Interested in working with us?
                </p>
                <p style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "rgba(0,0,0,0.6)",
                  margin: "0 0 24px",
                  textAlign: "center",
                }}>
                  We are actively building partnerships with First Nations communities, government bodies, educational institutions, and local businesses. Use the form to start the conversation.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a
                    href="#contact-form"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#0150cd",
                      color: "#fff",
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 600,
                      fontSize: "15px",
                      padding: "10px 28px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      minHeight: "44px",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#0140b0")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#0150cd")}
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── Right: Form ── */}
          <div id="contact-form">
            <FadeUp delay={isMobileOrTablet ? 0 : 0.1}>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#0150cd",
                margin: "0 0 16px",
              }}>
                Get in Touch
              </p>
              <h2 style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? "28px" : isMobileOrTablet ? "36px" : "42px",
                lineHeight: 1.1,
                letterSpacing: isMobile ? "-1px" : "-1.8px",
                color: "#000",
                margin: "0 0 32px",
              }}>
                Start the conversation
              </h2>
            </FadeUp>

            {submitted ? (
              <FadeUp>
                <div style={{
                  border: "1px solid #d1fae5",
                  background: "#f0fdf4",
                  borderRadius: "10px",
                  padding: "40px 32px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: "32px", marginBottom: "16px" }}>✓</div>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#15803d",
                    margin: "0 0 10px",
                  }}>
                    Message sent!
                  </p>
                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "15px",
                    color: "rgba(0,0,0,0.6)",
                    margin: 0,
                  }}>
                    We&apos;ll be in touch shortly at {form.email}.
                  </p>
                </div>
              </FadeUp>
            ) : (
              <FadeUp delay={isMobileOrTablet ? 0.05 : 0.15}>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                  {/* Name + Organization */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "16px",
                  }}>
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input
                        type="text"
                        placeholder="Full name"
                        required
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(focused === "name")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Organization</label>
                      <input
                        type="text"
                        placeholder="Organization name"
                        value={form.organization}
                        onChange={(e) => set("organization", e.target.value)}
                        onFocus={() => setFocused("org")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(focused === "org")}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "16px",
                  }}>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(focused === "email")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        placeholder="Optional"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(focused === "phone")}
                      />
                    </div>
                  </div>

                  {/* We Are A */}
                  <div>
                    <label style={labelStyle}>We Are A...</label>
                    <div style={{ position: "relative" }}>
                      <select
                        value={form.weAre}
                        onChange={(e) => set("weAre", e.target.value)}
                        onFocus={() => setFocused("weAre")}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...inputStyle(focused === "weAre"),
                          appearance: "none",
                          WebkitAppearance: "none",
                          cursor: "pointer",
                          paddingRight: "40px",
                        }}
                      >
                        {weAreOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <svg
                        style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "rgba(0,0,0,0.4)" }}
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  {/* Type of Collaboration */}
                  <div>
                    <label style={labelStyle}>Type of Collaboration</label>
                    <div style={{ position: "relative" }}>
                      <select
                        value={form.collaboration}
                        onChange={(e) => set("collaboration", e.target.value)}
                        onFocus={() => setFocused("collab")}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...inputStyle(focused === "collab"),
                          appearance: "none",
                          WebkitAppearance: "none",
                          cursor: "pointer",
                          paddingRight: "40px",
                        }}
                      >
                        {collaborationOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <svg
                        style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "rgba(0,0,0,0.4)" }}
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      placeholder="Tell us about your work and what you are looking for."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle(focused === "message"),
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      minHeight: "48px",
                      background: loading ? "#6b9fe4" : "#0150cd",
                      color: "#fff",
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      letterSpacing: "-0.3px",
                      border: "none",
                      borderRadius: "6px",
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#0140b0"; }}
                    onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#0150cd"; }}
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </button>

                  <p style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "13px",
                    color: "rgba(0,0,0,0.45)",
                    textAlign: "center",
                    margin: 0,
                  }}>
                    Or email us directly at{" "}
                    <a href="mailto:info@sarabloh.ca" style={{ color: "#0150cd", textDecoration: "none", fontWeight: 600 }}>
                      info@sarabloh.ca
                    </a>
                  </p>

                </form>
              </FadeUp>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
