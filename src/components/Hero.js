"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const statements = ["Primary Care", "GP Practices", "NHS Providers", "PCN Networks"];

  useEffect(() => {
    const typingSpeed = 100, deletingSpeed = 50, delay = 2000;
    let timer;
    const i = loopNum % statements.length;
    const fullText = statements[i];
    if (isDeleting) {
      timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), deletingSpeed);
    } else {
      timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), typingSpeed);
    }
    if (!isDeleting && text === fullText) timer = setTimeout(() => setIsDeleting(true), delay);
    else if (isDeleting && text === "") { setIsDeleting(false); setLoopNum(loopNum + 1); }
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <>
      <section style={{ position: "relative", minHeight: "720px", paddingTop: "90px", paddingBottom: "100px", overflow: "hidden", display: "flex", alignItems: "center", background: "#FFFFFF" }}>
        {/* Soft Clinical Light Blue Background Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 70% 30%, rgba(2, 172, 234, 0.08) 0%, rgba(240, 249, 255, 0.4) 45%, #FFFFFF 80%)",
            zIndex: 1,
            pointerEvents: "none"
          }}
        />

        {/* Decorative Grid Lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(to right, rgba(2, 172, 234, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 172, 234, 0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            zIndex: 2,
            pointerEvents: "none"
          }}
        />

        {/* Hero Main Content Container */}
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "56px", alignItems: "center" }}>
            
            {/* Left Content Column */}
            <div className="animate-fadeInLeft">
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(2,172,234,0.1)", color: "#02ACEA", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px", padding: "8px 18px", borderRadius: "20px", border: "1px solid rgba(2,172,234,0.25)" }}>
                <span>🛡️</span> CLINICAL WORKFLOW &amp; CODING PLATFORM
              </span>

              <h1 style={{ fontSize: "clamp(34px, 4.2vw, 52px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "24px", color: "#0F172A", letterSpacing: "-0.5px" }}>
                Clinical Correspondence &amp; Coding Platform for
                <br />
                <span style={{ color: "#02ACEA", display: "inline-block" }}>{text}</span>
                <span className="animate-blink" style={{ fontWeight: 300, color: "#02ACEA" }}>|</span>
              </h1>

              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.75, marginBottom: "16px", maxWidth: "560px" }}>
                Ovotech unifies clinical document intake, entity extraction, review queues, patient history context, and EMIS Web write-back into one seamless platform for UK primary care.
              </p>

              <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.7, marginBottom: "36px", maxWidth: "560px" }}>
                Empowering practice teams to clear document backlogs with assisted SNOMED CT coding, while maintaining 100% human reviewer verification.
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#02ACEA",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 700,
                    padding: "16px 36px",
                    borderRadius: "12px",
                    boxShadow: "0 6px 20px rgba(2,172,234,0.35)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#028EC7"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#02ACEA"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  REQUEST A PLATFORM DEMO <span>→</span>
                </Link>
                <Link
                  href="/solutions"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#F0F9FF",
                    color: "#02ACEA",
                    fontSize: "14px",
                    fontWeight: 700,
                    padding: "16px 28px",
                    borderRadius: "12px",
                    border: "1px solid #BAE6FD",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(2,172,234,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#F0F9FF"; }}
                >
                  EXPLORE SOLUTIONS
                </Link>
              </div>
            </div>

            {/* Right Side Prominent Platform Screenshot Container */}
            <div className="animate-fadeInRight delay-200" style={{ position: "relative" }}>
              {/* Clinical Browser Mockup Window */}
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid #E2E8F5",
                  boxShadow: "0 20px 50px rgba(2, 172, 234, 0.15), 0 4px 12px rgba(15, 23, 42, 0.05)",
                  overflow: "hidden"
                }}
              >
                {/* Mockup Top Header Bar */}
                <div style={{ background: "#F8FAFC", padding: "12px 18px", borderBottom: "1px solid #E2E8F5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
                  </div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#02ACEA", background: "#F0F9FF", padding: "3px 12px", borderRadius: "12px", border: "1px solid #BAE6FD" }}>
                    OvoTech Workspace — EMIS Web Active
                  </div>
                  <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 600 }}>v2.4 Live</div>
                </div>

                {/* Main Prominent Interface Screenshot */}
                <div style={{ position: "relative", overflow: "hidden", background: "#F8FAFC" }}>
                  <img
                    src="/clinical-workspace-review.png"
                    alt="OvoTech Clinical Review Workspace"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>

                {/* Bottom Clinical Status Badge */}
                <div style={{ background: "#FFFFFF", padding: "14px 20px", borderTop: "1px solid #E2E8F5", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "#16a34a" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#16a34a" }} />
                    <span>EMIS Web Direct Write-Back Verified</span>
                  </div>
                  <span style={{ color: "#02ACEA", fontWeight: 700 }}>100% Human Approval</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visually Connected Light Blue Workflow Strip */}
      <div style={{ background: "#F0F9FF", color: "#0F172A", padding: "20px 0", borderTop: "1px solid #BAE6FD", borderBottom: "1px solid #BAE6FD", position: "relative", zIndex: 10 }}>
        <div className="site-container">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-0 md:divide-x md:divide-sky-200 text-[12px] sm:text-[13px] font-bold text-center">
            <div className="flex items-center justify-center gap-2 px-2 text-[#0F172A]">
              <span className="w-5 h-5 rounded-full bg-[#02ACEA] text-white flex items-center justify-center text-[10px] font-black">1</span>
              <span>Document Intake</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2 text-[#0F172A]">
              <span className="w-5 h-5 rounded-full bg-[#02ACEA] text-white flex items-center justify-center text-[10px] font-black">2</span>
              <span>Entity Extraction</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2 text-[#0F172A]">
              <span className="w-5 h-5 rounded-full bg-[#02ACEA] text-white flex items-center justify-center text-[10px] font-black">3</span>
              <span>Review Queue</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2 text-[#0F172A]">
              <span className="w-5 h-5 rounded-full bg-[#02ACEA] text-white flex items-center justify-center text-[10px] font-black">4</span>
              <span>Clinical Review</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2 text-[#0F172A]">
              <span className="w-5 h-5 rounded-full bg-[#02ACEA] text-white flex items-center justify-center text-[10px] font-black">5</span>
              <span>Human Approval</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2 text-[#0F172A]">
              <span className="w-5 h-5 rounded-full bg-[#02ACEA] text-white flex items-center justify-center text-[10px] font-black">6</span>
              <span>EMIS Write-Back</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
