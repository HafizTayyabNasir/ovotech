import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComplianceSection from "@/components/ComplianceSection";

export const metadata = {
  title: 'Home | Ovotech',
  description: 'Ovotech brings clinical document processing, information extraction, coding recommendations, and authorised human review into one connected workflow.'
};

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* 1. HERO */}
      <section className="relative w-full overflow-hidden bg-[#FFFFFF] pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[100px]">
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(2, 172, 234, 0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
              <div>
                <h1 className="text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.1] mb-6 tracking-tight text-[#0A1838]">
                  Less Time on Clinical Admin. <br /><span className="text-[#02ACEA] italic">More Time for Patient Care.</span>
                </h1>
                <p className="text-[#475569] text-[16px] leading-[1.6] mb-8">
                  Ovotech is an AI-assisted clinical document processing and coding platform designed for UK GP practices. It simplifies the journey from incoming clinical correspondence to reviewed clinical coding and patient record updates, helping practices reduce repetitive administrative work while keeping authorised healthcare professionals in control.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a href="#walkthrough" className="whitespace-nowrap bg-white text-[#0A1838] font-bold px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.05)] border-2 border-[#E0E8F5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#02ACEA] hover:text-[#02ACEA]">
                    See Ovotech in Action
                  </a>
                  <Link href="/contact" className="whitespace-nowrap bg-transparent text-[#0A1838] font-bold px-8 py-3.5 rounded-full border-2 border-[#E0E8F5] transition-all duration-300 hover:bg-[#F4F7FC] hover:-translate-y-1 hover:shadow-md">
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Bento Grid Layout */}
            <div className="w-full lg:w-[55%]">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                
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
                  </div>
                </div>

                {/* RIGHT SUB-COLUMN */}
                <div className="sm:col-span-7 flex flex-col gap-4">
                  {/* Top Right - AI Extraction Visualization */}
                  <div className="bg-white rounded-[24px] border border-[#E0E8F5] p-5 pt-6 flex-1 shadow-lg relative overflow-hidden min-h-[260px] flex flex-col justify-center">
                    
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#02ACEA]/5 rounded-full blur-2xl"></div>

                    <div className="flex flex-col gap-6 relative z-10">
                      {/* Step 1: Processing Status */}
                      <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E0E8F5] rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path></svg>
                           </div>
                           <div>
                             <div className="text-[14px] font-extrabold text-[#0A1838]">AI Extraction Active</div>
                             <div className="text-[11px] text-[#64748B]">Processing incoming correspondence...</div>
                           </div>
                        </div>
                      </div>

                      {/* Step 2: Source to Code Mapping */}
                      <div className="flex items-center justify-between gap-4">
                        {/* Source text */}
                        <div className="flex-1 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm">
                           <div className="text-[10px] text-[#64748B] font-bold uppercase mb-2 tracking-wider">Source Text</div>
                           <div className="text-[13px] text-[#475569] leading-relaxed italic">
                             "...patient has a history of <span className="bg-blue-100 text-blue-900 font-bold px-1 rounded">type 2 diabetes</span> and is currently taking <span className="bg-blue-100 text-blue-900 font-bold px-1 rounded">metformin</span>..."
                           </div>
                        </div>
                        
                        {/* Codes */}
                        <div className="flex-1 flex flex-col gap-2">
                           <div className="bg-white border border-[#E0E8F5] p-2 rounded-lg shadow-sm border-l-[3px] border-l-[#02ACEA] flex items-center justify-between">
                             <div>
                               <div className="text-[11px] font-bold text-[#0A1838]">Type 2 diabetes</div>
                               <div className="text-[9px] text-[#64748B] font-mono mt-0.5">SNOMED: 44054006</div>
                             </div>
                             <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Right - Trusted Network */}
                  <div className="bg-[#0A1838] rounded-[24px] p-6 shadow-lg text-center flex flex-col justify-center h-[140px]">
                     <h3 className="text-white font-extrabold text-[20px] mb-1">Designed For</h3>
                     <p className="text-white font-bold text-[14px] mb-3">UK General Practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS OVOTECH? */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">WHAT IS OVOTECH?</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">A Smarter Way to Manage Clinical Correspondence</h2>
          <p className="text-[#475569] text-[16px] max-w-3xl mx-auto leading-relaxed">
            Ovotech brings clinical document processing, information extraction, coding recommendations, and authorised human review into one connected workflow. Using AI, the platform identifies relevant clinical information from incoming correspondence and suggests SNOMED CT codes for review before approved information is added to the patient's clinical record. Designed to work alongside existing clinical systems, Ovotech helps practices manage clinical information more efficiently without replacing the systems they already use.
          </p>
        </div>
      </section>

      {/* 3. WHY WAS OVOTECH BUILT? */}
      <section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">WHY WAS OVOTECH BUILT?</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Because Clinical Teams Have More Important Things to Focus On.</h2>
            <p className="text-[#475569] text-[16px] max-w-3xl mx-auto leading-relaxed mb-10">
              Every day, GP practices receive large volumes of clinical correspondence that need to be reviewed, interpreted, coded, and recorded. This often involves switching between systems, manually extracting information, identifying appropriate clinical codes, and updating patient records. These repetitive tasks consume valuable time and can contribute to administrative backlogs. Ovotech was built to simplify this process. By combining AI-assisted processing with authorised human review, the platform helps reduce repetitive administrative work, improve workflow efficiency, and support more consistent clinical coding.
            </p>
            
            {/* Our Purpose Callout */}
            <div className="bg-[#F8FAFC] border border-[#E0E8F5] rounded-3xl p-8 max-w-4xl mx-auto shadow-sm">
              <h3 className="text-[14px] font-extrabold text-[#0A1838] uppercase tracking-wider mb-3">Our Purpose</h3>
              <p className="text-[#02ACEA] text-[20px] font-bold leading-relaxed">
                To simplify clinical document processing and reduce the administrative burden on GP practices, giving healthcare professionals more time to focus on what matters most: patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ComplianceSection />
      
      {/* 5. FINAL CTA */}
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

