import re

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'r', encoding='utf-8') as f:
    content = f.read()

# I will just write a new MOBILE FULL-WIDTH DRAWER OVERLAY code block
start = content.find("{/* MOBILE FULL-WIDTH DRAWER OVERLAY */}")
end = content.find("</nav>", start)

new_mobile_drawer = """{/* MOBILE FULL-WIDTH DRAWER OVERLAY */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[64px] z-[101]"
          style={{
            background: "#FFFFFF",
            height: "calc(100vh - 64px)",
            overflowY: "auto",
            padding: "24px 20px 40px 20px"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
            {navItems.map((item) => {
              const isDropdownOpen = openDropdown === item.key;
              return (
                <div key={item.key} style={{ width: "100%" }}>
                  {item.columns ? (
                    <button
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : item.key)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "14px 18px",
                        borderRadius: "14px",
                        background: isDropdownOpen ? "#E0E8F5" : "#F4F7FC",
                        border: "1px solid #E0E8F5",
                        color: "#0A1838",
                        fontSize: "16px",
                        fontWeight: 700,
                        textAlign: "left",
                        cursor: "pointer"
                      }}
                    >
                      <span>{item.label}</span>
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 10 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{
                          transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease"
                        }}
                      >
                        <path d="M1 1L5 5L9 1" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "14px 18px",
                        borderRadius: "14px",
                        background: "#F4F7FC",
                        border: "1px solid #E0E8F5",
                        color: "#0A1838",
                        fontSize: "16px",
                        fontWeight: 700
                      }}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Expanded Accordion Content for Mobile */}
                  {item.columns && isDropdownOpen && (
                    <div
                      style={{
                        marginTop: "8px",
                        marginBottom: "12px",
                        background: "#F8FAFC",
                        borderRadius: "16px",
                        padding: "16px",
                        border: "1px solid #E0E8F5",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                      }}
                    >
                      {item.topSection && (
                        <div style={{ paddingBottom: "16px", borderBottom: "1px solid #E0E8F5", marginBottom: "8px" }}>
                          <Link href={item.topSection.href} onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                            <span style={{ fontSize: "18px", fontWeight: 800, color: "#02ACEA" }}>+'</span>
                            <div>
                              <div style={{ fontSize: "16px", fontWeight: 800, color: "#0A1838" }}>{item.topSection.label}</div>
                              <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>{item.topSection.desc}</div>
                            </div>
                          </Link>
                        </div>
                      )}
                      {item.columns.map((col, ci) => (
                        <div key={ci}>
                          {col.header && (
                            <div
                              style={{
                                fontSize: "11px",
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: "1.5px",
                                color: "#02ACEA",
                                marginBottom: "12px",
                                paddingBottom: "4px",
                                borderBottom: "1px solid #E0E8F5"
                              }}
                            >
                              {col.header}
                            </div>
                          )}
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            {col.links.map((link, li) => (
                              <Link
                                key={li}
                                href={link.href}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                                style={{
                                  display: "block",
                                  padding: "8px 10px",
                                  borderRadius: "10px",
                                  background: "#FFFFFF",
                                  border: "1px solid #E0E8F5"
                                }}
                              >
                                <div style={{ fontSize: "14px", fontWeight: 700, color: "#0A1838" }}>
                                  {link.label}
                                </div>
                                <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>
                                  {link.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile CTA Button */}
            <div style={{ marginTop: "20px" }}>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  background: "#0A1838",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: 800,
                  padding: "16px",
                  borderRadius: "14px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                }}
              >
                Book a Platform Demo
              </Link>
            </div>
          </div>
        </div>
      )}
"""

content = content[:start] + new_mobile_drawer + content[end:]

with open(r'd:\Ovotech\ovotech-main\ovotech-main\src\components\Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated mobile drawer to be white-themed.")