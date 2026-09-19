"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="bg-[#0A1838] min-h-screen text-white relative overflow-hidden">
        <ParticlesBackground color="#02ACEA" />
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 lg:px-12 z-10">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block bg-[#02ACEA]/15 text-[#02ACEA] text-[11px] font-bold tracking-[2px] py-1 px-4 rounded-full uppercase mb-6 border border-[#02ACEA]/30">
              COMPANY OVERVIEW
            </span>
            <h1 className="text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.1] mb-6 tracking-tight text-white">
              About <span className="text-[#02ACEA]">Ovotech</span>
            </h1>
            <p className="text-[18px] text-white/70 max-w-2xl mx-auto leading-relaxed">
              Empowering UK GP practices with a clinical document processing and coding workflow platform designed to streamline correspondence and protect practice capacity.
            </p>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="relative pb-32 px-6 lg:px-12 z-10">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Our Story Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-[32px] p-8 lg:p-12 border-2 border-white/10 hover:border-[#02ACEA] transition-colors duration-300 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#02ACEA]/20 blur-[50px] -mr-16 -mt-16 rounded-full pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0A1838] rounded-xl border border-[#02ACEA]/30 flex items-center justify-center text-[#02ACEA]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <h2 className="text-[28px] font-extrabold text-white">Our Story</h2>
              </div>
              <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                Ovotech was founded to address a critical challenge facing UK primary care: administrative coders and clinicians spending valuable hours manually reading hospital correspondence, navigating complex clinical systems, and searching for SNOMED CT codes.
              </p>
              <p className="text-white/70 text-[15px] leading-relaxed">
                We designed Ovotech specifically around the clinical document lifecycle of UK GP practices—bringing document intake, entity extraction, review queues, clinical review, patient history context, and EMIS Web write-back together into one seamless, human-assisted workspace.
              </p>
            </motion.div>

            {/* Our Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-[32px] p-8 lg:p-12 border-2 border-white/10 hover:border-[#02ACEA] transition-colors duration-300 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#02ACEA]/20 blur-[50px] -mr-16 -mt-16 rounded-full pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0A1838] rounded-xl border border-[#02ACEA]/30 flex items-center justify-center text-[#02ACEA]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h2 className="text-[28px] font-extrabold text-white">Our Mission</h2>
              </div>
              <p className="text-[20px] font-medium text-white leading-snug mb-6">
                To empower UK GP practices with structured, assisted clinical correspondence workflows.
              </p>
              <p className="text-white/70 text-[15px] leading-relaxed">
                We aim to eliminate document backlogs, enhance coding accuracy, and keep human reviewers in control of every record entry, ensuring patient safety and relieving the administrative burden on primary care staff.
              </p>
            </motion.div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-[#000000] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(2,172,234,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Get in Touch</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white mt-4 mb-6">Want to learn more about our team?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/contact" className="bg-[#02ACEA] text-white px-8 py-4 rounded-full font-extrabold text-[16px] hover:bg-white hover:text-[#0A1838] transition-all shadow-[0_0_20px_rgba(2,172,234,0.4)]">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

