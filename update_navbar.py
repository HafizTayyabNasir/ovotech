import os

# 1. Update Navbar.js
with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("const navItems = [")
end = content.find("  ];", start)

new_navItems = """const navItems = [
    { label: "About", href: "/about", key: "about" },
    { label: "Contact", href: "/contact", key: "contact" },
"""

content = content[:start] + new_navItems + content[end:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

# 2. Delete /solutions/page.js
solutions_page = r'd:\Ovotech\ovotech-main\ovotech-main\src\app\solutions\page.js'
if os.path.exists(solutions_page):
    os.remove(solutions_page)
    print("Deleted /solutions/page.js")

# Wait, what about /second, /resources, /help-centre? The user said to remove their buttons.
# "home second resource, support k buttons remove kar do"
# I removed them from navItems. I don't necessarily have to delete their files unless asked, 
# but they asked to remove "/solutions wala page hi remove kar do", so I only delete solutions/page.js.

print("Navbar updated.")