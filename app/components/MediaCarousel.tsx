"use client";

import { motion } from "framer-motion";

const events = [
  {
    src: "/gallery1.png",
    title: "AI Workshop Poster – upGrad",
    desc: "Discover cutting-edge strategies in our exclusive AI masterclass. Access insider knowledge on constructing real GenAI solutions using Python and advanced enterprise LLMs.",
  },
  {
    src: "/gallery2.png",
    title: "Featured AI Masterclass",
    desc: "Fast-track your career with premium live training sessions focusing on building powerful automation flows and conversational AI pipelines for real-world impact.",
  },
  {
    src: "/gallery3.png",
    title: "Live AI Workshop – Hands-on Training",
    desc: "An intensive immersive physical session where industry leaders guide you precisely through building robust AI tools, covering everything from prompt engineering to deployment.",
  }
];

export default function MediaCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      
      {/* HEADER SECTION FOR GALLERIES TO TIE IT ALL TOGETHER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="massive-heading-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Latest Masterclasses
        </h2>
        <p className="massive-subtitle">
          Explore scenes from our most impactful global training camps and enterprise integrations.
        </p>
      </motion.div>

      {/* STATIC GRID INSTEAD OF SCROLLING CAROUSEL */}
      <div className="workshop-grid">
        {events.map((event, i) => (
          <div key={i} className="workshop-card">
            
            {/* IMAGE */}
            <div className="workshop-image-box">
              <img
                src={event.src}
                alt={event.title}
                className="workshop-image"
              />
            </div>
            
            {/* CONTENT */}
            <div className="workshop-content">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                {event.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}