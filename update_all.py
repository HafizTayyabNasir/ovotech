import re
import sys

path = 'src/app/third/page.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import
if 'import InteractiveWorkflowShowcaseThird' not in content:
    content = content.replace('import Footer from "@/components/Footer";', 'import Footer from "@/components/Footer";\nimport InteractiveWorkflowShowcaseThird from "@/components/InteractiveWorkflowShowcaseThird";')

# Insert Component
if '<InteractiveWorkflowShowcaseThird />' not in content:
    s4_marker = '      {/* SECTION 4 — FOR PRACTICE MANAGERS */}'
    idx = content.find(s4_marker)
    if idx != -1:
        content = content[:idx] + '      {/* INTERACTIVE WORKFLOW SHOWCASE */}\n      <InteractiveWorkflowShowcaseThird />\n\n' + content[idx:]

def do_replace(start_str, end_str, replacement):
    global content
    # build regex pattern ignoring whitespace variations
    def build_pattern(s):
        parts = s.strip().split()
        return r'\s+'.join(map(re.escape, parts))
    
    pattern = build_pattern(start_str) + r'[\s\S]*?' + build_pattern(end_str)
    
    # Check if found
    if not re.search(pattern, content):
        print("FAILED to find:", start_str[:30])
        return
        
    content = re.sub(pattern, replacement, content, count=1)
    print("Replaced:", start_str[:30])

s2_start = '<div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-8 snap-x no-scrollbar">'
s2_end = '<div className="text-center text-[12px] text-[#64748B]">'
s2_new = r'''          <div className="w-full py-12 relative overflow-x-auto no-scrollbar">
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
                  { num: "07", title: "Write back", desc: "Approved information is posted to EMIS Web." }
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
          <div className="text-center text-[12px] text-[#64748B]">'''
do_replace(s2_start, s2_end, s2_new)

