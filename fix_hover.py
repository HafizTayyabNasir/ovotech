with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix hover gap issue by adding the pseudo-element bridge
old_classes = 'className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"'

new_classes = 'className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto before:content-[\'\'] before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:block"'

content = content.replace(old_classes, new_classes)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added pseudo-element bridge to prevent hover gap issue.")