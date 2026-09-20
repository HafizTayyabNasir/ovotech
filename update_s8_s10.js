const fs = require('fs');
const path = 'd:\\Ovotech\\ovotech-main\\ovotech-main\\src\\app\\third\\page.js';
let content = fs.readFileSync(path, 'utf8');

// Replace Section 3 by searching for the start of the div and end of it
const sec3Start = '<div className="bg-[#FFFFFF] rounded-3xl border border-[#E0E8F5] shadow-lg overflow-hidden">';
const sec3End = 'Illustrative workflow, not a live product screen · Fictional data · No clinical systems connected\n              {activeTab === 2 && " · This example follows the manual review route."}\n            </div>\n          </div>';
let iStart = content.indexOf(sec3Start);
let iEnd = content.indexOf(sec3End);

if (iStart !== -1 && iEnd !== -1) {
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
          </div>`;
    content = content.substring(0, iStart) + sec3New + content.substring(iEnd + sec3End.length);
    console.log("Section 3 replaced.");
}

// Section 8 - Toggle-based diagram
let sec8Regex = /<div className="flex flex-col gap-12 max-w-5xl mx-auto">[\s\S]*?(?=<\/div>\n        <\/div>\n      <\/section>\n\n      {\/\* SECTION 9)/;

const sec8New = `<div className="max-w-4xl mx-auto">
            {/* Custom Toggle Switch using Tailwind/React */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#112146] border border-[#2A3858] p-1 rounded-full inline-flex relative w-[300px]">
                <div className={\`absolute top-1 bottom-1 w-[145px] bg-[#02ACEA] rounded-full transition-transform duration-300 shadow-lg \${activeTab === 0 ? 'translate-x-0' : 'translate-x-[147px] bg-purple-500'}\`}></div>
                
                <button onClick={() => setActiveTab(0)} className={\`flex-1 relative z-10 py-3 text-center text-[13px] font-bold rounded-full transition-colors duration-300 \${activeTab === 0 ? 'text-white' : 'text-gray-400 hover:text-white'}\`}>
                  Medical Coder
                </button>
                <button onClick={() => setActiveTab(1)} className={\`flex-1 relative z-10 py-3 text-center text-[13px] font-bold rounded-full transition-colors duration-300 \${activeTab === 1 ? 'text-white' : 'text-gray-400 hover:text-white'}\`}>
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
          </div>\n        `;

if (sec8Regex.test(content)) {
    content = content.replace(sec8Regex, sec8New);
    console.log("Section 8 replaced.");
}

// Section 10 - Funnel pipeline
let sec10Regex = /<div className="flex flex-col gap-4 text-\[13px\] font-bold text-\[#0A1838\]">[\s\S]*?(?=<\/div>\n          <\/div>\n          \n          <div className="lg:w-1\/2 w-full">)/;

const sec10New = `<div className="flex flex-col items-center justify-center relative w-full h-[400px]">
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
            </div>\n            `;
if (sec10Regex.test(content)) {
    content = content.replace(sec10Regex, sec10New);
    console.log("Section 10 replaced.");
}

fs.writeFileSync(path, content, 'utf8');
console.log("Second script execution finished.");