s3_start = '<div className="bg-[#FFFFFF] rounded-3xl border border-[#E0E8F5] shadow-lg overflow-hidden">'
s3_end = '      {/* INTERACTIVE WORKFLOW SHOWCASE'
s3_new = r'''<div className="flex flex-col gap-12">
            {[
              {
                title: "Clinical Overview",
                content: (
                  <div className="bg-[#F8FAFC] rounded-3xl border border-[#E0E8F5] shadow-lg overflow-hidden p-6 lg:p-10">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-[20px] font-extrabold text-[#0A1838]">Good morning, Jamie</h3>
                      <span className="text-[14px] text-[#64748B] font-medium">Thursday · Riverside Practice</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {[
                        { label: "Assigned to you", val: "24", color: "text-blue-600" },
                        { label: "Ready for review", val: "8", color: "text-green-600" },
                        { label: "Need attention", val: "3", color: "text-red-600" },
                        { label: "Completed today", val: "12", color: "text-gray-600" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 border border-[#E0E8F5] shadow-sm">
                          <div className="text-[12px] text-[#64748B] font-semibold mb-1 uppercase tracking-wide">{stat.label}</div>
                          <div className={`text-[28px] font-extrabold ${stat.color}`}>{stat.val}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm overflow-hidden">
                      <div className="bg-[#F4F7FC] px-5 py-3 border-b border-[#E0E8F5] font-bold text-[14px] text-[#0A1838]">Priority work</div>
                      <div className="divide-y divide-[#E0E8F5]">
                        {[
                          { doc: "Discharge summary", ref: "SAMPLE-042", time: "Today 09:38", status: "Ready for review", statusColor: "text-green-600 bg-green-50" },
                          { doc: "Clinic letter", ref: "SAMPLE-018", time: "Today 09:21", status: "Needs attention", statusColor: "text-red-600 bg-red-50" },
                          { doc: "Outpatient letter", ref: "SAMPLE-113", time: "Today 09:14", status: "In review", statusColor: "text-blue-600 bg-blue-50" }
                        ].map((item, i) => (
                          <div key={i} className="px-5 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                            <div>
                              <div className="font-bold text-[14px] text-[#0A1838]">{item.doc}</div>
                              <div className="text-[12px] text-[#64748B] mt-1">{item.ref} · {item.time}</div>
                            </div>
                            <div className={`text-[12px] font-bold px-3 py-1 rounded-full ${item.statusColor}`}>
                              {item.status}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: "Review Queue",
                content: (
                  <div className="bg-[#F8FAFC] rounded-3xl border border-[#E0E8F5] shadow-lg overflow-hidden p-6 lg:p-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-4 py-2 bg-[#0A1838] text-white text-[13px] font-bold rounded-lg shadow-sm">24 open items</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">Assigned to me (14)</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">Ready for review (8)</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">Needs attention (3)</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">In review (5)</span>
                      <span className="px-4 py-2 bg-white border border-[#E0E8F5] text-[#475569] text-[13px] font-bold rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">Overdue (2)</span>
                    </div>
                    <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm overflow-hidden">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#F4F7FC] text-[12px] font-bold text-[#64748B] uppercase tracking-wide border-b border-[#E0E8F5]">
                            <th className="p-4">Document / Patient</th>
                            <th className="p-4">Received</th>
                            <th className="p-4">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E0E8F5]">
                          {[
                            { doc: "Discharge summary", ref: "SAMPLE-042", time: "Today 09:38", status: "Ready for review", color: "text-green-700 bg-green-50" },
                            { doc: "Clinic letter", ref: "SAMPLE-018", time: "Today 09:21", status: "Needs attention", color: "text-red-700 bg-red-50" },
                            { doc: "Outpatient letter", ref: "SAMPLE-113", time: "Today 09:14", status: "In review", color: "text-blue-700 bg-blue-50" },
                            { doc: "Clinical correspondence", ref: "SAMPLE-076", time: "Yesterday 16:47", status: "Ready for review", color: "text-green-700 bg-green-50" }
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors text-[14px]">
                              <td className="p-4">
                                <div className="font-bold text-[#0A1838]">{row.doc}</div>
                                <div className="text-[12px] text-[#64748B] mt-1">{row.ref}</div>
                              </td>
                              <td className="p-4 text-[#475569] font-medium">{row.time}</td>
                              <td className="p-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-[12px] font-bold ${row.color}`}>
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
              },
              {
                title: "Clinical Review",
                content: (
                  <div className="bg-[#F8FAFC] rounded-3xl border border-[#E0E8F5] shadow-lg overflow-hidden p-6 lg:p-10 flex flex-col gap-6">
                    <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E0E8F5] shadow-sm">
                      <div className="flex items-center gap-3 text-[14px] font-bold text-[#0A1838]">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> In review
                      </div>
                      <button className="px-5 py-2 bg-[#02ACEA] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#028bbd] transition-colors">
                        Approve review
                      </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm flex flex-col">
                        <div className="bg-[#F4F7FC] px-5 py-3 border-b border-[#E0E8F5] flex justify-between items-center rounded-t-xl">
                          <span className="font-bold text-[13px] text-[#0A1838] uppercase tracking-wide">01 Original document</span>
                        </div>
                        <div className="p-6 font-serif text-[15px] leading-relaxed text-[#0A1838] flex-1">
                          <div className="text-[11px] text-[#64748B] font-sans font-bold uppercase tracking-widest mb-4 pb-4 border-b border-gray-100">RIVERSIDE MEDICAL PRACTICE · FICTIONAL SAMPLE · DEMO-107</div>
                          <h4 className="font-sans font-bold text-[18px] mb-4">Discharge summary</h4>
                          <p>
                            Patient has a <span className="bg-blue-100 text-blue-900 font-semibold px-1 rounded">history of type 2 diabetes</span>. Ongoing management was discussed during the consultation. Continue review with the practice team. Reconcile the clinical record against the full correspondence.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm">
                          <div className="bg-[#F4F7FC] px-5 py-3 border-b border-[#E0E8F5] rounded-t-xl">
                            <span className="font-bold text-[13px] text-[#0A1838] uppercase tracking-wide">02 Structured information</span>
                          </div>
                          <div className="p-5 grid grid-cols-2 gap-4 text-[13px]">
                            <div><div className="text-[#64748B] text-[11px] font-bold uppercase mb-1">Document type</div><div className="font-medium text-[#0A1838]">Discharge summary</div></div>
                            <div><div className="text-[#64748B] text-[11px] font-bold uppercase mb-1">Clinical concept</div><div className="font-medium text-[#0A1838]">Type 2 diabetes mellitus</div></div>
                            <div><div className="text-[#64748B] text-[11px] font-bold uppercase mb-1">Medication details</div><div className="font-medium text-[#0A1838]">Not specified</div></div>
                            <div><div className="text-[#64748B] text-[11px] font-bold uppercase mb-1">Plan/follow-up</div><div className="font-medium text-[#0A1838]">Practice team review</div></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm border-l-4 border-l-[#02ACEA]">
                          <div className="bg-[#F4F7FC] px-5 py-3 border-b border-[#E0E8F5] rounded-tr-xl flex justify-between items-center">
                            <span className="font-bold text-[13px] text-[#0A1838] uppercase tracking-wide">03 SNOMED suggestions</span>
                            <span className="text-[11px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">High relevance</span>
                          </div>
                          <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <div className="text-[15px] font-bold text-[#0A1838]">Type 2 diabetes mellitus</div>
                                <div className="text-[12px] text-[#64748B] mt-1 font-mono bg-gray-50 inline-block px-2 py-1 rounded border border-gray-100">SNOMED CT 44054006</div>
                              </div>
                              <span className="text-[11px] font-bold text-[#02ACEA] bg-blue-50 px-2 py-1 rounded">Suggested</span>
                            </div>
                            <div className="text-[13px] text-[#475569] italic mb-4 bg-gray-50 p-3 rounded-lg border-l-2 border-gray-300">
                              "...<span className="font-bold text-[#0A1838]">Patient has a history of type 2 diabetes.</span>..."
                            </div>
                            <div className="flex gap-2">
                              <button className="flex-1 py-2 bg-[#02ACEA] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#028bbd]">Accept</button>
                              <button className="flex-1 py-2 bg-white border border-[#E0E8F5] text-[#0A1838] text-[13px] font-bold rounded-lg hover:bg-gray-50">Amend</button>
                              <button className="flex-1 py-2 bg-white border border-red-200 text-red-600 text-[13px] font-bold rounded-lg hover:bg-red-50">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-8 items-start relative mb-12">
                <div className="lg:w-1/4 sticky top-24 z-10 pt-4 hidden lg:block">
                  <div className="bg-white rounded-full px-4 py-2 border border-[#E0E8F5] shadow-sm inline-block font-bold text-[#02ACEA] mb-2 tracking-widest text-[12px] uppercase">
                    Tour Step 0{idx + 1}
                  </div>
                  <h3 className="text-[24px] font-extrabold text-[#0A1838]">{section.title}</h3>
                </div>
                <div className="lg:w-3/4 w-full">
                  <div className="lg:hidden mb-4">
                    <div className="bg-white rounded-full px-4 py-2 border border-[#E0E8F5] shadow-sm inline-block font-bold text-[#02ACEA] mb-2 tracking-widest text-[12px] uppercase">
                      Tour Step 0{idx + 1}
                    </div>
                    <h3 className="text-[24px] font-extrabold text-[#0A1838]">{section.title}</h3>
                  </div>
                  {section.content}
                </div>
              </div>
            ))}
            
            <div className="text-center text-[11px] text-[#94A3B8] font-medium pt-8 border-t border-[#E0E8F5] mt-4">
              Illustrative workflow, not a live product screen · Fictional data · No clinical systems connected · This example follows the manual review route.
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW SHOWCASE'''
do_replace(s3_start, s3_end, s3_new)

