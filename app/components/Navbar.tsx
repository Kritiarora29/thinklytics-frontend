"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Meet Your Mentor", href: "/mentor" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50"
      style={{ backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* 🔷 Logo (Clickable → Home) */}
          <Link href="/" className="flex items-center cursor-pointer group">
            <Image
              src="/logo.png"
              alt="Thinklytics Logo"
              width={140}
              height={40}
              className="transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(0,255,150,0.6)]"
            />
          </Link>

          {/* 🔘 Buttons */}
          <div className="flex items-center gap-6">
            <Link href="/"><button className="nav-btn">Home</button></Link>
            <Link href="/services"><button className="nav-btn">Services</button></Link>
            <Link href="/about"><button className="nav-btn">About Us</button></Link>
            <Link href="/contact"><button className="nav-btn">Contact Us</button></Link>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}