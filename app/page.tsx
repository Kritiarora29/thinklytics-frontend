import Hero from "./components/Hero";
import SlicerSection from "./components/SlicerSection";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";
import MediaCarousel from "./components/MediaCarousel";
import MeetTheFounder from "./components/MeetTheFounder";

export default function Home() {
  return (
    <main>
      <Hero />
      <SlicerSection />
      <ServicesSection />
      <MediaCarousel />
      <ClientsSection />
      <MeetTheFounder />
    </main>
  );
}