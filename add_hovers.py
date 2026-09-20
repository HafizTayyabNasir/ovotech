import re

path = 'src/app/third/page.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1 & 2: Hero buttons
content = content.replace(
    '<Link href="/contact" className="whitespace-nowrap" style={{ background: "#FFFFFF", color: "#0A1838", fontWeight: 700, padding: "14px 32px", borderRadius: "30px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)", transition: "all 0.3s", border: "2px solid #E0E8F5" }}>',
    '<Link href="/contact" className="whitespace-nowrap bg-white text-[#0A1838] font-bold px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.05)] border-2 border-[#E0E8F5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#02ACEA] hover:text-[#02ACEA]">'
)

content = content.replace(
    '<button onClick={() => document.getElementById(\'workflow\').scrollIntoView({ behavior: \'smooth\' })} className="whitespace-nowrap" style={{ background: "transparent", color: "#0A1838", fontWeight: 700, padding: "14px 32px", borderRadius: "30px", transition: "all 0.3s", border: "2px solid #E0E8F5" }}>',
    '<button onClick={() => document.getElementById(\'workflow\').scrollIntoView({ behavior: \'smooth\' })} className="whitespace-nowrap bg-transparent text-[#0A1838] font-bold px-8 py-3.5 rounded-full border-2 border-[#E0E8F5] transition-all duration-300 hover:bg-[#F4F7FC] hover:-translate-y-1 hover:shadow-md">'
)

# Fix 3: Section 3 Approve button
content = content.replace(
    'hover:bg-[#028bbd] transition-colors',
    'hover:bg-[#028bbd] transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
)

# Fix 4, 5, 6: Coder action buttons
content = content.replace(
    '<button className="flex-1 py-2 bg-[#02ACEA] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#028bbd]">Accept</button>',
    '<button className="flex-1 py-2 bg-[#02ACEA] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#028bbd] transition-all hover:-translate-y-0.5 hover:shadow-md">Accept</button>'
)
content = content.replace(
    '<button className="flex-1 py-2 bg-white border border-[#E0E8F5] text-[#0A1838] text-[13px] font-bold rounded-lg hover:bg-gray-50">Amend</button>',
    '<button className="flex-1 py-2 bg-white border border-[#E0E8F5] text-[#0A1838] text-[13px] font-bold rounded-lg hover:bg-gray-50 transition-all hover:-translate-y-0.5 hover:shadow-md">Amend</button>'
)
content = content.replace(
    '<button className="flex-1 py-2 bg-white border border-red-200 text-red-600 text-[13px] font-bold rounded-lg hover:bg-red-50">Reject</button>',
    '<button className="flex-1 py-2 bg-white border border-red-200 text-red-600 text-[13px] font-bold rounded-lg hover:bg-red-50 transition-all hover:-translate-y-0.5 hover:shadow-md">Reject</button>'
)

# Fix 7: Security link
content = content.replace(
    '<Link href="/security" className="inline-block px-8 py-4 bg-[#0A1838] text-white font-bold rounded-full hover:bg-gray-900 transition-colors shadow-md relative z-10">',
    '<Link href="/security" className="inline-block px-8 py-4 bg-[#0A1838] text-white font-bold rounded-full hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative z-10">'
)

# Fix 8: Final CTA Secondary link
content = content.replace(
    '<Link href="/contact" className="px-8 py-4 bg-white border-2 border-[#E0E8F5] text-[#0A1838] font-bold rounded-full hover:bg-gray-50 transition-all">',
    '<Link href="/contact" className="px-8 py-4 bg-white border-2 border-[#E0E8F5] text-[#0A1838] font-bold rounded-full hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#02ACEA] hover:text-[#02ACEA]">'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated hover effects for all buttons.")

