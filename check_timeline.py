with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find("Horizontal Timeline")
if idx != -1:
    print(content[idx:idx+800])