"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./TestimonialsMarqueeSection.module.css";

interface Testimonial {
  name: string;
  company: string;
  designation: string;
  quote: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Richard Lord",
    company: "Alpine Studio LLC",
    designation: "Executive Director",
    quote: "I've attended quite a few AI sessions before, but this one stood out because of how practical it was. The examples were relevant and easy to relate to.",
    image: "/feedback/Richard Lord.jpeg"
  },
  {
    name: "Kartik Damodar",
    company: "Guardian Capital",
    designation: "Co-Founder",
    quote: "What I liked most was that the focus wasn't just on AI tools, but on how to actually use them in real work scenarios. Very insightful session.",
    image: "/feedback/Kartik Damodar.jpeg"
  },
  {
    name: "Lakshmi Thara Ashok",
    company: "EY",
    designation: "Business Transformation Manager",
    quote: "I appreciated the hands-on approach and the willingness to answer questions in detail. The session felt interactive rather than just another presentation.",
    image: "/feedback/Lakshmi Thara Ashok.png"
  },
  {
    name: "Abhijit Chowdhury",
    company: "SITA India",
    designation: "Associate Vice President",
    quote: "What sets these sessions apart is the balance between technical knowledge and practical business applications. It never felt overwhelming.",
    image: "/feedback/Abhijit chowdhury.png"
  },
  {
    name: "Akansha S",
    company: "Punctualiti",
    designation: "Founder’s Office & Product",
    quote: "One of the few workshops where I felt I learned something genuinely useful. The concepts were explained clearly and backed by practical demonstrations.",
    image: "/feedback/Akansha S.jpeg"
  }
];

export default function TestimonialsMarqueeSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.gridOverlay} />
      
      {/* Background Decor Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] -z-10 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADING */}
        <div className={styles.header}>
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.subHeading}
          >
            Alternative Layout Comparison
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={styles.mainHeading}
          >
            Continuous Scrolling <span className={styles.headingHighlight}>Marquee</span>
          </motion.h2>
        </div>

        {/* MARQUEE CAROUSEL */}
        <div className={styles.carouselContainer}>
          <div className={styles.marqueeTrack}>
            {/* Loop through testimonials twice to make the horizontal scroll infinite */}
            {mounted && [...testimonialsData, ...testimonialsData].map((item, index) => (
              <div 
                key={index} 
                className={styles.card}
                onMouseMove={handleMouseMove}
              >
                <div className={styles.grainOverlay} />
                <div className={styles.glowDot} />
                
                {/* Quote Content */}
                <div className={styles.quoteContainer}>
                  <span className={styles.quoteIcon}>“</span>
                  <p className={styles.quoteText}>{item.quote}</p>
                </div>
                
                {/* Profile Footer Layout */}
                <div className={styles.profileContainer}>
                  <div className={styles.avatarWrapper}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.info}>
                    <h4 className={styles.name}>{item.name}</h4>
                    <span className={styles.designation}>{item.designation}</span>
                    <span className={styles.company}>{item.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
