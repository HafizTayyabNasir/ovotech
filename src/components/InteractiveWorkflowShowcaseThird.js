"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const workflowSteps = [
  {
    number: "01",
    category: "CLINICAL OVERVIEW",
    title: "Clinical overview",
    description: "Start with the clinical review summary to see incoming documents, processing status and items awaiting review.",
    tag: "OVERVIEW DASHBOARD",
    image: "/clinical-overview.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    )
  },
  {
    number: "02",
    category: "REVIEW QUEUE",
    title: "Review queue",
    description: "Open the Review Queue to find and prioritise the document that needs attention. Select Review to open its clinical review.",
    tag: "QUEUE ITEM: PENDING REVIEW",
    image: "/review-queue.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/>
        <line x1="3" y1="12" x2="3.01" y2="12"/>
        <line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    )
  },
  {
    number: "03",
    category: "CLINICAL REVIEW",
    title: "Clinical review: understand the case",
    description: "Review the document summary, extracted information and available patient context before deciding on coding.",
    tag: "CLINICAL CONTEXT EXTRACTED",
    image: "/clinical-review-2.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    )
  },
  {
    number: "04",
    category: "PATIENT HISTORY",
    title: "Patient history",
    description: "Open Patient History from the clinical review to see the platform’s available patient timeline, active conditions and medication context. Return to the review when ready.",
    tag: "PATIENT HISTORY CONTEXT DISPLAYED",
    image: "/patient-history.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    number: "05",
    category: "CODING REVIEW",
    title: "Clinical review: assess coding",
    description: "Back in Clinical Review, assess each suggested SNOMED CT code and its confidence and evidence; accept, reject or add a code as appropriate. Complete the authorised review before any record update.",
    tag: "SNOMED CT SUGGESTIONS",
    image: "/clinical-review-3.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  },
  {
    number: "06",
    category: "REVIEWED DOCUMENTS",
    title: "Reviewed documents & status",
    description: "Use Reviewed Documents to check completed reviews, decisions and the displayed clinical record update status.",
    tag: "STATUS 200 — COMMITTED",
    image: "/reviewed-documents.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    )
  }
];

