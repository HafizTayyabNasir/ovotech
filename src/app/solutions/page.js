import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";
import SolutionsTabShowcase from "@/components/SolutionsTabShowcase";

export const metadata = {
  title: "Clinical Document Processing & SNOMED CT Solutions | Ovotech",
  description: "End-to-end clinical document processing, SNOMED CT coding, human verification, and EMIS Web write-back for UK primary care."
};

const solutionModules = [
  {
    id: "review-queue",
    tag: "Workload Management",
    title: "Review Queue & Intake Triage",
    desc: "A central workspace displaying incoming secondary care correspondence, processing status, and matched patient details. Gives practice teams total clarity over document queues and urgency prioritization.",
    image: "/step1-intake.png",
    highlights: ["Real-time document status tracking", "Prioritised workload queueing", "Automated NHS patient matching", "Specialty & red-flag urgency filters"],
    link: "/solutions/review-queue"
  },
  {
    id: "clinical-review",
    tag: "Primary Workstation",
    title: "Clinical Review Workspace",
    desc: "The primary document workstation bringing together original clinical PDFs, extracted facts, proposed SNOMED CT codes, and patient history into a single screen—eliminating system toggling.",
    image: "/clinical-workspace-review.png",
    highlights: ["Side-by-side original PDF viewer", "Extracted facts display in context", "One-click approval & editing", "Integrated clinical decision rules"],
    link: "/solutions/clinical-review"
  },
  {
    id: "patient-history",
    tag: "Contextual Review",
    title: "Patient History Context",
    desc: "Surfaces active diagnoses, current repeat medications, and known allergies alongside the document under review. Gives reviewers immediate context to verify coding validity and prevent duplicates.",
    image: "/step4-patient-history.png",
    highlights: ["Instant active record context display", "Historical diagnosis comparison", "Medication & allergy safety overview", "Duplicate coding prevention"],
    link: "/solutions/patient-history"
  },
  {
    id: "snomed-coding",
    tag: "Coding Support",
    title: "SNOMED CT Coding Support",
    desc: "Parses clinical narrative text to identify medical concepts and propose accurate SNOMED CT codes for reviewer verification, editing, or approval.",
    image: "/step3-snomed.png",
    highlights: ["Automated clinical concept recognition", "SNOMED CT code suggestions", "Full reviewer editing & override control", "UK Primary Care subset alignment"],
    link: "/solutions/snomed-coding"
  },
  {
    id: "emis-integration",
    tag: "System Integration",
    title: "EMIS Web Write-Back",
    desc: "Once verified by an authorized practice user, approved clinical data and summary notes are saved directly into the patient's record through supported EMIS Web integration.",
    image: "/step5-emis-writeback.png",
    highlights: ["EMIS Web integration focus", "Structured record write-back", "Auditable transaction & user logs", "Zero manual re-keying"],
    link: "/solutions/emis-integration"
  },
  {
    id: "kpi-tracking",
    tag: "Analytics & ROI",
    title: "Dashboard & KPI Tracking",
    desc: "Empowers GP practice leads with real-time visibility over document throughput, clinician hours saved, backlog reductions, and CQC compliance reports.",
    image: "/hero-tech.png",
    highlights: ["Practice operational metrics", "Released capacity estimations", "Turnaround time analytics", "CQC-ready audit export"],
    link: "/solutions/kpi-tracking"
  }
];

const documentTypes = [
  { icon: "📄", title: "Hospital Discharge Summaries", desc: "Complex inpatient stay summaries parsed into acute diagnoses, medication changes, and follow-up actions." },
  { icon: "🏥", title: "Outpatient Clinic Letters", desc: "Secondary care specialist consultation notes parsed for new diagnoses and recommended management plans." },
  { icon: "🧪", title: "Diagnostic & Pathology Reports", desc: "Lab and radiology reports automatically extracted and mapped to relevant SNOMED CT concepts." },
  { icon: "🚑", title: "A&E Attendance Summaries", desc: "Emergency department visit notes processed rapidly for acute episode recording." },
  { icon: "🩺", title: "GP-to-GP Summaries", desc: "Transfer records and incoming practice correspondence processed for smooth patient onboarding." },
  { icon: "🧠", title: "Mental Health & Community Letters", desc: "Community care and mental health correspondence indexed cleanly for practice records." }
];

