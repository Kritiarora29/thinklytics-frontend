"use client";

import { FaInstagram, FaYoutube, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* TOP SECTION: LOGO & LINKS */}
        <div className={styles.grid}>
          
          {/* COLUMN 1: LOGO & CONTACT */}
          <div className={styles.columnLogo}>
            <Link href="/" className={styles.logoText} onClick={handleHomeClick}>
              <span className={styles.whiteText}>Think</span>
              <span className={styles.cyanText}>Lytics</span>
            </Link>
            <a href="mailto:Thinklyticsaiconsulting@gmail.com" className={styles.emailWrapper}>
              <FaEnvelope className={styles.emailIcon} />
              <span className="text-sm font-medium">
                Thinklyticsaiconsulting@gmail.com
              </span>
            </a>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div className={`${styles.column} ${styles.columnServices}`}>
            <h3 className={styles.columnHeading}>Services</h3>
            <ul className={styles.linkList}>
              <li><Link href="/services" className={styles.footerLink}>AI Strategy</Link></li>
              <li><Link href="/services" className={styles.footerLink}>GenAI Development</Link></li>
              <li><Link href="/services" className={styles.footerLink}>LLM Fine-tuning</Link></li>
              <li><Link href="/services" className={styles.footerLink}>AI Workshops</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: COMPANY */}
          <div className={`${styles.column} ${styles.columnCompany}`}>
            <h3 className={styles.columnHeading}>Company</h3>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.footerLink} onClick={handleHomeClick}>Home</Link></li>
              <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: LEGAL */}
          <div className={`${styles.column} ${styles.columnLegal}`}>
            <h3 className={styles.columnHeading}>Legal</h3>
            <ul className={styles.linkList}>
              <li><span className={`${styles.footerLink} ${styles.disabledLink}`}>Privacy Policy</span></li>
              <li><span className={`${styles.footerLink} ${styles.disabledLink}`}>Terms of Service</span></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: SOCIALS & COPYRIGHT */}
        <div className={styles.bottomBar}>
          
          {/* SOCIAL ICONS */}
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/divij_bajaj5?igsh=NGszdWpnbm1id20w" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com/@padhaiwithdivij?si=uhS23F1KoLBynHSp" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FaYoutube size={20} />
            </a>
            <a href="#" className={`${styles.socialBtn} ${styles.disabledLink}`}>
              <FaLinkedin size={20} />
            </a>
            <a href="#" className={`${styles.socialBtn} ${styles.disabledLink}`}>
              <FaGithub size={20} />
            </a>
          </div>

          {/* COPYRIGHT */}
          <p className={styles.copyright}>
            © {currentYear} Thinklytics AI. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}