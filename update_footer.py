import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Footer.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Platform links to point to actual pages, not #anchors.
old_platform = """  Platform: [
    { label: "Review Queue", href: "/solutions#review-queue" },
    { label: "Clinical Review", href: "/solutions#clinical-review" },
    { label: "Patient History", href: "/solutions#patient-history" },
    { label: "SNOMED CT Coding", href: "/solutions#snomed-coding" },
    { label: "Clinical System Integration", href: "/solutions#emis-integration" },
    { label: "Dashboard & KPIs", href: "/solutions#kpi-tracking" },
  ],"""

new_platform = """  Platform: [
    { label: "Review Queue", href: "/solutions/review-queue" },
    { label: "Clinical Review", href: "/solutions/clinical-review" },
    { label: "Patient History", href: "/solutions/patient-history" },
    { label: "SNOMED CT Coding", href: "/solutions#snomed-coding" },
    { label: "Clinical System Integration", href: "/solutions/emis-integration" },
    { label: "Dashboard & KPIs", href: "/solutions/medical_coding" },
  ],"""
# Wait, I have /solutions/snomed-coding/page.js, let's fix that too.
new_platform = """  Platform: [
    { label: "Review Queue", href: "/solutions/review-queue" },
    { label: "Clinical Review", href: "/solutions/clinical-review" },
    { label: "Patient History", href: "/solutions/patient-history" },
    { label: "SNOMED CT Coding", href: "/solutions/snomed-coding" },
    { label: "Clinical System Integration", href: "/solutions/emis-integration" },
    { label: "Dashboard & KPIs", href: "/solutions/medical_coding" },
  ],"""

content = content.replace(old_platform, new_platform)

# Wait, what if old_platform doesn't match perfectly because of indentation? Let's just use string replacement on individual hrefs
content = content.replace('href: "/solutions#review-queue"', 'href: "/solutions/review-queue"')
content = content.replace('href: "/solutions#clinical-review"', 'href: "/solutions/clinical-review"')
content = content.replace('href: "/solutions#patient-history"', 'href: "/solutions/patient-history"')
content = content.replace('href: "/solutions#snomed-coding"', 'href: "/solutions/snomed-coding"')
content = content.replace('href: "/solutions#emis-integration"', 'href: "/solutions/emis-integration"')
content = content.replace('href: "/solutions#kpi-tracking"', 'href: "/solutions/medical_coding"')

# 2. Remove Twitter and YouTube social icons
socials_start = content.find("            {[")
socials_end = content.find("].map((s, i) => (")

old_socials = content[socials_start:socials_end]
new_socials = """            {[
              { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 012.063-2.065 2.064 2.064 0 012.063 2.065 2.064 2.064 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            """
content = content.replace(old_socials, new_socials)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Footer.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Footer updated: updated links and removed extra socials.")