const faqs = [
  {
    q: "Does Ovotech make autonomous clinical coding decisions?",
    a: "No. Ovotech is an assisted clinical workflow platform built strictly on a human-in-the-loop model. It extracts clinical information and proposes SNOMED CT codes, but authorized human reviewers inspect and verify every record before write-back."
  },
  {
    q: "How does EMIS Web write-back work safely?",
    a: "Approved data is saved directly into EMIS Web through supported integration interfaces. Every transaction is logged with the approving reviewer's user ID, timestamp, and modified fields for complete auditability."
  },
  {
    q: "What training or setup is required for practice staff?",
    a: "Ovotech features an intuitive interface designed specifically around standard UK GP practice administrative workflows. Practices typically become fully operational within hours, with dedicated support from our clinical workflow team."
  },
  {
    q: "How does Ovotech ensure NHS data security and compliance?",
    a: "Ovotech strictly complies with NHS Digital standards, including DSPT (Data Security and Protection Toolkit), DTAC (Digital Technology Assessment Criteria), UK GDPR, and ISO 27001 parameters."
  }
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader 
        title="Ovotech Platform Overview" 
        description="An end-to-end clinical document processing and coding workflow platform designed specifically for UK GP practices." 
      />

      {/* Quick Jump Navigation Bar */}
      <section style={{ background: "#0F1E36", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "16px 0" }}>
        <div className="site-container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginRight: "6px" }}>
              Quick Navigation:
            </span>
            {solutionModules.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  transition: "all 0.2s"
                }}
              >
                {m.title.split("&")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Positioning & Governance Banner */}
      <section style={{ padding: "64px 0", background: "#F4F7FC", borderBottom: "1px solid #E0E8F5" }}>
        <div className="site-container">
          <div style={{ maxWidth: "920px", margin: "0 auto", background: "#FFFFFF", padding: "40px", borderRadius: "24px", border: "1px solid #E0E8F5", boxShadow: "0 16px 40px rgba(2,172,234,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyBetween: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px", color: "#02ACEA", textTransform: "uppercase", background: "rgba(2,172,234,0.12)", padding: "6px 14px", borderRadius: "20px" }}>
                Key Product Positioning
              </span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#16a34a", background: "rgba(22,163,74,0.1)", padding: "6px 14px", borderRadius: "20px" }}>
                🛡️ 100% Human-in-the-Loop Safeguard
              </span>
            </div>
            
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#0A1838", marginBottom: "14px" }}>
              Assisted Workflow, Not Autonomous Decision-Making
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              Ovotech is an assisted clinical workflow platform. It supports GP practice teams by ingesting incoming secondary care correspondence, extracting clinical facts, organising document content, and proposing SNOMED CT codes—while keeping authorized human reviewers fully in control to inspect, amend, and approve every record before EMIS Web write-back.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", borderTop: "1px solid #E0E8F5", paddingTop: "20px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0A1838" }}><span style={{ color: "#02ACEA" }}>✓</span> Ingest &amp; Triage Inbox</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0A1838" }}><span style={{ color: "#02ACEA" }}>✓</span> AI Concept Extraction</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0A1838" }}><span style={{ color: "#02ACEA" }}>✓</span> SNOMED CT Matching</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0A1838" }}><span style={{ color: "#02ACEA" }}>✓</span> Patient History Verification</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0A1838" }}><span style={{ color: "#02ACEA" }}>✓</span> Human Reviewer Approval</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0A1838" }}><span style={{ color: "#02ACEA" }}>✓</span> EMIS Web Write-Back</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tab Showcase Section */}
      <section style={{ padding: "90px 0", background: "#FFFFFF" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Interactive Platform Tour</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              Explore Ovotech Core Modules
            </h2>
            <p style={{ color: "#475569", marginTop: "12px", maxWidth: "640px", margin: "12px auto 0", fontSize: "16px" }}>
              Click through each module tab below to see how Ovotech simplifies primary care clinical correspondence processing.
            </p>
          </div>

          <SolutionsTabShowcase />
        </div>
      </section>

      {/* Deep Dive Multi-Layout Sections for Solution Modules */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Full Module Breakdown</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              End-to-End Capabilities Built for GP Practice Teams
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {solutionModules.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={m.id}
                  id={m.id}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "28px",
                    padding: "48px 40px",
                    border: "1px solid #E0E8F5",
                    boxShadow: "0 12px 40px rgba(10,24,56,0.04)"
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
                    {/* Text Column */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <span style={{ display: "inline-block", background: "rgba(2,172,234,0.12)", color: "#02ACEA", fontSize: "11px", fontWeight: 700, padding: "5px 14px", borderRadius: "14px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "14px", border: "1px solid rgba(2,172,234,0.3)" }}>
                        Module 0{idx + 1} — {m.tag}
                      </span>
                      <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#0A1838", marginBottom: "14px", lineHeight: 1.25 }}>
                        {m.title}
                      </h3>
                      <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
                        {m.desc}
                      </p>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "32px", borderTop: "1px solid #E0E8F5", paddingTop: "20px" }}>
                        {m.highlights.map((h, hIdx) => (
                          <div key={hIdx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 600, color: "#0A1838" }}>
                            <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> {h}
                          </div>
                        ))}
                      </div>

                      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                        <Link
                          href={m.link}
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
                            boxShadow: "0 4px 14px rgba(2,172,234,0.3)",
                            transition: "all 0.3s"
                          }}
                        >
                          Explore {m.title.split(" ")[0]} Detail Page <span>→</span>
                        </Link>
                      </div>
                    </div>

                    {/* Visual Column */}
                    <div style={{ order: isEven ? 2 : 1, position: "relative" }}>
                      <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E0E8F5", boxShadow: "0 16px 40px rgba(10,24,56,0.1)" }}>
                        <img
                          src={m.image}
                          alt={m.title}
                          style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before vs After Workflow Comparison */}
      <section style={{ padding: "90px 0", background: "#FFFFFF" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Workflow Transformation</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              Traditional Manual Coding vs. Ovotech Assisted Workflow
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {/* Traditional Card */}
            <div style={{ background: "#FFF5F5", borderRadius: "24px", padding: "40px", border: "1px solid #FED7D7" }}>
              <div style={{ display: "inline-block", background: "#FEB2B2", color: "#9B2C2C", fontSize: "12px", fontWeight: 800, padding: "6px 16px", borderRadius: "20px", marginBottom: "20px" }}>
                Traditional Manual Process
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#742A2A", marginBottom: "20px" }}>Slow, Error-Prone &amp; Fatigue Heavy</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#9B2C2C", fontSize: "15px", lineHeight: 1.5, listStyle: "none", padding: 0 }}>
                <li style={{ display: "flex", gap: "10px" }}>❌ <span>Manual scanning &amp; searching through multi-page PDFs</span></li>
                <li style={{ display: "flex", gap: "10px" }}>❌ <span>Toggling between Docman, EMIS Web, and coding lookup sites</span></li>
                <li style={{ display: "flex", gap: "10px" }}>❌ <span>Manual typing of SNOMED codes risking typos and duplicate entries</span></li>
                <li style={{ display: "flex", gap: "10px" }}>❌ <span>Mounting document backlogs causing clinical delayed actions</span></li>
                <li style={{ display: "flex", gap: "10px" }}>❌ <span>High reviewer burnout and inconsistent clinical coding quality</span></li>
              </ul>
            </div>

            {/* Ovotech Card */}
            <div style={{ background: "#F0FDF4", borderRadius: "24px", padding: "40px", border: "1px solid #BBF7D0", boxShadow: "0 16px 40px rgba(22,163,74,0.08)" }}>
              <div style={{ display: "inline-block", background: "#86EFAC", color: "#14532D", fontSize: "12px", fontWeight: 800, padding: "6px 16px", borderRadius: "20px", marginBottom: "20px" }}>
                Ovotech Assisted Workflow
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#14532D", marginBottom: "20px" }}>Fast, Verified &amp; Auditable</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#15803D", fontSize: "15px", lineHeight: 1.5, listStyle: "none", padding: 0 }}>
                <li style={{ display: "flex", gap: "10px" }}>✅ <span>Automatic document ingestion &amp; patient NHS number matching</span></li>
                <li style={{ display: "flex", gap: "10px" }}>✅ <span>Unified side-by-side workspace with extracted entity highlights</span></li>
                <li style={{ display: "flex", gap: "10px" }}>✅ <span>Pre-suggested SNOMED CT codes with one-click reviewer approval</span></li>
                <li style={{ display: "flex", gap: "10px" }}>✅ <span>Zero backlog with average 45-second processing per document</span></li>
                <li style={{ display: "flex", gap: "10px" }}>✅ <span>Direct EMIS Web write-back with complete CQC audit logging</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Document Types Supported Matrix */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Clinical Breadth</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              Document Types Parsed &amp; Coded
            </h2>
            <p style={{ color: "#475569", marginTop: "12px", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              Ovotech processes all standard secondary care correspondence formats received by UK primary care practices.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {documentTypes.map((dt, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "32px 24px", border: "1px solid #E0E8F5", transition: "transform 0.3s" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{dt.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1838", marginBottom: "10px" }}>{dt.title}</h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{dt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & FAQ Section */}
      <section style={{ padding: "90px 0", background: "#FFFFFF" }}>
        <div className="site-container" style={{ maxWidth: "880px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Governance &amp; Safety</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              Frequently Asked Questions About Ovotech Solutions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: "#F4F7FC", borderRadius: "18px", padding: "28px 32px", border: "1px solid #E0E8F5" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1838", marginBottom: "10px" }}>{f.q}</h4>
                <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7 }}>{f.a}</p>
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
