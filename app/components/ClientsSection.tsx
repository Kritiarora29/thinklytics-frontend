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
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative z-10">

        {/* HEADING */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Expertise Powers
            </h2>
            <h3 className="text-4xl md:text-7xl font-extrabold neon-text">
              World-Class Organizations
            </h3>
          </motion.div>
        </div>

        {/* SLIDING LOGO MARQUEE */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className={styles.marqueeItem}>
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  width={40} 
                  height={40} 
                  className={styles.marqueeLogo}
                />
                <span className={styles.marqueeText}>
                  {client.name.split(',')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* STATS CARDS */}
        <div className={`${styles.statsGrid} mt-32`}>
          <StatCard 
            value="30+" 
            label="Businesses Enabled" 
            desc="AI systems & automation implemented globally"
          />
          <StatCard 
            value="1M+" 
            label="Learners Trained" 
            desc="Empowering the next generation of AI talent"
          />
          <StatCard 
            value="500+" 
            label="AI Models Deployed" 
            desc="Production-ready GenAI and ML solutions"
          />
        </div>

      </div>
    </section>
  );
}

function StatCard({ value, label, desc }: { value: string, label: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={styles.statCard}
    >
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
      <p className="text-gray-500 text-xs mt-3 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
