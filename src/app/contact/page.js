"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function ContactContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  let formTitle = "Send us a message";
  let buttonText = "Submit Request";
  
  if (type === "apply") {
    formTitle = "Apply for a Position";
    buttonText = "Submit Application";
  } else if (type === "demo") {
    formTitle = "Book a Platform Demo";
  }
  return (
    <>
      <TopBar />
      <Navbar />
      
      {/* 1. HERO SECTION (Split Layout) */}
      <section className="relative pt-[30px] lg:pt-[50px] pb-[60px] lg:pb-[80px] overflow-hidden bg-[#F4F7FC] border-b border-[#E0E8F5]">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(2,172,234,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-[#E0E8F5] text-[13px] font-black tracking-[2px] text-[#019EE1] uppercase mb-6 shadow-sm">
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
                <a href="#contact-form" className="whitespace-nowrap bg-[#0A1838] text-white font-bold px-8 py-3.5 rounded-full shadow-lg border-2 border-[#0A1838] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-[#02ACEA] hover:border-[#02ACEA]">
                  Send a Message
                </a>
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
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section id="contact-form" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Details & Map */}
          <div className="lg:w-1/2 flex flex-col gap-10">
            <div>
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Get in Touch</span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mt-3 mb-8 leading-tight">We are here to help.</h2>
              
              <div className="flex flex-col gap-6 w-full">
                
                <div className="w-full">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E0E8F5] shadow-sm flex items-center justify-center shrink-0 text-[#02ACEA]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <h3 className="text-[#0A1838] font-extrabold text-[18px]">Email Us</h3>
                  </div>
                  <p className="text-[#475569] text-[16px] w-full">
                    support@ovotech.co.uk
                  </p>
                </div>

                <div className="w-full">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E0E8F5] shadow-sm flex items-center justify-center shrink-0 text-[#02ACEA]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <h3 className="text-[#0A1838] font-extrabold text-[18px]">Our Office</h3>
                  </div>
                  <p className="text-[#475569] text-[16px] leading-relaxed w-full">
                    223-225 Stockport Road, Ashton-Under-Lyne, Lancashire, England, OL7 0NT
                  </p>
                </div>

              </div>
            </div>

            {/* Google Map */}
            <div className="w-full flex-1 rounded-3xl overflow-hidden shadow-lg border border-[#E0E8F5] relative z-10 bg-white min-h-[320px]">
              <iframe
                className="absolute inset-0 w-full h-full"
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
              
              <h3 className="text-[24px] font-extrabold text-[#0A1838] mb-8 relative z-10">{formTitle}</h3>
              
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
                  {buttonText}
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

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
