"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, animate, type Variants } from "framer-motion";
import { useRef, useEffect, type ReactNode, type CSSProperties } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useBackForwardRestore } from "./BackForwardRemount";

const MotionLink = motion.create(Link);

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("//");
}

/* ─── Fade + Slide Up on scroll ─── */

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  style,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const restored = useBackForwardRestore();

  return (
    <motion.div
      variants={fadeUpVariants}
      initial={restored ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container — children animate in sequence ─── */

export function StaggerContainer({
  children,
  stagger = 0.1,
  style,
  className,
}: {
  children: ReactNode;
  stagger?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const restored = useBackForwardRestore();

  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      initial={restored ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Split text — each word fades + slides up with stagger ─── */

export function SplitText({
  children,
  style,
  delay = 0,
}: {
  children: string;
  style?: CSSProperties;
  delay?: number;
}) {
  const words = children.split(" ");
  const restored = useBackForwardRestore();

  return (
    <motion.p
      initial={restored ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.045, delayChildren: delay } },
      }}
      style={{ margin: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 0.3em", ...style }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

/* ─── Animated button with hover lift + shadow (disabled on mobile) ─── */

export function AnimatedButton({
  children,
  href,
  style,
  fullWidthMobile = false,
}: {
  children: ReactNode;
  href: string;
  style?: CSSProperties;
  fullWidthMobile?: boolean;
}) {
  const { isMobile } = useBreakpoint();

  const mobileStyle: CSSProperties = fullWidthMobile && isMobile
    ? { width: "100%", justifyContent: "center", minHeight: "44px" }
    : isMobile
    ? { minHeight: "44px" }
    : {};

  const sharedStyle = { ...style, ...mobileStyle, textDecoration: "none" as const };

  if (isExternalHref(href)) {
    return (
      <motion.a
        href={href}
        style={sharedStyle}
        whileHover={isMobile ? undefined : {
          y: -2,
          scale: 1.03,
          boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        }}
        whileTap={{ y: 0, scale: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink
      href={href}
      style={sharedStyle}
      whileHover={isMobile ? undefined : {
        y: -2,
        scale: 1.03,
        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
      }}
      whileTap={{ y: 0, scale: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </MotionLink>
  );
}

/* ─── Card with hover lift + shadow (disabled on mobile) ─── */

export function CardHover({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  const { isMobile } = useBreakpoint();

  return (
    <motion.div
      style={style}
      className={className}
      whileHover={isMobile ? undefined : {
        y: -6,
        boxShadow: "0 12px 32px rgba(1,80,205,0.12)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Count Up animation for stats ─── */

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 1.8,
  style,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const restored = useBackForwardRestore();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (restored) {
      count.set(target);
      return;
    }

    if (inView) {
      animate(count, target, { duration, ease: "easeOut" });
    }
  }, [inView, target, duration, count, restored]);

  return (
    <span ref={ref} style={style}>
      {prefix}
      {restored ? target : <motion.span>{rounded}</motion.span>}
      {suffix}
    </span>
  );
}

/* ─── Nav link with underline slide ─── */

export function NavLink({
  children,
  href,
  style,
}: {
  children: ReactNode;
  href: string;
  style?: CSSProperties;
  }) {
  const sharedStyle = { ...style, textDecoration: "none", position: "relative" as const, display: "inline-block" };

  if (isExternalHref(href)) {
    return (
      <motion.a
        href={href}
        style={sharedStyle}
        whileHover="hovered"
        initial="idle"
      >
        {children}
        <motion.span
          variants={{
            idle: { scaleX: 0, originX: 0 },
            hovered: { scaleX: 1, originX: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: "absolute",
            bottom: -2,
            left: 0,
            right: 0,
            height: 1,
            background: "currentColor",
            transformOrigin: "left",
          }}
        />
      </motion.a>
    );
  }

  return (
    <MotionLink
      href={href}
      style={sharedStyle}
      whileHover="hovered"
      initial="idle"
    >
      {children}
      <motion.span
        variants={{
          idle: { scaleX: 0, originX: 0 },
          hovered: { scaleX: 1, originX: 0 },
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "absolute",
          bottom: -2,
          left: 0,
          right: 0,
          height: 1,
          background: "currentColor",
          transformOrigin: "left",
        }}
      />
    </MotionLink>
  );
}
