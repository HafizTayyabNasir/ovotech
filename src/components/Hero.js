"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
      <section style={{ position: "relative", minHeight: "680px", paddingTop: "80px", paddingBottom: "80px", overflow: "hidden", display: "flex", alignItems: "center", background: "#09132B" }}>
        {/* Background Video Autoplay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            opacity: 0.85
          }}
        >
          <source src="/HomeBanner.mp4" type="video/mp4" />
        </video>

        {/* Translucent Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(9, 19, 43, 0.45)",
            zIndex: 2
          }}
        />

        {/* Curved Brand Gradient Overlay (inspired by reference design, using Ovotech brand blues) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "62%",
            background: "linear-gradient(135deg, rgba(9, 19, 43, 0.96) 0%, rgba(15, 30, 54, 0.92) 70%, rgba(2, 172, 234, 0.35) 100%)",
            clipPath: "ellipse(100% 120% at 0% 50%)",
            zIndex: 3,
            backdropFilter: "blur(4px)"
          }}
          className="hidden md:block"
        />

        {/* Mobile Full Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(9, 19, 43, 0.95) 0%, rgba(15, 30, 54, 0.85) 100%)",
            zIndex: 3
          }}
          className="md:hidden"
        />

        {/* Ambient Cyan Glow Accents */}
        <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "450px", height: "450px", background: "rgba(2,172,234,0.2)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 4 }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
            {/* Left Content Column */}
            <div className="animate-fadeInLeft" style={{ flex: "1 1 520px", minWidth: "300px" }}>
              <span style={{ display: "inline-block", background: "rgba(2,172,234,0.15)", color: "#02ACEA", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", padding: "6px 16px", borderRadius: "20px", border: "1px solid rgba(2,172,234,0.3)" }}>
                CLINICAL DOCUMENT PROCESSING &amp; WORKFLOW PLATFORM
              </span>

              <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px", color: "#FFFFFF" }}>
                Clinical Correspondence &amp; Coding Platform for
                <br />
                <span style={{ color: "#02ACEA", display: "inline-block" }}>{text}</span>
                <span className="animate-blink" style={{ fontWeight: 300, color: "#02ACEA" }}>|</span>
              </h1>

              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "16px", maxWidth: "580px" }}>
                Ovotech brings clinical document intake, entity extraction, review queues, clinical review, patient history context, and EMIS Web write-back into one unified platform for UK GP practices.
              </p>

              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "32px", maxWidth: "580px" }}>
                Designed specifically around UK primary care correspondence, our assisted SNOMED CT coding workspace empowers practice teams to clear backlogs while keeping human approval central to every record write-back.
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
                    style={{ flex: "1 1 160px", padding: "14px 20px", borderRadius: "30px", border: `1.5px solid ${formErrors.name ? "#ef4444" : "rgba(2,172,234,0.4)"}`, background: "rgba(255,255,255,0.95)", fontSize: "14px", color: "#0B193C", outline: "none", boxShadow: "0 4px 14px rgba(0,0,0,0.2)" }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ flex: "1 1 160px", padding: "14px 20px", borderRadius: "30px", border: `1.5px solid ${formErrors.email ? "#ef4444" : "rgba(2,172,234,0.4)"}`, background: "rgba(255,255,255,0.95)", fontSize: "14px", color: "#0B193C", outline: "none", boxShadow: "0 4px 14px rgba(0,0,0,0.2)" }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ flex: "1 1 160px", padding: "14px 20px", borderRadius: "30px", border: `1.5px solid ${formErrors.phone ? "#ef4444" : "rgba(2,172,234,0.4)"}`, background: "rgba(255,255,255,0.95)", fontSize: "14px", color: "#0B193C", outline: "none", boxShadow: "0 4px 14px rgba(0,0,0,0.2)" }}
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
                    boxShadow: "0 6px 20px rgba(2,172,234,0.4)",
                    transition: "all 0.3s ease"
                  }}
                >
                  REQUEST A PLATFORM DEMO
                </button>
              </form>
            </div>

            {/* Right Side Glass Feature Badge / Video Accent Column */}
            <div className="animate-fadeInRight delay-200" style={{ flex: "1 1 440px", minWidth: "300px", position: "relative", display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  background: "rgba(9, 19, 43, 0.65)",
                  backdropFilter: "blur(16px)",
                  borderRadius: "24px",
                  padding: "36px",
                  border: "1px solid rgba(2, 172, 234, 0.3)",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
                  maxWidth: "460px",
                  width: "100%",
                  color: "#FFFFFF"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(2,172,234,0.2)", color: "#02ACEA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>
                    🛡️
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
                      EMIS Web Write-Back
                    </h3>
                    <span style={{ fontSize: "12px", color: "#02ACEA", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                      Human Verified Workflow
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "20px" }}>
                  Automated clinical concept extraction with 100% human-in-the-loop verification before structured record commit.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Sub-2 minute letter turnaround
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Standardised SNOMED CT coding
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> DSPT &amp; DTAC NHS Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Cyan Workflow Strip below Hero */}
      <div style={{ background: "#02ACEA", color: "#FFFFFF", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.2)", position: "relative", zIndex: 10 }}>
        <div className="site-container">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-0 md:divide-x md:divide-white/30 text-[12px] sm:text-[13px] font-bold text-center">
            <div className="flex items-center justify-center gap-2 px-2">
              <span>1. Document Intake</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>2. Entity Extraction</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>3. Review Queue</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>4. Clinical Review</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>5. Human Approval</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>6. EMIS Write-Back</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
