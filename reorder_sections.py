with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Split by the exact tags or just find them.
# The layout in JSX is inside <main> or <>...</>.
# It looks like:
# <>
#   <TopBar />
#   <Navbar />
#   <section> HERO </section>
#   <section> WHAT IS </section>
#   <section> COMPARISON </section>
#   <section> WHY WAS </section>
#   <ComplianceSection />
#   <section> CTA </section>
#   <Footer />
# </>

hero_end = content.find("</section>", content.find("1. HERO")) + 10
cta_start = content.find("<section", content.find("5. FINAL CTA"))

middle = content[hero_end:cta_start]

sections = re.findall(r'<section[^>]*>.*?</section>|<ComplianceSection />', middle, flags=re.DOTALL)
# sections[0] = WHAT IS OVOTECH
# sections[1] = COMPARISON
# sections[2] = WHY WAS OVOTECH BUILT
# sections[3] = <ComplianceSection />

what_is = sections[0]
comparison = sections[1]
why_was = sections[2]
security = sections[3]

# Restyle WHAT IS OVOTECH to be white
what_is = what_is.replace('bg-[#0A1838]', 'bg-white')
what_is = what_is.replace('text-white', 'text-[#0A1838]')
# The card inside was: bg-[#112146] border border-[#2A3858]
what_is = what_is.replace('bg-[#112146]', 'bg-[#F8FAFC]')
what_is = what_is.replace('border-[#2A3858]', 'border-[#E0E8F5]')
what_is = what_is.replace('text-gray-300', 'text-[#475569]')
# Maybe remove the radial gradient since it's light now, or change its color?
# background: "radial-gradient(circle, rgba(2, 172, 234, 0.1) 0%, transparent 70%)" is fine.

# Because Comparison was pushed down before with pt-32, let's revert it to py-20
comparison = comparison.replace('className="pt-32 pb-20 bg-white"', 'className="py-20 bg-white"')
comparison = comparison.replace('className="pt-32 mt-12 ', 'className="py-20 ')

# New order: WHAT IS -> WHY WAS -> SECURITY -> COMPARISON
new_middle = f"\n{what_is}\n\n{why_was}\n\n{security}\n\n{comparison}\n\n"

new_content = content[:hero_end] + new_middle + content[cta_start:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Reordered and restyled sections.")