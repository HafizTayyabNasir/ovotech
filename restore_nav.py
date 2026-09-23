with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find("const navItems = [")
end = content.find("  ];", start)

new_navItems = """const navItems = [
    {
      label: "Solutions", href: "#", key: "solutions",
      topSection: { label: "Medical Coding", href: "/solutions/medical_coding", desc: "Our end-to-end clinical coding tool" },
      columns: [
        { header: "Inside Medical Coding", links: [
          { label: "01 Review Queue", href: "/solutions/review-queue", desc: "Workload management for incoming clinical documents" },
          { label: "02 Clinical Review Workspace", href: "/solutions/clinical-review", desc: "Unified document, extracted info & SNOMED CT coding" },
          { label: "03 Patient History Context", href: "/solutions/patient-history", desc: "Relevant patient records alongside documents" },
        ]},
        { header: "", links: [
          { label: "04 SNOMED CT Coding Support", href: "/solutions/snomed-coding", desc: "Assisted concept recognition & code suggestions" },
          { label: "05 Clinical System Integration", href: "/solutions/emis-integration", desc: "Structured write-back to patient clinical records" },
          { label: "06 Value & KPI Tracking", href: "/solutions/kpi-tracking", desc: "Demonstrate time saved & released practice capacity" },
        ]},
      ],
      promo: { title: "Clinical System Integration", text: "Seamless structured write-back to patient clinical records.", bg: "from-primary to-primary-dark" },
    },
    { label: "About", href: "/about", key: "about" },
    { label: "Contact", href: "/contact", key: "contact" },
"""

content = content[:start] + new_navItems + content[end:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Navbar updated to include Solutions.")