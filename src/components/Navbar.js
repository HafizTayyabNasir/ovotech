"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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
    {
      label: "Platform", href: "/solutions", key: "platform",
      columns: [
        { header: "Core Capabilities", links: [
          { label: "Review Queue", href: "/solutions#review-queue", desc: "Workload management for incoming clinical documents" },
          { label: "Clinical Review Workspace", href: "/solutions#clinical-review", desc: "Unified document, extracted info & SNOMED CT coding" },
          { label: "Patient History Context", href: "/solutions#patient-history", desc: "Relevant patient records alongside documents" },
        ]},
        { header: "Integration & Governance", links: [
          { label: "SNOMED CT Coding Support", href: "/solutions#snomed-coding", desc: "Assisted concept recognition & code suggestions" },
          { label: "EMIS Web Integration", href: "/solutions#emis-integration", desc: "Structured write-back to patient clinical records" },
          { label: "Value & KPI Tracking", href: "/solutions#kpi-tracking", desc: "Demonstrate time saved & released practice capacity" },
        ]},
      ],
      promo: { title: "EMIS Web Integration", text: "Seamless structured write-back to patient clinical records.", bg: "from-primary to-primary-dark" },
    },
    {
      label: "Who We Help", href: "/who-we-help", key: "who-we-help",
      columns: [
        { header: "Healthcare Providers", links: [
          { label: "GP Practices", href: "/who-we-help/gp-practices", desc: "Tailored document processing for UK GP practices" },
          { label: "Primary Care Networks", href: "/who-we-help/primary-care-networks", desc: "Scale clinical document workflows across PCNs" },
          { label: "NHS Healthcare Providers", href: "/who-we-help/nhs-providers", desc: "NHS-accredited compliant document processing" },
        ]},
      ],
      promo: { title: "NHS Accredited", text: "Assisted workflow platform built for UK primary care.", bg: "from-green-600 to-green-900" },
    },
    { label: "How it Works", href: "/how-it-works", key: "how-it-works" },
    {
      label: "Resources", href: "/resources", key: "resources",
      columns: [
        { header: "Learn & Discover", links: [
          { label: "Case Studies", href: "/case-studies", desc: "Real results from GP practice partners" },
          { label: "Blog & Insights", href: "/blog", desc: "Latest updates on clinical document processing" },
          { label: "Help Centre", href: "/help-centre", desc: "Guides, FAQs & support resources" },
        ]},
      ],
      promo: { title: "Human Review", text: "Assisted workflow empowering authorized reviewers before record commit.", bg: "from-primary to-blue-900" },
    },
    {
      label: "About", href: "/about", key: "about",
      columns: [
        { header: "Company", links: [
          { label: "About Us", href: "/about", desc: "Our mission & story" },
          { label: "Careers", href: "/careers", desc: "Join the Ovotech team" },
          { label: "Contact Us", href: "/contact", desc: "Get in touch with our team" },
        ]},
        { header: "Legal", links: [
          { label: "Security & Compliance", href: "/security-compliance", desc: "DSPT, DCB0129 & GDPR compliance" },
          { label: "Privacy Policy", href: "/privacy-policy", desc: "How we handle patient data" },
          { label: "Terms & Conditions", href: "/terms", desc: "Our service agreement" },
        ]},
      ],
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled ? "shadow-md shadow-black/5" : ""}`}
      style={{ background: "#FFFFFF", borderBottom: "1px solid #E0E8F5" }}
    >
      <div className="site-container flex items-center justify-between relative" style={{ padding: "14px 24px", minHeight: "64px" }}>
        {/* Brand Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 shrink-0 z-[102]">
          <img src="/logo.webp" alt="Ovotech Logo" style={{ height: "32px", width: "auto" }} />
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
        <ul className="hidden md:flex md:items-center md:gap-1">
          {navItems.map((item) => (
            <li key={item.key} className="relative group md:static">
              <Link
                href={item.href}
                className="text-[#0A1838] hover:text-[#00A8E8] flex items-center gap-1.5 transition-all"
                style={{ fontSize: "14px", fontWeight: 600, padding: "10px 14px", borderRadius: "8px" }}
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
                <div
                  className="absolute top-full left-0 w-full opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto"
                  style={{
                    background: "#fff", borderRadius: "0 0 16px 16px",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
                    border: "1px solid #E0E8F5", borderTop: "none",
                  }}
                >
                  <div className="flex" style={{ minHeight: "280px" }}>
                    <div className="flex-1 grid grid-cols-2" style={{ padding: "32px 40px", gap: "40px" }}>
                      {item.columns.map((col, ci) => (
                        <div key={ci}>
                          <h3 style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#00A8E8", marginBottom: "16px", paddingBottom: "8px", borderBottom: "2px solid #00A8E8", display: "inline-block" }}>
                            {col.header}
                          </h3>
                          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {col.links.map((link, li) => (
                              <Link
                                key={li} href={link.href}
                                style={{ display: "block", padding: "10px 12px", borderRadius: "8px", transition: "background 0.2s" }}
                                className="hover:bg-[#F4F7FC]"
                              >
                                <span style={{ fontSize: "14px", fontWeight: 600, color: "#0A1838", display: "block" }}>{link.label}</span>
                                <span style={{ fontSize: "12px", color: "#64748B", display: "block", marginTop: "2px" }}>{link.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {item.promo && (
                      <div
                        style={{
                          width: "300px", background: `linear-gradient(135deg, #09132B 0%, #0F214A 100%)`,
                          color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px", position: "relative", overflow: "hidden",
                        }}
                      >
                        <div style={{ position: "absolute", right: "-40px", top: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(0,168,232,0.15)" }} />
                        <h4 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "10px", color: "#FFFFFF" }}>{item.promo.title}</h4>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>{item.promo.text}</p>
                      </div>
                    )}
                  </div>
                  <div style={{ background: "#F4F7FC", padding: "16px 40px", display: "flex", alignItems: "center", gap: "20px", borderTop: "1px solid #E0E8F5" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#0A1838" }}>Ready to transform your practice?</span>
                    <Link href="/contact" style={{ background: "#00A8E8", color: "#fff", fontSize: "14px", fontWeight: 700, padding: "8px 20px", borderRadius: "8px" }}>
                      Let&apos;s Talk
                    </Link>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact" style={{ background: "#00A8E8", color: "#FFFFFF", fontSize: "14px", fontWeight: 700, padding: "10px 22px", borderRadius: "10px", display: "inline-block", boxShadow: "0 4px 14px rgba(0, 168, 232, 0.35)", transition: "all 0.3s" }}>
            Request a Demo
          </Link>
        </div>
      </div>

      {/* MOBILE FULL-WIDTH DRAWER OVERLAY */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[64px] z-[101]"
          style={{
            background: "#09132B",
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
                        background: isDropdownOpen ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "#FFFFFF",
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
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "#FFFFFF",
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
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "16px",
                        padding: "16px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                      }}
                    >
                      {item.columns.map((col, ci) => (
                        <div key={ci}>
                          <div
                            style={{
                              fontSize: "11px",
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "1.5px",
                              color: "#A594FF",
                              marginBottom: "12px",
                              paddingBottom: "4px",
                              borderBottom: "1px solid rgba(165, 148, 255, 0.2)"
                            }}
                          >
                            {col.header}
                          </div>
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
                                  background: "rgba(255, 255, 255, 0.04)"
                                }}
                              >
                                <div style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>
                                  {link.label}
                                </div>
                                <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)", marginTop: "2px" }}>
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
                  background: "#FFFFFF",
                  color: "#362D7E",
                  fontSize: "16px",
                  fontWeight: 800,
                  padding: "16px",
                  borderRadius: "14px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
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
