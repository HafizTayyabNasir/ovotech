import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Find the section to extract
idx = content.find("Your practice. In one clear view.")
start_idx = content.rfind("<section className=\"py-20 bg-[#F4F7FC]\">", 0, idx)
end_idx = content.find("</section>", idx) + len("</section>")

section_content = content[start_idx:end_idx]

# Extract the inner div
inner_start = section_content.find('<div className="max-w-[1350px]')
inner_end = section_content.rfind('</div>', 0, section_content.rfind('</div>')) + 6 # approx, let's just use regex or exact boundaries

# Actually it's easier to just replace the whole section string with empty string, 
# and then take the section_content and strip the <section> tags.

inner_content = re.sub(r'^<section[^>]*>', '', section_content).strip()
inner_content = re.sub(r'</section>$', '', inner_content).strip()

# Now remove the section from original place
content = content[:start_idx] + content[end_idx:]

# 2. Find the activeTab === 1 block to replace
tab_start = content.find('<div className="p-8 lg:p-12 animate-fade-in border-l-4 border-l-purple-500">')
tab_end = content.find(')}', tab_start)

replacement = f"""<div className="p-6 lg:p-10 animate-fade-in border-l-4 border-l-[#02ACEA] bg-[#F4F7FC]">
                    {inner_content}
                  </div>
               """

content = content[:tab_start] + replacement + content[tab_end:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Section moved successfully.")