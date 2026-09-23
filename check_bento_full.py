import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find("{/* BENTO GRID */}")
end = content.find("</section>", idx)
print(content[idx:end])