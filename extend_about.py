with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

additional_sections = """      {/* 4. CORE VALUES */}
      <section className="py-24 bg-white relative overflow-hidden">
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
      <section className="py-24 bg-white text-center border-t border-[#E0E8F5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0A1838] rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(2,172,234,0.2)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase bg-[#112146] border border-[#2A3858] px-5 py-2 rounded-full inline-block mb-6 shadow-sm">
                Get Started
              </span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white mb-6 leading-tight">
                Ready to modernise your <br className="hidden sm:block" /> clinical workflows?
              </h2>
              <p className="text-[#94A3B8] text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
                See exactly how OvoTech can reduce administrative burden and streamline correspondence review in your GP practice.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-[#02ACEA] text-white font-bold rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.3)] hover:bg-[#0296CC] hover:shadow-[0_12px_25px_rgba(2,172,234,0.4)] transition-all duration-300 hover:-translate-y-1">
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
"""

content = content.replace("      <Footer />", additional_sections + "\n      <Footer />")

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("About page extended.")