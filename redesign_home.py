import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    home_content = f.read()

with open(r'd:\Ovotech\ovotech-main\ovotech-main\comparison_section.txt', 'r', encoding='utf-8') as f:
    comparison_content = f.read()

# Make home page a client component
home_content = home_content.replace('import Link from "next/link";', '"use client";\nimport Link from "next/link";\nimport { motion } from "framer-motion";')

# Remove metadata
metadata_regex = r'export const metadata = \{[^}]*\};\n*'
home_content = re.sub(metadata_regex, '', home_content)

# Add motion to Hero left column
home_content = home_content.replace(
    '<div className="w-full lg:w-[45%] flex flex-col items-start text-left">\n              <div>',
    '<div className="w-full lg:w-[45%] flex flex-col items-start text-left">\n              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>'
)
home_content = home_content.replace(
    '</div>\n            </div>\n            \n            {/* RIGHT COLUMN',
    '</motion.div>\n            </div>\n            \n            {/* RIGHT COLUMN'
)

# Add motion to Hero right column
home_content = home_content.replace(
    '{/* RIGHT COLUMN - UI Mockups */}\n            <div className="w-full lg:w-[55%] relative">',
    '{/* RIGHT COLUMN - UI Mockups */}\n            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full lg:w-[55%] relative">'
)
# The end of the right column is before </section>
# Actually, the right column is deeply nested. Let's just find `</div>\n          </div>\n        </div>\n      </section>`
home_content = home_content.replace(
    '</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>',
    '</div>\n              </div>\n            </motion.div>\n          </div>\n        </div>\n      </section>'
)

# Redesign "WHAT IS OVOTECH?" to use dark background (like Medical Coding's Role-Based section)
old_what = """<section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">WHAT IS OVOTECH?</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">A Smarter Way to Manage Clinical Correspondence</h2>
          <p className="text-[#475569] text-[16px] max-w-3xl mx-auto leading-relaxed">
            Ovotech brings clinical document processing, information extraction, coding recommendations, and authorised human review into one connected workflow. Using AI, the platform identifies relevant clinical information from incoming correspondence and suggests SNOMED CT codes for review before approved information is added to the patient's clinical record. Designed to work alongside existing clinical systems, Ovotech helps practices manage clinical information more efficiently without replacing the systems they already use.
          </p>
        </div>
      </section>"""

new_what = """<section className="py-24 bg-[#0A1838] relative overflow-hidden">
        <div style={{ position: "absolute", top: "0%", left: "0%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(2, 172, 234, 0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">WHAT IS OVOTECH?</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-white mt-2 mb-6">A Smarter Way to Manage Clinical Correspondence</h2>
          
          <div className="bg-[#112146] rounded-3xl border border-[#2A3858] shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto">
             <p className="text-gray-300 text-[18px] leading-relaxed">
               Ovotech brings clinical document processing, information extraction, coding recommendations, and authorised human review into one connected workflow. Using AI, the platform identifies relevant clinical information from incoming correspondence and suggests SNOMED CT codes for review before approved information is added to the patient's clinical record. Designed to work alongside existing clinical systems, Ovotech helps practices manage clinical information more efficiently without replacing the systems they already use.
             </p>
          </div>
        </div>
      </section>"""
home_content = home_content.replace(old_what, new_what)

# Redesign "WHY WAS OVOTECH BUILT?" to use medical coding split/card grid layout
old_why = """<section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">WHY WAS OVOTECH BUILT?</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-4">Because Clinical Teams Have More Important Things to Focus On.</h2>
            <p className="text-[#475569] text-[16px] max-w-3xl mx-auto leading-relaxed mb-10">
              Every day, GP practices receive large volumes of clinical correspondence that need to be reviewed, interpreted, coded, and recorded. This often involves switching between systems, manually extracting information, identifying appropriate clinical codes, and updating patient records. These repetitive tasks consume valuable time and can contribute to administrative backlogs. Ovotech was built to simplify this process. By combining AI-assisted processing with authorised human review, the platform helps reduce repetitive administrative work, improve workflow efficiency, and support more consistent clinical coding.
            </p>
            
            {/* Our Purpose Callout */}
            <div className="bg-[#F8FAFC] border border-[#E0E8F5] rounded-3xl p-8 max-w-4xl mx-auto shadow-sm">
              <h3 className="text-[14px] font-extrabold text-[#0A1838] uppercase tracking-wider mb-3">Our Purpose</h3>
              <p className="text-[#02ACEA] text-[20px] font-bold leading-relaxed">
                To simplify clinical document processing and reduce the administrative burden on GP practices, giving healthcare professionals more time to focus on what matters most: patient care.
              </p>
            </div>
          </div>
        </div>
      </section>"""

new_why = f"""
      {comparison_content}

      <section className="py-20 bg-[#F4F7FC]">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
               <span className="text-[12px] font-bold tracking-[2px] text-[#02ACEA] uppercase">WHY WAS OVOTECH BUILT?</span>
               <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0A1838] mt-2 mb-6">Because Clinical Teams Have More Important Things to Focus On.</h2>
               <p className="text-[#475569] text-[16px] leading-relaxed mb-6">
                 Every day, GP practices receive large volumes of clinical correspondence that need to be reviewed, interpreted, coded, and recorded. This often involves switching between systems, manually extracting information, identifying appropriate clinical codes, and updating patient records. These repetitive tasks consume valuable time and can contribute to administrative backlogs. 
               </p>
               <p className="text-[#475569] text-[16px] leading-relaxed">
                 Ovotech was built to simplify this process. By combining AI-assisted processing with authorised human review, the platform helps reduce repetitive administrative work, improve workflow efficiency, and support more consistent clinical coding.
               </p>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="bg-white border-2 border-[#02ACEA] rounded-3xl p-10 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#02ACEA] opacity-10 rounded-bl-full"></div>
                  <h3 className="text-[16px] font-extrabold text-[#0A1838] uppercase tracking-widest mb-4">Our Purpose</h3>
                  <p className="text-[#0A1838] text-[24px] font-bold leading-relaxed">
                    "To simplify clinical document processing and reduce the administrative burden on GP practices, giving healthcare professionals more time to focus on what matters most: <span className="text-[#02ACEA]">patient care.</span>"
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>"""

home_content = home_content.replace(old_why, new_why)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'w', encoding='utf-8') as f:
    f.write(home_content)

print("Home page completely redesigned with Medical Coding layouts.")