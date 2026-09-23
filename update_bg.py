with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find("Without a connected process")
start = content.rfind("<section", 0, idx)
end = content.find(">", start)
section_tag = content[start:end+1]
new_tag = section_tag.replace("bg-white", "bg-[#F4F7FC]")
content = content[:start] + new_tag + content[end+1:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Comparison background to #F4F7FC.")