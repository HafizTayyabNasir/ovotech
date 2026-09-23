with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace button with link
old_btn = "<button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}"
new_btn = "<a href=\"#contact-form\""
content = content.replace(old_btn, new_btn)

# Replace closing button tag
content = content.replace("</button>", "</a>")

# Add id to the contact section
old_sec = '<section className="py-24 bg-[#F8FAFC] relative overflow-hidden">'
new_sec = '<section id="contact-form" className="py-24 bg-[#F8FAFC] relative overflow-hidden">'
content = content.replace(old_sec, new_sec)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\contact\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed server component onClick error.")