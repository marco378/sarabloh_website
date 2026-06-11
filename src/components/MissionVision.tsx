"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const team = [
  
  {
    name: "Jaskanwar Singh",
    role: "Operations Lead · Sarabloh Technologies",
    bio: "Technology strategist and educator with deep roots in AI and digital workforce development. Driving Sarabloh's education programs, grant proposals, and community partnerships.",
    image: "/images/jaskanwar.png",
  },
  {
    name: "Santokh Singh Randhawa",
    role: "Co-Founder · Community & Partnerships",
    bio: "Community builder connecting technology to people. Leads partnership development, newcomer outreach, and event coordination across Manitoba and nationally.",
    image: "/images/santosh.png",
  },
  {
    name: "Brown Eagle",
    role: "Operations Lead · Sarabloh Technologies",
    bio: "Indigenous entrepreneur who has traveled across North America building programs that give Indigenous communities real ownership of the technology they use and the economic opportunities that come with it. The operational force behind our Nations Forward and Community Safety work.",
    image: "/images/brown.png",
  },
];

export default function MissionVision() {
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
    "84px";

  const padY =
    bp === "mobile" ? "60px" :
    bp === "tablet" ? "72px" :
    "96px";

  const photoSize = isMobile ? "200px" : "245px";
  const photoHeight = isMobile ? "248px" : "303px";

  return (
    <section style={{ background: "#ffffff", paddingTop: padY, paddingBottom: padY }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "36px" : "52px" }}>

          <FadeUp>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: isMobile ? "14px" : "21px", maxWidth: "787px", width: "100%", margin: "0 auto" }}>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 400, fontSize: headingSize, lineHeight: 0.96, letterSpacing: headingTracking, color: "#000000", margin: 0 }}>
                Our{" "}
                <span style={{ fontWeight: 600, color: "#0150cd" }}>Mission</span>
                {" & "}
                <span style={{ fontWeight: 600, color: "#0150cd" }}>Vision</span>
              </p>
              <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: isMobile ? "15px" : "18px", lineHeight: 1.5, color: "rgba(0,0,0,0.7)", margin: 0 }}>
                Empowering a Smarter Tomorrow&rdquo; We build innovative solutions in AI, Blockchain, Mobility, and Education — making advanced technology accessible, collaborative, and transformative for individuals and organizations alike.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer
            stagger={0.15}
            style={{
              display: "grid",
              gridTemplateColumns:
                isMobile ? "1fr" :
                isMobileOrTablet ? "1fr 1fr" :
                "repeat(3, 1fr)",
              gap: isMobile ? "32px" : isMobileOrTablet ? "32px" : "94px",
            }}
          >
            {team.map((member, i) => (
              <StaggerItem key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: isMobile ? "20px" : "31px" }}>
                <div style={{ position: "relative", width: photoSize, height: photoHeight, borderRadius: "12px", overflow: "hidden", flexShrink: 0 }}>
                  <Image src={member.image} alt={member.name} fill sizes={photoSize} style={{ objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", width: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", maxWidth: "314px", width: "100%" }}>
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: isMobile ? "18px" : "20px", lineHeight: 0.96, letterSpacing: "-1px", color: "#000000", width: "100%", margin: 0 }}>
                      {member.name}
                    </p>
                    <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: 1.5, color: "rgba(0,0,0,0.5)", width: "100%", margin: 0 }}>
                      {member.role}
                    </p>
                  </div>
                  <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: 1.5, color: "rgba(0,0,0,0.7)", margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}
