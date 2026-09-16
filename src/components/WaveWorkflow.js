"use client";
import { useState, useEffect, useRef } from "react";

const workflowSteps = [
  "Document Intake",
  "Entity Extraction",
  "Review Queue",
  "Clinical Review",
  "Human Approval",
  "EMIS Write-Back",
];

// Extra floating phrases that pass by in the background
const floatingPhrases = [
  "NHS Clinical Correspondence",
  "SNOMED CT Coding",
  "Patient Record Verified",
  "Discharge Summary Parsed",
  "Medication List Extracted",
  "Diagnoses Identified",
  "EMIS Web Integration",
  "Structured Write-Back",
  "Practice Workflow Optimised",
  "Human Oversight Confirmed",
  "Coding Accuracy Assured",
  "Document Queue Managed",
];

export default function WaveWorkflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const containerRef = useRef(null);

  // Cycle through the 6 steps
  useEffect(() => {
    const interval = setInterval(() => {
      setIsProcessing(true);
      setTimeout(() => {
        setActiveStepIndex((prev) => (prev + 1) % workflowSteps.length);
        setIsProcessing(false);
      }, 800);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        background: "linear-gradient(180deg, #050C1A 0%, #0B1929 50%, #091222 100%)",
        padding: "90px 0 80px",
        position: "relative",
        overflow: "hidden",
        minHeight: "420px",
      }}
    >
      {/* Background grid dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(2, 172, 234, 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Top label */}
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: "14px" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(2, 172, 234, 0.15)",
              color: "#02ACEA",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              padding: "6px 18px",
              borderRadius: "20px",
              textTransform: "uppercase",
              border: "1px solid rgba(2, 172, 234, 0.3)",
            }}
          >
            END-TO-END WORKFLOW
          </span>
        </div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(24px, 4vw, 42px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: "50px",
            letterSpacing: "-0.5px",
          }}
        >
          Clinical Document Processing
          <br />
          <span style={{ color: "#02ACEA" }}>&amp; Coding Workflow Platform</span>
        </h2>
      </div>

      {/* Wave animation area */}
      <div
        style={{
          position: "relative",
          height: "160px",
          overflow: "hidden",
        }}
      >
        {/* Horizontal guide lines (wave paths) */}
        <svg
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 1,
          }}
          preserveAspectRatio="none"
          viewBox="0 0 1440 160"
        >
          {/* Wave path lines */}
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M0,${60 + i * 20} Q360,${40 + i * 20} 720,${60 + i * 20} T1440,${60 + i * 20}`}
              fill="none"
              stroke={`rgba(2, 172, 234, ${0.06 + i * 0.03})`}
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Floating text elements — background phrases */}
        {floatingPhrases.map((phrase, i) => (
          <FloatingText
            key={`float-${i}`}
            text={phrase}
            delay={i * 2.2}
            duration={12 + (i % 4) * 3}
            yOffset={10 + (i % 5) * 28}
            waveHeight={6 + (i % 3) * 4}
          />
        ))}

        {/* Central oval pill */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 20,
          }}
        >
          {/* Glow ring behind pill */}
          <div
            style={{
              position: "absolute",
              inset: "-12px",
              borderRadius: "40px",
              background: "rgba(2, 172, 234, 0.08)",
              animation: "pulse-ring 2.5s ease-in-out infinite",
            }}
          />

          {/* Pill box */}
          <div
            style={{
              background: "rgba(2, 172, 234, 0.12)",
              border: "2px solid rgba(2, 172, 234, 0.6)",
              borderRadius: "32px",
              padding: "14px 36px",
              backdropFilter: "blur(16px)",
              minWidth: "220px",
              textAlign: "center",
              boxShadow:
                "0 0 40px rgba(2, 172, 234, 0.15), inset 0 0 20px rgba(2, 172, 234, 0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Shimmer effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "200%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(2, 172, 234, 0.1), transparent)",
                animation: "shimmerSlide 3s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />

            <span
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "0.5px",
                position: "relative",
                zIndex: 2,
                transition: "all 0.4s ease",
                opacity: isProcessing ? 0.4 : 1,
                transform: isProcessing ? "scale(0.95)" : "scale(1)",
                display: "inline-block",
              }}
            >
              {workflowSteps[activeStepIndex]}
            </span>
          </div>

          {/* Status indicator below pill */}
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: isProcessing ? "#FBBF24" : "#16a34a",
                display: "inline-block",
                animation: isProcessing ? "blink 0.6s step-end infinite" : "none",
              }}
            />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                color: isProcessing
                  ? "rgba(251, 191, 36, 0.9)"
                  : "rgba(22, 163, 74, 0.9)",
                textTransform: "uppercase",
              }}
            >
              {isProcessing ? "PROCESSING" : `STEP ${activeStepIndex + 1} OF 6`}
            </span>
          </div>
        </div>

        {/* Active step text arriving from right with wave */}
        <ActiveStepWave
          text={workflowSteps[activeStepIndex]}
          stepIndex={activeStepIndex}
        />
      </div>

      {/* Bottom step indicators */}
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginTop: "36px",
            flexWrap: "wrap",
          }}
        >
          {workflowSteps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStepIndex(i)}
              style={{
                background:
                  i === activeStepIndex
                    ? "#02ACEA"
                    : "rgba(255,255,255,0.06)",
                color:
                  i === activeStepIndex
                    ? "#FFFFFF"
                    : "rgba(255,255,255,0.5)",
                border:
                  i === activeStepIndex
                    ? "1px solid #02ACEA"
                    : "1px solid rgba(255,255,255,0.1)",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: i === activeStepIndex ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  fontWeight: 800,
                  color:
                    i === activeStepIndex
                      ? "#FFFFFF"
                      : "rgba(255,255,255,0.3)",
                }}
              >
                {i + 1}.
              </span>
              {step}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Floating background text component */
function FloatingText({ text, delay, duration, yOffset, waveHeight }) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${yOffset}px`,
        left: 0,
        whiteSpace: "nowrap",
        fontSize: "clamp(13px, 1.4vw, 16px)",
        fontWeight: 400,
        color: "rgba(255, 255, 255, 0.12)",
        letterSpacing: "0.5px",
        pointerEvents: "none",
        zIndex: 5,
        animation: `waveFloat ${duration}s linear ${delay}s infinite`,
        willChange: "transform",
      }}
    >
      {text}
    </div>
  );
}

/* Active step text that waves in from the right towards center */
function ActiveStepWave({ text, stepIndex }) {
  return (
    <div
      key={`active-${stepIndex}-${text}`}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        whiteSpace: "nowrap",
        fontSize: "clamp(14px, 1.6vw, 18px)",
        fontWeight: 600,
        color: "rgba(2, 172, 234, 0.5)",
        letterSpacing: "1px",
        pointerEvents: "none",
        zIndex: 8,
        animation: `waveFloatActive 3s ease-out forwards`,
        marginTop: "-10px",
        marginLeft: "-60px",
        willChange: "transform, opacity",
      }}
    >
      {text}
    </div>
  );
}
