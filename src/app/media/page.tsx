import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MediaCoverage from "@/components/MediaCoverage";
import MediaGallery from "@/components/MediaGallery";
import MediaPress from "@/components/MediaPress";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Media — Sarabloh Technologies",
  description: "Media coverage, event gallery, and press resources for Sarabloh Technologies and the Nations Forward initiative.",
};

export default function MediaPage() {
  return (
    <>
      <Navbar activePath="/media" />
      <main>
        <MediaCoverage />
        <MediaGallery />
        <MediaPress />
      </main>
      <Footer />
    </>
  );
}
