"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { label: "Home", href: "/", key: "home" },
    {
      label: "Solutions", href: "#", key: "solutions",
      columns: [
        { header: "Our Solutions", links: [
          { label: "Medical Coding", href: "/solutions/medical_coding", desc: "Our end-to-end clinical coding tool" }
        ]}
      ],
      promo: { title: "Clinical System Integration", text: "Seamless structured write-back to patient clinical records.", image: "/clinical-workspace-review.png", bg: "from-primary to-primary-dark" },
    },
    { label: "About Us", href: "/about", key: "about" },
    { label: "Contact", href: "/contact", key: "contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled ? "shadow-md shadow-black/5" : ""}`}
      style={{ background: "#FFFFFF", borderBottom: "1px solid #E0E8F5" }}
    >
      <div className="site-container flex items-center justify-between relative" style={{ padding: "10px 24px", minHeight: "76px" }}>
        {/* Brand Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 shrink-0 z-[102]">
          <img src="/logo.png" alt="Ovotech Logo" style={{ height: "52px", width: "auto" }} />
        </Link>

        {/* Mobile Hamburger / Close Button */}
        <button
          className="md:hidden bg-transparent border-none text-[#0A1838] cursor-pointer z-[102] p-2 flex items-center justify-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex md:items-center md:gap-1.5 h-full">
          {navItems.map((item) => (
            <li key={item.key} className="relative group h-full flex items-center">
              <Link
                href={item.href}
                className="flex items-center gap-1.5 transition-all"
                style={{
                  fontSize: "14px",
                  fontWeight: (pathname === item.href || (item.key === "solutions" && pathname.startsWith("/solutions"))) ? 700 : 600,
                  padding: "10px 14px",
                  borderRadius: "8px",
                  color: (pathname === item.href || (item.key === "solutions" && pathname.startsWith("/solutions"))) ? "#02ACEA" : "#0A1838"
                }}
              >
                {item.label}
                {item.columns && (
                  <svg width="10" height="6" viewBox="0 0 10 6" className="transition-transform duration-200 group-hover:rotate-180">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </Link>

              {/* Desktop Mega Menu Dropdown */}
                {item.columns && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[14px] w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-[110]">
                    <div
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
                  </div>
                )}
  
              </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact?type=demo" className="whitespace-nowrap bg-gradient-to-r from-[#02ACEA] to-[#019EE1] text-white font-extrabold px-6 py-2.5 rounded-full shadow-[0_8px_20px_rgba(2,172,234,0.4)] border border-[#02ACEA] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(2,172,234,0.6)] hover:-translate-y-0.5">
            Request a Demo
          </Link>
        </div>
      </div>

      {/* MOBILE FULL-WIDTH DRAWER OVERLAY */}
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
                href="/contact?type=demo"
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
</nav>
  );
}
