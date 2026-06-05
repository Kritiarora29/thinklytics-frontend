import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";
import MediaCarousel from "./components/MediaCarousel";
import MeetTheFounder from "./components/MeetTheFounder";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <MediaCarousel />
      <ClientsSection />
      <MeetTheFounder />
    </main>
  );
}