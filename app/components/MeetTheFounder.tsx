"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Building2, GraduationCap, Briefcase, Star } from "lucide-react";
import mentorStyles from "./MentorHighlight.module.css";
import React from "react";

const InfoCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={mentorStyles.card}
  >
    <div className={mentorStyles.iconWrapper}>
      {icon}
    </div>
    <div className={mentorStyles.cardContent}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </motion.div>
);

export default function MeetTheFounder() {
  return (
    <section className="relative w-full py-20 lg:py-32">
      <div className={mentorStyles.container}>
        
        {/* HEADING */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${mentorStyles.heading} mb-16`}
        >
          Meet <span className={mentorStyles.headingHighlight}>the Mentor</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={mentorStyles.mainWrapper}
        >
          {/* ULTRA PREMIUM DECOR */}
          <div className={mentorStyles.grainOverlay} />
          <div className={mentorStyles.glint} />
          <div className={mentorStyles.gridOverlay} />
          
          {/* VIBRANT GLOWS */}
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[150px] -z-10 rounded-full" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[150px] -z-10 rounded-full" />

          <div className={`${mentorStyles.corner} ${mentorStyles.topLeft}`} />
          <div className={`${mentorStyles.corner} ${mentorStyles.topRight}`} />
          <div className={`${mentorStyles.corner} ${mentorStyles.bottomLeft}`} />
          <div className={`${mentorStyles.corner} ${mentorStyles.bottomRight}`} />

          <div className={mentorStyles.founderGrid}>
            {/* LEFT PANEL - PROFILE INFO (3 CARDS) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={mentorStyles.sidePanel}
            >
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
            </motion.div>

            {/* CENTER PANEL - PROFILE IMAGE & BIO */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={mentorStyles.centerPanel}
            >
              <div className={mentorStyles.imageWrapper}>
                <div className={mentorStyles.blobBackground}></div>
                <img
                  src="/divijbajaj_profile.png"
                  alt="Divij Bajaj"
                  className={mentorStyles.profileImage}
                />
              </div>
              <div className={mentorStyles.profileInfo}>
                <h3 className={mentorStyles.name}>Divij Bajaj</h3>
                <p className={mentorStyles.title}>Data Scientist II @ Microsoft</p>
                <p className={mentorStyles.founderTag}>Founder, Thinklytics AI</p>
              </div>
            </motion.div>

            {/* RIGHT PANEL - PROFILE INFO (3 CARDS) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={mentorStyles.sidePanel}
            >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
