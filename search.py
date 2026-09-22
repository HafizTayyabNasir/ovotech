import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Look for 'Without a connected process'
idx = content.find("Without a connected process")
if idx != -1:
    print("Found comparison block at index:", idx)
    start = max(0, idx - 200)
    end = min(len(content), idx + 1000)
    print(content[start:end])
else:
    print("Not found")