import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";

export const metadata = {
  title: "Review Queue & Workload Management | Ovotech Solutions",
  description: "Automated clinical document triage, status tracking, and workload prioritization for UK GP practices."
};

const capabilities = [
  {
    icon: "📋",
    title: "Centralised Document Triage",
    desc: "Collects incoming hospital discharge letters, clinic notes, and diagnostic reports into a single, organized practice inbox."
  },
  {
    icon: "⚡",
    title: "Smart Priority Routing",
    desc: "Automatically tags high-priority documents based on urgency markers, specific specialties, or red-flag clinical terms."
  },
  {
    icon: "👤",
    title: "Automated Patient Matching",
    desc: "Cross-references NHS numbers, DOB, and patient names against practice records to ensure zero-mismatch document assignments."
  },
  {
    icon: "📊",
    title: "Real-Time Workload Tracking",
    desc: "Monitors unprocessed queues, turnaround times, and team capacity so administrative leads can balance review workloads effortlessly."
  }
];

const workflowSteps = [
  {
    step: "01",
    title: "Document Ingestion",
    desc: "Secondary care documents arrive electronically via docman, email, or scanned inbox into the central Ovotech intake."
  },
  {
    step: "02",
    title: "Instant OCR & Parsing",
    desc: "High-precision optical character recognition reads text and categorises document metadata in seconds."
  },
  {
    step: "03",
    title: "Patient & Priority Tagging",
    desc: "Ovotech matches the patient NHS record and tags priority status, flagging acute diagnoses for immediate review."
  },
  {
    step: "04",
    title: "Assigned to Review Queue",
    desc: "The document is routed to the appropriate clinician or administrative reviewer inbox ready for one-click verification."
  }
];

export default function ReviewQueuePage() {
  return (
    <>
      <PageHeader 
        title="Review Queue & Workload Management" 
        description="Streamline clinical correspondence triage, eliminate document backlogs, and give administrative leads complete operational clarity." 
      />

      {/* Sub-Hero Section */}
      <section style={{ padding: "80px 0", background: "#FFFFFF", borderBottom: "1px solid #E0E8F5" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-block", background: "rgba(2,172,234,0.12)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", border: "1px solid rgba(2,172,234,0.3)" }}>
                Core Capability #1
              </span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.2, marginBottom: "20px" }}>
                Never Lose Track of Incoming Hospital Correspondence
              </h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "24px" }}>
                UK GP practices receive hundreds of clinic letters and discharge summaries every day. Ovotech&apos;s Review Queue transforms chaotic document inflows into a structured, prioritised clinical workflow—ensuring urgent patient details are reviewed without delay.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Zero unassigned hospital correspondence
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Automatic NHS number &amp; DOB patient matching
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Priority status tags for urgent discharge summaries
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Link href="/contact" style={{ background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(2,172,234,0.3)" }}>
                  Book a Queue Demo
                </Link>
                <Link href="/solutions" style={{ border: "2px solid #E0E8F5", color: "#0A1838", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", background: "#F4F7FC" }}>
                  Back to Solutions Overview
                </Link>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid #E0E8F5", boxShadow: "0 20px 50px rgba(10,24,56,0.12)" }}>
                <img src="/step1-intake.png" alt="Review Queue Dashboard" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ position: "absolute", bottom: "24px", right: "-12px", background: "#FFFFFF", padding: "16px 24px", borderRadius: "18px", boxShadow: "0 12px 35px rgba(0,0,0,0.12)", border: "1px solid #E0E8F5", maxWidth: "260px" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase" }}>Live Queue Status</div>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#0A1838", marginTop: "2px" }}>100% Processed</div>
                <div style={{ fontSize: "12px", color: "#64748B", marginTop: "4px" }}>Average processing speed: 45s / doc</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>Key Capabilities</span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>Designed for High-Volume GP Operations</h2>
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

      {/* Workflow Step Breakdown */}
      <section style={{ padding: "90px 0", background: "#FFFFFF" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>How It Works</span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>4 Steps to Intake Mastery</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {workflowSteps.map((s, i) => (
              <div key={i} style={{ background: "#F4F7FC", borderRadius: "20px", padding: "32px 24px", border: "1px solid #E0E8F5", position: "relative" }}>
                <div style={{ fontSize: "32px", fontWeight: 900, color: "#02ACEA", opacity: 0.8, marginBottom: "12px" }}>{s.step}</div>
                <h4 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1838", marginBottom: "10px" }}>{s.title}</h4>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solution Navigation */}
      <section style={{ padding: "60px 0", background: "#B332D2", color: "#FFFFFF" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>Next Solution Module</span>
          <h3 style={{ fontSize: "24px", fontWeight: 800, marginTop: "8px", marginBottom: "20px", color: "#FFFFFF" }}>Explore Clinical Review Workspace</h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", maxWidth: "560px", margin: "0 auto 28px" }}>
            See how Ovotech combines document text, extracted facts, and SNOMED CT suggestions into a unified reviewer interface.
          </p>
          <Link href="/solutions/clinical-review" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "10px" }}>
            View Clinical Review Workspace <span>→</span>
          </Link>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}

