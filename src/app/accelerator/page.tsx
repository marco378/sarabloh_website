import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AcceleratorHero from "@/components/AcceleratorHero";
import AcceleratorCurriculum from "@/components/AcceleratorCurriculum";
import AcceleratorTools from "@/components/AcceleratorTools";
import AcceleratorTimeline from "@/components/AcceleratorTimeline";
import AcceleratorLive from "@/components/AcceleratorLive";
import AcceleratorStory from "@/components/AcceleratorStory";
import AcceleratorFAQ from "@/components/AcceleratorFAQ";
import AcceleratorPricing from "@/components/AcceleratorPricing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Workforce Accelerator — Sarabloh Technologies",
  description: "First Nations AI Workforce Accelerator. 6 weeks of live training, real builds, real tools. No background needed. No experience needed. Just you and a laptop.",
};

export default function AcceleratorPage() {
  return (
    <>
      <Navbar activePath="/accelerator" />
      <main>
        <AcceleratorHero />
        <AcceleratorCurriculum />
        <AcceleratorTools />
        <AcceleratorTimeline />
        <AcceleratorLive />
        <AcceleratorStory />
        <AcceleratorFAQ />
        <AcceleratorPricing />
      </main>
      <Footer />
    </>
  );
}
