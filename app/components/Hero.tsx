"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import MentorHighlight from "./MentorHighlight";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      
      {/* Background Glows */}
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={styles.heading}>
              Let's build the <br />
              future with AI,{" "}
              <span className={styles.gradientText}>
                not by AI.
              </span>
            </h1>
            
            <p className={styles.description}>
              Design, build, and scale AI-powered products with speed and precision. ThinkLytics AI helps you leverage cutting-edge technology to transform your business.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/services">
                <button className={styles.ctaButton}>
                  <span className={styles.ctaText}>
                    Get Started
                    <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className={styles.btnOverlay} />
                </button>
              </Link>
            </motion.div>

            {/* Subtle Stat/Social proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={styles.socialProof}
            >
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/ai_face_hero.png"
                alt="AI Innovation"
                fill
                className={styles.heroImage}
                priority
              />
              {/* Overlay glow */}
              <div className={styles.imageMask} />
            </div>
            
          </motion.div>
        </div>
      </div>

      <MentorHighlight />

    </section>
  );
}