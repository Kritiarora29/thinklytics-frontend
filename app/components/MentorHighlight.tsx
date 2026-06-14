"use client";

import { motion } from "framer-motion";
import { Users, Building2, Globe, Bot, Cpu, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import styles from "./MentorHighlight.module.css";
import Image from "next/image";

export default function MentorHighlight() {
  return (
    <section className="w-full bg-black overflow-hidden py-32 lg:py-40">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.mainWrapper}
        >
          {/* ULTRA PREMIUM DECOR */}
          <div className={styles.grainOverlay} />
          <div className={styles.glint} />
          <div className={styles.gridOverlay} />
          
          {/* VIBRANT GLOWS */}
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[150px] -z-10 rounded-full" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[150px] -z-10 rounded-full" />

          <div className={`${styles.corner} ${styles.topLeft}`} />
          <div className={`${styles.corner} ${styles.topRight}`} />
          <div className={`${styles.corner} ${styles.bottomLeft}`} />
          <div className={`${styles.corner} ${styles.bottomRight}`} />

          <div className={styles.showcaseGrid}>
            
            {/* LEFT: CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse" />
                </div>
                {/* <span className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase">
                  Thinklytics // Neural Architecture
                </span> */}
              </div>
              
              <h2 className={styles.showcaseHeading}>
                <span className={styles.outlineText}>The Future is</span>
                <span className={styles.highlightText}>Artificial Intelligence</span>
              </h2>
              
              <div className="flex flex-col gap-5 mb-8">
                <div className={styles.bulletPoint}>
                  <div className={`${styles.bulletIcon} bg-cyan-500/10 text-cyan-400`}>
                    <Sparkles size={24} />
                  </div>
                  <span className={styles.bulletText}>Master GenAI Tools & Frameworks</span>
                </div>

                <div className={styles.bulletPoint}>
                  <div className={`${styles.bulletIcon} bg-purple-500/10 text-purple-400`}>
                    <Cpu size={24} />
                  </div>
                  <span className={styles.bulletText}>Build Production-Ready AI Agents</span>
                </div>

                <div className={styles.bulletPoint}>
                  <div className={`${styles.bulletIcon} bg-blue-500/10 text-blue-400`}>
                    <Rocket size={24} />
                  </div>
                  <span className={styles.bulletText}>Scale Your Business with Automation</span>
                </div>
              </div>

            </motion.div>

            {/* RIGHT: MEDIA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={styles.mediaWrapper}
            >
              <iframe
                className={styles.videoIframe}
                src="https://www.youtube.com/embed/0JHypbaymQI"
                title="Sandeep Maheshwari x Divij Bajaj AI Session"
                allowFullScreen
              />
              
              {/* NAME CARD OVERLAY */}
              <div className={styles.nameCard}>
                <div className="flex flex-col">
                  <h5>Divij Bajaj</h5>
                  <p>Data & Applied Scientist at Microsoft</p>
                </div>

              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}