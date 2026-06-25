import Hero from "./components/Hero";
import MentorHighlight from "./components/MentorHighlight";
import ServicesSection from "./components/ServicesSection";
import SlicerSection from "./components/SlicerSection";
import ClientsSection from "./components/ClientsSection";
import MeetTheFounder from "./components/MeetTheFounder";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <MentorHighlight />
      <ServicesSection />
      <SlicerSection />
      <ClientsSection />
      <TestimonialsSection />
      <MeetTheFounder />
    </main>
  );
}