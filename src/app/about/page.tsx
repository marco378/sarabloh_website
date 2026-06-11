import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutMission from "@/components/AboutMission";
import AboutValues from "@/components/AboutValues";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Sarabloh Technologies",
  description:
    "Sarabloh Technologies is a pioneering force dedicated to harnessing emerging technologies to address real-world challenges for communities, businesses, and individuals across Canada.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar activePath="/about" />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
