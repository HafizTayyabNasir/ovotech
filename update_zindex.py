import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('bg-[#E0E8F5] -z-10', 'bg-[#E0E8F5] z-0')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Z-index updated.")