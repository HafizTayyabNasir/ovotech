import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";

const platformModules = [
  {
    id: "review-queue",
    tag: "Workload Management",
    title: "Review Queue",
    desc: "A central workspace showing clinical documents that require review, their processing status, and relevant patient information. Gives teams clear visibility over incoming workload and helps manage clinical correspondence systematically.",
    highlights: ["Real-time document status tracking", "Prioritised workload queue", "Patient matching & identification"]
  },
  {
    id: "clinical-review",
    tag: "Primary Workspace",
    title: "Clinical Review Workspace",
    desc: "The primary document-processing workspace bringing together original clinical documents, extracted clinical information, suggested SNOMED CT codes, patient history, and required actions into a single screen—eliminating system switching.",
    highlights: ["Side-by-side original document view", "Extracted clinical facts display", "One-click approval workflow"]
  },
  {
    id: "patient-history",
    tag: "Contextual Review",
    title: "Patient History",
    desc: "Provides relevant patient record context alongside the document being reviewed. Gives reviewers immediate background context to verify whether extracted clinical details and proposed SNOMED CT codes are appropriate.",
    highlights: ["Instant record context display", "Historical diagnosis comparison", "Medication & allergy overview"]
  },
  {
    id: "snomed-coding",
    tag: "Coding Support",
    title: "SNOMED CT Coding Support",
    desc: "Identifies relevant clinical concepts within documents and proposes accurate SNOMED CT codes for the reviewer to verify, amend, or approve.",
    highlights: ["Automated concept recognition", "SNOMED CT code suggestions", "Full reviewer editing control"]
  },
  {
    id: "emis-integration",
    tag: "System Integration",
    title: "EMIS Web Integration",
    desc: "Once approved by an authorised user, relevant clinical information and codes are written directly into the patient's clinical record through supported EMIS Web integration.",
    highlights: ["EMIS Web integration focus", "Structured clinical record write-back", "Auditable transaction logs"]
  },
  {
    id: "kpi-tracking",
    tag: "Analytics & ROI",
    title: "Dashboard, Workflow Visibility & KPI Tracking",
    desc: "Provides GP practice leaders with complete visibility over document volumes, processing activity, outstanding work, and operational performance metrics such as estimated time saved and released capacity.",
    highlights: ["Practice operational metrics", "Capacity released estimations", "Turnaround time analytics"]
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader 
        title="Ovotech Platform Overview" 
        description="An end-to-end clinical document processing and coding workflow platform designed specifically for UK GP practices." 
      />
      
      {/* Intro Banner */}
      <section style={{ padding: "60px 0", background: "#F4F7FC", borderBottom: "1px solid #E0E8F5" }}>
        <div className="site-container">
          <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "36px", borderRadius: "20px", border: "1px solid #E0E8F5", boxShadow: "0 10px 30px rgba(0,168,232,0.05)" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "#00A8E8", textTransform: "uppercase" }}>Key Product Positioning</span>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#0A1838", marginTop: "8px", marginBottom: "12px" }}>Assisted Workflow, Not Autonomous Decision-Making</h2>
            <p style={{ color: "#475569", fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>
              Ovotech is an assisted clinical workflow platform. It supports practice teams by extracting clinical information, organising document content, and proposing SNOMED CT coding—while keeping authorised users fully in control to review and approve every record before EMIS Web write-back.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "14px", fontWeight: 600, color: "#00A8E8" }}>
              <span>✓ Document Intake</span>
              <span>✓ Extraction</span>
              <span>✓ Review Queue</span>
              <span>✓ Clinical Review</span>
              <span>✓ Patient History</span>
              <span>✓ SNOMED Coding</span>
              <span>✓ Human Approval</span>
              <span>✓ EMIS Write-Back</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Modules */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "48px", maxWidth: "960px", margin: "0 auto" }}>
            {platformModules.map((m, i) => (
              <div key={m.id} id={m.id} style={{ background: "#F4F7FC", borderRadius: "24px", padding: "40px", border: "1px solid #E0E8F5", transition: "all 0.3s" }}>
                <span style={{ display: "inline-block", background: "rgba(0,168,232,0.1)", color: "#00A8E8", fontSize: "11px", fontWeight: 700, padding: "4px 14px", borderRadius: "12px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "14px" }}>
                  {m.tag}
                </span>
                <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#0A1838", marginBottom: "12px" }}>{m.title}</h3>
                <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>{m.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", borderTop: "1px solid #E0E8F5", paddingTop: "20px" }}>
                  {m.highlights.map((h, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 600, color: "#0A1838" }}>
                      <span style={{ color: "#00A8E8" }}>✓</span> {h}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
