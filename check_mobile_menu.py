with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("MOBILE FULL-WIDTH DRAWER OVERLAY")
end = content.find("</nav>", start)
print(content[start:start+1500])