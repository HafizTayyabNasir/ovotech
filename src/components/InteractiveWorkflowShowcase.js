"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workflowSteps = [
  {
    number: "01",
    category: "DOCUMENT INTAKE",
    title: "Clinical Document Ingestion",
    description: "Incoming hospital correspondence (clinic letters, discharge summaries) enters the Ovotech workflow from EHR feeds or scanned documents.",
    tag: "DOCUMENT RECEIVED — PDF / HL7 / FHIR",
    image: "/step1-intake.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="12" y1="18" x2="12" y2="12"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
      </svg>
    )
  },
  {
    number: "02",
    category: "INFORMATION EXTRACTION",
    title: "Clinical Entity & Fact Extraction",
    description: "The platform reads and parses incoming correspondence to extract diagnoses, medications, procedures, and patient NHS details side-by-side.",
    tag: "ENTITIES MATCHED — DIAGNOSES & DRUGS",
    image: "/step2-extraction.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    )
  },
  {
    number: "03",
    category: "SNOMED CT CODING",
    title: "Automated Code Suggestions",
    description: "Extracted clinical concepts are mapped to official UK SNOMED CT codes and terms for rapid verification by authorised practice reviewers.",
    tag: "SNOMED CT: 19829001 — VERIFIED",
    image: "/step3-snomed.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    )
  },
  {
    number: "04",
    category: "PATIENT CONTEXT",
    title: "Patient Record Contextualisation",
    description: "Presents historical medical records, active problems, and medication timeline alongside the document to confirm clinical appropriateness.",
    tag: "EMIS CONTEXT: ACTIVE PROBLEM LIST",
    image: "/step4-patient-history.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    )
  },
  {
    number: "05",
    category: "SYSTEM WRITE-BACK",
    title: "Human Approval & EMIS Integration",
    description: "Authorised reviewer verifies and approves details with one click, writing structured clinical data directly into the patient's EMIS Web record.",
    tag: "STATUS 200 — COMMITTED TO EMIS WEB",
    image: "/step5-emis-writeback.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  }
];

export default function InteractiveWorkflowShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScrollableHeight = el.clientHeight - window.innerHeight;
      if (totalScrollableHeight <= 0) return;

      // How far top of container has passed top of viewport
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight));

      const stepIndex = Math.min(
        workflowSteps.length - 1,
        Math.floor(progress * workflowSteps.length)
      );

      setActiveIndex(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStep = workflowSteps[activeIndex];

  return (
    <div
      ref={containerRef}
      style={{
        height: "300vh",
        position: "relative",
        background: "#060D1F"
      }}
    >
      <section
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          background: "radial-gradient(ellipse at top, #0E1A3D 0%, #060D1F 100%)",
          color: "#FFFFFF",
          overflow: "hidden",
          width: "100%"
        }}
      >
        {/* Background grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
            opacity: 0.6
          }}
        />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ display: "inline-block", background: "rgba(54, 45, 126, 0.35)", color: "#A594FF", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", padding: "6px 18px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(165,148,255,0.25)" }}>
              OVOTECH WORKFLOW : HOW IT WORKS
            </span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
              From incoming document to verified EMIS record in seconds.
            </h2>
          </div>

          {/* Main 2-Column Showcase */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "center"
            }}
          >
            {/* Left Column: Interactive UI Workspace Preview */}
            <div style={{ display: "flex", gap: "20px", alignItems: "stretch" }}>
              {/* Vertical Step Tracker Bar */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "36px", flexShrink: 0, padding: "10px 0" }}>
                {workflowSteps.map((step, i) => (
                  <button
                    key={step.number}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      background: "none",
                      border: "none",
                      color: i === activeIndex ? "#A594FF" : "rgba(255,255,255,0.3)",
                      fontSize: "13px",
                      fontWeight: i === activeIndex ? 800 : 600,
                      cursor: "pointer",
                      transition: "all 0.3s",
                      transform: i === activeIndex ? "scale(1.25)" : "scale(1)"
                    }}
                  >
                    {step.number}
                  </button>
                ))}
              </div>

              {/* Main Interactive Screen Card */}
              <div style={{ flex: 1, background: "rgba(255, 255, 255, 0.04)", backdropFilter: "blur(12px)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.12)", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
                {/* Screen Top Status Bar */}
                <div style={{ background: "rgba(255,255,255,0.06)", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.08)", fontSize: "12px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#16a34a" }} />
                    <span>STEP {activeStep.number} OF 05</span>
                  </div>
                  <span style={{ color: "#A594FF", letterSpacing: "1px" }}>{activeStep.category}</span>
                </div>

                {/* Screen Image with Framer Motion AnimatePresence */}
                <div style={{ position: "relative", minHeight: "330px", background: "#050B18" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep.number}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.35 }}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <img
                        src={activeStep.image}
                        alt={activeStep.title}
                        style={{ width: "100%", height: "330px", objectFit: "cover", display: "block" }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Screen Bottom Tag Bar */}
                <div style={{ background: "rgba(9, 18, 42, 0.95)", padding: "14px 20px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "12px", fontFamily: "monospace", color: "#A594FF", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#16a34a" }}>▶</span> {activeStep.tag}
                </div>
              </div>
            </div>

            {/* Right Column: 5 Numbered Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {workflowSteps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      background: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.04)",
                      color: isActive ? "#060D1F" : "#FFFFFF",
                      borderRadius: "16px",
                      padding: "18px 22px",
                      border: isActive ? "2px solid #A594FF" : "1px solid rgba(255, 255, 255, 0.08)",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: isActive ? "0 16px 36px rgba(0, 0, 0, 0.4)" : "none",
                      transform: isActive ? "translateX(6px)" : "none",
                      opacity: isActive ? 1 : 0.7
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "10px",
                            background: isActive ? "#060D1F" : "rgba(255,255,255,0.1)",
                            color: isActive ? "#FFFFFF" : "#A594FF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          {step.icon}
                        </div>
                        <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.2px", color: isActive ? "#362D7E" : "#A594FF" }}>
                          {step.category}
                        </span>
                      </div>

                      <span style={{ fontSize: "18px", fontWeight: 800, color: isActive ? "#362D7E" : "rgba(255,255,255,0.3)" }}>
                        {step.number}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "16px", fontWeight: 800, color: isActive ? "#060D1F" : "#FFFFFF", marginBottom: "4px" }}>
                      {step.title}
                    </h3>

                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        style={{ fontSize: "13px", color: "#555555", lineHeight: 1.5, marginTop: "6px" }}
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
