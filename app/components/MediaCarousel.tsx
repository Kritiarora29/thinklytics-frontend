"use client";

import { motion } from "framer-motion";

import Image from "next/image";

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
    <div className="w-full py-32 relative overflow-hidden bg-[#050505]">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] -z-10 rounded-full" />

      {/* HEADER SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20 px-6"
      >
      </motion.div>

      {/* INFINITE CAROUSEL TRACK */}
      <div className="relative w-full flex items-center">
        <motion.div 
          className="flex gap-8"
          animate={{
            x: [0, -1800], // Adjust based on total width of one set of items
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate events 3 times to ensure no gaps */}
          {[...events, ...events, ...events].map((event, i) => (
            <div 
              key={i} 
              className="workshop-card group flex-shrink-0"
              style={{ width: "400px" }}
            >
              
              {/* IMAGE BOX */}
              <div className="workshop-image-box relative">
                <Image
                  src={event.src}
                  alt={event.title}
                  fill
                  className="workshop-image object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              
              {/* CONTENT BOX */}
              <div className="workshop-content">
                <h3>{event.title}</h3>
                <p>{event.desc}</p>

              </div>

            </div>
          ))}
        </motion.div>
        
        {/* Gradient Fades on Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
      </div>

    </div>
  );
}