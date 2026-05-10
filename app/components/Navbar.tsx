"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`${styles.nav} ${scrolled ? styles.scrolled : styles.initial}`}
    >
      <div className={styles.container}>
        <div className={styles.flexContainer}>

          {/* 🔷 Text Logo (Clickable → Home) */}
          <Link href="/" className={styles.logoText} onClick={handleHomeClick}>
            <span className={styles.whiteText}>Think</span>
            <span className={styles.cyanText}>Lytics</span>
          </Link>

          {/* 🔘 Desktop Buttons */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={styles.navBtn}
                onClick={link.href === "/" ? handleHomeClick : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 🍔 Mobile Hamburger Icon (Three Dots) */}
          <div className={styles.mobileHamburger}>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={styles.hamburgerBtn}
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
          className={styles.mobileMenu}
          style={{ 
            top: scrolled ? '64px' : '88px', 
            height: scrolled ? 'calc(100vh - 64px)' : 'calc(100vh - 88px)',
          }}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.navBtn} 
              onClick={(e) => {
                if (link.href === "/") {
                  handleHomeClick(e);
                } else {
                  setIsOpen(false);
                }
              }} 
              style={{ fontSize: '1.25rem', padding: '1rem' }}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}