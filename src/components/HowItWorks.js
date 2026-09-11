"use client";
import Link from "next/link";

const steps = [
  { num: 1, icon: "📥", title: "Document Intake", desc: "Clinical correspondence enters the Ovotech workflow from hospital feeds or documents." },
  { num: 2, icon: "🔍", title: "Information Extraction", desc: "Platform identifies relevant clinical facts, diagnoses, medications & patient IDs." },
  { num: 3, icon: "📋", title: "Review Queue", desc: "Incoming documents enter a structured queue with clear processing status and priority." },
  { num: 4, icon: "🖥️", title: "Clinical Review", desc: "Unified workspace displaying document, extracted info, SNOMED codes & Patient History." },
  { num: 5, icon: "👤", title: "Human Approval", desc: "Authorised reviewer verifies, amends, and approves coding decisions before commit." },
  { num: 6, icon: "🏥", title: "EMIS Write-Back", desc: "Approved clinical data written directly into the patient's EMIS Web record." },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "100px 0", background: "#f8fafc" }}>
      <div className="site-container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
          {/* Left */}
          <div className="animate-fadeInLeft" style={{ flex: "0 1 340px", minWidth: "280px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", marginBottom: "12px", textTransform: "uppercase" }}>How Ovotech Works</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, marginBottom: "20px" }}>
              Structured.<br />Assisted.<br />Integrated.
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
              Ovotech brings the entire clinical document lifecycle into one structured workflow—giving GP practice teams visibility, consistency, and control.
            </p>
            <Link href="/how-it-works" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #02ACEA", color: "#02ACEA", fontWeight: 600, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#02ACEA"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#02ACEA"; }}
            >
              Detailed Workflow Guide <span>→</span>
            </Link>
          </div>

          {/* Right — Steps */}
          <div style={{ flex: "1 1 500px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {steps.map((s, i) => (
              <div key={i} className={`animate-fadeInUp delay-${(i + 1) * 100}`} style={{ background: "#fff", borderRadius: "20px", padding: "24px 20px", border: "1px solid #e2e8f5", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "32px", height: "32px", background: "#02ACEA", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, margin: "0 auto 12px" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "30px", marginBottom: "12px" }}>{s.icon}</div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", marginBottom: "6px" }}>{s.title}</h4>
                <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
