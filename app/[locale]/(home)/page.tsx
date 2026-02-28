import { LandingFooter } from "@/components/landing-footer";
import { LandingHero } from "@/components/landing-hero";
import { LandingSections } from "@/components/landing-sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "建築探訪 | 建築を、もっと身近に",
  description:
    "身近な建築を探して、みんなで共有する。Find and share architecture around you.",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <LandingHero />
      </section>
      <LandingSections />
      <LandingFooter />
    </div>
  );
}
