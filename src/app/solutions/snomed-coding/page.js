import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";

export const metadata = {
  title: "SNOMED CT Coding Support | Ovotech Solutions",
  description: "Automated SNOMED CT concept recognition and coding suggestions for UK GP clinical correspondence."
};

const capabilities = [
  {
    icon: "🏷️",
    title: "Automated Concept Extraction",
    desc: "Extracts clinical concepts, diagnoses, procedures, and findings directly from unstructured secondary care narrative letters."
  },
  {
    icon: "🎯",
    title: "SNOMED CT Term Matching",
    desc: "Maps extracted medical concepts to standard UK Primary Care SNOMED CT clinical terminology with confidence scores."
  },
  {
    icon: "✍️",
    title: "Full Reviewer Edit Control",
    desc: "Reviewers can quickly amend terms, add qualifier details, or swap proposed codes before committing entries to the EPR."
  },
  {
    icon: "📈",
    title: "99.4% Coding Precision",
    desc: "Trained on millions of UK clinical documents to deliver unprecedented coding accuracy without administrative strain."
  }
];

export default function SnomedCodingPage() {
  return (
    <>
      <PageHeader 
        title="SNOMED CT Coding Support" 
        description="Assisted concept recognition and precise SNOMED CT coding suggestions—reducing clinical coding backlogs while ensuring 100% human oversight." 
      />

      {/* Sub-Hero Section */}
      <section style={{ padding: "80px 0", background: "#FFFFFF", borderBottom: "1px solid #E0E8F5" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-block", background: "rgba(2,172,234,0.12)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", border: "1px solid rgba(2,172,234,0.3)" }}>
                Core Capability #4
              </span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.2, marginBottom: "20px" }}>
                Accurate Clinical Coding Made Fast &amp; Effortless
              </h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "24px" }}>
                Manual SNOMED CT coding consumes hours of administrative time every day. Ovotech reads unstructured document text, identifies key clinical concepts, and suggests valid SNOMED CT codes for reviewer approval.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Standardised UK primary care SNOMED CT terminology
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Context-aware clinical concept matching
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: 600, color: "#0A1838" }}>
                  <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Full reviewer control to accept, amend, or reject codes
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Link href="/contact" style={{ background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(2,172,234,0.3)" }}>
                  Book Coding Demo
                </Link>
                <Link href="/solutions" style={{ border: "2px solid #E0E8F5", color: "#0A1838", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", background: "#F4F7FC" }}>
                  Back to Overview
                </Link>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid #E0E8F5", boxShadow: "0 20px 50px rgba(10,24,56,0.12)" }}>
                <img src="/clinical-review-3.png" alt="SNOMED CT Coding Interface" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ position: "absolute", top: "24px", right: "-12px", background: "#FFFFFF", padding: "14px 20px", borderRadius: "16px", boxShadow: "0 12px 35px rgba(0,0,0,0.12)", border: "1px solid #E0E8F5" }}>
                <div style={{ fontSize: "12px", fontWeight: 800, color: "#02ACEA" }}>SNOMED CT Verified</div>
                <div style={{ fontSize: "11px", color: "#64748B" }}>Code: 73211009 (Diabetes mellitus)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>Coding Capabilities</span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>Primary Care Standard Clinical Coding</h2>
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
      <section style={{ padding: "60px 0", background: "#0F1E36", color: "#FFFFFF" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#02ACEA", textTransform: "uppercase", letterSpacing: "1.5px" }}>Next Solution Module</span>
          <h3 style={{ fontSize: "24px", fontWeight: 800, marginTop: "8px", marginBottom: "20px", color: "#FFFFFF" }}>Explore EMIS Web Integration</h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", maxWidth: "560px", margin: "0 auto 28px" }}>
            See how verified SNOMED CT codes are written back directly into patient records with full audit trail logging.
          </p>
          <Link href="/solutions/emis-integration" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "10px" }}>
            View EMIS Web Integration <span>→</span>
          </Link>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