s4_start = '<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">'
s4_end = '<div className="flex flex-wrap gap-3 justify-center text-[12px] font-bold text-[#0A1838] mb-6">'
s4_new = r'''<div className="flex flex-col gap-6 mb-8">
              {/* Radial & Bar Gauges */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#F8FAFC] rounded-xl border border-[#E0E8F5] p-6 flex items-center justify-around">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full border-[6px] border-[#02ACEA] flex items-center justify-center mb-3 mx-auto">
                      <span className="text-[20px] font-extrabold text-[#0A1838]">2,847</span>
                    </div>
                    <div className="text-[12px] font-bold text-[#64748B]">Documents received</div>
                    <div className="text-[10px] text-[#94A3B8]">this month</div>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full border-[6px] border-green-500 flex items-center justify-center mb-3 mx-auto">
                      <span className="text-[20px] font-extrabold text-[#0A1838]">2,823</span>
                    </div>
                    <div className="text-[12px] font-bold text-[#64748B]">Processing volume</div>
                    <div className="text-[10px] text-[#94A3B8]">completed this month</div>
                  </div>
                </div>
                
                <div className="bg-[#F8FAFC] rounded-xl border border-[#E0E8F5] p-6 flex flex-col justify-center gap-4">
                  <div>
                    <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                      <span>Awaiting review (across the team)</span>
                      <span className="text-[#0A1838]">24</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-blue-500 h-full w-[24%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                      <span>Overdue items (beyond threshold)</span>
                      <span className="text-red-600">6</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[10%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                      <span>Write-back exceptions (require attention)</span>
                      <span className="text-orange-600">3</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-orange-500 h-full w-[5%]"></div></div>
                  </div>
                </div>
              </div>

              {/* Value and Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="flex flex-col justify-center bg-green-50 rounded-xl border border-green-200 p-6">
                   <div className="mb-4">
                    <div className="text-[12px] font-bold text-green-800 mb-1">Average turnaround</div>
                    <div className="text-[24px] font-extrabold text-green-700">17.8 hrs</div>
                    <div className="text-[11px] text-green-600">from receipt to completion</div>
                   </div>
                   <div className="mb-4">
                    <div className="text-[12px] font-bold text-green-800 mb-1">Estimated hours released</div>
                    <div className="text-[24px] font-extrabold text-green-700">184 hrs</div>
                    <div className="text-[11px] text-green-600">against manual baseline</div>
                   </div>
                   <div>
                    <div className="text-[12px] font-bold text-green-800 mb-1">Estimated cost impact</div>
                    <div className="text-[24px] font-extrabold text-green-700">£4,603</div>
                    <div className="text-[11px] text-green-600">staff time equivalent</div>
                   </div>
                </div>
                
                {/* Changed trend charts to Area Charts in SVG */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl border border-[#E0E8F5] p-5">
                  <div className="flex flex-col">
                    <h4 className="text-[14px] font-bold text-[#0A1838] mb-4">Backlog trend <span className="text-[11px] font-normal text-[#64748B]">(open documents, weekly)</span></h4>
                    <div className="flex-1 relative border-b border-l border-gray-200 h-32">
                       <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full absolute bottom-0">
                          <polygon points="0,100 0,36 33,49 66,58 100,76 100,100" fill="rgba(2, 172, 234, 0.2)" />
                          <polyline points="0,36 33,49 66,58 100,76" fill="none" stroke="#02ACEA" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                          <circle cx="0" cy="36" r="3" fill="#02ACEA" />
                          <circle cx="33" cy="49" r="3" fill="#02ACEA" />
                          <circle cx="66" cy="58" r="3" fill="#02ACEA" />
                          <circle cx="100" cy="76" r="3" fill="#02ACEA" />
                       </svg>
                       <div className="absolute top-1 left-2 text-[11px] font-bold text-blue-900">64</div>
                       <div className="absolute top-4 left-[33%] text-[11px] font-bold text-blue-900">51</div>
                       <div className="absolute top-6 left-[66%] text-[11px] font-bold text-blue-900">42</div>
                       <div className="absolute top-10 right-2 text-[11px] font-bold text-blue-900">24</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[14px] font-bold text-[#0A1838] mb-4">Processing volume trend <span className="text-[11px] font-normal text-[#64748B]">(completed, weekly)</span></h4>
                    <div className="flex-1 relative border-b border-l border-gray-200 h-32">
                       <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full absolute bottom-0">
                          <polygon points="0,100 0,24 33,15 66,9 100,0 100,100" fill="rgba(34, 197, 94, 0.2)" />
                          <polyline points="0,24 33,15 66,9 100,0" fill="none" stroke="#22C55E" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                          <circle cx="0" cy="24" r="3" fill="#22C55E" />
                          <circle cx="33" cy="15" r="3" fill="#22C55E" />
                          <circle cx="66" cy="9" r="3" fill="#22C55E" />
                          <circle cx="100" cy="0" r="3" fill="#22C55E" />
                       </svg>
                       <div className="absolute bottom-[24%] left-2 text-[11px] font-bold text-green-900 bg-white/50 px-1">612</div>
                       <div className="absolute bottom-[33%] left-[33%] text-[11px] font-bold text-green-900 bg-white/50 px-1">680</div>
                       <div className="absolute bottom-[66%] left-[66%] text-[11px] font-bold text-green-900 bg-white/50 px-1">731</div>
                       <div className="absolute top-1 right-2 text-[11px] font-bold text-green-900 bg-white/50 px-1">800</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-[#E0E8F5] p-5 flex flex-col justify-center">
                  <h4 className="text-[14px] font-bold text-[#0A1838] mb-4">Coder workload distribution</h4>
                  <div className="flex items-center gap-4 text-[13px] mb-3"><div className="w-24 text-[#475569]">Jamie Davies</div><div className="flex-1 bg-gray-100 rounded-full h-3"><div className="bg-[#02ACEA] h-3 rounded-full" style={{width: "41%"}}></div></div><div className="font-bold w-4">10</div></div>
                  <div className="flex items-center gap-4 text-[13px] mb-3"><div className="w-24 text-[#475569]">Alex Morgan</div><div className="flex-1 bg-gray-100 rounded-full h-3"><div className="bg-blue-400 h-3 rounded-full" style={{width: "33%"}}></div></div><div className="font-bold w-4">8</div></div>
                  <div className="flex items-center gap-4 text-[13px]"><div className="w-24 text-[#475569]">Sam Patel</div><div className="flex-1 bg-gray-100 rounded-full h-3"><div className="bg-blue-300 h-3 rounded-full" style={{width: "25%"}}></div></div><div className="font-bold w-4">6</div></div>
                </div>
                <div className="bg-white rounded-xl border border-[#E0E8F5] p-5 flex flex-col justify-center">
                  <h4 className="text-[14px] font-bold text-[#0A1838] mb-4">Workload by status</h4>
                  <div className="flex h-12 rounded-lg overflow-hidden text-[12px] font-bold text-white shadow-sm border border-gray-100">
                    <div className="bg-green-500 flex items-center justify-center flex-[14]">Ready (14)</div>
                    <div className="bg-blue-500 flex items-center justify-center flex-[7]">Review (7)</div>
                    <div className="bg-red-500 flex items-center justify-center flex-[3]">Attn (3)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center text-[12px] font-bold text-[#0A1838] mb-6">'''
