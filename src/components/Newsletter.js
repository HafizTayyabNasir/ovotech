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
    <section style={{ padding: "64px 0", background: "#F7F7FA", borderTop: "1px solid #E8E8EF" }}>
      <div className="site-container">
        <div className="animate-fadeInUp" style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>Stay Updated</h3>
          <p style={{ fontSize: "14px", color: "#555", marginBottom: "24px" }}>Get the latest healthcare automation insights delivered to your inbox.</p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: "1 1 240px", padding: "14px 16px", borderRadius: "12px", border: "1px solid #E8E8EF", background: "#fff", fontSize: "14px", outline: "none", transition: "border 0.2s" }}
              required
            />
            <button type="submit" style={{ flexShrink: 0, background: "#362D7E", color: "#fff", fontWeight: 600, fontSize: "14px", padding: "14px 28px", borderRadius: "12px", border: "none", cursor: "pointer", transition: "background 0.3s" }} onMouseEnter={e => e.currentTarget.style.background = "#2a2265"} onMouseLeave={e => e.currentTarget.style.background = "#362D7E"}>
              Subscribe
            </button>
          </form>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", justifyContent: "center", fontSize: "12px", color: "#888", cursor: "pointer" }}>
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: "2px", accentColor: "#362D7E" }} />
            <span>I agree to receive marketing emails. You can unsubscribe at any time.</span>
          </label>
        </div>
      </div>
    </section>
  );
}
