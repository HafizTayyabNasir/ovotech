"use client";
import Link from "next/link";

const solutions = [
  { icon: "💊", title: "Prescription Automation", desc: "Automate repeat prescriptions, reduce manual effort and notifications." },
  { icon: "🔄", title: "Referral Automation", desc: "Automate incoming referrals, triage, and smart routing communications." },
  { icon: "📅", title: "Appointment Automation", desc: "Automate scheduling, reminders, and patient communication." },
  { icon: "📄", title: "Invoice Automation", desc: "Automate invoice generation, validation, and processing." },
];

export default function Solutions() {
  return (
    <section style={{ padding: "100px 0", background: "#fff" }} id="solutions">
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#362D7E", marginBottom: "12px", textTransform: "uppercase" }}>Our Solutions</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2 }}>
            Automation for Every<br />Administrative Workflow
          </h2>
          <p style={{ color: "#555", marginTop: "16px", maxWidth: "540px", marginLeft: "auto", marginRight: "auto", fontSize: "16px", lineHeight: 1.7 }}>
            Streamline your practice with intelligent automation solutions designed for healthcare teams.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
          {solutions.map((s, i) => (
            <div key={i} className={`animate-fadeInUp delay-${(i + 1) * 100}`} style={{ background: "#F7F7FA", borderRadius: "20px", padding: "36px 28px", transition: "all 0.3s", cursor: "pointer", border: "1px solid transparent" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(54,45,126,0.1)"; e.currentTarget.style.borderColor = "rgba(54,45,126,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "transparent"; }}
            >
              <div style={{ width: "60px", height: "60px", background: "rgba(54,45,126,0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", fontSize: "28px" }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px", lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6, marginBottom: "18px" }}>{s.desc}</p>
              <Link href="/solutions" style={{ fontSize: "13px", fontWeight: 600, color: "#362D7E", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Explore More <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "2px solid #362D7E", color: "#362D7E", fontWeight: 600, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", transition: "all 0.3s" }}>
            View All Solutions <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
