import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us | Ovotech",
  description: "OvoTech is a clinical document processing and coding workflow platform designed for UK primary care.",
};

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* 1. HERO SECTION (Split Layout) */}
      <section className="relative pt-[30px] lg:pt-[50px] pb-[60px] lg:pb-[80px] overflow-hidden bg-white border-b border-[#E0E8F5]">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(2,172,234,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-[#E8F6FD] border border-[#019EE1]/20 text-[13px] font-black tracking-[2px] text-[#019EE1] uppercase mb-6 shadow-sm">
                About OvoTech
              </span>
              <h1 className="text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.1] mb-6 tracking-tight text-[#0A1838]">
                Supporting Smarter <br/>
                <span className="text-[#02ACEA] italic">Clinical Workflows.</span>
              </h1>
              <p className="text-[#475569] text-[16px] leading-[1.6] mb-8 max-w-xl">
                OvoTech is an AI-assisted clinical document processing and coding platform designed for UK primary care. It supports practices in managing incoming clinical correspondence by bringing document review, relevant patient context and AI-assisted coding recommendations into one streamlined workflow. With confidence scores and authorised human review built into the process, OvoTech helps teams process clinical information more efficiently while maintaining control over coding and record updates.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
                  ✅ Authorised Professionals
                </div>
                <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
                  ✅ Centralised Review
                </div>
              </div>
              <div className="flex">
                <Link href="/contact" className="whitespace-nowrap bg-gradient-to-r from-[#02ACEA] to-[#019EE1] text-white font-extrabold px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.4)] border border-[#02ACEA] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(2,172,234,0.6)] hover:-translate-y-1 hover:scale-105">
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN - Graphic / Mini Bento */}
            <div className="w-full lg:w-[55%]">
              <div className="grid grid-cols-2 gap-4 h-[380px]">
                <div className="col-span-1 rounded-[24px] overflow-hidden shadow-lg relative group">
                  <img src="/gp-doctor-consultation.png" alt="GP Consultation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="bg-[#0A1838] rounded-[24px] p-6 flex flex-col justify-center shadow-lg flex-1 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#02ACEA]/20 rounded-full blur-xl"></div>
                    <h3 className="text-white font-extrabold text-[24px] leading-tight mb-1">Human</h3>
                    <h3 className="text-[#02ACEA] font-extrabold text-[24px] leading-tight">Oversight</h3>
                  </div>
                  <div className="bg-white rounded-[24px] overflow-hidden shadow-lg flex-1 relative border border-[#E0E8F5] group">
                    <img src="/gp-team-support.png" alt="Team Support" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH (Bento Grid Style) */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(2,172,234,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#E8F6FD] text-[12px] font-extrabold tracking-[2px] text-[#019EE1] uppercase mb-4">Our Approach</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] leading-tight max-w-3xl mx-auto">
              Technology that supports <span className="text-[#019EE1]">clinical expertise</span>, not replaces it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="md:col-span-2 animated-border-wrapper group" style={{ "--border-radius": "24px" }}>
              <div className="animated-border-inner bg-[#F8FAFC] p-8 md:p-10 shadow-sm relative overflow-hidden h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-[#E0E8F5] mb-6 text-[#019EE1]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-[24px] font-extrabold text-[#0A1838] mb-3">Human Oversight</h3>
                <p className="text-[#475569] text-[16px] leading-relaxed max-w-md">
                  OvoTech is designed around human oversight and transparency, ensuring that authorised professionals remain in complete control of clinical records and coding decisions.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="md:col-span-1 animated-border-wrapper group" style={{ "--border-radius": "24px" }}>
              <div className="animated-border-inner bg-white p-8 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] flex items-center justify-center mb-6 text-[#019EE1]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0A1838] mb-3">Structured Workflow</h3>
                  <p className="text-[#475569] text-[15px] leading-relaxed">
                    From clinical correspondence to patient context and coding recommendations, everything is unified in one simple, structured process.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="md:col-span-3 animated-border-wrapper group" style={{ "--border-radius": "24px" }}>
              <div className="animated-border-inner bg-[#0A1838] p-8 md:p-10 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center gap-8 h-full">
                <div className="absolute inset-0 opacity-10 bg-[url('/hero-tech.png')] bg-cover bg-center"></div>
                <div className="relative z-10 flex-1">
                  <div className="inline-block py-1 px-3 rounded-full bg-[#112146] border border-[#2A3858] text-[11px] font-bold text-[#A594FF] uppercase tracking-wider mb-4">Integration</div>
                  <h3 className="text-[24px] font-extrabold text-white mb-3">Practical Integration</h3>
                  <p className="text-gray-300 text-[15px] leading-relaxed max-w-2xl">
                    Seamless integration with existing clinical workflows. We don't want to replace your systems; we want to make managing clinical information across them easier and more efficient.
                  </p>
                </div>
                <div className="relative z-10 w-24 h-24 shrink-0 bg-white/10 rounded-2xl border border-white/20 backdrop-blur flex items-center justify-center text-[#02ACEA]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BUILT FOR PRIMARY CARE (Comparison / Split Layout Style) */}
      <section className="py-16 lg:py-20 bg-[#F4F7FC] relative overflow-hidden border-t border-[#E0E8F5]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Built for Primary Care</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mt-3 mb-6 leading-tight">Designed around your day-to-day needs.</h2>
            <p className="text-[18px] text-[#475569] leading-relaxed mb-6">
              OvoTech is designed around the day-to-day needs of GP practices and the teams responsible for managing clinical information. 
            </p>
            <div className="bg-white p-5 rounded-2xl border border-[#E0E8F5] shadow-sm mb-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#02ACEA] rounded-l-2xl"></div>
              <p className="text-[#0A1838] font-bold text-[16px]">
                "Our goal is to provide technology that fits naturally into existing ways of working while making clinical administration more manageable."
              </p>
            </div>
            
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#0A1838] text-white font-bold rounded-full px-8 py-4 hover:bg-[#02ACEA] transition-colors shadow-lg">
              Get in Touch
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="animated-border-wrapper" style={{ "--border-radius": "28px", boxShadow: "0 24px 70px rgba(0, 0, 0, 0.08)" }}>
              <div className="animated-border-inner bg-white p-2">
                <div className="bg-[#F8FAFC] rounded-3xl border border-[#E0E8F5] p-8 md:p-12 relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-8 border-b border-[#E0E8F5] pb-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E0E8F5] flex items-center justify-center text-[#02ACEA]">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1838] text-[18px]">Security & Compliance</h3>
                      <p className="text-[#64748B] text-[14px]">Built for UK Healthcare</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E0E8F5] shadow-sm">
                      <span className="font-bold text-[#0A1838]">Data Processing</span>
                      <span className="text-[#02ACEA] font-bold text-[13px] uppercase tracking-wider bg-[#02ACEA]/10 px-3 py-1 rounded-full">Secure</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E0E8F5] shadow-sm">
                      <span className="font-bold text-[#0A1838]">Clinical Integration</span>
                      <span className="text-[#02ACEA] font-bold text-[13px] uppercase tracking-wider bg-[#02ACEA]/10 px-3 py-1 rounded-full">Seamless</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E0E8F5] shadow-sm">
                      <span className="font-bold text-[#0A1838]">Workflow Efficiency</span>
                      <span className="text-[#02ACEA] font-bold text-[13px] uppercase tracking-wider bg-[#02ACEA]/10 px-3 py-1 rounded-full">Optimised</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#E8F6FD] text-[12px] font-extrabold tracking-[2px] text-[#019EE1] uppercase mb-4">Core Values</span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] leading-tight max-w-3xl mx-auto mb-16">
            The principles that drive our <span className="text-[#019EE1]">technology</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#F8FAFC] border border-[#E0E8F5] p-10 rounded-[32px] text-left hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#019EE1] group-hover:scale-110 transition-transform duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-[#0A1838] font-extrabold text-[22px] mb-4">Empowering Practices</h3>
              <p className="text-[#475569] text-[15px] leading-relaxed">
                We build tools that give time back to clinicians and administrative staff, enabling them to focus on high-value patient care rather than manual data entry.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-[#0A1838] border border-[#2A3858] p-10 rounded-[32px] text-left hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#02ACEA]/10 rounded-full blur-2xl"></div>
              <div className="w-16 h-16 bg-[#112146] border border-[#2A3858] rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#02ACEA] group-hover:scale-110 transition-transform duration-300 relative z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="text-white font-extrabold text-[22px] mb-4 relative z-10">Uncompromising Security</h3>
              <p className="text-[#94A3B8] text-[15px] leading-relaxed relative z-10">
                Patient data safety is our highest priority. We adhere to strict NHS standards, including DTAC, DSPT, and ISO 27001, to ensure complete compliance.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#F8FAFC] border border-[#E0E8F5] p-10 rounded-[32px] text-left hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#019EE1] group-hover:scale-110 transition-transform duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-[#0A1838] font-extrabold text-[22px] mb-4">Intelligent Automation</h3>
              <p className="text-[#475569] text-[15px] leading-relaxed">
                We leverage cutting-edge AI to automate repetitive coding tasks, but always ensure there is a clear, human-in-the-loop workflow for ultimate accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-16 lg:py-20 bg-white text-center border-t border-[#E0E8F5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0A1838] rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(2,172,234,0.2)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase bg-[#112146] border border-[#2A3858] px-5 py-2 rounded-full inline-block mb-6 shadow-sm">
                Get Started
              </span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white mb-6 leading-tight">
                Spend less time processing <br className="hidden sm:block" /> clinical correspondence.
              </h2>
              <p className="text-[#94A3B8] text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
                Streamline document review and coding with OvoTech, while keeping your team in control of every clinical record update.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="whitespace-nowrap bg-gradient-to-r from-[#02ACEA] to-[#019EE1] text-white font-extrabold px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.4)] border border-[#02ACEA] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(2,172,234,0.6)] hover:-translate-y-1 hover:scale-105">
                  Request a Demo
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
                  Contact Our Team
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
