import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import MissionVision from "@/components/MissionVision";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar activePath="/" />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Testimonial />
        <MissionVision />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