export default function InteractiveWorkflowShowcaseThird() {
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
    <section ref={containerRef} style={{ height: "250vh", position: "relative", background: "#0A1838" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          background: "#0A1838",
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

        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8" style={{ position: "relative", zIndex: 10 }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "3vh" }}>
            <span style={{ display: "inline-block", background: "rgba(0,0,0,0.8)", color: "#FFFFFF", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", padding: "4px 16px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "8px", border: "2px solid #000000" }}>
              OVOTECH WORKFLOW : HOW IT WORKS
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.5px", lineHeight: 1.15, maxWidth: "800px", margin: "0 auto 8px" }}>
              OvoTech | Six-step platform walkthrough
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", maxWidth: "620px", margin: "0 auto" }}>
              Screenshot sequence: Clinical Overview → Review Queue → Clinical Review → Patient History → Coding Review → Reviewed Documents.
            </p>
          </div>

        {/* Main 2-Column Layout with inner timeline */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:items-stretch lg:justify-center w-full">
          
          {/* Left Group: Timeline + Screenshot */}
          <div className="flex gap-4 lg:gap-6 w-full lg:w-[55%] justify-center lg:justify-end">
            {/* 1. Animated Vertical Timeline Bar (Hidden on Mobile) */}
            <div className="hidden lg:flex flex-col justify-between items-center relative py-8 shrink-0" style={{ width: "60px", minHeight: "450px" }}>
              {/* Background Line */}
              <div style={{ position: "absolute", left: "50%", top: "32px", bottom: "32px", width: "2px", background: "rgba(255,255,255,0.1)", transform: "translateX(-50%)", zIndex: 0 }}>
                {/* Glowing Active Progress Line */}
                <motion.div
                  initial={false}
                  animate={{ height: `${(activeIndex / (workflowSteps.length - 1)) * 100}%` }}
                  style={{ width: "100%", background: "#02ACEA", boxShadow: "0 0 15px #02ACEA", transformOrigin: "top" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>

              {/* Timeline Nodes */}
              {workflowSteps.map((step, index) => {
                const isActive = index === activeIndex;
                const isEven = index % 2 === 0;
                const accentColor = isEven ? "#02ACEA" : "#A855F7";
                return (
                  <div key={index} className="relative z-10 flex flex-col items-center justify-center w-full" style={{ height: `${100 / workflowSteps.length}%` }}>
                    {/* Number */}
                    <span style={{ 
                      position: "absolute", left: "-10px", 
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.4)", 
                      fontSize: "13px", fontWeight: 700, transition: "0.3s" 
                    }}>
                      {step.number}
                    </span>
                    {/* Node Circle */}
                    <motion.div
                      initial={false}
                      animate={{
                        scale: isActive ? 1.3 : 1,
                        backgroundColor: isActive ? accentColor : (isEven ? "rgba(2,172,234,0.2)" : "rgba(168,85,247,0.2)"),
                        borderColor: accentColor
                      }}
                      style={{
                        width: "24px", height: "24px", borderRadius: "50%", border: "2px solid",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: isActive ? `0 0 20px 4px ${accentColor}80` : "none"
                      }}
                    >
                      {isActive && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="7 10 12 5 17 10" />
                          <polyline points="7 14 12 19 17 14" />
                        </svg>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* 2. Left Column: UI Workspace Screen Card (Desktop Format) */}
            <div className="flex-1 w-full max-w-[800px] shrink-0 flex flex-col" style={{ background: "rgba(255, 255, 255, 0.04)", backdropFilter: "blur(12px)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
            {/* Desktop Browser Status Bar */}
            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 16px", display: "flex", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", fontSize: "11px", color: "rgba(255,255,255,0.8)", fontWeight: 600, gap: "12px" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#eab308" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e" }} />
              </div>
              <div style={{ flex: 1, background: "rgba(0,0,0,0.2)", padding: "4px 12px", borderRadius: "4px", textAlign: "center", letterSpacing: "1px", color: "#02ACEA" }}>
                {activeStep.category}
              </div>
            </div>

            {/* Screen Image with Framer Motion Transition */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#0A1838" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                >
                  <img
                    src={activeStep.image}
                    alt={activeStep.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls Bar */}
            <div style={{ background: "rgba(2, 172, 234, 0.95)", padding: "12px 20px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
              <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#FFF", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#FFF" }}>▶</span> {activeStep.tag}
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
          </div>

          {/* Mobile Active Step Text (Hidden on Desktop) */}
          <div className="block lg:hidden text-center w-full px-4 mb-4">
             <h3 style={{ fontSize: "20px", color: "#FFF", fontWeight: 700 }}>{activeStep.title}</h3>
             <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", marginTop: "8px" }}>{activeStep.description}</p>
          </div>

          {/* 3. Right Column: 6 Interactive Cards (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col gap-3 flex-1 w-full max-w-[45%]">
            {workflowSteps.map((step, index) => {
              const isActive = index === activeIndex;
              const isEven = index % 2 === 0;
              const accentColor = isEven ? "#02ACEA" : "#A855F7"; // Cyan for even, Purple for odd
              const transformClass = isEven ? "-translate-x-4" : "translate-x-4";

              return (
                <div
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`transform transition-transform duration-500 hover:scale-[1.02] ${transformClass}`}
                  style={{
                    background: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.04)",
                    color: isActive ? "#0A1838" : "#FFFFFF",
                    borderRadius: "16px",
                    padding: "12px 16px",
                    borderTop: isActive ? `2px solid ${accentColor}` : "1px solid rgba(255, 255, 255, 0.08)",
                    borderRight: isActive ? `2px solid ${accentColor}` : "1px solid rgba(255, 255, 255, 0.08)",
                    borderBottom: isActive ? `2px solid ${accentColor}` : "1px solid rgba(255, 255, 255, 0.08)",
                    borderLeft: `8px solid ${accentColor}`,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: isActive ? `0 20px 40px ${isEven ? 'rgba(2,172,234,0.2)' : 'rgba(168,85,247,0.2)'}` : "none",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "8px",
                          background: isActive ? "#0A1838" : "rgba(255,255,255,0.1)",
                          color: isActive ? "#FFFFFF" : accentColor,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        {step.icon}
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: isActive ? "#0A1838" : accentColor }}>
                        {step.category}
                      </span>
                    </div>

                    <span style={{ fontSize: "16px", fontWeight: 800, color: isActive ? "#0A1838" : "rgba(255,255,255,0.3)" }}>
                      {step.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "15px", fontWeight: 800, color: isActive ? "#0A1838" : "#FFFFFF", marginBottom: "2px" }}>
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


