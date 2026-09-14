"use client";
import { useState } from "react";

const faqs = [
  { q: "What is Ovotech and how does it work?", a: "Ovotech is a clinical document processing and coding workflow platform designed specifically for UK GP practices. It helps practices process incoming clinical correspondence efficiently by unifying document intake, information extraction, review queue management, SNOMED CT coding suggestions, and EMIS Web write-back." },
  { q: "Does Ovotech make autonomous clinical decisions?", a: "No. Ovotech is an assisted workflow platform rather than an autonomous decision-making system. The platform supports practice teams by extracting details and suggesting coding, but authorised reviewers retain complete control to verify and approve all information before it is committed to patient records." },
  { q: "Which clinical system does Ovotech integrate with?", a: "Ovotech currently focuses on integration with EMIS Web, enabling structured write-back of approved clinical information and SNOMED CT codes directly into the patient's record." },
  { q: "What is the Clinical Review workspace?", a: "The Clinical Review workspace is the main working area of Ovotech. It brings together the original document, extracted clinical data, suggested SNOMED CT codes, patient history, and final actions on a single screen to eliminate unnecessary system switching." },
  { q: "What compliance standards does Ovotech adhere to?", a: "Ovotech strictly adheres to confirmed UK primary care information governance and security standards, including DSPT (Data Security and Protection Toolkit), DTAC, Cyber Essentials, and ISO 27001." },
  { q: "Can Ovotech demonstrate practice time saved and ROI?", a: "Yes. Ovotech provides Value & KPI tracking based on document volumes, staff involved in coding, and processing times to demonstrate operational impact, estimated hours saved, and released capacity." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ padding: "110px 0", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
          {/* Left */}
          <div className="animate-fadeInLeft" style={{ flex: "0 1 340px", minWidth: "280px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", marginBottom: "12px", textTransform: "uppercase", background: "rgba(2,172,234,0.1)", padding: "4px 14px", borderRadius: "20px", border: "1px solid rgba(2,172,234,0.25)" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: "20px" }}>
              Frequently Asked<br />Questions
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7 }}>
              Everything you need to know about Ovotech&apos;s healthcare automation platform.
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="animate-fadeInRight delay-200" style={{ flex: "1 1 500px" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #E2E8F5" }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 0", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
                >
                  <span style={{ fontSize: "16px", fontWeight: 700, color: openIndex === i ? "#02ACEA" : "#0F172A", paddingRight: "16px", transition: "color 0.2s" }}>
                    {faq.q}
                  </span>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: openIndex === i ? "#02ACEA" : "#F0F9FF", color: openIndex === i ? "#FFFFFF" : "#02ACEA", transition: "all 0.3s", transform: openIndex === i ? "rotate(45deg)" : "rotate(0)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14"/></svg>
                  </div>
                </button>
                <div style={{ overflow: "hidden", maxHeight: openIndex === i ? "500px" : "0", opacity: openIndex === i ? 1 : 0, transition: "all 0.3s ease-in-out" }}>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, paddingBottom: "22px", paddingRight: "48px" }}>
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
