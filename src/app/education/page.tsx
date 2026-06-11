import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EducationHero from "@/components/EducationHero";
import EducationOverview from "@/components/EducationOverview";
import EducationSteps from "@/components/EducationSteps";
import EducationFeatures from "@/components/EducationFeatures";
import EducationDomains from "@/components/EducationDomains";
import ServicesCTA from "@/components/ServicesCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Education — Sarabloh Technologies",
  description:
    "Six weeks of hands-on digital skills training followed by eight weeks of paid work experience. Open to Indigenous youth ages 15–21 across Manitoba.",
};

export default function EducationPage() {
  return (
    <>
      <Navbar activePath="/education" />
      <main>
        <EducationHero />
        <EducationOverview />
        <EducationSteps />
        <EducationFeatures />
        <EducationDomains />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
