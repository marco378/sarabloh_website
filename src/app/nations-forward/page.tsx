import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import NationsHero from "@/components/NationsHero";
import NationsStory from "@/components/NationsStory";
import NationsCohort from "@/components/NationsCohort";
import NationsFramework from "@/components/NationsFramework";
import NationsCommunities from "@/components/NationsCommunities";
import NationsSovereignty from "@/components/NationsSovereignty";
import ServicesCTA from "@/components/ServicesCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nations Forward — Sarabloh Technologies",
  description: "Indigenous-led technology education, economic sovereignty, and digital leadership. Built from the ground up, in communities, with communities, for communities.",
};

export default function NationsForwardPage() {
  return (
    <>
      <Navbar activePath="/nations-forward" />
      <main>
        <NationsHero />
        <NationsStory />
        <NationsCohort />
        <NationsFramework />
        <NationsCommunities />
        <NationsSovereignty />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
