with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_about_span = 'text-[12px] font-extrabold tracking-[2px] text-[#019EE1] uppercase mb-6 shadow-sm">'
new_about_span = 'text-[13px] font-black tracking-[2px] text-[#019EE1] uppercase mb-6 shadow-sm">'
content = content.replace(old_about_span, new_about_span)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'w', encoding='utf-8') as f:
    f.write(content)


with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(old_about_span, new_about_span)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'w', encoding='utf-8') as f:
    f.write(content)


with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

medical_badge = '<span className="inline-block py-1 px-3 rounded-full bg-white border border-[#E0E8F5] text-[13px] font-black tracking-[2px] text-[#019EE1] uppercase mb-6 shadow-sm">\n                  Medical Coding\n                </span>\n                '

# find <motion.div ...> then inject
match_str = '<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>\n                <h1'
replace_str = '<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>\n                ' + medical_badge + '<h1'
content = content.replace(match_str, replace_str)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Badges updated.")