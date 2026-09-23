with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

desktop_start = content.find("<ul className=")
desktop_end = content.find("</ul>", desktop_start)
print(content[desktop_start:desktop_end+5])