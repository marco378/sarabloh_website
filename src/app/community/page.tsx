import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Community — Sarabloh Technologies",
  description: "Community content is coming soon.",
};

export default function CommunityPage() {
  return (
    <>
      <Navbar activePath="/community" />
      <main>
        <ComingSoon
          title="Community"
          subtitle="This section is still in progress. We’ll publish it soon."
          ctaHref="/"
          ctaLabel="Back to Home"
        />
      </main>
      <Footer />
    </>
  );
}
