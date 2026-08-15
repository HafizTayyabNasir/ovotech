"use client";
import Link from "next/link";

const tags = [
  "Prescription Automation",
  "Referral Automation",
  "Appointment Automation",
  "Invoice Automation",
  "Policy Update Automation",
  "Admin & Document Automation",
];

export default function TagsInfo() {
  return (
    <section style={{ padding: "100px 0", background: "#fff" }}>
      <div className="site-container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
          {/* Left — Tags */}
          <div className="animate-fadeInLeft" style={{ flex: "1 1 500px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#362D7E", marginBottom: "12px", textTransform: "uppercase" }}>Complete Coverage</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "16px" }}>
              Every Workflow,<br />Fully Automated.
            </h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.7, marginBottom: "32px", maxWidth: "460px" }}>
              From front desk to back office, our solutions cover every aspect of GP practice administration.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {tags.map((tag, i) => (
                <span key={i} className={`animate-scaleIn delay-${(i + 1) * 50}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(54,45,126,0.08)", color: "#362D7E", fontSize: "14px", fontWeight: 600, padding: "10px 20px", borderRadius: "30px", border: "1px solid rgba(54,45,126,0.15)", transition: "all 0.3s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#362D7E"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(54,45,126,0.08)"; e.currentTarget.style.color = "#362D7E"; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Stat Cards */}
          <div className="animate-fadeInRight delay-200" style={{ flex: "0 1 340px", display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
            <div style={{ background: "linear-gradient(135deg, #362D7E 0%, #2a2265 100%)", color: "#fff", borderRadius: "20px", padding: "32px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "12px" }}>Happiness Score</div>
              <div style={{ fontSize: "40px", fontWeight: 800, marginBottom: "4px" }}>96%</div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>Client satisfaction rate</p>
              <Link href="/case-studies" style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.9)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                View Results <span>→</span>
              </Link>
            </div>
            <div style={{ background: "#fff", border: "2px solid rgba(54,45,126,0.1)", borderRadius: "20px", padding: "32px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#888", marginBottom: "12px" }}>Experts</div>
              <div style={{ fontSize: "40px", fontWeight: 800, color: "#362D7E", marginBottom: "4px" }}>120+</div>
              <p style={{ fontSize: "14px", color: "#888", marginBottom: "16px" }}>Healthcare automation specialists</p>
              <Link href="/about" style={{ fontSize: "14px", fontWeight: 600, color: "#362D7E", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Meet the Team <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
