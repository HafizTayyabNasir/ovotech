import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";

export const metadata = {
  title: "EMIS Web Integration & Write-Back | Ovotech Solutions",
  description: "Seamless, secure clinical record write-back into EMIS Web for UK GP practices."
};

const capabilities = [
  {
    icon: "🔗",
    title: "Supported EMIS Integration",
    desc: "Built to work smoothly with UK GP IT systems, enabling reliable clinical record write-back without disrupting practice workflows."
  },
  {
    icon: "💾",
    title: "Structured Record Commit",
    desc: "Writes back verified SNOMED CT codes, consultation notes, and document attachments directly into patient records."
  },
  {
    icon: "🛡️",
    title: "Auditable Transaction Log",
    desc: "Every record commit records the approving user's identity, timestamp, original document reference, and modified fields."
  },
  {
    icon: "🔒",
    title: "DSPT & DTAC Compliant",
    desc: "Meets full NHS Digital Data Security and Protection Toolkit (DSPT) standards and DTAC clinical safety guidelines."
  }
];

export default function EmisIntegrationPage() {
  return (
    <>
      <PageHeader 
        title="EMIS Web Integration & Write-Back" 
        description="Save verified clinical information and SNOMED CT codes directly into EMIS Web records—eliminating manual re-keying while preserving complete data integrity." 
      />

      {/* Sub-Hero Section */}
      <section style={{ padding: "80px 0", background: "#FFFFFF", borderBottom: "1px solid #E0E8F5" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-block", background: "rgba(2,172,234,0.12)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", border: "1px solid rgba(2,172,234,0.3)" }}>
                Core Capability #5
              </span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.2, marginBottom: "20px" }}>
                Seamless Structured Write-Back directly to EMIS Web
              </h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "24px" }}>
                Extracting clinical details is only half the battle. Ovotech bridges the gap between intake and primary care records by committing human-verified clinical codes, problem list updates, and notes into EMIS Web.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Structured SNOMED CT write-back to consultation history
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Immutable audit trail logs for CQC compliance
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Zero risk of desynchronized or orphaned clinical records
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Link href="/contact" style={{ background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(2,172,234,0.3)" }}>
                  Book EMIS Integration Demo
                </Link>
                <Link href="/solutions" style={{ border: "2px solid #E0E8F5", color: "#0A1838", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", background: "#F4F7FC" }}>
                  Back to Overview
                </Link>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid #E0E8F5", boxShadow: "0 20px 50px rgba(10,24,56,0.12)" }}>
                <img src="/step5-emis-writeback.png" alt="EMIS Web Write-Back Display" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ position: "absolute", bottom: "24px", right: "-12px", background: "#FFFFFF", padding: "14px 20px", borderRadius: "16px", boxShadow: "0 12px 35px rgba(0,0,0,0.12)", border: "1px solid #E0E8F5" }}>
                <div style={{ fontSize: "12px", fontWeight: 800, color: "#16a34a" }}>EMIS Web Synced</div>
                <div style={{ fontSize: "11px", color: "#64748B" }}>Transaction #84920 Confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>Integration Highlights</span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>Enterprise Security &amp; Clinical Governance</h2>
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
          <h3 style={{ fontSize: "24px", fontWeight: 800, marginTop: "8px", marginBottom: "20px", color: "#FFFFFF" }}>Explore KPI &amp; Operational Analytics</h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", maxWidth: "560px", margin: "0 auto 28px" }}>
            Monitor practice throughput, clinician time saved, and released operational capacity with real-time dashboards.
          </p>
          <Link href="/solutions/kpi-tracking" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "10px" }}>
            View KPI &amp; Analytics Dashboard <span>→</span>
          </Link>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
