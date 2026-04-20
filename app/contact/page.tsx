"use client";

import { useState } from "react";
import AuroraBackground from "../components/AuroraBackground";

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

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white px-6 md:px-16 py-20 relative overflow-hidden flex items-center justify-center">

      {/* 💨 AMBIENT BLURRED GRADIENT BACKGROUND ORBS */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div style={{ position: "absolute", top: "10%", left: "-5%", width: "40vw", height: "40vw", background: "rgba(0, 150, 255, 0.4)", filter: "blur(120px)", borderRadius: "50%" }}></div>
        <div style={{ position: "absolute", top: "30%", right: "-10%", width: "35vw", height: "35vw", background: "rgba(128, 0, 255, 0.3)", filter: "blur(120px)", borderRadius: "50%" }}></div>
        <div style={{ position: "absolute", bottom: "-5%", left: "30%", width: "50vw", height: "50vw", background: "rgba(216, 27, 96, 0.25)", filter: "blur(150px)", borderRadius: "50%" }}></div>
      </div>

      <div className="w-full max-w-3xl relative z-10 z-10 my-20">

        {/* ✨ GLASS UI CARD FORM */}
        <div style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "1.5rem", padding: "3rem", position: "relative", overflow: "hidden" }}>

          <div className="text-center mb-10">
            <h1 className="neon-text" 
            style={{ fontSize: "3.25rem", fontWeight: "800", letterSpacing: "-0.02em", color: "#fff", marginBottom: "0.5rem" }}>
              Contact Us
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", fontWeight: "600" }}>
              Let us resolve your Query.
            </p>
          </div>

          {/* 🎉 SUCCESS OVERLAY */}
          {success ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🎉</div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#4caf50", marginBottom: "1rem" }}>Submitted!</h2>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>We have successfully received your registration.</p>
              <button onClick={() => setSuccess(false)} className="submit-btn-pill" style={{ marginTop: "2rem", background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}>
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">

              {error && (
                <div style={{ background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.5)", color: "#ff4d4d", padding: "1rem", borderRadius: "0.5rem", textAlign: "center" }}>
                  {error}
                </div>
              )}

              {/* ROW 1: NAME & EMAIL */}
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label className="form-label-top">Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="form-input-line" placeholder="First Last" />
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label className="form-label-top">Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="form-input-line" placeholder="mail@example.com" />
                </div>
              </div>

              {/* ROW 2: PHONE & AGE */}
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label className="form-label-top">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="form-input-line" placeholder="+91..." />
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label className="form-label-top">Age</label>
                  <input name="age" type="number" value={formData.age} onChange={handleChange} className="form-input-line" placeholder="Your age" />
                </div>
              </div>

              {/* ROW 3: PURPOSE */}
              <div>
                <label className="form-label-top">Topic / Purpose of Query</label>
                <input name="purpose" value={formData.purpose} onChange={handleChange} className="form-input-line" placeholder="What are you looking for?" />
              </div>

              {/* CATEGORY SELECTOR */}
              <div style={{ marginTop: "1rem" }}>
                <label className="form-label-top" style={{ marginBottom: "1rem" }}>Are you a Student or Working Professional?</label>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", color: "rgba(255,255,255,0.8)" }}>
                    <input
                      type="radio"
                      name="category"
                      value="student"
                      checked={formData.category === "student"}
                      onChange={handleChange}
                      style={{ accentColor: "#00f0ff", width: "1.2rem", height: "1.2rem" }}
                    />
                    Student
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", color: "rgba(255,255,255,0.8)" }}>
                    <input
                      type="radio"
                      name="category"
                      value="professional"
                      checked={formData.category === "professional"}
                      onChange={handleChange}
                      style={{ accentColor: "#00f0ff", width: "1.2rem", height: "1.2rem" }}
                    />
                    Working Professional
                  </label>
                </div>
              </div>

              {/* CONDITIONAL STUDENT SUB-FIELDS */}
              {formData.category === "student" && (
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "1rem", padding: "1.5rem", background: "rgba(255,255,255,0.03)", borderRadius: "1rem" }}>
                  <div style={{ flex: "1 1 200px" }}>
                    <label className="form-label-top">Institution</label>
                    <input name="institution" value={formData.institution} onChange={handleChange} className="form-input-line" placeholder="University / School" />
                  </div>
                  <div style={{ flex: "1 1 200px" }}>
                    <label className="form-label-top">Course</label>
                    <input name="course" value={formData.course} onChange={handleChange} className="form-input-line" placeholder="Major / Degree" />
                  </div>
                </div>
              )}

              {/* CONDITIONAL PROFESSIONAL SUB-FIELDS */}
              {formData.category === "professional" && (
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "1rem", padding: "1.5rem", background: "rgba(255,255,255,0.03)", borderRadius: "1rem" }}>
                  <div style={{ flex: "1 1 200px" }}>
                    <label className="form-label-top">Company Name</label>
                    <input name="company" value={formData.company} onChange={handleChange} className="form-input-line" placeholder="Your Company" />
                  </div>
                  <div style={{ flex: "1 1 200px" }}>
                    <label className="form-label-top">Designation</label>
                    <input name="designation" value={formData.designation} onChange={handleChange} className="form-input-line" placeholder="Your Job Title" />
                  </div>
                </div>
              )}

              <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
                <button type="submit" disabled={loading} className="submit-btn-pill">
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

    </div>
  );
}