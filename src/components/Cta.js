"use client";
import Link from "next/link";

export default function Cta() {
  return (
    <section style={{ padding: "80px 0", background: "#09132B", position: "relative", overflow: "hidden" }}>
      {/* Decorative shapes */}
      <div style={{ position: "absolute", right: 0, top: 0, width: "400px", height: "400px", borderRadius: "50%", background: "rgba(0,168,232,0.08)", transform: "translate(50%, -50%)" }} />
      <div style={{ position: "absolute", left: "40px", bottom: 0, width: "250px", height: "250px", borderRadius: "50%", background: "rgba(0,168,232,0.05)", transform: "translateY(50%)" }} />
      <div style={{ position: "absolute", right: "80px", bottom: "40px", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid rgba(0,168,232,0.2)" }} />

      <div className="site-container animate-fadeInUp" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "16px" }}>
              Ready to Automate<br />Your Workflows?
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "32px", maxWidth: "460px" }}>
              Book a demo today and see how Ovotech can transform your GP practice. Start saving time and reducing costs.
            </p>
            <Link href="/contact" style={{ background: "#00A8E8", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "16px 32px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 6px 20px rgba(0,168,232,0.35)", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,168,232,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,168,232,0.35)"; }}
            >
              Book a Demo <span>→</span>
            </Link>
          </div>
          <div style={{ flex: "0 1 320px", display: "none", "@media(min-width: 1024px)": { display: "block" } }}>
            <img src="/cta-man.png" alt="Healthcare professional" style={{ width: "100%", height: "auto", borderRadius: "20px", opacity: 0.9 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
