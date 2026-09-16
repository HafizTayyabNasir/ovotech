"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const workflowSteps = [
  "Document Intake",
  "Entity Extraction",
  "Review Queue",
  "Clinical Review",
  "Human Approval",
  "EMIS Write-Back",
];

// Full sentences that flow along wave paths — each sentence contains a workflow step keyword
// Full sentences that flow along the single wave line — each contains a workflow step keyword
const waveSentences = [
  { text: "Process incoming clinical correspondence through automated Document Intake pipeline", keyword: "Document Intake" },
  { text: "Run Entity Extraction on discharge summaries to identify diagnoses and medications", keyword: "Entity Extraction" },
  { text: "Organise parsed documents into structured Review Queue with urgency indicators", keyword: "Review Queue" },
  { text: "Present extracted facts and SNOMED codes side by side for Clinical Review", keyword: "Clinical Review" },
  { text: "Authorised staff verify and provide Human Approval before system commit", keyword: "Human Approval" },
  { text: "Present extracted facts and SNOMED codes side by side for Clinical Review workspace", keyword: "Clinical Review" },
  { text: "Authorised staff verify and provide Human Approval before any system commit", keyword: "Human Approval" },
  { text: "Write approved clinical data directly into patient records via EMIS Write-Back", keyword: "EMIS Write-Back" },
];

