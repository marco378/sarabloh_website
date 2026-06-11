import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EZHero from "@/components/EZHero";
import EZProblem from "@/components/EZProblem";
import EZSolution from "@/components/EZSolution";
import EZOpportunity from "@/components/EZOpportunity";
import EZModel from "@/components/EZModel";
import EZBenefits from "@/components/EZBenefits";
import ServicesCTA from "@/components/ServicesCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Indigenous Economic Zones — Sarabloh Technologies",
  description: "A new model that keeps money, jobs, and opportunity inside Indigenous communities. Community-owned economic zones where First Nations set the rules.",
};

export default function EconomicZonesPage() {
  return (
    <>
      <Navbar activePath="/economic-zones" />
      <main>
        <EZHero />
        <EZProblem />
        <EZSolution />
        <EZOpportunity />
        <EZModel />
        <EZBenefits />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
