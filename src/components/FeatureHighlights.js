"use client";
import Link from "next/link";

export default function FeatureHighlights() {
  return (
    <section style={{ padding: "110px 0", background: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <div className="site-container">
        <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>

          {/* Block 1: Image Left, Text Right */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "60px",
            alignItems: "center"
          }}>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "28px", overflow: "hidden", boxShadow: "0 20px 50px rgba(138,96,229,0.15)", border: "1px solid #e2e8f5" }}>
                <img
                  src="/gp-doctor-consultation.png"
                  alt="Structured Clinical Consultation Notes"
                  style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
                />
              </div>
              {/* Floating accent badge */}
              <div style={{
                position: "absolute",
                top: "24px",
                right: "12px",
                background: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: "16px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                border: "1px solid #e2e8f5",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 5
              }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "rgba(138,96,229,0.15)", color: "#02ACEA", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
                  ✓
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#24144B" }}>EMIS Web Active</div>
                  <div style={{ fontSize: "11px", color: "#8896AB" }}>Structured Write-Back</div>
                </div>
              </div>
            </div>

            <div>
              <span style={{ display: "inline-block", background: "rgba(138,96,229,0.15)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", border: "1px solid rgba(138,96,229,0.3)" }}>
                Automated Medical Coding
              </span>
              <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, color: "#24144B", lineHeight: 1.18, marginBottom: "20px" }}>
                Automate Your Clinical Document Processing
              </h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "28px" }}>
                Stop wasting hours manually reading hospital letters and typing codes into EMIS Web. Ovotech's Medical Coding tool automatically reads incoming correspondence, extracts key clinical information, and suggests the right SNOMED CT codes. Your staff simply review, approve, and save directly into the patient's record.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(138,96,229,0.35)", transition: "all 0.3s" }}>
                  Explore Medical Coding Tool <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Block 2: Text Left, Image Right */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "60px",
            alignItems: "center"
          }}>
            <div style={{ order: 1 }}>
              <span style={{ display: "inline-block", background: "rgba(22,163,74,0.1)", color: "#16a34a", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px" }}>
                Practice Efficiency &amp; Support
              </span>
              <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, color: "#24144B", lineHeight: 1.18, marginBottom: "20px" }}>
                Clear Your Document Backlogs Instantly
              </h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "28px" }}>
                GP practices face overwhelming volumes of incoming clinical letters every day. Our GP automation platform does the heavy lifting by instantly processing documents and preparing them for quick review. By reducing manual data entry, your team can clear backlogs, save hours of administrative time, and stay CQC compliant.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #02ACEA", color: "#02ACEA", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }}>
                  See How Much Time You Can Save <span>→</span>
                </Link>
              </div>
            </div>

            <div style={{ order: 2, position: "relative" }}>
              <div style={{ borderRadius: "28px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.08)", border: "1px solid #e2e8f5" }}>
                <img
                  src="/gp-team-support.png"
                  alt="Dedicated Practice Workflow Team Support"
                  style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
                />
              </div>
              {/* Floating accent badge */}
              <div style={{
                position: "absolute",
                bottom: "24px",
                left: "12px",
                background: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: "16px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                border: "1px solid #e2e8f5",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 5
              }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "rgba(22,163,74,0.1)", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
                  ★
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#24144B" }}>CQC Ready</div>
                  <div style={{ fontSize: "11px", color: "#8896AB" }}>Full Audit Compliance</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
