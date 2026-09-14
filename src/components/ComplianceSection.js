"use client";
import { useState } from "react";
import Link from "next/link";

const complianceData = [
  {
    id: "dspt-compliant",
    badge: "NHS IG TOOLKIT",
    title: "DSPT Compliant",
    desc: "Maintains full compliance with the NHS Data Security and Protection Toolkit (DSPT) for UK primary care data governance.",
    icon: "🛡️",
    image: "/gp-team-support.png",
    metric: "NHS IG Toolkit Verified",
    bullets: [
      "Full NHS Data Security & Protection Toolkit compliance",
      "UK primary care information governance standards",
      "Comprehensive clinical audit logging and data safety"
    ]
  },
  {
    id: "dtac-assessed",
    badge: "ASSESSMENT CRITERIA",
    title: "DTAC Assessed",
    desc: "Evaluated under the NHS Digital Technology Assessment Criteria (DTAC) covering clinical safety, data protection, and security.",
    icon: "🏥",
    image: "/gp-doctor-consultation.png",
    metric: "Clinical Safety Evaluated",
    bullets: [
      "NHS Digital Technology Assessment Criteria evaluated",
      "Rigorous clinical safety and data protection review",
      "Full compliance with NHS technical interoperability"
    ]
  },
  {
    id: "iso-27001",
    badge: "INFORMATION SECURITY",
    title: "ISO 27001",
    desc: "Certified Information Security Management System standards ensuring systematic encryption, access controls, and data integrity.",
    icon: "🔒",
    image: "/step5-emis-writeback.png",
    metric: "ISO Certified Security",
    bullets: [
      "Certified Information Security Management System",
      "Systematic data encryption & strict access controls",
      "Guaranteed data integrity across all correspondence"
    ]
  },
  {
    id: "cyber-essentials",
    badge: "CYBER GOVERNANCE",
    title: "Cyber Essentials",
    desc: "Validated operational cyber security hygiene, protecting clinical correspondence infrastructure against cyber threats.",
    icon: "💻",
    image: "/hero-banner-man.png",
    metric: "Cyber Hygiene Validated",
    bullets: [
      "Validated operational cyber security hygiene",
      "Infrastructure protected against modern cyber threats",
      "Continuous threat monitoring and clinical data safety"
    ]
  }
];

export default function ComplianceSection() {
  const [activeTab, setActiveTab] = useState(complianceData[0]);

  return (
    <section style={{ background: "#0F1E36", padding: "100px 0", color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
      {/* Ambient ambient glow */}
      <div style={{ position: "absolute", top: "-150px", right: "20%", width: "500px", height: "500px", background: "rgba(2, 172, 234, 0.12)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{ display: "inline-block", background: "rgba(2,172,234,0.15)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 20px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid rgba(2,172,234,0.3)" }}>
            TRUSTED NHS COMPLIANCE &amp; GOVERNANCE
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
            Enterprise NHS Security &amp; Clinical Governance
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", marginTop: "14px", maxWidth: "620px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Ovotech is engineered to meet strict UK primary care information governance and clinical safety standards.
          </p>
        </div>

        {/* Interactive Tabs Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginBottom: "40px"
        }}>
          {complianceData.map((item) => {
            const isActive = activeTab.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "18px 24px",
                  borderRadius: "18px",
                  background: isActive ? "#091222" : "rgba(255,255,255,0.05)",
                  border: isActive ? "2px solid #02ACEA" : "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: isActive ? "0 12px 30px rgba(2,172,234,0.25)" : "none",
                  transform: isActive ? "translateY(-2px)" : "none",
                }}
              >
                <div style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: isActive ? "#02ACEA" : "rgba(2,172,234,0.15)",
                  color: isActive ? "#FFFFFF" : "#02ACEA",
                  fontSize: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.25s"
                }}>
                  {item.icon}
                </div>
                <div>
                  <span style={{
                    fontSize: "15px",
                    fontWeight: isActive ? 800 : 600,
                    color: "#FFFFFF",
                    display: "block",
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </span>
                  <span style={{
                    fontSize: "11px",
                    color: isActive ? "#02ACEA" : "rgba(255,255,255,0.5)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    {item.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Content Card */}
        <div style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(16px)",
          borderRadius: "28px",
          padding: "48px",
          color: "#FFFFFF",
          boxShadow: "0 24px 70px rgba(0, 0, 0, 0.45)",
          border: "1px solid rgba(255, 255, 255, 0.12)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px",
            alignItems: "center"
          }}>
            {/* Left Image with Floating Metric Badge */}
            <div style={{ position: "relative", borderRadius: "22px", overflow: "hidden", boxShadow: "0 16px 40px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <img
                src={activeTab.image}
                alt={activeTab.title}
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  display: "block"
                }}
              />
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                background: "rgba(9, 18, 42, 0.92)",
                backdropFilter: "blur(10px)",
                color: "#FFFFFF",
                padding: "10px 20px",
                borderRadius: "14px",
                fontSize: "13px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                border: "1px solid rgba(2,172,234,0.3)"
              }}>
                <span style={{ color: "#02ACEA" }}>●</span> {activeTab.metric}
              </div>
            </div>

            {/* Right Text Content */}
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(2,172,234,0.15)",
                color: "#02ACEA",
                fontSize: "12px",
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: "20px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "16px",
                border: "1px solid rgba(2,172,234,0.3)"
              }}>
                {activeTab.badge}
              </div>

              <h3 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px", lineHeight: 1.2 }}>
                {activeTab.title}
              </h3>

              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "28px" }}>
                {activeTab.desc}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                {activeTab.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: 600, color: "#FFFFFF" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(2, 172, 234, 0.2)", color: "#02ACEA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, flexShrink: 0 }}>
                      ✓
                    </div>
                    {bullet}
                  </div>
                ))}
              </div>

              <Link href="/security-compliance" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(2,172,234,0.35)", transition: "all 0.3s" }}>
                Learn More About Security &amp; Compliance <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
