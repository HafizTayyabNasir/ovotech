with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\TopBar.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('className="bg-[#019EE1]', 'className="bg-[#0A1838]')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\TopBar.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Footer.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('style={{ background: "#000000"', 'style={{ background: "#0A1838"')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Footer.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated TopBar and Footer backgrounds.")