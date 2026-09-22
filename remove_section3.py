import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Try to find SECTION 3 and INTERACTIVE WORKFLOW SHOWCASE
pattern = r'\{\/\*\s*SECTION 3.*?PRODUCT TOUR\s*\*\/\}.*?(?=\{\/\*\s*INTERACTIVE WORKFLOW SHOWCASE)'

# Use re.DOTALL to match across newlines
new_content = re.sub(pattern, '', content, flags=re.DOTALL)

if len(new_content) < len(content):
    print(f"Removed {len(content) - len(new_content)} characters.")
    with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\medical_coding\page.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
else:
    print("Section not found.")