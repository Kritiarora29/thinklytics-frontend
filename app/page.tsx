import Hero from "./components/Hero";
//import ServicesSection from "./components/ServicesSection";
import MediaCarousel from "./components/MediaCarousel";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <ServicesSection /> */}
      <MediaCarousel />
    </main>
  );
}