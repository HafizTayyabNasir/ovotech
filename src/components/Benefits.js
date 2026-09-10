"use client";
import Link from "next/link";

const features = [
  { icon: "🖥️", title: "Single Clinical Workspace", desc: "Review original documents, extracted details, and SNOMED CT suggestions in one window." },
  { icon: "🏥", title: "EMIS Web Integration", desc: "Structured write-back of approved clinical information directly into patient records." },
  { icon: "🛡️", title: "Human Review & Governance", desc: "Authorised reviewers verify and approve every entry before committing to records." },
  { icon: "📊", title: "Capacity & Time Released", desc: "Reduces repetitive manual entry, system switching, and administrative strain." },
];

export default function Benefits() {
  return (
    <section style={{ padding: "100px 0", background: "#fff", overflow: "hidden" }}>
      <div className="site-container">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "60px" }}>
          {/* Left — Image */}
          <div className="animate-fadeInLeft" style={{ flex: "1 1 380px", minWidth: "280px", position: "relative" }}>
            <div style={{ position: "relative", maxWidth: "420px" }}>
              <img src="/benefits-doctor.png" alt="Healthcare professional using Ovotech" style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }} />
              <div style={{ position: "absolute", bottom: "-16px", right: "-16px", background: "#09132B", color: "#fff", borderRadius: "16px", padding: "16px 24px", boxShadow: "0 10px 30px rgba(9,19,43,0.3)", border: "1px solid rgba(0,168,232,0.3)" }}>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#00A8E8" }}>EMIS Web</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>Structured Integration</div>
              </div>
              <div style={{ position: "absolute", top: "-16px", left: "-16px", width: "80px", height: "80px", background: "rgba(0,168,232,0.1)", borderRadius: "50%", zIndex: -1 }} />
            </div>
          </div>

          {/* Right — Content */}
          <div className="animate-fadeInRight delay-200" style={{ flex: "1 1 420px", minWidth: "300px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#00A8E8", marginBottom: "12px", textTransform: "uppercase" }}>Key Benefits</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.15, marginBottom: "16px" }}>
              More Time for Patient Care.<br />Less Manual Document Admin.
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "32px", maxWidth: "480px" }}>
              Ovotech brings document intake, extraction, review queue, clinical context, and coding together into one unified workflow.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "32px" }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(0,168,232,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#0A1838", marginBottom: "4px" }}>{f.title}</h4>
                    <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/how-it-works" style={{ background: "#00A8E8", color: "#fff", fontWeight: 600, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              See Workflow Details <span>→</span>
            </Link>
          </div>
        </div>

        <div className="animate-fadeInUp delay-400" style={{ marginTop: "64px", textAlign: "center", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          <p style={{ color: "#475569", lineHeight: 1.7 }}>
            Designed specifically for UK GP practices, Ovotech provides visibility over document volumes and processing activity while ensuring authorized staff remain in full control.
          </p>
          <Link href="/solutions" style={{ color: "#00A8E8", fontWeight: 600, fontSize: "14px", marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            Explore Platform Features <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
