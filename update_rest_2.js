const fs = require('fs');
const path = 'd:\\Ovotech\\ovotech-main\\ovotech-main\\src\\app\\third\\page.js';
let content = fs.readFileSync(path, 'utf8');

function replaceBlock(searchStart, endMarker, replacement) {
    const startIdx = content.indexOf(searchStart);
    if (startIdx === -1) {
        console.log("Could not find start:", searchStart.substring(0, 50));
        return;
    }
    const endIdx = content.indexOf(endMarker, startIdx);
    if (endIdx === -1) {
        console.log("Could not find end:", endMarker.substring(0, 50));
        return;
    }
    content = content.substring(0, startIdx) + replacement + content.substring(endIdx);
    console.log("Replaced block starting with:", searchStart.substring(0, 50));
}

// Section 8
const s8Start = '<div className="flex flex-col gap-12 max-w-5xl mx-auto">';
const s8End = '      {/* SECTION 9 — HUMAN OVERSIGHT */}';
const s8New = `<div className="max-w-4xl mx-auto">
            {/* Custom Toggle Switch */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#112146] border border-[#2A3858] p-1 rounded-full inline-flex relative w-[400px]">
                <div className={\`absolute top-1 bottom-1 w-[195px] bg-[#02ACEA] rounded-full transition-transform duration-300 shadow-lg \${activeTab === 0 ? 'translate-x-0' : 'translate-x-[195px] bg-purple-500'}\`}></div>
                <button onClick={() => setActiveTab(0)} className={\`flex-1 relative z-10 py-3 text-center text-[13px] font-bold rounded-full transition-colors duration-300 \${activeTab === 0 ? 'text-white' : 'text-gray-400 hover:text-white'}\`}>
                  Medical Coder / Clinical Reviewer
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
          </div>
        </div>
      </section>

`;
replaceBlock(s8Start, s8End, s8New);

// Section 10
const s10Start = '<div className="flex flex-col gap-4 text-[13px] font-bold text-[#0A1838]">';
const s10End = '<div className="lg:w-1/2 w-full">';
const s10New = `<div className="flex flex-col items-center justify-center relative w-full h-[400px]">
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
          
          `;
replaceBlock(s10Start, s10End, s10New);

// Section 11
const s11Start = '<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">';
const s11End = '      {/* SECTION 12';
const s11New = `<div className="flex flex-col gap-12">
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
                    <div key={i} className={\`flex w-full \${log.pos}\`}>
                      <div className={\`bg-white p-4 rounded-xl border shadow-sm flex flex-col items-center min-w-[220px] text-center \${log.highlight ? 'border-[#02ACEA]' : log.final ? 'border-green-500' : 'border-[#E0E8F5]'}\`}>
                        <div className="text-[11px] font-bold text-[#64748B] mb-2">{log.time}</div>
                        <div className={\`w-4 h-4 rounded-full mb-3 \${log.final ? 'bg-green-500' : (log.highlight ? 'bg-[#02ACEA]' : 'bg-gray-300')}\`}></div>
                        <div className={\`text-[13px] font-bold \${log.final ? 'text-green-700' : 'text-[#0A1838]'}\`}>{log.action}</div>
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

`;
replaceBlock(s11Start, s11End, s11New);

// Section 13 Assurance
const s13aStart = '<div className="flex flex-wrap justify-between items-center max-w-4xl mx-auto gap-6 lg:gap-0">';
const s13aEnd = '      {/* SECTION 14';
const s13aNew = `<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
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

`;
replaceBlock(s13aStart, s13aEnd, s13aNew);

fs.writeFileSync(path, content, 'utf8');
console.log("update_rest_2.js complete.");

