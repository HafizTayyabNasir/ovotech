"use client";
import Link from "next/link";

export default function WhatWeDo() {
  const cards = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      iconBg: "rgba(2, 172, 234, 0.1)",
      iconColor: "#02ACEA",
      title: "Clinical Document Coding",
      text: "Automated document ingestion, AI-powered SNOMED CT concept extraction, and direct EMIS Web write-back for incoming hospital correspondence.",
      link: "/solutions",
      linkText: "Explore Clinical Coding"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      iconBg: "rgba(34, 197, 94, 0.1)",
      iconColor: "#22c55e",
      title: "Intelligent Workflows",
      text: "Smart triage of incoming patient documents and requests, prioritized by clinical urgency and automatically matched to the correct NHS patient record.",
      link: "/how-it-works",
      linkText: "Explore Workflows"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 12 12 17 22 12"></polyline>
          <polyline points="2 17 12 22 22 17"></polyline>
        </svg>
      ),
      iconBg: "rgba(138, 96, 229, 0.1)",
      iconColor: "#8A60E5",
      title: "Practice Analytics",
      text: "Comprehensive real-time dashboards for practice managers, providing full visibility into document throughput, clinical hours saved, and CQC compliance metrics.",
      link: "/solutions#kpi-tracking",
      linkText: "Explore Analytics"
    }
  ];

  return (
    <section style={{ padding: "100px 0", background: "#F4F7FC" }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, color: "#0A1838", marginBottom: "12px" }}>
            What We <span style={{ color: "#02ACEA" }}>Do</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#64748B", fontWeight: 500 }}>
            Digital Process Automation Made Simple
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              style={{ 
                background: "#FFFFFF", 
                borderRadius: "20px", 
                padding: "40px 32px", 
                boxShadow: "0 10px 30px rgba(10,24,56,0.04)",
                border: "1px solid #E0E8F5",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.transform = "translateY(-6px)"; 
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(10,24,56,0.08)"; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.transform = "translateY(0)"; 
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(10,24,56,0.04)"; 
              }}
            >
              <div 
                style={{ 
                  width: "56px", 
                  height: "56px", 
                  borderRadius: "14px", 
                  background: card.iconBg, 
                  color: card.iconColor, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  marginBottom: "24px" 
                }}
              >
                {card.icon}
              </div>
              
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0A1838", marginBottom: "16px" }}>
                {card.title}
              </h3>
              
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.6, marginBottom: "32px", flexGrow: 1 }}>
                {card.text}
              </p>
              
              <Link 
                href={card.link}
                style={{ 
                  fontSize: "14px", 
                  fontWeight: 700, 
                  color: "#02ACEA", 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "6px",
                  transition: "gap 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                onMouseLeave={e => e.currentTarget.style.gap = "6px"}
              >
                {card.linkText} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

