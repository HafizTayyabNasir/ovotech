"use client";
import Link from "next/link";

const coreProductAreas = [
  {
    id: "review-queue",
    href: "/solutions/review-queue",
    icon: "📋",
    title: "Review Queue",
    desc: "A central workspace showing clinical documents requiring review, processing status, and patient info for systematic workload management.",
  },
  {
    id: "clinical-review",
    href: "/solutions/clinical-review",
    icon: "🖥️",
    title: "Clinical Review Workspace",
    desc: "Presents original documents, extracted clinical info, SNOMED CT suggestions, and patient context in one workspace without screen switching.",
  },
  {
    id: "patient-history",
    href: "/solutions/patient-history",
    icon: "🩺",
    title: "Patient History Context",
    desc: "Provides relevant patient record context alongside documents to verify whether extracted information and coding are appropriate.",
  },
  {
    id: "snomed-coding",
    href: "/solutions/snomed-coding",
    icon: "🏷️",
    title: "SNOMED CT Coding Support",
    desc: "Identifies clinical concepts in documents and proposes appropriate SNOMED CT codes for reviewer verification and approval.",
  },
  {
    id: "emis-integration",
    href: "/solutions/emis-integration",
    icon: "🔗",
    title: "EMIS Web Integration",
    desc: "Supports structured write-back of approved clinical information directly into the patient's record via EMIS Web integration.",
  },
  {
    id: "kpi-tracking",
    href: "/solutions/kpi-tracking",
    icon: "📊",
    title: "Value & KPI Tracking",
    desc: "Demonstrates practice operational impact with estimated time saved, capacity released, and potential cost savings metrics.",
  },
];

export default function Solutions() {
  return (
    <section style={{ padding: "110px 0", background: "#FFFFFF" }} id="solutions">
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", marginBottom: "12px", textTransform: "uppercase", background: "rgba(2,172,234,0.1)", padding: "4px 14px", borderRadius: "20px", border: "1px solid rgba(2,172,234,0.25)" }}>Core Product Areas</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>
            End-to-End Clinical Document Processing<br />&amp; Coding Workflow Platform
          </h2>
          <p style={{ color: "#475569", marginTop: "16px", maxWidth: "640px", marginLeft: "auto", marginRight: "auto", fontSize: "16px", lineHeight: 1.7 }}>
            Designed specifically for UK GP practices to streamline clinical correspondence from intake to EMIS Web write-back.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {coreProductAreas.map((s, i) => (
            <div key={i} id={s.id} className={`animate-fadeInUp delay-${(i + 1) * 100}`} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "36px 28px", transition: "all 0.3s", cursor: "pointer", border: "1px solid #E2E8F5", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(2,172,234,0.12)"; e.currentTarget.style.borderColor = "#02ACEA"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.02)"; e.currentTarget.style.borderColor = "#E2E8F5"; }}
            >
              <div style={{ width: "56px", height: "56px", background: "rgba(2,172,234,0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", fontSize: "26px", border: "1px solid rgba(2,172,234,0.2)" }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A", marginBottom: "10px", lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, marginBottom: "18px" }}>{s.desc}</p>
              <Link href={s.href} style={{ fontSize: "13px", fontWeight: 700, color: "#02ACEA", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "52px" }}>
          <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #02ACEA", color: "#02ACEA", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }} onMouseEnter={e => { e.currentTarget.style.background = "#02ACEA"; e.currentTarget.style.color = "#FFFFFF"; }} onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#02ACEA"; }}>
            Explore Full Platform Overview <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
