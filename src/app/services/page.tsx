import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesCTA from "@/components/ServicesCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Sarabloh Technologies",
  description:
    "Custom AI solutions, blockchain training, mobility platforms, digital skills programs, AI-powered marketing, and Indigenous digital programs — built for Manitoba businesses and communities.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar activePath="/services" />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
