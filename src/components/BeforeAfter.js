"use client";
import Link from "next/link";

const withoutItems = [
  "Manual reading and extraction of clinical correspondence",
  "Repeated switching between document view and EMIS Web",
  "Slow, manual search and selection of SNOMED CT codes",
  "Document review backlogs and administrative strain",
];

const withItems = [
  "Structured Review Queue with clear document statuses",
  "Unified workspace bringing document, context & coding together",
  "Suggested SNOMED CT codes for rapid reviewer verification",
  "Direct structured write-back to EMIS Web patient records",
];

export default function BeforeAfter() {
  return (
    <section style={{ padding: "100px 0", background: "#f8fafc" }}>
      <div className="site-container">
        <div className="animate-fadeInUp" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", marginBottom: "12px", textTransform: "uppercase" }}>The Ovotech Impact</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}>
            Before vs After Ovotech Workflow
          </h2>
          <p style={{ color: "#475569", marginTop: "16px", maxWidth: "580px", marginLeft: "auto", marginRight: "auto", fontSize: "16px", lineHeight: 1.7 }}>
            See how GP practice teams streamline clinical document processing, SNOMED coding, and EMIS record entry.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", maxWidth: "900px", margin: "0 auto 40px" }}>
          {/* Without */}
          <div className="animate-fadeInLeft" style={{ background: "#fff", borderRadius: "20px", padding: "32px", border: "1px solid #fee2e2", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#fee2e2", color: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>Without Ovotech</h3>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {withoutItems.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" style={{ flexShrink: 0, marginTop: "2px" }}><path d="M18 6L6 18M6 6l12 12"/></svg>
                  <span style={{ fontSize: "14px", color: "#475569", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="animate-fadeInRight delay-200" style={{ background: "#fff", borderRadius: "20px", padding: "32px", border: "1px solid #dcfce7", boxShadow: "0 0 0 2px rgba(187, 247, 208, 0.5)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#dcfce7", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>With Ovotech</h3>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {withItems.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ flexShrink: 0, marginTop: "2px" }}><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                  <span style={{ fontSize: "14px", color: "#475569", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/contact" style={{ background: "#02ACEA", color: "#fff", fontWeight: 700, fontSize: "14px", padding: "14px 32px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 6px 20px rgba(2,172,234,0.35)", transition: "all 0.3s" }}>
            Start Your Transformation <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
