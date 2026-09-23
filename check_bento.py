with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find("BENTO GRID")
start = content.rfind("<div", 0, idx)
end = content.find("</section>", idx)
print(content[start:start+1000])