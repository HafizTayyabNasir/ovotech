import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace the entire Desktop Mega Menu Dropdown section.
idx = content.find("{/* Desktop Mega Menu Dropdown */}")
end_idx = content.find("</li>", idx) # The dropdown is inside the <li>

new_dropdown = """{/* Desktop Mega Menu Dropdown */}
                {item.columns && (
                  <div
                    className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"
                    style={{
                      background: "#fff", borderRadius: "16px",
                      boxShadow: "0 25px 50px rgba(10,24,56,0.1)",
                      border: "1px solid #E0E8F5",
                      overflow: "hidden"
                    }}
                  >
                    <Link href={item.columns[0].links[0].href} className="flex flex-col group/card transition-colors hover:bg-[#F8FAFC]">
                      {/* Image Preview */}
                      <div className="w-full h-[180px] relative overflow-hidden bg-[#E8F6FD] border-b border-[#E0E8F5]">
                        <img 
                          src={item.promo?.image || "/clinical-workspace-review.png"} 
                          alt="Preview" 
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                          className="transition-transform duration-700 group-hover/card:scale-105" 
                        />
                      </div>
                      
                      {/* Text Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="text-[17px] font-extrabold text-[#0A1838]">
                            {item.columns[0].links[0].label}
                          </h3>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#019EE1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-3 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </div>
                        <p className="text-[14px] text-[#64748B] leading-relaxed">
                          {item.columns[0].links[0].desc}
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
  """

content = content[:idx] + new_dropdown + "\n              </li>" + content[end_idx+5:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Dropdown redesigned as a compact beautiful card.")