with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find("Your practice. In one clear view.")
start_idx = content.rfind("<section", 0, idx)
end_idx = content.find("</section>", idx) + 10

print(content[start_idx:start_idx+100])
print("...")
print(content[end_idx-100:end_idx])
