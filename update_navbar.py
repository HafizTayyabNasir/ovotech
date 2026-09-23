with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

navItems_str = """const navItems = [
    { label: "Home", href: "/", key: "home" },
    {
      label: "Solutions", href: "#", key: "solutions","""

content = content.replace('const navItems = [\n    {\n      label: "Solutions", href: "#", key: "solutions",', navItems_str)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added Home to Navbar.")