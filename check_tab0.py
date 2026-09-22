with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("activeTab === 0 ? (")
end = content.find(") : (", start)

print(content[start:end])