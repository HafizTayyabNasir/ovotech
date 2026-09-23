import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Change the <li> class to allow relative positioning for the dropdown
content = content.replace('<li key={item.key} className="relative group md:static h-full flex items-center">', 
                          '<li key={item.key} className="relative group h-full flex items-center">')

# 2. Change the dropdown container to be a floating box instead of full-width
old_dropdown_classes = 'className="absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 \ngroup-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto \nbefore:content-[\'\'] before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:block"'
# Note: Since the string in JS spans multiple lines, we should use regex or careful replacement.