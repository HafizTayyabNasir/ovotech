import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the Hero section
old_hero_start = content.find("{/* 1. HERO SECTION")
old_hero_end = content.find("</section>", old_hero_start) + 10

new_hero = """{/* 1. HERO SECTION (Split Layout) */}
      <section className="relative pt-[120px] pb-[80px] overflow-hidden bg-[#F4F7FC] border-b border-[#E0E8F5]">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(2,172,234,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-[#E0E8F5] text-[12px] font-extrabold tracking-[2px] text-[#019EE1] uppercase mb-6 shadow-sm">
                Contact Us
              </span>
              <h1 className="text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.1] mb-6 tracking-tight text-[#0A1838]">
                Get in touch with <br/>
                <span className="text-[#02ACEA] italic">Our Team.</span>
              </h1>
              <p className="text-[#475569] text-[16px] leading-[1.6] mb-8 max-w-lg">
                Ready to transform your administrative workflows? We'd love to hear from you. Find our details below or send us a message to schedule a personalized demo.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} className="whitespace-nowrap bg-[#0A1838] text-white font-bold px-8 py-3.5 rounded-full shadow-lg border-2 border-[#0A1838] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-[#02ACEA] hover:border-[#02ACEA]">
                  Send a Message
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN - Floating Cards Graphic */}
            <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[480px] h-[380px]">
                {/* Back Card */}
                <div className="absolute top-4 right-4 w-[85%] h-[85%] bg-white rounded-[32px] border border-[#E0E8F5] shadow-sm transform rotate-6 opacity-60"></div>
                {/* Middle Card */}
                <div className="absolute top-0 right-0 w-[85%] h-[85%] bg-white rounded-[32px] border border-[#E0E8F5] shadow-md transform -rotate-3 opacity-80"></div>
                {/* Front Card */}
                <div className="absolute top-8 right-8 w-[85%] h-[85%] bg-[#0A1838] rounded-[32px] shadow-2xl p-8 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-500">
                  <div className="w-20 h-20 bg-[#02ACEA]/20 rounded-full flex items-center justify-center mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#02ACEA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <h3 className="text-white font-extrabold text-[24px] mb-2">We're Online</h3>
                  <p className="text-[#94A3B8] text-[15px]">Our team is ready to answer your questions and assist you with your practice's needs.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>"""

content = content[:old_hero_start] + new_hero + content[old_hero_end:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Contact Hero updated.")