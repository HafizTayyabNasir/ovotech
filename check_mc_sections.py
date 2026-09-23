import re
with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's extract headers of sections
sections = re.findall(r'<section.*?>(.*?)</section>', content, flags=re.DOTALL)
for i, sec in enumerate(sections):
    match = re.search(r'<h[23].*?>(.*?)</h[23]>', sec)
    if match:
        print(f"Section {i}: {match.group(1)}")