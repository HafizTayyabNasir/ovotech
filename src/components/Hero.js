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
    if (Object.keys(errors).length === 0) alert("Form submitted!");
  };

  return (
    <section style={{ background: "linear-gradient(135deg, #F4F7FC 0%, #FFFFFF 50%, #E0F2FE 100%)", paddingTop: "80px", paddingBottom: "40px", position: "relative", overflow: "hidden" }}>
      {/* Decorative blurs */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", background: "rgba(0,168,232,0.08)", borderRadius: "50%", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "300px", height: "300px", background: "rgba(10,24,56,0.06)", borderRadius: "50%", filter: "blur(80px)" }} />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Two column layout */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "60px" }}>
          {/* Left */}
          <div className="animate-fadeInLeft" style={{ flex: "1 1 480px", minWidth: "280px" }}>
            <span style={{ display: "inline-block", background: "rgba(0,168,232,0.1)", color: "#00A8E8", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", padding: "6px 18px", borderRadius: "20px", marginBottom: "24px", textTransform: "uppercase" }}>
              UK GP Practice Platform
            </span>
            <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", color: "#0A1838" }}>
              Clinical Document Processing &amp;
              <br />
              <span style={{ color: "#00A8E8", display: "inline-block" }}>{text}</span>
              <span className="animate-blink" style={{ fontWeight: 300, color: "#00A8E8" }}>|</span>
            </h1>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "32px", maxWidth: "520px" }}>
              Ovotech brings clinical correspondence intake, SNOMED CT coding, patient history context, and human verification into one streamlined workflow with direct EMIS Web write-back.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "40px" }}>
              <Link href="/contact" style={{ background: "#00A8E8", color: "#fff", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 6px 20px rgba(0,168,232,0.35)", transition: "all 0.3s" }}>
                Book a Platform Demo <span>→</span>
              </Link>
              <Link href="/solutions" style={{ border: "2px solid #00A8E8", color: "#00A8E8", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s" }}>
                Explore Platform <span>→</span>
              </Link>
            </div>
            <p style={{ fontSize: "13px", color: "#8896AB", marginBottom: "16px" }}>Built for UK GP practices with clinical system integration</p>
            <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              <span style={{ color: "#005eb8", fontSize: "22px", fontWeight: 800, letterSpacing: "1px" }}>NHS</span>
              <span style={{ fontSize: "18px", fontWeight: 800, color: "#005eb8", letterSpacing: "0.5px" }}>EMIS Web</span>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#0A1838", letterSpacing: "0.5px" }}>SNOMED CT</span>
            </div>
          </div>

          {/* Right — Form */}
          <div className="animate-fadeInRight delay-200" style={{ flex: "0 1 420px", minWidth: "300px" }}>
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,168,232,0.12)", padding: "36px 32px", border: "1px solid #E0E8F5" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0A1838", marginBottom: "4px" }}>Request a Practice Demo</h3>
              <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "24px" }}>See how Ovotech optimizes clinical review</p>
              <form onSubmit={handleSubmit}>
                {["name", "email", "phone"].map((field) => (
                  <div key={field} style={{ marginBottom: "14px" }}>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      placeholder={field === "name" ? "Full Name" : field === "email" ? "Practice Email" : "Phone Number"}
                      value={formData[field]}
                      onChange={handleChange}
                      style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: `1.5px solid ${formErrors[field] ? "#ef4444" : "#E0E8F5"}`, fontSize: "14px", background: "#F4F7FC", outline: "none", transition: "border 0.2s" }}
                    />
                    {formErrors[field] && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px", display: "block" }}>{formErrors[field]}</span>}
                  </div>
                ))}
                <button type="submit" style={{ width: "100%", background: "#00A8E8", color: "#fff", fontWeight: 700, padding: "14px", borderRadius: "12px", border: "none", fontSize: "14px", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,168,232,0.3)", transition: "all 0.3s", marginTop: "4px" }}>
                  Book Demo →
                </button>
              </form>
              <p style={{ fontSize: "12px", color: "#8896AB", textAlign: "center", marginTop: "14px" }}>Assisted workflow built for GP administrative &amp; coding teams.</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginTop: "56px" }}>
          {[
            { icon: "📄", value: "8-Step", label: "Structured Workflow" },
            { icon: "🏥", value: "EMIS Web", label: "Clinical System Integration" },
            { icon: "🛡️", value: "100%", label: "Human Verification & Control" },
          ].map((s, i) => (
            <div key={i} className={`animate-fadeInUp delay-${(i + 4) * 100}`} style={{ display: "flex", alignItems: "center", gap: "16px", background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 20px rgba(0,168,232,0.08)", border: "1px solid #E0E8F5" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(0,168,232,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#0A1838" }}>{s.value}</div>
                <div style={{ fontSize: "13px", color: "#64748B", fontWeight: 500 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
