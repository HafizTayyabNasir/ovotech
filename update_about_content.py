with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Hero paragraph
old_hero_p = """<p className="text-[#475569] text-[16px] leading-[1.6] mb-8 max-w-lg">
                OvoTech is a clinical document processing and coding workflow platform designed for UK primary care. We bring AI-assisted technology and structured workflows together to help practices manage clinical information more efficiently.
              </p>"""

new_hero_p = """<p className="text-[#475569] text-[16px] leading-[1.6] mb-8 max-w-xl">
                OvoTech is an AI-assisted clinical document processing and coding platform designed for UK primary care. It supports practices in managing incoming clinical correspondence by bringing document review, relevant patient context and AI-assisted coding recommendations into one streamlined workflow. With confidence scores and authorised human review built into the process, OvoTech helps teams process clinical information more efficiently while maintaining control over coding and record updates.
              </p>"""
content = content.replace(old_hero_p, new_hero_p)


# Replace CTA heading
old_cta_h2 = """<h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white mb-6 leading-tight">
                Ready to modernise your <br className="hidden sm:block" /> clinical workflows?
              </h2>"""
new_cta_h2 = """<h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white mb-6 leading-tight">
                Spend less time processing <br className="hidden sm:block" /> clinical correspondence.
              </h2>"""
content = content.replace(old_cta_h2, new_cta_h2)


# Replace CTA paragraph
old_cta_p = """<p className="text-[#94A3B8] text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
                See exactly how OvoTech can reduce administrative burden and streamline correspondence review in your GP practice.
              </p>"""
new_cta_p = """<p className="text-[#94A3B8] text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
                Streamline document review and coding with OvoTech, while keeping your team in control of every clinical record update.
              </p>"""
content = content.replace(old_cta_p, new_cta_p)


# Replace Button text
old_btn = 'hover:-translate-y-1 hover:scale-105">Request a Demo</Link>'
new_btn = 'hover:-translate-y-1 hover:scale-105">Book a Demo</Link>'
# But wait, there's only one CTA in the About page that has this button?
# We want to replace Request a Demo -> Book a Demo only in the CTA section. 
# The CTA section has "Book a Demo". The Hero section doesn't have a button. Wait, earlier I globally changed CTA buttons. Let's just do a specific replace.
# Let's replace only the one that comes after `Streamline document review`
start_idx = content.find("Streamline document review")
if start_idx != -1:
    btn_idx = content.find(">Request a Demo</Link>", start_idx)
    if btn_idx != -1:
        content = content[:btn_idx] + ">Book a Demo</Link>" + content[btn_idx+22:]


with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated content in About page.")