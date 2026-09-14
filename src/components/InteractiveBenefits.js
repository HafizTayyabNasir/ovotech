"use client";
import { useState } from "react";
import Link from "next/link";

const benefitsData = [
  {
    id: "accelerate-correspondence",
    title: "Accelerate Correspondence",
    badge: "Efficiency & Speed",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    description: "Process complex clinical correspondence letters in under 2 minutes with automated SNOMED CT coding suggestions, pre-parsed entity extraction, and single-click approval.",
    image: "/clinical-workspace-review.png",
    metric: "75% Time Saved",
    bullets: [
      "Sub-2 minute clinic letter turnaround",
      "Automated SNOMED CT term pre-filling",
      "One-click verification & EMIS write-back"
    ]
  },
  {
    id: "precision-snomed",
    title: "Precision SNOMED CT",
    badge: "Clinical Accuracy",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    description: "Maintain uniform NHS clinical coding standards across all practice correspondence using intelligent concept recognition aligned with official UK SNOMED CT dictionaries.",
    image: "/benefits-doctor.png",
    metric: "100% NHS Standard",
    bullets: [
      "Standardized UK SNOMED CT concept mapping",
      "Eliminates coding variance between reviewers",
      "Full audit trail for clinical governance"
    ]
  },
  {
    id: "empower-teams",
    title: "Empower Practice Teams",
    badge: "Staff Capability",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    description: "Empower non-clinical administrative and coding staff to manage incoming mail confidently with intuitive side-by-side patient record context and decision assistance.",
    image: "/hero-doctor.png",
    metric: "Reduced Admin Friction",
    bullets: [
      "Accelerated onboarding for administrative coders",
      "Unified single-screen review environment",
      "Contextual patient history panel"
    ]
  },
  {
    id: "zero-backlog",
    title: "Zero-Backlog Resiliency",
    badge: "Operational Capacity",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    description: "Eliminate document processing bottlenecks and protect your practice against staff leavers or sickness with a centralized Review Queue and workload distribution.",
    image: "/benefits-man.png",
    metric: "Continuous Flow",
    bullets: [
      "Real-time Review Queue management",
      "Prevents correspondence backlogs",
      "Seamless team coverage during absences"
    ]
  },
  {
    id: "revenue-qof",
    title: "QOF & Revenue Optimisation",
    badge: "Financial Impact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    description: "Identify and record missed QOF clinical indicators, chronic condition diagnoses, and secondary care recommendations directly into structured patient records.",
    image: "/cta-man.png",
    metric: "Optimised QOF Points",
    bullets: [
      "Accurate capture of QOF & IIF indicators",
      "Identifies unrecorded chronic disease terms",
      "Maximises practice contract revenue"
    ]
  },
  {
    id: "emis-record-quality",
    title: "EMIS Web Record Quality",
    badge: "System Integration",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    description: "Enhance clinical record completeness and compliance by seamlessly writing back approved structured data and SNOMED CT codes directly into EMIS Web.",
    image: "/clinical-workspace-review.png",
    metric: "Direct Write-Back",
    bullets: [
      "Structured EMIS Web clinical record entry",
      "High data quality for clinical safety",
      "Comprehensive patient consultation timeline"
    ]
  }
];

export default function InteractiveBenefits() {
  const [activeTab, setActiveTab] = useState(benefitsData[0]);

  return (
    <section style={{ background: "#FFFFFF", padding: "110px 0", color: "#0F172A", position: "relative", overflow: "hidden" }}>
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{ display: "inline-block", background: "rgba(2,172,234,0.1)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 20px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid rgba(2,172,234,0.25)" }}>
            Ovotech Platform Capabilities
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
            Transforming Primary Care Document Workflows
          </h2>
          <p style={{ color: "#475569", fontSize: "16px", marginTop: "14px", maxWidth: "620px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Designed specifically for UK GP practices to elevate efficiency, ensure coding accuracy, and support practice staff.
          </p>
        </div>

        {/* 6 Tabs Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
          marginBottom: "40px"
        }}>
          {benefitsData.map((item) => {
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
            {/* Left Image with Floating Metric Chip */}
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
                {activeTab.description}
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

              <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(2,172,234,0.35)", transition: "all 0.3s" }} onMouseEnter={e => e.currentTarget.style.background = "#028EC7"} onMouseLeave={e => e.currentTarget.style.background = "#02ACEA"}>
                Explore Platform Features <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
