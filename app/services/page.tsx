"use client";

import { motion } from "framer-motion";
import AuroraBackground from "../components/AuroraBackground";
import ParallaxSection from "../components/ParallaxSection";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Strategy & Consulting",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path fill="currentColor" d="M12 2a5 5 0 015 5v3h1a3 3 0 013 3v5h-2v-5a1 1 0 00-1-1h-1v6h-2v-6H9v6H7v-6H6a1 1 0 00-1 1v5H3v-5a3 3 0 013-3h1V7a5 5 0 015-5z" />
        </svg>
      ),
      desc: "Develop a robust AI roadmap aligned with your business goals. Our experts help you navigate complexities and identify high-impact use cases.",
      features: ["Readiness Assessment", "ROI Analysis", "Tech Stack Selection"]
    },
    {
      title: "Custom AI Development",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path fill="currentColor" d="M12 2l4 8h-3v6h-2v-6H8l4-8z" />
        </svg>
      ),
      desc: "Build scalable and secure AI solutions tailored to your unique needs. Specializing in LLMs, computer vision, and predictive models.",
      features: ["LLM Integration", "Predictive Modeling", "NLP Solutions"]
    },
    {
      title: "GenAI Workshops",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path fill="currentColor" d="M3 4h18v2H3V4m0 4h18v12H3V8m2 2v8h14v-8H5z" />
        </svg>
      ),
      desc: "Empower your team with hands-on GenAI workshops. Learn to leverage state-of-the-art tools to automate workflows and drive innovation.",
      features: ["Prompt Engineering", "Workflow Automation", "AI Ethics & Safety"]
    },
    {
      title: "Model Fine-Tuning",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c2.12 0 4.07-.74 5.61-1.97l3.68 3.68c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.68-3.68C19.26 16.07 20 14.12 20 12c0-4.97-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
        </svg>
      ),
      desc: "Adapt foundational models to your specific domain. We fine-tune models on your proprietary data for higher accuracy and relevance.",
      features: ["Domain Adaptation", "RLHF", "Model Optimization"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 pt-28 md:pt-36 pb-20 relative overflow-hidden">
      <AuroraBackground />

      {/* 🔥 TITLE */}
      <div className="w-full flex justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="massive-heading-1 mb-8 text-center"
          style={{
            background: "linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.1",
          }}
        >
          Transform with AI
        </motion.h1>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-gray-400 max-w-4xl mx-auto mb-20"
        style={{ fontSize: "1.5rem", lineHeight: "1.6", fontWeight: "500" }}
      >
        Unlock the full potential of artificial intelligence to revolutionize your business, optimize operations, and create unprecedented value.
      </motion.p>

      {/* ========================= */}
      {/* 🚀 SERVICES (GRID WITH ANIMATION) */}
      {/* ========================= */}

      <style>{`
        .custom-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 85rem;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .custom-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .custom-service-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem;
          height: 100%;
          gap: 1.5rem;
          background-color: #0b0b0b;
          border-radius: 1.8rem;
        }
        @media (min-width: 768px) {
          .custom-service-inner {
            flex-direction: row;
            align-items: center;
            padding: 2.5rem;
            gap: 2rem;
          }
        }
        .custom-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 5rem;
          height: 5rem;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1));
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }
        .custom-features-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .custom-feature-chip {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.375rem 1rem;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #67e8f9;
        }
      `}</style>

      <motion.div 
        className="custom-services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((item, i) => (
          <motion.div key={i} variants={itemVariants} className="service-card-wrapper !mb-0" style={{ maxWidth: '100%', height: '100%' }} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="custom-service-inner">
              
              {/* 🔹 ICON */}
              <div className="custom-icon-box text-cyan-400">
                {item.icon}
              </div>

              {/* 🔸 TEXT */}
              <div className="service-content-box flex-1 w-full text-left">
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>{item.title}</h2>
                <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6 }}>{item.desc}</p>
                <div className="custom-features-flex">
                  {item.features.map((feature, idx) => (
                    <span key={idx} className="custom-feature-chip">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ========================= */}
      {/* ⭐ FEATURED SECTION */}
      {/* ========================= */}

      <ParallaxSection>
        <div className="mt-40 pb-32 text-center max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="massive-heading-2 mb-16 text-shine-effect"
          >
            Specialized Programs
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="featured-programs-grid"
          >
            {[
              { title: "AI Hackathon", desc: "Build & compete with GenAI" },
              { title: "Executive Briefing", desc: "AI strategy for leaders" },
              { title: "upGrad AI Workshop", desc: "Hands-on model training" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="featured-program-item group hover:bg-gradient-to-b hover:from-white/5 hover:to-transparent"
              >
                <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

    </div>
  );
}