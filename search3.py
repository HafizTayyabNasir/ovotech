import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find("With Ovotech")
if idx != -1:
    start = max(0, idx - 100)
    end = min(len(content), idx + 1500)
    print(content[start:end])