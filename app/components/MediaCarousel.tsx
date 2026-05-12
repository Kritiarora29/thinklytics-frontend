"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./MediaCarousel.module.css";

const events = [
  {
    src: "/gallery1.png",
    tag: "Masterclass",
    title: "AI Workshop Poster – upGrad",
    desc: "Discover cutting-edge strategies in our exclusive AI masterclass. Access insider knowledge on constructing real GenAI solutions using Python and advanced enterprise LLMs.",
  },
  {
    src: "/gallery2.png",
    tag: "Training",
    title: "Featured AI Masterclass",
    desc: "Fast-track your career with premium live training sessions focusing on building powerful automation flows and conversational AI pipelines for real-world impact.",
  },
  {
    src: "/gallery3.png",
    tag: "Hands-on",
    title: "Live AI Workshop – Training",
    desc: "An intensive physical session where industry leaders guide you through building robust AI tools, covering everything from prompt engineering to deployment.",
  }
];

export default function MediaCarousel() {
  return (
    <section className="w-full pt-48 pb-32 relative overflow-hidden bg-[#050505]">
      <div className={styles.gridOverlay} />
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] -z-10 rounded-full" />

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-cyan-500" />
            <span className="text-xs font-mono tracking-[0.4em] text-cyan-500 uppercase">Impact Ledger // Vol. 01</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-8">
            Media <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Footprint</span>
          </h2>
          
          <p className="text-lg md:text-xl font-bold text-slate-300 max-w-3xl leading-tight border-l-4 border-cyan-500/30 pl-6">
            Pioneering the AI Revolution: Empowering Global Institutions Through Hands-On Innovation.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.card}
            >
              <div className={styles.grainOverlay} />
              <div className={styles.glint} />
              
              <div className={styles.imageWrapper}>
                <Image
                  src={event.src}
                  alt={event.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className={styles.overlay} />
              </div>
              
              <div className={styles.content}>
                <span className={styles.badge}>{event.tag}</span>
                <h3 className={styles.title}>{event.title}</h3>
                <p className={styles.desc}>{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}