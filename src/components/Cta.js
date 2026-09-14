"use client";
import Link from "next/link";

export default function Cta() {
  return (
    <section style={{ padding: "100px 0", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
      <div className="site-container animate-fadeInUp" style={{ position: "relative", zIndex: 10 }}>
        <div style={{
          background: "#F0F9FF",
          borderRadius: "24px",
          padding: "56px 48px",
          border: "1px solid #BAE6FD",
          boxShadow: "0 16px 40px rgba(2, 172, 234, 0.08)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "40px"
        }}>
          <div style={{ flex: "1 1 400px" }}>
            <span style={{ display: "inline-block", background: "#FFFFFF", color: "#02ACEA", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid #BAE6FD" }}>
              GET STARTED TODAY
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: "16px" }}>
              Ready to Automate<br />Your Clinical Workflows?
            </h2>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "32px", maxWidth: "480px" }}>
              Book a live demo today and see how Ovotech can transform document processing and coding for your GP practice.
            </p>
            <Link href="/contact" style={{ background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "16px 32px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 6px 20px rgba(2,172,234,0.35)", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#028EC7"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#02ACEA"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book a Practice Demo <span>→</span>
            </Link>
          </div>
          <div style={{ flex: "0 1 340px", display: "none", "@media(min-width: 1024px)": { display: "block" } }}>
            <img src="/cta-man.png" alt="Healthcare professional using Ovotech" style={{ width: "100%", height: "auto", borderRadius: "20px", border: "1px solid #E2E8F5", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
