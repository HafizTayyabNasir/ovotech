"use client";
import { useState } from "react";

const faqs = [
  { q: "What is Ovotech and how does it work?", a: "Ovotech is a clinical document processing and coding workflow platform designed specifically for UK GP practices. It helps practices process incoming clinical correspondence efficiently by unifying document intake, information extraction, review queue management, SNOMED CT coding suggestions, and EMIS Web write-back." },
  { q: "Does Ovotech make autonomous clinical decisions?", a: "No. Ovotech is an assisted workflow platform rather than an autonomous decision-making system. The platform supports practice teams by extracting details and suggesting coding, but authorised reviewers retain complete control to verify and approve all information before it is committed to patient records." },
  { q: "Which clinical system does Ovotech integrate with?", a: "Ovotech currently focuses on integration with EMIS Web, enabling structured write-back of approved clinical information and SNOMED CT codes directly into the patient's record." },
  { q: "What is the Clinical Review workspace?", a: "The Clinical Review workspace is the main working area of Ovotech. It brings together the original document, extracted clinical data, suggested SNOMED CT codes, patient history, and final actions on a single screen to eliminate unnecessary system switching." },
  { q: "Is Ovotech NHS accredited and compliant?", a: "Yes, Ovotech adheres to strict NHS security and clinical governance standards, including DSPT and DCB0129 clinical risk management guidelines." },
  { q: "Can Ovotech demonstrate practice time saved and ROI?", a: "Yes. Ovotech provides Value & KPI tracking based on document volumes, staff involved in coding, and processing times to demonstrate operational impact, estimated hours saved, and released capacity." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ padding: "100px 0", background: "#F4F7FC", position: "relative", overflow: "hidden" }}>
      {/* Decorative bg */}
      <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: "320px", height: "320px", background: "rgba(0,168,232,0.05)", borderRadius: "50%", filter: "blur(80px)" }} />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
          {/* Left */}
          <div className="animate-fadeInLeft" style={{ flex: "0 1 340px", minWidth: "280px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#00A8E8", marginBottom: "12px", textTransform: "uppercase" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.2, marginBottom: "20px" }}>
              Frequently Asked<br />Questions
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7 }}>
              Everything you need to know about Ovotech&apos;s healthcare automation platform.
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="animate-fadeInRight delay-200" style={{ flex: "1 1 500px" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #E0E8F5" }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
                >
                  <span style={{ fontSize: "16px", fontWeight: 600, color: openIndex === i ? "#00A8E8" : "#0A1838", paddingRight: "16px", transition: "color 0.2s" }}>
                    {faq.q}
                  </span>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: openIndex === i ? "#00A8E8" : "#E0E8F5", color: openIndex === i ? "#fff" : "#0A1838", transition: "all 0.3s", transform: openIndex === i ? "rotate(45deg)" : "rotate(0)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </div>
                </button>
                <div style={{ overflow: "hidden", maxHeight: openIndex === i ? "500px" : "0", opacity: openIndex === i ? 1 : 0, transition: "all 0.3s ease-in-out" }}>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, paddingBottom: "20px", paddingRight: "48px" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
