with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find("Desktop Mega Menu Dropdown")
start = content.rfind("{/*", 0, idx)
end = content.find("</div>", idx + 1000)
print(content[start:end+20])