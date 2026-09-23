with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Import usePathname
if "usePathname" not in content:
    content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { usePathname } from "next/navigation";')

# Define pathname
if "const pathname = usePathname();" not in content:
    content = content.replace('const [scrolled, setScrolled] = useState(false);', 'const [scrolled, setScrolled] = useState(false);\n  const pathname = usePathname();')

# Replace the style block in Desktop Nav Links
old_desktop_style = """                style={{
                  fontSize: "14px",
                  fontWeight: item.key === "home" ? 700 : 600,
                  padding: "10px 14px",
                  borderRadius: "8px",
                  color: item.key === "home" ? "#02ACEA" : "#0A1838"
                }}"""

new_desktop_style = """                style={{
                  fontSize: "14px",
                  fontWeight: (pathname === item.href || (item.key === "solutions" && pathname.startsWith("/solutions"))) ? 700 : 600,
                  padding: "10px 14px",
                  borderRadius: "8px",
                  color: (pathname === item.href || (item.key === "solutions" && pathname.startsWith("/solutions"))) ? "#02ACEA" : "#0A1838"
                }}"""

content = content.replace(old_desktop_style, new_desktop_style)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Dynamic bolding applied to Navbar.")