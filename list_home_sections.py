with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re
sections = re.findall(r'<section[^>]*>.*?</section>', content, flags=re.DOTALL)
print(f"Home has {len(sections)} sections")
for i, sec in enumerate(sections):
    print(f"\nSECTION {i} -----------------")
    print(sec[:1000])