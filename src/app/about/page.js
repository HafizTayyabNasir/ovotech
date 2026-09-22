import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'About Us | Ovotech',
  description: 'To simplify clinical document processing and reduce the administrative burden on GP practices, giving healthcare professionals more time to focus on patient care.'
};

export default function About() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* 1. HERO */}
      <section className="relative w-full overflow-hidden bg-[#FFFFFF] pt-[80px] pb-[80px] lg:pt-[120px] lg:pb-[100px] text-center border-b border-[#E0E8F5]">
        <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(2, 172, 234, 0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6">
          <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase mb-4 block">About Ovotech</span>
          <h1 className="text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.1] mb-6 tracking-tight text-[#0A1838]">
            Connecting Clinical Correspondence to Patient Care.
          </h1>
          <p className="text-[#475569] text-[18px] leading-[1.6] max-w-3xl mx-auto">
            Ovotech brings clinical document processing, information extraction, coding recommendations, and authorised human review into one connected workflow, working alongside existing clinical record systems so practices can manage clinical information more efficiently.
          </p>
        </div>
      </section>

      {/* 2 & 3. OUR STORY / WHY WE WERE BUILT & OUR PURPOSE */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Our Story</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Because Clinical Teams Have More Important Things to Focus On.</h2>
            <p className="text-[#475569] text-[16px] max-w-3xl mx-auto leading-relaxed mb-10">
              Every day, GP practices receive large volumes of clinical correspondence that need to be reviewed, interpreted, coded, and recorded. This often involves switching between systems, manually extracting information, identifying appropriate clinical codes, and updating patient records. These repetitive tasks consume valuable time and can contribute to administrative backlogs. Ovotech was built to simplify this process. By combining AI-assisted processing with authorised human review, the platform helps reduce repetitive administrative work, improve workflow efficiency, and support more consistent clinical coding.
            </p>
            
            {/* Our Purpose Callout */}
            <div className="bg-white border border-[#E0E8F5] rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-sm">
              <h3 className="text-[14px] font-extrabold text-[#0A1838] uppercase tracking-wider mb-4">Our Purpose</h3>
              <p className="text-[#02ACEA] text-[22px] lg:text-[24px] font-bold leading-relaxed">
                To simplify clinical document processing and reduce the administrative burden on GP practices, giving healthcare professionals more time to focus on what matters most: patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">How We Work</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Human-in-the-Loop Process.</h2>
            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">Ovotech structures correspondence and suggests coding. Your practice configures review routes, and your teams review the work routed to them.</p>
          </div>
          
          <div className="w-full relative overflow-x-auto no-scrollbar pb-8 mb-8">
            <div className="min-w-[1000px] relative px-4">
              {/* Connecting Path Line */}
              <div className="absolute top-[40px] left-10 right-10 h-2 bg-[#E0E8F5] rounded-full z-0">
                <div className="h-full w-full bg-gradient-to-r from-[#02ACEA] via-[#A855F7] to-[#02ACEA] opacity-50 rounded-full"></div>
              </div>
              
              <div className="flex justify-between relative z-10">
                {[
                  { num: "01", title: "Receive", desc: "Clinical correspondence enters a visible queue." },
                  { num: "02", title: "Extract", desc: "Relevant information is structured from the source." },
                  { num: "03", title: "Identify", desc: "Clinical concepts are linked to supporting evidence." },
                  { num: "04", title: "Suggest", desc: "SNOMED CT codes are presented for consideration." },
                  { num: "05", title: "Review", desc: "An authorised person checks context and evidence." },
                  { num: "06", title: "Approve", desc: "The final selection is explicitly approved." },
                  { num: "07", title: "Write back", desc: "Approved information is posted to the clinical record system." }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center w-32 text-center group">
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-[#02ACEA] shadow-lg flex items-center justify-center font-extrabold text-[24px] text-[#0A1838] mb-4 group-hover:scale-110 transition-transform relative bg-clip-padding">
                      {step.num}
                    </div>
                    <h3 className="text-[#0A1838] font-bold text-[16px] mb-2">{step.title}</h3>
                    <p className="text-[#475569] text-[12px] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST & COMPLIANCE */}
      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">Trust & Compliance</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-8">Assurance you can build on.</h2>
          
          <div className="bg-white border border-[#E0E8F5] rounded-3xl p-8 lg:p-12 shadow-sm max-w-5xl mx-auto">
            <p className="text-[#475569] text-[16px] max-w-2xl mx-auto mb-10">Security controls support the workflow around clinical correspondence, access, review and auditability in UK healthcare environments.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors text-left">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[13px] shrink-0">DTAC</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Assessed</div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors text-left">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[13px] shrink-0">DSPT</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Standards met</div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors text-left">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[11px] leading-tight text-center shrink-0">ISO<br/>27001</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Certified</div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors text-left">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[10px] leading-tight text-center shrink-0">Cyber<br/>Essent</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Certified</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 bg-white text-center border-t border-[#E0E8F5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#F4F7FC] rounded-[40px] p-10 md:p-16 border border-[#E0E8F5] shadow-xl relative overflow-hidden">
            <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(2, 172, 234, 0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div className="relative z-10">
              <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase bg-white px-5 py-2 rounded-full border border-[#E0E8F5] inline-block mb-6 shadow-sm">Request a Demo</span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#0A1838] mb-6">See how Ovotech could work in your practice.</h2>
              <p className="text-[#475569] text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">Explore how Ovotech can help your team process clinical correspondence, review suggested coding and maintain visibility across your practice.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-[#0A1838] text-white font-bold rounded-full shadow-lg hover:bg-black transition-all transform hover:-translate-y-1">
                  Request a Demo
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white border-2 border-[#E0E8F5] text-[#0A1838] font-bold rounded-full hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#02ACEA] hover:text-[#02ACEA]">
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}