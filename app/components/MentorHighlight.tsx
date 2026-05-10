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
        
        {/* MENTOR SHOWCASE SECTION */}
        <div className={`${styles.showcaseGrid} mt-20 lg:mt-32`}>
          
          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <h2 className={styles.showcaseHeading}>
              The Future is <br />
              <span className={styles.highlightText}>Artificial Intelligence</span>
            </h2>
            
            <div className="flex flex-col gap-4 mb-8">
              <h3 className="text-xl md:text-2xl font-black text-white border-l-4 border-cyan-500 pl-4">
                Master GenAI Tools & Frameworks
              </h3>
              <h3 className="text-xl md:text-2xl font-black text-white border-l-4 border-purple-500 pl-4">
                Build Production-Ready AI Agents
              </h3>
              <h3 className="text-xl md:text-2xl font-black text-white border-l-4 border-blue-500 pl-4">
                Scale Your Business with Automation
              </h3>
            </div>

          </motion.div>

          {/* RIGHT: MEDIA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              <h5>Divij Bajaj</h5>
              <p>Leading AI Developer & Consultant</p>
              <p className={styles.university}>IIT Delhi Alumni</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}