import re
import sys

path = 'src/app/third/page.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

def build_pattern(s):
    parts = s.strip().split()
    return r'\s+'.join(map(re.escape, parts))

s4_start = 'Fictional demonstration</span> </div> <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">'
s4_end = '<div className="flex flex-wrap gap-3 justify-center text-[12px] font-bold text-[#0A1838] mb-6">'
s4_new = r'''Fictional demonstration</span>
            </div>
<div className="flex flex-col gap-6 mb-8">
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

pattern = build_pattern(s4_start) + r'[\s\S]*?' + build_pattern(s4_end)
if not re.search(pattern, content):
    print("FAILED to find s4_start!")
else:
    content = re.sub(pattern, s4_new, content, count=1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Replaced Section 4 successfully.")