do_replace(s4_start, s4_end, s4_new)

s5_start = '<div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar pb-2">'
s5_end = '<div className="mt-4 text-center text-[11px] text-[#94A3B8]">'
s5_new = r'''<div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar pb-2">
                <div className="bg-white border border-[#E0E8F5] rounded-xl p-3 min-w-[140px] shadow-sm">
                  <div className="text-[10px] font-bold text-[#64748B] uppercase mb-1">Platform history</div>
                  <div className="text-[14px] font-bold text-[#0A1838]">Type 2 diabetes</div>
                </div>
                <div className="bg-white border border-[#E0E8F5] rounded-xl p-3 min-w-[140px] shadow-sm">
                  <div className="text-[10px] font-bold text-[#64748B] uppercase mb-1">Medication</div>
                  <div className="text-[14px] font-bold text-[#0A1838]">Metformin</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 min-w-[140px] shadow-sm">
                  <div className="text-[10px] font-bold text-blue-800 uppercase mb-1">Current document</div>
                  <div className="text-[14px] font-bold text-[#0A1838]">Discharge summary</div>
                  <div className="text-[11px] text-blue-600 mt-1">Today, 09:38</div>
                </div>
              </div>
              
              <div className="w-full relative py-12 px-6">
                <div className="absolute top-[50%] left-0 right-0 h-1 bg-gray-200"></div>
                <div className="flex justify-between items-center relative z-10 gap-4">
                  <div className="flex-1 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                    <div className="text-[14px] font-bold text-[#0A1838] text-center mb-1">Metformin continued</div>
                    <div className="text-[12px] font-bold text-[#64748B] mb-4">8 months ago</div>
                    <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white shadow"></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                    <div className="text-[14px] font-bold text-[#0A1838] text-center mb-1">Diabetes review recorded</div>
                    <div className="text-[12px] font-bold text-[#64748B] mb-4">3 months ago</div>
                    <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white shadow"></div>
                    <div className="text-[11px] text-[#475569] mt-4 italic text-center bg-gray-50 px-2 py-1 rounded">Source correspondence retained for context</div>
                  </div>

                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#02ACEA] border-2 border-white shadow mb-4"></div>
                    <div className="text-[12px] font-bold text-[#02ACEA] mb-1">Today</div>
                    <div className="text-[14px] font-bold text-[#0A1838] text-center mb-1">Suggested coding requires review</div>
                    <div className="text-[12px] text-[#475569] text-center bg-blue-50 p-2 rounded border border-blue-100">Type 2 diabetes mellitus<br/>SNOMED CT 44054006</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-[11px] text-[#94A3B8]">'''
