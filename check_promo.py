with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("const navItems = [")
end = content.find("  ];", start)
print(content[start:end+4])

print("---------------------------------")
promo_start = content.find("{item.promo && (")
promo_end = content.find(")}", promo_start + 100)
print(content[promo_start:promo_end+2])