import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the Hero section
old_hero_start = content.find("{/* 1. HERO SECTION")
old_hero_end = content.find("</section>", old_hero_start) + 10

new_hero = """{/* 1. HERO SECTION (Split Layout) */}
      <section className="relative pt-[120px] pb-[80px] overflow-hidden bg-white border-b border-[#E0E8F5]">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(2,172,234,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-[#E8F6FD] border border-[#019EE1]/20 text-[12px] font-extrabold tracking-[2px] text-[#019EE1] uppercase mb-6 shadow-sm">
                About OvoTech
              </span>
              <h1 className="text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.1] mb-6 tracking-tight text-[#0A1838]">
                Supporting Smarter <br/>
                <span className="text-[#02ACEA] italic">Clinical Workflows.</span>
              </h1>
              <p className="text-[#475569] text-[16px] leading-[1.6] mb-8 max-w-lg">
                OvoTech is a clinical document processing and coding workflow platform designed for UK primary care. We bring AI-assisted technology and structured workflows together to help practices manage clinical information more efficiently.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
                  ✅ Authorised Professionals
                </div>
                <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
                  ✅ Centralised Review
                </div>
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
      </section>"""

content = content[:old_hero_start] + new_hero + content[old_hero_end:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("About Hero updated.")