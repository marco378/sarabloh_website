import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import BackForwardRemount from "@/components/BackForwardRemount";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarabloh - Driving the Future of Education, AI, Blockchain & Mobility",
  description: "Tailored strategies and technology built for organizations ready to lead.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`} data-scroll-behavior="smooth">
      <body style={{ margin: 0, padding: 0, background: "#ffffff", WebkitFontSmoothing: "antialiased" }}>
        <BackForwardRemount>{children}</BackForwardRemount>
        <Analytics />
      </body>
    </html>
  );
}
