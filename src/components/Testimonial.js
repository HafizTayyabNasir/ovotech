"use client";
import Link from "next/link";

export default function Testimonial() {
  return (
    <section style={{ padding: "100px 0", background: "#fff" }}>
      <div className="site-container">
        <div className="animate-fadeInUp" style={{ background: "linear-gradient(135deg, #f8f7ff 0%, #f0eeff 100%)", borderRadius: "24px", padding: "48px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
          {/* Quote */}
          <div style={{ flex: "1 1 400px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#362D7E", marginBottom: "16px", textTransform: "uppercase" }}>What Our Clients Say</span>
            {/* Stars */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "24px" }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote style={{ fontSize: "clamp(20px, 3vw, 24px)", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.6, marginBottom: "32px", position: "relative" }}>
              <span style={{ color: "#362D7E", fontSize: "60px", fontFamily: "serif", position: "absolute", top: "-20px", left: "-16px", opacity: 0.2 }}>&ldquo;</span>
              Ovotech has transformed the way we handle administrative tasks. Our team saves hours every day, and our patients benefit from faster, more accurate service.
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src="/testimonial-man.png" alt="Dr. Sarah Mitchell" style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 0 0 2px rgba(54,45,126,0.2)" }} />
              <div>
                <strong style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A", display: "block" }}>Dr. Sarah Mitchell</strong>
                <span style={{ fontSize: "14px", color: "#888" }}>Practice Manager, MHGP Practice</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ flex: "0 1 280px", margin: "0 auto" }}>
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", padding: "32px", textAlign: "center", border: "1px solid #E8E8EF" }}>
              <div style={{ fontSize: "48px", fontWeight: 800, color: "#362D7E", marginBottom: "8px" }}>81.8%</div>
              <div style={{ fontSize: "14px", color: "#888", fontWeight: 500, marginBottom: "16px" }}>Net Promoter Score</div>
              <Link href="/case-studies" style={{ background: "#362D7E", color: "#fff", fontWeight: 600, fontSize: "14px", padding: "12px 24px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#2a2265"; e.currentTarget.style.boxShadow = "0 8px 16px rgba(54,45,126,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#362D7E"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Read More Stories <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
