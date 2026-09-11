"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workflowSteps = [
  {
    number: "01",
    category: "DOCUMENT INTAKE",
    title: "Clinical Correspondence Ingestion",
    description: "Incoming hospital correspondence (clinic letters, discharge summaries) enters the Ovotech workflow from EHR feeds or document repositories.",
    tag: "DOCUMENT RECEIVED — PDF / HL7 / FHIR",
    image: "/step1-intake.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    title: "Clinical Entity & Fact Parsing",
    description: "The platform reads and parses incoming correspondence to extract diagnoses, medications, procedures, and patient NHS identification.",
    tag: "ENTITIES MATCHED — DIAGNOSES & DRUGS",
    image: "/step2-extraction.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    )
  },
  {
    number: "03",
    category: "REVIEW QUEUE",
    title: "Workload Review Queue Management",
    description: "Organises incoming clinical correspondence into a structured queue with clear processing status, urgency indicators, and patient matching.",
    tag: "QUEUE ITEM: PENDING REVIEW",
    image: "/clinical-workspace-review.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <line x1="7" y1="8" x2="17" y2="8"/>
        <line x1="7" y1="12" x2="17" y2="12"/>
        <line x1="7" y1="16" x2="13" y2="16"/>
      </svg>
    )
  },
  {
    number: "04",
    category: "CLINICAL REVIEW",
    title: "Clinical Review & Patient History",
    description: "Single workspace presenting original letter, extracted facts, proposed SNOMED CT codes, and contextual Patient History side-by-side.",
    tag: "PATIENT HISTORY CONTEXT DISPLAYED",
    image: "/step4-patient-history.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    )
  },
  {
    number: "05",
    category: "HUMAN APPROVAL",
    title: "Authorised Reviewer Sign-Off",
    description: "Assisted workflow where authorized practice staff verify, adjust, and explicitly approve extracted data before any system commit.",
    tag: "REVIEWER SIGN-OFF PENDING",
    image: "/step3-snomed.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    )
  },
  {
    number: "06",
    category: "EMIS WRITE-BACK",
    title: "Structured EMIS Record Write-Back",
    description: "Upon reviewer sign-off, approved clinical information and SNOMED CT codes write back directly into the EMIS Web patient record.",
    tag: "STATUS 200 — COMMITTED TO EMIS WEB",
    image: "/step5-emis-writeback.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  }
];

export default function InteractiveWorkflowShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance steps every 4.5 seconds unless paused by user interaction
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workflowSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleStepClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + workflowSteps.length) % workflowSteps.length);
    setIsPaused(true);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % workflowSteps.length);
    setIsPaused(true);
  };

  const activeStep = workflowSteps[activeIndex];

  return (
    <section
      style={{
        background: "#091222",
        color: "#FFFFFF",
        padding: "90px 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(2, 172, 234, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          opacity: 0.5
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <span style={{ display: "inline-block", background: "rgba(2, 172, 234, 0.15)", color: "#02ACEA", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", padding: "6px 18px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(2, 172, 234, 0.3)" }}>
            OVOTECH WORKFLOW : HOW IT WORKS
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.5px", lineHeight: 1.15, maxWidth: "800px", margin: "0 auto 12px" }}>
            From incoming document to verified EMIS record in seconds.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", maxWidth: "620px", margin: "0 auto" }}>
            Click or watch the 6-step clinical document workflow preview in action below.
          </p>
        </div>

        {/* 6 Step Selector Pill Bar (Mobile & Desktop) */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "32px"
          }}
        >
          {workflowSteps.map((step, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={step.number}
                onClick={() => handleStepClick(i)}
                style={{
                  background: isActive ? "#02ACEA" : "rgba(255,255,255,0.06)",
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                  border: isActive ? "1px solid #02ACEA" : "1px solid rgba(255,255,255,0.1)",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span style={{ color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.4)", fontWeight: 800 }}>{step.number}</span>
                <span>{step.category}</span>
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "36px",
            alignItems: "center"
          }}
        >
          {/* Left Column: UI Workspace Screen Card */}
          <div style={{ background: "rgba(255, 255, 255, 0.04)", backdropFilter: "blur(12px)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.12)", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
            {/* Status Bar */}
            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.08)", fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#16a34a" }} />
                <span>STEP {activeStep.number} OF 06</span>
              </div>
              <span style={{ color: "#02ACEA", letterSpacing: "1px", textTransform: "uppercase" }}>{activeStep.category}</span>
            </div>

            {/* Screen Image with Framer Motion Transition */}
            <div style={{ position: "relative", height: "340px", background: "#050B18" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.number}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src={activeStep.image}
                    alt={activeStep.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls Bar */}
            <div style={{ background: "rgba(15, 30, 54, 0.95)", padding: "12px 20px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#02ACEA", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#16a34a" }}>▶</span> {activeStep.tag}
              </div>

              {/* Prev / Next Navigation Arrows */}
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous step"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    color: "#FFF",
                    borderRadius: "8px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "16px",
                    transition: "background 0.2s"
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next step"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    color: "#FFF",
                    borderRadius: "8px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "16px",
                    transition: "background 0.2s"
                  }}
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Interactive Cards with Progress Line */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {workflowSteps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={step.number}
                  onClick={() => handleStepClick(index)}
                  style={{
                    background: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.04)",
                    color: isActive ? "#091222" : "#FFFFFF",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    border: isActive ? "2px solid #02ACEA" : "1px solid rgba(255, 255, 255, 0.08)",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: isActive ? "0 16px 36px rgba(0, 0, 0, 0.4)" : "none",
                    transform: isActive ? "translateX(6px)" : "none",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Progress Line for Active Card */}
                  {isActive && !isPaused && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4.5, ease: "linear" }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "3px",
                        background: "#02ACEA"
                      }}
                    />
                  )}

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "8px",
                          background: isActive ? "#091222" : "rgba(255,255,255,0.1)",
                          color: isActive ? "#FFFFFF" : "#02ACEA",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        {step.icon}
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: isActive ? "#02ACEA" : "#02ACEA" }}>
                        {step.category}
                      </span>
                    </div>

                    <span style={{ fontSize: "16px", fontWeight: 800, color: isActive ? "#02ACEA" : "rgba(255,255,255,0.3)" }}>
                      {step.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "15px", fontWeight: 800, color: isActive ? "#091222" : "#FFFFFF", marginBottom: "2px" }}>
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
  );
}
