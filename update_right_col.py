with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start of the RIGHT COLUMN
start_idx = content.find('{/* RIGHT COLUMN - Bento Grid Layout */}')
# Find the end of the section (just before </section>)
end_idx = content.find('</section>', start_idx)

# Find where the two-column flex container ends (</div> </div> </section>)
# So we want to replace from start_idx up to the end of the flex container.
# Let's just find the closing div of the flex row.
# Or better, let's use regex to replace everything between `{/* RIGHT COLUMN - Bento Grid Layout */}` and the closing `</div>` before `</section>`.

new_right_column = """{/* RIGHT COLUMN - Product UI Mockup */}
            <div className="w-full lg:w-[55%] relative">
              
              {/* Soft Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,rgba(2,172,234,0.1)_0%,transparent_60%)] -z-10 rounded-full blur-3xl" />

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full">
                
                {/* Product Mockup Container */}
                <div className="bg-white rounded-[24px] shadow-[0_20px_60px_rgba(10,24,56,0.08)] border border-[#E0E8F5] overflow-hidden flex flex-col relative z-10">
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-center px-6 py-4 border-b border-[#F1F5F9]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                      <span className="text-[10px] font-bold tracking-widest text-[#64748B] uppercase">Ovotech 2.0 - Clinical Review</span>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">Fictional Product View</span>
                  </div>

                  {/* Header Area */}
                  <div className="px-8 pt-8 pb-6 border-b border-[#F1F5F9] relative">
                    <span className="text-[11px] font-bold tracking-widest text-[#02ACEA] uppercase mb-2 block">Reviewing</span>
                    <div className="flex justify-between items-end">
                      <h2 className="text-[28px] font-extrabold text-[#0A1838] leading-none">Discharge summary</h2>
                      <span className="bg-[#FFF8E6] text-[#D97706] text-[11px] font-bold px-3 py-1 rounded-md border border-[#FDE68A]">Human review</span>
                    </div>
                  </div>

                  {/* Main Content Split */}
                  <div className="flex flex-col sm:flex-row border-b border-[#F1F5F9]">
                    {/* Left Side: Source */}
                    <div className="flex-1 p-8 sm:border-r border-[#F1F5F9]">
                      <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase mb-4 block">Source Correspondence</span>
                      <h3 className="text-[16px] font-bold text-[#0A1838] mb-1">Riverside Medical Practice</h3>
                      <p className="text-[#64748B] text-[12px] mb-8">Patient ref: SAMPLE-042</p>

                      <p className="text-[#334155] text-[14px] leading-[1.8]">
                        Patient has a history of <span className="bg-[#E0F2FE] text-[#0369A1] font-semibold px-1 rounded inline-block mx-0.5">type 2 diabetes</span>. Continue review with the practice team.
                      </p>
                    </div>
                    
                    {/* Right Side: SNOMED */}
                    <div className="flex-1 p-8">
                      <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase mb-4 block">SNOMED CT Suggestion</span>
                      <h3 className="text-[16px] font-bold text-[#0A1838] mb-1">Type 2 diabetes mellitus</h3>
                      <p className="text-[#02ACEA] text-[13px] mb-6">44054006</p>

                      <div className="bg-[#F8FAFC] border border-[#E0E8F5] rounded-lg p-4 mb-6">
                        <p className="text-[#475569] text-[13px] italic">"history of type 2 diabetes"</p>
                      </div>

                      <div className="flex gap-3">
                        <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[13px] font-bold px-5 py-2.5 rounded shadow-sm transition-colors">
                          Accept
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-[#334155] border border-[#CBD5E1] text-[13px] font-bold px-5 py-2.5 rounded shadow-sm transition-colors">
                          Amend
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Stepper Footer */}
                  <div className="px-8 py-6">
                    <div className="relative flex justify-between items-center w-full max-w-lg mx-auto">
                      {/* Connecting Line */}
                      <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-[#E2E8F0] -translate-y-1/2 z-0">
                        <div className="h-full bg-[#3B82F6] w-[75%]"></div>
                      </div>
                      
                      {[
                        { label: 'Received', status: 'done' },
                        { label: 'Extracted', status: 'done' },
                        { label: 'Coded', status: 'done' },
                        { label: 'Reviewed', status: 'done' },
                        { label: 'Approved', status: 'current' },
                        { label: 'Posted', status: 'pending' },
                      ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                          <div className={`w-3 h-3 rounded-full flex items-center justify-center
                            ${step.status === 'done' ? 'bg-[#3B82F6]' : step.status === 'current' ? 'bg-white border-2 border-[#3B82F6]' : 'bg-white border-2 border-[#CBD5E1]'}
                          `}></div>
                          <span className={`text-[9px] font-bold tracking-wide uppercase ${step.status === 'pending' ? 'text-[#94A3B8]' : 'text-[#3B82F6]'}`}>{step.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Blue Disclaimer Banner */}
                  <div className="bg-[#334155] px-6 py-3 flex items-center gap-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span className="text-[11px] text-white/90">Manual review shown. Automation follows your practice's configured policy.</span>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>"""

# Need to accurately replace the exact right column.
# Let's find the start and end in the string.
start_marker = "{/* RIGHT COLUMN - Bento Grid Layout */}"
end_marker = "</div>\n        </div>\n      </section>"

start_pos = content.find(start_marker)
end_pos = content.find(end_marker, start_pos)

if start_pos != -1 and end_pos != -1:
    content = content[:start_pos] + new_right_column + "\n" + content[end_pos:]

    with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated RIGHT COLUMN successfully.")
else:
    print("Could not find markers.")