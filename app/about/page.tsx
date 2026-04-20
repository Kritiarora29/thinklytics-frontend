"use client";

import { motion } from "framer-motion";
import AuroraBackground from "../components/AuroraBackground";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20 relative overflow-hidden">
      
      <AuroraBackground />

      {/* HEADER */}
      <div className="text-center mb-24 px-4 pt-10 max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <h2
          style={{
            background: "linear-gradient(90deg, #00f0ff, #a855f7)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.1",
          }}
          className="massive-heading-1"
        >
          Thinklytics AI
        </h2>
        
        {/* <h1 
          // className="massive-heading-1"
          style={{
            background: "linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.1",
          }}
        >
          The Intellect Behind AI
        </h1> */}

        <p className="massive-subtitle mt-2">
          Architecting Enterprise Intelligence • Cultivating Global Talent
        </p>
      </div>

      {/* 🚀 OUR MISSION & VISION (SERVICE CARD STYLE) */}
      <div className="w-full max-w-7xl mx-auto mb-24 z-10 relative">
        <div className="service-card-wrapper">
          <div className="service-card-inner flex-col md:flex-row items-stretch p-0 overflow-hidden">
            
            <div className="flex-1 p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
              <h2 className="text-3xl font-extrabold text-cyan-400 mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                At Thinklytics AI, we bridge the gap between bleeding-edge artificial intelligence research and practical, impactful enterprise solutions. We don't just build neural networks—we build the teams, ecosystems, and architectures that allow modern businesses to operate autonomously and efficiently.
              </p>
            </div>

            <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-purple-400 mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                We believe that the future of computing isn't just algorithmic, it's democratized. Through rigorous masterclasses, open-source implementations, and direct enterprise training, we are actively shaping a world where AI fundamentally amplifies human creativity.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 👑 FOUNDER HIGHLIGHT (REUSING MENTOR CARD CSS LOGIC) */}
      <div className="mb-24 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="massive-heading-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Meet the Founder
          </h2>
        </div>

        <div className="mentor-card-wrapper">
          <div className="mentor-card-inner">
            
            {/* IMAGE */}
            <div className="mentor-image-wrapper border-y-0 border-l-0">
              <img
                src="/divijbajaj_profile.png"
                alt="Divij Bajaj"
                className="mentor-image"
              />
            </div>
            
            {/* CONTENT */}
            <div className="mentor-content-wrapper p-10 md:p-16 border-y-0 border-r-0">
              <h3 className="text-3xl font-bold text-white mb-2">Divij Bajaj</h3>
              <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-8">
                Founder, Thinklytics AI • Microsoft Data Scientist
              </p>
              
              <ul className="space-y-6 text-gray-300 text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-cyan-400 text-2xl mt-1">▹</span>
                  <span>Led the development of highly scalable machine learning and GenAI systems during his tenure at Microsoft.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-400 text-2xl mt-1">▹</span>
                  <span>Educated over 1,000,000+ professionals globally across top Indian platforms in deep learning and NLP architectures.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 text-2xl mt-1">▹</span>
                  <span>Creator of specialized educational frameworks that accelerate the adoption of enterprise LLM agents across Fortune 500 setups.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 🧠 OUR EXPERTISE (REUSING PORTFOLIO CSS LOGIC) */}
      <div className="z-10 relative mt-32 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="massive-heading-2"
            style={{
              background: "linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: "1.1",
            }}>
            Core Expertise
          </h2>
        </div>

        <div className="featured-programs-grid">
          {[
            {
              title: "Generative AI & LLMs",
              desc: "Building specialized context-aware models utilizing LangChain, LlamaIndex, and native OpenAI architectures."
            },
            {
              title: "Intelligent Automation",
              desc: "Deploying high-velocity n8n and Dify workflows to completely autonomous enterprise pipelines."
            },
            {
              title: "Computer Vision",
              desc: "Engineering high-accuracy perception systems for physical and digital infrastructure monitoring."
            },
            {
              title: "Data Science Consulting",
              desc: "End-to-end data pipeline construction, statistical analysis, and predictive deployment."
            }
          ].map((item, i) => (
            <div key={i} className="featured-program-item flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{item.title}</h3>
              <p className="text-gray-400 font-normal leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}