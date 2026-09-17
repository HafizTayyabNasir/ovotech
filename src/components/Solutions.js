"use client";
import Link from "next/link";

const coreProductAreas = [
  {
    id: "medical-coding",
    href: "/solutions",
    icon: "🏷️",
    title: "Medical Coding",
    desc: "Automated concept extraction with AI-suggested SNOMED CT codes for reviewer approval.",
  }
];

export default function Solutions() {
  return (
    <section style={{ padding: "100px 0", background: "#fff" }} id="solutions">
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", marginBottom: "12px", textTransform: "uppercase" }}>Core Product Areas</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#24144B", lineHeight: 1.2 }}>
            End-to-End Clinical Document Processing<br />&amp; Coding Workflow Platform
          </h2>
          <p style={{ color: "#475569", marginTop: "16px", maxWidth: "640px", marginLeft: "auto", marginRight: "auto", fontSize: "16px", lineHeight: 1.7 }}>
            Designed specifically for UK GP practices to streamline clinical correspondence from intake to EMIS Web write-back.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {coreProductAreas.map((s, i) => (
            <div
              key={i}
              id={s.id}
              className={`animate-fadeInUp delay-${(i + 1) * 100} animated-border-wrapper`}
              style={{
                "--border-radius": "20px",
                transition: "all 0.3s",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                height: "100%",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(138,96,229,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
              }}
            >
              <div
                className="animated-border-inner"
                style={{
                  background: "#f8fafc",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ width: "60px", height: "60px", background: "rgba(138,96,229,0.15)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", fontSize: "28px" }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#24144B", marginBottom: "10px", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, marginBottom: "18px", flex: 1 }}>{s.desc}</p>
                <Link href={s.href} style={{ fontSize: "13px", fontWeight: 700, color: "#02ACEA", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "auto" }}>
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #02ACEA", color: "#02ACEA", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }}>
            Explore Full Platform Overview <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
