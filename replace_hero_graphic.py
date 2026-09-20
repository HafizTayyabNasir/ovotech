import sys
import re

path = 'src/app/third/page.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '{/* Top Right - Laptop/Dashboard Mockup */}'
end_marker = '{/* Bottom Right - Trusted Network */}'

idx_start = content.find(start_marker)
idx_end = content.find(end_marker)

if idx_start == -1 or idx_end == -1:
    print("Could not find markers.")
    sys.exit(1)

new_component = r'''{/* Top Right - AI Extraction Visualization */}
                  <div className="bg-white rounded-[24px] border border-[#E0E8F5] p-5 pt-6 flex-1 shadow-lg relative overflow-hidden min-h-[260px] flex flex-col justify-center">
                    
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#02ACEA]/5 rounded-full blur-2xl"></div>

                    <div className="flex flex-col gap-6 relative z-10">
                      {/* Step 1: Processing Status */}
                      <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E0E8F5] rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path></svg>
                           </div>
                           <div>
                             <div className="text-[14px] font-extrabold text-[#0A1838]">AI Extraction Active</div>
                             <div className="text-[11px] text-[#64748B]">Processing incoming correspondence...</div>
                           </div>
                        </div>
                        <div className="text-right hidden sm:block">
                          <div className="text-[20px] font-black text-[#02ACEA]">1.2s</div>
                          <div className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">Turnaround</div>
                        </div>
                      </div>

                      {/* Step 2: Source to Code Mapping */}
                      <div className="flex items-center justify-between gap-4">
                        {/* Source text */}
                        <div className="flex-1 bg-white border border-[#E0E8F5] p-3 rounded-lg shadow-sm">
                           <div className="text-[10px] text-[#64748B] font-bold uppercase mb-2 tracking-wider">Source Text</div>
                           <div className="text-[13px] text-[#475569] leading-relaxed italic">
                             "...patient has a history of <span className="bg-blue-100 text-blue-900 font-bold px-1 rounded">type 2 diabetes</span> and is currently taking <span className="bg-blue-100 text-blue-900 font-bold px-1 rounded">metformin</span>..."
                           </div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="text-[#CBD5E1] shrink-0 hidden lg:block">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>

                        {/* Codes */}
                        <div className="flex-1 flex flex-col gap-2">
                           <div className="bg-white border border-[#E0E8F5] p-2 rounded-lg shadow-sm border-l-[3px] border-l-[#02ACEA] flex items-center justify-between">
                             <div>
                               <div className="text-[11px] font-bold text-[#0A1838]">Type 2 diabetes</div>
                               <div className="text-[9px] text-[#64748B] font-mono mt-0.5">SNOMED: 44054006</div>
                             </div>
                             <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                           </div>
                           <div className="bg-white border border-[#E0E8F5] p-2 rounded-lg shadow-sm border-l-[3px] border-l-[#02ACEA] flex items-center justify-between">
                             <div>
                               <div className="text-[11px] font-bold text-[#0A1838]">Metformin</div>
                               <div className="text-[9px] text-[#64748B] font-mono mt-0.5">SNOMED: 372567009</div>
                             </div>
                             <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  '''

new_content = content[:idx_start] + new_component + content[idx_end:]

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced laptop mockup with AI Extraction Diagram!")

