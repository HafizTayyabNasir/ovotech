with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()
idx2 = content.find("The right information for the right role.")
print(content[idx2-500:idx2+2000])