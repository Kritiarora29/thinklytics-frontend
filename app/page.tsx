import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
import MediaCarousel from "./components/MediaCarousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <MediaCarousel />
      <ClientsSection />
    </main>
  );
}