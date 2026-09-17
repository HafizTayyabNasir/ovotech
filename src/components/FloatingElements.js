"use client";
import { useState } from "react";

export default function FloatingElements() {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/448001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-float"
        style={{
          position: "fixed", bottom: "24px", right: "24px", zIndex: 50,
          width: "56px", height: "56px", background: "#25D366", color: "#fff",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 25px rgba(37,211,102,0.4)", transition: "all 0.3s"
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        aria-label="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.184 1.597 6.002L.031 24l6.108-1.6c1.78.966 3.784 1.481 5.892 1.481 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm3.876 17.202c-.156.44-1.57 1.053-2.197 1.109-.59.052-1.353.111-3.69-1.026-3.21-1.56-5.267-5.384-5.424-5.6-.156-.215-1.29-1.745-1.29-3.327 0-1.581.821-2.36 1.119-2.673.297-.313.647-.391.866-.391.218 0 .438.006.626.015.203.01.472-.08.736.56.28.683.957 2.378 1.042 2.551.085.174.141.376.046.586-.094.21-.141.341-.282.505-.14.164-.298.344-.423.475-.14.144-.287.299-.126.583.16.285.714 1.196 1.528 1.936 1.048.955 1.933 1.253 2.215 1.393.282.14.448.118.618-.078.169-.196.732-.851.93-1.144.197-.293.395-.244.646-.151.251.094 1.583.748 1.854.882.271.135.452.202.518.315.066.113.066.653-.09 1.093z" />
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
                style={{ background: "#362D7E", color: "#fff", fontSize: "13px", fontWeight: 600, padding: "8px 24px", borderRadius: "8px", border: "none", cursor: "pointer", transition: "background: 0.2s" }}
              >
                Accept
              </button>
              <button
                onClick={() => setCookieAccepted(true)}
                style={{ background: "#fff", border: "1px solid #E8E8EF", color: "#1A1A1A", fontSize: "13px", fontWeight: 500, padding: "8px 24px", borderRadius: "8px", cursor: "pointer", transition: "background: 0.2s" }}
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
