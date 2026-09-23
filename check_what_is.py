import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

what_is_start = content.find("WHAT IS OVOTECH?")
if what_is_start != -1:
    section_start = content.rfind("<section", 0, what_is_start)
    section_end = content.find("</section>", what_is_start)
    print(content[section_start:section_end+10])