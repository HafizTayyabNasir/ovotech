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
      <section style={{ position: "relative", minHeight: "700px", paddingTop: "80px", paddingBottom: "80px", overflow: "hidden", display: "flex", alignItems: "center", background: "#09132B" }}>
        {/* Background Video Autoplay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            opacity: 1
          }}
        >
          <source src="/HomeBanner.mp4" type="video/mp4" />
        </video>

        {/* SVG Layered Organic Wave Curve Overlay (Lighter & Semi-Transparent Blue Gradient) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          style={{ zIndex: 3 }}
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ovotechMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B2545" stopOpacity="0.82" />
              <stop offset="55%" stopColor="#134074" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#02ACEA" stopOpacity="0.55" />
            </linearGradient>

            <linearGradient id="ovotechWaveArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#02ACEA" stopOpacity="0.45" />
              <stop offset="70%" stopColor="rgba(2, 172, 234, 0.2)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgba(11, 37, 69, 0)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Translucent Wave Arc Layer */}
          <path
            d="M 0,0 L 840,0 C 530,250 530,550 840,800 L 0,800 Z"
            fill="url(#ovotechWaveArcGradient)"
          />

          {/* Main Solid Organic Curve Layer (Wide Top & Bottom, Narrow Center) */}
          <path
            d="M 0,0 L 760,0 C 470,250 470,550 760,800 L 0,800 Z"
            fill="url(#ovotechMainGradient)"
          />
        </svg>

        {/* Mobile Full Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(11, 37, 69, 0.90) 0%, rgba(19, 64, 116, 0.82) 100%)",
            zIndex: 3
          }}
          className="md:hidden"
        />

        {/* Hero Main Content Container with slight left margin */}
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1480px", marginLeft: "auto", marginRight: "auto", paddingLeft: "clamp(12px, 2vw, 24px)", paddingRight: "clamp(20px, 3vw, 40px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
            {/* Left Content Column */}
            <div className="animate-fadeInLeft" style={{ flex: "1 1 540px", minWidth: "300px", maxWidth: "640px" }}>
              <span style={{ display: "inline-block", background: "rgba(2,172,234,0.15)", color: "#02ACEA", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", padding: "6px 16px", borderRadius: "20px", border: "1px solid rgba(2,172,234,0.3)" }}>
                CLINICAL DOCUMENT PROCESSING &amp; WORKFLOW PLATFORM
              </span>

              <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px", color: "#FFFFFF" }}>
                Clinical Correspondence &amp; Coding Platform for
                <br />
                <span style={{ color: "#02ACEA", display: "inline-block" }}>{text}</span>
                <span className="animate-blink" style={{ fontWeight: 300, color: "#02ACEA" }}>|</span>
              </h1>

              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "16px", maxWidth: "580px" }}>
                Ovotech brings clinical document intake, entity extraction, review queues, clinical review, patient history context, and EMIS Web write-back into one unified platform for UK GP practices.
              </p>

              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "580px" }}>
                Designed specifically around UK primary care correspondence, our assisted SNOMED CT coding workspace empowers practice teams to clear backlogs while keeping human approval central to every record write-back.
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
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    padding: "16px 36px",
                    borderRadius: "30px",
                    boxShadow: "0 6px 20px rgba(2,172,234,0.4)",
                    transition: "all 0.3s ease"
                  }}
                >
                  REQUEST A PLATFORM DEMO <span>→</span>
                </Link>
                <Link
                  href="/solutions"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255,255,255,0.08)",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 700,
                    padding: "16px 28px",
                    borderRadius: "30px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease"
                  }}
                >
                  EXPLORE SOLUTIONS
                </Link>
              </div>
            </div>

            {/* Right Side Glass Feature Badge / Video Accent Column */}
            <div className="animate-fadeInRight delay-200" style={{ flex: "1 1 440px", minWidth: "300px", position: "relative", display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  background: "rgba(9, 19, 43, 0.65)",
                  backdropFilter: "blur(16px)",
                  borderRadius: "24px",
                  padding: "36px",
                  border: "1px solid rgba(2, 172, 234, 0.3)",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
                  maxWidth: "460px",
                  width: "100%",
                  color: "#FFFFFF"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(2,172,234,0.2)", color: "#02ACEA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>
                    🛡️
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
                      EMIS Web Write-Back
                    </h3>
                    <span style={{ fontSize: "12px", color: "#02ACEA", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                      Human Verified Workflow
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "20px" }}>
                  Automated clinical concept extraction with 100% human-in-the-loop verification before structured record commit.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Sub-2 minute letter turnaround
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> Standardised SNOMED CT coding
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "#02ACEA", fontWeight: 800 }}>✓</span> DSPT &amp; DTAC NHS Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Cyan Workflow Strip below Hero */}
      <div style={{ background: "#02ACEA", color: "#FFFFFF", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.2)", position: "relative", zIndex: 10 }}>
        <div className="site-container">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-0 md:divide-x md:divide-white/30 text-[12px] sm:text-[13px] font-bold text-center">
            <div className="flex items-center justify-center gap-2 px-2">
              <span>1. Document Intake</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>2. Entity Extraction</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>3. Review Queue</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>4. Clinical Review</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>5. Human Approval</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-2">
              <span>6. EMIS Write-Back</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
