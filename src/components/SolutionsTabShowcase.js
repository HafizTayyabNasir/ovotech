"use client";
import { useState } from "react";
import Link from "next/link";

const modulesData = [
  {
    id: "review-queue",
    tag: "Workload Management",
    title: "Review Queue & Intake Automation",
    subtitle: "Centralised incoming correspondence triage and prioritization",
    desc: "A unified, intelligent workspace showing all incoming clinical documents that require review. Triage documents automatically by urgency, document type, or patient risk profile while maintaining total operational clarity.",
    image: "/step1-intake.png",
    highlights: [
      "Real-time document status tracking",
      "Prioritised workload queue with smart tagging",
      "Automated patient matching & NHS number validation",
      "Urgency & specialty classification filters"
    ],
    link: "/solutions/review-queue"
  },
  {
    id: "clinical-review",
    tag: "Primary Workspace",
    title: "Clinical Review Workspace",
    subtitle: "Side-by-side verification without toggling between screens",
    desc: "The core clinical workstation bringing together original clinical documents, extracted facts, proposed SNOMED CT codes, patient record background, and required actions in a single unified interface.",
    image: "/clinical-workspace-review.png",
    highlights: [
      "Side-by-side original document PDF viewer",
      "Extracted clinical concepts highlighted in context",
      "One-click reviewer verification & editing",
      "Seamless integration with clinical decision rules"
    ],
    link: "/solutions/clinical-review"
  },
  {
    id: "patient-history",
    tag: "Contextual Review",
    title: "Patient History Context",
    subtitle: "Instant clinical background for accurate decision-making",
    desc: "Surfaces relevant historical diagnoses, current medications, allergies, and previous consultations alongside the document being reviewed. Minimises clinical risk and prevents duplicate coding.",
    image: "/step4-patient-history.png",
    highlights: [
      "Instant record context display alongside document",
      "Historical diagnosis comparison & cross-referencing",
      "Medication & allergy overview panel",
      "Contextual safety warnings and alerts"
    ],
    link: "/solutions/patient-history"
  },
  {
    id: "snomed-coding",
    tag: "Coding Support",
    title: "SNOMED CT Coding Support",
    subtitle: "Precision AI concept recognition with full human oversight",
    desc: "Automatically analyses clinical narrative text to identify medical concepts, diagnoses, procedures, and findings—proposing accurate SNOMED CT terminology for human approval.",
    image: "/step3-snomed.png",
    highlights: [
      "Automated clinical concept & term recognition",
      "SNOMED CT code suggestions with confidence scores",
      "Full reviewer editing, amendment & override control",
      "Compliance with UK primary care coding standards"
    ],
    link: "/solutions/snomed-coding"
  },
  {
    id: "emis-integration",
    tag: "System Integration",
    title: "EMIS Web Integration",
    subtitle: "Direct, audited write-back into patient clinical records",
    desc: "Once verified by an authorized clinician or administrative reviewer, coded data and summary notes are saved directly into the EMIS Web EPR system without manual re-keying.",
    image: "/step5-emis-writeback.png",
    highlights: [
      "Supported EMIS Web integration framework",
      "Structured clinical record write-back",
      "Complete auditable transaction & approval logs",
      "Zero manual data entry required"
    ],
    link: "/solutions/emis-integration"
  },
  {
    id: "kpi-tracking",
    tag: "Analytics & Governance",
    title: "Dashboard & Operational Analytics",
    subtitle: "Real-time practice capacity, turnaround times & audit trails",
    desc: "Empowers practice managers and PCN clinical leads with comprehensive dashboards tracking document throughput, clinician time saved, outstanding backlogs, and CQC compliance metrics.",
    image: "/hero-tech.png",
    highlights: [
      "Practice operational throughput metrics",
      "Estimated clinical capacity released calculations",
      "Turnaround time & queue backlog analytics",
      "Full audit trail & exportable reporting"
    ],
    link: "/solutions/kpi-tracking"
  }
];

export default function SolutionsTabShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeModule = modulesData[activeTab];

  return (
    <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #E0E8F5", boxShadow: "0 20px 50px rgba(10,24,56,0.06)", overflow: "hidden" }}>
      {/* Navigation Bar / Tabs */}
      <div style={{ display: "flex", overflowX: "auto", background: "#F4F7FC", borderBottom: "1px solid #E0E8F5", padding: "8px 12px", gap: "8px" }} className="no-scrollbar">
        {modulesData.map((m, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={m.id}
              onClick={() => setActiveTab(idx)}
              style={{
                flex: "1",
                minWidth: "160px",
                padding: "14px 18px",
                borderRadius: "14px",
                border: "none",
                background: isActive ? "#FFFFFF" : "transparent",
                boxShadow: isActive ? "0 4px 14px rgba(0,0,0,0.06)" : "none",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.25s ease",
                outline: "none"
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: isActive ? "#02ACEA" : "#64748B", marginBottom: "4px" }}>
                {m.tag}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 800, color: isActive ? "#0A1838" : "#475569", whiteSpace: "nowrap" }}>
                {m.title.split(" ")[0]} {m.title.split(" ")[1] || ""}
              </div>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div style={{ padding: "48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
          {/* Text Left */}
          <div>
            <span style={{ display: "inline-block", background: "rgba(2, 172, 234,0.12)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: "14px", border: "1px solid rgba(2, 172, 234,0.25)" }}>
              {activeModule.tag}
            </span>
            <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#0A1838", marginBottom: "8px", lineHeight: 1.25 }}>
              {activeModule.title}
            </h3>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#02ACEA", marginBottom: "16px" }}>
              {activeModule.subtitle}
            </p>
            <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, marginBottom: "28px" }}>
              {activeModule.desc}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {activeModule.highlights.map((h, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", fontWeight: 600, color: "#0A1838" }}>
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(2, 172, 234,0.15)", color: "#02ACEA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, shrink: 0 }}>
                    ✓
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <Link
                href={activeModule.link}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#02ACEA",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(2, 172, 234,0.3)",
                  transition: "all 0.3s"
                }}
              >
                Learn More About {activeModule.title.split(" ")[0]} <span>→</span>
              </Link>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#0A1838",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "1px solid #E0E8F5",
                  background: "#F4F7FC"
                }}
              >
                Request Live Demo
              </Link>
            </div>
          </div>

          {/* Image Right */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E0E8F5", boxShadow: "0 16px 40px rgba(10,24,56,0.1)" }}>
              <img
                src={activeModule.image}
                alt={activeModule.title}
                style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Floating feature pill */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                background: "rgba(10, 24, 56, 0.88)",
                backdropFilter: "blur(12px)",
                padding: "14px 20px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#02ACEA", fontWeight: 700 }}>
                  EMIS Integrated
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700 }}>
                  Human Review &amp; Audit Ready
                </div>
              </div>
              <span style={{ fontSize: "18px" }}>🛡️</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

