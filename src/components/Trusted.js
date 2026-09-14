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
    <section style={{ padding: "110px 0", background: "#FFFFFF" }}>
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", marginBottom: "12px", textTransform: "uppercase", background: "rgba(2,172,234,0.1)", padding: "4px 14px", borderRadius: "20px", border: "1px solid rgba(2,172,234,0.25)" }}>Primary Care Alignment</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>
            Clinical Workflow Excellence &amp; Governance
          </h2>
        </div>

        {/* Pillars Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "64px" }}>
          {pillars.map((s, i) => (
            <div key={i} className={`animate-fadeInUp delay-${(i + 1) * 100}`} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "32px", textAlign: "center", boxShadow: "0 10px 30px rgba(2,172,234,0.08)", border: "1px solid #E2E8F5", transition: "transform 0.3s, border-color 0.3s", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "#02ACEA"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#E2E8F5"; }}
            >
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(2,172,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", margin: "0 auto 16px", border: "1px solid rgba(2,172,234,0.2)" }}>
                {s.icon}
              </div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>{s.title}</div>
              <div style={{ fontSize: "14px", color: "#64748B", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* System & Standards Integration Bar */}
        <div className="animate-fadeInUp delay-400" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "32px", marginBottom: "64px", background: "#F0F9FF", padding: "20px 32px", borderRadius: "20px", border: "1px solid #BAE6FD" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#02ACEA", letterSpacing: "1px", textTransform: "uppercase" }}>Confirmed Compliance &amp; System Integration:</span>
          <span style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A" }}>EMIS Web</span>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#475569" }}>DSPT</span>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#475569" }}>DTAC</span>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#475569" }}>ISO 27001</span>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#475569" }}>Cyber Essentials</span>
        </div>

        {/* Operational Practice Value Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {standards.map((c, i) => (
            <div key={i} className={`animate-fadeInUp delay-${(i + 5) * 100}`} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1px solid #E2E8F5", transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#02ACEA"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#E2E8F5"; }}
            >
              <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>{c.title}</h4>
              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6 }}>{c.text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #02ACEA", color: "#02ACEA", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }} onMouseEnter={e => { e.currentTarget.style.background = "#02ACEA"; e.currentTarget.style.color = "#FFFFFF"; }} onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#02ACEA"; }}>
            Explore Platform Solutions <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
