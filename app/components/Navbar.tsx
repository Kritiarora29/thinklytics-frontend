"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="sticky top-0 left-0 w-full z-[999] bg-black"
      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
    >
      <style>{`
        .desktop-nav {
          display: none;
        }
        .mobile-hamburger {
          display: flex;
        }
        .mobile-menu-overlay {
          display: flex;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-hamburger {
            display: none;
          }
          .mobile-menu-overlay {
            display: none !important;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 relative z-[1000] bg-black">
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

          {/* 🔘 Desktop Buttons */}
          <div className="desktop-nav items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <button className="nav-btn">{link.name}</button>
              </Link>
            ))}
          </div>

          {/* 🍔 Mobile Hamburger Icon (Three Dots) */}
          <div className="mobile-hamburger items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <g fill="currentColor" stroke="none">
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="12" cy="12" r="2.5" />
                    <circle cx="12" cy="19" r="2.5" />
                  </g>
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* 📱 Mobile Menu Overlay Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu-overlay flex-col items-center gap-6 pt-12 shadow-2xl"
          style={{ 
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(24px)',
            zIndex: 900,
            top: '100%', 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              <button className="nav-btn w-64 justify-center py-4 text-lg">{link.name}</button>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}