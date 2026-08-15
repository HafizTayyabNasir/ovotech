"use client";
import Link from "next/link";

const steps = [
  { num: 1, icon: "🔌", title: "Connect", desc: "We connect with your existing GP software securely." },
  { num: 2, icon: "⚙️", title: "Configure", desc: "We configure workflows to match your practice." },
  { num: 3, icon: "🤖", title: "Automate", desc: "AI & RPA bots handle repetitive administrative tasks." },
  { num: 4, icon: "📊", title: "Monitor", desc: "Real-time monitoring ensures accuracy." },
  { num: 5, icon: "📈", title: "Improve", desc: "Continuous optimisation reduces errors and improves." },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "100px 0", background: "#F7F7FA" }}>
      <div className="site-container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
          {/* Left */}
          <div className="animate-fadeInLeft" style={{ flex: "0 1 340px", minWidth: "280px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#362D7E", marginBottom: "12px", textTransform: "uppercase" }}>How It Works</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "20px" }}>
              Simple. Smart.<br />Seamless.
            </h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>
              Ovotech integrates with your existing systems and automates your workflows with accuracy and compliance.
            </p>
            <Link href="/how-it-works" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #362D7E", color: "#362D7E", fontWeight: 600, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#362D7E"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#362D7E"; }}
            >
              See How it Works <span>→</span>
            </Link>
          </div>

          {/* Right — Steps */}
          <div style={{ flex: "1 1 500px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {steps.map((s, i) => (
              <div key={i} className={`animate-fadeInUp delay-${(i + 1) * 100}`} style={{ background: "#fff", borderRadius: "20px", padding: "28px", border: "1px solid #E8E8EF", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "36px", height: "36px", background: "#362D7E", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, margin: "0 auto 16px" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{s.icon}</div>
                <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>{s.title}</h4>
                <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
