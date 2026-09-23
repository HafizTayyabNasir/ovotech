"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveWorkflowShowcaseThird from "@/components/InteractiveWorkflowShowcaseThird";


const workflowSteps = [
  { num: "01", title: "Clinical overview", desc: "Start with the clinical review summary.", expandedDesc: "Start with the clinical review summary to see incoming documents, processing status and items awaiting review.", image: "/clinical-overview.png" },
  { num: "02", title: "Review queue", desc: "Open the Review Queue to find the document.", expandedDesc: "Open the Review Queue to find and prioritise the document that needs attention. Select Review to open its clinical review.", image: "/review-queue.png" },
  { num: "03", title: "Understand the case", desc: "Understand the case and context.", expandedDesc: "Review the document summary, extracted information and available patient context before deciding on coding.", image: "/clinical-review-2.png" },
  { num: "04", title: "Understand patient context", desc: "See patient timeline and context.", expandedDesc: "Open Patient History from the clinical review to see the platform's available patient timeline, active conditions and medication context. Return to the review when ready.", image: "/patient-history.png" },
  { num: "05", title: "Coding review", desc: "Assess each suggested SNOMED CT code.", expandedDesc: "Back in Clinical Review, assess each suggested SNOMED CT code and its confidence and evidence; accept, reject or add a code as appropriate. Complete the authorised review before any record update.", image: "/clinical-review-3.png" },
  { num: "06", title: "Reviewed documents", desc: "Check completed reviews and status.", expandedDesc: "Use Reviewed Documents to check completed reviews, decisions and the displayed clinical record update status.", image: "/reviewed-documents.png" }
];

