new_contact_page = """import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Ovotech",
  description: "Get in touch with the OvoTech team.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A1838]">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(2,172,234,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(165,148,255,0.1)_0%,transparent_60%)] pointer-events-none" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#02ACEA]/10 border border-[#02ACEA]/20 text-[13px] font-extrabold tracking-[2px] text-[#02ACEA] uppercase mb-6 shadow-[0_0_15px_rgba(2,172,234,0.2)]">
            Contact Us
          </span>
          <h1 className="text-[clamp(40px,5vw,64px)] font-extrabold text-white leading-[1.1] tracking-tight mb-8">
            Get in touch with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02ACEA] to-[#A594FF]">Our Team</span>
          </h1>
          <p className="text-[#94A3B8] text-[clamp(16px,2vw,20px)] leading-relaxed max-w-2xl mx-auto font-medium">
            Ready to transform your administrative workflows? We'd love to hear from you. Find our details below or send us a message.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Details & Map */}
          <div className="lg:w-1/2 flex flex-col gap-10">
            <div>
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Get in Touch</span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mt-3 mb-8 leading-tight">We are here to help.</h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E0E8F5] shadow-sm flex items-center justify-center shrink-0 text-[#02ACEA]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="text-[#0A1838] font-extrabold text-[18px] mb-1">Email Us</h3>
                    <p className="text-[#475569] text-[16px]">support@ovotech.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E0E8F5] shadow-sm flex items-center justify-center shrink-0 text-[#02ACEA]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3 className="text-[#0A1838] font-extrabold text-[18px] mb-1">Our Office</h3>
                    <p className="text-[#475569] text-[16px] leading-relaxed max-w-[280px]">
                      223-225 Stockport Road,<br />
                      Ashton-Under-Lyne,<br />
                      Lancashire, England,<br />
                      OL7 0NT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[320px] rounded-3xl overflow-hidden shadow-lg border border-[#E0E8F5] relative z-10 bg-white">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=223-225%20Stockport%20Road,%20Ashton-Under-Lyne,%20Lancashire,%20England,%20OL7%200NT&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="OvoTech Office Location"
                style={{ filter: "contrast(1.05) opacity(0.9)" }}
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl border border-[#E0E8F5] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#02ACEA]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              <h3 className="text-[24px] font-extrabold text-[#0A1838] mb-8 relative z-10">Send us a message</h3>
              
              <form className="relative z-10 flex flex-col gap-6">
                <div>
                  <label className="block mb-2 text-[14px] font-bold text-[#0A1838]">Full Name</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-[#E0E8F5] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#02ACEA]/30 focus:border-[#02ACEA] transition-all" placeholder="Dr. Jane Doe" />
                </div>
                <div>
                  <label className="block mb-2 text-[14px] font-bold text-[#0A1838]">Practice Name</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-[#E0E8F5] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#02ACEA]/30 focus:border-[#02ACEA] transition-all" placeholder="City Medical Centre" />
                </div>
                <div>
                  <label className="block mb-2 text-[14px] font-bold text-[#0A1838]">Email Address</label>
                  <input type="email" className="w-full p-4 rounded-xl border border-[#E0E8F5] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#02ACEA]/30 focus:border-[#02ACEA] transition-all" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block mb-2 text-[14px] font-bold text-[#0A1838]">Message</label>
                  <textarea rows="4" className="w-full p-4 rounded-xl border border-[#E0E8F5] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#02ACEA]/30 focus:border-[#02ACEA] transition-all resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="w-full mt-2 bg-[#02ACEA] text-white font-extrabold text-[16px] py-4 rounded-xl shadow-[0_8px_20px_rgba(2,172,234,0.3)] hover:bg-[#0296CC] hover:shadow-[0_12px_25px_rgba(2,172,234,0.4)] hover:-translate-y-1 transition-all">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </>
  );
}
"""
with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'w', encoding='utf-8') as f:
    f.write(new_contact_page)

print("Contact page redesigned successfully.")