"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveWorkflowShowcaseThird from "@/components/InteractiveWorkflowShowcaseThird";

export default function ThirdPage() {
  const [activeTab, setActiveTab] = useState(0);

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
                  <Link href="/contact" className="whitespace-nowrap" style={{ background: "#FFFFFF", color: "#0A1838", fontWeight: 700, padding: "14px 32px", borderRadius: "30px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)", transition: "all 0.3s", border: "2px solid #E0E8F5" }}>
                    Request a Demo
                  </Link>
                  <button onClick={() => document.getElementById('workflow').scrollIntoView({ behavior: 'smooth' })} className="whitespace-nowrap" style={{ background: "transparent", color: "#0A1838", fontWeight: 700, padding: "14px 32px", borderRadius: "30px", transition: "all 0.3s", border: "2px solid #E0E8F5" }}>
                    Explore the workflow
                  </button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN - Bento Grid Layout */}
            <div className="w-full lg:w-[55%]">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                
                {/* LEFT SUB-COLUMN */}
                <div className="sm:col-span-5 flex flex-col gap-4">
                  {/* Top Left - Proven Productivity */}
                  <div className="bg-[#0A1838] rounded-[24px] p-6 flex flex-col items-center justify-center text-center shadow-lg h-[180px]">
                    <h3 className="text-white font-extrabold text-[20px] leading-tight">Accelerated</h3>
                    <h3 className="text-white font-extrabold text-[20px] leading-tight mb-4">Processing</h3>
                    {/* Bar chart icon */}
                    <div className="flex items-end gap-1.5 h-10 mt-2">
                      <div className="w-4 h-4 bg-white/20 rounded-t-sm"></div>
                      <div className="w-4 h-7 bg-white/50 rounded-t-sm"></div>
                      <div className="w-4 h-10 bg-[#02ACEA] rounded-t-sm"></div>
                    </div>
                  </div>
                  
                  {/* Bottom Left - Tall Icon Card */}
                  <div className="bg-[#02ACEA] rounded-[24px] p-6 flex flex-col items-center justify-center flex-1 shadow-lg relative overflow-hidden min-h-[220px]">
                     {/* Ovotech Themed Abstract Icon (Document/Shield) */}
                     <svg className="w-28 h-28 text-white/95 drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <path d="M9 15l2 2 4-4"></path>
                     </svg>
                     {/* Decorative Sparkles */}
                     <div className="absolute top-6 left-6 text-white text-xl animate-pulse">✨</div>
                     <div className="absolute bottom-8 right-6 text-white text-lg animate-pulse">✦</div>
                  </div>
                </div>

                {/* RIGHT SUB-COLUMN */}
                <div className="sm:col-span-7 flex flex-col gap-4">
                  {/* Top Right - Laptop/Dashboard Mockup */}
                  <div className="bg-[#E2E8F0] rounded-[24px] p-5 pt-8 flex-1 shadow-lg relative overflow-hidden min-h-[260px] flex flex-col justify-end items-center">
                     
                     {/* Floating arrow button */}
                     <div className="absolute top-5 right-5 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-20 text-[#0A1838] hover:scale-105 transition-transform cursor-pointer">
                       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                     </div>

                     {/* Laptop Screen */}
                     <div className="w-[95%] bg-black p-1.5 rounded-t-[10px] relative z-10 shadow-2xl flex flex-col">
                       <div className="bg-white rounded-t-[6px] h-[160px] w-full overflow-hidden flex">
                          {/* Sidebar */}
                          <div className="w-12 bg-[#F8FAFC] border-r border-[#E2E8F0] flex flex-col items-center py-4 gap-4">
                             <div className="w-5 h-5 rounded bg-[#02ACEA]"></div>
                             <div className="w-4 h-1 rounded bg-[#CBD5E1]"></div>
                             <div className="w-4 h-1 rounded bg-[#CBD5E1]"></div>
                             <div className="w-4 h-1 rounded bg-[#CBD5E1]"></div>
                          </div>
                          {/* Main Content */}
                          <div className="flex-1 p-3 bg-[#F4F7FC]">
                            <div className="w-24 h-2 bg-[#CBD5E1] rounded mb-4"></div>
                            
                            <div className="flex gap-2 mb-3">
                              <div className="flex-1 h-14 bg-white rounded border border-[#E2E8F0] p-2 shadow-sm">
                                <div className="w-12 h-1.5 bg-[#CBD5E1] rounded mb-2"></div>
                                <div className="w-16 h-2 bg-[#02ACEA] rounded"></div>
                              </div>
                              <div className="flex-1 h-14 bg-white rounded border border-[#E2E8F0] p-2 shadow-sm">
                                <div className="w-12 h-1.5 bg-[#CBD5E1] rounded mb-2"></div>
                                <div className="w-10 h-2 bg-green-500 rounded"></div>
                              </div>
                            </div>
                            
                            {/* List items */}
                            <div className="w-full h-8 bg-white rounded mb-2 border border-[#E2E8F0] shadow-sm flex items-center px-2">
                               <div className="w-4 h-4 rounded-full bg-[#02ACEA]/20 mr-2"></div>
                               <div className="w-20 h-1.5 bg-[#CBD5E1] rounded"></div>
                            </div>
                            <div className="w-full h-8 bg-white rounded border border-[#E2E8F0] shadow-sm flex items-center px-2">
                               <div className="w-4 h-4 rounded-full bg-green-500/20 mr-2"></div>
                               <div className="w-24 h-1.5 bg-[#CBD5E1] rounded"></div>
                            </div>
                          </div>
                       </div>
                     </div>
                     {/* Laptop Base */}
                     <div className="w-[105%] h-3 bg-[#CBD5E1] rounded-b-xl rounded-t-[2px] shadow-md relative z-10">
                        <div className="w-16 h-1 bg-[#94A3B8] mx-auto rounded-b-md"></div>
                     </div>
                  </div>
                  
                  {/* Bottom Right - Trusted Network */}
                  <div className="bg-[#0A1838] rounded-[24px] p-6 shadow-lg text-center flex flex-col justify-center h-[140px]">
                     <h3 className="text-white font-extrabold text-[20px] mb-1">Designed For</h3>
                     <p className="text-white font-bold text-[14px] mb-3">UK General Practice</p>
                     {/* Stars */}
                     <div className="flex justify-center gap-1.5">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} className="w-5 h-5 text-[#02ACEA]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        ))}
                     </div>
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
          
                    <div className="w-full py-12 relative overflow-x-auto no-scrollbar">
            <div className="min-w-[1000px] relative px-4">
              {/* Connecting Path Line */}
              <div className="absolute top-[40px] left-10 right-10 h-2 bg-[#E0E8F5] rounded-full z-0">
                <div className="h-full w-full bg-gradient-to-r from-[#02ACEA] via-[#A855F7] to-[#02ACEA] opacity-50 rounded-full"></div>
              </div>
              
              <div className="flex justify-between relative z-10">
                {[
                  { num: "01", title: "Receive", desc: "Clinical correspondence enters a visible queue." },
                  { num: "02", title: "Extract", desc: "Relevant information is structured from the source." },
                  { num: "03", title: "Identify", desc: "Clinical concepts are linked to supporting evidence." },
                  { num: "04", title: "Suggest", desc: "SNOMED CT codes are presented for consideration." },
                  { num: "05", title: "Review", desc: "An authorised person checks context and evidence." },
                  { num: "06", title: "Approve", desc: "The final selection is explicitly approved." },
                  { num: "07", title: "Write back", desc: "Approved information is posted to EMIS Web." }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center w-32 text-center group">
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-[#02ACEA] shadow-lg flex items-center justify-center font-extrabold text-[24px] text-[#0A1838] mb-4 group-hover:scale-110 transition-transform relative bg-clip-padding">
                      {step.num}
                    </div>
                    <h3 className="text-[#0A1838] font-bold text-[16px] mb-2">{step.title}</h3>
                    <p className="text-[#475569] text-[12px] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center text-[12px] text-[#64748B]">
            Current clinical-system scope: EMIS Web. Integration availability and deployment readiness are confirmed during evaluation.
          </div>
        </div>
      </section>

      {/* SECTION 3 — PRODUCT TOUR */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">See Ovotech in Action</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Follow the work, not just the technology.</h2>
            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">Move from an individual workload to the review queue, then open a document and see source evidence, structured information and coding suggestions together.</p>
          </div>

          <div className="flex flex-col gap-12">
            {[
              {
                title: "Clinical Overview",
                content: (
                  <div className="bg-[#F8FAFC] rounded-3xl border border-[#E0E8F5] shadow-lg overflow-hidden p-6 lg:p-10">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-[20px] font-extrabold text-[#0A1838]">Good morning, Jamie</h3>
                      <span className="text-[14px] text-[#64748B] font-medium">Thursday · Riverside Practice</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {[
                        { label: "Assigned to you", val: "24", color: "text-blue-600" },
                        { label: "Ready for review", val: "8", color: "text-green-600" },
                        { label: "Need attention", val: "3", color: "text-red-600" },
                        { label: "Completed today", val: "12", color: "text-gray-600" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 border border-[#E0E8F5] shadow-sm">
                          <div className="text-[12px] text-[#64748B] font-semibold mb-1 uppercase tracking-wide">{stat.label}</div>
                          <div className={`text-[28px] font-extrabold ${stat.color}`}>{stat.val}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm overflow-hidden">
                      <div className="bg-[#F4F7FC] px-5 py-3 border-b border-[#E0E8F5] font-bold text-[14px] text-[#0A1838]">Priority work</div>
                      <div className="divide-y divide-[#E0E8F5]">
                        {[
                          { doc: "Discharge summary", ref: "SAMPLE-042", time: "Today 09:38", status: "Ready for review", statusColor: "text-green-600 bg-green-50" },
                          { doc: "Clinic letter", ref: "SAMPLE-018", time: "Today 09:21", status: "Needs attention", statusColor: "text-red-600 bg-red-50" },
                          { doc: "Outpatient letter", ref: "SAMPLE-113", time: "Today 09:14", status: "In review", statusColor: "text-blue-600 bg-blue-50" }
                        ].map((item, i) => (
                          <div key={i} className="px-5 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                            <div>
                              <div className="font-bold text-[14px] text-[#0A1838]">{item.doc}</div>
                              <div className="text-[12px] text-[#64748B] mt-1">{item.ref} · {item.time}</div>
                            </div>
                            <div className={`text-[12px] font-bold px-3 py-1 rounded-full ${item.statusColor}`}>
                              {item.status}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: "Review Queue",
                content: (
                  <div className="bg-[#F8FAFC] rounded-3xl border border-[#E0E8F5] shadow-lg overflow-hidden p-6 lg:p-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-4 py-2 bg-[#0A1838] text-white text-[13px] font-bold rounded-lg shadow-sm">24 open items</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">Assigned to me (14)</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">Ready for review (8)</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">Needs attention (3)</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">In review (5)</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">Overdue (2)</span>
                    </div>
                    <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm overflow-hidden">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#F4F7FC] text-[12px] font-bold text-[#64748B] uppercase tracking-wide border-b border-[#E0E8F5]">
                            <th className="p-4">Document / Patient</th>
                            <th className="p-4">Received</th>
                            <th className="p-4">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E0E8F5]">
                          {[
                            { doc: "Discharge summary", ref: "SAMPLE-042", time: "Today 09:38", status: "Ready for review", color: "text-green-700 bg-green-50" },
                            { doc: "Clinic letter", ref: "SAMPLE-018", time: "Today 09:21", status: "Needs attention", color: "text-red-700 bg-red-50" },
                            { doc: "Outpatient letter", ref: "SAMPLE-113", time: "Today 09:14", status: "In review", color: "text-blue-700 bg-blue-50" },
                            { doc: "Clinical correspondence", ref: "SAMPLE-076", time: "Yesterday 16:47", status: "Ready for review", color: "text-green-700 bg-green-50" }
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors text-[14px]">
                              <td className="p-4">
                                <div className="font-bold text-[#0A1838]">{row.doc}</div>
                                <div className="text-[12px] text-[#64748B] mt-1">{row.ref}</div>
                              </td>
                              <td className="p-4 text-[#475569] font-medium">{row.time}</td>
                              <td className="p-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-[12px] font-bold ${row.color}`}>
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
              },
              {
                title: "Clinical Review",
                content: (
                  <div className="bg-[#F8FAFC] rounded-3xl border border-[#E0E8F5] shadow-lg overflow-hidden p-6 lg:p-10 flex flex-col gap-6">
                    <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E0E8F5] shadow-sm">
                      <div className="flex items-center gap-3 text-[14px] font-bold text-[#0A1838]">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> In review
                      </div>
                      <button className="px-5 py-2 bg-[#02ACEA] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#028bbd] transition-colors">
                        Approve review
                      </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm flex flex-col">
                        <div className="bg-[#F4F7FC] px-5 py-3 border-b border-[#E0E8F5] flex justify-between items-center rounded-t-xl">
                          <span className="font-bold text-[13px] text-[#0A1838] uppercase tracking-wide">01 Original document</span>
                        </div>
                        <div className="p-6 font-serif text-[15px] leading-relaxed text-[#0A1838] flex-1">
                          <div className="text-[11px] text-[#64748B] font-sans font-bold uppercase tracking-widest mb-4 pb-4 border-b border-gray-100">RIVERSIDE MEDICAL PRACTICE · FICTIONAL SAMPLE · DEMO-107</div>
                          <h4 className="font-sans font-bold text-[18px] mb-4">Discharge summary</h4>
                          <p>
                            Patient has a <span className="bg-blue-100 text-blue-900 font-semibold px-1 rounded">history of type 2 diabetes</span>. Ongoing management was discussed during the consultation. Continue review with the practice team. Reconcile the clinical record against the full correspondence.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm">
                          <div className="bg-[#F4F7FC] px-5 py-3 border-b border-[#E0E8F5] rounded-t-xl">
                            <span className="font-bold text-[13px] text-[#0A1838] uppercase tracking-wide">02 Structured information</span>
                          </div>
                          <div className="p-5 grid grid-cols-2 gap-4 text-[13px]">
                            <div><div className="text-[#64748B] text-[11px] font-bold uppercase mb-1">Document type</div><div className="font-medium text-[#0A1838]">Discharge summary</div></div>
                            <div><div className="text-[#64748B] text-[11px] font-bold uppercase mb-1">Clinical concept</div><div className="font-medium text-[#0A1838]">Type 2 diabetes mellitus</div></div>
                            <div><div className="text-[#64748B] text-[11px] font-bold uppercase mb-1">Medication details</div><div className="font-medium text-[#0A1838]">Not specified</div></div>
                            <div><div className="text-[#64748B] text-[11px] font-bold uppercase mb-1">Plan/follow-up</div><div className="font-medium text-[#0A1838]">Practice team review</div></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm border-l-4 border-l-[#02ACEA]">
                          <div className="bg-[#F4F7FC] px-5 py-3 border-b border-[#E0E8F5] rounded-tr-xl flex justify-between items-center">
                            <span className="font-bold text-[13px] text-[#0A1838] uppercase tracking-wide">03 SNOMED suggestions</span>
                            <span className="text-[11px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">High relevance</span>
                          </div>
                          <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <div className="text-[15px] font-bold text-[#0A1838]">Type 2 diabetes mellitus</div>
                                <div className="text-[12px] text-[#64748B] mt-1 font-mono bg-gray-50 inline-block px-2 py-1 rounded border border-gray-100">SNOMED CT 44054006</div>
                              </div>
                              <span className="text-[11px] font-bold text-[#02ACEA] bg-blue-50 px-2 py-1 rounded">Suggested</span>
                            </div>
                            <div className="text-[13px] text-[#475569] italic mb-4 bg-gray-50 p-3 rounded-lg border-l-2 border-gray-300">
                              "...<span className="font-bold text-[#0A1838]">Patient has a history of type 2 diabetes.</span>..."
                            </div>
                            <div className="flex gap-2">
                              <button className="flex-1 py-2 bg-[#02ACEA] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#028bbd]">Accept</button>
                              <button className="flex-1 py-2 bg-white border border-[#E0E8F5] text-[#0A1838] text-[13px] font-bold rounded-lg hover:bg-gray-50">Amend</button>
                              <button className="flex-1 py-2 bg-white border border-red-200 text-red-600 text-[13px] font-bold rounded-lg hover:bg-red-50">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-8 items-start relative mb-12">
                <div className="lg:w-1/4 sticky top-24 z-10 pt-4 hidden lg:block">
                  <div className="bg-white rounded-full px-4 py-2 border border-[#E0E8F5] shadow-sm inline-block font-bold text-[#02ACEA] mb-2 tracking-widest text-[12px] uppercase">
                    Tour Step 0{idx + 1}
                  </div>
                  <h3 className="text-[24px] font-extrabold text-[#0A1838]">{section.title}</h3>
                </div>
                <div className="lg:w-3/4 w-full">
                  <div className="lg:hidden mb-4">
                    <div className="bg-white rounded-full px-4 py-2 border border-[#E0E8F5] shadow-sm inline-block font-bold text-[#02ACEA] mb-2 tracking-widest text-[12px] uppercase">
                      Tour Step 0{idx + 1}
                    </div>
                    <h3 className="text-[24px] font-extrabold text-[#0A1838]">{section.title}</h3>
                  </div>
                  {section.content}
                </div>
              </div>
            ))}
            
            <div className="text-center text-[11px] text-[#94A3B8] font-medium pt-8 border-t border-[#E0E8F5] mt-4">
              Illustrative workflow, not a live product screen · Fictional data · No clinical systems connected · This example follows the manual review route.
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW SHOWCASE (from Homepage) */}
      <InteractiveWorkflowShowcaseThird />

      {/* SECTION 4 — FOR PRACTICE MANAGERS */}
      <section className="py-20 bg-[#F4F7FC]">
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
                    <div className="text-[12px] font-bold text-green-800 mb-1">Average turnaround</div>
                    <div className="text-[24px] font-extrabold text-green-700">17.8 hrs</div>
                    <div className="text-[11px] text-green-600">from receipt to completion</div>
                   </div>
                   <div className="mb-4">
                    <div className="text-[12px] font-bold text-green-800 mb-1">Estimated hours released</div>
                    <div className="text-[24px] font-extrabold text-green-700">184 hrs</div>
                    <div className="text-[11px] text-green-600">against manual baseline</div>
                   </div>
                   <div>
                    <div className="text-[12px] font-bold text-green-800 mb-1">Estimated cost impact</div>
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

      {/* SECTION 6 — FOR MEDICAL CODERS */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">For Medical Coders</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">A workspace built around the coder.</h2>
            <p className="text-[#0A1838] font-bold text-[18px] mb-4">Less searching. Less repetitive processing. More focused review.</p>
            <p className="text-[#475569] text-[16px] mb-6">Open assigned correspondence, review structured information, compare suggestions with their source and record a clear decision in one place.</p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Personal workload and priority queue",
                "Source evidence beside each suggestion",
                "Accept, reject, amend or escalate",
                "Patient context without losing the source"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#475569] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#02ACEA] text-white flex items-center justify-center text-[12px]">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl border border-[#E0E8F5] p-6 shadow-lg">
              <div className="flex gap-4 mb-6">
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 flex-1 text-center">
                  <div className="text-[11px] text-[#64748B] font-bold uppercase">Assigned</div>
                  <div className="text-[20px] font-extrabold text-blue-600">24</div>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 flex-1 text-center">
                  <div className="text-[11px] text-[#64748B] font-bold uppercase">Ready</div>
                  <div className="text-[20px] font-extrabold text-green-600">8</div>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 flex-1 text-center">
                  <div className="text-[11px] text-[#64748B] font-bold uppercase">Attention</div>
                  <div className="text-[20px] font-extrabold text-red-600">3</div>
                </div>
              </div>
              
              <div className="bg-[#F8FAFC] border border-[#E0E8F5] rounded-xl p-5 mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[12px] font-bold text-[#64748B] uppercase tracking-wide">Next priority</div>
                  <div className="text-[11px] font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded">Ready for human review</div>
                </div>
                <h4 className="text-[16px] font-bold text-[#0A1838]">Discharge summary <span className="text-[#64748B] font-normal">(SAMPLE-042)</span></h4>
                <div className="text-[13px] text-[#475569] mt-1">Evidence and history available</div>
                <button className="mt-4 w-full py-2 bg-[#0A1838] text-white text-[13px] font-bold rounded-lg hover:bg-black transition-colors">Open Document</button>
              </div>
              
              <div className="flex justify-between items-center text-[11px] font-bold text-[#64748B]">
                <span className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">1</span> Open source</span>
                <span className="text-gray-300">→</span>
                <span className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">2</span> Check extraction</span>
                <span className="text-gray-300">→</span>
                <span className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">3</span> Review coding</span>
                <span className="text-gray-300">→</span>
                <span className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">4</span> Record decision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="w-full md:w-4 bg-gradient-to-b from-[#9B2C2C] to-[#166534] flex items-center justify-center relative">
                <div className="absolute w-10 h-10 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center z-20 font-bold text-gray-500 transform md:-rotate-90 text-[12px]">VS</div>
              </div>
              
              {/* Right Side: With Ovotech */}
              <div className="flex-1 bg-[#F0FDF4] p-10 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#166534" strokeWidth="8" strokeLinecap="round" />
                  <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#166534" strokeWidth="2" strokeDasharray="10,10" />
                  <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#166534" strokeWidth="2" strokeDasharray="10,10" />
                </svg>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-extrabold text-[#166534] mb-6">With Ovotech 2.0</h3>
                  <ul className="space-y-5 text-[#166534] font-medium text-[16px]">
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> Correspondence enters one visible queue</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> Relevant information is structured</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> Suggestions include source evidence</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> People review, amend and approve</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> The outcome and write-back remain traceable</li>
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
              Controlled write-back
            </div>
            <p className="text-[#0A1838] font-bold text-[18px]">More than document extraction. One connected Ovotech process.</p>
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
                <div className={`absolute top-1 bottom-1 w-[195px] bg-[#02ACEA] rounded-full transition-transform duration-300 shadow-lg ${activeTab === 0 ? 'translate-x-0' : 'translate-x-[195px] bg-purple-500'}`}></div>
                <button onClick={() => setActiveTab(0)} className={`flex-1 relative z-10 py-3 text-center text-[13px] font-bold rounded-full transition-colors duration-300 ${activeTab === 0 ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                  Medical Coder / Clinical Reviewer
                </button>
                <button onClick={() => setActiveTab(1)} className={`flex-1 relative z-10 py-3 text-center text-[13px] font-bold rounded-full transition-colors duration-300 ${activeTab === 1 ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                  Practice Admin
                </button>
              </div>
            </div>

            <div className="bg-[#112146] rounded-3xl border border-[#2A3858] shadow-2xl overflow-hidden relative min-h-[300px]">
               {activeTab === 0 ? (
                  <div className="p-8 lg:p-12 animate-fade-in border-l-4 border-l-[#02ACEA]">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="bg-[#1C2C54] text-[#02ACEA] font-black text-[48px] w-24 h-24 flex items-center justify-center rounded-2xl shrink-0 border border-[#2A3858]">01</div>
                      <div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Medical Coder / Clinical Reviewer</h3>
                        <p className="text-gray-400 text-[16px] leading-relaxed mb-6">One role for reviewing source documents, checking patient context, assessing coding suggestions and approving the final selection.</p>
                        <div className="inline-block bg-[#02ACEA] text-white rounded-full px-6 py-2 text-[14px] font-bold shadow-lg">
                          Review, amend and approve coding
                        </div>
                      </div>
                    </div>
                  </div>
               ) : (
                  <div className="p-8 lg:p-12 animate-fade-in border-l-4 border-l-purple-500">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="bg-purple-900/40 text-purple-400 font-black text-[48px] w-24 h-24 flex items-center justify-center rounded-2xl shrink-0 border border-purple-800/50">02</div>
                      <div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Practice Admin</h3>
                        <p className="text-gray-400 text-[16px] leading-relaxed mb-6">Practice-level volumes, workload, turnaround and operational exceptions. Platform-wide user, registry and routing controls are a separate administration responsibility.</p>
                        <div className="inline-block bg-purple-600 text-white rounded-full px-6 py-2 text-[14px] font-bold shadow-lg">
                          Manage the process
                        </div>
                      </div>
                    </div>
                  </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — HUMAN OVERSIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Human Oversight</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-6">Your workflow. Your rules.</h2>
          <p className="text-[#475569] text-[16px] max-w-3xl mx-auto leading-relaxed mb-6">
            Ovotech structures correspondence and suggests coding. Your practice configures review routes, confidence thresholds and escalation rules. Where enabled, policy-based approval and filing can automate eligible documents; teams review the work routed to them.
          </p>
          <Link href="/security" className="inline-block text-[#02ACEA] font-bold text-[15px] hover:underline mb-12">
            Explore security and oversight →
          </Link>
          
          <div className="relative w-full max-w-5xl mx-auto mt-12 py-8">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[28px] left-8 right-8 h-1 bg-[#E0E8F5] z-0"></div>
            <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
              {[
                { step: "01", title: "Clinical document", sub: "source retained" },
                { step: "02", title: "Processing", sub: "information structured" },
                { step: "03", title: "Suggestions", sub: "evidence presented" },
                { step: "04", title: "Human review", sub: "accept, amend or reject", highlight: "blue" },
                { step: "05", title: "Approval", sub: "explicit authorisation", highlight: "green" },
                { step: "06", title: "Patient record", sub: "controlled write-back" }
              ].map((item, i) => (
                <div key={i} className="flex flex-row md:flex-col items-center gap-4 md:gap-2 flex-1">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-[14px] border-4 border-white shadow-sm shrink-0 ${
                    item.highlight === 'blue' ? 'bg-blue-100 text-blue-900 border-blue-200' :
                    item.highlight === 'green' ? 'bg-green-100 text-green-900 border-green-200' :
                    'bg-[#F8FAFC] text-[#0A1838] border-[#E0E8F5]'
                  }`}>
                    {item.step}
                  </div>
                  <div className="md:text-center bg-white md:bg-transparent p-3 md:p-0 rounded-lg border md:border-none border-[#E0E8F5] shadow-sm md:shadow-none w-full md:w-auto">
                    <div className="font-bold text-[#0A1838] text-[13px] md:text-[14px]">{item.title}</div>
                    <div className="text-[11px] text-[#64748B] mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — EMIS WRITE-BACK */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">EMIS Write-Back</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">From review to patient record.</h2>
            <p className="text-[#475569] text-[16px] mb-8 leading-relaxed">
              In the manual review workflow, approve the reviewed selection before filing to EMIS. Eligible documents can follow configured auto-approval and auto-filing policies when enabled.
            </p>
            
            <div className="flex flex-col items-center justify-center relative w-full h-[400px]">
              {/* Funnel SVG Background */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-10">
                <path d="M 0,0 L 400,0 L 250,200 L 250,400 L 150,400 L 150,200 Z" fill="#02ACEA" />
              </svg>
              
              <div className="relative z-10 w-full flex flex-col items-center gap-2 text-[13px] font-bold text-[#0A1838]">
                <div className="w-[100%] max-w-[400px] flex items-center justify-center gap-3 bg-white p-3 rounded-lg border border-[#E0E8F5] shadow-sm"><span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">1</span> Reviewed selection <span className="text-[#64748B] font-normal">(1 accepted code)</span></div>
                <div className="w-[10px] h-4 border-l-2 border-dashed border-[#02ACEA]"></div>
                <div className="w-[85%] max-w-[360px] flex items-center justify-center gap-3 bg-white p-3 rounded-lg border border-[#E0E8F5] shadow-sm"><span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">2</span> Authorised approval <span className="text-[#64748B] font-normal">(Jamie Davies · 09:49)</span></div>
                <div className="w-[10px] h-4 border-l-2 border-dashed border-[#02ACEA]"></div>
                <div className="w-[70%] max-w-[320px] flex items-center justify-center gap-3 bg-[#02ACEA] text-white p-3 rounded-lg shadow-md"><span className="w-6 h-6 rounded-full bg-white text-[#0A1838] flex items-center justify-center">3</span> EMIS Web write-back <span className="text-white/80 font-normal">(ready to post)</span></div>
                <div className="w-[10px] h-4 border-l-2 border-dashed border-[#02ACEA]"></div>
                <div className="w-[55%] max-w-[280px] flex items-center justify-center gap-3 bg-white p-3 rounded-lg border border-[#E0E8F5] shadow-sm"><span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">4</span> Recorded outcome <span className="text-[#64748B] font-normal">(traceable status)</span></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl border border-[#E0E8F5] p-6 shadow-lg">
              <div className="bg-[#F8FAFC] border border-[#E0E8F5] rounded-xl p-5 mb-6">
                <h3 className="font-bold text-[#0A1838] text-[15px] mb-1">CONTROLLED WRITE-BACK</h3>
                <p className="text-[13px] text-[#475569] mb-4">One accepted concept is ready.</p>
                
                <div className="space-y-3 text-[13px] mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-[#64748B] font-bold">Destination</span>
                    <span className="font-bold text-[#0A1838]">EMIS Web</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-[#64748B] font-bold">Approval</span>
                    <span className="font-bold text-green-700 flex items-center gap-1">✓ Authorised</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-[#64748B] font-bold">Duplicate check</span>
                    <span className="font-bold text-green-700">Clear</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#64748B] font-bold">Posting status</span>
                    <span className="font-bold text-[#02ACEA] bg-blue-50 px-2 py-0.5 rounded">Awaiting deliberate action</span>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-[#0A1838] text-white text-[14px] font-bold rounded-lg hover:bg-black transition-colors flex justify-center items-center gap-2">
                  Post approved information <span className="text-[#02ACEA]">→</span>
                </button>
              </div>
              
              <div className="text-center text-[11px] text-[#94A3B8]">
                Illustrative product view. No clinical system is connected.
              </div>
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

              <h3 className="font-extrabold text-[#0A1838] text-[20px] mb-1 relative z-10">See what happened, when and by whom.</h3>
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
                    { time: "09:53", action: "Write-back completed", actor: "EMIS Web", align: "center", type: "success" }
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
                        titleColor = "text-green-800";
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
                             {log.type === "success" && <span className="bg-green-200 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Finalised</span>}
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
                 
                 <div className="absolute top-[260px] left-[-60px] right-[-60px] flex justify-center">
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
            <Link href="/security" className="inline-block px-8 py-4 bg-[#0A1838] text-white font-bold rounded-full hover:bg-gray-900 transition-colors shadow-md relative z-10">
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
                <Link href="/contact" className="px-8 py-4 bg-[#0A1838] text-white font-bold rounded-full shadow-lg hover:bg-black transition-all transform hover:-translate-y-1">
                  Request a Demo
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white border-2 border-[#E0E8F5] text-[#0A1838] font-bold rounded-full hover:bg-gray-50 transition-all">
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
