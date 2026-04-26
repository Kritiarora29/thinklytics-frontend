"use client";

import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";
import Image from "next/image";

import styles from "./ClientsSection.module.css";

const clients = [
  { name: "Master Union, Gurgaon", logo: "/logos/mastersunion.png" },
  { name: "Growth School", logo: "/logos/growthschool.png" },
  { name: "Mesa School of Business, Bangalore", logo: "/logos/mesa.png" },
  { name: "Tetr College of Business, Dubai", logo: "/logos/tetr.png" },
  { name: "Airtribe", logo: "/logos/airtribe.png" },
  { name: "USV Mumbai", logo: "/logos/usv.png" },
  { name: "Alembic Pharmaceuticals", logo: "/logos/alembic.png" },
  { name: "Ministry of Railways, Raipur", logo: "/logos/ministryofrailways.png" },
  { name: "Upgrad", logo: "/logos/upgrad.png" },
  { name: "Supros", logo: "/logos/supros.png" },
  { name: "Scaler", logo: "/logos/scaler.png" }
];

export default function ClientsSection() {
  return (
    <section className="py-8 md:py-10 bg-black relative overflow-hidden">
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
          {/* Universal Dual-Row Marquee for all screen sizes */}
          <div className={styles.marqueeContainer}>
            {/* Row 1: Scroll Left */}
            <div className={`${styles.marqueeTrack} ${styles.scrollLeft}`}>
              {[...clients, ...clients].map((client, i) => (
                <div key={i} className={styles.inlineClient}>
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                  <span>{client.name}</span>
                </div>
              ))}
            </div>

            {/* Row 2: Scroll Right */}
            <div className={`${styles.marqueeTrack} ${styles.scrollRight}`}>
              {[...[...clients].reverse(), ...[...clients].reverse()].map((client, i) => (
                <div key={i} className={styles.inlineClient}>
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                  <span>{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
