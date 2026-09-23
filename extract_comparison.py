with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re
sections = re.findall(r'<section[^>]*>.*?</section>', content, flags=re.DOTALL)

for sec in sections:
    if "Without a connected process" in sec:
        with open("comparison_section.txt", "w", encoding='utf-8') as out:
            out.write(sec)
        print("Comparison section saved to comparison_section.txt")
        break