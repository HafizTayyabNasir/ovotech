import re

# 1. Update Buttons in medical_coding/page.js
with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    mc_content = f.read()

# Make text larger and cyan when unselected
old_btn0 = "className={`flex-1 relative z-10 py-3 text-center text-[13px] font-bold rounded-full transition-colors duration-300 ${activeTab === 0 ? 'text-white' : 'text-gray-400 hover:text-white'}`}"
new_btn0 = "className={`flex-1 relative z-10 py-3 text-center text-[14px] font-extrabold rounded-full transition-all duration-300 ${activeTab === 0 ? 'text-white' : 'text-[#02ACEA] hover:text-white'}`}"
mc_content = mc_content.replace(old_btn0, new_btn0)

old_btn1 = "className={`flex-1 relative z-10 py-3 text-center text-[13px] font-bold rounded-full transition-colors duration-300 ${activeTab === 1 ? 'text-white' : 'text-gray-400 hover:text-white'}`}"
new_btn1 = "className={`flex-1 relative z-10 py-3 text-center text-[14px] font-extrabold rounded-full transition-all duration-300 ${activeTab === 1 ? 'text-white' : 'text-[#02ACEA] hover:text-white'}`}"
mc_content = mc_content.replace(old_btn1, new_btn1)

# Ensure the container has enough height padding if text is slightly larger
# py-3 is fine for 14px text.

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(mc_content)


# 2. Add top spacing to Comparison section in Home page
with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    home_content = f.read()

# The comparison section starts right after WHAT IS OVOTECH.
# Its opening tag is <section className="py-20 bg-white">
# But there might be other sections with that exact class.
# Let's find the one containing "Without a connected process"
idx = home_content.find("Without a connected process")
if idx != -1:
    start_idx = home_content.rfind("<section", 0, idx)
    end_idx = home_content.find(">", start_idx)
    section_tag = home_content[start_idx:end_idx+1]
    
    # Change py-20 to pt-32 pb-20 to push the content down inside the white section,
    # OR change it to mt-12 if we want the white section itself to be pushed down.
    # Since it's bg-white, pt-32 adds more white space above it. 
    # Let's add a large top margin or padding. "pt-32 pb-16"
    new_section_tag = section_tag.replace("py-20", "pt-32 pb-20")
    if new_section_tag == section_tag:
        # If py-20 isn't there, just append pt-32
        new_section_tag = section_tag.replace('className="', 'className="pt-32 mt-12 ')
        
    home_content = home_content[:start_idx] + new_section_tag + home_content[end_idx+1:]

    with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'w', encoding='utf-8') as f:
        f.write(home_content)

print("Updates applied.")