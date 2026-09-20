const fs = require('fs');

const path = 'd:\\Ovotech\\ovotech-main\\ovotech-main\\src\\app\\third\\page.js';
let content = fs.readFileSync(path, 'utf8');

// Use regex to replace Section 2
let sec2Regex = /<div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-8 snap-x no-scrollbar">[\s\S]*?(?=<div className="text-center text-\[12px\] text-\[#64748B\]">)/;
const sec2New = `<div className="w-full py-12 relative overflow-x-auto no-scrollbar">
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
          </div>\n          `;
if (sec2Regex.test(content)) {
    content = content.replace(sec2Regex, sec2New);
    console.log("Section 2 replaced.");
}

// Section 3
let sec3Regex = /<div className="bg-\[#FFFFFF\] rounded-3xl border border-\[#E0E8F5\] shadow-lg overflow-hidden">[\s\S]*?(?=<\/div>\n        <\/div>\n      <\/section>\n\n      {\/\* INTERACTIVE)/;
const sec3New = `<div className="flex flex-col gap-12">
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
                          <div className={\`text-[28px] font-extrabold \${stat.color}\`}>{stat.val}</div>
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
                            <div className={\`text-[12px] font-bold px-3 py-1 rounded-full \${item.statusColor}\`}>
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
                                <span className={\`inline-block px-3 py-1 rounded-full text-[12px] font-bold \${row.color}\`}>
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
              <div key={idx} className="flex flex-col lg:flex-row gap-8 items-start relative">
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
          </div>`;

if (sec3Regex.test(content)) {
    content = content.replace(sec3Regex, sec3New);
    console.log("Section 3 replaced.");
}

// Section 4
let sec4Regex = /<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">[\s\S]*?(?=<div className="flex flex-wrap gap-3 justify-center text-\[12px\] font-bold text-\[#0A1838\] mb-6">)/;

const sec4New = `<div className="flex flex-col gap-6 mb-8">
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
            </div>\n\n            `;

if (sec4Regex.test(content)) {
    content = content.replace(sec4Regex, sec4New);
    console.log("Section 4 replaced.");
}

// Section 5
let sec5Regex = /<div className="bg-white rounded-xl border border-\[#E0E8F5\] p-5 relative">[\s\S]*?(?=<div className="mt-4 text-center text-\[11px\] text-\[#94A3B8\]">)/;

const sec5New = `<div className="w-full relative py-12 px-6">
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
              </div>\n              `;

if (sec5Regex.test(content)) {
    content = content.replace(sec5Regex, sec5New);
    console.log("Section 5 replaced.");
}

// Section 7
let sec7Regex = /<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">[\s\S]*?(?=<div className="text-center">)/;

const sec7New = `<div className="relative mb-12 bg-white border border-[#E0E8F5] rounded-3xl overflow-hidden shadow-lg">
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
          </div>\n\n          `;

if (sec7Regex.test(content)) {
    content = content.replace(sec7Regex, sec7New);
    console.log("Section 7 replaced.");
}

fs.writeFileSync(path, content, 'utf8');
console.log("Script execution finished.");

