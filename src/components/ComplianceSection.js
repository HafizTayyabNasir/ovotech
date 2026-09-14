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
    <section style={{ background: "#FFFFFF", padding: "110px 0", color: "#0F172A", position: "relative", overflow: "hidden" }}>
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{ display: "inline-block", background: "rgba(2,172,234,0.1)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 20px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid rgba(2,172,234,0.25)" }}>
            TRUSTED NHS COMPLIANCE &amp; GOVERNANCE
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
            Enterprise NHS Security &amp; Clinical Governance
          </h2>
          <p style={{ color: "#475569", fontSize: "16px", marginTop: "14px", maxWidth: "620px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
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
                  borderRadius: "16px",
                  background: isActive ? "#F0F9FF" : "#FFFFFF",
                  border: isActive ? "2px solid #02ACEA" : "1px solid #E2E8F5",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  boxShadow: isActive ? "0 10px 24px rgba(2,172,234,0.15)" : "0 2px 6px rgba(0,0,0,0.02)",
                  transform: isActive ? "translateY(-2px)" : "none",
                }}
              >
                <div style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: isActive ? "#02ACEA" : "rgba(2,172,234,0.1)",
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
                    fontWeight: isActive ? 800 : 700,
                    color: "#0F172A",
                    display: "block",
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </span>
                  <span style={{
                    fontSize: "11px",
                    color: "#02ACEA",
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
          background: "#FFFFFF",
          borderRadius: "24px",
          padding: "48px",
          color: "#0F172A",
          boxShadow: "0 20px 50px rgba(2, 172, 234, 0.1)",
          border: "1px solid #E2E8F5"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px",
            alignItems: "center"
          }}>
            {/* Left Image with Floating Metric Badge */}
            <div style={{ position: "relative", borderRadius: "18px", overflow: "hidden", border: "1px solid #E2E8F5", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
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
                background: "#FFFFFF",
                color: "#0F172A",
                padding: "10px 20px",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                border: "1px solid #BAE6FD"
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
                background: "rgba(2,172,234,0.1)",
                color: "#02ACEA",
                fontSize: "12px",
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: "20px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "16px",
                border: "1px solid rgba(2,172,234,0.25)"
              }}>
                {activeTab.badge}
              </div>

              <h3 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, color: "#0F172A", marginBottom: "16px", lineHeight: 1.2 }}>
                {activeTab.title}
              </h3>

              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "28px" }}>
                {activeTab.desc}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                {activeTab.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: 600, color: "#0F172A" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(2, 172, 234, 0.15)", color: "#02ACEA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, flexShrink: 0 }}>
                      ✓
                    </div>
                    {bullet}
                  </div>
                ))}
              </div>

              <Link href="/security-compliance" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(2,172,234,0.35)", transition: "all 0.3s" }} onMouseEnter={e => e.currentTarget.style.background = "#028EC7"} onMouseLeave={e => e.currentTarget.style.background = "#02ACEA"}>
                Learn More About Security &amp; Compliance <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
