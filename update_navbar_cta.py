with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_link = '<Link href="/contact" style={{ background: "#FFFFFF", color: "#0A1838", border: "1px solid #E0E8F5", fontSize: "14px", fontWeight: 700, padding: "12px 26px", borderRadius: "30px", boxShadow: "0 4px 14px rgba(0,0,0,0.05)", transition: "all 0.3s" }}>'
new_link = '<Link href="/contact" className="whitespace-nowrap bg-gradient-to-r from-[#02ACEA] to-[#019EE1] text-white font-extrabold px-6 py-2.5 rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.4)] border border-[#02ACEA] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(2,172,234,0.6)] hover:-translate-y-0.5">'

content = content.replace(old_link, new_link)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Navbar CTA.")