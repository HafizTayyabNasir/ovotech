"use client";
import Link from "next/link";

const features = [
  { icon: "👥", title: "Reduce Admin Workload", desc: "Automate repetitive tasks so your team can focus on patient care." },
  { icon: "⏱️", title: "Save Staff Time", desc: "Recover hours each day with intelligent workflow automation." },
  { icon: "✅", title: "Improve Accuracy", desc: "AI-powered systems reduce human errors in data entry and processing." },
  { icon: "💰", title: "Reduce Costs", desc: "Cut operational costs without compromising quality of service." },
];

export default function Benefits() {
  return (
    <section style={{ padding: "100px 0", background: "#fff", overflow: "hidden" }}>
      <div className="site-container">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "60px" }}>
          {/* Left — Image */}
          <div className="animate-fadeInLeft" style={{ flex: "1 1 380px", minWidth: "280px", position: "relative" }}>
            <div style={{ position: "relative", maxWidth: "420px" }}>
              <img src="/benefits-doctor.png" alt="Healthcare professional using Ovotech" style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }} />
              <div style={{ position: "absolute", bottom: "-16px", right: "-16px", background: "#362D7E", color: "#fff", borderRadius: "16px", padding: "16px 24px", boxShadow: "0 10px 30px rgba(54,45,126,0.3)" }}>
                <div style={{ fontSize: "32px", fontWeight: 800 }}>120+</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>Practices Automated</div>
              </div>
              <div style={{ position: "absolute", top: "-16px", left: "-16px", width: "80px", height: "80px", background: "rgba(54,45,126,0.08)", borderRadius: "50%", zIndex: -1 }} />
            </div>
          </div>

          {/* Right — Content */}
          <div className="animate-fadeInRight delay-200" style={{ flex: "1 1 420px", minWidth: "300px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#362D7E", marginBottom: "12px", textTransform: "uppercase" }}>Benefits</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "16px" }}>
              More Time for Care.<br />Less Time on Admin.
            </h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.7, marginBottom: "32px", maxWidth: "460px" }}>
              Ovotech integrates with your existing systems and automates your workflows with accuracy and compliance.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "32px" }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(54,45,126,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#1A1A1A", marginBottom: "4px" }}>{f.title}</h4>
                    <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/how-it-works" style={{ background: "#362D7E", color: "#fff", fontWeight: 600, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              See How it Works <span>→</span>
            </Link>
          </div>
        </div>

        <div className="animate-fadeInUp delay-400" style={{ marginTop: "64px", textAlign: "center", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
          <p style={{ color: "#555", lineHeight: 1.7 }}>
            From prescription processing to referral management, Ovotech&apos;s AI and RPA solutions are built for NHS and private GP practices.
          </p>
          <Link href="/solutions" style={{ color: "#362D7E", fontWeight: 600, fontSize: "14px", marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            Explore our full suite of solutions <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
