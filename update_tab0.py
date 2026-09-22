import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("activeTab === 0 ? (")
end = content.find(") : (", start)

new_content = """activeTab === 0 ? (
                  <div className="p-6 lg:p-10 animate-fade-in border-l-4 border-l-[#02ACEA] bg-[#F4F7FC]">
                    <div className="max-w-[1350px] mx-auto">
                      <div className="text-center mb-12">
                        <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">For Medical Coders</span>
                        <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Your workflow. Streamlined and focused.</h2>
                        <p className="text-[#475569] text-[16px] max-w-2xl mx-auto">Focus on the documents that need your clinical expertise. Access patient context, extracted data and evidence-backed coding suggestions instantly.</p>
                      </div>

                      <div className="bg-white rounded-3xl border border-[#E0E8F5] shadow-lg p-6 lg:p-10 mb-8">
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E0E8F5]">
                          <h3 className="text-[18px] font-extrabold text-[#0A1838]">Coder Workspace — Alex Morgan</h3>
                          <span className="text-[12px] font-bold text-[#64748B] bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">Fictional demonstration</span>
                        </div>
                        
                        <div className="flex flex-col gap-6">
                          {/* Radial & Bar Gauges */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-[#F8FAFC] rounded-xl border border-[#E0E8F5] p-6 flex items-center justify-around">
                              <div className="text-center">
                                <div className="w-24 h-24 rounded-full border-[6px] border-[#02ACEA] flex items-center justify-center mb-3 mx-auto shadow-sm">
                                  <span className="text-[24px] font-extrabold text-[#0A1838]">12</span>
                                </div>
                                <div className="text-[12px] font-bold text-[#64748B]">My Queue</div>
                                <div className="text-[10px] text-[#94A3B8]">items awaiting review</div>
                              </div>
                              <div className="text-center">
                                <div className="w-24 h-24 rounded-full border-[6px] border-green-500 flex items-center justify-center mb-3 mx-auto shadow-sm">
                                  <span className="text-[24px] font-extrabold text-[#0A1838]">48</span>
                                </div>
                                <div className="text-[12px] font-bold text-[#64748B]">Completed Today</div>
                                <div className="text-[10px] text-[#94A3B8]">coded and approved</div>
                              </div>
                            </div>
                            
                            <div className="bg-[#F8FAFC] rounded-xl border border-[#E0E8F5] p-6 flex flex-col justify-center gap-4">
                              <div>
                                <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                                  <span>High Priority (Urgent referrals, 2WW)</span>
                                  <span className="text-red-600">3</span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[25%]"></div></div>
                              </div>
                              <div>
                                <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                                  <span>Routine Correspondence</span>
                                  <span className="text-[#0A1838]">9</span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-[#02ACEA] h-full w-[75%]"></div></div>
                              </div>
                              <div>
                                <div className="flex justify-between text-[12px] font-bold text-[#64748B] mb-2">
                                  <span>Pending Clarification</span>
                                  <span className="text-orange-600">1</span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"><div className="bg-orange-500 h-full w-[10%]"></div></div>
                              </div>
                            </div>
                          </div>

                          {/* Coding view snapshot */}
                          <div className="bg-[#0A1838] rounded-xl border border-[#E0E8F5] overflow-hidden shadow-sm mt-4">
                             <div className="flex border-b border-[#2A3858] bg-[#0A1838]">
                               <div className="px-6 py-3 text-[#02ACEA] text-[13px] font-bold border-b-2 border-[#02ACEA]">Next Item in Queue</div>
                               <div className="px-6 py-3 text-white text-[13px] font-bold border-r border-[#2A3858]">Recent Activity Log</div>
                             </div>
                             <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                  <div className="text-[11px] font-bold text-[#64748B] mb-2 uppercase tracking-wider">Source Document Extract</div>
                                  <div className="bg-[#F8FAFC] p-4 rounded-lg border border-[#E0E8F5] text-[13px] text-[#475569] leading-relaxed">
                                    "...patient presented with <span className="bg-yellow-100 text-yellow-800 px-1 rounded font-medium border border-yellow-200">acute exacerbation of asthma</span>. Prescribed <span className="bg-blue-50 text-[#02ACEA] px-1 rounded font-medium border border-blue-100">Salbutamol 100mcg inhaler</span> and advised to return if symptoms worsen..."
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[11px] font-bold text-[#64748B] mb-2 uppercase tracking-wider">Suggested SNOMED Codes</div>
                                  <div className="space-y-3">
                                     <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-200">
                                       <div>
                                         <div className="text-[13px] font-bold text-green-900">Acute exacerbation of asthma</div>
                                         <div className="text-[11px] text-green-700">Code: 391133003</div>
                                       </div>
                                       <div className="bg-[#166534] text-white px-3 py-1 rounded-full text-[11px] font-bold cursor-pointer hover:bg-green-700 transition-colors">Approve</div>
                                     </div>
                                     <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-200">
                                       <div>
                                         <div className="text-[13px] font-bold text-green-900">Salbutamol 100mcg inhaler</div>
                                         <div className="text-[11px] text-green-700">Code: 320000009</div>
                                       </div>
                                       <div className="bg-[#166534] text-white px-3 py-1 rounded-full text-[11px] font-bold cursor-pointer hover:bg-green-700 transition-colors">Approve</div>
                                     </div>
                                  </div>
                                </div>
                             </div>
                          </div>
                          
                        </div>
                        
                        <div className="text-center text-[11px] text-[#94A3B8] max-w-4xl mx-auto mt-6">
                          Illustrative workspace with fictional metrics and clinical data, not a live product screenshot. The actual coding interface provides full document viewing, patient history timelines and comprehensive search capabilities.
                        </div>
                      </div>
                    </div>
                  </div>
               """

content = content[:start] + new_content + content[end:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced activeTab 0 with new Medical Coder section")