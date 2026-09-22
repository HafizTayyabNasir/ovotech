with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()
idx = content.find("Your practice. In one clear view.")
if idx != -1:
    start = max(0, idx - 200)
    end = min(len(content), idx + 4000)
    print(content[start:end])