export default function ThirdPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Business Value Calculator State
  const [volume, setVolume] = useState(2847);
  const [manualTime, setManualTime] = useState(6);
  const [turnaround, setTurnaround] = useState(24);
  const [hourlyRate, setHourlyRate] = useState(25);

  const ovotechHandlingTime = 2.12;
  const ovotechTurnaround = 17.8;

  const hoursReleased = volume * (manualTime - ovotechHandlingTime) / 60;
  const costImpact = hoursReleased * hourlyRate;
  const turnaroundDiff = turnaround - ovotechTurnaround;

  return (
    <>
      <TopBar />
      <Navbar />
      
      {/* SECTION 1 — HERO */}
      <section className="relative w-full overflow-hidden bg-[#FFFFFF] pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[100px]">
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(2, 172, 234, 0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-block py-1 px-3 rounded-full bg-white border border-[#E0E8F5] text-[13px] font-black tracking-[2px] text-[#019EE1] uppercase mb-6 shadow-sm">
                  Medical Coding
                </span>
                <h1 className="text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.1] mb-6 tracking-tight text-[#0A1838]">
                  Clinical correspondence. <span className="text-[#02ACEA] italic">Clearer decisions.</span>
                </h1>
                <h2 className="text-[20px] font-semibold text-[#0A1838] mb-4 leading-snug">
                  AI-assisted extraction and SNOMED coding, with review and automation shaped around your practice.
                </h2>
                <p className="text-[#475569] text-[16px] leading-[1.6] mb-8">
                  Turn incoming letters into structured information, review suggested codes and keep correspondence moving. One connected workspace for UK general practice.
                </p>

                <div className="flex items-center gap-4 mb-10 flex-wrap">
                  <div className="flex items-center gap-2 bg-[#F4F7FC] px-4 py-2 rounded-full text-[14px] font-semibold text-[#0A1838] border border-[#E0E8F5]">
                    🛡️ Built for UK General Practice
                  </div>
                  <div className="flex items-center gap-2 bg-[#F4F7FC] px-4 py-2 rounded-full text-[14px] font-semibold text-[#0A1838] border border-[#E0E8F5]">
                    ⚙️ Practice-controlled workflows
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/contact" className="whitespace-nowrap bg-gradient-to-r from-[#02ACEA] to-[#019EE1] text-white font-extrabold px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.4)] border border-[#02ACEA] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(2,172,234,0.6)] hover:-translate-y-1 hover:scale-105">
                    Request a Demo
                  </Link>
                  <button onClick={() => document.getElementById('workflow').scrollIntoView({ behavior: 'smooth' })} className="whitespace-nowrap bg-transparent text-[#0A1838] font-bold px-8 py-3.5 rounded-full border-2 border-[#E0E8F5] transition-all duration-300 hover:bg-[#F4F7FC] hover:-translate-y-1 hover:shadow-md">
                    Explore the workflow
                  </button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN - Product UI Mockup */}
            <div className="w-full lg:w-[55%] relative">
              
              {/* Soft Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,rgba(2,172,234,0.1)_0%,transparent_60%)] -z-10 rounded-full blur-3xl" />

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full">
                
                {/* Product Mockup Container */}
                <div className="bg-white rounded-[24px] shadow-[0_20px_60px_rgba(10,24,56,0.08)] border border-[#E0E8F5] overflow-hidden flex flex-col relative z-10">
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-center px-6 py-4 border-b border-[#F1F5F9]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                      <span className="text-[10px] font-bold tracking-widest text-[#64748B] uppercase">Ovotech 2.0 - Clinical Review</span>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">Fictional Product View</span>
                  </div>

                  {/* Header Area */}
                  <div className="px-8 pt-8 pb-6 border-b border-[#F1F5F9] relative">
                    <span className="text-[11px] font-bold tracking-widest text-[#02ACEA] uppercase mb-2 block">Reviewing</span>
                    <div className="flex justify-between items-end">
                      <h2 className="text-[28px] font-extrabold text-[#0A1838] leading-none">Discharge summary</h2>
                      <span className="bg-[#FFF8E6] text-[#D97706] text-[11px] font-bold px-3 py-1 rounded-md border border-[#FDE68A]">Human review</span>
                    </div>
                  </div>

                  {/* Main Content Split */}
                  <div className="flex flex-col sm:flex-row border-b border-[#F1F5F9]">
                    {/* Left Side: Source */}
                    <div className="flex-1 p-8 sm:border-r border-[#F1F5F9]">
                      <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase mb-4 block">Source Correspondence</span>
                      <h3 className="text-[16px] font-bold text-[#0A1838] mb-1">Riverside Medical Practice</h3>
                      <p className="text-[#64748B] text-[12px] mb-8">Patient ref: SAMPLE-042</p>

                      <p className="text-[#334155] text-[14px] leading-[1.8]">
                        Patient has a history of <span className="bg-[#E0F2FE] text-[#0369A1] font-semibold px-1 rounded inline-block mx-0.5">type 2 diabetes</span>. Continue review with the practice team.
                      </p>
                    </div>
                    
                    {/* Right Side: SNOMED */}
                    <div className="flex-1 p-8">
                      <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase mb-4 block">SNOMED CT Suggestion</span>
                      <h3 className="text-[16px] font-bold text-[#0A1838] mb-1">Type 2 diabetes mellitus</h3>
                      <p className="text-[#02ACEA] text-[13px] mb-6">44054006</p>

                      <div className="bg-[#F8FAFC] border border-[#E0E8F5] rounded-lg p-4 mb-6">
                        <p className="text-[#475569] text-[13px] italic">"history of type 2 diabetes"</p>
                      </div>

                      <div className="flex gap-3">
                        <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[13px] font-bold px-5 py-2.5 rounded shadow-sm transition-colors">
                          Accept
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-[#334155] border border-[#CBD5E1] text-[13px] font-bold px-5 py-2.5 rounded shadow-sm transition-colors">
                          Amend
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Stepper Footer */}
                  <div className="px-8 py-6">
                    <div className="relative flex justify-between items-center w-full max-w-lg mx-auto">
                      {/* Connecting Line */}
                      <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-[#E2E8F0] -translate-y-1/2 z-0">
                        <div className="h-full bg-[#3B82F6] w-[75%]"></div>
                      </div>
                      
                      {[
                        { label: 'Received', status: 'done' },
                        { label: 'Extracted', status: 'done' },
                        { label: 'Coded', status: 'done' },
                        { label: 'Reviewed', status: 'done' },
                        { label: 'Approved', status: 'current' },
                        { label: 'Posted', status: 'pending' },
                      ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                          <div className={`w-3 h-3 rounded-full flex items-center justify-center
                            ${step.status === 'done' ? 'bg-[#3B82F6]' : step.status === 'current' ? 'bg-white border-2 border-[#3B82F6]' : 'bg-white border-2 border-[#CBD5E1]'}
                          `}></div>
                          <span className={`text-[9px] font-bold tracking-wide uppercase ${step.status === 'pending' ? 'text-[#94A3B8]' : 'text-[#3B82F6]'}`}>{step.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Blue Disclaimer Banner */}
                  <div className="bg-[#334155] px-6 py-3 flex items-center gap-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span className="text-[11px] text-white/90">Manual review shown. Automation follows your practice's configured policy.</span>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE OVOTECH WORKFLOW */}
      <section id="workflow" className="py-20 bg-[#F4F7FC]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">The Ovotech Workflow</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">One controlled process from correspondence to record.</h2>
            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">Each stage stays visible, with evidence and responsibility carried forward from the original document to the reviewed patient record.</p>
          </div>
          
                    <div className="flex flex-col gap-10 max-w-5xl mx-auto w-full">
            {/* Horizontal Timeline */}
            <div className="relative flex justify-between items-start w-full px-2 mt-4 mb-8">
              {/* Background Line */}
              <div className="absolute left-[32px] right-[32px] top-6 h-[2px] bg-[#E0E8F5] z-0">
                {/* Progress Line */}
                <div className="h-full bg-[#02ACEA] transition-all duration-500" style={{ width: `${(activeAccordion / 5) * 100}%` }}></div>
              </div>
              
              {workflowSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group w-16 relative" onClick={() => setActiveAccordion(i)}>
                  {/* Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[15px] transition-all duration-300 z-10 ${activeAccordion === i ? 'bg-[#02ACEA] text-white shadow-lg scale-110 ring-4 ring-blue-100' : activeAccordion > i ? 'bg-[#02ACEA] text-white' : 'bg-white text-[#0A1838] border-2 border-[#E0E8F5] group-hover:border-[#02ACEA]'}`}>
                     {step.num}
                  </div>
                  {/* Title underneath */}
                  <span className={`text-[12px] font-bold text-center leading-tight transition-colors duration-300 absolute top-14 w-20 ${activeAccordion === i ? 'text-[#0A1838]' : 'text-[#64748B] group-hover:text-[#0A1838]'}`}>{step.title}</span>
                </div>
              ))}
            </div>

            {/* Active Content Area */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div 
                    key={activeAccordion}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-[#E0E8F5] shadow-lg p-6 lg:p-10"
                  >
                    <div className="mb-8 text-center max-w-3xl mx-auto">
                      <h3 className="text-[24px] font-extrabold text-[#0A1838] mb-3">
                        {workflowSteps[activeAccordion].title}
                      </h3>
                      <p className="text-[18px] text-[#02ACEA] font-bold mb-4">
                        {workflowSteps[activeAccordion].desc}
                      </p>
                      <p className="text-[#475569] text-[15px] leading-relaxed">
                        {workflowSteps[activeAccordion].expandedDesc}
                      </p>
                    </div>
                    
                    {/* Browser-like Image Frame */}
                    <div className="bg-white rounded-xl shadow-md border border-[#E0E8F5] overflow-hidden max-w-4xl mx-auto">
                      <div className="bg-[#F4F7FC] px-4 py-3 border-b border-[#E0E8F5] flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <img 
                        src={
                          workflowSteps[activeAccordion].image
                        } 
                        alt="Screenshot" 
                        className="w-full h-auto block" 
                      />
                    </div>
                  </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="text-center text-[12px] text-[#64748B]">
            Current clinical-system scope: clinical record system. Integration availability and deployment readiness are confirmed during evaluation.
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW SHOWCASE (from Homepage) */}
      <InteractiveWorkflowShowcaseThird />

      {/* SECTION 4 — FOR PRACTICE MANAGERS */}
      

      {/* SECTION 7 — THE PROBLEM (before/after) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">The Problem</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Clinical correspondence creates more work than it should.</h2>
            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">Teams often move between documents, patient records and coding tools to find context, structure information and decide what belongs in the record.</p>
          </div>

          <div className="relative mb-12 bg-white border border-[#E0E8F5] rounded-3xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Left Side: Without connected process */}
              <div className="flex-1 bg-[#FFF5F5] p-10 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
                  <path d="M 0,20 Q 50,150 100,50 T 200,80 T 300,20 T 400,100 T 500,50" stroke="#9B2C2C" strokeWidth="4" fill="none" />
                  <path d="M 0,80 Q 80,10 150,100 T 250,50 T 350,120 T 500,80" stroke="#9B2C2C" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                </svg>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-extrabold text-[#9B2C2C] mb-6">Without a connected process</h3>
                  <ul className="space-y-5 text-[#9B2C2C] font-medium text-[16px]">
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">01</div> Open and read each document</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">02</div> Search for relevant patient context</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">03</div> Re-enter clinical information</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">04</div> Find and verify suitable codes</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">05</div> Track approval and posting separately</li>
                  </ul>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-full md:w-4 bg-gradient-to-b from-[#9B2C2C] to-[#0369A1] flex items-center justify-center relative">
                <div className="absolute w-10 h-10 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center z-20 font-bold text-gray-500 transform md:-rotate-90 text-[12px]">VS</div>
              </div>
              
              {/* Right Side: With Ovotech */}
              <div className="flex-1 bg-[#F0F9FF] p-10 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0369A1" strokeWidth="8" strokeLinecap="round" />
                  <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#0369A1" strokeWidth="2" strokeDasharray="10,10" />
                  <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#0369A1" strokeWidth="2" strokeDasharray="10,10" />
                </svg>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-extrabold text-[#0369A1] mb-6">With Ovotech</h3>
                  <ul className="space-y-5 text-[#0369A1] font-medium text-[16px]">
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-[#0369A1] shrink-0">✓</div> Correspondence enters one visible queue</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-[#0369A1] shrink-0">✓</div> Relevant information is structured</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-[#0369A1] shrink-0">✓</div> Suggestions include source evidence</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-[#0369A1] shrink-0">✓</div> People review, amend and approve</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-[#0369A1] shrink-0">✓</div> The outcome and write-back remain traceable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block bg-[#F8FAFC] border border-[#E0E8F5] rounded-xl p-4 font-bold text-[#0A1838] text-[14px] md:text-[16px] mb-6 shadow-sm">
              Document extraction <span className="text-[#02ACEA] mx-2">+</span> 
              Clinical structuring <span className="text-[#02ACEA] mx-2">+</span> 
              SNOMED suggestions <span className="text-[#02ACEA] mx-2">+</span> 
              Human review <span className="text-[#02ACEA] mx-2">+</span> 
              Patient record updated
            </div>
            <p className="text-[#0A1838] font-bold text-[18px]">More than document extraction. One connected Ovotech process.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PATIENT HISTORY */}
      <section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Patient History</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Review correspondence with patient context.</h2>
            <p className="text-[#475569] text-[16px] mb-4">Coding decisions should not happen in isolation. See a timeline and summary from correspondence already processed through Ovotech. Keep the source document close while checking previous findings and coding decisions.</p>
            <p className="text-[#475569] text-[16px] font-medium bg-[#F4F7FC] p-4 rounded-xl border border-[#E0E8F5]">This is platform history, not the patient's complete GP record.</p>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E0E8F5] p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6 border-b border-[#E0E8F5] pb-4">
                <div>
                  <h3 className="font-bold text-[#0A1838] text-[16px]">Sarah Thompson — SAMPLE-042</h3>
                  <div className="text-[12px] text-[#64748B] mt-1">Fictional record — Review in progress</div>
                </div>
              </div>
              
              <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar pb-2">
                <div className="bg-white border border-[#E0E8F5] rounded-xl p-3 min-w-[140px] shadow-sm">
                  <div className="text-[10px] font-bold text-[#64748B] uppercase mb-1">Platform history</div>
                  <div className="text-[14px] font-bold text-[#0A1838]">Type 2 diabetes</div>
                </div>
                <div className="bg-white border border-[#E0E8F5] rounded-xl p-3 min-w-[140px] shadow-sm">
                  <div className="text-[10px] font-bold text-[#64748B] uppercase mb-1">Medication</div>
                  <div className="text-[14px] font-bold text-[#0A1838]">Metformin</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 min-w-[140px] shadow-sm">
                  <div className="text-[10px] font-bold text-blue-800 uppercase mb-1">Current document</div>
                  <div className="text-[14px] font-bold text-[#0A1838]">Discharge summary</div>
                  <div className="text-[11px] text-blue-600 mt-1">Today, 09:38</div>
                </div>
              </div>
              
              <div className="w-full relative py-12 px-6">
                <div className="absolute top-[50%] left-0 right-0 h-1 bg-gray-200"></div>
                <div className="flex justify-between items-center relative z-10 gap-4">
                  <div className="flex-1 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                    <div className="text-[14px] font-bold text-[#0A1838] text-center mb-1">Metformin continued</div>
                    <div className="text-[12px] font-bold text-[#64748B] mb-4">8 months ago</div>
                    <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white shadow"></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                    <div className="text-[14px] font-bold text-[#0A1838] text-center mb-1">Diabetes review recorded</div>
                    <div className="text-[12px] font-bold text-[#64748B] mb-4">3 months ago</div>
                    <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white shadow"></div>
                    <div className="text-[11px] text-[#475569] mt-4 italic text-center bg-gray-50 px-2 py-1 rounded">Source correspondence retained for context</div>
                  </div>

                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#02ACEA] border-2 border-white shadow mb-4"></div>
                    <div className="text-[12px] font-bold text-[#02ACEA] mb-1">Today</div>
                    <div className="text-[14px] font-bold text-[#0A1838] text-center mb-1">Suggested coding requires review</div>
                    <div className="text-[12px] text-[#475569] text-center bg-blue-50 p-2 rounded border border-blue-100">Type 2 diabetes mellitus<br/>SNOMED CT 44054006</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-[11px] text-[#94A3B8]">
                Historical information is not automatically treated as current coding.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — ROLE-BASED EXPERIENCE */}
      <section className="py-24 bg-[#0A1838] relative overflow-hidden">
        <div style={{ position: "absolute", top: "0%", left: "0%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(2, 172, 234, 0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Role-Based Experience</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-white mt-2 mb-4">The right information for the right role.</h2>
            <p className="text-gray-300 text-[16px] max-w-2xl mx-auto">Access follows responsibility. Each person sees the information and actions needed for their work.</p>
          </div>
          
          <div className="max-w-4xl mx-auto w-full">
            {/* Custom Toggle Switch */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#112146] border border-[#2A3858] p-1 rounded-full inline-flex relative w-[400px]">
                <div className={`absolute top-1 bottom-1 w-[195px] bg-[#02ACEA] rounded-full transition-all duration-300 shadow-lg ${activeTab === 0 ? 'translate-x-0 opacity-100' : activeTab === 1 ? 'translate-x-[195px] opacity-100' : 'opacity-0'}`}></div>
                <button onClick={() => setActiveTab(activeTab === 0 ? -1 : 0)} className={`flex-1 relative z-10 py-3 text-center text-[14px] font-extrabold rounded-full transition-all duration-300 ${activeTab === 0 ? 'text-white' : 'text-[#02ACEA] hover:text-white'}`}>
                  Medical Coder / Clinical Reviewer
                </button>
                <button onClick={() => setActiveTab(activeTab === 1 ? -1 : 1)} className={`flex-1 relative z-10 py-3 text-center text-[14px] font-extrabold rounded-full transition-all duration-300 ${activeTab === 1 ? 'text-white' : 'text-[#02ACEA] hover:text-white'}`}>
                  Practice Admin
                </button>
              </div>
            </div>

            <div className={`bg-[#112146] rounded-3xl border-[#2A3858] shadow-2xl overflow-hidden relative transition-all duration-500 ${activeTab === -1 ? 'h-0 opacity-0 border-0' : 'opacity-100 border'}`}>
               {activeTab === 0 && (
                  <div className="p-6 lg:p-10 animate-fade-in border-l-4 border-l-[#02ACEA] bg-[#F4F7FC]">
                    <div className="max-w-[1350px] mx-auto">
                      <div className="text-center mb-12">
                        <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">For Medical Coders</span>
                        <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Your workflow. Streamlined and focused.</h2>
                        <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">Focus on the documents that need your clinical expertise. Access patient context, extracted data and evidence-backed coding suggestions instantly.</p>
                      </div>

                      <div className="bg-white rounded-3xl border border-[#E0E8F5] shadow-lg p-6 lg:p-10 mb-8">
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E0E8F5]">
                          <h3 className="text-[18px] font-extrabold text-[#0A1838]">Coder Workspace — Alex Morgan</h3>
                          <span className="text-[12px] font-bold text-[#64748B] bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">Fictional demonstration</span>
                        </div>
                        
                        <div className="flex flex-col gap-6">
                          {/* Radial & Bar Gauges */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-[#F8FAFC] rounded-xl border border-[#E0E8F5] p-6 flex items-center justify-around">
                              <div className="text-center">
                                <div className="w-24 h-24 rounded-full border-[6px] border-[#02ACEA] flex items-center justify-center mb-3 mx-auto shadow-sm">
                                  <span className="text-[24px] font-extrabold text-[#0A1838]">12</span>
                                </div>
                                <div className="text-[12px] font-bold text-[#64748B]">My Queue</div>
                                <div className="text-[10px] text-[#94A3B8]">items awaiting review</div>
                              </div>
                              <div className="text-center">
                                <div className="w-24 h-24 rounded-full border-[6px] border-green-500 flex items-center justify-center mb-3 mx-auto shadow-sm">
                                  <span className="text-[24px] font-extrabold text-[#0A1838]">48</span>
                                </div>
                                <div className="text-[12px] font-bold text-[#64748B]">Completed Today</div>
                                <div className="text-[10px] text-[#94A3B8]">coded and approved</div>
                              </div>
                            </div>
                            
                            <div className="bg-[#F8FAFC] rounded-xl border border-[#E0E8F5] p-6 flex flex-col justify-center gap-4">
                              <div>
                                <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                                  <span>High Priority (Urgent referrals, 2WW)</span>
                                  <span className="text-red-600">3</span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[25%]"></div></div>
                              </div>
                              <div>
                                <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                                  <span>Routine Correspondence</span>
                                  <span className="text-[#0A1838]">9</span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-[#02ACEA] h-full w-[75%]"></div></div>
                              </div>
                              <div>
                                <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                                  <span>Pending Clarification</span>
                                  <span className="text-orange-600">1</span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-orange-500 h-full w-[10%]"></div></div>
                              </div>
                            </div>
                          </div>

                          {/* Coding view snapshot */}
                          <div className="bg-[#0A1838] rounded-xl border border-[#E0E8F5] overflow-hidden shadow-sm mt-4">
                             <div className="flex border-b border-[#2A3858] bg-[#0A1838]">
                               <div className="px-6 py-3 text-[#02ACEA] text-[13px] font-bold border-b-2 border-[#02ACEA]">Next Item in Queue</div>
                               <div className="px-6 py-3 text-white text-[13px] font-bold border-r border-[#2A3858]">Recent Activity Log</div>
                             </div>
                             <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                  <div className="text-[11px] font-bold text-[#64748B] mb-2 uppercase tracking-wider">Source Document Extract</div>
                                  <div className="bg-[#F8FAFC] p-4 rounded-lg border border-[#E0E8F5] text-[13px] text-[#475569] leading-relaxed">
                                    "...patient presented with <span className="bg-yellow-100 text-yellow-800 px-1 rounded font-medium border border-yellow-200">acute exacerbation of asthma</span>. Prescribed <span className="bg-blue-50 text-[#02ACEA] px-1 rounded font-medium border border-blue-100">Salbutamol 100mcg inhaler</span> and advised to return if symptoms worsen..."
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[11px] font-bold text-[#64748B] mb-2 uppercase tracking-wider">Suggested SNOMED Codes</div>
                                  <div className="space-y-3">
                                     <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-200">
                                       <div>
                                         <div className="text-[13px] font-bold text-green-900">Acute exacerbation of asthma</div>
                                         <div className="text-[11px] text-green-700">Code: 391133003</div>
                                       </div>
                                       <div className="bg-[#166534] text-white px-3 py-1 rounded-full text-[11px] font-bold cursor-pointer hover:bg-green-700 transition-colors">Approve</div>
                                     </div>
                                     <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-200">
                                       <div>
                                         <div className="text-[13px] font-bold text-green-900">Salbutamol 100mcg inhaler</div>
                                         <div className="text-[11px] text-green-700">Code: 320000009</div>
                                       </div>
                                       <div className="bg-[#166534] text-white px-3 py-1 rounded-full text-[11px] font-bold cursor-pointer hover:bg-green-700 transition-colors">Approve</div>
                                     </div>
                                  </div>
                                </div>
                             </div>
                          </div>
                          
                        </div>
                        
                        <div className="text-center text-[11px] text-[#94A3B8] max-w-4xl mx-auto mt-6">
                          Illustrative workspace with fictional metrics and clinical data, not a live product screenshot. The actual coding interface provides full document viewing, patient history timelines and comprehensive search capabilities.
                        </div>
                      </div>
                    </div>
                  </div>
               )}
               {activeTab === 1 && (
                  <div className="p-6 lg:p-10 animate-fade-in border-l-4 border-l-[#02ACEA] bg-[#F4F7FC]">
                    <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">For Practice Managers</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Your practice. In one clear view.</h2>
            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">See the work arriving, the queue moving and the pressure on your team. Bring practice activity and estimated impact into one clear operational view.</p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E0E8F5] shadow-lg p-6 lg:p-10 mb-8">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E0E8F5]">
              <h3 className="text-[18px] font-extrabold text-[#0A1838]">Riverside Practice — September</h3>
              <span className="text-[12px] font-bold text-[#64748B] bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">Fictional demonstration</span>
            </div>
<div className="flex flex-col gap-6 mb-8">
              {/* Radial & Bar Gauges */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#F8FAFC] rounded-xl border border-[#E0E8F5] p-6 flex items-center justify-around">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full border-[6px] border-[#02ACEA] flex items-center justify-center mb-3 mx-auto">
                      <span className="text-[20px] font-extrabold text-[#0A1838]">2,847</span>
                    </div>
                    <div className="text-[12px] font-bold text-[#64748B]">Documents received</div>
                    <div className="text-[10px] text-[#94A3B8]">this month</div>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full border-[6px] border-green-500 flex items-center justify-center mb-3 mx-auto">
                      <span className="text-[20px] font-extrabold text-[#0A1838]">2,823</span>
                    </div>
                    <div className="text-[12px] font-bold text-[#64748B]">Processing volume</div>
                    <div className="text-[10px] text-[#94A3B8]">completed this month</div>
                  </div>
                </div>
                
                <div className="bg-[#F8FAFC] rounded-xl border border-[#E0E8F5] p-6 flex flex-col justify-center gap-4">
                  <div>
                    <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                      <span>Awaiting review (across the team)</span>
                      <span className="text-[#0A1838]">24</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-blue-500 h-full w-[24%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                      <span>Overdue items (beyond threshold)</span>
                      <span className="text-red-600">6</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[10%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                      <span>Write-back exceptions (require attention)</span>
                      <span className="text-orange-600">3</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-orange-500 h-full w-[5%]"></div></div>
                  </div>
                </div>
              </div>

              {/* Value and Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="flex flex-col justify-center bg-green-50 rounded-xl border border-green-200 p-6">
                   <div className="mb-4">
                    <div className="text-[12px] font-bold text-[#0369A1] mb-1">Average turnaround</div>
                    <div className="text-[24px] font-extrabold text-green-700">17.8 hrs</div>
                    <div className="text-[11px] text-green-600">from receipt to completion</div>
                   </div>
                   <div className="mb-4">
                    <div className="text-[12px] font-bold text-[#0369A1] mb-1">Estimated hours released</div>
                    <div className="text-[24px] font-extrabold text-green-700">184 hrs</div>
                    <div className="text-[11px] text-green-600">against manual baseline</div>
                   </div>
                   <div>
                    <div className="text-[12px] font-bold text-[#0369A1] mb-1">Estimated cost impact</div>
                    <div className="text-[24px] font-extrabold text-green-700">£4,603</div>
                    <div className="text-[11px] text-green-600">staff time equivalent</div>
                   </div>
                </div>
                
                {/* Changed trend charts to Area Charts in SVG */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl border border-[#E0E8F5] p-5">
                  <div className="flex flex-col">
                    <h4 className="text-[14px] font-bold text-[#0A1838] mb-4">Backlog trend <span className="text-[11px] font-normal text-[#64748B]">(open documents, weekly)</span></h4>
                    <div className="flex-1 relative border-b border-l border-gray-200 h-32">
                       <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full absolute bottom-0">
                          <polygon points="0,100 0,36 33,49 66,58 100,76 100,100" fill="rgba(2, 172, 234, 0.2)" />
                          <polyline points="0,36 33,49 66,58 100,76" fill="none" stroke="#02ACEA" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                          <circle cx="0" cy="36" r="3" fill="#02ACEA" />
                          <circle cx="33" cy="49" r="3" fill="#02ACEA" />
                          <circle cx="66" cy="58" r="3" fill="#02ACEA" />
                          <circle cx="100" cy="76" r="3" fill="#02ACEA" />
                       </svg>
                       <div className="absolute top-1 left-2 text-[11px] font-bold text-blue-900">64</div>
                       <div className="absolute top-4 left-[33%] text-[11px] font-bold text-blue-900">51</div>
                       <div className="absolute top-6 left-[66%] text-[11px] font-bold text-blue-900">42</div>
                       <div className="absolute top-10 right-2 text-[11px] font-bold text-blue-900">24</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[14px] font-bold text-[#0A1838] mb-4">Processing volume trend <span className="text-[11px] font-normal text-[#64748B]">(completed, weekly)</span></h4>
                    <div className="flex-1 relative border-b border-l border-gray-200 h-32">
                       <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full absolute bottom-0">
                          <polygon points="0,100 0,24 33,15 66,9 100,0 100,100" fill="rgba(34, 197, 94, 0.2)" />
                          <polyline points="0,24 33,15 66,9 100,0" fill="none" stroke="#22C55E" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                          <circle cx="0" cy="24" r="3" fill="#22C55E" />
                          <circle cx="33" cy="15" r="3" fill="#22C55E" />
                          <circle cx="66" cy="9" r="3" fill="#22C55E" />
                          <circle cx="100" cy="0" r="3" fill="#22C55E" />
                       </svg>
                       <div className="absolute bottom-[24%] left-2 text-[11px] font-bold text-green-900 bg-white/50 px-1">612</div>
                       <div className="absolute bottom-[33%] left-[33%] text-[11px] font-bold text-green-900 bg-white/50 px-1">680</div>
                       <div className="absolute bottom-[66%] left-[66%] text-[11px] font-bold text-green-900 bg-white/50 px-1">731</div>
                       <div className="absolute top-1 right-2 text-[11px] font-bold text-green-900 bg-white/50 px-1">800</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-[#E0E8F5] p-5 flex flex-col justify-center">
                  <h4 className="text-[14px] font-bold text-[#0A1838] mb-4">Coder workload distribution</h4>
                  <div className="flex items-center gap-4 text-[13px] mb-3"><div className="w-24 text-[#475569]">Jamie Davies</div><div className="flex-1 bg-gray-100 rounded-full h-3"><div className="bg-[#02ACEA] h-3 rounded-full" style={{width: "41%"}}></div></div><div className="font-bold w-4">10</div></div>
                  <div className="flex items-center gap-4 text-[13px] mb-3"><div className="w-24 text-[#475569]">Alex Morgan</div><div className="flex-1 bg-gray-100 rounded-full h-3"><div className="bg-blue-400 h-3 rounded-full" style={{width: "33%"}}></div></div><div className="font-bold w-4">8</div></div>
                  <div className="flex items-center gap-4 text-[13px]"><div className="w-24 text-[#475569]">Sam Patel</div><div className="flex-1 bg-gray-100 rounded-full h-3"><div className="bg-blue-300 h-3 rounded-full" style={{width: "25%"}}></div></div><div className="font-bold w-4">6</div></div>
                </div>
                <div className="bg-white rounded-xl border border-[#E0E8F5] p-5 flex flex-col justify-center">
                  <h4 className="text-[14px] font-bold text-[#0A1838] mb-4">Workload by status</h4>
                  <div className="flex h-12 rounded-lg overflow-hidden text-[12px] font-bold text-white shadow-sm border border-gray-100">
                    <div className="bg-green-500 flex items-center justify-center flex-[14]">Ready (14)</div>
                    <div className="bg-blue-500 flex items-center justify-center flex-[7]">Review (7)</div>
                    <div className="bg-red-500 flex items-center justify-center flex-[3]">Attn (3)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center text-[12px] font-bold text-[#0A1838] mb-6">
              <span className="bg-[#F4F7FC] px-4 py-2 rounded-full border border-[#E0E8F5]">Track volume and backlog</span>
              <span className="bg-[#F4F7FC] px-4 py-2 rounded-full border border-[#E0E8F5]">Balance team workloads</span>
              <span className="bg-[#F4F7FC] px-4 py-2 rounded-full border border-[#E0E8F5]">Compare turnaround with your baseline</span>
            </div>

            <div className="text-center text-[11px] text-[#94A3B8] max-w-4xl mx-auto">
              Practice oversight is distinct from platform administration. Access to clinical content requires the relevant permission.<br/>
              Illustrative dashboard with fictional metrics, not a live product screenshot. Available reporting depends on role and deployment. Impact compares a 6-minute manual baseline with 2.12 minutes of example handling time per document, including human review, at £25 per hour. Staff time equivalent is not a cash saving.
            </div>
          </div>
        </div>
                  </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — EXCEPTIONS & AUDITABILITY */}
      <section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-12 w-full">
            {/* Audit Trail Vertical Timeline */}
            <div className="bg-gradient-to-b from-white to-[#F8FAFC] rounded-2xl border border-[#E0E8F5] p-6 lg:p-10 shadow-lg flex flex-col relative overflow-hidden">
              {/* Decorative background blurs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-40 transform -translate-x-1/2 translate-y-1/2"></div>

              <h3 className="font-extrabold text-[#0A1838] text-[20px] mb-1 relative z-10">Activity and Audit trail: See what happened, when and by whom.</h3>
              <div className="text-[14px] text-[#64748B] mb-12 pb-4 border-b border-[#E0E8F5] relative z-10">DEMO-107</div>
              
              <div className="w-full relative mx-auto max-w-3xl py-4 z-10">
                {/* Vibrant Gradient Central Vertical Line */}
                <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-[3px] bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 transform md:-translate-x-1/2 rounded-full"></div>
                
                <div className="flex flex-col gap-8 relative z-10">
                  {[
                    { time: "09:41", action: "Correspondence received", actor: "System", align: "right", type: "system" },
                    { time: "09:42", action: "Information extracted", actor: "Ovotech processing", align: "left", type: "system" },
                    { time: "09:44", action: "Coding suggestion created", actor: "Ovotech processing", align: "right", type: "system" },
                    { time: "09:47", action: "Suggestion accepted", actor: "Jamie Davies", align: "left", type: "human" },
                    { time: "09:49", action: "Review approved", actor: "Dr A. Khan", align: "right", type: "human" },
                    { time: "09:53", action: "Write-back completed", actor: "clinical record system", align: "center", type: "success" }
                  ].map((log, i) => {
                    
                    // Determine styles based on type
                    let cardBg = "bg-white border-[#E0E8F5]";
                    let dotColor = "bg-gray-300 border-white";
                    let titleColor = "text-[#0A1838]";
                    let timeColor = "text-[#64748B] bg-gray-50";
                    let actorColor = "text-[#475569]";
                    
                    if (log.type === "system") {
                        cardBg = "bg-blue-50 border-blue-200 shadow-blue-100/50";
                        dotColor = "bg-blue-400 border-blue-100";
                        titleColor = "text-blue-900";
                        timeColor = "text-blue-700 bg-blue-100/50";
                        actorColor = "text-blue-600";
                    } else if (log.type === "human") {
                        cardBg = "bg-purple-50 border-purple-200 shadow-purple-100/50";
                        dotColor = "bg-purple-500 border-purple-100";
                        titleColor = "text-purple-900";
                        timeColor = "text-purple-700 bg-purple-100/50";
                        actorColor = "text-purple-600 font-medium";
                    } else if (log.type === "success") {
                        cardBg = "bg-green-50 border-green-300 shadow-green-100/50";
                        dotColor = "bg-green-500 border-green-100 w-6 h-6 shadow-md";
                        titleColor = "text-[#0369A1]";
                        timeColor = "text-green-700 bg-green-100/50";
                        actorColor = "text-green-600 font-bold";
                    }

                    return (
                      <div key={i} className={`flex w-full ${log.align === 'center' ? 'justify-center' : (log.align === 'left' ? 'md:justify-start' : 'md:justify-end')} items-center relative`}>
                        
                        {/* Timeline Dot */}
                        <div className={`absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-[3px] z-20 ${dotColor}`}></div>
                        
                        {/* Timeline Card */}
                        <div className={`p-4 rounded-xl border shadow-sm flex flex-col min-w-[240px] md:w-[42%] ml-[60px] md:ml-0 ${log.align === 'center' ? 'text-center items-center mx-auto md:w-[60%]' : (log.align === 'left' ? 'md:mr-auto text-left' : 'md:ml-auto text-left')} ${cardBg} transition-transform hover:-translate-y-1 hover:shadow-md`}>
                          <div className="flex items-center gap-2 mb-2">
                             <div className={`text-[11px] font-bold px-2 py-0.5 rounded ${timeColor}`}>{log.time}</div>
                             {log.type === "human" && <span className="bg-purple-200 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Human Review</span>}
                             {log.type === "success" && <span className="bg-blue-200 text-[#0369A1] text-[10px] font-bold px-2 py-0.5 rounded-full">Finalised</span>}
                          </div>
                          <div className={`text-[15px] font-extrabold mb-1 ${titleColor}`}>{log.action}</div>
                          <div className={`text-[12px] ${actorColor}`}>{log.actor}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-8 text-center text-[11px] text-[#94A3B8] relative z-10">
                Illustrative audit trail using fictional names and data.
              </div>       </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — BUSINESS VALUE (interactive calculator) */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Business Value</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Measure impact using your practice's own numbers.</h2>
            <p className="text-[#475569] text-[16px] max-w-3xl mx-auto leading-relaxed">Enter your current practice baselines and compare them with Ovotech performance. This demonstration uses fictional processing data; a live comparison would use measured handling and turnaround times.</p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E0E8F5] shadow-xl overflow-hidden flex flex-col lg:flex-row">
            {/* Inputs */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-white">
              <h3 className="text-[18px] font-extrabold text-[#0A1838] mb-8">Your Baselines</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-[13px] font-bold text-[#475569] mb-2">Monthly correspondence volume (documents per month)</label>
                  <input type="number" value={volume} onChange={(e) => setVolume(Number(e.target.value) || 0)} className="w-full bg-[#F4F7FC] border border-[#E0E8F5] rounded-xl px-4 py-3 text-[#0A1838] font-bold focus:outline-none focus:border-[#02ACEA]" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#475569] mb-2">Current manual handling time (avg minutes per document)</label>
                  <input type="number" value={manualTime} onChange={(e) => setManualTime(Number(e.target.value) || 0)} className="w-full bg-[#F4F7FC] border border-[#E0E8F5] rounded-xl px-4 py-3 text-[#0A1838] font-bold focus:outline-none focus:border-[#02ACEA]" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#475569] mb-2">Current average turnaround time (hours)</label>
                  <input type="number" value={turnaround} onChange={(e) => setTurnaround(Number(e.target.value) || 0)} className="w-full bg-[#F4F7FC] border border-[#E0E8F5] rounded-xl px-4 py-3 text-[#0A1838] font-bold focus:outline-none focus:border-[#02ACEA]" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#475569] mb-2">Hourly staff cost (£ per hour)</label>
                  <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value) || 0)} className="w-full bg-[#F4F7FC] border border-[#E0E8F5] rounded-xl px-4 py-3 text-[#0A1838] font-bold focus:outline-none focus:border-[#02ACEA]" />
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <div className="text-[12px] font-bold text-blue-900 mb-1">Example Ovotech performance</div>
                <div className="text-[13px] text-blue-800">2.12 minutes of handling per document, including human review · 17.8 hours average turnaround</div>
              </div>
            </div>
            
            {/* Outputs */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-[#0A1838] text-white">
              <h3 className="text-[18px] font-extrabold text-white mb-8">Estimated Impact</h3>
              <div className="flex flex-col gap-8 mb-8 w-full">
                {/* Visual Bar Comparison */}
                <div className="bg-[#1A2848] rounded-2xl p-6 border border-[#2A3858]">
                   <div className="text-[14px] font-bold text-white mb-6">Processing Time Comparison (per document)</div>
                   <div className="space-y-4">
                     <div>
                       <div className="flex justify-between text-[11px] text-white/60 mb-1">
                         <span>Manual Baseline</span><span>{manualTime} minutes</span>
                       </div>
                       <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                         <div className="bg-gray-500 h-full w-full"></div>
                       </div>
                     </div>
                     <div>
                       <div className="flex justify-between text-[11px] text-[#02ACEA] mb-1 font-bold">
                         <span>Ovotech 2.0 (including human review)</span><span>2.12 minutes</span>
                       </div>
                       <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden flex">
                         <div className="bg-[#02ACEA] h-full" style={{width: `${Math.min(100, (2.12 / manualTime) * 100)}%`}}></div>
                       </div>
                     </div>
                   </div>
                </div>
                
                {/* Value Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#1A2848] to-[#111A30] rounded-xl p-5 border border-[#2A3858]">
                    <div className="text-[12px] text-white/70 font-bold mb-2 uppercase tracking-wide">Monthly Volume</div>
                    <div className="text-[32px] font-black text-white">{volume.toLocaleString()}</div>
                    <div className="text-[11px] text-white/60 mt-2">documents processed</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1A2848] to-[#111A30] rounded-xl p-5 border border-[#2A3858]">
                    <div className="text-[12px] text-[#02ACEA] font-bold mb-2 uppercase tracking-wide">Time Released</div>
                    <div className="text-[32px] font-black text-[#02ACEA]">{Math.max(0, Math.round(hoursReleased)).toLocaleString()} <span className="text-[16px] font-bold">hrs</span></div>
                    <div className="text-[11px] text-[#02ACEA]/70 mt-2">difference from manual baseline</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1A2848] to-[#111A30] rounded-xl p-5 border border-[#2A3858]">
                    <div className="text-[12px] text-green-400 font-bold mb-2 uppercase tracking-wide">Turnaround Improved</div>
                    <div className="text-[32px] font-black text-green-400">-{Math.max(0, Math.round(turnaroundDiff * 10) / 10).toLocaleString()} <span className="text-[16px] font-bold">hrs</span></div>
                    <div className="text-[11px] text-green-400/70 mt-2">compared to {turnaround} hr baseline</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1A2848] to-[#111A30] rounded-xl p-5 border border-[#2A3858] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 rounded-bl-full opacity-10"></div>
                    <div className="text-[12px] text-green-400 font-bold mb-2 uppercase tracking-wide">Estimated Value</div>
                    <div className="text-[32px] font-black text-green-400">£{Math.max(0, Math.round(costImpact)).toLocaleString()}</div>
                    <div className="text-[11px] text-green-400/70 mt-2">staff time equivalent</div>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-white/80 leading-relaxed border-t border-white/30 pt-6">
                <p className="mb-2">Hours released = monthly volume × (manual minutes − Ovotech handling minutes) ÷ 60. Cost impact = hours released × hourly staff cost. Turnaround difference = current average turnaround − Ovotech average turnaround.</p>
                <p>These performance figures are fictional, not live measurements. Automated processing time excludes human review and cannot alone establish staff hours saved. Negative results indicate additional time or cost. Turnaround measures elapsed time, not staff effort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 — SECURITY & COMPLIANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Security & Compliance</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Designed for UK healthcare environments.</h2>
            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">Security controls support the workflow around clinical correspondence, access, review and auditability.</p>
          </div>

          <div className="w-full relative py-12 mb-12 flex flex-col items-center">
              {/* Layered Shield Representation */}
              <div className="relative w-[300px] h-[350px] flex items-center justify-center">
                 {/* Background Glow */}
                 <div className="absolute inset-0 bg-blue-100 rounded-[100px] blur-3xl opacity-50"></div>
                 
                 <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <div className="w-[80%] bg-white p-4 rounded-xl border border-[#E0E8F5] shadow-sm text-center transform translate-y-0 z-40">
                       <h3 className="font-bold text-[#0A1838] text-[14px] mb-1">Role-based access</h3>
                       <p className="text-[#475569] text-[11px]">Permissions follow the person's role and responsibility.</p>
                    </div>
                 </div>
                 
                 <div className="absolute top-[80px] left-[-20px] right-[-20px] flex justify-center">
                    <div className="w-[90%] bg-white p-4 rounded-xl border-2 border-blue-100 shadow-md text-center transform z-30">
                       <h3 className="font-bold text-[#0A1838] text-[14px] mb-1">Authentication and encryption</h3>
                       <p className="text-[#475569] text-[11px]">Controls protect access and data in transit and at rest.</p>
                    </div>
                 </div>
                 
                 <div className="absolute top-[170px] left-[-40px] right-[-40px] flex justify-center">
                    <div className="w-[100%] bg-white p-4 rounded-xl border-4 border-blue-200 shadow-lg text-center transform z-20">
                       <h3 className="font-bold text-[#0A1838] text-[14px] mb-1">Audit logging</h3>
                       <p className="text-[#475569] text-[11px]">Review decisions, approvals and outcomes remain traceable.</p>
                    </div>
                 </div>
                 
                 <div className="absolute top-[245px] left-[-60px] right-[-60px] flex justify-center">
                    <div className="w-[110%] bg-[#02ACEA] p-5 rounded-xl border-4 border-white shadow-xl text-center transform z-10 text-white">
                       <h3 className="font-bold text-white text-[15px] mb-1">Operational controls</h3>
                       <p className="text-white/90 text-[12px]">Monitoring, environment separation and managed configuration support oversight.</p>
                    </div>
                 </div>
              </div>
            </div>
            <div className="bg-[#02ACEA] rounded-3xl p-8 lg:p-12 mb-12 text-center text-white shadow-lg relative overflow-hidden">
            <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
            <h3 className="text-[28px] font-extrabold mb-4 relative z-10">Clinical responsibility stays visible.</h3>
            <p className="text-white/90 text-[18px] max-w-3xl mx-auto mb-8 relative z-10">Review permissions, practice policies and recorded outcomes make responsibility visible from processing to the patient record.</p>
            <Link href="/security" className="inline-block px-8 py-4 bg-[#0A1838] text-white font-bold rounded-full hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative z-10">
              View the security approach →
            </Link>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E0E8F5] rounded-2xl p-6 lg:p-10 shadow-sm">
            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-8 block text-center">Assurance you can build on</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[13px]">DTAC</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Assessed</div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[13px]">DSPT</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Standards met</div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[11px] leading-tight text-center">ISO<br/>27001</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Certified</div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[10px] leading-tight text-center">Cyber<br/>Essent</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Certified</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 — FINAL CTA */}
      <section className="py-24 bg-white text-center border-t border-[#E0E8F5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#F4F7FC] rounded-[40px] p-10 md:p-16 border border-[#E0E8F5] shadow-xl relative overflow-hidden">
            <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(2, 172, 234, 0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div className="relative z-10">
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase bg-white px-5 py-2 rounded-full border border-[#E0E8F5] inline-block mb-6 shadow-sm">Request a Demo</span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mb-6">See how Ovotech could work in your practice.</h2>
              <p className="text-[#475569] text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">Explore how Ovotech can help your team process clinical correspondence, review suggested coding and maintain visibility across your practice.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="whitespace-nowrap bg-gradient-to-r from-[#02ACEA] to-[#019EE1] text-white font-extrabold px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.4)] border border-[#02ACEA] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(2,172,234,0.6)] hover:-translate-y-1 hover:scale-105">
                  Request a Demo
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white border-2 border-[#E0E8F5] text-[#0A1838] font-bold rounded-full hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#02ACEA] hover:text-[#02ACEA]">
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}




