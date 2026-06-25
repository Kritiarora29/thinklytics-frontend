"use client";

import { motion } from "framer-motion";
import { Presentation, Cpu, Rocket } from "lucide-react";
import AuroraBackground from "../components/AuroraBackground";
import ParallaxSection from "../components/ParallaxSection";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Consulting & Capability Building",
      icon: <Presentation size={40} />,
      desc: "Helping organizations, institutions, and leaders successfully adopt AI through strategic consulting, training, and capability development.",
      features: ["Readiness Assessment", "ROI Analysis", "GenAI Workshops", "Tech Stack Selection"]
    },
    {
      title: "AI Solutions & Product Engineering",
      icon: <Cpu size={40} />,
      desc: "Designing and building intelligent AI-powered products, applications, and digital solutions tailored to business needs.",
      features: ["Custom AI Development", "LLM Integration", "Predictive Modeling", "NLP Solutions"]
    },
    {
      title: "Innovation & Digital Transformation",
      icon: <Rocket size={40} />,
      desc: "Partnering with organizations to drive innovation, automate operations, and accelerate digital transformation through AI.",
      features: ["Workflow Automation", "Process Optimization", "AI Agentic Workflows", "Scale & Infrastructure"]
    }
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
    <div 
      className="min-h-screen bg-black text-white px-6 md:px-16 pb-20 relative overflow-hidden"
      style={{ paddingTop: "160px" }}
    >
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
            lineHeight: "1.3",
            paddingTop: "2rem",
            paddingBottom: "0.2em"
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
        style={{ fontSize: "1.25rem", lineHeight: "1.6", fontWeight: "500" }}
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
        @media (min-width: 900px) {
          .custom-services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .custom-service-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem;
          flex: 1;
          width: 100%;
          gap: 1.5rem;
          background-color: #0b0b0b;
          border-radius: 1.8rem;
          height: 100%;
        }
        @media (min-width: 768px) {
          .custom-service-inner {
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
          <motion.div key={i} variants={itemVariants} className="service-card-wrapper !mb-0" style={{ maxWidth: '100%', height: '100%', display: 'flex', flexDirection: 'column' }} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="custom-service-inner">
              
              {/* 🔹 ICON */}
              <div className="custom-icon-box text-cyan-400">
                {item.icon}
              </div>

              {/* 🔸 TEXT */}
              <div className="service-content-box flex-1 w-full text-left">
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>{item.title}</h2>
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
// Trigger rebuild