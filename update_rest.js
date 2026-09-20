const fs = require('fs');
const path = 'd:\\Ovotech\\ovotech-main\\ovotech-main\\src\\app\\third\\page.js';
let content = fs.readFileSync(path, 'utf8');

function replaceBlock(searchStart, searchEnd, replacement) {
    const startIdx = content.indexOf(searchStart);
    if (startIdx === -1) {
        console.log("Could not find start:", searchStart.substring(0, 50));
        return;
    }
    const endIdx = content.indexOf(searchEnd, startIdx);
    if (endIdx === -1) {
        console.log("Could not find end:", searchEnd.substring(0, 50));
        return;
    }
    content = content.substring(0, startIdx) + replacement + content.substring(endIdx + searchEnd.length);
    console.log("Replaced block starting with:", searchStart.substring(0, 50));
}

// Section 8 Toggle
const s8Start = '<div className="flex flex-col gap-12 max-w-5xl mx-auto">';
const s8End = '</div>\n        </div>\n      </section>\n\n      {/* SECTION 9';
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
          </div>`;
replaceBlock(s8Start, s8End, s8New);


// Section 10 Funnel
const s10Start = '<div className="flex flex-col gap-4 text-[13px] font-bold text-[#0A1838]">';
const s10End = '</div>\n          </div>\n          \n          <div className="lg:w-1/2 w-full">';
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
            </div>`;
replaceBlock(s10Start, s10End, s10New);

// Section 11 - Exceptions Kanban & Audit Trail
const s11Start = '<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">';
const s11End = '</div>\n        </div>\n      </section>\n\n      {/* SECTION 12';
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
          </div>`;
replaceBlock(s11Start, s11End, s11New);

// Section 12 - Business Value Calculator
const s12Start = '<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">';
const s12End = '<div className="text-[10px] text-white/80 leading-relaxed border-t border-white/30 pt-6">';
const s12New = `<div className="flex flex-col gap-8 mb-8">
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
                         <div className="bg-[#02ACEA] h-full" style={{width: \`\${Math.min(100, (2.12 / manualTime) * 100)}%\`}}></div>
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
              
              `;
replaceBlock(s12Start, s12End, s12New + '<div className="text-[10px] text-white/80 leading-relaxed border-t border-white/30 pt-6">');

// Section 13 - Security layered shield
const s13Start = '<div className="flex flex-col gap-4 mb-12">';
const s13End = '<div className="bg-[#02ACEA] rounded-3xl p-8 lg:p-12 mb-12 text-center text-white shadow-lg relative overflow-hidden">';
const s13New = `<div className="w-full relative py-12 mb-12 flex flex-col items-center">
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
            </div>\n\n          `;
replaceBlock(s13Start, s13End, s13New + '<div className="bg-[#02ACEA] rounded-3xl p-8 lg:p-12 mb-12 text-center text-white shadow-lg relative overflow-hidden">');

const s13AssuranceStart = '<div className="flex flex-wrap justify-between items-center max-w-4xl mx-auto gap-6 lg:gap-0">';
const s13AssuranceEnd = '</div>\n          </div>\n        </div>\n      </section>';
const s13AssuranceNew = `<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
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
            </div>`;
replaceBlock(s13AssuranceStart, s13AssuranceEnd, s13AssuranceNew + '\n          </div>\n        </div>\n      </section>');

fs.writeFileSync(path, content, 'utf8');
console.log("update_rest.js complete.");

