"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-[#0A1838]">
      <TopBar />
      <Navbar />

      <main>
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-24 px-6 lg:px-12 bg-white overflow-hidden border-b border-[#E0E8F5]">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] h-full pointer-events-none opacity-30">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#02ACEA] rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
          </div>
          <div className="relative z-10 max-w-[1000px] mx-auto text-center mt-10">
            <span className="inline-block bg-[#F4F7FC] text-[#02ACEA] text-[12px] font-bold tracking-[2px] py-1.5 px-5 rounded-full uppercase mb-6 border border-[#E0E8F5]">
              Company Overview
            </span>
            <h1 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-[1.1] mb-8 tracking-tight text-[#0A1838]">
              Restoring time to <br/> <span className="text-[#02ACEA]">clinical care.</span>
            </h1>
            <p className="text-[18px] lg:text-[22px] text-[#475569] max-w-3xl mx-auto leading-relaxed">
              Ovotech is empowering UK GP practices with intelligent, human-assisted workflows that eliminate administrative backlogs and protect practice capacity.
            </p>
          </div>
        </section>

        {/* 2. STATS & IMPACT SECTION */}
        <section className="py-16 bg-[#F4F7FC] px-6 lg:px-12 border-b border-[#E0E8F5]">
          <div className="max-w-[1350px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-[40px] md:text-[56px] font-extrabold text-[#02ACEA] mb-2">10M+</div>
                <div className="text-[15px] font-bold text-[#0A1838]">Documents Processed</div>
              </div>
              <div>
                <div className="text-[40px] md:text-[56px] font-extrabold text-[#02ACEA] mb-2">100%</div>
                <div className="text-[15px] font-bold text-[#0A1838]">Human Oversight</div>
              </div>
              <div>
                <div className="text-[40px] md:text-[56px] font-extrabold text-[#02ACEA] mb-2">2.1m</div>
                <div className="text-[15px] font-bold text-[#0A1838]">Avg. Processing Time</div>
              </div>
              <div>
                <div className="text-[40px] md:text-[56px] font-extrabold text-[#02ACEA] mb-2">24/7</div>
                <div className="text-[15px] font-bold text-[#0A1838]">System Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE PROBLEM / ORIGIN STORY (Split Layout) */}
        <section className="py-24 bg-white px-6 lg:px-12">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase mb-4 block">Our Origin Story</span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] mb-6 text-[#0A1838]">
                Why we started <span className="text-[#02ACEA]">Ovotech</span>
              </h2>
              <p className="text-[16px] text-[#475569] leading-relaxed mb-6">
                Primary care is the backbone of the NHS, yet clinical and administrative staff spend thousands of hours every month manually processing incoming hospital correspondence. 
              </p>
              <p className="text-[16px] text-[#475569] leading-relaxed mb-6">
                Navigating complex clinical systems, extracting critical information from discharge summaries, and searching for the correct SNOMED CT codes is a heavily manual, error-prone, and exhausting process.
              </p>
              <div className="bg-[#F4F7FC] p-6 rounded-2xl border-l-4 border-[#02ACEA]">
                <p className="text-[16px] font-bold text-[#0A1838] leading-relaxed">
                  We built Ovotech to give that time back. Our platform empowers human reviewers with a unified workspace, contextual patient history, and AI-assisted extraction.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <img src="/media_1789796793589.png" alt="Ovotech Dashboard" className="rounded-3xl shadow-xl border border-[#E0E8F5] object-cover w-full h-[400px]" />
            </div>
          </div>
        </section>

        {/* 4. OUR MISSION PILLARS (3-Column Grid) */}
        <section className="py-24 px-6 lg:px-12 bg-[#F8FAFC] border-y border-[#E0E8F5]">
          <div className="max-w-[1350px] mx-auto">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Our Approach</span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mt-4 mb-6">Designed around the practice.</h2>
              <p className="text-[18px] text-[#475569]">We didn't just build an AI tool; we built a comprehensive workflow tailored specifically to the lifecycle of UK GP documents.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Seamless Integration", desc: "Connecting directly with EHR feeds and EMIS Web to ensure no manual uploading or copy-pasting is required." },
                { title: "Clinical Accuracy", desc: "Assisting coders with high-precision SNOMED CT suggestions and entity extraction directly from the unstructured text." },
                { title: "Audit & Oversight", desc: "Keeping every step transparent. Role-based permissions and explicit authorisations mean accountability is never lost." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl p-10 border border-[#E0E8F5] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-[#02ACEA]/10 rounded-xl flex items-center justify-center text-[#02ACEA] mb-8 font-extrabold text-[24px]">
                    0{i+1}
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0A1838] mb-4">{item.title}</h3>
                  <p className="text-[16px] text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OUR VALUES (Large Bento Grid Style) */}
        <section className="py-24 bg-white px-6 lg:px-12">
          <div className="max-w-[1350px] mx-auto">
            <div className="mb-16">
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Our Core Values</span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mt-4">What drives us forward.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Patient First", text: "Every feature we build ultimately aims to improve patient safety and care quality." },
                { title: "Clinician Led", text: "We listen to the doctors and administrative staff who use our system daily." },
                { title: "Radical Transparency", text: "AI should not be a black box. Evidence and source documents are always visible." },
                { title: "Continuous Improvement", text: "We constantly iterate on our extraction models to handle new formats and clinical terminologies." }
              ].map((val, idx) => (
                <div key={idx} className="bg-[#F4F7FC] p-8 rounded-3xl border border-[#E0E8F5]">
                  <h3 className="text-[20px] font-extrabold text-[#0A1838] mb-4">{val.title}</h3>
                  <p className="text-[15px] text-[#475569]">{val.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TIMELINE / OUR JOURNEY */}
        <section className="py-24 bg-[#F8FAFC] px-6 lg:px-12 border-y border-[#E0E8F5]">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838]">Our Journey</h2>
              <p className="text-[18px] text-[#475569] mt-4">The milestones that shaped Ovotech into what it is today.</p>
            </div>
            <div className="relative border-l-4 border-[#02ACEA]/30 ml-4 md:ml-0 md:pl-0 md:border-none">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#02ACEA]/20 transform -translate-x-1/2"></div>
              {[
                { year: "2021", title: "The Concept", desc: "Recognising the growing administrative burden in primary care." },
                { year: "2022", title: "Early Prototypes", desc: "Testing AI extraction on anonymised clinical correspondence." },
                { year: "2023", title: "EMIS Integration", desc: "Achieving full read/write integration with EMIS Web." },
                { year: "2024", title: "National Rollout", desc: "Expanding to PCNs and GP practices across the UK." }
              ].map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between mb-12 md:mb-24 last:mb-0 w-full pl-8 md:pl-0">
                  <div className={"hidden md:block w-5/12 " + (idx % 2 === 0 ? "text-right pr-12" : "order-3 pl-12")}>
                    {idx % 2 === 0 ? (
                      <div>
                        <h3 className="text-[24px] font-extrabold text-[#0A1838]">{step.title}</h3>
                        <p className="text-[#475569] mt-2">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="text-[48px] font-extrabold text-[#02ACEA]/20">{step.year}</div>
                    )}
                  </div>
                  
                  <div className="absolute left-[-10px] md:left-1/2 w-6 h-6 rounded-full bg-[#02ACEA] border-4 border-white transform md:-translate-x-1/2 z-10 shadow-md"></div>
                  
                  <div className={"w-full md:w-5/12 " + (idx % 2 === 0 ? "order-3 md:pl-12" : "text-left md:text-right md:pr-12")}>
                    {idx % 2 === 0 ? (
                      <div className="text-[48px] font-extrabold text-[#02ACEA]/20 hidden md:block">{step.year}</div>
                    ) : (
                      <div>
                        <h3 className="text-[24px] font-extrabold text-[#0A1838]">{step.title}</h3>
                        <p className="text-[#475569] mt-2">{step.desc}</p>
                      </div>
                    )}
                    {/* Mobile fallback */}
                    <div className="block md:hidden">
                       <div className="text-[24px] font-extrabold text-[#02ACEA] mt-2 mb-1">{step.year}</div>
                       <h3 className="text-[20px] font-extrabold text-[#0A1838]">{step.title}</h3>
                       <p className="text-[#475569] mt-2">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. LEADERSHIP / TEAM SECTION */}
        <section className="py-24 bg-white px-6 lg:px-12">
          <div className="max-w-[1350px] mx-auto text-center">
             <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Leadership</span>
             <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mt-4 mb-16">Meet the team behind Ovotech.</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="bg-[#F4F7FC] rounded-3xl p-6 border border-[#E0E8F5]">
                   <div className="w-full h-48 bg-white rounded-2xl mb-6 border border-[#E0E8F5] flex items-center justify-center">
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E0E8F5" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                   </div>
                   <h3 className="text-[20px] font-extrabold text-[#0A1838]">Team Member</h3>
                   <p className="text-[#02ACEA] font-bold text-[14px] mt-1">Co-Founder / Director</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 8. TESTIMONIALS / QUOTES */}
        <section className="py-24 bg-[#F8FAFC] border-y border-[#E0E8F5]">
          <div className="max-w-[1350px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mb-12">What our partners say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-3xl border border-[#E0E8F5] shadow-sm text-left relative">
                <div className="text-[64px] text-[#02ACEA]/20 absolute top-4 left-6 leading-none font-serif">"</div>
                <p className="text-[18px] text-[#475569] relative z-10 italic mt-4">
                  Ovotech has completely transformed how our clinical coders manage their daily workload. The accuracy of the extraction and the ease of the EMIS integration is unmatched.
                </p>
                <div className="mt-8 font-extrabold text-[#0A1838]">Dr. Sarah Jenkins</div>
                <div className="text-[14px] text-[#475569]">Clinical Lead, Riverside PCN</div>
              </div>
              <div className="bg-white p-10 rounded-3xl border border-[#E0E8F5] shadow-sm text-left relative">
                <div className="text-[64px] text-[#02ACEA]/20 absolute top-4 left-6 leading-none font-serif">"</div>
                <p className="text-[18px] text-[#475569] relative z-10 italic mt-4">
                  The visibility we now have over the entire document lifecycle is fantastic. Nothing gets lost, and every SNOMED code is backed up by clear evidence.
                </p>
                <div className="mt-8 font-extrabold text-[#0A1838]">Mark Thompson</div>
                <div className="text-[14px] text-[#475569]">Practice Manager</div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. ASSURANCE & COMPLIANCE (White variant) */}
        <section className="py-24 bg-white">
          <div className="max-w-[1350px] mx-auto px-6 lg:px-12 text-center">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Trust & Security</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-4 mb-12">Assurance you can build on</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center justify-center p-8 bg-[#F4F7FC] rounded-3xl border border-[#E0E8F5]">
                <div className="font-extrabold text-[#0A1838] text-[28px] mb-2">DTAC</div>
                <div className="text-[13px] font-bold uppercase tracking-widest text-[#02ACEA]">Assessed</div>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-[#F4F7FC] rounded-3xl border border-[#E0E8F5]">
                <div className="font-extrabold text-[#0A1838] text-[28px] mb-2">DSPT</div>
                <div className="text-[13px] font-bold uppercase tracking-widest text-[#02ACEA]">Standards Met</div>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-[#F4F7FC] rounded-3xl border border-[#E0E8F5]">
                <div className="font-extrabold text-[#0A1838] text-[28px] mb-2">ISO 27001</div>
                <div className="text-[13px] font-bold uppercase tracking-widest text-[#02ACEA]">Certified</div>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-[#F4F7FC] rounded-3xl border border-[#E0E8F5]">
                <div className="font-extrabold text-[#0A1838] text-[20px] mb-2">Cyber Essentials</div>
                <div className="text-[13px] font-bold uppercase tracking-widest text-[#02ACEA]">Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section className="py-24 bg-[#F8FAFC] border-y border-[#E0E8F5] px-6 lg:px-12">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838]">Company FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Where is Ovotech based?", a: "We are headquartered in the UK, with our entire development and support team located domestically to ensure compliance and close collaboration with the NHS." },
                { q: "How do you protect patient data?", a: "We are fully DSPT and DTAC compliant. Data is encrypted in transit and at rest, and we adhere to strict NHS data governance standards." },
                { q: "Can we partner with Ovotech?", a: "Yes, we work closely with PCNs, ICBs, and independent primary care groups. Contact our team to discuss partnership opportunities." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-[#E0E8F5] shadow-sm">
                  <h3 className="font-extrabold text-[#0A1838] text-[18px] mb-2">{faq.q}</h3>
                  <p className="text-[#475569]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. CTA SECTION (Dark Blue to anchor the page) */}
        <section className="py-24 bg-[#0A1838] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(2,172,234,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Join Us</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white mt-4 mb-6">Ready to transform your practice?</h2>
            <p className="text-white/70 text-[18px] mb-10 leading-relaxed">Reach out to our team to discover how Ovotech can streamline your clinical correspondence today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-[#02ACEA] text-white px-8 py-4 rounded-full font-extrabold text-[16px] hover:bg-white hover:text-[#0A1838] transition-all shadow-[0_4px_14px_rgba(2,172,234,0.4)]">
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}