do_replace(s5_start, s5_end, s5_new)

s7_start = '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">'
s7_end = '<div className="text-center">'
s7_new = r'''<div className="relative mb-12 bg-white border border-[#E0E8F5] rounded-3xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Left Side: Without connected process */}
              <div className="flex-1 bg-[#FFF5F5] p-10 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
                  <path d="M 0,20 Q 50,150 100,50 T 200,80 T 300,20 T 400,100 T 500,50" stroke="#9B2C2C" strokeWidth="4" fill="none" />
                  <path d="M 0,80 Q 80,10 150,100 T 250,50 T 350,120 T 500,80" stroke="#9B2C2C" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                </svg>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-extrabold text-[#9B2C2C] mb-6">Without a connected process</h3>
                  <ul className="space-y-5 text-[#9B2C2C] font-medium text-[16px]">
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">01</div> Open and read each document</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">02</div> Search for relevant patient context</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">03</div> Re-enter clinical information</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">04</div> Find and verify suitable codes</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-800 shrink-0">05</div> Track approval and posting separately</li>
                  </ul>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-full md:w-4 bg-gradient-to-b from-[#9B2C2C] to-[#166534] flex items-center justify-center relative">
                <div className="absolute w-10 h-10 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center z-20 font-bold text-gray-500 transform md:-rotate-90 text-[12px]">VS</div>
              </div>
              
              {/* Right Side: With Ovotech */}
              <div className="flex-1 bg-[#F0FDF4] p-10 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#166534" strokeWidth="8" strokeLinecap="round" />
                  <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#166534" strokeWidth="2" strokeDasharray="10,10" />
                  <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#166534" strokeWidth="2" strokeDasharray="10,10" />
                </svg>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-extrabold text-[#166534] mb-6">With Ovotech 2.0</h3>
                  <ul className="space-y-5 text-[#166534] font-medium text-[16px]">
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> Correspondence enters one visible queue</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> Relevant information is structured</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> Suggestions include source evidence</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> People review, amend and approve</li>
                    <li className="flex gap-4 items-center"><div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800 shrink-0">✓</div> The outcome and write-back remain traceable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">'''
do_replace(s7_start, s7_end, s7_new)


s8_start = '<div className="flex flex-col gap-12 max-w-5xl mx-auto">'
s8_end = '      {/* SECTION 9 — HUMAN OVERSIGHT */}'
s8_new = r'''<div className="max-w-4xl mx-auto w-full">
            {/* Custom Toggle Switch */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#112146] border border-[#2A3858] p-1 rounded-full inline-flex relative w-[400px]">
                <div className={`absolute top-1 bottom-1 w-[195px] bg-[#02ACEA] rounded-full transition-transform duration-300 shadow-lg ${activeTab === 0 ? 'translate-x-0' : 'translate-x-[195px] bg-purple-500'}`}></div>
                <button onClick={() => setActiveTab(0)} className={`flex-1 relative z-10 py-3 text-center text-[13px] font-bold rounded-full transition-colors duration-300 ${activeTab === 0 ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                  Medical Coder / Clinical Reviewer
                </button>
                <button onClick={() => setActiveTab(1)} className={`flex-1 relative z-10 py-3 text-center text-[13px] font-bold rounded-full transition-colors duration-300 ${activeTab === 1 ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                  Practice Admin
                </button>
              </div>
            </div>

            <div className="bg-[#112146] rounded-3xl border border-[#2A3858] shadow-2xl overflow-hidden relative min-h-[300px]">
               {activeTab === 0 ? (
                  <div className="p-8 lg:p-12 animate-fade-in border-l-4 border-l-[#02ACEA]">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="bg-[#1C2C54] text-[#02ACEA] font-black text-[48px] w-24 h-24 flex items-center justify-center rounded-2xl shrink-0 border border-[#2A3858]">01</div>
                      <div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Medical Coder / Clinical Reviewer</h3>
                        <p className="text-gray-400 text-[16px] leading-relaxed mb-6">One role for reviewing source documents, checking patient context, assessing coding suggestions and approving the final selection.</p>
                        <div className="inline-block bg-[#02ACEA] text-white rounded-full px-6 py-2 text-[14px] font-bold shadow-lg">
                          Review, amend and approve coding
                        </div>
                      </div>
                    </div>
                  </div>
               ) : (
                  <div className="p-8 lg:p-12 animate-fade-in border-l-4 border-l-purple-500">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="bg-purple-900/40 text-purple-400 font-black text-[48px] w-24 h-24 flex items-center justify-center rounded-2xl shrink-0 border border-purple-800/50">02</div>
                      <div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Practice Admin</h3>
                        <p className="text-gray-400 text-[16px] leading-relaxed mb-6">Practice-level volumes, workload, turnaround and operational exceptions. Platform-wide user, registry and routing controls are a separate administration responsibility.</p>
                        <div className="inline-block bg-purple-600 text-white rounded-full px-6 py-2 text-[14px] font-bold shadow-lg">
                          Manage the process
                        </div>
                      </div>
                    </div>
                  </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — HUMAN OVERSIGHT */}'''
