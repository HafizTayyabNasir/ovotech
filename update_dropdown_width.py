import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Make <li> relative
content = content.replace('<li key={item.key} className="relative group md:static h-full flex items-center">', 
                          '<li key={item.key} className="relative group h-full flex items-center">')

# Find the dropdown container and make it fixed width and centered
# It currently has: className="absolute top-full left-0 w-full ...
content = re.sub(
    r'className="absolute top-full left-0 w-full ([^"]+)"',
    r'className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-[20%] w-[680px] \1"',
    content
)

# And we should change border-radius from "0 0 16px 16px" to "16px" and borderTop to normal
content = content.replace('borderRadius: "0 0 16px 16px"', 'borderRadius: "16px"')
content = content.replace('borderTop: "none"', 'borderTop: "1px solid #E0E8F5"')

# Reduce the minHeight from 280px to maybe 240px
content = content.replace('minHeight: "280px"', 'minHeight: "240px"')

# Reduce the left padding since it's a smaller box now
content = content.replace('padding: "32px 40px"', 'padding: "24px 30px"')

# Make promo narrower maybe? It's currently 360px.
content = content.replace('width: "360px", background: `#019EE1`,', 'width: "280px", background: `#019EE1`,')
# Adjust promo padding
content = content.replace('padding: "35px"', 'padding: "25px"')

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Dropdown successfully converted to a compact floating menu.")