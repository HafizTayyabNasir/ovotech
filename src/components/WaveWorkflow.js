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

const waveSentences = [
  { text: "Process incoming clinical correspondence through automated Document Intake pipeline", keyword: "Document Intake" },
  { text: "Run Entity Extraction on discharge summaries to identify diagnoses and medications", keyword: "Entity Extraction" },
  { text: "Organise parsed documents into structured Review Queue with urgency indicators", keyword: "Review Queue" },
  { text: "Present extracted facts and SNOMED codes side by side for Clinical Review workspace", keyword: "Clinical Review" },
  { text: "Authorised staff verify and provide Human Approval before any system commit", keyword: "Human Approval" },
  { text: "Write approved clinical data directly into patient records via EMIS Write-Back", keyword: "EMIS Write-Back" },
];

export default function WaveWorkflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [statusText, setStatusText] = useState("ANALYZING");
  const canvasRef = useRef(null);

  useEffect(function cycleSteps() {
    const interval = setInterval(function () {
      setStatusText("PROCESSING");
      setTimeout(function () {
        setActiveStepIndex(function (prev) {
          return (prev + 1) % workflowSteps.length;
        });
        setStatusText("ANALYZING");
      }, 600);
    }, 3500);
    return function () {
      clearInterval(interval);
    };
  }, []);

  var initCanvas = useCallback(function (canvas) {
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = window.devicePixelRatio || 1;

    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    var GAP = 120;
    var SPEED = 1.0;
    var AMPLITUDE = 12;
    var FREQUENCY = 0.006;
    var pillW = 200;
    var pillH = 48;
    var scrollX = 0;
    var frameId = 0;

    function animate() {
      var w = canvas.width / dpr;
      var h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      var cy = h / 2;
      var cx = w / 2;
      var time = Date.now() * 0.0003;

      // Draw 3 subtle wave guide lines
      for (var li = 0; li < 3; li++) {
        ctx.beginPath();
        var lineAmp = AMPLITUDE * (0.5 + li * 0.4);
        var lineFreq = FREQUENCY * (0.8 + li * 0.15);
        var linePhase = li * 1.5 + time;
        for (var px = 0; px <= w; px += 2) {
          var y = cy + Math.sin(px * lineFreq + linePhase) * lineAmp;
          if (px === 0) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
        }
        ctx.strokeStyle = "rgba(2, 172, 234, " + (0.04 + li * 0.025) + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Measure ribbon
      ctx.font = "400 15px 'Inter', system-ui, sans-serif";
      var totalRibbonWidth = 0;
      var sentenceWidths = [];
      for (var s = 0; s < waveSentences.length; s++) {
        var tw = ctx.measureText(waveSentences[s].text).width;
        totalRibbonWidth += tw + GAP;
        sentenceWidths.push(tw);
      }

      scrollX += SPEED;
      if (scrollX > totalRibbonWidth) {
        scrollX -= totalRibbonWidth;
      }

      var ribbonX = -scrollX + w + 100;

      for (var si = 0; si < waveSentences.length; si++) {
        var sentence = waveSentences[si];
        var textW = sentenceWidths[si];
        var positions = [ribbonX, ribbonX + totalRibbonWidth];

        for (var p = 0; p < positions.length; p++) {
          var startX = positions[p];
          if (startX > w + 50 || startX + textW < -50) continue;

          var keywordStart = sentence.text.indexOf(sentence.keyword);
          var keywordEnd = keywordStart + sentence.keyword.length;
          var charX = startX;

          for (var ci = 0; ci < sentence.text.length; ci++) {
            var ch = sentence.text[ci];
            var waveY = cy + Math.sin(charX * FREQUENCY + time) * AMPLITUDE;
            var inPillX = Math.abs(charX - cx) < pillW / 2;
            var inPillY = Math.abs(waveY - cy) < pillH / 2;
            var isInPill = inPillX && inPillY;
            var isKeyword = ci >= keywordStart && ci < keywordEnd;

            if (isInPill && isKeyword) {
              ctx.font = "800 17px 'Inter', system-ui, sans-serif";
              ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
            } else if (isInPill) {
              ctx.font = "400 15px 'Inter', system-ui, sans-serif";
              ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
            } else if (isKeyword) {
              ctx.font = "600 15px 'Inter', system-ui, sans-serif";
              ctx.fillStyle = "rgba(2, 172, 234, 0.35)";
            } else {
              ctx.font = "400 15px 'Inter', system-ui, sans-serif";
              ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            }

            ctx.fillText(ch, charX, waveY);
            charX += ctx.measureText(ch).width;
          }
        }

        ribbonX += textW + GAP;
      }

      frameId = requestAnimationFrame(animate);
    }

    animate();

    return function cleanup() {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(function mountCanvas() {
    var canvas = canvasRef.current;
    if (!canvas) return;
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(2, 172, 234, 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

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

      <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
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

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 20,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-14px",
              borderRadius: "40px",
              background: "rgba(2, 172, 234, 0.06)",
              animation: "pulse-ring 2.5s ease-in-out infinite",
            }}
          />

          <div
            style={{
              background: "rgba(8, 20, 40, 0.85)",
              border: "2px solid rgba(2, 172, 234, 0.6)",
              borderRadius: "32px",
              padding: "12px 32px",
              backdropFilter: "blur(20px)",
              minWidth: "200px",
              textAlign: "center",
              boxShadow: "0 0 50px rgba(2, 172, 234, 0.2), 0 0 100px rgba(2, 172, 234, 0.06), inset 0 0 30px rgba(2, 172, 234, 0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "200%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(2, 172, 234, 0.08), transparent)",
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
                display: "inline-block",
              }}
            >
              {workflowSteps[activeStepIndex]}
            </span>
          </div>

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
                color: statusText === "ANALYZING" ? "rgba(2, 172, 234, 0.9)" : "rgba(251, 191, 36, 0.9)",
                textTransform: "uppercase",
              }}
            >
              {statusText}
            </span>
          </div>
        </div>
      </div>

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
          {workflowSteps.map(function (step, i) {
            return (
              <button
                key={i}
                onClick={function () { setActiveStepIndex(i); }}
                style={{
                  background: i === activeStepIndex ? "#02ACEA" : "rgba(255,255,255,0.06)",
                  color: i === activeStepIndex ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                  border: i === activeStepIndex ? "1px solid #02ACEA" : "1px solid rgba(255,255,255,0.1)",
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
                    color: i === activeStepIndex ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                  }}
                >
                  {i + 1}.
                </span>
                {step}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