do_replace(s8_start, s8_end, s8_new)

s10_start = '<div className="flex flex-col gap-4 text-[13px] font-bold text-[#0A1838]">'
s10_end = '<div className="lg:w-1/2 w-full">'
s10_new = r'''<div className="flex flex-col items-center justify-center relative w-full h-[400px]">
              {/* Funnel SVG Background */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-10">
                <path d="M 0,0 L 400,0 L 250,200 L 250,400 L 150,400 L 150,200 Z" fill="#02ACEA" />
              </svg>
              
              <div className="relative z-10 w-full flex flex-col items-center gap-2 text-[13px] font-bold text-[#0A1838]">
                <div className="w-[100%] max-w-[400px] flex items-center justify-center gap-3 bg-white p-3 rounded-lg border border-[#E0E8F5] shadow-sm"><span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">1</span> Reviewed selection <span className="text-[#64748B] font-normal">(1 accepted code)</span></div>
                <div className="w-[10px] h-4 border-l-2 border-dashed border-[#02ACEA]"></div>
                <div className="w-[85%] max-w-[360px] flex items-center justify-center gap-3 bg-white p-3 rounded-lg border border-[#E0E8F5] shadow-sm"><span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">2</span> Authorised approval <span className="text-[#64748B] font-normal">(Jamie Davies · 09:49)</span></div>
                <div className="w-[10px] h-4 border-l-2 border-dashed border-[#02ACEA]"></div>
                <div className="w-[70%] max-w-[320px] flex items-center justify-center gap-3 bg-[#02ACEA] text-white p-3 rounded-lg shadow-md"><span className="w-6 h-6 rounded-full bg-white text-[#0A1838] flex items-center justify-center">3</span> EMIS Web write-back <span className="text-white/80 font-normal">(ready to post)</span></div>
                <div className="w-[10px] h-4 border-l-2 border-dashed border-[#02ACEA]"></div>
                <div className="w-[55%] max-w-[280px] flex items-center justify-center gap-3 bg-white p-3 rounded-lg border border-[#E0E8F5] shadow-sm"><span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">4</span> Recorded outcome <span className="text-[#64748B] font-normal">(traceable status)</span></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">'''
do_replace(s10_start, s10_end, s10_new)

