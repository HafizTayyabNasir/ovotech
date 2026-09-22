import re

with open(r'src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add activeAccordion state
if 'const [activeAccordion, setActiveAccordion] = useState(-1);' not in content:
    content = content.replace(
        'const [activeTab, setActiveTab] = useState(0);',
        'const [activeTab, setActiveTab] = useState(0);\n  const [activeAccordion, setActiveAccordion] = useState(-1);'
    )

new_accordion_code = '''<div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
            {[
              { num: "01", title: "Receive", desc: "Clinical correspondence enters a visible queue.", expandedDesc: "Documents arrive securely and are immediately visible in the platform. The clinical overview provides an at-a-glance summary of incoming volumes and processing status.", image: "/clinical-overview.png" },
              { num: "02", title: "Extract", desc: "Relevant information is structured from the source.", expandedDesc: "Ovotech identifies and extracts key clinical information from the unstructured text, presenting it clearly alongside the original document for easy verification.", image: "/clinical-review-2.png" },
              { num: "03", title: "Identify", desc: "Clinical concepts are linked to supporting evidence.", expandedDesc: "Extracted concepts are highlighted within the source text, maintaining a clear link between the structured data and the original evidence.", image: "/clinical-review-2.png" },
              { num: "04", title: "Suggest", desc: "SNOMED CT codes are presented for consideration.", expandedDesc: "The platform suggests appropriate SNOMED CT codes based on the extracted information, complete with confidence indicators.", image: "/clinical-review-3.png" },
              { num: "05", title: "Review", desc: "An authorised person checks context and evidence.", expandedDesc: "Reviewers can access patient history processed through Ovotech to understand the broader clinical context before making coding decisions.", image: "/patient-history.png" },
              { num: "06", title: "Approve", desc: "The final selection is explicitly approved.", expandedDesc: "Authorised personnel accept, amend, or reject the suggested codes. Explicit approval is required before any information moves forward.", image: "/clinical-review-3.png" },
              { num: "07", title: "Write back", desc: "Approved information is posted to clinical record system.", expandedDesc: "Completed reviews and approved codes are written back to the clinical record system, with the status updated in the Reviewed Documents log.", image: "/reviewed-documents.png" }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#E0E8F5] shadow-sm overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={\w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-[14px] transition-colors \\}>
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-[#0A1838]">{step.title}</h3>
                      <p className="text-[14px] text-[#475569] mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                  <div className={\	ext-[#64748B] transition-transform duration-300 \\}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </button>
                
                {/* Accordion Content */}
                <motion.div 
                  initial={false}
                  animate={{ height: activeAccordion === i ? 'auto' : 0, opacity: activeAccordion === i ? 1 : 0 }}
                  className="overflow-hidden bg-[#F8FAFC]"
                >
                  <div className="p-6 pt-2 border-t border-[#E0E8F5]">
                    <p className="text-[#475569] text-[15px] leading-relaxed mb-6">
                      {step.expandedDesc}
                    </p>
                    {/* Browser-like Image Frame */}
                    <div className="bg-white rounded-xl shadow-md border border-[#E0E8F5] overflow-hidden max-w-3xl mx-auto">
                      <div className="bg-[#F4F7FC] px-4 py-3 border-b border-[#E0E8F5] flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <img src={step.image} alt={step.title} className="w-full h-auto block" />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>'''

# The section to replace starts from '<div className="w-full py-12 relative overflow-x-auto no-scrollbar">'
# We will just replace it based on a known start and end
start_marker = '<div className="w-full py-12 relative overflow-x-auto no-scrollbar">'
end_marker = '<div className="text-center text-[12px] text-[#64748B]">'
idx1 = content.find(start_marker)
idx2 = content.find(end_marker)

if idx1 != -1 and idx2 != -1:
    content = content[:idx1] + new_accordion_code + '\n          ' + content[idx2:]
    with open(r'src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Accordion replacement completed.")
else:
    print("Markers not found.")