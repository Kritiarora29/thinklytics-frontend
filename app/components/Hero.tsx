"use client";

import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";
import ParticleNetwork from "./ParticleNetwork";
import MentorHighlight from "./MentorHighlight";

export default function Hero() {
  return (
    <section className="relative bg-black">

      <div className="
        min-h-screen
        flex flex-col items-center justify-center text-center
        px-6
        pt-24 md:pt-28   /* prevents navbar overlap */
        pb-10
        relative overflow-hidden
      ">

        <ParticleNetwork />
        <AuroraBackground />
        <div className="absolute inset-0 -z-10 grid-bg opacity-40"></div>

        <div className="relative z-10 max-w-5xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              font-extrabold leading-[1.05] tracking-tight text-white
              text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem]
            "
          >
            <span >Let’s Build the Future</span>
            <br />
            <span className="neon-text">with AI — Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              mt-6
              text-base sm:text-lg md:text-2xl
              text-gray-300
              max-w-2xl md:max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Design, build, and scale AI-powered products with speed and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex justify-center gap-4 sm:gap-6 flex-wrap"
          >
            <span className="bg-shine-effect text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-widest font-mono cursor-pointer">
              Get Started
            </span>
          </motion.div>

        </div>
      </div>

      <MentorHighlight />

    </section>
  );
}