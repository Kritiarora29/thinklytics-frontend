"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./HeroStyles.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      
      {/* Background Image */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/ai_face_hero.png"
          alt="AI Innovation Background"
          fill
          sizes="100vw"
          className={styles.bgImage}
          priority
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.contentWrapper}
        >
          <h1 className={styles.heading}>
            Let's build the <br />
            future with AI,{" "}
            <span className={styles.gradientText}>
              not by AI.
            </span>
          </h1>
          
          <p className={styles.description}>
            Design, build, and scale AI-powered products with speed and precision. <br className={styles.hideMobile} /> ThinklyticsAI helps you leverage cutting-edge technology to transform your business.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={styles.btnContainer}
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
        </motion.div>
      </div>
    </section>
  );
}