import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Languages } from "@/components/Languages";
import { HowItWorks } from "@/components/HowItWorks";
import { Roadmap } from "@/components/Roadmap";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";
import { getLatestRelease } from "@/lib/release";

// Reliz ma'lumotini server'da olamiz (har 10 daqiqada yangilanadi).
export const revalidate = 600;

export default async function HomePage() {
  const release = await getLatestRelease();
  return (
    <>
      <Nav />
      <main>
        <Hero release={release} />
        <Features />
        <Languages />
        <HowItWorks />
        <Roadmap />
        <DownloadCTA release={release} />
      </main>
      <Footer />
    </>
  );
}
