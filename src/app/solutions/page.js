"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import ParticlesBackground from "@/components/ParticlesBackground";

const tabs = [
  {
    id: "review-queue",
    title: "Review Queue",
    desc: "Practice staff see all incoming clinical correspondence in one prioritized list, matched to the correct NHS patient.",
    image: "/step1-intake.png",
  },
  {
    id: "clinical-review",
    title: "Clinical Review Workspace",
    desc: "The core workstation. Reviewers see the original hospital letter alongside extracted data, SNOMED CT suggestions, and relevant patient history—without juggling multiple windows.",
    image: "/clinical-workspace-review.png",
  },
  {
    id: "dashboard",
    title: "Dashboard & Impact",
    desc: "Practice managers get full visibility into document throughput, backlogs cleared, and clinical hours saved, ensuring CQC audit readiness.",
    image: "/hero-tech.png",
  }
];

const faqs = [
  {
    q: "Which SNOMED CT subset does Ovotech use?",
    a: "Ovotech aligns with the UK Primary Care SNOMED CT subset, ensuring all proposed codes are valid and relevant for general practice records."
  },
  {
    q: "Can a reviewer override a suggested code?",
    a: "Yes. Every suggested code can be edited, deleted, or replaced by the human reviewer. Nothing is finalized without manual approval."
  },
  {
    q: "What happens if the system doesn't find a confident match?",
    a: "If the text is ambiguous, the system flags it for the human reviewer to manually select the appropriate code, ensuring clinical safety is never compromised."
  },
  {
    q: "Is every coding decision logged for audit?",
    a: "Absolutely. Every transaction is logged with the approving reviewer's user ID, timestamp, and modified fields for complete CQC and IG auditability."
  },
  {
    q: "Does this tool replace clinical judgment?",
    a: "No. Ovotech is an assisted workflow tool. It handles the administrative heavy lifting of finding and organizing data, but the clinical decision remains entirely with your authorized practice staff."
  },
  {
    q: "What clinical systems does Ovotech integrate with?",
    a: "Currently, Ovotech supports direct structured write-back into EMIS Web. We are continuously evaluating other primary care EPR integrations."
  }
];

