"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, Sparkles, Send, CheckCircle, ArrowRight, User, Phone, Briefcase, GraduationCap, FileText } from "lucide-react";
import AuroraBackground from "../components/AuroraBackground";
import styles from "./ContactPage.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    purpose: "",
    category: "",
    institution: "",
    course: "",
    company: "",
    designation: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (category: string) => {
    setFormData(prev => ({
      ...prev,
      category,
      institution: category === "student" ? prev.institution : "",
      course: category === "student" ? prev.course : "",
      company: category === "professional" ? prev.company : "",
      designation: category === "professional" ? prev.designation : ""
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setFormData({
          name: "", phone: "", email: "", age: "", purpose: "",
          category: "", institution: "", course: "", company: "", designation: ""
        });
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }

    setLoading(false);
  };

  // Entry animation variants for columns
  const leftColVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const rightColVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.1 } }
  };

  const infoListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const infoItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <div className={styles.contactSection}>
      <AuroraBackground />
      <div className={styles.gridOverlay}></div>

      {/* Background Orbs */}
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <div className={styles.container}>
        {/* Left Column - Information */}
        <motion.div 
          className={styles.contactInfo}
          initial="hidden"
          animate="visible"
          variants={leftColVariants}
        >
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Connect with us</span>
          </div>

          <h1 className={styles.title}>
            Let&apos;s Build the <br />
            <span className={styles.gradientText}>Future of AI</span> Together
          </h1>

          <p className={styles.description}>
            Have a project in mind, need expert consulting, or want to explore customized enterprise AI training? Connect with our team of engineers and consultants. We design scalable AI systems built for your exact needs.
          </p>

          <motion.div 
            className={styles.infoGrid}
            variants={infoListVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.infoCard} variants={infoItemVariants}>
              <div className={styles.iconBox}>
                <Mail size={20} />
              </div>
              <div className={styles.infoCardContent}>
                <h3 className={styles.infoCardTitle}>Direct Email</h3>
                <p className={styles.infoCardText}>info@thinklytics.ai</p>
              </div>
            </motion.div>

            <motion.div className={styles.infoCard} variants={infoItemVariants}>
              <div className={styles.iconBox}>
                <Clock size={20} />
              </div>
              <div className={styles.infoCardContent}>
                <h3 className={styles.infoCardTitle}>Response Time</h3>
                <p className={styles.infoCardText}>Under 24 hours</p>
              </div>
            </motion.div>

            <motion.div className={styles.infoCard} variants={infoItemVariants}>
              <div className={styles.iconBox}>
                <Sparkles size={20} />
              </div>
              <div className={styles.infoCardContent}>
                <h3 className={styles.infoCardTitle}>AI Demonstration</h3>
                <p className={styles.infoCardText}>Custom live walk-throughs</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Form Card */}
        <motion.div 
          className={styles.formCard}
          initial="hidden"
          animate="visible"
          variants={rightColVariants}
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div 
                key="success-state"
                className={styles.successOverlay}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.successIconWrapper}>
                  <CheckCircle size={40} />
                </div>
                <h2 className={styles.successTitle}>Inquiry Sent!</h2>
                <p className={styles.successText}>
                  Thank you for reaching out. An AI specialist will contact you shortly to schedule our discovery call.
                </p>
                <button 
                  onClick={() => setSuccess(false)} 
                  className={styles.resetBtn}
                >
                  Submit Another Form
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="form-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col gap-6"
              >
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Get in Touch</h2>
                  <p className={styles.formSubtitle}>Fill out the discovery form below.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  {error && (
                    <div className={styles.alertError}>
                      {error}
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>
                        Name <span>*</span>
                      </label>
                      <input 
                        required 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className={styles.customInput} 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>
                        Email Address <span>*</span>
                      </label>
                      <input 
                        required 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className={styles.customInput} 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>

                  {/* Phone & Age */}
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Phone Number</label>
                      <input 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className={styles.customInput} 
                        placeholder="+1 (555) 000-0000" 
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Age</label>
                      <input 
                        name="age" 
                        type="number" 
                        value={formData.age} 
                        onChange={handleChange} 
                        className={styles.customInput} 
                        placeholder="e.g. 28" 
                      />
                    </div>
                  </div>

                  {/* Purpose */}
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Purpose of Query</label>
                    <input 
                      name="purpose" 
                      value={formData.purpose} 
                      onChange={handleChange} 
                      className={styles.customInput} 
                      placeholder="e.g. AI product development support" 
                    />
                  </div>

                  {/* Category Selection */}
                  <div className={styles.inputGroup}>
                    <label className={styles.categoryLabel}>I am a...</label>
                    <div className={styles.categoryCards}>
                      <div 
                        className={`${styles.categoryCard} ${formData.category === "student" ? styles.categoryCardSelected : ""}`}
                        onClick={() => handleCategorySelect("student")}
                      >
                        <GraduationCap className={styles.categoryCardIcon} size={22} />
                        <span className={styles.categoryCardTitle}>Student</span>
                      </div>
                      <div 
                        className={`${styles.categoryCard} ${formData.category === "professional" ? styles.categoryCardSelected : ""}`}
                        onClick={() => handleCategorySelect("professional")}
                      >
                        <Briefcase className={styles.categoryCardIcon} size={22} />
                        <span className={styles.categoryCardTitle}>Professional</span>
                      </div>
                    </div>
                  </div>

                  {/* Conditional Fields */}
                  <AnimatePresence>
                    {formData.category === "student" && (
                      <motion.div
                        key="student-fields"
                        initial={{ opacity: 0, height: 0, scale: 0.98 }}
                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className={styles.conditionalSection}
                      >
                        <div className={styles.formRow}>
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Institution / School</label>
                            <input 
                              name="institution" 
                              value={formData.institution} 
                              onChange={handleChange} 
                              className={styles.customInput} 
                              placeholder="Stanford University" 
                            />
                          </div>
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Course / Degree</label>
                            <input 
                              name="course" 
                              value={formData.course} 
                              onChange={handleChange} 
                              className={styles.customInput} 
                              placeholder="B.S. Computer Science" 
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {formData.category === "professional" && (
                      <motion.div
                        key="professional-fields"
                        initial={{ opacity: 0, height: 0, scale: 0.98 }}
                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className={styles.conditionalSection}
                      >
                        <div className={styles.formRow}>
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Company Name</label>
                            <input 
                              name="company" 
                              value={formData.company} 
                              onChange={handleChange} 
                              className={styles.customInput} 
                              placeholder="Acme Corporation" 
                            />
                          </div>
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Designation / Job Title</label>
                            <input 
                              name="designation" 
                              value={formData.designation} 
                              onChange={handleChange} 
                              className={styles.customInput} 
                              placeholder="Senior Software Engineer" 
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button 
                    type="submit" 
                    disabled={loading} 
                    className={styles.submitBtn}
                  >
                    <span>{loading ? "Submitting..." : "Send Message"}</span>
                    <Send size={16} />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}