import os

new_about_page = """import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Ovotech",
  description: "OvoTech is a clinical document processing and coding workflow platform designed for UK primary care.",
};

export default function About() {
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
            About OvoTech
          </span>
          <h1 className="text-[clamp(40px,5vw,64px)] font-extrabold text-white leading-[1.1] tracking-tight mb-8">
            Supporting Smarter <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02ACEA] to-[#A594FF]">Clinical Workflows</span>
          </h1>
          <p className="text-[#94A3B8] text-[clamp(16px,2vw,20px)] leading-relaxed max-w-3xl mx-auto font-medium">
            OvoTech is a clinical document processing and coding workflow platform designed for UK primary care. We bring AI-assisted technology and structured workflows together to help practices manage clinical information more efficiently, while keeping authorised healthcare professionals at the centre of the review process.
          </p>
        </div>
      </section>

      {/* 2. OUR APPROACH */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-[#E0E8F5]">
               <img src="/gp-doctor-consultation.png" alt="Our Approach" className="w-full h-auto object-cover" />
             </div>
             {/* Decorative Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#02ACEA]/10 to-[#A594FF]/10 rounded-full blur-3xl -z-10" />
          </div>
          <div className="lg:w-1/2">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Our Approach</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mt-3 mb-6 leading-tight">Technology that supports clinical expertise.</h2>
            <div className="space-y-6 text-[18px] text-[#475569] leading-relaxed">
              <p>
                We believe technology should support clinical expertise, not replace it. OvoTech is designed around human oversight, transparency, and practical integration with existing clinical workflows.
              </p>
              <p>
                From clinical correspondence and patient context to coding recommendations and clinical record updates, our focus is on creating a workflow that is simple, structured, and easy to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUILT FOR PRIMARY CARE */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-[#E0E8F5]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-[#E0E8F5]">
               <img src="/gp-team-support.png" alt="Built for Primary Care" className="w-full h-auto object-cover" />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#A594FF]/10 to-[#02ACEA]/10 rounded-full blur-3xl -z-10" />
          </div>
          <div className="lg:w-1/2">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Built for Primary Care</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mt-3 mb-6 leading-tight">Designed around your day-to-day needs.</h2>
            <p className="text-[18px] text-[#475569] leading-relaxed mb-8">
              OvoTech is designed around the day-to-day needs of GP practices and the teams responsible for managing clinical information. Our goal is to provide technology that fits naturally into existing ways of working while making clinical administration more manageable.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#0A1838] text-white font-bold rounded-full px-8 py-4 hover:bg-[#02ACEA] transition-colors shadow-lg">
              Get in Touch
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
"""
with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'w', encoding='utf-8') as f:
    f.write(new_about_page)

print("About page redesigned successfully.")