const coreComponents = [
  {
    id: "review-queue",
    tag: "Workload Management",
    title: "Review Queue & Intake Automation",
    desc: "A unified, intelligent workspace showing all incoming clinical documents that require review. Triage documents automatically by urgency, document type, or patient risk profile while maintaining total operational clarity.",
    image: "/step1-intake.png",
    link: "/solutions/review-queue"
  },
  {
    id: "clinical-review",
    tag: "Primary Workspace",
    title: "Clinical Review Workspace",
    desc: "The core clinical workstation bringing together original clinical documents, extracted facts, proposed SNOMED CT codes, patient record background, and required actions in a single unified interface.",
    image: "/clinical-workspace-review.png",
    link: "/solutions/clinical-review"
  },
  {
    id: "patient-history",
    tag: "Contextual Review",
    title: "Patient History Context",
    desc: "Surfaces relevant historical diagnoses, current medications, allergies, and previous consultations alongside the document being reviewed. Minimises clinical risk and prevents duplicate coding.",
    image: "/step4-patient-history.png",
    link: "/solutions/patient-history"
  },
  {
    id: "snomed-coding",
    tag: "Coding Support",
    title: "SNOMED CT Coding Support",
    desc: "Automatically analyses clinical narrative text to identify medical concepts, diagnoses, procedures, and findings—proposing accurate SNOMED CT terminology for human approval.",
    image: "/step3-snomed.png",
    link: "/solutions/snomed-coding"
  },
  {
    id: "emis-integration",
    tag: "System Integration",
    title: "EMIS Web Integration",
    desc: "Once verified by an authorized clinician or administrative reviewer, coded data and summary notes are saved directly into the EMIS Web EPR system without manual re-keying.",
    image: "/step5-emis-writeback.png",
    link: "/solutions/emis-integration"
  },
  {
    id: "kpi-tracking",
    tag: "Analytics & Governance",
    title: "Dashboard & Operational Analytics",
    desc: "Empowers practice managers and PCN clinical leads with comprehensive dashboards tracking document throughput, clinician time saved, outstanding backlogs, and CQC compliance metrics.",
    image: "/hero-tech.png",
    link: "/solutions/kpi-tracking"
  }
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];
  
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />

      {/* 1. HERO */}
      <section style={{ position: "relative", minHeight: "800px", paddingTop: "120px", paddingBottom: "100px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", background: "#301A65" }}>
        <ParticlesBackground color="#8A60E5" />
        
        {/* Ambient Glow */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(138, 96, 229, 0.25) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        {/* SVG Layered Organic Wave Curve Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 3 }} viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ovoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#301A65" />
              <stop offset="85%" stopColor="#3E2382" />
              <stop offset="100%" stopColor="#134074" />
            </linearGradient>
            <linearGradient id="ovoWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#301A65" />
              <stop offset="50%" stopColor="#3E2382" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgba(138, 96, 229, 0.4)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M 0,0 L 840,0 C 530,250 530,550 840,800 L 0,800 Z" fill="url(#ovoWave)" />
          <path d="M 0,0 L 760,0 C 470,250 470,550 760,800 L 0,800 Z" fill="url(#ovoGradient)" />
        </svg>

        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: "inline-block", background: "rgba(138,96,229,0.15)", color: "#02ACEA", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", padding: "6px 16px", borderRadius: "20px", border: "1px solid rgba(138,96,229,0.3)" }}>
              Ovotech Medical Coding Tool
            </span>
            <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px", color: "#FFFFFF", maxWidth: "900px", margin: "0 auto 20px" }}>
              Medical Coding, Handled — From Document to EMIS Web, With a Human Always in Control.
            </h1>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: "32px", maxWidth: "680px", margin: "0 auto 32px" }}>
              Stop juggling paper, PDFs, and multiple screens. Ovotech is a unified workflow platform for UK GP practices that reads clinical correspondence, extracts key data, suggests SNOMED CT codes, and writes back to EMIS Web—all with your staff's final approval.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "60px" }}>
              <Link href="/contact" style={{ background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, padding: "14px 28px", borderRadius: "30px", boxShadow: "0 4px 14px rgba(138, 96, 229, 0.3)", transition: "all 0.3s" }}>
                Book a Demo
              </Link>
            </div>
          </motion.div>

          {/* Browser Mockup Video Player (Reused Pattern) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="animated-border-wrapper" style={{ maxWidth: "1000px", margin: "0 auto", "--border-radius": "24px" }}
          >
            <div className="animated-border-inner" style={{ background: "#FFFFFF", boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)", display: "flex", flexDirection: "column" }}>
              {/* Browser Controls */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#0F172A", borderRadius: "22px 22px 0 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 600, letterSpacing: "1px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#02ACEA" }}></span>
                  Medical Coding Workspace
                </div>
                <div style={{ width: "44px" }}></div>
              </div>

              {/* Video Container */}
              <div style={{ position: "relative", paddingTop: "56.25%", borderRadius: "0 0 22px 22px", overflow: "hidden", background: "#0A1838", cursor: "pointer" }}
                onClick={togglePlay}
              >
                {/* TODO: replace with real Medical Coding product walkthrough video */}
                <video 
                  ref={videoRef}
                  controls={false}
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  poster="/hero-tech.png"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src="/HomeBanner.mp4" type="video/mp4" />
                </video>
                
                {/* Custom Play/Pause Overlay Control */}
                <div style={{ position: "absolute", bottom: "24px", left: "24px", zIndex: 20 }}>
                  <button 
                    onClick={toggleMute}
                    style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", padding: "10px 16px", borderRadius: "30px", fontSize: "13px", fontWeight: 700, display: "flex", gap: "8px", alignItems: "center", cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.8)" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.6)" }}
                  >
                    <span>{isMuted ? "🔇" : "🔊"}</span> {isMuted ? "Unmute" : "Mute"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>The Challenge</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              Manual Coding is Breaking GP Workflows
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { icon: "⏳", title: "Hours Lost to Manual Admin", desc: "Staff waste massive amounts of time reading long hospital letters and manually looking up codes." },
              { icon: "📉", title: "Inconsistent Clinical Coding", desc: "Different reviewers apply different codes, leading to fragmented patient records and missed QOF points." },
              { icon: "⚠️", title: "Mounting Document Backlogs", desc: "High volumes of incoming correspondence create dangerous backlogs, delaying critical patient follow-ups." },
              { icon: "🔄", title: "Disconnected Tools", desc: "Constantly toggling between Docman, EMIS Web, and clinical lookup sites causes fatigue and errors." }
            ].map((p, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "32px 24px", border: "1px solid #E0E8F5", transition: "transform 0.3s" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{p.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1838", marginBottom: "10px" }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SCREENSHOTS / VISUAL WALKTHROUGH */}
      <section style={{ padding: "90px 0", background: "#FFFFFF" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Visual Walkthrough</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              The Medical Coding Experience
            </h2>
          </div>

          <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #E0E8F5", boxShadow: "0 20px 50px rgba(10,24,56,0.06)", overflow: "hidden" }}>
            <div style={{ display: "flex", overflowX: "auto", background: "#F4F7FC", borderBottom: "1px solid #E0E8F5", padding: "8px 12px", gap: "8px" }} className="no-scrollbar">
              {tabs.map((tab, idx) => {
                const isActive = idx === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      flex: "1", minWidth: "160px", padding: "14px 18px", borderRadius: "14px", border: "none",
                      background: isActive ? "#FFFFFF" : "transparent",
                      boxShadow: isActive ? "0 4px 14px rgba(0,0,0,0.06)" : "none",
                      cursor: "pointer", textAlign: "center", transition: "all 0.25s ease", outline: "none"
                    }}
                  >
                    <div style={{ fontSize: "14px", fontWeight: 800, color: isActive ? "#301A65" : "#475569" }}>
                      {tab.title}
                    </div>
                  </button>
                );
              })}
            </div>
            <div style={{ padding: "48px 40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#301A65", marginBottom: "16px", lineHeight: 1.25 }}>
                    {active.title}
                  </h3>
                  <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7 }}>
                    {active.desc}
                  </p>
                </div>
                <div style={{ position: "relative" }}>
                  <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E0E8F5", boxShadow: "0 16px 40px rgba(10,24,56,0.1)" }}>
                    {/* TODO: replace with real product screenshot */}
                    <img src={active.image} alt={active.title} style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section style={{ padding: "90px 0", background: "#f8fafc" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>How It Works</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              The 8-Step Medical Coding Flow
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { num: 1, type: "System", icon: "📥", title: "Document Intake", desc: "System automatically ingests clinical correspondence from hospitals." },
              { num: 2, type: "System", icon: "🔍", title: "Extraction", desc: "AI engine parses the text to find key clinical facts and patient identifiers." },
              { num: 3, type: "System", icon: "📋", title: "Review Queue", desc: "Document lands in the practice's prioritized, sorted review queue." },
              { num: 4, type: "Human", icon: "🖥️", title: "Clinical Review", desc: "Staff member opens the unified workspace to read the original document." },
              { num: 5, type: "Human", icon: "📖", title: "Patient History", desc: "Staff checks the patient's existing active record for context." },
              { num: 6, type: "System", icon: "💡", title: "Coding Support", desc: "System suggests accurate SNOMED CT codes based on the extracted text." },
              { num: 7, type: "Human", icon: "✅", title: "Approval", desc: "Staff member verifies, edits, and ultimately approves the suggested codes." },
              { num: 8, type: "System", icon: "🏥", title: "Write-Back", desc: "Approved data is written directly to EMIS Web with an audit log." }
            ].map((s, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "20px", padding: "24px 20px", border: "1px solid #e2e8f5", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "inline-block", background: s.type === "System" ? "rgba(2,172,234,0.1)" : "rgba(22,163,74,0.1)", color: s.type === "System" ? "#02ACEA" : "#16a34a", fontSize: "10px", fontWeight: 800, padding: "4px 10px", borderRadius: "12px", textTransform: "uppercase", marginBottom: "12px" }}>
                  {s.type} Action
                </div>
                <div style={{ width: "32px", height: "32px", background: "#0A1838", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, margin: "0 auto 12px" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "30px", marginBottom: "12px" }}>{s.icon}</div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#24144B", marginBottom: "6px" }}>{s.title}</h4>
                <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VIDEO GUIDE */}
      <section id="video-guide" style={{ position: "relative", padding: "100px 0", background: "#FFFFFF", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "1000px", height: "500px", background: "radial-gradient(ellipse, rgba(48, 26, 101, 0.05) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <motion.span 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ display: "inline-block", background: "rgba(48, 26, 101, 0.08)", color: "#301A65", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 20px", borderRadius: "30px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid rgba(48, 26, 101, 0.15)" }}
            >
              Watch the Guide
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.5px", marginBottom: "16px" }}
            >
              See Medical Coding in Action
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ fontSize: "16px", color: "#475569", maxWidth: "600px", margin: "0 auto" }}
            >
              Take a 2-minute walkthrough of the complete flow—from document intake to clinical review and EMIS Web write-back.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}
            className="animated-border-wrapper" style={{ maxWidth: "1000px", margin: "0 auto", "--border-radius": "24px" }}
          >
            <div className="animated-border-inner" style={{ background: "#FFFFFF", boxShadow: "0 30px 60px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "8px", padding: "16px", background: "#f8fafc", borderRadius: "22px 22px 0 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
              </div>
              <div style={{ position: "relative", paddingTop: "56.25%", borderRadius: "0 0 22px 22px", overflow: "hidden", background: "#000" }}>
                {/* TODO: replace with actual product walkthrough video */}
                <video controls autoPlay loop muted playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}>
                  <source src="/HomeBanner.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CORE COMPONENTS */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Deep Dive</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              Core Medical Coding Components
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {coreComponents.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={m.id} style={{ background: "#FFFFFF", borderRadius: "28px", padding: "48px 40px", border: "1px solid #E0E8F5", boxShadow: "0 12px 40px rgba(10,24,56,0.04)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <span style={{ display: "inline-block", background: "rgba(2,172,234,0.12)", color: "#02ACEA", fontSize: "11px", fontWeight: 700, padding: "5px 14px", borderRadius: "14px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "14px" }}>
                        Component {idx + 1} — {m.tag}
                      </span>
                      <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#0A1838", marginBottom: "14px", lineHeight: 1.25 }}>{m.title}</h3>
                      <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}>{m.desc}</p>
                      <Link href={m.link} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(2,172,234,0.3)", transition: "all 0.3s" }}>
                        Read More About {m.title.split(" ")[0]} <span>→</span>
                      </Link>
                    </div>
                    <div style={{ order: isEven ? 2 : 1, position: "relative" }}>
                      <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E0E8F5", boxShadow: "0 16px 40px rgba(10,24,56,0.1)" }}>
                        <img src={m.image} alt={m.title} style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. HUMAN-IN-THE-LOOP CALLOUT */}
      <section style={{ padding: "64px 0", background: "#FFFFFF" }}>
        <div className="site-container">
          <div style={{ maxWidth: "920px", margin: "0 auto", background: "#301A65", color: "#FFFFFF", padding: "40px", borderRadius: "24px", boxShadow: "0 16px 40px rgba(48,26,101,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px", color: "#02ACEA", textTransform: "uppercase", background: "rgba(2,172,234,0.15)", padding: "6px 14px", borderRadius: "20px" }}>
                Patient Safety First
              </span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#86EFAC", background: "rgba(22,163,74,0.3)", padding: "6px 14px", borderRadius: "20px" }}>
                🛡️ 100% Human-in-the-Loop Safeguard
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, marginBottom: "14px" }}>
              Assisted, Not Autonomous.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", lineHeight: 1.7, marginBottom: "0" }}>
              Ovotech organizes incoming documents, extracts facts, and proposes SNOMED CT codes. However, a trained human reviewer always inspects, amends, and approves the data. Absolutely no code is written to the patient record without a human clicking "Approve".
            </p>
          </div>
        </div>
      </section>

      {/* 8. ADVANTAGES */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Why It Matters</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              The Impact on Your Practice
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { icon: "⚡", title: "Faster Processing", desc: "Reduce document turnaround time drastically, ensuring patient records are updated within hours." },
              { icon: "🎯", title: "Consistent Coding", desc: "Eliminate human variation in coding, ensuring accurate QOF reporting and maximized practice income." },
              { icon: "🧘", title: "Reduced Admin Burden", desc: "Free up your clinical and admin staff from tedious manual data entry to focus on patient care." },
              { icon: "📊", title: "Complete Oversight", desc: "Dashboards provide real-time visibility into workload, helping you manage capacity and maintain CQC readiness." }
            ].map((adv, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "32px 24px", border: "1px solid #E0E8F5", transition: "transform 0.3s" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{adv.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1838", marginBottom: "10px" }}>{adv.title}</h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. THE COST OF NOT AUTOMATING */}
      <section style={{ padding: "90px 0", background: "#FFFFFF" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#E53E3E", textTransform: "uppercase" }}>The Risk of the Status Quo</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              What Happens When You Rely on Manual Processes?
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div style={{ background: "#FFF5F5", borderRadius: "24px", padding: "40px", border: "1px solid #FED7D7" }}>
              <div style={{ display: "inline-block", background: "#FEB2B2", color: "#9B2C2C", fontSize: "12px", fontWeight: 800, padding: "6px 16px", borderRadius: "20px", marginBottom: "20px" }}>
                The Risk of Manual Processing
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#9B2C2C", fontSize: "15px", lineHeight: 1.5, listStyle: "none", padding: 0 }}>
                <li style={{ display: "flex", gap: "10px" }}>❌ <span><strong>Backlog Buildup:</strong> High volume of letters leads to days or weeks of processing delays.</span></li>
                <li style={{ display: "flex", gap: "10px" }}>❌ <span><strong>Missed Diagnoses:</strong> Manual scanning makes it easy to overlook buried clinical facts.</span></li>
                <li style={{ display: "flex", gap: "10px" }}>❌ <span><strong>Staff Burnout:</strong> Repetitive administrative tasks drain staff morale and capacity.</span></li>
                <li style={{ display: "flex", gap: "10px" }}>❌ <span><strong>Compliance Risks:</strong> Poor visibility into unprocessed documents flags during CQC audits.</span></li>
              </ul>
            </div>
            <div style={{ background: "#F0FDF4", borderRadius: "24px", padding: "40px", border: "1px solid #BBF7D0", boxShadow: "0 16px 40px rgba(22,163,74,0.08)" }}>
              <div style={{ display: "inline-block", background: "#86EFAC", color: "#14532D", fontSize: "12px", fontWeight: 800, padding: "6px 16px", borderRadius: "20px", marginBottom: "20px" }}>
                Ovotech's Medical Coding Tool
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#15803D", fontSize: "15px", lineHeight: 1.5, listStyle: "none", padding: 0 }}>
                <li style={{ display: "flex", gap: "10px" }}>✅ <span><strong>Zero Backlog:</strong> Instant AI extraction keeps queues clear and manageable.</span></li>
                <li style={{ display: "flex", gap: "10px" }}>✅ <span><strong>Accurate Extraction:</strong> Facts and SNOMED codes are highlighted directly from the text.</span></li>
                <li style={{ display: "flex", gap: "10px" }}>✅ <span><strong>Empowered Staff:</strong> Reviewers simply verify suggestions, saving hours of manual labor.</span></li>
                <li style={{ display: "flex", gap: "10px" }}>✅ <span><strong>Audit Ready:</strong> Full dashboards provide oversight and track every action for compliance.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. MEDICAL-CODING-SPECIFIC FAQ */}
      <section style={{ padding: "90px 0", background: "#F4F7FC" }}>
        <div className="site-container" style={{ maxWidth: "880px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Common Questions</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>
              Medical Coding FAQs
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: "18px", padding: "28px 32px", border: "1px solid #E0E8F5" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1838", marginBottom: "10px" }}>{f.q}</h4>
                <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <Cta />
      <Footer />
    </>
  );
}
