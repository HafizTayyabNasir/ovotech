"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const statements = ["Document Processing", "SNOMED CT Coding", "Clinical Review", "EMIS Web Integration"];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState({});

  const statements = ["Primary Care", "GP Practices", "NHS Providers", "PCN Networks"];

  useEffect(() => {
    const typingSpeed = 100, deletingSpeed = 50, delay = 2000;
    let timer;
    const i = loopNum % statements.length;
    const fullText = statements[i];
    if (isDeleting) {
      timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), deletingSpeed);
    } else {
      timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), typingSpeed);
    }
    if (!isDeleting && text === fullText) timer = setTimeout(() => setIsDeleting(true), delay);
    else if (isDeleting && text === "") { setIsDeleting(false); setLoopNum(loopNum + 1); }
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) alert("Consultation requested!");
  };

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #EBF6FF 0%, #FFFFFF 50%, #E6F4FE 100%)", paddingTop: "60px", paddingBottom: "60px", position: "relative", overflow: "hidden" }}>
        {/* Decorative Ambient Blue Glows */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "450px", height: "450px", background: "rgba(2,172,234,0.12)", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "350px", height: "350px", background: "rgba(2,172,234,0.08)", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
            {/* Left Content Column */}
            <div className="animate-fadeInLeft" style={{ flex: "1 1 520px", minWidth: "300px" }}>
              <span style={{ display: "inline-block", color: "#02ACEA", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
                MEDICAL AUTOMATION SERVICES
              </span>

              <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px", color: "#0B193C" }}>
                The Healthcare AI &amp; RPA Provider for
                <br />
                <span style={{ color: "#02ACEA", display: "inline-block" }}>{text}</span>
                <span className="animate-blink" style={{ fontWeight: 300, color: "#02ACEA" }}>|</span>
              </h1>

              <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, marginBottom: "16px", maxWidth: "560px" }}>
                Ovotech is the UK&apos;s premier healthcare automation and RPA provider – deploying the best practices in medical billing, repeat prescriptions, and coding for physicians looking to outsource clinical and operational workloads to an expert automated platform.
              </p>

              <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, marginBottom: "32px", maxWidth: "560px" }}>
                Our certified medical coders and AI systems help healthcare organizations recover clinical hours, clear processing queues, and resolve document workflow bottlenecks.
              </p>

              {/* Consultation Form Fields */}
              <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ flex: "1 1 160px", padding: "12px 20px", borderRadius: "30px", border: `1.5px solid ${formErrors.name ? "#ef4444" : "#02ACEA"}`, background: "#FFFFFF", fontSize: "14px", color: "#0B193C", outline: "none", boxShadow: "0 2px 8px rgba(2,172,234,0.08)" }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ flex: "1 1 160px", padding: "12px 20px", borderRadius: "30px", border: `1.5px solid ${formErrors.email ? "#ef4444" : "#02ACEA"}`, background: "#FFFFFF", fontSize: "14px", color: "#0B193C", outline: "none", boxShadow: "0 2px 8px rgba(2,172,234,0.08)" }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ flex: "1 1 160px", padding: "12px 20px", borderRadius: "30px", border: `1.5px solid ${formErrors.phone ? "#ef4444" : "#02ACEA"}`, background: "#FFFFFF", fontSize: "14px", color: "#0B193C", outline: "none", boxShadow: "0 2px 8px rgba(2,172,234,0.08)" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#02ACEA",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    padding: "14px 32px",
                    borderRadius: "30px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(2,172,234,0.35)",
                    transition: "all 0.3s ease"
                  }}
                >
                  BOOK A FREE CONSULTATION
                </button>
              </form>
            </div>

            {/* Right Doctor Image Column */}
            <div className="animate-fadeInRight delay-200" style={{ flex: "1 1 400px", minWidth: "300px", position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "460px" }}>
                {/* Sky blue background circle graphic */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "380px", height: "380px", background: "rgba(2,172,234,0.12)", borderRadius: "50%", zIndex: 1 }} />
                
                {/* Floating Outline Icons */}
                <div style={{ position: "absolute", top: "40px", left: "20px", fontSize: "28px", zIndex: 3 }}>🚀</div>
                <div style={{ position: "absolute", top: "60px", right: "20px", fontSize: "28px", zIndex: 3 }}>🧠</div>
                <div style={{ position: "absolute", bottom: "80px", left: "10px", fontSize: "28px", zIndex: 3 }}>☁️</div>

                {/* Doctor Image */}
                <img
                  src="/hero-doctor.png"
                  alt="Healthcare AI & RPA Doctor"
                  style={{ width: "100%", height: "auto", position: "relative", zIndex: 2, display: "block", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Cyan Stats Strip below Hero */}
      <div style={{ background: "#02ACEA", color: "#FFFFFF", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
        <div className="site-container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-white/30 text-[13px] sm:text-[14px] font-bold">
            <div className="flex items-center justify-center md:justify-start gap-2.5 px-2 md:px-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span>15 Years of Experience</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 px-2 md:px-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>20+ GP Practices</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 px-2 md:px-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="shrink-0"><path d="M12 15l-2 5l-2.5 -1.5l-2.5 1.5l1 -5.5l-4 -3.5l5.5 -.5l2 -5l2 5l5.5 .5l-4 3.5l1 5.5z"/></svg>
              <span>5 Industry Awards</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 px-2 md:px-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="shrink-0"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <span>9 Developed Softwares</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 px-2 md:px-4 col-span-2 md:col-span-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="shrink-0"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span>3 Countries Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
