import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Sarabloh Technologies",
  description: "Partner with Sarabloh Technologies. We work directly with First Nations communities, local organizations, and businesses across Manitoba.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar activePath="/contact" />
      <main>
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
