"use client";
import Link from "next/link";

const pillars = [
  { icon: "📋", title: "Review Queue", label: "Centralized intake & status tracking" },
  { icon: "🖥️", title: "Clinical Review", label: "Single-screen workspace & Patient History" },
  { icon: "🏥", title: "EMIS Write-Back", label: "Structured commit to clinical records" },
];

const standards = [
  { title: "Designed for UK GP Practices", text: "Engineered specifically around the clinical correspondence and coding workflow of UK primary care." },
  { title: "Human Review & Sign-Off", text: "Assisted entity extraction with mandatory reviewer verification before any record write-back." },
  { title: "Enterprise Compliance", text: "Built to adhere to confirmed DSPT, DTAC, ISO 27001, and UK GDPR standards." },
];

export default function Trusted() {
  return (
    <section style={{ padding: "100px 0", background: "#f8fafc" }}>
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", marginBottom: "12px", textTransform: "uppercase" }}>Primary Care Alignment</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}>
            Clinical Workflow Excellence &amp; Governance
          </h2>
        </div>

        {/* Pillars Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "64px" }}>
          {pillars.map((s, i) => (
            <div key={i} className={`animate-fadeInUp delay-${(i + 1) * 100}`} style={{ background: "#fff", borderRadius: "20px", padding: "32px", textAlign: "center", boxShadow: "0 10px 30px rgba(2,172,234,0.08)", border: "1px solid #e2e8f5", transition: "transform 0.3s", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(2,172,234,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", margin: "0 auto 16px" }}>
                {s.icon}
              </div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>{s.title}</div>
              <div style={{ fontSize: "14px", color: "#64748B", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* System & Standards Integration Bar */}
        <div className="animate-fadeInUp delay-400" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "40px", marginBottom: "64px" }}>
          <span style={{ fontSize: "14px", fontWeight: 800, color: "#02ACEA", letterSpacing: "1px", textTransform: "uppercase" }}>Confirmed Compliance &amp; System Integration:</span>
          <span style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", letterSpacing: "1px" }}>EMIS Web</span>
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#475569" }}>DSPT</span>
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#475569" }}>DTAC</span>
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#475569" }}>ISO 27001</span>
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#475569" }}>Cyber Essentials</span>
        </div>

        {/* Operational Practice Value Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {standards.map((c, i) => (
            <div key={i} className={`animate-fadeInUp delay-${(i + 5) * 100}`} style={{ background: "#fff", borderRadius: "20px", padding: "28px", border: "1px solid #e2e8f5", transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>{c.title}</h4>
              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6 }}>{c.text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #02ACEA", color: "#02ACEA", fontWeight: 600, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }}>
            Explore Platform Solutions <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
