"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative mt-24 px-6 pb-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* 💎 Same Glass Container */}
        <div className="glass-nav flex items-center justify-between px-8 py-4">

          {/* 🔘 Links */}
          <div className="flex items-center gap-6 flex-wrap ">
            <a href="mailto:Thinklyticsaiconsulting@gmail.com" className="nav-btn" target="_blank" style={{ textDecoration: "none" }}><FaEnvelope /> Email</a>
            <a href="https://www.instagram.com/divij_bajaj5?igsh=NGszdWpnbm1id20w" className="nav-btn" target="_blank" style={{ textDecoration: "none" }}><FaInstagram /> Instagram</a>
            <a href="https://youtube.com/@padhaiwithdivij?si=uhS23F1KoLBynHSp" className="nav-btn" target="_blank" style={{ textDecoration: "none" }}><FaYoutube /> YouTube</a>
          </div>

          {/* © */}
          <p className="text-gray-400 text-sm whitespace-nowrap">
            © {new Date().getFullYear()} rights reserved by Thinklytics
          </p>

        </div>

      </div>
    </motion.footer>
  );
}