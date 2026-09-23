import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

what_is_start = content.find("WHAT IS OVOTECH?")
section_start = content.rfind("<section", 0, what_is_start)
section_end = content.find("</section>", what_is_start) + 10

new_bento_section = """<section className="py-24 bg-white relative overflow-hidden">
        <div style={{ position: "absolute", top: "0%", left: "0%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(2, 172, 234, 0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#E8F6FD] text-[12px] font-extrabold tracking-[2px] text-[#019EE1] uppercase mb-4">WHAT IS OVOTECH?</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] leading-tight max-w-3xl mx-auto">A Smarter Way to Manage <br/><span className="text-[#019EE1]">Clinical Correspondence</span></h2>
            <p className="text-[#475569] text-[18px] mt-6 max-w-2xl mx-auto">
              Ovotech brings document processing, information extraction, and authorised human review into one connected workflow.
            </p>
          </div>
          
          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Large Wide Box */}
            <div className="md:col-span-2 bg-[#F8FAFC] rounded-3xl border border-[#E0E8F5] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#019EE1]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-[#E0E8F5] mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#019EE1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h3 className="text-[24px] font-extrabold text-[#0A1838] mb-3">AI-Powered Extraction</h3>
                <p className="text-[#475569] text-[16px] leading-relaxed max-w-md">
                  Using advanced AI, the platform identifies relevant clinical information from incoming correspondence instantly, significantly reducing manual data entry.
                </p>
              </div>
            </div>

            {/* Box 2: Tall Box */}
            <div className="md:col-span-1 bg-white rounded-3xl border border-[#E0E8F5] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] flex items-center justify-center mb-6 group-hover:bg-[#E8F6FD] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#019EE1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <h3 className="text-[20px] font-bold text-[#0A1838] mb-3">SNOMED CT Coding</h3>
                <p className="text-[#475569] text-[15px] leading-relaxed">
                  Ovotech automatically suggests relevant SNOMED CT codes for your review based on the extracted clinical narrative.
                </p>
              </div>
            </div>

            {/* Box 3: Square Box */}
            <div className="md:col-span-1 bg-white rounded-3xl border border-[#E0E8F5] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] flex items-center justify-center mb-6 group-hover:bg-[#E8F6FD] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#019EE1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#0A1838] mb-3">Human-in-the-Loop</h3>
              <p className="text-[#475569] text-[15px] leading-relaxed">
                Empowers authorised reviewers to verify and approve extracted data before it enters the record.
              </p>
            </div>

            {/* Box 4: Large Wide Box */}
            <div className="md:col-span-2 bg-[#0A1838] rounded-3xl border border-[#2A3858] p-8 md:p-10 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/hero-tech.png')] opacity-10 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center h-full">
                <div className="flex-1">
                  <div className="inline-block py-1 px-3 rounded-full bg-[#112146] border border-[#2A3858] text-[11px] font-bold text-[#A594FF] uppercase tracking-wider mb-4">Integration</div>
                  <h3 className="text-[24px] font-extrabold text-white mb-3">Seamless Clinical Integration</h3>
                  <p className="text-gray-300 text-[15px] leading-relaxed">
                    Designed to work perfectly alongside existing clinical systems. Ovotech helps practices manage clinical information more efficiently without replacing the systems they already use every day.
                  </p>
                </div>
                <div className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#019EE1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>"""

content = content[:section_start] + new_bento_section + content[section_end:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated 'WHAT IS OVOTECH' section with Bento grid.")