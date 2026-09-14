"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !consent) return;
    alert("Subscribed!");
  };

  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF", borderTop: "1px solid #E2E8F5" }}>
      <div className="site-container">
        <div className="animate-fadeInUp" style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(2,172,234,0.1)", color: "#02ACEA", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", padding: "4px 14px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(2,172,234,0.25)" }}>
            NEWSLETTER
          </span>
          <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>Stay Updated with OvoTech</h3>
          <p style={{ fontSize: "14px", color: "#475569", marginBottom: "24px" }}>Get the latest NHS primary care document automation insights delivered to your inbox.</p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <input
              type="email"
              placeholder="Enter your professional email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: "1 1 240px", padding: "14px 16px", borderRadius: "12px", border: "1px solid #E2E8F5", background: "#F8FAFC", fontSize: "14px", outline: "none", transition: "all 0.2s" }}
              required
            />
            <button type="submit" style={{ flexShrink: 0, background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", border: "none", cursor: "pointer", transition: "background: 0.3s" }} onMouseEnter={e => e.currentTarget.style.background = "#028EC7"} onMouseLeave={e => e.currentTarget.style.background = "#02ACEA"}>
              Subscribe
            </button>
          </form>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", justifyContent: "center", fontSize: "12px", color: "#64748B", cursor: "pointer" }}>
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: "2px", accentColor: "#02ACEA" }} />
            <span>I agree to receive NHS healthcare automation updates. You can unsubscribe at any time.</span>
          </label>
        </div>
      </div>
    </section>
  );
}
