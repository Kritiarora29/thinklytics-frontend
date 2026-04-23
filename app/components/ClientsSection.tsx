"use client";

import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";

import styles from "./ClientsSection.module.css";

const clients = [
  "Master Union, Gurgaon",
  "Growth School",
  "Mesa School of Business, Bangalore",
  "Tetr College of Business, Dubai",
  "Airtribe",
  "USV Mumbai",
  "Alembic Pharmaceuticals",
  "Ministry of Railways, Raipur",
  "Upgrad",
  "Supros",
  "Scaler"
];

export default function ClientsSection() {
  return (
    <section className="py-12 md:py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AuroraBackground />
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20 relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="massive-heading-2 neon-text mb-4"
          >
            Our Clients
          </motion.h2>
          <div className="h-1.5 w-28 bg-gradient-to-r from-[#00f0ff] to-[#a855f7] mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
        </div>

        <div className="my-10 md:my-20">
          {/* Desktop Grid (Hidden on Mobile) */}
          <div className={styles.clientsGrid}>
            {clients.map((client, i) => (
              <ClientCard key={i} name={client} index={i} />
            ))}
          </div>

          {/* Mobile/Tablet Dual-Row Marquee (Hidden on Desktop) */}
          <div className={styles.marqueeContainer}>
            {/* Row 1: Scroll Left */}
            <div className={`${styles.marqueeTrack} ${styles.scrollLeft}`}>
              {[...clients.slice(0, 6), ...clients.slice(0, 6)].map((client, i) => (
                <div key={i} className={styles.inlineClient}>
                  {client}
                </div>
              ))}
            </div>

            {/* Row 2: Scroll Right */}
            <div className={`${styles.marqueeTrack} ${styles.scrollRight}`}>
              {[...clients.slice(6), ...clients.slice(6)].map((client, i) => (
                <div key={i} className={styles.inlineClient}>
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={styles.clientCard}
    >
      <span className={styles.clientName}>
        {name}
      </span>
    </motion.div>
  );
}
