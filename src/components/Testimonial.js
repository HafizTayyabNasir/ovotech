"use client";
import Link from "next/link";

export default function Testimonial() {
  return (
    <section style={{ padding: "110px 0", background: "#FFFFFF" }}>
      <div className="site-container">
        <div className="animate-fadeInUp" style={{ background: "#F0F9FF", borderRadius: "24px", padding: "52px 48px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px", border: "1px solid #BAE6FD", boxShadow: "0 10px 30px rgba(2,172,234,0.08)" }}>
          {/* Content */}
          <div style={{ flex: "1 1 400px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", marginBottom: "16px", textTransform: "uppercase", background: "#FFFFFF", padding: "4px 14px", borderRadius: "20px", border: "1px solid #BAE6FD" }}>Clinical Governance &amp; Control</span>
            
            <h3 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.3, marginBottom: "16px" }}>
              Assisted Extraction with Mandatory Human Approval
            </h3>

            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "24px" }}>
              Ovotech accelerates document parsing and SNOMED CT concept identification, but human oversight remains at the core of our platform design. Every extracted entity, proposed code, and patient action requires verification and sign-off by an authorized practice reviewer before writing back to EMIS Web.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#02ACEA", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
                ✓
              </div>
              <div>
                <strong style={{ fontSize: "15px", fontWeight: 800, color: "#0F172A", display: "block" }}>100% Reviewer Oversight</strong>
                <span style={{ fontSize: "13px", color: "#64748B" }}>Complete audit trail &amp; clinical governance</span>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div style={{ flex: "0 1 280px", margin: "0 auto" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", padding: "32px", textAlign: "center", border: "1px solid #E2E8F5" }}>
              <div style={{ fontSize: "26px", fontWeight: 800, color: "#02ACEA", marginBottom: "8px" }}>Human Approval</div>
              <div style={{ fontSize: "13px", color: "#64748B", fontWeight: 600, marginBottom: "20px" }}>Central to Every Document Commit</div>
              <Link href="/how-it-works" style={{ background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#028EC7"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#02ACEA"; }}
              >
                View Workflow <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
