import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\InteractiveWorkflowShowcaseThird.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace workflowSteps
# Find where workflowSteps starts and ends
start_marker = "const workflowSteps = ["
end_marker = "];\n\nexport default function InteractiveWorkflowShowcaseThird() {"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

new_steps = """const workflowSteps = [
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
]"""

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_steps + content[end_idx:]

# 2. Update Layout code
# We will replace the left group layout code
layout_start = '<div className="flex gap-4 lg:gap-6 w-full max-w-[400px] justify-center lg:justify-end">'
layout_end = '{/* Mobile Active Step Text (Hidden on Desktop) */}'

layout_start_idx = content.find(layout_start)
layout_end_idx = content.find(layout_end)

new_layout = """<div className="flex gap-4 lg:gap-6 w-full lg:w-[55%] justify-center lg:justify-end">
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
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", background: "#0A1838" }}>
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
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
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

          """

if layout_start_idx != -1 and layout_end_idx != -1:
    content = content[:layout_start_idx] + new_layout + content[layout_end_idx:]

# 3. Update right column max width
content = content.replace('<div className="hidden lg:flex flex-col gap-4 flex-1 w-full max-w-[500px]">', '<div className="hidden lg:flex flex-col gap-3 flex-1 w-full max-w-[45%]">')

# Replace section header text
content = content.replace('From incoming document to verified clinical record system record in seconds.', 'OvoTech | Six-step platform walkthrough')
content = content.replace('Scroll to explore the 6-step clinical document workflow preview.', 'Screenshot sequence: Clinical Overview → Review Queue → Clinical Review → Patient History → Coding Review → Reviewed Documents.')


with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\InteractiveWorkflowShowcaseThird.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replacement done.")