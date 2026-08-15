"use client";
import { useState } from "react";

export default function FloatingElements() {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  return (
    <>
      {/* Floating Call Button */}
      <a
        href="tel:+448001234567"
        className="animate-float"
        style={{
          position: "fixed", bottom: "24px", right: "24px", zIndex: 50,
          width: "56px", height: "56px", background: "#362D7E", color: "#fff",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 25px rgba(54,45,126,0.4)", transition: "all 0.3s"
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.background = "#2a2265"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "#362D7E"; }}
        aria-label="Call now"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </a>

      {/* Cookie Consent */}
      {!cookieAccepted && (
        <div className="animate-fadeInUp" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, background: "#fff", borderTop: "1px solid #E8E8EF", boxShadow: "0 -10px 40px rgba(0,0,0,0.1)", padding: "16px 0" }}>
          <div className="site-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <p style={{ fontSize: "13px", color: "#555", margin: 0, flex: "1 1 300px" }}>
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
              <button
                onClick={() => setCookieAccepted(true)}
                style={{ background: "#362D7E", color: "#fff", fontSize: "13px", fontWeight: 600, padding: "8px 24px", borderRadius: "8px", border: "none", cursor: "pointer", transition: "background 0.2s" }}
              >
                Accept
              </button>
              <button
                onClick={() => setCookieAccepted(true)}
                style={{ background: "#fff", border: "1px solid #E8E8EF", color: "#1A1A1A", fontSize: "13px", fontWeight: 500, padding: "8px 24px", borderRadius: "8px", cursor: "pointer", transition: "background 0.2s" }}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
