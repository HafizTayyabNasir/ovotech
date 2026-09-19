"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />

      <main className="text-[#0A1838]">
        
        {/* 1. HERO SECTION (Clean, White, Spacious) */}
        <section className="relative pt-32 pb-24 px-6 lg:px-12 bg-white overflow-hidden">
          {/* Subtle light background decoration */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] h-full pointer-events-none opacity-40">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#02ACEA] rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-[#0A1838] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
          </div>
          
          <div className="relative z-10 max-w-[1000px] mx-auto text-center mt-10">
            <span className="inline-block bg-[#F4F7FC] text-[#02ACEA] text-[12px] font-bold tracking-[2px] py-1.5 px-5 rounded-full uppercase mb-6 border border-[#E0E8F5]">
              Who We Are
            </span>
            <h1 className="text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.1] mb-8 tracking-tight text-[#0A1838]">
              Restoring time to <span className="text-[#02ACEA]">clinical care.</span>
            </h1>
            <p className="text-[18px] lg:text-[22px] text-[#475569] max-w-3xl mx-auto leading-relaxed">
              Ovotech is empowering UK GP practices with intelligent, human-assisted workflows that eliminate administrative backlogs and protect practice capacity.
            </p>
          </div>
        </section>

        {/* 2. THE STORY / PROBLEM (Light Gray/Blue Background) */}
        <section className="py-24 bg-[#F4F7FC] px-6 lg:px-12">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] mb-6 text-[#0A1838]">
                Why we started <span className="text-[#02ACEA]">Ovotech</span>
              </h2>
              <p className="text-[16px] text-[#475569] leading-relaxed mb-6">
                Primary care is the backbone of the NHS, yet clinical and administrative staff spend thousands of hours every month manually processing incoming hospital correspondence. 
              </p>
              <p className="text-[16px] text-[#475569] leading-relaxed mb-6">
                Navigating complex clinical systems, extracting critical information from discharge summaries, and searching for the correct SNOMED CT codes is a heavily manual, error-prone, and exhausting process.
              </p>
              <p className="text-[16px] font-bold text-[#0A1838] leading-relaxed border-l-4 border-[#02ACEA] pl-4">
                We built Ovotech to give that time back. Our platform doesn't replace the human reviewer; it empowers them with a unified workspace, contextual patient history, and AI-assisted extraction.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#E0E8F5]">
                <div className="text-[48px] font-extrabold text-[#02ACEA] mb-2">10M+</div>
                <div className="text-[14px] font-bold text-[#0A1838] leading-tight">Clinical documents processed monthly in the UK</div>
              </div>
              <div className="bg-[#0A1838] p-8 rounded-3xl shadow-lg transform translate-y-8">
                <div className="text-[48px] font-extrabold text-white mb-2">100%</div>
                <div className="text-[14px] font-bold text-[#02ACEA] leading-tight">Human oversight maintained on every record</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR MISSION PILLARS (White Background, Wide Grid) */}
        <section className="py-32 px-6 lg:px-12 bg-white">
          <div className="max-w-[1350px] mx-auto">
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Our Approach</span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mt-4 mb-6">Designed around the practice.</h2>
              <p className="text-[18px] text-[#475569]">We didn't just build an AI tool; we built a comprehensive workflow tailored specifically to the lifecycle of UK GP documents.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Seamless Integration",
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                  desc: "Connecting directly with EHR feeds and EMIS Web to ensure no manual uploading or copy-pasting is required."
                },
                {
                  title: "Clinical Accuracy",
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
                  desc: "Assisting coders with high-precision SNOMED CT suggestions and entity extraction directly from the unstructured text."
                },
                {
                  title: "Audit & Oversight",
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
                  desc: "Keeping every step transparent. Role-based permissions and explicit authorisations mean accountability is never lost."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl p-10 border border-[#E0E8F5] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-[#F4F7FC] rounded-2xl flex items-center justify-center text-[#02ACEA] mb-8">
                    {item.icon}
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0A1838] mb-4">{item.title}</h3>
                  <p className="text-[16px] text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECURITY & ASSURANCE (Light Gray Background) */}
        <section className="py-24 bg-[#F8FAFC] border-y border-[#E0E8F5]">
          <div className="max-w-[1350px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mb-12">Assurance you can build on</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-[#E0E8F5]">
                <div className="font-extrabold text-[#0A1838] text-[24px] mb-2">DTAC</div>
                <div className="text-[12px] font-bold uppercase tracking-widest text-[#02ACEA]">Assessed</div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-[#E0E8F5]">
                <div className="font-extrabold text-[#0A1838] text-[24px] mb-2">DSPT</div>
                <div className="text-[12px] font-bold uppercase tracking-widest text-[#02ACEA]">Standards Met</div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-[#E0E8F5]">
                <div className="font-extrabold text-[#0A1838] text-[24px] mb-2">ISO 27001</div>
                <div className="text-[12px] font-bold uppercase tracking-widest text-[#02ACEA]">Certified</div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-[#E0E8F5]">
                <div className="font-extrabold text-[#0A1838] text-[18px] mb-2">Cyber Essentials</div>
                <div className="text-[12px] font-bold uppercase tracking-widest text-[#02ACEA]">Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA SECTION (Dark Blue to anchor the page) */}
        <section className="py-24 bg-[#0A1838] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(2,172,234,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Get in Touch</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white mt-4 mb-6">Ready to transform your practice?</h2>
            <p className="text-white/70 text-[18px] mb-10 leading-relaxed">Reach out to our team to discover how Ovotech can streamline your clinical correspondence today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-[#02ACEA] text-white px-8 py-4 rounded-full font-extrabold text-[16px] hover:bg-white hover:text-[#0A1838] transition-all shadow-[0_4px_14px_rgba(2,172,234,0.4)]">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}