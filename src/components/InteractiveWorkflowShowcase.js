"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

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
  const containerRef = useRef(null);

  // Scroll spy logic
  // Use scroll position to determine active step
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollDistance = -top;
      const scrollableHeight = height - windowHeight;
      
      if (scrollDistance <= 0) {
        setActiveIndex(0);
        return;
      }
      
      if (scrollDistance >= scrollableHeight) {
        setActiveIndex(workflowSteps.length - 1);
        return;
      }
      
      const progress = scrollDistance / scrollableHeight;
      const newIndex = Math.min(
        workflowSteps.length - 1,
        Math.max(0, Math.floor(progress * workflowSteps.length))
      );
      
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStepClick = (index) => {
    setActiveIndex(index);
    // Note: click doesn't auto-scroll the page in this simple implementation, 
    // it just changes the state visually if they manage to click it while pinned.
    
    // Optional: smooth scroll the window to the corresponding chunk of the 400vh container
    if (containerRef.current) {
      const { top } = containerRef.current.getBoundingClientRect();
      const scrollableHeight = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = window.scrollY + top + (index / workflowSteps.length) * scrollableHeight;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + workflowSteps.length) % workflowSteps.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % workflowSteps.length);
  };

  const activeStep = workflowSteps[activeIndex];

  return (
    <section ref={containerRef} style={{ height: "250vh", position: "relative", background: "#091222" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          background: "#091222",
          color: "#FFFFFF",
          padding: "10vh 0 40px 0",
          overflow: "hidden"
        }}
      >
        <ParticlesBackground color="#02ACEA" />
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
          <div style={{ textAlign: "center", marginBottom: "3vh" }}>
            <span style={{ display: "inline-block", background: "rgba(2, 172, 234, 0.15)", color: "#02ACEA", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", padding: "4px 16px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "8px", border: "1px solid rgba(2, 172, 234, 0.3)" }}>
              OVOTECH WORKFLOW : HOW IT WORKS
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.5px", lineHeight: 1.15, maxWidth: "800px", margin: "0 auto 8px" }}>
              From incoming document to verified EMIS record in seconds.
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", maxWidth: "620px", margin: "0 auto" }}>
              Scroll to explore the 6-step clinical document workflow preview.
            </p>
          </div>

        {/* Main 3-Column Showcase */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch lg:justify-between w-full">
          
          {/* 1. Animated Vertical Timeline Bar (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col justify-between items-center relative py-8" style={{ width: "80px", minHeight: "450px" }}>
            {/* Background Line */}
            <div style={{ position: "absolute", left: "50%", top: "32px", bottom: "32px", width: "2px", background: "rgba(255,255,255,0.1)", transform: "translateX(-50%)", zIndex: 0 }}>
              {/* Glowing Active Progress Line */}
              <motion.div
                initial={false}
                animate={{ height: `${(activeIndex / (workflowSteps.length - 1)) * 100}%` }}
                style={{ width: "100%", background: "#a855f7", boxShadow: "0 0 15px #a855f7", transformOrigin: "top" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>

            {/* Timeline Nodes */}
            {workflowSteps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={index} className="relative z-10 flex flex-col items-center justify-center w-full" style={{ height: `${100 / workflowSteps.length}%` }}>
                  {/* Number */}
                  <span style={{ 
                    position: "absolute", left: "-5px", 
                    color: isActive ? "#a855f7" : "rgba(255,255,255,0.3)", 
                    fontSize: "12px", fontWeight: 700, transition: "0.3s" 
                  }}>
                    {step.number}
                  </span>
                  {/* Node Circle */}
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isActive ? 1.3 : 1,
                      backgroundColor: isActive ? "#1e1b4b" : "#0f172a",
                      borderColor: isActive ? "#a855f7" : "#334155"
                    }}
                    style={{
                      width: "24px", height: "24px", borderRadius: "50%", border: "2px solid",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: isActive ? "0 0 20px 4px rgba(168,85,247,0.4)" : "none",
                      marginLeft: "18px"
                    }}
                  >
                    {isActive && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="7 10 12 5 17 10" />
                        <polyline points="7 14 12 19 17 14" />
                      </svg>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* 2. Left Column: UI Workspace Screen Card */}
          <div className="flex-1 w-full max-w-[600px]" style={{ background: "rgba(255, 255, 255, 0.04)", backdropFilter: "blur(12px)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.12)", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
            {/* Status Bar */}
            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.08)", fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#16a34a" }} />
                <span>STEP {activeStep.number} OF 06</span>
              </div>
              <span style={{ color: "#02ACEA", letterSpacing: "1px", textTransform: "uppercase" }}>{activeStep.category}</span>
            </div>

            {/* Screen Image with Framer Motion Transition */}
            <div style={{ position: "relative", height: "340px", background: "#091222" }}>
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
            <div style={{ background: "rgba(179, 50, 210, 0.95)", padding: "12px 20px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
                    transition: "background: 0.2s"
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
                    transition: "background: 0.2s"
                  }}
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Active Step Text (Hidden on Desktop) */}
          <div className="block lg:hidden text-center w-full px-4 mb-4">
             <h3 style={{ fontSize: "20px", color: "#FFF", fontWeight: 700 }}>{activeStep.title}</h3>
             <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", marginTop: "8px" }}>{activeStep.description}</p>
          </div>

          {/* 3. Right Column: 6 Interactive Cards (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col gap-2 flex-1 w-full max-w-[500px]">
            {workflowSteps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => handleStepClick(index)}
                  style={{
                    background: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.04)",
                    color: isActive ? "#091222" : "#FFFFFF",
                    borderRadius: "16px",
                    padding: "12px 16px",
                    border: isActive ? "2px solid #02ACEA" : "1px solid rgba(255, 255, 255, 0.08)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Removed auto-playing progress line since it's now driven by scroll */}

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
      </div>
    </section>
  );
}
