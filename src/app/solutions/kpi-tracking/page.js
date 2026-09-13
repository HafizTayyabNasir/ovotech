import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";

export const metadata = {
  title: "Dashboard & Operational Analytics | Ovotech Solutions",
  description: "Real-time practice capacity tracking, time saved metrics, turnaround times, and CQC audit reporting."
};

const capabilities = [
  {
    icon: "📊",
    title: "Practice Throughput Metrics",
    desc: "Visualise daily, weekly, and monthly document volume trends, backlog reduction, and reviewer activity."
  },
  {
    icon: "⏱️",
    title: "Capacity Released Analytics",
    desc: "Calculate clinician and administrative time saved, transforming efficiency into tangible practice cost savings."
  },
  {
    icon: "📋",
    title: "CQC Audit Ready Reporting",
    desc: "Export comprehensive audit reports detailing review accuracy, human approval timestamps, and clinical compliance."
  },
  {
    icon: "🌐",
    title: "Multi-Practice PCN Insights",
    desc: "Benchmark document processing speeds across multiple GP surgeries within your Primary Care Network."
  }
];

export default function KpiTrackingPage() {
  return (
    <>
      <PageHeader 
        title="Dashboard, Workflow Visibility & KPI Tracking" 
        description="Complete operational visibility over practice document volumes, processing speeds, released clinical capacity, and CQC audit compliance." 
      />

      {/* Sub-Hero Section */}
      <section style={{ padding: "80px 0", background: "#FFFFFF", borderBottom: "1px solid #E0E8F5" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-block", background: "rgba(2,172,234,0.12)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", border: "1px solid rgba(2,172,234,0.3)" }}>
                Core Capability #6
              </span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.2, marginBottom: "20px" }}>
                Turn Operational Data Into Actionable Practice Capacity
              </h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "24px" }}>
                GP practice partners and PCN managers need clear data to justify workflow changes and ensure quality standards. Ovotech provides real-time dashboards showing document turnaround times, coding accuracy, and hours saved.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Real-time document backlog &amp; throughput monitoring
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Automated ROI &amp; hours-saved capacity calculations
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> One-click CQC inspection audit exports
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Link href="/contact" style={{ background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(2,172,234,0.3)" }}>
                  Book Dashboard Demo
                </Link>
                <Link href="/solutions" style={{ border: "2px solid #E0E8F5", color: "#0A1838", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", background: "#F4F7FC" }}>
                  Back to Overview
                </Link>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid #E0E8F5", boxShadow: "0 20px 50px rgba(10,24,56,0.12)" }}>
                <img src="/hero-tech.png" alt="Analytics Dashboard Interface" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ position: "absolute", top: "24px", right: "-12px", background: "#FFFFFF", padding: "14px 20px", borderRadius: "16px", boxShadow: "0 12px 35px rgba(0,0,0,0.12)", border: "1px solid #E0E8F5" }}>
                <div style={{ fontSize: "12px", fontWeight 800, color: "#02ACEA" }}>Weekly Impact</div>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#0A1838" }}>+32 Hrs Released</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>Analytics Highlights</span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight 800, color: "#0A1838", marginTop: "8px" }}>Data-Driven Practice Management</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            {capabilities.map((c, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "32px 24px", border: "1px solid #E0E8F5", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(2,172,234,0.12)", fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  {c.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight 800, color: "#0A1838", marginBottom: "10px" }}>{c.title}</h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solution Navigation */}
      <section style={{ padding: "60px 0", background: "#0F1E36", color: "#FFFFFF" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>Complete Platform Suite</span>
          <h3 style={{ fontSize: "24px", fontWeight 800, marginTop: "8px", marginBottom: "20px", color: "#FFFFFF" }}>Ready to Experience Ovotech in Your Practice?</h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", maxWidth: "560px", margin: "0 auto 28px" }}>
            Get in touch with our UK clinical workflow specialists for a customized walkthrough and trial for your GP practice.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px" }}>
            Book Practice Walkthrough <span>→</span>
          </Link>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