export default function WaveWorkflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [statusText, setStatusText] = useState("ANALYZING");
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const linesRef = useRef([]);
  const stateRef = useRef({ sentenceIndex: 0, xOffset: 0 });

  // Cycle through the 6 steps
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusText("PROCESSING");
      setTimeout(() => {
        setActiveStepIndex((prev) => (prev + 1) % workflowSteps.length);
        setStatusText("ANALYZING");
      }, 600);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Canvas-based wave text animation
  const initLines = useCallback((canvas) => {
  // Canvas wave animation — single line, sentences one after another
  const initCanvas = useCallback((canvas) => {
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
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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
    // Single stream state: chain of sentences flowing left
    // We'll place all sentences in a continuous ribbon and scroll them
    const GAP = 120; // gap between sentences
    const SPEED = 1.0;
    const AMPLITUDE = 12; // wave height (small)
    const FREQUENCY = 0.006;

    linesRef.current = lineConfigs;
    // Build a long ribbon: sentence0 ~~~gap~~~ sentence1 ~~~gap~~~ sentence2 ...
    // We'll keep scrolling and loop
    let scrollX = 0;

    const pillCenterX = () => canvas.width / dpr / 2;
    const pillCenterY = () => canvas.height / dpr / 2;
    const pillWidth = 200;
    const pillHeight = 48;
    const pillW = 200;
    const pillH = 48;

    let frameId;

    const animate = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const cx = pillCenterX();
      const cy = pillCenterY();
      const cy = h / 2;
      const cx = w / 2;
      const time = Date.now() * 0.0003;

      // Draw wave guide lines
      for (let li = 0; li < 4; li++) {
      // Draw 3 subtle wave guide lines (visual wave curves)
      for (let li = 0; li < 3; li++) {
        ctx.beginPath();
        const baseY = 20 + li * 30;
        const amp = 10 + (li % 2) * 5;
        const freq = 0.003 + li * 0.0005;
        for (let px = 0; px < w; px++) {
          // Converge towards center
          const distFromCenter = Math.abs(px - cx) / (w / 2);
          const convergeFactor = 1 - (1 - distFromCenter) * 0.6;
          const y = cy + (baseY - h / 2) * convergeFactor + Math.sin(px * freq + li * 0.8 + Date.now() * 0.0003) * amp * convergeFactor;
        const lineAmp = AMPLITUDE * (0.5 + li * 0.4);
        const lineFreq = FREQUENCY * (0.8 + li * 0.15);
        const linePhase = li * 1.5 + time;
        for (let px = 0; px <= w; px += 2) {
          const y = cy + Math.sin(px * lineFreq + linePhase) * lineAmp;
          if (px === 0) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
        }
        ctx.strokeStyle = `rgba(2, 172, 234, ${0.06 + li * 0.02})`;
        ctx.strokeStyle = `rgba(2, 172, 234, ${0.04 + li * 0.025})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw flowing text along wave paths
      linesRef.current.forEach((line) => {
        // Move text left
        line.x -= line.speed;
      // Measure all sentences to know total ribbon length
      ctx.font = `400 15px 'Inter', system-ui, sans-serif`;
      let totalRibbonWidth = 0;
      const sentenceWidths = waveSentences.map((s) => {
        const w = ctx.measureText(s.text).width;
        totalRibbonWidth += w + GAP;
        return w;
      });

        // Reset when fully off-screen left
        const textWidth = ctx.measureText(line.text).width || line.text.length * 8;
        if (line.x + textWidth < -100) {
          line.x = w + 100 + Math.random() * 200;
        }
      // Scroll
      scrollX += SPEED;
      if (scrollX > totalRibbonWidth) {
        scrollX -= totalRibbonWidth;
      }

        // Calculate wave Y with convergence near center
        const distFromCenter = Math.abs(line.x + textWidth / 2 - cx) / (w / 2);
        const convergeFactor = Math.max(0.15, distFromCenter);
        const waveY = cy + (line.yBase - h / 2) * convergeFactor + Math.sin((line.x * line.frequency) + line.phase + Date.now() * 0.0004) * line.amplitude * convergeFactor;
      // Draw each sentence in the ribbon
      let ribbonX = -scrollX + w + 100; // start off-screen right

        // Draw each character
        ctx.font = `400 14px 'Inter', system-ui, sans-serif`;
        ctx.fillStyle = `rgba(255, 255, 255, ${line.opacity})`;
      waveSentences.forEach((sentence, si) => {
        const textW = sentenceWidths[si];

        let charX = line.x;
        const chars = line.text.split("");
        const keywordStart = line.text.indexOf(line.keyword);
        const keywordEnd = keywordStart + line.keyword.length;
        // If this segment wraps, draw it at the wrapped position too
        const drawPositions = [ribbonX];
        // Also draw a wrapped copy so the loop is seamless
        drawPositions.push(ribbonX + totalRibbonWidth);

        chars.forEach((char, ci) => {
          const charDistFromCenter = Math.abs(charX - cx) / (w / 2);
          const charConverge = Math.max(0.15, charDistFromCenter);
          const charY = cy + (line.yBase - h / 2) * charConverge + Math.sin((charX * line.frequency) + line.phase + Date.now() * 0.0004) * line.amplitude * charConverge;
        drawPositions.forEach((startX) => {
          // Only draw if visible
          if (startX > w + 50 || startX + textW < -50) return;

          // Check if char is inside the pill region
          const inPillX = Math.abs(charX - cx) < pillWidth / 2;
          const inPillY = Math.abs(charY - cy) < pillHeight / 2;
          const isInPill = inPillX && inPillY;
          const keywordStart = sentence.text.indexOf(sentence.keyword);
          const keywordEnd = keywordStart + sentence.keyword.length;

          // Check if this character is part of the keyword
          const isKeyword = ci >= keywordStart && ci < keywordEnd;
          let charX = startX;
          const chars = sentence.text.split("");

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
          chars.forEach((char, ci) => {
            // Wave Y position
            const waveY = cy + Math.sin(charX * FREQUENCY + time) * AMPLITUDE;

          ctx.fillText(char, charX, charY);
          charX += ctx.measureText(char).width;
            // Check if char is inside the pill region
            const inPillX = Math.abs(charX - cx) < pillW / 2;
            const inPillY = Math.abs(waveY - cy) < pillH / 2;
            const isInPill = inPillX && inPillY;

            // Is this character part of the keyword?
            const isKeyword = ci >= keywordStart && ci < keywordEnd;

            if (isInPill && isKeyword) {
              ctx.font = `800 17px 'Inter', system-ui, sans-serif`;
              ctx.fillStyle = `rgba(255, 255, 255, 0.95)`;
            } else if (isInPill) {
              ctx.font = `400 15px 'Inter', system-ui, sans-serif`;
              ctx.fillStyle = `rgba(255, 255, 255, 0.08)`;
            } else if (isKeyword) {
              ctx.font = `600 15px 'Inter', system-ui, sans-serif`;
              ctx.fillStyle = `rgba(2, 172, 234, 0.35)`;
            } else {
              ctx.font = `400 15px 'Inter', system-ui, sans-serif`;
              ctx.fillStyle = `rgba(255, 255, 255, 0.15)`;
            }

            ctx.fillText(char, charX, waveY);
            charX += ctx.measureText(char).width;
          });
        });

        ribbonX += textW + GAP;
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
    return initCanvas(canvas);
  }, [initCanvas]);

  return (
    <section
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
          height: "180px",
          overflow: "hidden",
        }}
      >
        {/* Canvas for wave text */}
        {/* Canvas for single-line wave text */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* Central oval pill — sits on top of canvas */}
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
          {/* Outer glow ring */}
          {/* Outer glow */}
          <div
            style={{
              position: "absolute",
              inset: "-14px",
              borderRadius: "40px",
              background: "rgba(2, 172, 234, 0.06)",
              animation: "pulse-ring 2.5s ease-in-out infinite",
            }}
          />

          {/* Pill box */}
          {/* Pill */}
          <div
            style={{
              background: "rgba(8, 20, 40, 0.85)",
              border: "2px solid rgba(2, 172, 234, 0.6)",
              borderRadius: "32px",
              padding: "12px 32px",
              backdropFilter: "blur(20px)",
              minWidth: "200px",
              textAlign: "center",
              boxShadow:
                "0 0 50px rgba(2, 172, 234, 0.2), 0 0 100px rgba(2, 172, 234, 0.06), inset 0 0 30px rgba(2, 172, 234, 0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Shimmer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "200%",
                height: "100%",
                background:
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
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
            >
              {workflowSteps[activeStepIndex]}
            </span>
          </div>

          {/* Status indicator */}
          {/* Status */}
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
                background: statusText === "ANALYZING" ? "#02ACEA" : "#FBBF24",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                color: statusText === "ANALYZING"
                  ? "rgba(2, 172, 234, 0.9)"
                  : "rgba(251, 191, 36, 0.9)",
                textTransform: "uppercase",
              }}
            >
              {statusText}
            </span>
          </div>
        </div>
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
