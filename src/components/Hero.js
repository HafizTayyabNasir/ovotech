"use client";
import { useState, useEffect } from "react";

import ParticlesBackground from "./ParticlesBackground";

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
      <section style={{ position: "relative", minHeight: "700px", paddingTop: "80px", paddingBottom: "80px", overflow: "hidden", display: "flex", alignItems: "center", background: "#301A65" }}>
        {/* Interactive Particles Background */}
        <ParticlesBackground color="#8A60E5" />

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

        {/* SVG Layered Organic Wave Curve Overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          style={{ zIndex: 3 }}
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ovotechMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#180D31" stopOpacity="0.98" />
              <stop offset="45%" stopColor="#180D31" stopOpacity="0.94" />
              <stop offset="75%" stopColor="#3E2382" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#134074" stopOpacity="0.75" />
            </linearGradient>

            <linearGradient id="ovotechWaveArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#180D31" stopOpacity="0.80" />
              <stop offset="50%" stopColor="#3E2382" stopOpacity="0.55" />
              <stop offset="100%" stopColor="rgba(138, 96, 229, 0.15)" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Outer Translucent Wave Arc Layer */}
          <path
            d="M 0,0 L 840,0 C 530,250 530,550 840,800 L 0,800 Z"
            d="M 0,0 L 990,0 C 680,250 680,550 990,800 L 0,800 Z"
            fill="url(#ovotechWaveArcGradient)"
          />

          {/* Main Solid Organic Curve Layer */}
          <path
            d="M 0,0 L 760,0 C 470,250 470,550 760,800 L 0,800 Z"
            d="M 0,0 L 910,0 C 620,250 620,550 910,800 L 0,800 Z"
            fill="url(#ovotechMainGradient)"
          />
        </svg>

        {/* Interactive Particles Background inside Blue Section */}
        <div className="absolute inset-0 hidden md:block" style={{ zIndex: 4, maskImage: "linear-gradient(to right, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 62%)", WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 62%)" }}>
          <ParticlesBackground color="#8A60E5" />
        </div>

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

        {/* Hero Main Content Container */}
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1480px", marginLeft: "auto", marginRight: "auto", paddingLeft: "clamp(12px, 2vw, 24px)", paddingRight: "clamp(20px, 3vw, 40px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
            {/* Left Content Column */}
            <div className="animate-fadeInLeft" style={{ flex: "1 1 540px", minWidth: "300px", maxWidth: "760px" }}>
              <span style={{ display: "inline-block", background: "rgba(138,96,229,0.15)", color: "#02ACEA", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", padding: "6px 16px", borderRadius: "20px", border: "1px solid rgba(138,96,229,0.3)" }}>
                CLINICAL DOCUMENT PROCESSING &amp; WORKFLOW PLATFORM
              </span>

              <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px", color: "#FFFFFF" }}>
                Clinical Correspondence &amp; Coding Platform for
                <br />
                <span style={{ color: "#02ACEA", display: "inline-block" }}>{text}</span>
                <span className="animate-blink" style={{ fontWeight: 300, color: "#02ACEA" }}>|</span>
              </h1>

              <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: "16px", maxWidth: "620px" }}>
                Ovotech unifies document intake, assisted SNOMED CT coding, and EMIS Web write-back into one workspace—empowering GP practice teams to clear backlogs with 100% human oversight.
              </p>
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
