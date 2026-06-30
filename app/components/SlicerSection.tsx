import React from 'react';
import Image from 'next/image';
import styles from './SlicerSection.module.css';

const imageData = [
  { src: "AI & Emerging Technologies Bootcamp With Chandigarh University.jpeg", desc: "Exploring the latest in AI and emerging tech with students." },
  { src: "AI Awareness session at FORE College.jpeg", desc: "Spreading knowledge and awareness about AI fundamentals." },
  { src: "AI Entrepreneurship Workshop.jpeg", desc: "Empowering founders to build AI-driven businesses." },
  { src: "AI Master class with Upgrad.jpeg", desc: "Deep dive into advanced AI concepts and applications." },
  { src: "AI Product Building Workshop.jpeg", desc: "Hands-on session on creating scalable AI products." },
  { src: "AI Startup & Founder Workshops.jpeg", desc: "Strategic insights for AI startups and early-stage founders." },
  { src: "AI for Career Growth at BVP College.jpeg", desc: "Leveraging AI tools to accelerate career opportunities." },
  { src: "AI for Future Builders X Mesa school.JPG.jpeg", desc: "Inspiring the next generation of AI innovators." },
  { src: "Building AI Products That Matter.jpeg", desc: "Focusing on user-centric AI solutions and real-world impact." },
  { src: "Future Talks with Sandeep.jpeg", desc: "Interactive discussions on the future of technology." },
  { src: "Hands-On AI Workshop with Masters Union.jpeg", desc: "Practical training on building functional AI tools." }
];

export default function SlicerSection() {
  return (
    <section className={styles.slicerSection}>
      <div className={styles.header}>
        <h2 className={styles.subHeading}>ThinklyticsAI in Action</h2>
        <h3 className={styles.mainHeading}>Workshops & Masterclasses</h3>
      </div>
      <div className={styles.slicerContainer}>
        <div className={styles.slicerTrack}>
          {/* Double the images to create an infinite loop effect */}
          {[...imageData, ...imageData].map((item, index) => {
            const title = item.src.replace('.jpeg', '').replace('.JPG', '');
            return (
              <div key={index} className={styles.imageWrapper}>
                <Image 
                  src={`/slicer/${item.src}`} 
                  alt={title} 
                  fill
                  sizes="(max-width: 768px) 320px, 500px"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.textContainer}>
                    <h4 className={styles.tagLine}>{title}</h4>
                    <p className={styles.description}>{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
