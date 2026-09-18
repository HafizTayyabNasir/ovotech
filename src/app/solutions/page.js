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

const workflowSteps = [
  {
    id: "01",
    tag: "DOCUMENT INTAKE",
    title: "Clinical Correspondence Ingestion",
    desc: "Incoming hospital correspondence (clinic letters, discharge summaries) enters the Ovotech workflow from EHR feeds or document repositories.",
    image: "/step1-intake.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    id: "02",
    tag: "INFORMATION EXTRACTION",
    title: "Clinical Entity & Fact Parsing",
    desc: "AI engine parses the text to identify key clinical facts, patient identifiers, and suggests appropriate SNOMED CT codes.",
    image: "/step2-extraction.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  },
  {
    id: "03",
    tag: "REVIEW QUEUE",
    title: "Workload Review Queue Management",
    desc: "Documents land in the practice's prioritized, sorted review queue for efficient workload management and triage.",
    image: "/step1-intake.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    )
  },
  {
    id: "04",
    tag: "CLINICAL REVIEW",
    title: "Clinical Review & Patient History",
    desc: "Staff member opens the unified workspace to read the original document alongside the patient's existing active record for context.",
    image: "/step4-patient-history.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    )
  },
  {
    id: "05",
    tag: "HUMAN APPROVAL",
    title: "Authorised Reviewer Sign-Off",
    desc: "Staff member verifies, edits, and ultimately approves the suggested codes before any data is finalised.",
    image: "/step3-snomed.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    id: "06",
    tag: "SYSTEM INTEGRATION",
    title: "EMIS Web Structured Write-Back",
    desc: "Approved data is written directly to EMIS Web with a complete audit log, eliminating manual re-keying.",
    image: "/step5-emis-writeback.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  }
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];
  
  const [activeWorkflow, setActiveWorkflow] = useState(0);

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
      <section className="relative w-full overflow-hidden bg-[#FFFFFF] pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[100px]">
        {/* Subtle background decoration */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(138, 96, 229, 0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
            
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                {/* 2-line large headline */}
                <h1 className="text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.1] mb-8 tracking-tight">
                  <span style={{ color: "#02ACEA", display: "block" }}>Medical Coding</span>
                  <span style={{ color: "#0A1838", display: "block" }}>Handled End-to-End</span>
                </h1>

                {/* 2x2 Feature Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-10">
                  {/* Bullet 1 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[20px]">📋</span>
                      <h3 className="font-bold text-[#0A1838] text-[16px]">Review Queue</h3>
                    </div>
                    <p className="text-[#475569] text-[14px] leading-[1.5]">See what's pending, prioritise at a glance</p>
                  </div>
                  {/* Bullet 2 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[20px]">🔄</span>
                      <h3 className="font-bold text-[#0A1838] text-[16px]">EMIS Web Integrated</h3>
                    </div>
                    <p className="text-[#475569] text-[14px] leading-[1.5]">Structured write-back to your clinical system</p>
                  </div>
                  {/* Bullet 3 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[20px]">🛡️</span>
                      <h3 className="font-bold text-[#0A1838] text-[16px]">Human-in-the-Loop</h3>
                    </div>
                    <p className="text-[#475569] text-[14px] leading-[1.5]">Every code confirmed by a reviewer before filing</p>
                  </div>
                  {/* Bullet 4 */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[20px]">📊</span>
                      <h3 className="font-bold text-[#0A1838] text-[16px]">Full Visibility</h3>
                    </div>
                    <p className="text-[#475569] text-[14px] leading-[1.5]">Dashboard & impact tracking built in</p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <button 
                    onClick={() => {
                      const sections = document.querySelectorAll('section');
                      const target = Array.from(sections).find(s => s.textContent.includes('The 8-Step Medical Coding Flow'));
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="whitespace-nowrap"
                    style={{ background: "#02ACEA", color: "#FFFFFF", fontWeight: 700, padding: "14px 32px", borderRadius: "30px", boxShadow: "0 4px 14px rgba(2, 172, 234, 0.3)", transition: "all 0.3s", border: "2px solid #02ACEA" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#028bbd"; e.currentTarget.style.borderColor = "#028bbd"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#02ACEA"; e.currentTarget.style.borderColor = "#02ACEA"; }}
                  >
                    See How It Works
                  </button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:w-[55%]">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Col 1 */}
                  <div className="flex flex-col gap-4 flex-1">
                    {/* Top-Left */}
                    <div className="rounded-3xl p-7 flex flex-col justify-between shadow-xl" style={{ background: "linear-gradient(135deg, #301A65 0%, #3E2382 100%)", height: "180px" }}>
                      <div className="text-white">
                        <h4 className="font-bold text-[20px] xl:text-[22px] leading-[1.2] mb-2">Faster Coding<br/>Turnaround</h4>
                      </div>
                      <div className="flex items-end gap-2 h-8">
                        <div className="w-2.5 bg-[#02ACEA] rounded-t-sm" style={{ height: "40%" }}></div>
                        <div className="w-2.5 bg-[#02ACEA] rounded-t-sm" style={{ height: "70%" }}></div>
                        <div className="w-2.5 bg-[#02ACEA] rounded-t-sm" style={{ height: "100%" }}></div>
                      </div>
                    </div>
                    {/* Bottom-Left */}
                    <div className="rounded-3xl flex items-center justify-center shadow-xl p-8" style={{ background: "#301A65", height: "240px" }}>
                      <img src="/logo-footer.png" alt="Ovotech Logo" className="w-[140px] object-contain opacity-90" />
                    </div>
                  </div>
                  {/* Col 2 */}
                  <div className="flex flex-col gap-4 flex-[1.3]">
                    {/* Top-Right: Laptop mockup */}
                    <div className="rounded-3xl relative shadow-xl overflow-hidden border border-[#E0E8F5] bg-white flex flex-col" style={{ height: "280px" }}>
                      <div className="flex justify-between items-center px-4 py-2.5 bg-[#0F172A]">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                      </div>
                      <div className="relative flex-1 bg-[#F4F7FC]">
                        <img src="/clinical-workspace-review.png" alt="Clinical Review Workspace" className="w-full h-full object-cover object-top" />
                        <Link href="/solutions/clinical-review" className="absolute top-4 right-4 w-9 h-9 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#301A65" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    {/* Bottom-Right */}
                    <div className="rounded-3xl p-7 flex flex-col justify-center shadow-xl" style={{ background: "linear-gradient(135deg, #0A1838 0%, #1A2848 100%)", height: "140px" }}>
                      <h4 className="font-bold text-white text-[18px] xl:text-[20px] leading-[1.2] mb-3">Trusted by GP Teams<br/>Across the UK</h4>
                      <div className="flex gap-1 text-[#ffbd2e]">
                        {"★★★★★".split("").map((star, i) => <span key={i} className="text-[16px]">{star}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </div>
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

      {/* 6. WORKFLOW PREVIEW */}
      <section className="relative w-full overflow-hidden pt-[100px] pb-[100px]" style={{ background: "#301A65" }}>
        <ParticlesBackground color="#8A60E5" />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <span style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "#A594FF", fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "6px 20px", borderRadius: "30px", border: "1px solid rgba(165,148,255,0.2)", marginBottom: "20px" }}>
              Ovotech Workflow : How It Works
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#FFFFFF", maxWidth: "800px", lineHeight: 1.2, marginBottom: "16px" }}>
              From incoming document to verified EMIS record in seconds.
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
              Scroll to explore the 6-step clinical document workflow preview.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left side: Sticky Phone Mockup */}
            <div className="w-full lg:w-[40%] lg:sticky lg:top-[120px] flex justify-center">
              {/* Phone Mockup Frame */}
              <div className="relative w-full max-w-[340px] aspect-[9/19] rounded-[40px] border-[8px] border-[#2A185C] bg-[#0F172A] overflow-hidden shadow-2xl flex flex-col">
                 {/* Inner Header */}
                 <div className="flex items-center justify-between px-6 py-4 bg-[#3E2382]">
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                     <span className="text-white font-bold text-[11px] tracking-widest uppercase">Step {workflowSteps[activeWorkflow].id}</span>
                   </div>
                 </div>
                 {/* Inner Image */}
                 <div className="flex-1 relative bg-[#0F172A] p-2 flex flex-col items-center justify-center">
                   <motion.img 
                     key={activeWorkflow}
                     initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                     src={workflowSteps[activeWorkflow].image} 
                     alt={workflowSteps[activeWorkflow].title}
                     className="w-full object-cover rounded-xl border border-white/10"
                   />
                 </div>
              </div>
            </div>

            {/* Right side: Steps List */}
            <div className="w-full lg:w-[60%] flex flex-col gap-4">
              {workflowSteps.map((step, idx) => {
                const isActive = activeWorkflow === idx;
                return (
                  <div 
                    key={step.id}
                    onClick={() => setActiveWorkflow(idx)}
                    className="cursor-pointer transition-all duration-300 rounded-2xl"
                    style={{
                      background: isActive ? "#FFFFFF" : "rgba(255,255,255,0.03)",
                      border: isActive ? "1px solid #FFFFFF" : "1px solid rgba(255,255,255,0.1)",
                      padding: isActive ? "32px" : "24px 32px",
                      transform: isActive ? "scale(1.02)" : "scale(1)",
                      boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.2)" : "none"
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div style={{ color: isActive ? "#301A65" : "#A594FF" }}>
                          {step.icon}
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", color: isActive ? "#301A65" : "#A594FF" }}>
                          {step.tag}
                        </span>
                      </div>
                      <span style={{ fontSize: "20px", fontWeight: 800, color: isActive ? "#301A65" : "rgba(255,255,255,0.2)" }}>
                        {step.id}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "22px", fontWeight: 800, color: isActive ? "#0A1838" : "#FFFFFF", marginBottom: isActive ? "12px" : "0" }}>
                      {step.title}
                    </h3>
                    {isActive && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                        style={{ fontSize: "15px", color: "#475569", lineHeight: 1.6 }}
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </div>
                );
              })}
            </div>
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
