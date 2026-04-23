import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
//import ServicesSection from "./components/ServicesSection";
import MediaCarousel from "./components/MediaCarousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsSection />
      {/* <ServicesSection /> */}
      <MediaCarousel />
    </main>
  );
}