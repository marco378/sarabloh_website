import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solutions — Sarabloh Technologies",
  description: "Solutions are coming soon.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar activePath="/solutions" />
      <main>
        <ComingSoon
          title="Solutions"
          subtitle="We’re building this section now. Check back soon for the full experience."
          ctaHref="/services"
          ctaLabel="Explore Services"
        />
      </main>
      <Footer />
    </>
  );
}
