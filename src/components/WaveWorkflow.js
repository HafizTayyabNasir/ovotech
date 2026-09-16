"use client";
import { useState, useEffect, useRef } from "react";
import { useState, useEffect, useRef, useCallback } from "react";

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
// Full sentences that flow along wave paths — each sentence contains a workflow step keyword
const waveSentences = [
  { text: "Process incoming clinical correspondence through automated Document Intake pipeline", keyword: "Document Intake" },
  { text: "Run Entity Extraction on discharge summaries to identify diagnoses and medications", keyword: "Entity Extraction" },
  { text: "Organise parsed documents into structured Review Queue with urgency indicators", keyword: "Review Queue" },
  { text: "Present extracted facts and SNOMED codes side by side for Clinical Review", keyword: "Clinical Review" },
  { text: "Authorised staff verify and provide Human Approval before system commit", keyword: "Human Approval" },
  { text: "Write approved clinical data directly into patient records via EMIS Write-Back", keyword: "EMIS Write-Back" },
];

export default function WaveWorkflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const containerRef = useRef(null);
  const [statusText, setStatusText] = useState("ANALYZING");
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const linesRef = useRef([]);

  // Cycle through the 6 steps
  useEffect(() => {
    const interval = setInterval(() => {
      setIsProcessing(true);
      setStatusText("PROCESSING");
      setTimeout(() => {
        setActiveStepIndex((prev) => (prev + 1) % workflowSteps.length);
        setIsProcessing(false);
      }, 800);
    }, 3000);
        setStatusText("ANALYZING");
      }, 600);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Canvas-based wave text animation
  const initLines = useCallback((canvas) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Create wave lines with sentences
    const lineConfigs = waveSentences.map((s, i) => ({
      text: s.text,
      keyword: s.keyword,
      speed: 0.35 + (i % 3) * 0.08,
      yBase: 30 + i * 28,
      amplitude: 8 + (i % 3) * 4,
      frequency: 0.0015 + (i % 2) * 0.0005,
      phase: i * 1.2,
      x: canvas.width / dpr + i * 200,
      opacity: 0.15 + (i % 3) * 0.03,
    }));

    linesRef.current = lineConfigs;

    const pillCenterX = () => canvas.width / dpr / 2;
    const pillCenterY = () => canvas.height / dpr / 2;
    const pillWidth = 200;
    const pillHeight = 48;

    let frameId;
    const animate = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const cx = pillCenterX();
      const cy = pillCenterY();

      // Draw wave guide lines
      for (let li = 0; li < 4; li++) {
        ctx.beginPath();
        const baseY = 20 + li * 30;
        const amp = 10 + (li % 2) * 5;
        const freq = 0.003 + li * 0.0005;
        for (let px = 0; px < w; px++) {
          // Converge towards center
          const distFromCenter = Math.abs(px - cx) / (w / 2);
          const convergeFactor = 1 - (1 - distFromCenter) * 0.6;
          const y = cy + (baseY - h / 2) * convergeFactor + Math.sin(px * freq + li * 0.8 + Date.now() * 0.0003) * amp * convergeFactor;
          if (px === 0) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
        }
        ctx.strokeStyle = `rgba(2, 172, 234, ${0.06 + li * 0.02})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw flowing text along wave paths
      linesRef.current.forEach((line) => {
        // Move text left
        line.x -= line.speed;

        // Reset when fully off-screen left
        const textWidth = ctx.measureText(line.text).width || line.text.length * 8;
        if (line.x + textWidth < -100) {
          line.x = w + 100 + Math.random() * 200;
        }

        // Calculate wave Y with convergence near center
        const distFromCenter = Math.abs(line.x + textWidth / 2 - cx) / (w / 2);
        const convergeFactor = Math.max(0.15, distFromCenter);
        const waveY = cy + (line.yBase - h / 2) * convergeFactor + Math.sin((line.x * line.frequency) + line.phase + Date.now() * 0.0004) * line.amplitude * convergeFactor;

        // Draw each character
        ctx.font = `400 14px 'Inter', system-ui, sans-serif`;
        ctx.fillStyle = `rgba(255, 255, 255, ${line.opacity})`;

        let charX = line.x;
        const chars = line.text.split("");
        const keywordStart = line.text.indexOf(line.keyword);
        const keywordEnd = keywordStart + line.keyword.length;

        chars.forEach((char, ci) => {
          const charDistFromCenter = Math.abs(charX - cx) / (w / 2);
          const charConverge = Math.max(0.15, charDistFromCenter);
          const charY = cy + (line.yBase - h / 2) * charConverge + Math.sin((charX * line.frequency) + line.phase + Date.now() * 0.0004) * line.amplitude * charConverge;

          // Check if char is inside the pill region
          const inPillX = Math.abs(charX - cx) < pillWidth / 2;
          const inPillY = Math.abs(charY - cy) < pillHeight / 2;
          const isInPill = inPillX && inPillY;

          // Check if this character is part of the keyword
          const isKeyword = ci >= keywordStart && ci < keywordEnd;

          if (isInPill && isKeyword) {
            // Bold + brighter inside pill
            ctx.font = `800 16px 'Inter', system-ui, sans-serif`;
            ctx.fillStyle = `rgba(255, 255, 255, 0.95)`;
          } else if (isInPill) {
            // Normal text fades near pill
            ctx.font = `400 14px 'Inter', system-ui, sans-serif`;
            ctx.fillStyle = `rgba(255, 255, 255, ${line.opacity * 0.4})`;
          } else if (isKeyword) {
            ctx.font = `600 14px 'Inter', system-ui, sans-serif`;
            ctx.fillStyle = `rgba(2, 172, 234, ${line.opacity + 0.12})`;
          } else {
            ctx.font = `400 14px 'Inter', system-ui, sans-serif`;
            ctx.fillStyle = `rgba(255, 255, 255, ${line.opacity})`;
          }

          ctx.fillText(char, charX, charY);
          charX += ctx.measureText(char).width;
        });
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();
    animRef.current = { frameId, cleanup: () => window.removeEventListener("resize", resize) };

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cleanup = initLines(canvas);
    return cleanup;
  }, [initLines]);

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
          height: "180px",
          overflow: "hidden",
        }}
      >
        {/* Horizontal guide lines (wave paths) */}
        <svg
        {/* Canvas for wave text */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 5,
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
        />

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
        {/* Central oval pill — sits on top of canvas */}
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
          {/* Outer glow ring */}
          <div
            style={{
              position: "absolute",
              inset: "-12px",
              inset: "-14px",
              borderRadius: "40px",
              background: "rgba(2, 172, 234, 0.08)",
              background: "rgba(2, 172, 234, 0.06)",
              animation: "pulse-ring 2.5s ease-in-out infinite",
            }}
          />

          {/* Pill box */}
          <div
            style={{
              background: "rgba(2, 172, 234, 0.12)",
              background: "rgba(8, 20, 40, 0.85)",
              border: "2px solid rgba(2, 172, 234, 0.6)",
              borderRadius: "32px",
              padding: "14px 36px",
              backdropFilter: "blur(16px)",
              minWidth: "220px",
              padding: "12px 32px",
              backdropFilter: "blur(20px)",
              minWidth: "200px",
              textAlign: "center",
              boxShadow:
                "0 0 40px rgba(2, 172, 234, 0.15), inset 0 0 20px rgba(2, 172, 234, 0.05)",
                "0 0 50px rgba(2, 172, 234, 0.2), 0 0 100px rgba(2, 172, 234, 0.06), inset 0 0 30px rgba(2, 172, 234, 0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Shimmer effect */}
            {/* Shimmer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "200%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(2, 172, 234, 0.1), transparent)",
                  "linear-gradient(90deg, transparent, rgba(2, 172, 234, 0.08), transparent)",
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
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
            >
              {workflowSteps[activeStepIndex]}
            </span>
          </div>

          {/* Status indicator below pill */}
          {/* Status indicator */}
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
                background: statusText === "ANALYZING" ? "#02ACEA" : "#FBBF24",
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
                color: statusText === "ANALYZING"
                  ? "rgba(2, 172, 234, 0.9)"
                  : "rgba(251, 191, 36, 0.9)",
                textTransform: "uppercase",
              }}
            >
              {isProcessing ? "PROCESSING" : `STEP ${activeStepIndex + 1} OF 6`}
              {statusText}
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
