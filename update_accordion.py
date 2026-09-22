import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace the old vertical accordion with the new horizontal stepper
# The old accordion starts with: <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
# and ends with: </div>\n          </div>\n        </div>\n      </section> (Wait, let's find exact end)

pattern = r'<div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">.*?\]\.map\(\(step, i\) => \(.*?\)\)}\s*<\/div>'

new_code = """<div className="flex flex-col gap-10 max-w-5xl mx-auto w-full">
            {/* Horizontal Timeline */}
            <div className="relative flex justify-between items-start w-full px-2 mt-4 mb-8">
              {/* Background Line */}
              <div className="absolute left-[32px] right-[32px] top-6 h-[2px] bg-[#E0E8F5] -z-10">
                {/* Progress Line */}
                <div className="h-full bg-[#02ACEA] transition-all duration-500" style={{ width: activeAccordion === -1 ? '0%' : `${(activeAccordion / 6) * 100}%` }}></div>
              </div>
              
              {[
                { num: "01", title: "Receive", desc: "Clinical correspondence enters a visible queue.", expandedDesc: "Documents arrive securely and are immediately visible in the platform. The clinical overview provides an at-a-glance summary of incoming volumes and processing status.", image: "/clinical-overview.png" },
                { num: "02", title: "Extract", desc: "Relevant information is structured from the source.", expandedDesc: "Ovotech identifies and extracts key clinical information from the unstructured text, presenting it clearly alongside the original document for easy verification.", image: "/clinical-review-2.png" },
                { num: "03", title: "Identify", desc: "Clinical concepts are linked to supporting evidence.", expandedDesc: "Extracted concepts are highlighted within the source text, maintaining a clear link between the structured data and the original evidence.", image: "/clinical-review-2.png" },
                { num: "04", title: "Suggest", desc: "SNOMED CT codes are presented for consideration.", expandedDesc: "The platform suggests appropriate SNOMED CT codes based on the extracted information, complete with confidence indicators.", image: "/clinical-review-3.png" },
                { num: "05", title: "Review", desc: "An authorised person checks context and evidence.", expandedDesc: "Reviewers can access patient history processed through Ovotech to understand the broader clinical context before making coding decisions.", image: "/patient-history.png" },
                { num: "06", title: "Approve", desc: "The final selection is explicitly approved.", expandedDesc: "Authorised personnel accept, amend, or reject the suggested codes. Explicit approval is required before any information moves forward.", image: "/clinical-review-3.png" },
                { num: "07", title: "Write back", desc: "Approved information is posted to clinical record system.", expandedDesc: "Completed reviews and approved codes are written back to the clinical record system, with the status updated in the Reviewed Documents log.", image: "/reviewed-documents.png" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group w-16 relative" onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}>
                  {/* Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[15px] transition-all duration-300 z-10 ${activeAccordion === i ? 'bg-[#02ACEA] text-white shadow-lg scale-110 ring-4 ring-blue-100' : activeAccordion > i ? 'bg-[#02ACEA] text-white' : 'bg-white text-[#0A1838] border-2 border-[#E0E8F5] group-hover:border-[#02ACEA]'}`}>
                     {step.num}
                  </div>
                  {/* Title underneath */}
                  <span className={`text-[12px] font-bold text-center leading-tight transition-colors duration-300 absolute top-14 w-20 ${activeAccordion === i ? 'text-[#0A1838]' : 'text-[#64748B] group-hover:text-[#0A1838]'}`}>{step.title}</span>
                </div>
              ))}
            </div>

            {/* Active Content Area */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="wait">
                {activeAccordion === -1 ? (
                   <motion.div 
                     key="empty"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="flex flex-col items-center justify-center py-20 text-[#64748B] border-2 border-dashed border-[#E0E8F5] rounded-2xl bg-[#F8FAFC]"
                   >
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-50"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                     <p className="text-[16px] font-medium">Click on any step in the timeline above to view details and screenshots.</p>
                   </motion.div>
                ) : (
                  <motion.div 
                    key={activeAccordion}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-[#E0E8F5] shadow-lg p-6 lg:p-10"
                  >
                    <div className="mb-8 text-center max-w-3xl mx-auto">
                      <h3 className="text-[24px] font-extrabold text-[#0A1838] mb-3">
                        {[
                          { title: "Receive", desc: "Clinical correspondence enters a visible queue.", expandedDesc: "Documents arrive securely and are immediately visible in the platform. The clinical overview provides an at-a-glance summary of incoming volumes and processing status.", image: "/clinical-overview.png" },
                          { title: "Extract", desc: "Relevant information is structured from the source.", expandedDesc: "Ovotech identifies and extracts key clinical information from the unstructured text, presenting it clearly alongside the original document for easy verification.", image: "/clinical-review-2.png" },
                          { title: "Identify", desc: "Clinical concepts are linked to supporting evidence.", expandedDesc: "Extracted concepts are highlighted within the source text, maintaining a clear link between the structured data and the original evidence.", image: "/clinical-review-2.png" },
                          { title: "Suggest", desc: "SNOMED CT codes are presented for consideration.", expandedDesc: "The platform suggests appropriate SNOMED CT codes based on the extracted information, complete with confidence indicators.", image: "/clinical-review-3.png" },
                          { title: "Review", desc: "An authorised person checks context and evidence.", expandedDesc: "Reviewers can access patient history processed through Ovotech to understand the broader clinical context before making coding decisions.", image: "/patient-history.png" },
                          { title: "Approve", desc: "The final selection is explicitly approved.", expandedDesc: "Authorised personnel accept, amend, or reject the suggested codes. Explicit approval is required before any information moves forward.", image: "/clinical-review-3.png" },
                          { title: "Write back", desc: "Approved information is posted to clinical record system.", expandedDesc: "Completed reviews and approved codes are written back to the clinical record system, with the status updated in the Reviewed Documents log.", image: "/reviewed-documents.png" }
                        ][activeAccordion].title}
                      </h3>
                      <p className="text-[18px] text-[#02ACEA] font-bold mb-4">
                        {[
                          { title: "Receive", desc: "Clinical correspondence enters a visible queue.", expandedDesc: "Documents arrive securely and are immediately visible in the platform. The clinical overview provides an at-a-glance summary of incoming volumes and processing status.", image: "/clinical-overview.png" },
                          { title: "Extract", desc: "Relevant information is structured from the source.", expandedDesc: "Ovotech identifies and extracts key clinical information from the unstructured text, presenting it clearly alongside the original document for easy verification.", image: "/clinical-review-2.png" },
                          { title: "Identify", desc: "Clinical concepts are linked to supporting evidence.", expandedDesc: "Extracted concepts are highlighted within the source text, maintaining a clear link between the structured data and the original evidence.", image: "/clinical-review-2.png" },
                          { title: "Suggest", desc: "SNOMED CT codes are presented for consideration.", expandedDesc: "The platform suggests appropriate SNOMED CT codes based on the extracted information, complete with confidence indicators.", image: "/clinical-review-3.png" },
                          { title: "Review", desc: "An authorised person checks context and evidence.", expandedDesc: "Reviewers can access patient history processed through Ovotech to understand the broader clinical context before making coding decisions.", image: "/patient-history.png" },
                          { title: "Approve", desc: "The final selection is explicitly approved.", expandedDesc: "Authorised personnel accept, amend, or reject the suggested codes. Explicit approval is required before any information moves forward.", image: "/clinical-review-3.png" },
                          { title: "Write back", desc: "Approved information is posted to clinical record system.", expandedDesc: "Completed reviews and approved codes are written back to the clinical record system, with the status updated in the Reviewed Documents log.", image: "/reviewed-documents.png" }
                        ][activeAccordion].desc}
                      </p>
                      <p className="text-[#475569] text-[15px] leading-relaxed">
                        {[
                          { title: "Receive", desc: "Clinical correspondence enters a visible queue.", expandedDesc: "Documents arrive securely and are immediately visible in the platform. The clinical overview provides an at-a-glance summary of incoming volumes and processing status.", image: "/clinical-overview.png" },
                          { title: "Extract", desc: "Relevant information is structured from the source.", expandedDesc: "Ovotech identifies and extracts key clinical information from the unstructured text, presenting it clearly alongside the original document for easy verification.", image: "/clinical-review-2.png" },
                          { title: "Identify", desc: "Clinical concepts are linked to supporting evidence.", expandedDesc: "Extracted concepts are highlighted within the source text, maintaining a clear link between the structured data and the original evidence.", image: "/clinical-review-2.png" },
                          { title: "Suggest", desc: "SNOMED CT codes are presented for consideration.", expandedDesc: "The platform suggests appropriate SNOMED CT codes based on the extracted information, complete with confidence indicators.", image: "/clinical-review-3.png" },
                          { title: "Review", desc: "An authorised person checks context and evidence.", expandedDesc: "Reviewers can access patient history processed through Ovotech to understand the broader clinical context before making coding decisions.", image: "/patient-history.png" },
                          { title: "Approve", desc: "The final selection is explicitly approved.", expandedDesc: "Authorised personnel accept, amend, or reject the suggested codes. Explicit approval is required before any information moves forward.", image: "/clinical-review-3.png" },
                          { title: "Write back", desc: "Approved information is posted to clinical record system.", expandedDesc: "Completed reviews and approved codes are written back to the clinical record system, with the status updated in the Reviewed Documents log.", image: "/reviewed-documents.png" }
                        ][activeAccordion].expandedDesc}
                      </p>
                    </div>
                    
                    {/* Browser-like Image Frame */}
                    <div className="bg-white rounded-xl shadow-md border border-[#E0E8F5] overflow-hidden max-w-4xl mx-auto">
                      <div className="bg-[#F4F7FC] px-4 py-3 border-b border-[#E0E8F5] flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <img 
                        src={
                          [
                            { title: "Receive", desc: "Clinical correspondence enters a visible queue.", expandedDesc: "Documents arrive securely and are immediately visible in the platform. The clinical overview provides an at-a-glance summary of incoming volumes and processing status.", image: "/clinical-overview.png" },
                            { title: "Extract", desc: "Relevant information is structured from the source.", expandedDesc: "Ovotech identifies and extracts key clinical information from the unstructured text, presenting it clearly alongside the original document for easy verification.", image: "/clinical-review-2.png" },
                            { title: "Identify", desc: "Clinical concepts are linked to supporting evidence.", expandedDesc: "Extracted concepts are highlighted within the source text, maintaining a clear link between the structured data and the original evidence.", image: "/clinical-review-2.png" },
                            { title: "Suggest", desc: "SNOMED CT codes are presented for consideration.", expandedDesc: "The platform suggests appropriate SNOMED CT codes based on the extracted information, complete with confidence indicators.", image: "/clinical-review-3.png" },
                            { title: "Review", desc: "An authorised person checks context and evidence.", expandedDesc: "Reviewers can access patient history processed through Ovotech to understand the broader clinical context before making coding decisions.", image: "/patient-history.png" },
                            { title: "Approve", desc: "The final selection is explicitly approved.", expandedDesc: "Authorised personnel accept, amend, or reject the suggested codes. Explicit approval is required before any information moves forward.", image: "/clinical-review-3.png" },
                            { title: "Write back", desc: "Approved information is posted to clinical record system.", expandedDesc: "Completed reviews and approved codes are written back to the clinical record system, with the status updated in the Reviewed Documents log.", image: "/reviewed-documents.png" }
                          ][activeAccordion].image
                        } 
                        alt="Screenshot" 
                        className="w-full h-auto block" 
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>"""

# Ensure the replacement string is literal and correct
# Note: we use re.sub with a dotall flag to match across lines
content_new = re.sub(pattern, new_code, content, flags=re.DOTALL)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content_new)
    
print("Regex replacement completed.")