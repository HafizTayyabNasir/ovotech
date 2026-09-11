"use client";

const complianceCards = [
  {
    badge: "NHS IG TOOLKIT",
    title: "DSPT Compliant",
    desc: "Maintains full compliance with the NHS Data Security and Protection Toolkit (DSPT) for UK primary care data governance.",
    icon: "🛡️",
  },
  {
    badge: "ASSESSMENT CRITERIA",
    title: "DTAC Assessed",
    desc: "Evaluated under the NHS Digital Technology Assessment Criteria (DTAC) covering clinical safety, data protection, and security.",
    icon: "🏥",
  },
  {
    badge: "INFORMATION SECURITY",
    title: "ISO 27001",
    desc: "Certified Information Security Management System standards ensuring systematic encryption, access controls, and data integrity.",
    icon: "🔒",
  },
  {
    badge: "CYBER GOVERNANCE",
    title: "Cyber Essentials",
    desc: "Validated operational cyber security hygiene, protecting clinical correspondence infrastructure against cyber threats.",
    icon: "💻",
  },
];

export default function ComplianceSection() {
  return (
    <section style={{ padding: "90px 0", background: "#0F1E36", color: "#FFFFFF", position: "relative" }}>
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ display: "inline-block", background: "rgba(2,172,234,0.15)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 18px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "14px", border: "1px solid rgba(2,172,234,0.3)" }}>
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
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                padding: "32px 24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(2,172,234,0.5)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(2,172,234,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{card.icon}</div>
              <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.5px", color: "#02ACEA", display: "block", marginBottom: "8px" }}>
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
