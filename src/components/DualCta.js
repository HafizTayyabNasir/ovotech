"use client";
import Link from "next/link";

const ctas = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 4v-2M16 4v-2"/></svg>,
    title: "Schedule a Practice Demo",
    desc: "See how Ovotech streamlines document intake, SNOMED coding, and EMIS Web write-back.",
    btnText: "Book a Demo",
    href: "/contact",
    primary: true,
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Explore Platform",
    desc: "Browse Ovotech clinical document processing platform capabilities.",
    btnText: "Platform Overview",
    href: "/solutions",
    primary: false,
  },
];

export default function DualCta() {
  return (
    <section style={{ padding: "80px 0", background: "#060D1F" }}>
      <div className="site-container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
          {ctas.map((cta, i) => (
            <div
              key={i}
              className={`animate-fadeInUp delay-${(i + 1) * 200}`}
              style={{
                borderRadius: "20px", padding: "32px", textAlign: "center",
                background: cta.primary ? "#09132B" : "rgba(255, 255, 255, 0.05)",
                color: "#FFFFFF",
                border: cta.primary ? "1px solid rgba(2,172,234,0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s", cursor: "pointer",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(2,172,234,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", background: "rgba(2,172,234,0.15)", color: "#02ACEA" }}>
                {cta.icon}
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px", color: "#FFFFFF" }}>{cta.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, marginBottom: "24px", color: "rgba(255,255,255,0.75)" }}>{cta.desc}</p>
              <Link href={cta.href} style={{
                display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "14px", padding: "12px 28px", borderRadius: "12px", transition: "all 0.3s",
                background: cta.primary ? "#02ACEA" : "rgba(255,255,255,0.12)",
                color: "#fff",
                border: cta.primary ? "none" : "1px solid rgba(2,172,234,0.5)",
                boxShadow: cta.primary ? "0 4px 14px rgba(2,172,234,0.35)" : "none"
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                {cta.btnText} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
