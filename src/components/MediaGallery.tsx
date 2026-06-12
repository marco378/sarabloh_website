"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "./animations";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const projectCards = [
  {
    tag: "App Showcase",
    title: "Community Safety Platform",
    desc: "Nation-owned AI safety tools for First Nations communities",
  },
  {
    tag: "Feature Overview",
    title: "Safety Feature Overview",
    desc: "Real-time monitoring, suspect tracking, incident logging, and safety dashboard",
  },
];

const stats = [
  { value: "15+", label: "Apps Built" },
  { value: "4", label: "Communities" },
  { value: "3", label: "Days" },
];

const galleryPhotos = [
  
  {
    src: "/images/jaskanwar.png",
    alt: "Jaskanwar portrait",
    title: "Jaskanwar",
    caption: "Youth innovation and hands-on learning",
  },
  {
    src: "/images/santosh.png",
    alt: "Santosh portrait",
    title: "Santosh",
    caption: "Technology, teaching, and support",
  },
  {
    src: "/images/brown.png",
    alt: "Brown portrait",
    title: "Brown",
    caption: "Leadership and community engagement",
  }, 
  {
    src: "/images/media/image copy 7.png",
    alt: "",
    title: "",
    caption: "",

  },
  {
    src: "/images/media/image.png",
    alt: "",
    title: "",
    caption: "",

  },
  {
    src: "/images/media/image copy.png",
    alt: "",
    title: "",
    caption: "",

  }, 
  {
    src: "/images/media/image copy 2.png",
    alt: "",
    title: "",
    caption: "",

  },
  {
    src: "/images/media/image copy 3.png",
    alt: "",
    title: "",
    caption: "",

  },
  {
    src: "/images/media/image copy 4.png",
    alt: "",
    title: "",
    caption: "",

  },
  {
    src: "/images/media/image copy 5.png",
    alt: "",
    title: "",
    caption: "",

  },
  {
    src: "/images/media/image copy 6.png",
    alt: "",
    title: "PembinaValley",
    caption: "Got covered in the Pembina Valley online news!",
    link:"https://www.pembinavalleyonline.com/articles/morden-tech-class-aimed-to-open-new-avenues-for-pukatawagan-visitors",

  }, 
  
];

function MediaPhoto({ index, src, alt, title, caption, isMobile }: { index: number; src: string; alt: string; title: string; caption: string; isMobile: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        aspectRatio: "4 / 3",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={isMobile ? "50vw" : "25vw"}
        style={{ objectFit: "cover" }}
      />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(2,10,24,0.05) 0%, rgba(2,10,24,0.55) 100%)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: isMobile ? "16px" : "20px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}>
        <span style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 600,
          fontSize: "11px",
          letterSpacing: "1.2px",
          color: "#fffbf2",
          textTransform: "uppercase",
        }}>
          {title}
        </span>
        <span style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: 1.45,
          color: "rgba(255,251,242,0.75)",
        }}>
          {caption}
        </span>
      </div>
    </motion.div>
  );
}

export default function MediaGallery() {
  const { bp, isMobile, isMobileOrTablet } = useBreakpoint();

  const padX =
    bp === "mobile" ? "20px" :
    bp === "tablet" ? "40px" :
    "70px";

  const padY =
    bp === "mobile" ? "80px" :
    bp === "tablet" ? "96px" :
    "112px";

  return (
    <section style={{
      background: "rgb(2,10,24)",
      paddingTop: padY,
      paddingBottom: padY,
    }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: padX, paddingRight: padX }}>

        {/* Event header */}
        <FadeUp>
          <div style={{
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            alignItems: isMobileOrTablet ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: isMobile ? "40px" : "60px",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {/* Date badge */}
              <span style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "1.5px",
                color: "rgba(255,251,242,0.45)",
                textTransform: "uppercase",
                border: "1px solid rgba(255,251,242,0.12)",
                borderRadius: "100px",
                padding: "5px 14px",
              }}>
                December 2025 · Morden, Manitoba · Sarabloh Technologies
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: bp === "mobile" ? "28px" : bp === "tablet" ? "38px" : "48px",
                lineHeight: 1.0,
                letterSpacing: bp === "mobile" ? "-1.2px" : "-2.4px",
                color: "#fffbf2",
                margin: 0,
              }}>
                Pukatawagan AI<br />Youth Innovation Camp
              </p>
            </div>

            {/* Stats */}
            <div style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "row",
              gap: isMobile ? "28px" : "40px",
              flexWrap: "wrap",
            }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ display: "flex", flexDirection: "column", gap: "2px" }}
                >
                  <span style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 700,
                    fontSize: isMobile ? "36px" : "48px",
                    lineHeight: 1,
                    letterSpacing: "-2px",
                    color: "#0150cd",
                  }}>
                    {s.value}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    color: "rgba(255,251,242,0.4)",
                    textTransform: "uppercase",
                  }}>
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: isMobile ? "40px" : "56px" }} />

        {/* Project cards */}
        <FadeUp delay={0.1}>
          <p style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "2px",
            color: "rgba(255,251,242,0.35)",
            textTransform: "uppercase",
            margin: "0 0 20px",
          }}>
            Projects Showcased
          </p>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "12px" : "16px",
          marginBottom: isMobile ? "56px" : "72px",
        }}>
          {projectCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: isMobile ? "28px 24px" : "40px 36px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <span style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "10px",
                letterSpacing: "1.5px",
                color: "rgba(1,80,205,0.65)",
                textTransform: "uppercase",
              }}>
                {card.tag}
              </span>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "20px" : "24px",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                color: "#fffbf2",
                margin: 0,
              }}>
                {card.title}
              </p>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.6,
                color: "rgba(255,251,242,0.45)",
                margin: 0,
              }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: isMobile ? "40px" : "56px" }} />

        {/* Photo grid section */}
        <FadeUp delay={0.1}>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            gap: "16px",
            marginBottom: isMobile ? "24px" : "32px",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "2px",
                color: "rgba(255,251,242,0.35)",
                textTransform: "uppercase",
                margin: "0 0 8px",
              }}>
                Event Photos
              </p>
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "22px" : "28px",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                color: "rgba(255,251,242,0.9)",
                margin: 0,
              }}>
                Photos Coming Soon
              </p>
            </div>
            <p style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: 1.65,
              color: "rgba(255,251,242,0.35)",
              margin: 0,
              maxWidth: "380px",
              textAlign: isMobile ? "left" : "right",
            }}>
              Photos from community events, leadership meetings, and app presentations will be added as they come in. Have photos from our events?{" "}
              <span style={{ color: "rgba(1,80,205,0.7)", fontWeight: 500 }}>Send them our way.</span>
            </p>
          </div>
        </FadeUp>

        {/* Photo grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : isMobileOrTablet ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: isMobile ? "10px" : "12px",
        }}>
          {galleryPhotos.map((photo, i) => (
            <MediaPhoto
              key={photo.src}
              index={i}
              src={photo.src}
              alt={photo.alt}
              title={photo.title}
              caption={photo.caption}
              isMobile={isMobile}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
