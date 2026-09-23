with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Box 1
content = content.replace(
    '<div className="md:col-span-2 bg-[#F8FAFC] rounded-3xl border border-[#E0E8F5] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">',
    '<div className="md:col-span-2 animated-border-wrapper group" style={{ "--border-radius": "24px" }}>\n              <div className="animated-border-inner bg-[#F8FAFC] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">'
)

# We need to add the closing div for Box 1. Where does Box 1 end? 
# Before {/* Box 2: Tall Box */}
content = content.replace(
    '            {/* Box 2: Tall Box */}',
    '            </div>\n\n            {/* Box 2: Tall Box */}'
)

# Box 2
content = content.replace(
    '<div className="md:col-span-1 bg-white rounded-3xl border border-[#E0E8F5] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">',
    '<div className="md:col-span-1 animated-border-wrapper group" style={{ "--border-radius": "24px" }}>\n              <div className="animated-border-inner bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">'
)

# Close Box 2
content = content.replace(
    '            {/* Box 3: Square Box */}',
    '            </div>\n\n            {/* Box 3: Square Box */}'
)

# Box 3
content = content.replace(
    '<div className="md:col-span-1 bg-white rounded-3xl border border-[#E0E8F5] p-8 shadow-sm hover:shadow-md transition-shadow group">',
    '<div className="md:col-span-1 animated-border-wrapper group" style={{ "--border-radius": "24px" }}>\n              <div className="animated-border-inner bg-white p-8 shadow-sm hover:shadow-md transition-shadow">'
)

# Close Box 3
content = content.replace(
    '            {/* Box 4: Large Wide Box */}',
    '            </div>\n\n            {/* Box 4: Large Wide Box */}'
)

# Box 4
content = content.replace(
    '<div className="md:col-span-2 bg-[#0A1838] rounded-3xl border border-[#2A3858] p-8 md:p-10 shadow-lg relative overflow-hidden group">',
    '<div className="md:col-span-2 animated-border-wrapper group" style={{ "--border-radius": "24px" }}>\n              <div className="animated-border-inner bg-[#0A1838] p-8 md:p-10 shadow-lg relative overflow-hidden">'
)

# Close Box 4
# Box 4 ends right before           </div>\n        </div>\n      </section>
content = content.replace(
    '              </div>\n            </div>\n\n          </div>\n        </div>\n      </section>',
    '              </div>\n            </div>\n            </div>\n\n          </div>\n        </div>\n      </section>'
)

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\app\page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added moving animations to Bento Grid cards.")