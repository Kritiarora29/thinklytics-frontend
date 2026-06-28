"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

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

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  // Autoplay functionality: advances slide every 5 seconds, pauses when hovered
  useEffect(() => {
    if (!mounted || isHovered) return;

    const autoplayInterval = setInterval(() => {
      handleNext();
    }, 1500);

    return () => clearInterval(autoplayInterval);
  }, [mounted, isHovered]);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1024;
  const offsetX = isMobile ? 0 : isTablet ? 180 : 280;

  const N = testimonialsData.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + N) % N);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % N);
  };

  // Drag handler for mobile and desktop swipe gestures
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  // Calculate positioning and rotation coordinates in 3D perspective space
  const getCardTransform = (index: number) => {
    let diff = index - activeIndex;

    // Adjust for circular wrap-around
    if (diff > N / 2) {
      diff -= N;
    } else if (diff < -N / 2) {
      diff += N;
    }

    if (diff === 0) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        opacity: 1,
        zIndex: 10,
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1) {
      return {
        x: offsetX,
        scale: 0.84,
        rotateY: -40,
        opacity: isMobile ? 0 : 0.5,
        zIndex: 5,
        pointerEvents: isMobile ? ("none" as const) : ("auto" as const),
      };
    } else if (diff === -1) {
      return {
        x: -offsetX,
        scale: 0.84,
        rotateY: 40,
        opacity: isMobile ? 0 : 0.5,
        zIndex: 5,
        pointerEvents: isMobile ? ("none" as const) : ("auto" as const),
      };
    } else {
      // Offscreen cards are pushed farther back, rotated, and hidden
      return {
        x: diff > 0 ? offsetX * 1.5 : -offsetX * 1.5,
        scale: 0.7,
        rotateY: diff > 0 ? -50 : 50,
        opacity: 0,
        zIndex: 1,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.gridOverlay} />

      {/* Background Decor Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] -z-10 rounded-full" />

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
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={styles.mainHeading}
          >
            Stories of <span className={styles.headingHighlight}>Transformation</span>
          </motion.h2>
        </div>

        {/* 3D PERSPECTIVE CAROUSEL SLIDER */}
        <div
          className={styles.perspectiveContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Side navigation arrows */}
          <button
            onClick={handlePrev}
            className={`${styles.navBtnSide} ${styles.leftBtn}`}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={28} />
          </button>

          <div className={styles.sliderTrack}>
            {mounted && testimonialsData.map((item, index) => {
              const { x, scale, rotateY, opacity, zIndex, pointerEvents } = getCardTransform(index);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  className={styles.card3D}
                  style={{ pointerEvents }}
                  animate={{
                    x,
                    scale,
                    rotateY,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  onMouseMove={handleMouseMove}
                  onClick={() => {
                    if (!isActive) setActiveIndex(index);
                  }}
                >
                  <div className={styles.grainOverlay} />
                  <div className={styles.glowDot} />

                  {/* Quote Content */}
                  <div className={styles.quoteContainer}>
                    <span className={styles.quoteIcon}>“</span>
                    <p className={styles.quoteText}>{item.quote}</p>
                  </div>

                  {/* Profile Layout */}
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
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className={`${styles.navBtnSide} ${styles.rightBtn}`}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Mobile / Tablet Navigation Dots & Chevrons */}
        <div className={styles.mobileControls}>
          <button
            onClick={handlePrev}
            className={styles.mobileNavBtn}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className={styles.dots}>
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className={styles.mobileNavBtn}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
