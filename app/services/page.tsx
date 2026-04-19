"use client";

import { motion } from "framer-motion";
import AuroraBackground from "../components/AuroraBackground";
import ParallaxSection from "../components/ParallaxSection";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Training & Consulting",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path
            fill="currentColor"
            d="M12 2a5 5 0 015 5v3h1a3 3 0 013 3v5h-2v-5a1 1 0 00-1-1h-1v6h-2v-6H9v6H7v-6H6a1 1 0 00-1 1v5H3v-5a3 3 0 013-3h1V7a5 5 0 015-5z"
          />
        </svg>
      ),
      desc: "Enterprise-grade AI training and consulting for real-world impact.",
    },
    {
      title: "Workshops",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path
            fill="currentColor"
            d="M3 4h18v2H3V4m0 4h18v12H3V8m2 2v8h14v-8H5z"
          />
        </svg>
      ),
      desc: "Hands-on workshops covering GenAI, automation, and tools.",
    },
    {
      title: "Product Development",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path
            fill="currentColor"
            d="M12 2l4 8h-3v6h-2v-6H8l4-8z"
          />
        </svg>
      ),
      desc: "Build and scale AI-powered products from idea to deployment.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20 relative overflow-hidden">

      <AuroraBackground />

      {/* 🔥 TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="massive-heading-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent flex justify-center mb-20"
      >
        Our Services
      </motion.h1>

      {/* ========================= */}
      {/* 🚀 SERVICES (FIXED) */}
      {/* ========================= */}

      <div className="w-full">
        {services.map((item, i) => (
          <div key={i} className="service-card-wrapper">
            <div className="service-card-inner">

              {/* 🔹 ICON */}
              <div className="service-icon-box">
                {item.icon}
              </div>

              {/* 🔸 TEXT */}
              <div className="service-content-box">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* ========================= */}
      {/* ⭐ FEATURED SECTION */}
      {/* ========================= */}

      <ParallaxSection>
        <div style={{ marginTop: "7rem", paddingBottom: "10rem", textAlign: "center" }}>

          <h2 className="massive-heading-2 mb-12">
            Featured Programs
          </h2>

          <div className="featured-programs-grid">
            {[
              "AI Hackathon",
              "upGrad AI Workshop",
              "What Learners Say",
            ].map((item, i) => (
              <div key={i} className="featured-program-item">
                {item}
              </div>
            ))}
          </div>

        </div>
      </ParallaxSection>

    </div>
  );
}