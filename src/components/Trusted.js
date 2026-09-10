"use client";
import Link from "next/link";

const stats = [
  { icon: "⏱️", value: "75%", label: "Time Saved on Admin Tasks" },
  { icon: "📉", value: "60%", label: "Workload Reduced" },
  { icon: "💰", value: "45%", label: "Faster Payment Cycles" },
];

const cases = [
  { location: "GP Practice – London", text: "Reduced prescription processing time by 75% using Ovotech." },
  { location: "GP Practice – Manchester", text: "Automated incoming referrals and cut manual workload significantly." },
  { location: "GP Practice – Birmingham", text: "Automated invoicing and improved payment cycle times." },
];

export default function Trusted() {
  return (
    <section style={{ padding: "100px 0", background: "#F4F7FC" }}>
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#00A8E8", marginBottom: "12px", textTransform: "uppercase" }}>Trusted by NHS &amp; Private Teams</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.2 }}>
            Real Results. Real Impact.
          </h2>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "64px" }}>
          {stats.map((s, i) => (
            <div key={i} className={`animate-fadeInUp delay-${(i + 1) * 100}`} style={{ background: "#fff", borderRadius: "20px", padding: "32px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,168,232,0.05)", border: "1px solid #E0E8F5", transition: "transform 0.3s", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(0,168,232,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", margin: "0 auto 16px" }}>
                {s.icon}
              </div>
              <div style={{ fontSize: "40px", fontWeight: 800, color: "#00A8E8", marginBottom: "8px" }}>{s.value}</div>
              <div style={{ fontSize: "14px", color: "#64748B", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Logos */}
        <div className="animate-fadeInUp delay-400" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "40px", marginBottom: "64px" }}>
          <span style={{ color: "#005eb8", fontSize: "32px", fontWeight: 800, letterSpacing: "1.5px" }}>NHS</span>
          <span style={{ fontSize: "28px", fontWeight: 800, color: "#94A3B8", letterSpacing: "1px" }}>tpp</span>
          <span style={{ fontSize: "28px", fontWeight: 800, color: "#94A3B8", letterSpacing: "1px" }}>emis</span>
          <span style={{ fontSize: "28px", fontWeight: 800, color: "#94A3B8", letterSpacing: "1px" }}>systmone</span>
        </div>

        {/* Case Study Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {cases.map((c, i) => (
            <div key={i} className={`animate-fadeInUp delay-${(i + 5) * 100}`} style={{ background: "#fff", borderRadius: "20px", padding: "28px", border: "1px solid #E0E8F5", transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#0A1838", marginBottom: "8px" }}>{c.location}</h4>
              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6 }}>{c.text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #00A8E8", color: "#00A8E8", fontWeight: 600, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }}>
            View More Case Studies <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
