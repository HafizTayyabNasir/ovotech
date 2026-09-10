"use client";
import Link from "next/link";

export default function FeatureHighlights() {
  return (
    <section style={{ padding: "110px 0", background: "#F4F7FC", position: "relative", overflow: "hidden" }}>
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
              <div style={{ borderRadius: "28px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,168,232,0.12)", border: "1px solid #E0E8F5" }}>
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
                border: "1px solid #E0E8F5",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 5
              }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "rgba(0,168,232,0.1)", color: "#00A8E8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
                  ✓
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#0A1838" }}>EMIS Web Active</div>
                  <div style={{ fontSize: "11px", color: "#8896AB" }}>Structured Write-Back</div>
                </div>
              </div>
            </div>

            <div>
              <span style={{ display: "inline-block", background: "rgba(0,168,232,0.1)", color: "#00A8E8", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px" }}>
                Clinical Intelligence &amp; Record Integrity
              </span>
              <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.18, marginBottom: "20px" }}>
                Structured Consultation Notes Ready for Action
              </h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "28px" }}>
                Ovotech automatically parses incoming secondary care correspondence into structured clinical entities and SNOMED CT concepts. Practice reviewers get immediate side-by-side verification before committing structured entries directly to EMIS Web.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#00A8E8", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(0,168,232,0.3)", transition: "all 0.3s" }}>
                  Explore Clinical Review Workspace <span>→</span>
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
                Expert Primary Care Support
              </span>
              <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.18, marginBottom: "20px" }}>
                Dedicated Clinical Workflow Partnership
              </h2>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "28px" }}>
                Beyond our intelligent document platform, Ovotech provides primary care practices with dedicated workflow specialists and experienced clinical coders. We work alongside your team to clear backlogs, manage staff transitions, and ensure complete CQC inspection readiness.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #00A8E8", color: "#00A8E8", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }}>
                  Talk to Our Practice Support Team <span>→</span>
                </Link>
              </div>
            </div>

            <div style={{ order: 2, position: "relative" }}>
              <div style={{ borderRadius: "28px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.08)", border: "1px solid #E0E8F5" }}>
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
                border: "1px solid #E0E8F5",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 5
              }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "rgba(22,163,74,0.1)", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
                  ★
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#0A1838" }}>CQC Ready</div>
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
