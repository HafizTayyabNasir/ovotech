"use client";
import { useState } from "react";

const faqs = [
  { q: "What is Ovotech and how does it work?", a: "Ovotech is a healthcare automation platform that helps GP practices and healthcare providers automate repetitive administrative tasks using AI and RPA. We integrate with your existing GP software securely, configure workflows to match your practice, and let AI bots handle the rest." },
  { q: "Is Ovotech NHS accredited?", a: "Yes, Ovotech is fully NHS accredited and compliant with DSPT and DCB0129 standards for clinical safety. We also adhere to GDPR regulations for data protection." },
  { q: "Which GP systems does Ovotech integrate with?", a: "Ovotech integrates with major GP systems including TPP SystmOne, EMIS Web, and other NHS-approved clinical systems. Our integration is secure and doesn't require changes to your existing infrastructure." },
  { q: "How long does it take to set up Ovotech?", a: "Setup typically takes 2-4 weeks depending on the complexity of your workflows. Our team handles the entire onboarding process, from initial assessment to going live, with minimal disruption to your practice." },
  { q: "What kind of support does Ovotech provide?", a: "We provide dedicated support including a named account manager, 24/7 monitoring of automated processes, regular performance reviews, and access to our Help Centre with guides and documentation." },
  { q: "Can Ovotech scale across multiple practices?", a: "Absolutely. Ovotech is designed to scale across Primary Care Networks (PCNs) and multi-site practices. Our platform can be centrally managed while allowing individual practice customisation." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ padding: "100px 0", background: "#F7F7FA", position: "relative", overflow: "hidden" }}>
      {/* Decorative bg */}
      <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: "320px", height: "320px", background: "rgba(54,45,126,0.03)", borderRadius: "50%", filter: "blur(80px)" }} />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
          {/* Left */}
          <div className="animate-fadeInLeft" style={{ flex: "0 1 340px", minWidth: "280px" }}>
            <span style={{ display: "inline-block", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#362D7E", marginBottom: "12px", textTransform: "uppercase" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "20px" }}>
              Frequently Asked<br />Questions
            </h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: 1.7 }}>
              Everything you need to know about Ovotech&apos;s healthcare automation platform.
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="animate-fadeInRight delay-200" style={{ flex: "1 1 500px" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #E8E8EF" }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
                >
                  <span style={{ fontSize: "16px", fontWeight: 600, color: openIndex === i ? "#362D7E" : "#1A1A1A", paddingRight: "16px", transition: "color 0.2s" }}>
                    {faq.q}
                  </span>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: openIndex === i ? "#362D7E" : "#E8E8EF", color: openIndex === i ? "#fff" : "#1A1A1A", transition: "all 0.3s", transform: openIndex === i ? "rotate(45deg)" : "rotate(0)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </div>
                </button>
                <div style={{ overflow: "hidden", maxHeight: openIndex === i ? "500px" : "0", opacity: openIndex === i ? 1 : 0, transition: "all 0.3s ease-in-out" }}>
                  <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6, paddingBottom: "20px", paddingRight: "48px" }}>
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