s11_start = '<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">'
s11_end = '      {/* SECTION 12'
s11_new = r'''<div className="flex flex-col gap-12 w-full">
            {/* Exceptions Kanban Row */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E0E8F5] p-6 shadow-sm">
              <h3 className="font-extrabold text-[#0A1838] text-[16px] mb-4 pb-3 border-b border-[#E0E8F5]">Exceptions queue — 6 open</h3>
              <div className="flex overflow-x-auto gap-4 pb-4">
                <div className="min-w-[280px] bg-white rounded-xl border border-red-200 shadow-sm p-4 border-t-4 border-t-red-500">
                   <div className="text-[12px] font-bold text-red-700 uppercase mb-3">Needs Attention (3)</div>
                   <div className="flex flex-col gap-3">
                     <div className="bg-gray-50 p-3 rounded border border-gray-100"><div className="font-bold text-[#0A1838] text-[13px]">Missing patient match</div><div className="text-[#64748B] text-[11px] italic mt-0.5">assign or investigate</div></div>
                     <div className="bg-gray-50 p-3 rounded border border-gray-100"><div className="font-bold text-[#0A1838] text-[13px]">Processing error</div><div className="text-[#64748B] text-[11px] italic mt-0.5">technical attention</div></div>
                     <div className="bg-gray-50 p-3 rounded border border-gray-100"><div className="font-bold text-[#0A1838] text-[13px]">Write-back failure</div><div className="text-[#64748B] text-[11px] italic mt-0.5">retry after resolution</div></div>
                   </div>
                </div>
                
                <div className="min-w-[280px] bg-white rounded-xl border border-orange-200 shadow-sm p-4 border-t-4 border-t-orange-500">
                   <div className="text-[12px] font-bold text-orange-700 uppercase mb-3">Clinical Decision (2)</div>
                   <div className="flex flex-col gap-3">
                     <div className="bg-gray-50 p-3 rounded border border-gray-100"><div className="font-bold text-[#0A1838] text-[13px]">Low-confidence extraction</div><div className="text-[#64748B] text-[11px] italic mt-0.5">human check required</div></div>
                     <div className="bg-gray-50 p-3 rounded border border-gray-100"><div className="font-bold text-[#0A1838] text-[13px]">Coding review required</div><div className="text-[#64748B] text-[11px] italic mt-0.5">clinical decision needed</div></div>
                   </div>
                </div>

                <div className="min-w-[280px] bg-white rounded-xl border border-blue-200 shadow-sm p-4 border-t-4 border-t-blue-500">
                   <div className="text-[12px] font-bold text-blue-700 uppercase mb-3">Return to Source (1)</div>
                   <div className="flex flex-col gap-3">
                     <div className="bg-gray-50 p-3 rounded border border-gray-100"><div className="font-bold text-[#0A1838] text-[13px]">Insufficient information</div><div className="text-[#64748B] text-[11px] italic mt-0.5">return to source</div></div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Audit Trail Zig-Zag */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E0E8F5] p-6 shadow-sm flex flex-col">
              <h3 className="font-extrabold text-[#0A1838] text-[16px] mb-1">See what happened, when and by whom.</h3>
              <div className="text-[12px] text-[#64748B] mb-8 pb-3 border-b border-[#E0E8F5]">DEMO-107</div>
              
              <div className="w-full relative mx-auto max-w-4xl pt-4 pb-8">
                {/* Connecting SVG Snake */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{zIndex: 0}}>
                   <path d="M 50% 10 L 50% 50 C 50% 100, 20% 100, 20% 150 L 20% 200 C 20% 250, 80% 250, 80% 300 L 80% 350 C 80% 400, 50% 400, 50% 450 L 50% 500" stroke="#E0E8F5" strokeWidth="4" fill="none" strokeDasharray="8 8" />
                </svg>
                
                <div className="flex flex-col gap-8 relative z-10">
                  {[
                    { time: "09:41", action: "Correspondence received", actor: "System", pos: "md:justify-center" },
                    { time: "09:42", action: "Information extracted", actor: "Ovotech processing", pos: "md:justify-start md:pl-20" },
                    { time: "09:44", action: "Coding suggestion created", actor: "Ovotech processing", pos: "md:justify-start md:pl-20" },
                    { time: "09:47", action: "Suggestion accepted", actor: "Jamie Davies", highlight: true, pos: "md:justify-end md:pr-20" },
                    { time: "09:49", action: "Review approved", actor: "Dr A. Khan", highlight: true, pos: "md:justify-end md:pr-20" },
                    { time: "09:53", action: "Write-back completed", actor: "EMIS Web", final: true, pos: "md:justify-center" }
                  ].map((log, i) => (
                    <div key={i} className={`flex w-full ${log.pos}`}>
                      <div className={`bg-white p-4 rounded-xl border shadow-sm flex flex-col items-center min-w-[220px] text-center ${log.highlight ? 'border-[#02ACEA]' : log.final ? 'border-green-500' : 'border-[#E0E8F5]'}`}>
                        <div className="text-[11px] font-bold text-[#64748B] mb-2">{log.time}</div>
                        <div className={`w-4 h-4 rounded-full mb-3 ${log.final ? 'bg-green-500' : (log.highlight ? 'bg-[#02ACEA]' : 'bg-gray-300')}`}></div>
                        <div className={`text-[13px] font-bold ${log.final ? 'text-green-700' : 'text-[#0A1838]'}`}>{log.action}</div>
                        <div className="text-[11px] text-[#64748B] mt-1">{log.actor}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 text-center text-[11px] text-[#94A3B8]">
                Illustrative audit trail using fictional names and data.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12'''
do_replace(s11_start, s11_end, s11_new)

