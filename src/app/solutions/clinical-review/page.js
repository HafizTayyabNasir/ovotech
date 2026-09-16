import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";

export const metadata = {
  title: "Clinical Review Workspace | Ovotech Solutions",
  description: "Unified side-by-side clinical document review workspace designed for UK GP practice reviewers."
};

const capabilities = [
  {
    icon: "🖥️",
    title: "Side-by-Side PDF Viewer",
    desc: "Original secondary care PDF displayed directly alongside extracted clinical facts and suggested SNOMED CT codes."
  },
  {
    icon: "🔍",
    title: "In-Context Entity Highlighting",
    desc: "Clicking any extracted diagnosis, medication, or lab result highlights the exact text source in the document."
  },
  {
    icon: "⚡",
    title: "One-Click Approvals",
    desc: "Reviewers can quickly verify, edit, or reject proposed codes with a single click—saving over 75% of processing time."
  },
  {
    icon: "🛡️",
    title: "Clinical Governance Control",
    desc: "Ensures no data enters EMIS Web without explicit human approval by an authorized clinician or trained reviewer."
  }
];

export default function ClinicalReviewPage() {
  return (
    <>
      <PageHeader 
        title="Clinical Review Workspace" 
        description="The central workstation for primary care teams—bringing documents, clinical facts, coding suggestions, and record write-back into one screen." 
      />

      {/* Sub-Hero Section */}
      <section style={{ padding: "80px 0", background: "#FFFFFF", borderBottom: "1px solid #E0E8F5" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-block", background: "rgba(2,172,234,0.12)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", border: "1px solid rgba(2,172,234,0.3)" }}>
                Core Capability #2
              </span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.2, marginBottom: "20px" }}>
                Eliminate Screen Switching &amp; Manual Copy-Pasting
              </h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "24px" }}>
                Traditional correspondence processing forces staff to jump between Docman, EMIS Web, and paper records while manually typing codes. The Ovotech Clinical Review Workspace unifies all relevant data into a single intuitive view.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Dual-panel document view with live text highlighting
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Suggested SNOMED CT codes pre-matched to narrative text
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Full reviewer override, edit, or rejection authority
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Link href="/contact" style={{ background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(2,172,234,0.3)" }}>
                  Schedule Workspace Demo
                </Link>
                <Link href="/solutions" style={{ border: "2px solid #E0E8F5", color: "#0A1838", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", background: "#F4F7FC" }}>
                  Back to Overview
                </Link>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid #E0E8F5", boxShadow: "0 20px 50px rgba(10,24,56,0.12)" }}>
                <img src="/clinical-workspace-review.png" alt="Clinical Review Workspace Interface" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ position: "absolute", top: "24px", left: "-12px", background: "#FFFFFF", padding: "14px 20px", borderRadius: "16px", boxShadow: "0 12px 35px rgba(0,0,0,0.12)", border: "1px solid #E0E8F5" }}>
                <div style={{ fontSize: "12px", fontWeight: 800, color: "#16a34a" }}>✓ Human Verified</div>
                <div style={{ fontSize: "11px", color: "#64748B" }}>Ready for EMIS Write-Back</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>Workspace Features</span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>Built Around Clinical Reviewer Workflows</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            {capabilities.map((c, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "32px 24px", border: "1px solid #E0E8F5", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(2,172,234,0.12)", fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  {c.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1838", marginBottom: "10px" }}>{c.title}</h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solution Navigation */}
      <section style={{ padding: "60px 0", background: "#B332D2", color: "#FFFFFF" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>Next Solution Module</span>
          <h3 style={{ fontSize: "24px", fontWeight: 800, marginTop: "8px", marginBottom: "20px", color: "#FFFFFF" }}>Explore Patient History Context</h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", maxWidth: "560px", margin: "0 auto 28px" }}>
            Learn how Ovotech pulls immediate medical background alongside document reviews to prevent clinical coding errors.
          </p>
          <Link href="/solutions/patient-history" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "10px" }}>
            View Patient History Context <span>→</span>
          </Link>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}

