"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MentorHighlight() {

  const [counts, setCounts] = useState({ learners: 0, linkedin: 0, brands: 0 });

  useEffect(() => {
    let l = 0, li = 0, b = 0;
    const i = setInterval(() => {
      l += 20000; li += 1000; b += 1;
      setCounts({
        learners: Math.min(l, 1000000),
        linkedin: Math.min(li, 50000),
        brands: Math.min(b, 30),
      });
      if (l >= 1000000) clearInterval(i);
    }, 30);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="w-full px-8 md:px-24 py-24 bg-black">

      {/* HEADING */}
      <div className="text-center mb-16 px-4">
        <h2
          style={{
            background: "linear-gradient(90deg, #00f0ff, #a855f7)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="massive-heading-1 "
        >
          Meet your Mentor
        </h2>
      </div>

      {/* MAIN CARD */}
      <div className="mentor-card-wrapper">
        <div className="mentor-card-inner">

          {/* LEFT — IMAGE */}
          <div className="mentor-image-wrapper">
            <img
              src="/divijbajaj_profile.png"
              alt="Divij Bajaj"
              className="mentor-image"
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="mentor-content-wrapper">

            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Divij Bajaj</h3>
            <p className="text-cyan-400 text-sm mb-6 font-medium tracking-wide">FOUNDER, THINKLYTICS AI</p>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
              Data & Applied Scientist II at Microsoft with 6+ years of experience
              building AI/ML systems. Founder of Thinklytics AI and creator of Edu.AI.
            </p>

            {/* COUNTERS */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-auto">
              <div>
                <p className="text-lg md:text-xl font-bold text-white">{(counts.learners / 1000000).toFixed(1)}M+</p>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-tighter mt-1">Learners</p>
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-white">{Math.floor(counts.linkedin / 1000)}K+</p>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-tighter mt-1">LinkedIn</p>
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-white">{counts.brands}+</p>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-tighter mt-1">Brands</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* VIDEO HEADING */}
      <div className="text-center mt-32 mb-10 px-4">
        <h2
          style={{
            background: "linear-gradient(90deg, #00f0ff, #a855f7)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="massive-heading-2"
        >
          Sandeep Maheshwari × Divij Bajaj
        </h2>
        <p className="massive-subtitle">
          Featured on India's Biggest YouTube Channel • <span style={{ color: "#00f0ff" }}>AI | OpenAI & ChatGPT</span>
        </p>
      </div>

      {/* VIDEO CARD (MASSIVE WIDTH) */}
      <div className="video-card-wrapper">
        <div className="video-card-inner">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/0JHypbaymQI"
            title="Sandeep Maheshwari x Divij Bajaj – AI Session"
            allowFullScreen
          />
        </div>
      </div>

    </section>
  );
}