s12_start = '<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">'
s12_end = '<div className="text-[10px] text-white/80 leading-relaxed border-t border-white/30 pt-6">'
s12_new = r'''<div className="flex flex-col gap-8 mb-8 w-full">
                {/* Visual Bar Comparison */}
                <div className="bg-[#1A2848] rounded-2xl p-6 border border-[#2A3858]">
                   <div className="text-[14px] font-bold text-white mb-6">Processing Time Comparison (per document)</div>
                   <div className="space-y-4">
                     <div>
                       <div className="flex justify-between text-[11px] text-white/60 mb-1">
                         <span>Manual Baseline</span><span>{manualTime} minutes</span>
                       </div>
                       <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                         <div className="bg-gray-500 h-full w-full"></div>
                       </div>
                     </div>
                     <div>
                       <div className="flex justify-between text-[11px] text-[#02ACEA] mb-1 font-bold">
                         <span>Ovotech 2.0 (including human review)</span><span>2.12 minutes</span>
                       </div>
                       <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden flex">
                         <div className="bg-[#02ACEA] h-full" style={{width: `${Math.min(100, (2.12 / manualTime) * 100)}%`}}></div>
                       </div>
                     </div>
                   </div>
                </div>
                
                {/* Value Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#1A2848] to-[#111A30] rounded-xl p-5 border border-[#2A3858]">
                    <div className="text-[12px] text-white/70 font-bold mb-2 uppercase tracking-wide">Monthly Volume</div>
                    <div className="text-[32px] font-black text-white">{volume.toLocaleString()}</div>
                    <div className="text-[11px] text-white/60 mt-2">documents processed</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1A2848] to-[#111A30] rounded-xl p-5 border border-[#2A3858]">
                    <div className="text-[12px] text-[#02ACEA] font-bold mb-2 uppercase tracking-wide">Time Released</div>
                    <div className="text-[32px] font-black text-[#02ACEA]">{Math.max(0, Math.round(hoursReleased)).toLocaleString()} <span className="text-[16px] font-bold">hrs</span></div>
                    <div className="text-[11px] text-[#02ACEA]/70 mt-2">difference from manual baseline</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1A2848] to-[#111A30] rounded-xl p-5 border border-[#2A3858]">
                    <div className="text-[12px] text-green-400 font-bold mb-2 uppercase tracking-wide">Turnaround Improved</div>
                    <div className="text-[32px] font-black text-green-400">-{Math.max(0, Math.round(turnaroundDiff * 10) / 10).toLocaleString()} <span className="text-[16px] font-bold">hrs</span></div>
                    <div className="text-[11px] text-green-400/70 mt-2">compared to {turnaround} hr baseline</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1A2848] to-[#111A30] rounded-xl p-5 border border-[#2A3858] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 rounded-bl-full opacity-10"></div>
                    <div className="text-[12px] text-green-400 font-bold mb-2 uppercase tracking-wide">Estimated Value</div>
                    <div className="text-[32px] font-black text-green-400">£{Math.max(0, Math.round(costImpact)).toLocaleString()}</div>
                    <div className="text-[11px] text-green-400/70 mt-2">staff time equivalent</div>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-white/80 leading-relaxed border-t border-white/30 pt-6">'''
do_replace(s12_start, s12_end, s12_new)

s13_start = '<div className="flex flex-col gap-4 mb-12">'
s13_end = '<div className="bg-[#02ACEA] rounded-3xl p-8 lg:p-12 mb-12 text-center text-white shadow-lg relative overflow-hidden">'
s13_new = r'''<div className="w-full relative py-12 mb-12 flex flex-col items-center">
              {/* Layered Shield Representation */}
              <div className="relative w-[300px] h-[350px] flex items-center justify-center">
                 {/* Background Glow */}
                 <div className="absolute inset-0 bg-blue-100 rounded-[100px] blur-3xl opacity-50"></div>
                 
                 <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <div className="w-[80%] bg-white p-4 rounded-xl border border-[#E0E8F5] shadow-sm text-center transform translate-y-0 z-40">
                       <h3 className="font-bold text-[#0A1838] text-[14px] mb-1">Role-based access</h3>
                       <p className="text-[#475569] text-[11px]">Permissions follow the person's role and responsibility.</p>
                    </div>
                 </div>
                 
                 <div className="absolute top-[80px] left-[-20px] right-[-20px] flex justify-center">
                    <div className="w-[90%] bg-white p-4 rounded-xl border-2 border-blue-100 shadow-md text-center transform z-30">
                       <h3 className="font-bold text-[#0A1838] text-[14px] mb-1">Authentication and encryption</h3>
                       <p className="text-[#475569] text-[11px]">Controls protect access and data in transit and at rest.</p>
                    </div>
                 </div>
                 
                 <div className="absolute top-[170px] left-[-40px] right-[-40px] flex justify-center">
                    <div className="w-[100%] bg-white p-4 rounded-xl border-4 border-blue-200 shadow-lg text-center transform z-20">
                       <h3 className="font-bold text-[#0A1838] text-[14px] mb-1">Audit logging</h3>
                       <p className="text-[#475569] text-[11px]">Review decisions, approvals and outcomes remain traceable.</p>
                    </div>
                 </div>
                 
                 <div className="absolute top-[260px] left-[-60px] right-[-60px] flex justify-center">
                    <div className="w-[110%] bg-[#02ACEA] p-5 rounded-xl border-4 border-white shadow-xl text-center transform z-10 text-white">
                       <h3 className="font-bold text-white text-[15px] mb-1">Operational controls</h3>
                       <p className="text-white/90 text-[12px]">Monitoring, environment separation and managed configuration support oversight.</p>
                    </div>
                 </div>
              </div>
            </div>
            <div className="bg-[#02ACEA] rounded-3xl p-8 lg:p-12 mb-12 text-center text-white shadow-lg relative overflow-hidden">'''
do_replace(s13_start, s13_end, s13_new)

s13b_start = '<div className="flex flex-wrap justify-between items-center max-w-4xl mx-auto gap-6 lg:gap-0">'
s13b_end = '      {/* SECTION 14'
s13b_new = r'''<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[13px]">DTAC</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Assessed</div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[13px]">DSPT</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Standards met</div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[11px] leading-tight text-center">ISO<br/>27001</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Certified</div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm hover:border-[#02ACEA] transition-colors">
                 <div className="bg-[#F8FAFC] w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center font-bold text-[#0A1838] text-[10px] leading-tight text-center">Cyber<br/>Essent</div>
                 <div>
                   <div className="text-[12px] text-[#475569] font-medium uppercase tracking-wide">Certified</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14'''
do_replace(s13b_start, s13b_end, s13b_new)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("All Python replacements applied.")

