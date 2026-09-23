with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re
sections = re.findall(r'<section[^>]*>.*?</section>', content, flags=re.DOTALL)
for i, sec in enumerate(sections):
    print(f"Section {i}: {sec[:100]}...")