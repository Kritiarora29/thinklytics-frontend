"use client";

import { motion } from "framer-motion";
import { Presentation, Cpu, Rocket } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./ServicesSection.module.css";
import React from "react";

const services = [
  {
    icon: <Presentation size={28} />,
    title: "AI Consulting & Capability Building",
    description: "Helping organizations, institutions, and leaders successfully adopt AI through strategic consulting, training, and capability development.",
    link: "/services",
  },
  {
    icon: <Cpu size={28} />,
    title: "AI Solutions & Product Engineering",
    description: "Designing and building intelligent AI-powered products, applications, and digital solutions tailored to business needs.",
    link: "/services",
  },
  {
    icon: <Rocket size={28} />,
    title: "Innovation & Digital Transformation",
    description: "Partnering with organizations to drive innovation, automate operations, and accelerate digital transformation through AI.",
    link: "/services",
  }
];

export default function ServicesSection() {
  const router = useRouter();

  const handleCardClick = (link: string) => {
    router.push(link);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>
            What we <span className={styles.headingHighlight}>Offer</span>
          </h2>
          <p className={styles.subheading}>
            Empowering your digital transformation journey with cutting-edge AI solutions and strategic consulting.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onClick={() => handleCardClick(service.link)}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              
              <div className={styles.buttonWrapper}>
                <Link 
                  href="/contact" 
                  className={styles.bookButton}
                  onClick={handleButtonClick}
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
