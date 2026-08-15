"use client";
import { useRef } from "react";

const specialties = [
  { icon: "💊", label: "Prescription" },
  { icon: "🔄", label: "Referral" },
  { icon: "📅", label: "Appointment" },
  { icon: "📄", label: "Invoice" },
  { icon: "📝", label: "Policy Update" },
  { icon: "📂", label: "Admin & Docs" },
  { icon: "🏥", label: "GP Practices" },
  { icon: "🏢", label: "PCN Networks" },
  { icon: "🇬🇧", label: "NHS Providers" },
  { icon: "🤖", label: "RPA Bots" },
];

export default function SpecialtyChips() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 250, behavior: "smooth" });
    }
  };

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="site-container">
        <div className="animate-fadeInUp" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "32px" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#362D7E", marginBottom: "8px", textTransform: "uppercase" }}>Specialties</span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2 }}>
              What We Automate
            </h2>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={() => scroll(-1)} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #E8E8EF", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "#F7F7FA"} onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scroll(1)} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #E8E8EF", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "#F7F7FA"} onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          style={{ display: "flex", gap: "16px", overflowX: "auto", paddingBottom: "16px", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {specialties.map((s, i) => (
            <div
              key={i}
              className={`animate-fadeInRight delay-${Math.min((i + 1) * 100, 800)}`}
              style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: "12px", background: "#F7F7FA", borderRadius: "40px", padding: "14px 24px", border: "1px solid #E8E8EF", transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(54,45,126,0.3)"; e.currentTarget.style.background = "rgba(54,45,126,0.05)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#E8E8EF"; e.currentTarget.style.background = "#F7F7FA"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: "20px" }}>{s.icon}</div>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", whiteSpace: "nowrap" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
