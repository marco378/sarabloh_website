import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MobilityHero from "@/components/MobilityHero";
import MobilityFeatures from "@/components/MobilityFeatures";
import MobilityMunicipal from "@/components/MobilityMunicipal";
import MobilityDemo from "@/components/MobilityDemo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobility Solutions — Sarabloh Technologies",
  description: "Smart mobility solutions tailored to your needs. Town Transit offers seamless, safe, and smart transportation for communities and municipalities.",
};

export default function MobilitySolutionsPage() {
  return (
    <>
      <Navbar activePath="/mobility-solutions" />
      <main>
        <MobilityHero />
        <MobilityFeatures />
        <MobilityMunicipal />
        <MobilityDemo />
      </main>
      <Footer />
    </>
  );
}
