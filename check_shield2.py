import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find("top-[260px]")
if idx != -1:
    start = max(0, idx - 500)
    end = min(len(content), idx + 500)
    print(content[start:end])