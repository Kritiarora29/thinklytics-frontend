"use client";

import { motion } from "framer-motion";

export default function MediaScroller() {
  const items = ["gallery1.png", "gallery2.png", "gallery3.png"];

  return (
    <div className="relative overflow-hidden whitespace-nowrap p-6">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="flex gap-4"
      >
        {[...items, ...items].map((item, i) => (
          <img
            key={i}
            src={`/${item}`}
            alt={`Gallery ${(i % items.length) + 1}`}
            className="h-40 rounded-lg flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}