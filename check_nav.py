with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("const navItems = [")
end = content.find("];", start)
print(content[start:end+2])