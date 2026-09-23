with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Remove the text-center mb-16 header from the comparison block
pattern = r'<div className="text-center mb-16">\s*<span className="text-\[12px\][^>]*>The Problem</span>.*?</p>\s*</div>'
content = re.sub(pattern, '', content, flags=re.DOTALL)

# Remove the quotes I added around "Our Purpose" just in case that's what they meant
content = content.replace('"To simplify clinical document processing', 'To simplify clinical document processing')
content = content.replace('<span className="text-[#02ACEA]">patient care.</span>"', '<span className="text-[#02ACEA]">patient care.</span>')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned up extra headings from comparison section and removed quotes.")