with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()
idx = content.find("Your practice. In one clear view.")
start_idx = content.rfind("<section", 0, idx)
end_idx = content.find("</section>", idx) + 10

with open("section_practice.txt", "w", encoding='utf-8') as f:
    f.write(content[start_idx:end_idx])
print("Saved to section_practice.txt")