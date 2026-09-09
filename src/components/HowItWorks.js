"use client";
import Link from "next/link";

const steps = [
  { num: 1, icon: "📥", title: "Document Intake", desc: "Clinical correspondence enters the Ovotech workflow." },
  { num: 2, icon: "🔍", title: "Extraction", desc: "Platform identifies relevant patient & clinical details." },
  { num: 3, icon: "📋", title: "Review Queue", desc: "Documents enter a central queue with clear status." },
  { num: 4, icon: "🖥️", title: "Clinical Review", desc: "Single workspace combining document, data & coding." },
  { num: 5, icon: "🩺", title: "Patient History", desc: "Contextual patient record displayed alongside doc." },
  { num: 6, icon: "🏷️", title: "SNOMED CT", desc: "System proposes relevant SNOMED CT clinical codes." },
  { num: 7, icon: "👤", title: "Human Review", desc: "Authorised user verifies, amends and approves decisions." },
  { num: 8, icon: "🏥", title: "EMIS Write-Back", desc: "Approved data written directly to EMIS Web record." },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "100px 0", background: "#F7F7FA" }}>
      <div className="site-container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
          {/* Left */}
          <div className="animate-fadeInLeft" style={{ flex: "0 1 340px", minWidth: "280px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#362D7E", marginBottom: "12px", textTransform: "uppercase" }}>How Ovotech Works</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "20px" }}>
              Structured.<br />Assisted.<br />Integrated.
            </h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
              Ovotech brings the entire clinical document lifecycle into one structured workflow—giving GP practice teams visibility, consistency, and control.
            </p>
            <Link href="/how-it-works" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #362D7E", color: "#362D7E", fontWeight: 600, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#362D7E"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#362D7E"; }}
            >
              Detailed Workflow Guide <span>→</span>
            </Link>
          </div>

          {/* Right — Steps */}
          <div style={{ flex: "1 1 500px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {steps.map((s, i) => (
              <div key={i} className={`animate-fadeInUp delay-${(i + 1) * 100}`} style={{ background: "#fff", borderRadius: "20px", padding: "24px 20px", border: "1px solid #E8E8EF", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "32px", height: "32px", background: "#362D7E", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, margin: "0 auto 12px" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "30px", marginBottom: "12px" }}>{s.icon}</div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", marginBottom: "6px" }}>{s.title}</h4>
                <p style={{ fontSize: "12px", color: "#666", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
