"use client";

const complianceCards = [
  {
    badge: "NHS IG STANDARD",
    title: "DSPT Compliant",
    desc: "Fully compliant with the NHS Data Security and Protection Toolkit (DSPT) standards for primary care organizations.",
    icon: "🛡️",
  },
  {
    badge: "CLINICAL RISK MANAGEMENT",
    title: "DCB0129 Approved",
    desc: "Adheres to official UK DCB0129 clinical risk management standards with CSO oversight for health IT manufacturer safety.",
    icon: "🏥",
  },
  {
    badge: "DATA PRIVACY",
    title: "UK GDPR & DPA 2018",
    desc: "Strict data processor controls, patient record confidentiality, and encrypted data transport standards.",
    icon: "🔒",
  },
  {
    badge: "CLINICAL SYSTEM INTEGRATION",
    title: "EMIS Web Integration",
    desc: "Structured write-back directly into EMIS Web patient records with complete audit logging and human reviewer sign-off.",
    icon: "🔗",
  },
];

export default function ComplianceSection() {
  return (
    <section style={{ padding: "90px 0", background: "#060D1F", color: "#FFFFFF", position: "relative" }}>
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.1)", color: "#A594FF", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 18px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "14px", border: "1px solid rgba(255,255,255,0.15)" }}>
            TRUSTED NHS COMPLIANCE &amp; GOVERNANCE
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15 }}>
            Enterprise NHS Security &amp; Clinical Governance
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", marginTop: "12px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            Ovotech is engineered to meet strict UK primary care information governance and clinical safety standards.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", maxWidth: "1100px", margin: "0 auto" }}>
          {complianceCards.map((card, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "32px 24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(165,148,255,0.4)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{card.icon}</div>
              <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.5px", color: "#A594FF", display: "block", marginBottom: "8px" }}>
                {card.badge}
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", marginBottom: "10px" }}>{card.title}</h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
