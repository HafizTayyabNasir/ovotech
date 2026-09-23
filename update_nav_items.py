with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("const navItems = [")
end = content.find("];", start)

new_navItems = """const navItems = [
    {
      label: "Solutions", href: "#", key: "solutions",
      columns: [
        { header: "Our Solutions", links: [
          { label: "Medical Coding", href: "/solutions/medical_coding", desc: "Our end-to-end clinical coding tool" }
        ]}
      ],
      promo: { title: "Clinical System Integration", text: "Seamless structured write-back to patient clinical records.", image: "/clinical-workspace-review.png", bg: "from-primary to-primary-dark" },
    },
    { label: "About Us", href: "/about", key: "about" },
    { label: "Contact", href: "/contact", key: "contact" },
  """

content = content[:start] + new_navItems + content[end:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated navItems to only show Medical Coding.")