with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()
idx = content.find("Without a connected process")
start = content.rfind("<section", 0, idx)
print(content[start:start+100])