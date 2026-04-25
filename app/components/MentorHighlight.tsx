"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Building2, GraduationCap, Briefcase, Star } from "lucide-react";
import styles from "./MentorHighlight.module.css";

export default function MentorHighlight() {
  return (
    <section className="w-full bg-black overflow-hidden">
      <div className={styles.container}>
        {/* HEADING */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.heading}
        >
          Meet <span className={styles.headingHighlight}>the Mentor</span>
        </motion.h2>

        <div className={styles.bentoGrid}>
          {/* LEFT PANEL - PROFILE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.leftPanel}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.blobBackground}></div>
              <img
                src="/divijbajaj_profile.png"
                alt="Divij Bajaj"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileInfo}>
              <h3 className={styles.name}>Divij Bajaj</h3>
              <p className={styles.title}>Data Scientist II @ Microsoft</p>
              <p className={styles.founderTag}>Founder, Thinklytics AI</p>
            </div>
          </motion.div>

          {/* RIGHT PANEL - CARDS GRID */}
          <div className={styles.rightPanel}>
            <div className={styles.cardsGrid}>
              <InfoCard 
                icon={<Users size={22} />} 
                title="1,000,000+" 
                description="Learners Worldwide" 
                delay={0.1}
              />
              <InfoCard 
                icon={<Calendar size={22} />} 
                title="6+ Years" 
                description="Industry Experience" 
                delay={0.2}
              />
              <InfoCard 
                icon={<Building2 size={22} />} 
                title="30+ Brands" 
                description="Brands Transformed" 
                delay={0.3}
              />
              <InfoCard 
                icon={<GraduationCap size={22} />} 
                title="GenAI Architect" 
                description="Specializing in high-scale Generative AI systems at Microsoft." 
                delay={0.4}
              />
              <InfoCard 
                icon={<Briefcase size={22} />} 
                title="AI Educator" 
                description="Empowering global learners in Deep Learning and NLP through Edu.AI." 
                delay={0.5}
              />
              <InfoCard 
                icon={<Star size={22} />} 
                title="Strategic Innovator" 
                description="Developing autonomous AI agents for enterprise digital transformation." 
                delay={0.6}
              />
            </div>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="mt-52">
          <div className="text-center mb-12">
            <h2 className={styles.heading}>
              Sandeep Maheshwari <span className={styles.headingHighlight}>×</span> Divij Bajaj
            </h2>
            <p className="text-gray-400 uppercase tracking-[0.2em] text-sm md:text-base -mt-4 mb-4 text-center">
              Featured on India's Biggest YouTube Channel • <span className="text-cyan-400">AI | OpenAI & ChatGPT</span>
            </p>
          </div>

          <div className="video-card-wrapper max-w-5xl mx-auto">
            <div className="video-card-inner !p-4 !bg-[#0a0a0a] !border !border-white/5">
              <iframe
                className="video-iframe rounded-2xl"
                src="https://www.youtube.com/embed/0JHypbaymQI"
                title="Sandeep Maheshwari x Divij Bajaj – AI Session"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={styles.card}
    >
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}