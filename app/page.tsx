import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
import MediaCarousel from "./components/MediaCarousel";
import MeetTheFounder from "./components/MeetTheFounder";

export default function Home() {
  return (
    <main>
      <Hero />
      <MediaCarousel />
      <ClientsSection />
      <MeetTheFounder />
    </main>
  );
}