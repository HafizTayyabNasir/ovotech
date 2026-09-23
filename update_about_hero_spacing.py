with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Reduce top margin
content = content.replace('pt-[120px] pb-[80px]', 'pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[80px]')

# 2. Add Book a Demo button
# I will find the end of the text div in the left column
# It ends with:
#               <div className="flex flex-wrap gap-3">
#                 <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
#                   ✅ Authorised Professionals
#                 </div>
#                 <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
#                   ✅ Centralised Review
#                 </div>
#               </div>
#             </div>
old_badges = """              <div className="flex flex-wrap gap-3">
                <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
                  ✅ Authorised Professionals
                </div>
                <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
                  ✅ Centralised Review
                </div>
              </div>"""

new_badges_and_btn = """              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
                  ✅ Authorised Professionals
                </div>
                <div className="bg-[#F4F7FC] px-4 py-2 rounded-full text-[13px] font-bold text-[#0A1838] border border-[#E0E8F5]">
                  ✅ Centralised Review
                </div>
              </div>
              <div className="flex">
                <Link href="/contact" className="whitespace-nowrap bg-gradient-to-r from-[#02ACEA] to-[#019EE1] text-white font-extrabold px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.4)] border border-[#02ACEA] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(2,172,234,0.6)] hover:-translate-y-1 hover:scale-105">
                  Book a Demo
                </Link>
              </div>"""

content = content.replace(old_badges, new_badges_and_btn)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\about\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated About Us Hero.")