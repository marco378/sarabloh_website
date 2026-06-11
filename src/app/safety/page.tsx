import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SafetyHero from "@/components/SafetyHero";
import SafetyChallenges from "@/components/SafetyChallenges";
import SafetyFeatures from "@/components/SafetyFeatures";
import SafetyProcess from "@/components/SafetyProcess";
import SafetyWhy from "@/components/SafetyWhy";
import ServicesCTA from "@/components/ServicesCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Community Safety — Sarabloh Technologies",
  description: "Nation-owned AI technology built around your community's real challenges. Indigenous-owned. Your data stays with your Nation. Your leadership is always in control.",
};

export default function SafetyPage() {
  return (
    <>
      <Navbar activePath="/safety" />
      <main>
        <SafetyHero />
        <SafetyChallenges />
        <SafetyFeatures />
        <SafetyProcess />
        <SafetyWhy />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
